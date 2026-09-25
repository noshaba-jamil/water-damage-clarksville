// Save as: app/api/admin/image-audit/route.ts
import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/auth"; // same import as your other admin routes

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://water-damage-clarksville.com").replace(/\/$/, "");
const KB = 1024;

const dec = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const attr = (tag: string, name: string) => {
  const m = new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, "i").exec(tag);
  return m ? dec(m[1] ?? m[2] ?? "") : null; // null = attribute missing, "" = empty
};
const pageMeta = (html: string, key: string) => {
  const a = new RegExp(`<meta[^>]+(?:name|property)=["']${key}["'][^>]*content=(?:"([^"]*)"|'([^']*)')`, "i").exec(html);
  if (a) return dec(a[1] ?? a[2] ?? "");
  const b = new RegExp(`<meta[^>]+content=(?:"([^"]*)"|'([^']*)')[^>]*(?:name|property)=["']${key}["']`, "i").exec(html);
  return b ? dec(b[1] ?? b[2] ?? "") : "";
};

async function pool<T, R>(items: T[], n: number, fn: (x: T) => Promise<R>) {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

async function get(url: string) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 10000);
  try {
    const res = await fetch(url, { cache: "no-store", signal: ctrl.signal, headers: { "user-agent": "WDR-Image-Audit/1.0" } });
    return { res, buf: Buffer.from(await res.arrayBuffer()) };
  } catch { return null; } finally { clearTimeout(t); }
}

// Read pixel size from the first bytes of PNG, GIF, JPEG and WebP files.
function dims(b: Buffer): { w: number; h: number } | null {
  try {
    if (b.length > 24 && b[0] === 0x89 && b[1] === 0x50) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
    if (b.length > 10 && b.toString("ascii", 0, 3) === "GIF") return { w: b.readUInt16LE(6), h: b.readUInt16LE(8) };
    if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
      let i = 2;
      while (i + 9 < b.length) {
        if (b[i] !== 0xff) break;
        const m = b[i + 1];
        if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
    if (b.length > 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
      const k = b.toString("ascii", 12, 16);
      if (k === "VP8 ") return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
      if (k === "VP8L") { const b0 = b[21], b1 = b[22], b2 = b[23], b3 = b[24]; return { w: 1 + (((b1 & 0x3f) << 8) | b0), h: 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)) }; }
      if (k === "VP8X") return { w: 1 + (b[24] | (b[25] << 8) | (b[26] << 16)), h: 1 + (b[27] | (b[28] << 8) | (b[29] << 16)) };
    }
  } catch {}
  return null;
}

function resolve(src: string, pageUrl: string) {
  try {
    const u = new URL(dec(src), pageUrl);
    const inner = u.pathname === "/_next/image" ? u.searchParams.get("url") : null;
    if (inner) { const o = new URL(inner, SITE); return { url: o.toString(), viaNext: true, local: o.origin === new URL(SITE).origin ? o.pathname : null }; }
    return { url: u.toString(), viaNext: false, local: u.origin === new URL(SITE).origin ? u.pathname : null };
  } catch { return null; }
}

function altCheck(alt: string | null) {
  const issues: string[] = [], notes: string[] = [];
  if (alt === null || !alt.trim()) issues.push("Missing alt text");
  else {
    if (/\.(jpe?g|png|webp|avif|gif|svg)\b|^(img|dsc|image)[-_ ]?\d/i.test(alt)) issues.push("Alt text is a file name");
    if (alt.trim().length < 8) notes.push("Alt text is very short");
    if (alt.length > 125) notes.push("Alt text is over 125 characters");
    if (/^(image|picture|photo|graphic) of\b/i.test(alt)) notes.push('Starts with "image of": remove it');
    if ((alt.match(/,/g) || []).length >= 3) notes.push("Alt text looks keyword-stuffed");
  }
  return { issues, notes };
}

type Usage = { page: string; alt: string | null; loading: string; hasDims: boolean; og: boolean; issues: string[]; notes: string[] };
type Entry = { url: string; viaNext: boolean; local: string | null; usages: Usage[] };

export async function GET() {
  if (!(await verifyAdminAuth())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // 1. Pages from the sitemap
  let urls: string[] = [];
  try {
    const xml = await (await fetch(`${SITE}/sitemap.xml`, { cache: "no-store" })).text();
    const host = new URL(SITE).host;
    urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => dec(m[1]).trim()).filter((u) => { try { return new URL(u).host === host; } catch { return false; } });
  } catch {}
  if (!urls.length) urls = [SITE];
  urls = Array.from(new Set(urls)).slice(0, 80);

  const pages = await pool(urls, 6, async (url) => {
    const r = await get(url);
    return { url, html: r && r.res.ok ? r.buf.toString("utf8") : "" };
  });

  // 2. Collect every image and where it is used
  const map = new Map<string, Entry>();
  const useImage = (r: ReturnType<typeof resolve>, u: Usage) => {
    if (!r) return;
    const e = map.get(r.url) || { url: r.url, viaNext: r.viaNext, local: r.local, usages: [] };
    e.usages.push(u);
    map.set(r.url, e);
  };
  for (const p of pages) {
    if (!p.html) continue;
    const page = p.url.replace(/^https?:\/\/[^/]+/, "") || "/";
    for (const m of Array.from(p.html.matchAll(/<img\b[^>]*>/gi))) {
      const tag = m[0];
      const src = attr(tag, "src");
      if (!src || src.startsWith("data:")) continue;
      if (/aria-hidden=["']true|role=["']presentation/i.test(tag)) continue;
      const alt = attr(tag, "alt");
      const { issues, notes } = altCheck(alt);
      useImage(resolve(src, p.url), { page, alt, loading: attr(tag, "loading") || "default", hasDims: !!(attr(tag, "width") && attr(tag, "height")), og: false, issues, notes });
    }
    const og = pageMeta(p.html, "og:image");
    if (og) useImage(resolve(og, p.url), { page, alt: null, loading: "-", hasDims: true, og: true, issues: [], notes: [] });
  }

  // 3. Measure each unique image file once
  const images = await pool(Array.from(map.values()), 6, async (e) => {
    const r = await get(e.url);
    const issues: string[] = [], notes: string[] = [];
    const name = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || e.url);
    const ct = r?.res.headers.get("content-type") || "";
    const format = ct.includes("jpeg") ? "jpg" : ct.includes("png") ? "png" : ct.includes("webp") ? "webp" : ct.includes("avif") ? "avif" : ct.includes("svg") ? "svg" : ct.includes("gif") ? "gif" : (name.split(".").pop() || "?").toLowerCase();
    const httpStatus = r?.res.status || 0;
    const bytes = r?.buf.length || 0;
    const d = r && r.res.ok ? dims(r.buf) : null;

    if (!r || !r.res.ok) issues.push(`Image does not load (${httpStatus || "no response"})`);
    else {
      if (bytes > 500 * KB) issues.push("Over 500 KB: compress it");
      else if (bytes > 200 * KB) notes.push("Over 200 KB: could be smaller");
      if ((format === "jpg" || format === "png") && !e.viaNext) issues.push("Use WebP or AVIF, or load it with next/image");
      if ((format === "jpg" || format === "png") && e.viaNext) notes.push("Source is JPG/PNG. Next.js converts it, but a WebP source is lighter");
      if (d && d.w > 2400) notes.push(`Larger than needed (${d.w}px wide)`);
      const base = name.replace(/\.[a-z0-9]+$/i, "");
      if (/^(img|dsc|dscn|image|photo|pic|screenshot|untitled|download|unnamed)[-_ ]?\(?\d*\)?$/i.test(base) || !/[a-z]{3}/i.test(base) || /^[a-f0-9-]{20,}$/i.test(base)) notes.push("File name is not descriptive: use words like water-damage-technician-clarksville");
      if (e.usages.some((u) => u.og) && d && d.w < 1200) notes.push("Open Graph image should be about 1200x630");
    }

    const thumb = e.viaNext && e.local ? `/_next/image?url=${encodeURIComponent(e.local)}&w=128&q=40` : e.local || e.url;
    const bad = issues.length + e.usages.reduce((a, u) => a + u.issues.length, 0);
    const soft = notes.length + e.usages.reduce((a, u) => a + u.notes.length, 0);
    return { url: e.url, name, thumb, format, bytes, width: d?.w ?? null, height: d?.h ?? null, viaNext: e.viaNext, httpStatus, issues, notes, usages: e.usages, status: bad ? "fix" : soft ? "note" : "ok" };
  });

  // 4. Per-page summary
  const byPage = new Map<string, { count: number; bytes: number; issues: number }>();
  for (const img of images) {
    const seen = new Set<string>();
    for (const u of img.usages) {
      const s = byPage.get(u.page) || { count: 0, bytes: 0, issues: 0 };
      if (!seen.has(u.page)) { s.count++; s.bytes += img.bytes; s.issues += img.issues.length; seen.add(u.page); }
      s.issues += u.issues.length;
      byPage.set(u.page, s);
    }
  }
  const pageSummary = Array.from(byPage.entries()).map(([page, s]) => ({ page, ...s, done: s.issues === 0 })).sort((a, b) => b.issues - a.issues);

  return NextResponse.json({ generatedAt: new Date().toISOString(), pages: pages.filter((p) => p.html).length, images, pageSummary });
}