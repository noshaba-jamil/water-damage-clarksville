"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
/* Replace app/admin/seo/page.tsx with this file.
   Progress (checklist + citations) is saved in this browser's localStorage. */

const C = { green: "#22C55E", red: "#EF4444", yellow: "#FBBF24", blue: "#60A5FA", muted: "rgba(255,255,255,.4)" };

const NAP = {
  name: "Clarksville Water Damage Restoration",
  phone: "(931) 271-2350",
  address: "215 Legion Street, Clarksville, TN 37040",
  email: "waterdamageclarksville@gmail.com",
  website: "https://water-damage-clarksville.com",
  hours: "Open 24 hours, 7 days",
};

// Update these numbers from Search Console whenever you check it.
const GSC = {
  range: "Jul 10 – Sep 17, 2026",
  clicks: 5,
  impressions: 573,
  note: "All 5 clicks came Jul 12–16. Impressions fell from ~35/day to ~3/day on Jul 21 and have stayed low (about 4/day since Aug 11).",
};

// Snapshot values. Re-check with view-source before trusting them.
const PAGES = [
  { url: "/", title: "Water Damage Restoration Clarksville TN | 24/7 Response", meta: "Clarksville TN water damage restoration. 60-min arrival, 24/7. Flood cleanup, mold remediation & structural drying. All insurance accepted. Call (931) 271-2350." },
  { url: "/emergency-water-damage-clarksville-tn", title: "Emergency Water Damage Clarksville TN | 60-Min Response", meta: "Emergency water damage restoration in Clarksville TN. IICRC-certified team responds in 60 minutes 24/7." },
  { url: "/flood-cleanup-clarksville-tn", title: "Flood Cleanup & Water Extraction Clarksville TN", meta: "Professional flood cleanup in Clarksville TN. Industrial truck-mounted pumps extract water fast." },
  { url: "/mold-remediation-clarksville-tn", title: "Mold Remediation Clarksville TN | IICRC AMRT Certified", meta: "IICRC AMRT-certified mold remediation in Clarksville TN. Black mold removal, air quality testing." },
  { url: "/structural-drying-clarksville-tn", title: "Structural Drying Clarksville TN | IICRC S500 Certified", meta: "IICRC S500-certified structural drying in Clarksville TN. Industrial LGR dehumidifiers." },
  { url: "/water-damage-insurance-claim-clarksville-tn", title: "Water Damage Insurance Claims Clarksville TN | USAA Specialists", meta: "Water damage insurance claims in Clarksville TN handled completely. USAA, State Farm, Allstate." },
  { url: "/about", title: "About Clarksville Water Damage Restoration | Local IICRC Experts", meta: "Meet the IICRC-certified team serving Clarksville TN since 2014." },
  { url: "/contact", title: "Contact Us | Free Water Damage Assessment Clarksville TN", meta: "Contact for free emergency assessment. Call (931) 271-2350 anytime 24/7." },
  { url: "/blog", title: "Water Damage Blog | Restoration Tips & Guides | Clarksville TN", meta: "Expert water damage restoration guides for Clarksville TN homeowners." },
  { url: "/service-areas", title: "Service Areas | Water Damage Restoration Near Me | Clarksville TN", meta: "Water damage restoration serving Clarksville TN, Fort Campbell, Oak Grove KY." },
  { url: "/faq", title: "Water Damage FAQ | Clarksville TN | Common Questions Answered", meta: "Answers to common water damage restoration questions for Clarksville TN homeowners." },
];

// Only Semrush numbers are filled in. null = not pulled yet (do not guess).
const KEYWORDS: { kw: string; vol: number | null; kd: number | null; page: string }[] = [
  { kw: "mold remediation clarksville", vol: 260, kd: 17, page: "Mold Remediation" },
  { kw: "mold clean up clarksville", vol: 170, kd: 7, page: "Mold Remediation" },
  { kw: "water damage restoration clarksville", vol: 90, kd: 22, page: "Homepage" },
  { kw: "water damage restoration clarksville tn", vol: 50, kd: 21, page: "Homepage" },
  { kw: "storm damage restoration clarksville", vol: 40, kd: 16, page: "Storm Damage" },
  { kw: "mold testing clarksville tn", vol: 18, kd: 12, page: "Mold Remediation" },
  { kw: "clarksville mold remediation", vol: 15, kd: 11, page: "Mold Remediation" },
  { kw: "mold removal clarksville", vol: 13, kd: 9, page: "Mold Remediation" },
  { kw: "mold inspection clarksville tn", vol: 9, kd: 5, page: "Mold Remediation" },
  { kw: "mold & mildew removal clarksville", vol: 9, kd: 3, page: "Mold Remediation" },
  { kw: "flood cleanup clarksville tn", vol: null, kd: null, page: "Flood Cleanup" },
  { kw: "structural drying clarksville tn", vol: null, kd: null, page: "Structural Drying" },
  { kw: "basement flooding clarksville tn", vol: null, kd: null, page: "Basement Flooding" },
  { kw: "sewage backup cleanup clarksville", vol: null, kd: null, page: "Sewage Backup" },
];

type State = "yes" | "no" | "check";
const TRUST: { label: string; state: State; note: string }[] = [
  { label: "Quick-answer box and FAQ on the homepage", state: "yes", note: "Seen on the live page." },
  { label: "Content readable in the server HTML", state: "yes", note: "AI crawlers can read it without running scripts." },
  { label: "Canonical tag and indexable meta robots", state: "yes", note: "Seen on the homepage." },
  { label: "Name, address, phone in plain text", state: "yes", note: "Footer and header." },
  { label: "Social profiles linked from the site", state: "yes", note: "YouTube, Instagram, Facebook, Pinterest. Add them to sameAs schema." },
  { label: "Google Business Profile", state: "no", note: "Only create it if the business at the address is real, staffed, and yours to represent." },
  { label: "Real customer reviews, visible on the page", state: "no", note: "Needed before any rating or review schema." },
  { label: "Named staff, license and IICRC numbers", state: "no", note: "Biggest gap for E-E-A-T and AI trust." },
  { label: "Every claim on the site is provable", state: "check", note: "Check: 500+ homes, #1, USAA Preferred Vendor, since 2014, 60-min guarantee." },
  { label: "robots.txt allows search bots", state: "check", note: "Do not block OAI-SearchBot, PerplexityBot, Claude-SearchBot. Blocking training-only bots is your choice." },
  { label: "Sitemap URL count matches real pages", state: "check", note: "Older notes said 32 location pages; the homepage links 12." },
  { label: "Inner pages carry their own schema", state: "check", note: "Confirm with the Rich Results Test." },
  { label: "Cost, causes, immediate-steps content", state: "check", note: "Blog has a cost guide. Confirm the other two exist." },
];

const SCHEMA = [
  { item: "ProfessionalService (layout.tsx)", status: "keep", note: "Add sameAs with your real social profile URLs." },
  { item: "AggregateRating / Review", status: "hold", note: "Removed. Add only when real reviews are visible on the same page." },
  { item: "FAQPage", status: "keep", note: "Questions and answers must match the visible text exactly." },
  { item: "BreadcrumbList", status: "keep", note: "Already on rebuilt service and location pages." },
  { item: "Service", status: "keep", note: "Add provider and areaServed only for places you truly serve." },
];

const TASKS = [
  { id: "gsc", week: "Done", task: "Search Console verified and sitemap submitted", priority: "done" },
  { id: "ga4", week: "Done", task: "GA4 installed and showing live visits", priority: "done" },
  { id: "rebuild", week: "Done", task: "Core service, location, About, FAQ pages rebuilt with FAQ and breadcrumb schema", priority: "done" },
  { id: "rating", week: "Week 1", task: "Remove aggregateRating and all review schema sitewide", priority: "critical" },
  { id: "manual", week: "Week 1", task: "GSC: check Manual actions, then Page indexing for the 8 not-indexed pages", priority: "critical" },
  { id: "dropq", week: "Week 1", task: "Compare Queries for Jul 12–20 against Aug 11–Sep 17", priority: "high" },
  { id: "claims", week: "Week 1", task: "Audit every claim; keep only what you can prove", priority: "critical" },
  { id: "gbp", week: "Week 1", task: "Decide if a Google Business Profile is legitimate, then create it", priority: "high" },
  { id: "nap", week: "Week 2", task: "Use one exact name, address, and phone in every listing", priority: "high" },
  { id: "cit", week: "Week 2", task: "Submit the citations in the Local tab", priority: "high" },
  { id: "sameas", week: "Week 2", task: "Add sameAs schema and post real content on the social profiles", priority: "medium" },
  { id: "proof", week: "Week 3", task: "Add named technician, license and IICRC numbers, real project photos", priority: "high" },
  { id: "mold", week: "Week 3", task: "Improve the mold page for the mold keyword cluster", priority: "high" },
  { id: "locs", week: "Week 3", task: "Check each location page is unique; do not add more", priority: "medium" },
  { id: "ai", week: "Week 4", task: "Ask ChatGPT, Perplexity, and Google AI Overviews the two main queries and note who is cited", priority: "medium" },
  { id: "recheck", week: "Week 4", task: "Re-pull GSC and update the numbers at the top of this file", priority: "high" },
];

const CITATIONS = [
  { id: "bbb", name: "BBB", url: "bbb.org", note: "Linked to competitors in your Semrush gap" },
  { id: "birdeye", name: "Birdeye", url: "birdeye.com", note: "Linked to SERVPRO" },
  { id: "superpages", name: "Superpages", url: "superpages.com", note: "Linked to 3 of 4 competitors" },
  { id: "dexknows", name: "Dexknows", url: "dexknows.com", note: "Linked to 3 of 4 competitors" },
  { id: "bing", name: "Bing Places", url: "bingplaces.com", note: "" },
  { id: "apple", name: "Apple Business Connect", url: "businessconnect.apple.com", note: "" },
  { id: "yelp", name: "Yelp", url: "biz.yelp.com", note: "" },
  { id: "nextdoor", name: "Nextdoor", url: "business.nextdoor.com", note: "" },
  { id: "chamber", name: "Chamber of Commerce", url: "chamberofcommerce.com", note: "Only if you qualify" },
];

function usePersist<T>(key: string, init: T): [T, (v: T) => void] {
  const [v, setV] = useState<T>(init);
  useEffect(() => {
    try { const s = localStorage.getItem(key); if (s) setV(JSON.parse(s)); } catch {}
  }, [key]);
  const set = (n: T) => { setV(n); try { localStorage.setItem(key, JSON.stringify(n)); } catch {} };
  return [v, set];
}

function Badge({ label, color }: { label: string; color: string }) {
  return <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100, background: `${color}22`, color }}>{label}</span>;
}

const stateColor = (s: State) => (s === "yes" ? C.green : s === "no" ? C.red : C.yellow);
const stateLabel = (s: State) => (s === "yes" ? "Verified" : s === "no" ? "Missing" : "Check");
const prioColor = (p: string) => (p === "critical" ? C.red : p === "high" ? C.yellow : p === "done" ? C.green : C.muted);

function Sidebar() {
  const links: [string, string][] = [["Dashboard", "/admin/dashboard"], ["Blog posts", "/admin/blog"], ["New post", "/admin/blog/new"], ["Reviews", "/admin/reviews"], ["SEO monitor", "/admin/seo"], ["Settings", "/admin/settings"], ["View site", "/"]];
  return (
    <div style={{ background: "#09090B", borderRight: "1px solid rgba(255,255,255,.06)", width: 220, flexShrink: 0, position: "sticky", top: 0, height: "100vh", padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>WDR Admin</div>
      {links.map(([l, h]) => (
        <Link key={h} href={h} target={h === "/" ? "_blank" : undefined}
          style={{ display: "block", padding: "9px 10px", borderRadius: 6, fontSize: 13, textDecoration: "none", marginBottom: 2, color: h === "/admin/seo" ? "#4ADE80" : "rgba(255,255,255,.55)", background: h === "/admin/seo" ? "rgba(34,197,94,.1)" : "none" }}>{l}</Link>
      ))}
    </div>
  );
}

type Scores = { seo: number; aeo: number; geo: number; llmo: number };
type AuditRow = { url: string; status: number; error?: string; title?: string; words?: number; scores?: Scores; missing?: string[]; flags?: string[] };
type Audit = { generatedAt: string; count: number; results: AuditRow[] };
const DIMS: [keyof Scores, string][] = [["seo", "SEO"], ["aeo", "AEO"], ["geo", "GEO"], ["llmo", "LLMO"]];
const scoreColor = (n: number) => (n >= 80 ? C.green : n >= 60 ? C.yellow : C.red);

type ImgUsage = { page: string; alt: string | null; loading: string; hasDims: boolean; og: boolean; issues: string[]; notes: string[] };
type ImgRow = { url: string; name: string; thumb: string; format: string; bytes: number; width: number | null; height: number | null; viaNext: boolean; httpStatus: number; issues: string[]; notes: string[]; usages: ImgUsage[]; status: "ok" | "note" | "fix" };
type ImgPage = { page: string; count: number; bytes: number; issues: number; done: boolean };
type ImgAudit = { generatedAt: string; pages: number; images: ImgRow[]; pageSummary: ImgPage[] };
const fmtSize = (b: number) => (b >= 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.round(b / 1024)} KB`);
const missingAlt = (i: ImgRow) => i.usages.some((u) => !u.og && (u.alt === null || !u.alt.trim()));

type HdItem = { level: number; text: string; flag: string | null };
type HdPage = { page: string; error?: string; count?: number; h1?: number; skips?: number; done?: boolean; issues?: string[]; notes?: string[]; outline?: HdItem[] };
type HdAudit = { generatedAt: string; pages: number; results: HdPage[] };

type TProb = { level: "issue" | "note"; type: string; msg: string; where: string };
type TPage = { page: string; status: number; ms: number; kb: number; problems: TProb[] };
type TSite = { name: string; level: "ok" | "issue" | "note"; detail: string };
type TAudit = { generatedAt: string; pages: number; site: TSite[]; results: TPage[] };

// ---------- Notification system ----------
type Cat = "SEO" | "AEO" | "GEO" | "LLMO" | "Technical" | "Images" | "Headings";
type SnapProblem = { cat: Cat; level: "issue" | "note"; page: string; msg: string };
type Snapshot = { at: string; problems: Record<string, SnapProblem>; scores: Record<string, Scores> };
type Notif = { id: string; at: string; kind: "new" | "fixed" | "drop" | "info"; cat: string; level: "issue" | "note"; page: string; msg: string; read: boolean };
const SNAP_KEY = "wdr_seo_snapshot_v1", NOTIF_KEY = "wdr_seo_notifs_v1", AUTO_KEY = "wdr_seo_auto_v1";
const STALE_MS = 6 * 60 * 60 * 1000; // auto-check on open only if the last check is older than 6 hours
const NCATS = ["SEO", "AEO", "GEO", "LLMO", "Technical", "Images", "Headings"];

function readLS<T>(k: string): T | null {
  try { const s = localStorage.getItem(k); return s ? (JSON.parse(s) as T) : null; } catch { return null; }
}
async function getJson<T>(url: string): Promise<T> {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error(r.status === 401 ? "Log in to the admin again" : `Check failed (${r.status}) at ${url.split("/").pop()}`);
  return r.json();
}
const pathOf = (u: string) => u.replace(/^https?:\/\/[^/]+/, "") || "/";

function buildSnapshot(a: Audit, i: ImgAudit, h: HdAudit, t: TAudit): Snapshot {
  const problems: Record<string, SnapProblem> = {};
  const scores: Record<string, Scores> = {};
  // Digits are normalised in the id so a changing number (e.g. 3.2 s vs 3.4 s) is not treated as a new problem.
  const put = (cat: Cat, level: "issue" | "note", page: string, msg: string) => { problems[`${cat}|${page}|${msg.replace(/\d+(\.\d+)?/g, "#")}`] = { cat, level, page, msg }; };
  a.results.forEach((r) => {
    const pg = pathOf(r.url);
    if (r.scores) scores[pg] = r.scores;
    r.missing?.forEach((m) => { const [c, ...rest] = m.split(": "); put(c as Cat, "note", pg, rest.join(": ")); });
    r.flags?.forEach((f) => put("SEO", "issue", pg, f));
  });
  i.images.forEach((im) => {
    const pgs = [...new Set(im.usages.map((u) => u.page))];
    const label = `${pgs[0]}${pgs.length > 1 ? ` +${pgs.length - 1} pages` : ""} (${im.name})`;
    im.issues.forEach((m) => put("Images", "issue", label, m));
    im.usages.forEach((u) => u.issues.forEach((m) => put("Images", "issue", `${u.page} (${im.name})`, m)));
  });
  h.results.forEach((r) => r.issues?.forEach((m) => put("Headings", "issue", r.page, m)));
  t.results.forEach((r) => r.problems.filter((p) => p.level === "issue").forEach((p) => put("Technical", "issue", r.page, `${p.type}: ${p.msg}`)));
  t.site.filter((s) => s.level === "issue").forEach((s) => put("Technical", "issue", "Site-wide", `${s.name}: ${s.detail}`));
  return { at: new Date().toISOString(), problems, scores };
}

function diffSnap(prev: Snapshot | null, next: Snapshot): Notif[] {
  const at = next.at;
  let n = 0;
  const mk = (kind: Notif["kind"], cat: string, level: "issue" | "note", page: string, msg: string, read = false): Notif => ({ id: `${at}-${n++}`, at, kind, cat, level, page, msg, read });
  const vals = Object.values(next.problems);
  if (!prev) return [mk("info", "All", "note", "Site-wide", `First check saved: ${vals.filter((p) => p.level === "issue").length} fixes and ${vals.filter((p) => p.level === "note").length} notes found. From now on you will be alerted to new problems.`, true)];
  const out: Notif[] = [];
  for (const [id, p] of Object.entries(next.problems)) if (!prev.problems[id]) out.push(mk("new", p.cat, p.level, p.page, p.msg));
  for (const [id, p] of Object.entries(prev.problems)) if (!next.problems[id]) out.push(mk("fixed", p.cat, p.level, p.page, p.msg, true));
  for (const [pg, s] of Object.entries(next.scores)) {
    const o = prev.scores[pg];
    if (!o) { out.push(mk("info", "SEO", "note", pg, "New page found in the sitemap")); continue; }
    DIMS.forEach(([k, l]) => { if (o[k] - s[k] >= 5) out.push(mk("drop", l, "issue", pg, `${l} score fell from ${o[k]} to ${s[k]}`)); });
  }
  for (const pg of Object.keys(prev.scores)) if (!next.scores[pg]) out.push(mk("info", "Technical", "issue", pg, "Page is no longer in the sitemap or did not respond"));
  return out.slice(0, 300);
}

const TABS = ["Overview", "Scores", "Images", "Headings", "Technical", "Search Console", "On-page", "Local", "Trust (AEO/LLM)", "Keywords", "Schema", "Actions"];

export default function SeoMonitorPage() {
  const [tab, setTab] = useState("Overview");
  const [done, setDone] = usePersist<Record<string, boolean>>("wdr_seo_tasks_v2", {});
  const [cit, setCit] = usePersist<Record<string, string>>("wdr_seo_cit_v2", {});

  const [audit, setAudit] = usePersist<Audit | null>("wdr_seo_audit_v1", null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  async function runAudit() {
    setBusy(true); setErr("");
    try {
      const r = await fetch("/api/admin/seo-audit", { cache: "no-store" });
      if (!r.ok) throw new Error(r.status === 401 ? "Log in to the admin again" : `Audit failed (${r.status})`);
      setAudit(await r.json());
    } catch (e: any) { setErr(e.message || "Audit failed"); }
    setBusy(false);
  }

  const scored = (audit?.results || []).filter((r) => r.scores);
  const avg = (k: keyof Scores) => (scored.length ? Math.round(scored.reduce((a, r) => a + r.scores![k], 0) / scored.length) : 0);
  const mean = (r: AuditRow) => (r.scores ? (r.scores.seo + r.scores.aeo + r.scores.geo + r.scores.llmo) / 4 : -1);

  const [img, setImg] = usePersist<ImgAudit | null>("wdr_seo_img_v1", null);
  const [imgBusy, setImgBusy] = useState(false);
  const [imgErr, setImgErr] = useState("");
  const [imgFilter, setImgFilter] = useState("all");
  const [imgOpen, setImgOpen] = useState<string | null>(null);

  async function runImages() {
    setImgBusy(true); setImgErr("");
    try {
      const r = await fetch("/api/admin/image-audit", { cache: "no-store" });
      if (!r.ok) throw new Error(r.status === 401 ? "Log in to the admin again" : `Image audit failed (${r.status})`);
      setImg(await r.json());
    } catch (e: any) { setImgErr(e.message || "Image audit failed"); }
    setImgBusy(false);
  }

  const imgs = img?.images || [];
  const imgFix = imgs.filter((i) => i.status === "fix").length;
  const imgNoAlt = imgs.filter(missingAlt).length;
  const imgBytes = imgs.reduce((a, i) => a + i.bytes, 0);
  const rank = { fix: 0, note: 1, ok: 2 };
  const shown = imgs
    .filter((i) => imgFilter === "fix" ? i.status === "fix" : imgFilter === "alt" ? missingAlt(i) : imgFilter === "large" ? i.bytes > 200 * 1024 : true)
    .sort((a, b) => rank[a.status] - rank[b.status] || b.bytes - a.bytes);
  const pagePath = (u: string) => u.replace(/^https?:\/\/[^/]+/, "") || "/";
  const [pgOpen, setPgOpen] = useState<string | null>(null);

  const [hd, setHd] = usePersist<HdAudit | null>("wdr_seo_headings_v1", null);
  const [hdBusy, setHdBusy] = useState(false);
  const [hdErr, setHdErr] = useState("");
  const [hdFilter, setHdFilter] = useState("all");
  const [hdOpen, setHdOpen] = useState<string | null>(null);

  async function runHeadings() {
    setHdBusy(true); setHdErr("");
    try {
      const r = await fetch("/api/admin/heading-audit", { cache: "no-store" });
      if (!r.ok) throw new Error(r.status === 401 ? "Log in to the admin again" : `Heading audit failed (${r.status})`);
      setHd(await r.json());
    } catch (e: any) { setHdErr(e.message || "Heading audit failed"); }
    setHdBusy(false);
  }

  const hdRows = hd?.results || [];
  const hdOk = hdRows.filter((r) => r.done).length;
  const hdSkip = hdRows.filter((r) => (r.skips || 0) > 0).length;
  const hdH1 = hdRows.filter((r) => !r.error && r.h1 !== 1).length;
  const hdShown = hdRows
    .filter((r) => hdFilter === "bad" ? !r.done : hdFilter === "skip" ? (r.skips || 0) > 0 : hdFilter === "h1" ? !r.error && r.h1 !== 1 : true)
    .sort((a, b) => Number(!!a.done) - Number(!!b.done) || (b.skips || 0) - (a.skips || 0));

  const [tc, setTc] = usePersist<TAudit | null>("wdr_seo_tech_v1", null);
  const [tcBusy, setTcBusy] = useState(false);
  const [tcErr, setTcErr] = useState("");
  const [tcShow, setTcShow] = useState("all");
  const [tcType, setTcType] = useState("all");
  const [tcOpen, setTcOpen] = useState<string | null>(null);

  async function runTech() {
    setTcBusy(true); setTcErr("");
    try {
      const r = await fetch("/api/admin/technical-audit", { cache: "no-store" });
      if (!r.ok) throw new Error(r.status === 401 ? "Log in to the admin again" : `Technical audit failed (${r.status})`);
      setTc(await r.json());
    } catch (e: any) { setTcErr(e.message || "Technical audit failed"); }
    setTcBusy(false);
  }

  const tcRows = tc?.results || [];
  const tcIssues = (r: TPage) => r.problems.filter((p) => p.level === "issue").length;
  const tcNotes = (r: TPage) => r.problems.filter((p) => p.level === "note").length;
  const tcPagesBad = tcRows.filter((r) => tcIssues(r) > 0).length;
  const tcTotalIssues = tcRows.reduce((a, r) => a + tcIssues(r), 0);
  const tcTotalNotes = tcRows.reduce((a, r) => a + tcNotes(r), 0);
  const tcSiteBad = (tc?.site || []).filter((s) => s.level === "issue").length;
  const tcTypes = (() => {
    const m = new Map<string, { level: "issue" | "note"; pages: Set<string>; count: number }>();
    tcRows.forEach((r) => r.problems.forEach((p) => {
      const e = m.get(p.type) || { level: p.level, pages: new Set<string>(), count: 0 };
      if (p.level === "issue") e.level = "issue";
      e.pages.add(r.page); e.count++; m.set(p.type, e);
    }));
    return [...m.entries()].sort((a, b) => Number(b[1].level === "issue") - Number(a[1].level === "issue") || b[1].pages.size - a[1].pages.size);
  })();
  const tcShown = tcRows
    .filter((r) => (tcShow === "issues" ? tcIssues(r) > 0 : true) && (tcType === "all" || r.problems.some((p) => p.type === tcType)))
    .sort((a, b) => tcIssues(b) - tcIssues(a) || tcNotes(b) - tcNotes(a));

  const isDone = (t: { id: string; priority: string }) => t.priority === "done" || !!done[t.id];
  const tasksDone = TASKS.filter(isDone).length;
  const verified = TRUST.filter((t) => t.state === "yes").length;
  const citDone = CITATIONS.filter((c) => cit[c.id] === "done").length;
  const ctr = ((GSC.clicks / GSC.impressions) * 100).toFixed(1);

  // ---------- Notifications ----------
  const [snap, setSnap] = usePersist<Snapshot | null>(SNAP_KEY, null);
  const [notifs, setNotifs] = usePersist<Notif[]>(NOTIF_KEY, []);
  const [auto, setAuto] = usePersist<boolean>(AUTO_KEY, true);
  const [allBusy, setAllBusy] = useState(false);
  const [allStep, setAllStep] = useState("");
  const [allErr, setAllErr] = useState("");
  const [nOpen, setNOpen] = useState(false);
  const [nCat, setNCat] = useState("all");
  const [nKind, setNKind] = useState("all");
  const running = useRef(false);

  async function runAll() {
    if (running.current) return;
    running.current = true; setAllBusy(true); setAllErr("");
    try {
      setAllStep("SEO, AEO, GEO, LLMO scores"); const a = await getJson<Audit>("/api/admin/seo-audit"); setAudit(a);
      setAllStep("images"); const i = await getJson<ImgAudit>("/api/admin/image-audit"); setImg(i);
      setAllStep("headings"); const h = await getJson<HdAudit>("/api/admin/heading-audit"); setHd(h);
      setAllStep("technical"); const t = await getJson<TAudit>("/api/admin/technical-audit"); setTc(t);
      const next = buildSnapshot(a, i, h, t);
      const fresh = diffSnap(readLS<Snapshot>(SNAP_KEY), next);
      setNotifs([...fresh, ...(readLS<Notif[]>(NOTIF_KEY) || [])].slice(0, 300));
      setSnap(next);
    } catch (e: any) { setAllErr(e.message || "Check failed"); }
    setAllBusy(false); setAllStep(""); running.current = false;
  }

  useEffect(() => {
    if (readLS<boolean>(AUTO_KEY) === false) return;
    const last = readLS<Snapshot>(SNAP_KEY);
    if (!last || Date.now() - Date.parse(last.at) > STALE_MS) runAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markAll = () => setNotifs(notifs.map((n) => ({ ...n, read: true })));
  const unread = notifs.filter((n) => !n.read && (n.kind === "new" || n.kind === "drop"));
  const unreadByCat = unread.reduce<Record<string, number>>((m, n) => { m[n.cat] = (m[n.cat] || 0) + 1; return m; }, {});
  const shownN = notifs.filter((n) => (nCat === "all" || n.cat === nCat) && (nKind === "all" || n.kind === nKind));
  const offPage = [
    { level: "issue", msg: `${CITATIONS.length - citDone} of ${CITATIONS.length} citations are still to do (Local tab)` },
    ...TASKS.filter((t) => !isDone(t) && t.priority === "critical").map((t) => ({ level: "issue", msg: `Critical task not done: ${t.task}` })),
    { level: "note", msg: "Backlinks, rankings, reviews and your Google Business Profile cannot be checked automatically. These reminders come from your checklist. Update the Search Console numbers at the top of this file when you check." },
  ];
  const linkBtn = { background: "none", border: "none", color: C.blue, cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: "inherit" } as const;
  const sel = { background: "#09090B", color: "#fff", border: "1px solid rgba(255,255,255,.15)", borderRadius: 4, padding: "6px 10px", fontFamily: "inherit" } as const;

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:var(--font-inter,system-ui,sans-serif);background:#0F0F11;color:#fff}
    .layout{display:flex;min-height:100vh}.main{flex:1;padding:28px 32px;min-width:0}
    .tabs{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:24px;background:#18181B;padding:4px;border-radius:10px}
    .tab{padding:8px 14px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:none;font-family:inherit;background:none;color:rgba(255,255,255,.5)}
    .tab.active{background:#22C55E;color:#09090B}
    .card{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:20px;margin-bottom:16px}
    .h{font-size:13px;font-weight:700;margin-bottom:12px}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:16px}
    .stat{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:18px}
    .val{font-size:32px;font-weight:700;margin-bottom:4px}.lbl{font-size:12px;color:rgba(255,255,255,.45)}
    table{width:100%;border-collapse:collapse}
    th{text-align:left;font-size:11px;font-weight:600;color:rgba(255,255,255,.35);padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.06)}
    td{padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.04);font-size:12.5px;color:rgba(255,255,255,.7);vertical-align:top}
    .row{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.04);align-items:flex-start}
    .row:last-child{border-bottom:none}.note{font-size:12px;color:rgba(255,255,255,.45);line-height:1.5;margin-top:3px}
    .warn{background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.25);border-radius:8px;padding:12px 14px;font-size:12.5px;line-height:1.6;margin-bottom:16px;color:rgba(255,255,255,.75)}
    @media(max-width:1000px){.layout{flex-direction:column}.main{padding:16px}}
  `;

  return (
    <>
      <style>{css}</style>
      <div className="layout">
        <Sidebar />
        <div className="main">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>SEO, AEO and local monitor</div>
              <div style={{ fontSize: 13, color: C.muted }}>Only verified numbers are shown. Anything unverified is marked.</div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <button className="tab" onClick={() => setNOpen(!nOpen)} style={{ background: "#18181B", border: "1px solid rgba(255,255,255,.1)", color: "#fff", padding: "9px 14px" }}>
                Notifications{unread.length > 0 && <span style={{ marginLeft: 8, background: C.red, color: "#fff", borderRadius: 100, padding: "1px 7px", fontSize: 11 }}>{unread.length}</span>}
              </button>
              <button className="tab active" disabled={allBusy} onClick={() => runAll()} style={{ padding: "9px 14px", opacity: allBusy ? 0.6 : 1 }}>{allBusy ? `Checking ${allStep}…` : "Check now"}</button>
              <label style={{ fontSize: 12, color: C.muted, display: "flex", gap: 6, alignItems: "center" }}>
                <input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} style={{ accentColor: C.green }} />Auto-check when I open this page
              </label>
            </div>
          </div>

          {allBusy && <div className="warn">Checking your whole site: SEO, AEO, GEO, LLMO, images, headings, and technical. Now doing {allStep}. This takes 1 to 2 minutes.</div>}
          {allErr && <div className="warn" style={{ borderColor: "rgba(239,68,68,.35)", background: "rgba(239,68,68,.08)" }}>{allErr}</div>}
          {!allBusy && unread.length > 0 && (
            <div className="warn" style={{ borderColor: "rgba(239,68,68,.35)", background: "rgba(239,68,68,.08)" }}>
              <strong>{unread.length} new problem{unread.length === 1 ? "" : "s"} since the last check</strong>: {Object.entries(unreadByCat).map(([c, n]) => `${n} ${c}`).join(", ")}.{" "}
              <button style={linkBtn} onClick={() => setNOpen(true)}>View</button> · <button style={linkBtn} onClick={markAll}>Mark all read</button>
            </div>
          )}
          {snap && <div className="note" style={{ marginTop: -6, marginBottom: 14 }}>Last full check: {new Date(snap.at).toLocaleString()}. Alerts appear here whenever a check finds something new. A page open in this browser is needed to run the check.</div>}

          {nOpen && (
            <div className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                <div className="h" style={{ marginBottom: 0 }}>Notifications ({notifs.length})</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <select value={nCat} onChange={(e) => setNCat(e.target.value)} style={sel}>
                    <option value="all">All categories</option>{NCATS.map((c) => <option key={c} value={c}>{c}</option>)}<option value="Off-page">Off-page (manual)</option>
                  </select>
                  <select value={nKind} onChange={(e) => setNKind(e.target.value)} style={sel}>
                    <option value="all">Everything</option><option value="new">New problems</option><option value="drop">Score drops</option><option value="fixed">Fixed</option><option value="info">Info</option>
                  </select>
                  <button className="tab" onClick={markAll}>Mark all read</button>
                  <button className="tab" onClick={() => setNotifs([])}>Clear history</button>
                  <button className="tab" onClick={() => setNOpen(false)}>Close</button>
                </div>
              </div>
              {nCat === "Off-page" ? offPage.map((o, k) => (
                <div key={k} className="row"><Badge label={o.level === "issue" ? "To do" : "Note"} color={o.level === "issue" ? C.red : C.blue} /><div className="note" style={{ marginTop: 0 }}>{o.msg}</div></div>
              )) : shownN.length === 0 ? <div className="note">No notifications yet. Click "Check now" to run the first full check and save a baseline.</div> : shownN.slice(0, 100).map((n) => (
                <div key={n.id} className="row" style={{ opacity: n.read ? 0.6 : 1 }}>
                  <Badge label={n.kind === "fixed" ? "Fixed" : n.kind === "drop" ? "Score drop" : n.kind === "info" ? "Info" : n.level === "issue" ? "New fix" : "New note"} color={n.kind === "fixed" ? C.green : n.kind === "info" ? C.blue : n.level === "issue" ? C.red : C.yellow} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12.5 }}><strong style={{ color: "#fff" }}>{n.cat}</strong> · <span style={{ color: C.blue, fontFamily: "monospace", fontSize: 11 }}>{n.page}</span></div>
                    <div className="note">{n.msg}</div>
                  </div>
                  <div className="note" style={{ marginTop: 0, whiteSpace: "nowrap" }}>{new Date(n.at).toLocaleString()}</div>
                </div>
              ))}
              {shownN.length > 100 && nCat !== "Off-page" && <div className="note">Showing the newest 100 of {shownN.length}.</div>}
            </div>
          )}
          <div className="tabs">{TABS.map((t) => <button key={t} className={`tab${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>{t}</button>)}</div>

          {tab === "Overview" && (<>
            <div className="grid">
              <div className="stat"><div className="val">{GSC.clicks}</div><div className="lbl">Clicks, {GSC.range}</div></div>
              <div className="stat"><div className="val">{GSC.impressions}</div><div className="lbl">Impressions (CTR {ctr}%)</div></div>
              <div className="stat"><div className="val">{tasksDone}/{TASKS.length}</div><div className="lbl">Plan tasks done</div></div>
              <div className="stat"><div className="val">{verified}/{TRUST.length}</div><div className="lbl">Trust signals verified</div></div>
            </div>
            <div className="warn">{GSC.note} Positions 40–80 are pages 4–8, so almost no one clicks. The main gap is trust: no Google Business Profile, no real reviews, no named people or license numbers, and few real third-party mentions.</div>
            <div className="card">
              <div className="h">Do these first</div>
              {TASKS.filter((t) => t.priority === "critical" && !isDone(t)).map((t) => (
                <div key={t.id} className="row"><Badge label="Critical" color={C.red} /><div>{t.task}</div></div>
              ))}
              {TASKS.filter((t) => t.priority === "critical" && !isDone(t)).length === 0 && <div className="note">All critical tasks are done.</div>}
            </div>
          </>)}

          {tab === "Scores" && (<>
            <div className="warn">Scores come from a live check of every page in your sitemap against a fixed checklist (each score is out of 100). They measure on-page readiness, not ranking. GEO means local signals on the page. LLMO means machine-readable entity and trust signals.</div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
              <button onClick={runAudit} disabled={busy} className="tab active" style={{ padding: "10px 18px", opacity: busy ? 0.6 : 1 }}>{busy ? "Checking pages…" : audit ? "Run audit again" : "Run audit"}</button>
              {audit && <span className="note" style={{ marginTop: 0 }}>{audit.count} pages, run {new Date(audit.generatedAt).toLocaleString()}</span>}
              {err && <span style={{ color: C.red, fontSize: 12.5 }}>{err}</span>}
            </div>
            {audit && (<>
              <div className="grid">
                {DIMS.map(([k, l]) => (<div key={k} className="stat"><div className="val" style={{ color: scoreColor(avg(k)) }}>{avg(k)}</div><div className="lbl">Average {l}</div></div>))}
              </div>
              <div className="card" style={{ overflowX: "auto" }}>
                <table>
                  <thead><tr><th>Page (lowest average first)</th>{DIMS.map(([k, l]) => <th key={k}>{l}</th>)}<th>Flags</th></tr></thead>
                  <tbody>
                    {[...audit.results].sort((a, b) => mean(a) - mean(b)).map((r) => {
                      const path = r.url.replace(/^https?:\/\/[^/]+/, "") || "/";
                      return (
                        <Fragment key={r.url}>
                          <tr onClick={() => setOpen(open === r.url ? null : r.url)} style={{ cursor: "pointer" }}>
                            <td style={{ color: C.blue, fontFamily: "monospace", fontSize: 11 }}>{path}</td>
                            {r.scores
                              ? DIMS.map(([k]) => <td key={k} style={{ fontWeight: 700, color: scoreColor(r.scores![k]) }}>{r.scores![k]}</td>)
                              : <td colSpan={4} style={{ color: C.red }}>{r.error || "Not checked"}</td>}
                            <td>{r.flags?.length ? <Badge label={String(r.flags.length)} color={C.yellow} /> : ""}</td>
                          </tr>
                          {open === r.url && r.scores && (
                            <tr><td colSpan={6} style={{ background: "rgba(255,255,255,.02)" }}>
                              {r.flags?.map((f) => <div key={f} style={{ color: C.yellow, marginBottom: 4 }}>{f}</div>)}
                              <div className="note" style={{ marginBottom: 6 }}>Checks this page did not pass:</div>
                              {r.missing?.map((m) => <div key={m} className="note" style={{ marginTop: 2 }}>{m}</div>)}
                            </td></tr>
                          )}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>)}
          </>)}

          {tab === "Images" && (<>
            <div className="warn">This checks every image on every page in your sitemap: where it is used, its link, alt text, format, file size, and dimensions. "Done" means no required fixes. Images set as CSS backgrounds are not detected.</div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
              <button onClick={runImages} disabled={imgBusy} className="tab active" style={{ padding: "10px 18px", opacity: imgBusy ? 0.6 : 1 }}>{imgBusy ? "Checking images…" : img ? "Run image audit again" : "Run image audit"}</button>
              {img && <span className="note" style={{ marginTop: 0 }}>{img.pages} pages, run {new Date(img.generatedAt).toLocaleString()}</span>}
              {imgErr && <span style={{ color: C.red, fontSize: 12.5 }}>{imgErr}</span>}
            </div>
            {img && (<>
              <div className="grid">
                <div className="stat"><div className="val">{imgs.length}</div><div className="lbl">Unique images</div></div>
                <div className="stat"><div className="val">{fmtSize(imgBytes)}</div><div className="lbl">Total file size</div></div>
                <div className="stat"><div className="val" style={{ color: imgFix ? C.red : C.green }}>{imgFix}</div><div className="lbl">Need fixing</div></div>
                <div className="stat"><div className="val" style={{ color: imgNoAlt ? C.red : C.green }}>{imgNoAlt}</div><div className="lbl">Missing alt text</div></div>
              </div>
              <div className="warn" style={{ borderColor: imgFix ? "rgba(239,68,68,.35)" : "rgba(34,197,94,.35)", background: imgFix ? "rgba(239,68,68,.08)" : "rgba(34,197,94,.08)" }}>
                {imgFix ? `Image SEO is not finished: ${imgFix} of ${imgs.length} images need fixing.` : "Image SEO is done: no image has a required fix."}
              </div>

              <div className="card" style={{ overflowX: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, gap: 8, flexWrap: "wrap" }}>
                  <div className="h" style={{ marginBottom: 0 }}>All images ({shown.length})</div>
                  <select value={imgFilter} onChange={(e) => setImgFilter(e.target.value)} style={{ background: "#09090B", color: "#fff", border: "1px solid rgba(255,255,255,.15)", borderRadius: 4, padding: "6px 10px", fontFamily: "inherit" }}>
                    <option value="all">All images</option><option value="fix">Need fixing</option><option value="alt">Missing alt text</option><option value="large">Over 200 KB</option>
                  </select>
                </div>
                <table>
                  <thead><tr><th></th><th>File and link</th><th>Alt text</th><th>Format</th><th>Size</th><th>Dimensions</th><th>Used on</th><th>Status</th></tr></thead>
                  <tbody>
                    {shown.map((i) => {
                      const first = i.usages.find((u) => !u.og);
                      const pgs = [...new Set(i.usages.map((u) => u.page))];
                      const st = i.status === "fix" ? ["Needs fixing", C.red] : i.status === "note" ? ["Done, can improve", C.blue] : ["Done", C.green];
                      return (
                        <Fragment key={i.url}>
                          <tr onClick={() => setImgOpen(imgOpen === i.url ? null : i.url)} style={{ cursor: "pointer" }}>
                            <td><img src={i.thumb} alt="" width={40} height={40} loading="lazy" style={{ objectFit: "cover", borderRadius: 4, background: "#09090B" }} /></td>
                            <td><a href={i.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ color: C.blue, fontSize: 12, wordBreak: "break-all" }}>{i.name}</a></td>
                            <td style={{ maxWidth: 240, color: first && first.alt && first.alt.trim() ? undefined : C.red }}>{i.usages.every((u) => u.og) ? "Open Graph image" : first && first.alt && first.alt.trim() ? first.alt : "Missing"}</td>
                            <td>{i.format.toUpperCase()}{i.viaNext ? " (Next)" : ""}</td>
                            <td style={{ fontWeight: 700, color: i.bytes > 500 * 1024 ? C.red : i.bytes > 200 * 1024 ? C.yellow : C.green }}>{fmtSize(i.bytes)}</td>
                            <td>{i.width && i.height ? `${i.width}×${i.height}` : "n/a"}</td>
                            <td><div style={{ maxHeight: 96, overflowY: "auto", minWidth: 150 }}><div className="note" style={{ marginTop: 0 }}>{pgs.length} page{pgs.length === 1 ? "" : "s"}</div>{pgs.map((pg) => <div key={pg} style={{ color: C.blue, fontFamily: "monospace", fontSize: 11 }}>{pg}</div>)}</div></td>
                            <td><Badge label={st[0]} color={st[1]} /></td>
                          </tr>
                          {imgOpen === i.url && (
                            <tr><td colSpan={8} style={{ background: "rgba(255,255,255,.02)" }}>
                              <div className="note" style={{ marginTop: 0, wordBreak: "break-all" }}>Link: {i.url}</div>
                              {i.issues.map((m) => <div key={m} style={{ color: C.red, marginTop: 4 }}>Fix: {m}</div>)}
                              {i.notes.map((m) => <div key={m} className="note">Optional: {m}</div>)}
                              <div className="note" style={{ marginTop: 10 }}>Used on {i.usages.length} place(s):</div>
                              {i.usages.map((u, k) => (
                                <div key={k} style={{ fontSize: 12, marginTop: 6 }}>
                                  <span style={{ color: C.blue, fontFamily: "monospace" }}>{u.page}</span>
                                  <span className="note"> {u.og ? "Open Graph image" : `alt: ${u.alt === null ? "(missing)" : `"${u.alt}"`}, loading: ${u.loading}${u.hasDims ? "" : ", no width/height set"}`}</span>
                                  {u.issues.map((m) => <span key={m} style={{ color: C.red }}> · Fix: {m}</span>)}
                                  {u.notes.map((m) => <span key={m} className="note"> · {m}</span>)}
                                </div>
                              ))}
                            </td></tr>
                          )}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="card" style={{ overflowX: "auto" }}>
                <div className="h">Image SEO by page (most issues first)</div>
                <table>
                  <thead><tr><th>Page</th><th>Images</th><th>Total size</th><th>Issues</th><th>Image SEO done?</th></tr></thead>
                  <tbody>{img.pageSummary.map((p) => {
                    const onPage = imgs.filter((i) => i.usages.some((u) => u.page === p.page));
                    return (
                    <Fragment key={p.page}>
                    <tr onClick={() => setPgOpen(pgOpen === p.page ? null : p.page)} style={{ cursor: "pointer" }}>
                      <td style={{ color: C.blue, fontFamily: "monospace", fontSize: 11 }}>{p.page}</td>
                      <td>{p.count}</td>
                      <td>{fmtSize(p.bytes)}</td>
                      <td style={{ fontWeight: 700, color: p.issues ? C.red : C.green }}>{p.issues}</td>
                      <td><Badge label={p.done ? "Yes" : "No"} color={p.done ? C.green : C.red} /></td>
                    </tr>
                    {pgOpen === p.page && (
                      <tr><td colSpan={5} style={{ background: "rgba(255,255,255,.02)" }}>
                        <div className="note" style={{ marginTop: 0, marginBottom: 6 }}>Images on this page:</div>
                        {onPage.map((i) => {
                          const u = i.usages.find((x) => x.page === p.page && !x.og) || i.usages.find((x) => x.page === p.page);
                          return (
                            <div key={i.url} style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 8, fontSize: 12 }}>
                              <img src={i.thumb} alt="" width={32} height={32} loading="lazy" style={{ objectFit: "cover", borderRadius: 4 }} />
                              <a href={i.url} target="_blank" rel="noopener noreferrer" style={{ color: C.blue, wordBreak: "break-all" }}>{i.name}</a>
                              <span className="note" style={{ marginTop: 0 }}>{fmtSize(i.bytes)} · {u?.og ? "Open Graph image" : u?.alt ? `alt: "${u.alt}"` : "alt: missing"}</span>
                              <Badge label={i.status === "fix" ? "Needs fixing" : i.status === "note" ? "Can improve" : "Done"} color={i.status === "fix" ? C.red : i.status === "note" ? C.blue : C.green} />
                            </div>
                          );
                        })}
                      </td></tr>
                    )}
                    </Fragment>
                    );
                  })}
                  </tbody>
                </table>
                <div className="note">Pages with no images at all are not listed.</div>
              </div>
            </>)}
          </>)}

          {tab === "Headings" && (<>
            <div className="warn">This checks the heading structure (H1 to H6) inside the main content of every page in your sitemap. A page passes when it has exactly one H1, starts with the H1, and never skips a level going down (for example H2 straight to H4). Headings in the header and footer are not counted.</div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
              <button onClick={runHeadings} disabled={hdBusy} className="tab active" style={{ padding: "10px 18px", opacity: hdBusy ? 0.6 : 1 }}>{hdBusy ? "Checking headings…" : hd ? "Run heading audit again" : "Run heading audit"}</button>
              {hd && <span className="note" style={{ marginTop: 0 }}>{hd.pages} pages, run {new Date(hd.generatedAt).toLocaleString()}</span>}
              {hdErr && <span style={{ color: C.red, fontSize: 12.5 }}>{hdErr}</span>}
            </div>
            {hd && (<>
              <div className="grid">
                <div className="stat"><div className="val">{hdRows.length}</div><div className="lbl">Pages checked</div></div>
                <div className="stat"><div className="val" style={{ color: hdOk === hdRows.length ? C.green : C.yellow }}>{hdOk}</div><div className="lbl">Pages with correct hierarchy</div></div>
                <div className="stat"><div className="val" style={{ color: hdSkip ? C.red : C.green }}>{hdSkip}</div><div className="lbl">Pages that skip a level</div></div>
                <div className="stat"><div className="val" style={{ color: hdH1 ? C.red : C.green }}>{hdH1}</div><div className="lbl">Pages without exactly one H1</div></div>
              </div>
              <div className="warn" style={{ borderColor: hdOk === hdRows.length ? "rgba(34,197,94,.35)" : "rgba(239,68,68,.35)", background: hdOk === hdRows.length ? "rgba(34,197,94,.08)" : "rgba(239,68,68,.08)" }}>
                {hdOk === hdRows.length ? "Heading hierarchy is done on every page." : `Heading hierarchy is not finished: ${hdRows.length - hdOk} of ${hdRows.length} pages have a problem.`}
              </div>
              <div className="card" style={{ overflowX: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, gap: 8, flexWrap: "wrap" }}>
                  <div className="h" style={{ marginBottom: 0 }}>Pages ({hdShown.length}). Click a row to see its heading outline.</div>
                  <select value={hdFilter} onChange={(e) => setHdFilter(e.target.value)} style={{ background: "#09090B", color: "#fff", border: "1px solid rgba(255,255,255,.15)", borderRadius: 4, padding: "6px 10px", fontFamily: "inherit" }}>
                    <option value="all">All pages</option><option value="bad">Has a problem</option><option value="skip">Skips a level</option><option value="h1">H1 problem</option>
                  </select>
                </div>
                <table>
                  <thead><tr><th>Page</th><th>Headings</th><th>H1 count</th><th>Skipped levels</th><th>Hierarchy done?</th></tr></thead>
                  <tbody>
                    {hdShown.map((r) => (
                      <Fragment key={r.page}>
                        <tr onClick={() => setHdOpen(hdOpen === r.page ? null : r.page)} style={{ cursor: "pointer" }}>
                          <td style={{ color: C.blue, fontFamily: "monospace", fontSize: 11 }}>{r.page}</td>
                          {r.error
                            ? <td colSpan={4} style={{ color: C.red }}>{r.error}</td>
                            : (<>
                              <td>{r.count}</td>
                              <td style={{ fontWeight: 700, color: r.h1 === 1 ? C.green : C.red }}>{r.h1}</td>
                              <td style={{ fontWeight: 700, color: r.skips ? C.red : C.green }}>{r.skips}</td>
                              <td><Badge label={r.done ? "Yes" : "No"} color={r.done ? C.green : C.red} /></td>
                            </>)}
                        </tr>
                        {hdOpen === r.page && !r.error && (
                          <tr><td colSpan={5} style={{ background: "rgba(255,255,255,.02)" }}>
                            {r.issues?.map((m) => <div key={m} style={{ color: C.red, marginBottom: 4 }}>Fix: {m}</div>)}
                            {r.notes?.map((m) => <div key={m} className="note">Optional: {m}</div>)}
                            <div className="note" style={{ marginTop: 10, marginBottom: 6 }}>Heading outline:</div>
                            {r.outline?.map((h, k) => (
                              <div key={k} style={{ paddingLeft: (h.level - 1) * 18, fontSize: 12.5, marginTop: 4, color: h.flag ? C.red : "rgba(255,255,255,.75)" }}>
                                <span style={{ fontFamily: "monospace", color: h.flag ? C.red : C.blue, marginRight: 8 }}>H{h.level}</span>
                                {h.text || "(empty)"}
                                {h.flag && <span style={{ marginLeft: 8, fontSize: 11 }}>← {h.flag}</span>}
                              </div>
                            ))}
                          </td></tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </>)}
          </>)}

          {tab === "Technical" && (<>
            <div className="warn">This runs a technical audit on every page in your sitemap, plus site-wide checks (robots.txt, sitemap, HTTPS, 404 handling, security headers). Each problem names the page and where in the page it is. "Fix" items are required. "Note" items are worth improving.</div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
              <button onClick={runTech} disabled={tcBusy} className="tab active" style={{ padding: "10px 18px", opacity: tcBusy ? 0.6 : 1 }}>{tcBusy ? "Auditing… this takes up to a minute" : tc ? "Run technical audit again" : "Run technical audit"}</button>
              {tc && <span className="note" style={{ marginTop: 0 }}>{tc.pages} pages, run {new Date(tc.generatedAt).toLocaleString()}</span>}
              {tcErr && <span style={{ color: C.red, fontSize: 12.5 }}>{tcErr}</span>}
            </div>
            {tc && (<>
              <div className="grid">
                <div className="stat"><div className="val">{tcRows.length}</div><div className="lbl">Pages checked</div></div>
                <div className="stat"><div className="val" style={{ color: tcPagesBad ? C.red : C.green }}>{tcPagesBad}</div><div className="lbl">Pages with required fixes</div></div>
                <div className="stat"><div className="val" style={{ color: tcTotalIssues ? C.red : C.green }}>{tcTotalIssues}</div><div className="lbl">Fix items on pages</div></div>
                <div className="stat"><div className="val" style={{ color: C.blue }}>{tcTotalNotes}</div><div className="lbl">Notes to improve</div></div>
              </div>
              <div className="warn" style={{ borderColor: tcPagesBad || tcSiteBad ? "rgba(239,68,68,.35)" : "rgba(34,197,94,.35)", background: tcPagesBad || tcSiteBad ? "rgba(239,68,68,.08)" : "rgba(34,197,94,.08)" }}>
                {tcPagesBad || tcSiteBad ? `Technical SEO is not finished: ${tcPagesBad} of ${tcRows.length} pages and ${tcSiteBad} site-wide check(s) need fixing.` : "Technical SEO is done: no required fixes on any page or site-wide."}
              </div>

              <div className="card">
                <div className="h">Site-wide checks</div>
                {tc.site.map((s) => (
                  <div key={s.name} className="row">
                    <Badge label={s.level === "ok" ? "OK" : s.level === "issue" ? "Fix" : "Note"} color={s.level === "ok" ? C.green : s.level === "issue" ? C.red : C.blue} />
                    <div><div style={{ fontWeight: 600 }}>{s.name}</div><div className="note">{s.detail}</div></div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ overflowX: "auto" }}>
                <div className="h">Problems by type (start with the top rows)</div>
                {tcTypes.length === 0 ? <div className="note">No page problems found.</div> : (
                  <table>
                    <thead><tr><th>Type</th><th>Level</th><th>Pages affected</th><th>Total</th><th>Example pages</th></tr></thead>
                    <tbody>{tcTypes.map(([t, e]) => (
                      <tr key={t} onClick={() => setTcType(tcType === t ? "all" : t)} style={{ cursor: "pointer" }}>
                        <td style={{ fontWeight: 600, color: "#fff" }}>{t}</td>
                        <td><Badge label={e.level === "issue" ? "Fix" : "Note"} color={e.level === "issue" ? C.red : C.blue} /></td>
                        <td>{e.pages.size}</td>
                        <td>{e.count}</td>
                        <td style={{ color: C.blue, fontFamily: "monospace", fontSize: 11 }}>{[...e.pages].slice(0, 3).join(", ")}{e.pages.size > 3 ? ` +${e.pages.size - 3} more` : ""}</td>
                      </tr>))}
                    </tbody>
                  </table>
                )}
                <div className="note">Click a type to filter the page list below.</div>
              </div>

              <div className="card" style={{ overflowX: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, gap: 8, flexWrap: "wrap" }}>
                  <div className="h" style={{ marginBottom: 0 }}>Problems by page ({tcShown.length}). Click a row to see each problem and where it is.</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <select value={tcShow} onChange={(e) => setTcShow(e.target.value)} style={{ background: "#09090B", color: "#fff", border: "1px solid rgba(255,255,255,.15)", borderRadius: 4, padding: "6px 10px", fontFamily: "inherit" }}>
                      <option value="all">All pages</option><option value="issues">Only pages with fixes</option>
                    </select>
                    <select value={tcType} onChange={(e) => setTcType(e.target.value)} style={{ background: "#09090B", color: "#fff", border: "1px solid rgba(255,255,255,.15)", borderRadius: 4, padding: "6px 10px", fontFamily: "inherit" }}>
                      <option value="all">All problem types</option>{tcTypes.map(([t]) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <table>
                  <thead><tr><th>Page</th><th>HTTP</th><th>Response</th><th>HTML size</th><th>Fixes</th><th>Notes</th><th>Technical done?</th></tr></thead>
                  <tbody>
                    {tcShown.map((r) => (
                      <Fragment key={r.page}>
                        <tr onClick={() => setTcOpen(tcOpen === r.page ? null : r.page)} style={{ cursor: "pointer" }}>
                          <td style={{ color: C.blue, fontFamily: "monospace", fontSize: 11 }}>{r.page}</td>
                          <td style={{ color: r.status === 200 ? C.green : C.red, fontWeight: 700 }}>{r.status || "none"}</td>
                          <td style={{ color: r.ms > 3000 ? C.red : r.ms > 1000 ? C.yellow : C.green }}>{r.ms} ms</td>
                          <td>{r.kb ? `${r.kb} KB` : "n/a"}</td>
                          <td style={{ fontWeight: 700, color: tcIssues(r) ? C.red : C.green }}>{tcIssues(r)}</td>
                          <td style={{ color: tcNotes(r) ? C.blue : undefined }}>{tcNotes(r)}</td>
                          <td><Badge label={tcIssues(r) ? "No" : "Yes"} color={tcIssues(r) ? C.red : C.green} /></td>
                        </tr>
                        {tcOpen === r.page && (
                          <tr><td colSpan={7} style={{ background: "rgba(255,255,255,.02)" }}>
                            {r.problems.length === 0 && <div className="note" style={{ marginTop: 0 }}>No problems found on this page.</div>}
                            {r.problems.map((p, k) => (
                              <div key={k} className="row" style={{ padding: "8px 0" }}>
                                <Badge label={p.level === "issue" ? "Fix" : "Note"} color={p.level === "issue" ? C.red : C.blue} />
                                <div>
                                  <div style={{ fontSize: 12.5 }}><strong style={{ color: "#fff" }}>{p.type}:</strong> {p.msg}</div>
                                  {p.where && <div className="note">Where: <span style={{ fontFamily: "monospace" }}>{p.where}</span></div>}
                                </div>
                              </div>
                            ))}
                          </td></tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </>)}
          </>)}

          {tab === "Search Console" && (
            <div className="card">
              <div className="h">Where to look in Search Console</div>
              {[
                ["Security & manual actions", "Confirm there is no manual action or security issue."],
                ["Pages → Not indexed", "Open each of the 8 not-indexed pages and read the reason."],
                ["URL Inspection", "Test the homepage and mold page: indexed? Google-chosen canonical? Last crawl date?"],
                ["Performance → Queries", "Filter Jul 12–20, export, then filter Aug 11–Sep 17 and compare. This shows which queries dropped."],
                ["Performance → Countries", "Filter to United States so your own clicks from Pakistan do not inflate the numbers."],
              ].map(([a, b]) => (<div key={a} className="row"><div style={{ fontWeight: 600, minWidth: 190 }}>{a}</div><div className="note" style={{ marginTop: 0 }}>{b}</div></div>))}
            </div>
          )}

          {tab === "On-page" && (
            <div className="card">
              <div className="h">Titles and descriptions (lengths are computed, not typed)</div>
              <div className="note" style={{ marginBottom: 10 }}>These are saved snapshots. Confirm live values with view-source. Aim for titles up to 60 characters and descriptions of 120–160.</div>
              <div style={{ overflowX: "auto" }}>
                <table>
                  <thead><tr><th>URL</th><th>Title</th><th>Len</th><th>Description</th><th>Len</th></tr></thead>
                  <tbody>{PAGES.map((p) => {
                    const t = p.title.length, m = p.meta.length;
                    return (<tr key={p.url}>
                      <td style={{ color: C.blue, fontFamily: "monospace", fontSize: 11 }}>{p.url}</td>
                      <td>{p.title}</td>
                      <td style={{ fontWeight: 700, color: t <= 60 ? C.green : C.red }}>{t}</td>
                      <td>{p.meta}</td>
                      <td style={{ fontWeight: 700, color: m >= 120 && m <= 160 ? C.green : C.yellow }}>{m}</td>
                    </tr>);
                  })}</tbody>
                </table>
              </div>
            </div>
          )}

          {tab === "Local" && (<>
            <div className="warn">A Google Business Profile is only for a real business with a staffed address that serves customers. If the phone connects to a partner contractor and 215 Legion Street is not their location, a profile can be suspended. Decide this before creating one.</div>
            <div className="card">
              <div className="h">Official NAP: use exactly this everywhere</div>
              {Object.entries(NAP).map(([k, v]) => (<div key={k} className="row"><div style={{ minWidth: 90, color: C.muted, fontSize: 12 }}>{k}</div><div>{v}</div></div>))}
              <div className="note">Keep this number in listings and schema. Use Ringba dynamic number insertion only for tracking, never to replace the main number.</div>
            </div>
            <div className="card">
              <div className="h">Citations ({citDone}/{CITATIONS.length} done)</div>
              <table>
                <thead><tr><th>Site</th><th>Why</th><th>Status</th><th></th></tr></thead>
                <tbody>{CITATIONS.map((c) => (
                  <tr key={c.id}>
                    <td style={{ fontWeight: 600, color: "#fff" }}>{c.name}</td>
                    <td>{c.note}</td>
                    <td>
                      <select value={cit[c.id] || "todo"} onChange={(e) => setCit({ ...cit, [c.id]: e.target.value })}
                        style={{ background: "#09090B", color: "#fff", border: "1px solid rgba(255,255,255,.15)", borderRadius: 4, padding: "4px 8px", fontFamily: "inherit" }}>
                        <option value="todo">To do</option><option value="progress">In progress</option><option value="done">Done</option>
                      </select>
                    </td>
                    <td><a href={`https://${c.url}`} target="_blank" rel="noopener noreferrer" style={{ color: C.blue, fontSize: 12 }}>Open</a></td>
                  </tr>))}
                </tbody>
              </table>
            </div>
          </>)}

          {tab === "Trust (AEO/LLM)" && (
            <div className="card">
              <div className="h">What search engines and AI answers can verify about you</div>
              <div className="note" style={{ marginBottom: 10 }}>Structure is in good shape. AI engines also cross-check outside sources, which is where the gaps are. llms.txt is optional and Google does not use it.</div>
              {TRUST.map((t) => (
                <div key={t.label} className="row">
                  <Badge label={stateLabel(t.state)} color={stateColor(t.state)} />
                  <div><div style={{ fontWeight: 600 }}>{t.label}</div><div className="note">{t.note}</div></div>
                </div>
              ))}
            </div>
          )}

          {tab === "Keywords" && (
            <div className="card">
              <div className="h">Keywords with Semrush data</div>
              <div className="note" style={{ marginBottom: 10 }}>Volumes are monthly searches. "Not pulled" means no verified figure yet. Pull those in Semrush Keyword Magic Tool before targeting them.</div>
              <table>
                <thead><tr><th>Keyword</th><th>Volume</th><th>KD%</th><th>Target page</th></tr></thead>
                <tbody>{KEYWORDS.map((k) => (
                  <tr key={k.kw}><td style={{ color: "#fff", fontWeight: 600 }}>{k.kw}</td><td>{k.vol ?? "Not pulled"}</td><td>{k.kd ?? "Not pulled"}</td><td>{k.page}</td></tr>
                ))}</tbody>
              </table>
            </div>
          )}

          {tab === "Schema" && (
            <div className="card">
              <div className="h">Structured data rules</div>
              {SCHEMA.map((s) => (
                <div key={s.item} className="row">
                  <Badge label={s.status === "hold" ? "Hold" : "Keep"} color={s.status === "hold" ? C.red : C.green} />
                  <div><div style={{ fontWeight: 600 }}>{s.item}</div><div className="note">{s.note}</div></div>
                </div>
              ))}
            </div>
          )}

          {tab === "Actions" && (
            <div className="card">
              <div className="h">30-day plan ({tasksDone}/{TASKS.length} done)</div>
              {TASKS.map((t) => (
                <div key={t.id} className="row">
                  <input type="checkbox" checked={isDone(t)} disabled={t.priority === "done"}
                    onChange={() => setDone({ ...done, [t.id]: !done[t.id] })} style={{ accentColor: C.green, marginTop: 3 }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ textDecoration: isDone(t) ? "line-through" : "none", color: isDone(t) ? C.muted : "#fff" }}>{t.task}</span>{" "}
                    <Badge label={t.week} color={prioColor(t.priority)} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}