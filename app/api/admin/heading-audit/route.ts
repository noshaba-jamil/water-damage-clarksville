// Save as: app/api/admin/heading-audit/route.ts
import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/auth"; // same import as your other admin routes

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://water-damage-clarksville.com").replace(/\/$/, "");

const dec = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const text = (h: string) => dec(h.replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

async function pool<T, R>(items: T[], n: number, fn: (x: T) => Promise<R>) {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

async function audit(url: string) {
  const page = url.replace(/^https?:\/\/[^/]+/, "") || "/";
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 9000);
  try {
    const res = await fetch(url, { cache: "no-store", signal: ctrl.signal, headers: { "user-agent": "WDR-Heading-Audit/1.0" } });
    if (!res.ok) return { page, error: `HTTP ${res.status}` };
    const html = await res.text();
    const main = (/<main[\s\S]*?<\/main>/i.exec(html) || [html])[0];

    const outline = Array.from(main.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)).map((m) => ({ level: Number(m[1]), text: text(m[2]), flag: null as string | null }));
    const issues: string[] = [], notes: string[] = [];

    if (!outline.length) issues.push("No headings found in the main content");
    const h1 = outline.filter((h) => h.level === 1).length;
    if (outline.length && h1 === 0) issues.push("No H1");
    if (h1 > 1) issues.push(`${h1} H1 tags: use exactly one`);
    if (outline.length && outline[0].level !== 1) {
      outline[0].flag = `First heading is H${outline[0].level}, should be H1`;
      issues.push(outline[0].flag);
    }

    let skips = 0;
    for (let i = 1; i < outline.length; i++) {
      const prev = outline[i - 1].level, cur = outline[i].level;
      if (cur > prev + 1) {
        skips++;
        outline[i].flag = `Skips from H${prev} to H${cur}`;
        issues.push(`${outline[i].flag}: "${outline[i].text.slice(0, 60)}"`);
      }
    }
    outline.forEach((h) => {
      if (!h.text) { h.flag = h.flag || "Empty heading"; issues.push(`Empty H${h.level}`); }
      else if (h.text.length > 70) notes.push(`Long H${h.level} (${h.text.length} characters): "${h.text.slice(0, 50)}…"`);
    });
    const seen = new Map<string, number>();
    outline.forEach((h) => { const k = `${h.level}:${h.text.toLowerCase()}`; if (h.text) seen.set(k, (seen.get(k) || 0) + 1); });
    seen.forEach((n, k) => { if (n > 1) notes.push(`Repeated H${k.split(":")[0]}: "${k.slice(2, 60)}" (${n} times)`); });
    if (outline.length && !outline.some((h) => h.level === 2)) notes.push("No H2 sections");

    return { page, count: outline.length, h1, skips, done: issues.length === 0, issues, notes, outline };
  } catch (e: any) {
    return { page, error: e?.name === "AbortError" ? "Timed out" : "Fetch failed" };
  } finally {
    clearTimeout(timer);
  }
}

export async function GET() {
  if (!(await verifyAdminAuth())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let urls: string[] = [];
  try {
    const xml = await (await fetch(`${SITE}/sitemap.xml`, { cache: "no-store" })).text();
    const host = new URL(SITE).host;
    urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => dec(m[1]).trim()).filter((u) => { try { return new URL(u).host === host; } catch { return false; } });
  } catch {}
  if (!urls.length) urls = [SITE];
  urls = Array.from(new Set(urls)).slice(0, 80);

  const results = await pool(urls, 6, audit);
  return NextResponse.json({ generatedAt: new Date().toISOString(), pages: results.length, results });
}