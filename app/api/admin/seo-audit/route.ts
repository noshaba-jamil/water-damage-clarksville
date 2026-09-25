// Save as: app/api/admin/seo-audit/route.ts
import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/auth"; // change to the real path of your auth file

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://water-damage-clarksville.com").replace(/\/$/, "");
const PLACES = ["Fort Campbell", "Montgomery County", "Oak Grove", "Hopkinsville", "Sango", "St. Bethlehem", "Springfield", "Ashland City", "Dover", "Dickson", "Woodlawn", "Palmyra", "Pembroke", "Cunningham", "Adams"];
const CLAIMS = /#1\b|number one|500\+|since 2014|10\+ years|preferred vendor|preferred contractor|best in|guarantee(d)?/gi;
const LOCAL_TYPES = ["LocalBusiness", "ProfessionalService", "Organization", "HomeAndConstructionBusiness", "EmergencyService"];

type Dim = "seo" | "aeo" | "geo" | "llmo";

const dec = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (h: string) => dec(h.replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const norm = (u: string) => u.replace(/\/+$/, "").toLowerCase();

function meta(html: string, key: string) {
  const a = new RegExp(`<meta[^>]+(?:name|property)=["']${key}["'][^>]*content=(?:"([^"]*)"|'([^']*)')`, "i").exec(html);
  if (a) return dec(a[1] ?? a[2] ?? "");
  const b = new RegExp(`<meta[^>]+content=(?:"([^"]*)"|'([^']*)')[^>]*(?:name|property)=["']${key}["']`, "i").exec(html);
  return b ? dec(b[1] ?? b[2] ?? "") : "";
}

async function pool<T, R>(items: T[], n: number, fn: (x: T) => Promise<R>) {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

async function audit(url: string) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 9000);
  try {
    const res = await fetch(url, { cache: "no-store", signal: ctrl.signal, headers: { "user-agent": "WDR-SEO-Audit/1.0" } });
    const html = await res.text();
    if (!res.ok) return { url, status: res.status, error: `HTTP ${res.status}` };

    const s = { seo: 0, aeo: 0, geo: 0, llmo: 0 };
    const missing: string[] = [];
    const add = (d: Dim, label: string, max: number, earned: number) => { s[d] += earned; if (earned < max) missing.push(`${d.toUpperCase()}: ${label}`); };

    const title = strip((/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html) || [])[1] || "");
    const desc = meta(html, "description");
    const robots = meta(html, "robots").toLowerCase();
    const canonRaw = (/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i.exec(html) || [])[1] || "";
    const canonical = canonRaw.startsWith("/") ? SITE + canonRaw : canonRaw;
    const mainHtml = (/<main[\s\S]*?<\/main>/i.exec(html) || [html])[0];
    const mainText = strip(mainHtml);
    const fullText = strip(html);
    const words = mainText ? mainText.split(" ").length : 0;

    const h1s = Array.from(mainHtml.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)).map((m) => strip(m[1]));
    const h2s = Array.from(mainHtml.matchAll(/<h2[^>]*>/gi)).length;
    const questions = Array.from(mainHtml.matchAll(/<(h[2-4]|summary|strong|dt|button)[^>]*>([\s\S]*?)<\/\1>/gi))
      .map((m) => strip(m[2])).filter((t) => t.endsWith("?") && t.length > 15 && t.length < 160).length;
    const jump = Array.from(mainHtml.matchAll(/href=["']#([^"']+)["']/gi)).filter((m) => m[1] !== "main-content").length;
    const lists = Array.from(mainHtml.matchAll(/<(ul|ol)[\s>]/gi)).length;
    const paras = Array.from(mainHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)).slice(0, 8).map((m) => strip(m[1]).split(" ").length);
    const directAnswer = paras.some((n) => n >= 25 && n <= 70);

    const imgs = Array.from(html.matchAll(/<img\b[^>]*>/gi)).map((m) => m[0]);
    const noAlt = imgs.filter((t) => !/\balt=["'][^"']+["']/i.test(t)).length;
    const hrefs = Array.from(html.matchAll(/href=["']([^"'#][^"']*)["']/gi)).map((m) => m[1]);
    const internal = new Set(hrefs.filter((h) => h.startsWith("/") || h.startsWith(SITE)));
    const internalArr = Array.from(internal);
    const locLinks = internalArr.filter((h) => h.includes("/locations/") || h.includes("/service-areas")).length;
    const hasAbout = internalArr.some((h) => /\/about\/?$/.test(h.replace(SITE, "")));
    const hasContact = internalArr.some((h) => /\/contact\/?$/.test(h.replace(SITE, "")));

    const types = new Set<string>();
    let raw = "", ldCount = 0, ldValid = 0;
    const walk = (n: any): void => {
      if (!n || typeof n !== "object") return;
      if (Array.isArray(n)) return n.forEach(walk);
      const t = n["@type"];
      if (t) (Array.isArray(t) ? t : [t]).forEach((x: string) => types.add(x));
      Object.values(n).forEach(walk);
    };
    for (const m of Array.from(html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi))) {
      ldCount++;
      try { walk(JSON.parse(m[1].trim())); raw += m[1]; ldValid++; } catch {}
    }
    const hasType = (...n: string[]) => n.some((x) => types.has(x));
    const hasRating = /"aggregateRating"/.test(raw);
    const placesFound = PLACES.filter((p) => new RegExp(p.replace(".", "\\."), "i").test(mainText)).length;

    // SEO (100)
    add("seo", "Title present", 6, title ? 6 : 0);
    add("seo", "Title 30-60 characters", 9, title.length >= 30 && title.length <= 60 ? 9 : 0);
    add("seo", "Meta description present", 5, desc ? 5 : 0);
    add("seo", "Meta description 120-160 characters", 7, desc.length >= 120 && desc.length <= 160 ? 7 : 0);
    add("seo", "Exactly one H1", 10, h1s.length === 1 ? 10 : 0);
    add("seo", "Self-referencing canonical", 10, norm(canonical) === norm(url) ? 10 : 0);
    add("seo", "Indexable (no noindex)", 8, robots.includes("noindex") ? 0 : 8);
    add("seo", "600+ words of main content", 12, words >= 600 ? 12 : words >= 300 ? 6 : 0);
    add("seo", "3+ H2 sections", 8, h2s >= 3 ? 8 : 0);
    add("seo", "All images have alt text", 8, noAlt === 0 ? 8 : 0);
    add("seo", "10+ internal links", 10, internal.size >= 10 ? 10 : internal.size >= 5 ? 5 : 0);
    add("seo", "Open Graph title, description, image", 7, meta(html, "og:title") && meta(html, "og:description") && meta(html, "og:image") ? 7 : 0);

    // AEO (100)
    add("aeo", "FAQPage schema", 20, hasType("FAQPage") ? 20 : 0);
    add("aeo", "3+ question-style headings", 20, questions >= 3 ? 20 : questions >= 1 ? 10 : 0);
    add("aeo", "Table of contents / jump links", 10, jump >= 3 ? 10 : 0);
    add("aeo", "2+ bulleted or numbered lists", 10, lists >= 2 ? 10 : 0);
    add("aeo", "Short direct-answer paragraph near the top", 15, directAnswer ? 15 : 0);
    add("aeo", "4+ H2 sections", 10, h2s >= 4 ? 10 : 0);
    add("aeo", "Specific numbers (prices, hours, minutes)", 5, /\$\s?\d|\d+\s?(minutes|hours|hrs|days)\b/i.test(mainText) ? 5 : 0);
    add("aeo", "Service, HowTo or Article schema", 10, hasType("Service", "HowTo", "Article", "BlogPosting") ? 10 : 0);

    // GEO: local signals on the page (100)
    add("geo", "City in title", 10, /clarksville/i.test(title) ? 10 : 0);
    add("geo", "City in H1", 10, /clarksville/i.test(h1s[0] || "") ? 10 : 0);
    add("geo", "Phone as a tap-to-call link", 15, /href=["']tel:/i.test(html) ? 15 : 0);
    add("geo", "Street address in text", 8, /215 Legion/i.test(fullText) ? 8 : 0);
    add("geo", "Phone number in text", 7, /271[-.\s)]*2350/.test(fullText) ? 7 : 0);
    add("geo", "Local business schema with address", 15, hasType(...LOCAL_TYPES) && raw.includes('"address"') ? 15 : 0);
    add("geo", "3+ named nearby places in content", 15, placesFound >= 3 ? 15 : placesFound >= 1 ? 7 : 0);
    add("geo", "Embedded Google map", 5, /<iframe[^>]+(google\.com\/maps|maps\.google)/i.test(html) ? 5 : 0);
    add("geo", "BreadcrumbList schema", 5, hasType("BreadcrumbList") ? 5 : 0);
    add("geo", "GeoCoordinates in schema", 5, raw.includes('"GeoCoordinates"') ? 5 : 0);
    add("geo", "3+ links to location pages", 5, locLinks >= 3 ? 5 : 0);

    // LLMO: machine-readable entity and trust signals (100)
    add("llmo", "300+ words readable in server HTML", 15, words >= 300 ? 15 : words >= 150 ? 8 : 0);
    add("llmo", "Valid JSON-LD present", 15, ldCount > 0 && ldValid === ldCount ? 15 : 0);
    add("llmo", "Business entity schema", 10, hasType(...LOCAL_TYPES) ? 10 : 0);
    add("llmo", "sameAs links to real profiles", 10, /"sameAs"/.test(raw) ? 10 : 0);
    add("llmo", "Service, Article or FAQ schema", 10, hasType("Service", "Article", "BlogPosting", "FAQPage") ? 10 : 0);
    add("llmo", "Business name stated in text", 5, /clarksville (water damage|restoration)/i.test(fullText) ? 5 : 0);
    add("llmo", "License or certificate number shown", 15, /(licen[sc]e|certificate|cert\.?)\s*(no\.?|number|#)\s*[:#]?\s*[A-Z0-9-]{4,}/i.test(fullText) ? 15 : 0);
    add("llmo", "Links to About and Contact", 5, hasAbout && hasContact ? 5 : 0);
    add("llmo", "3+ H2 sections", 5, h2s >= 3 ? 5 : 0);
    add("llmo", "No unsupported rating markup", 10, hasRating ? 0 : 10);

    const flags: string[] = [];
    if (robots.includes("noindex")) flags.push("Page is noindex");
    if (hasRating) flags.push("aggregateRating markup found: remove unless real reviews are visible");
    if (h1s.length !== 1) flags.push(`${h1s.length} H1 tags`);
    if (title.length > 60) flags.push(`Title is ${title.length} characters`);
    if (noAlt) flags.push(`${noAlt} image(s) missing alt text`);
    const claims = Array.from(new Set((fullText.match(CLAIMS) || []).map((c) => c.toLowerCase())));
    if (claims.length) flags.push(`Claims to prove: ${claims.join(", ")}`);

    return { url, status: res.status, title, titleLen: title.length, metaLen: desc.length, words, scores: s, missing, flags };
  } catch (e: any) {
    return { url, status: 0, error: e?.name === "AbortError" ? "Timed out" : "Fetch failed" };
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
  return NextResponse.json({ generatedAt: new Date().toISOString(), count: results.length, results });
}