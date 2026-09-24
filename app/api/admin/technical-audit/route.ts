// Save as: app/api/admin/technical-audit/route.ts
import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/auth"; // same import as your other admin routes

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://water-damage-clarksville.com").replace(/\/$/, "");
const HOST = new URL(SITE).host;
const UA = { "user-agent": "WDR-Technical-Audit/1.0" };

type Level = "issue" | "note";
type Prob = { level: Level; type: string; msg: string; where: string };

const dec = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (h: string) => dec(h.replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const norm = (u: string) => u.replace(/#.*$/, "").replace(/\/+$/, "").toLowerCase();
const path = (u: string) => { try { const x = new URL(u); return (x.pathname + x.search) || "/"; } catch { return u; } };
const meta = (html: string, key: string) => {
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

async function hit(url: string, method = "GET", body = true) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 9000);
  const t0 = Date.now();
  try {
    const res = await fetch(url, { method, redirect: "manual", cache: "no-store", signal: ctrl.signal, headers: UA });
    const isRedirect = res.status >= 300 && res.status < 400;
    const text = body && method === "GET" && !isRedirect ? await res.text() : "";
    return { ok: true as const, status: res.status, ms: Date.now() - t0, headers: res.headers, text, location: res.headers.get("location") || "" };
  } catch (e: any) {
    return { ok: false as const, status: 0, ms: Date.now() - t0, headers: new Headers(), text: "", location: "", err: e?.name === "AbortError" ? "Timed out" : "No response" };
  } finally { clearTimeout(t); }
}

type PageData = { url: string; page: string; status: number; ms: number; kb: number; problems: Prob[]; title: string; desc: string; shingles: Set<string> | null; links: { href: string; text: string }[]; headers: Headers };

async function auditPage(url: string): Promise<PageData> {
  const page = path(url);
  const P: Prob[] = [];
  const add = (level: Level, type: string, msg: string, where = "") => P.push({ level, type, msg, where });
  const r = await hit(url);
  const base: PageData = { url, page, status: r.status, ms: r.ms, kb: 0, problems: P, title: "", desc: "", shingles: null, links: [], headers: r.headers };

  if (!r.ok) { add("issue", "Status", `Page could not be fetched: ${(r as any).err}`, "HTTP request"); return base; }
  if (r.status >= 300 && r.status < 400) { add("issue", "Redirect", `Sitemap URL redirects (${r.status}) to ${r.location || "unknown"}. List the final URL in the sitemap instead`, "HTTP response"); return base; }
  if (r.status >= 400) { add("issue", "Status", `Returns HTTP ${r.status} but is listed in the sitemap`, "HTTP response"); return base; }

  const html = r.text;
  base.kb = Math.round(html.length / 1024);
  const ct = r.headers.get("content-type") || "";
  if (!ct.includes("html")) add("issue", "Status", `Content-Type is "${ct}", not HTML`, "HTTP header Content-Type");

  // Speed and size
  if (r.ms > 3000) add("issue", "Speed", `Slow response: ${(r.ms / 1000).toFixed(1)} s to load the HTML`, "Server response");
  else if (r.ms > 1000) add("note", "Speed", `Response took ${(r.ms / 1000).toFixed(1)} s (aim for under 1 s)`, "Server response");
  if (base.kb > 500) add("note", "Speed", `Large HTML document (${base.kb} KB)`, "Page HTML");

  // Indexing
  const xr = (r.headers.get("x-robots-tag") || "").toLowerCase();
  if (xr.includes("noindex")) add("issue", "Indexing", "Blocked from Google by an X-Robots-Tag noindex header", "HTTP header X-Robots-Tag");
  const robots = meta(html, "robots").toLowerCase();
  if (robots.includes("noindex")) add("issue", "Indexing", "Page has a noindex meta tag, so Google will drop it", '<meta name="robots">');
  else if (robots.includes("nofollow")) add("note", "Indexing", "Page has nofollow, so links on it pass no value", '<meta name="robots">');

  // Canonical
  const canon = (/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i.exec(html) || /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i.exec(html) || [])[1];
  if (!canon) add("issue", "Canonical", "No canonical tag", "<head>");
  else {
    let abs = canon;
    try { abs = new URL(canon, url).toString(); } catch {}
    if (abs.startsWith("http://")) add("issue", "Canonical", `Canonical uses http:// (${abs})`, '<link rel="canonical">');
    if (norm(abs) !== norm(url)) add("issue", "Canonical", `Canonical points to a different page: ${abs}`, '<link rel="canonical">');
    else if (abs !== url) add("note", "Canonical", `Canonical differs from the URL only by a trailing slash (${abs})`, '<link rel="canonical">');
  }

  // Head basics
  if (!meta(html, "viewport")) add("issue", "Mobile", "No viewport meta tag, so mobile layout can break", "<head>");
  if (!/<html[^>]*\slang=["'][^"']+/i.test(html)) add("note", "Head", "No lang attribute on <html>", "<html>");
  if (!/<meta[^>]+charset=/i.test(html) && !/charset=/i.test(ct)) add("note", "Head", "No charset declared", "<head>");
  base.title = strip((/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html) || [])[1] || "");
  base.desc = meta(html, "description");
  if (!base.title) add("issue", "Head", "Missing <title>", "<head>");
  if (!base.desc) add("issue", "Head", "Missing meta description", "<head>");
  const ogUrl = meta(html, "og:url");
  if (ogUrl.startsWith("http://")) add("note", "Head", `og:url uses http:// (${ogUrl})`, '<meta property="og:url">');

  // Mixed content (http:// resources on an https page)
  for (const m of html.matchAll(/<(img|script|iframe|source|video|audio|embed)\b[^>]*?\ssrc=(?:"(http:\/\/[^"]*)"|'(http:\/\/[^']*)')/gi)) add("issue", "Mixed content", `Loads an insecure resource: ${m[2] ?? m[3]}`, `<${m[1].toLowerCase()} src>`);
  for (const m of html.matchAll(/<link\b([^>]*?)\shref=(?:"(http:\/\/[^"]*)"|'(http:\/\/[^']*)')[^>]*>/gi)) if (!/rel=["'](canonical|alternate)/i.test(m[0])) add("issue", "Mixed content", `Loads an insecure resource: ${m[2] ?? m[3]}`, "<link href>");

  // Structured data
  let n = 0;
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    n++;
    try { JSON.parse(m[1].trim()); if (/"aggregateRating"/.test(m[1])) add("issue", "Schema", "aggregateRating markup found. Remove it unless real reviews are visible on this page", `JSON-LD block ${n}`); }
    catch { add("issue", "Schema", "JSON-LD cannot be parsed, so Google ignores it", `JSON-LD block ${n}`); }
  }

  // URL hygiene
  const p = new URL(url).pathname;
  if (/[A-Z]/.test(p)) add("note", "URL", "URL contains uppercase letters", "URL");
  if (p.includes("_")) add("note", "URL", "URL contains underscores (use hyphens)", "URL");
  if (p.length > 100) add("note", "URL", `URL is ${p.length} characters long`, "URL");
  if (p.includes("//")) add("issue", "URL", "URL contains a double slash", "URL");

  // Content and duplicate detection
  const main = strip((/<main[\s\S]*?<\/main>/i.exec(html) || [html])[0]);
  const words = main.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length < 150) add("issue", "Content", `Very thin content (${words.length} words in the main area)`, "<main>");
  else if (words.length < 300) add("note", "Content", `Thin content (${words.length} words)`, "<main>");
  if (words.length >= 150) { base.shingles = new Set(); for (let i = 0; i + 4 <= words.length; i++) base.shingles.add(words.slice(i, i + 4).join(" ")); }

  // Internal links, checked later
  const seen = new Set<string>();
  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const h = (/\shref=(?:"([^"]*)"|'([^']*)')/i.exec(m[1]) || [])[1] ?? (/\shref='([^']*)'/i.exec(m[1]) || [])[1];
    if (!h || /^(mailto:|tel:|javascript:|#)/i.test(h)) continue;
    try {
      const u = new URL(dec(h), url);
      if (u.host !== HOST || u.pathname.startsWith("/_next/")) continue;
      const key = u.origin + u.pathname;
      if (seen.has(key)) continue;
      seen.add(key);
      base.links.push({ href: key, text: strip(m[2]).slice(0, 50) || "(no text)" });
    } catch {}
  }
  return base;
}

function robotsCheck(txt: string) {
  const groups: { agents: string[]; disallow: string[] }[] = [];
  let cur: { agents: string[]; disallow: string[] } | null = null, lastWasAgent = false;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const m = /^([a-z-]+)\s*:\s*(.*)$/i.exec(line);
    if (!m) continue;
    const k = m[1].toLowerCase(), v = m[2].trim();
    if (k === "user-agent") { if (!cur || !lastWasAgent) { cur = { agents: [], disallow: [] }; groups.push(cur); } cur.agents.push(v.toLowerCase()); lastWasAgent = true; }
    else { if (k === "disallow" && cur) cur.disallow.push(v); lastWasAgent = false; }
  }
  const blocked = (a: string) => groups.some((g) => g.agents.includes(a) && g.disallow.includes("/"));
  const all = [...new Set(groups.flatMap((g) => g.agents))];
  return { hasSitemap: /^\s*sitemap\s*:/im.test(txt), adminBlocked: groups.some((g) => g.disallow.some((d) => d.startsWith("/admin"))), blockedAgents: all.filter(blocked), blockedAll: blocked("*") };
}

export async function GET() {
  if (!(await verifyAdminAuth())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Sitemap
  const site: { name: string; level: "ok" | "issue" | "note"; detail: string }[] = [];
  let urls: string[] = [];
  const sm = await hit(`${SITE}/sitemap.xml`);
  if (sm.status === 200) {
    const all = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => dec(m[1]).trim());
    urls = all.filter((u) => { try { return new URL(u).host === HOST; } catch { return false; } });
    const off = all.length - urls.length, dup = urls.length - new Set(urls).size;
    site.push({ name: "sitemap.xml", level: off || dup ? "issue" : "ok", detail: `${urls.length} URLs${off ? `, ${off} on another domain` : ""}${dup ? `, ${dup} duplicates` : ""}` });
  } else site.push({ name: "sitemap.xml", level: "issue", detail: `Not reachable (${sm.status || "no response"})` });
  if (!urls.length) urls = [SITE];
  urls = [...new Set(urls)].slice(0, 80);

  const [pages, robots, http, www, nf] = await Promise.all([
    pool(urls, 6, auditPage),
    hit(`${SITE}/robots.txt`),
    hit(`http://${HOST}/`, "GET", false),
    HOST.startsWith("www.") ? Promise.resolve(null) : hit(`https://www.${HOST}/`, "GET", false),
    hit(`${SITE}/wdr-404-check-x9q7`, "GET", false),
  ]);

  // Site-level checks
  if (robots.status === 200) {
    const r = robotsCheck(robots.text);
    site.push({ name: "robots.txt", level: r.blockedAll ? "issue" : "ok", detail: r.blockedAll ? "Blocks ALL crawlers" : "Found, does not block all crawlers" });
    site.push({ name: "robots.txt lists the sitemap", level: r.hasSitemap ? "ok" : "note", detail: r.hasSitemap ? "Sitemap line present" : "Add a Sitemap: line" });
    const search = ["googlebot", "bingbot"].filter((a) => r.blockedAgents.includes(a));
    const ai = ["oai-searchbot", "perplexitybot", "claude-searchbot", "chatgpt-user"].filter((a) => r.blockedAgents.includes(a));
    site.push({ name: "Search and AI answer bots allowed", level: search.length ? "issue" : ai.length ? "note" : "ok", detail: search.length ? `Blocked: ${search.join(", ")}` : ai.length ? `AI search bots blocked (${ai.join(", ")}), which can keep you out of AI answers` : `Not blocked. Fully blocked agents: ${r.blockedAgents.join(", ") || "none"}` });
    site.push({ name: "Admin area kept out of search", level: r.adminBlocked ? "ok" : "note", detail: r.adminBlocked ? "/admin is disallowed" : "Add Disallow: /admin" });
  } else site.push({ name: "robots.txt", level: "issue", detail: `Not reachable (${robots.status || "no response"})` });

  site.push({ name: "HTTP redirects to HTTPS", level: http.ok ? ([301, 308].includes(http.status) && http.location.startsWith("https://") ? "ok" : "issue") : "note", detail: http.ok ? `http:// returns ${http.status}${http.location ? ` to ${http.location}` : ""}` : "Could not test" });
  if (www) site.push({ name: "www version", level: !www.ok ? "note" : www.status >= 300 && www.status < 400 ? "ok" : www.status === 200 ? "issue" : "note", detail: !www.ok ? "www does not respond (fine if you never use it)" : www.status === 200 ? "www serves the site without redirecting: duplicate content risk" : `www returns ${www.status}${www.location ? ` to ${www.location}` : ""}` });
  site.push({ name: "Missing pages return 404", level: nf.status === 404 ? "ok" : nf.status === 200 ? "issue" : "note", detail: nf.status === 404 ? "Correct 404 status" : `A made-up URL returned ${nf.status || "no response"}${nf.status === 200 ? " (soft 404)" : ""}` });
  const home = pages.find((p) => p.page === "/");
  if (home && home.status === 200) {
    const need: [string, string][] = [["strict-transport-security", "HSTS"], ["x-content-type-options", "X-Content-Type-Options"], ["referrer-policy", "Referrer-Policy"]];
    const lack = need.filter(([h]) => !home.headers.get(h)).map(([, n]) => n);
    if (!home.headers.get("x-frame-options") && !/frame-ancestors/i.test(home.headers.get("content-security-policy") || "")) lack.push("X-Frame-Options or CSP frame-ancestors");
    site.push({ name: "Security headers", level: lack.length ? "note" : "ok", detail: lack.length ? `Missing: ${lack.join(", ")}` : "All present" });
  }

  // Duplicate titles, descriptions, and near-duplicate content
  const ok = pages.filter((p) => p.status === 200);
  const dupe = (get: (p: PageData) => string, label: string, where: string) => {
    const m = new Map<string, PageData[]>();
    ok.forEach((p) => { const k = get(p).trim().toLowerCase(); if (k) m.set(k, [...(m.get(k) || []), p]); });
    m.forEach((g) => { if (g.length > 1) g.forEach((p) => p.problems.push({ level: "issue", type: "Duplicate", msg: `Same ${label} as ${g.filter((x) => x !== p).slice(0, 3).map((x) => x.page).join(", ")}${g.length > 4 ? ` and ${g.length - 4} more` : ""}`, where })); });
  };
  dupe((p) => p.title, "title", "<title>");
  dupe((p) => p.desc, "meta description", '<meta name="description">');
  const sh = ok.filter((p) => p.shingles);
  for (const a of sh) {
    let best = 0, who = "";
    for (const b of sh) {
      if (a === b) continue;
      let inter = 0;
      a.shingles!.forEach((s) => { if (b.shingles!.has(s)) inter++; });
      const j = inter / (a.shingles!.size + b.shingles!.size - inter);
      if (j > best) { best = j; who = b.page; }
    }
    const pct = Math.round(best * 100);
    if (pct >= 85) a.problems.push({ level: "issue", type: "Duplicate", msg: `${pct}% of the text matches ${who}. Google may treat these as near-duplicates`, where: "<main> content" });
    else if (pct >= 70) a.problems.push({ level: "note", type: "Duplicate", msg: `${pct}% of the text matches ${who}. Add more unique local content`, where: "<main> content" });
  }

  // Broken and redirecting internal links
  const known = new Map(pages.map((p) => [norm(p.url), { status: p.status, loc: "" }]));
  const targets = [...new Set(ok.flatMap((p) => p.links.map((l) => l.href)))].filter((h) => !known.has(norm(h))).slice(0, 200);
  await pool(targets, 8, async (t) => {
    let r = await hit(t, "HEAD", false);
    if (r.status === 405 || r.status === 501) r = await hit(t, "GET", false);
    known.set(norm(t), { status: r.status, loc: r.location });
  });
  for (const p of ok) for (const l of p.links) {
    const k = known.get(norm(l.href));
    if (!k) continue;
    if (k.status === 0 || k.status >= 400) p.problems.push({ level: "issue", type: "Broken link", msg: `Links to ${path(l.href)}, which returns ${k.status || "no response"}`, where: `Link text: "${l.text}"` });
    else if (k.status >= 300) p.problems.push({ level: "note", type: "Redirecting link", msg: `Links to ${path(l.href)}, which redirects (${k.status})${k.loc ? ` to ${k.loc.replace(SITE, "")}` : ""}. Link to the final URL`, where: `Link text: "${l.text}"` });
  }

  const results = pages.map((p) => ({ page: p.page, status: p.status, ms: p.ms, kb: p.kb, problems: p.problems.sort((a, b) => Number(b.level === "issue") - Number(a.level === "issue")) }));
  return NextResponse.json({ generatedAt: new Date().toISOString(), pages: results.length, site, results });
}