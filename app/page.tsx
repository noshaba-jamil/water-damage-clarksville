import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";

export const metadata: Metadata = {
  title: "Water Damage Restoration Clarksville TN | 24/7 Response",
  description:
    "Clarksville TN water damage restoration. 60-min arrival, 24/7. Flood cleanup, mold remediation & structural drying. All insurance accepted. Call (931) 271-2350.",
  alternates: { canonical: "/" },
};

const SITE_URL = "https://water-damage-clarksville.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How fast can you respond to water damage in Clarksville TN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We guarantee 60-minute on-site arrival anywhere in Clarksville TN and Montgomery County, 24/7/365. A real expert answers your call in under 60 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with homeowners insurance for water damage in Tennessee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work directly with USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, and all major carriers. We handle full documentation, adjuster coordination, and direct billing.",
      },
    },
    {
      "@type": "Question",
      name: "How much does water damage restoration cost in Clarksville TN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs range from $1,300–$5,400 for minor events to $15,000–$40,000+ for major structural damage. The average Tennessee insurance claim is $12,473. Free inspection — call (931) 271-2350.",
      },
    },
    {
      "@type": "Question",
      name: "Will mold grow after water damage in Clarksville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — in Clarksville's humid subtropical climate, mold can begin growing within 24–48 hours of any water event. Immediate professional extraction and structural drying is critical.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Fort Campbell military families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fort Campbell is within our primary service area. We are experienced USAA preferred vendors and serve military families daily with deployment-aware scheduling.",
      },
    },
  ],
};

/**
 * All images live in /public/my/
 * Drop your actual files into that folder using these exact names,
 * OR keep your own filenames and just update the strings below to match.
 * Next/Image will auto-serve WebP/AVIF, resize per-breakpoint, and lazy-load
 * everything except the hero (which is marked priority for fast LCP).
 *
 * TWO THINGS CODE CAN'T FIX — handle these on the files/hosting side:
 * 1. GEO COORDINATES: embed Clarksville TN GPS EXIF data into each photo
 *    before upload (use ExifTool or a geo-tagging tool). Code can't add this.
 * 2. ROBOTS.TXT: confirm /images/ isn't disallowed in robots.txt so these
 *    images stay crawlable by Google Images.
 */
// ImageObject structured data — makes these images eligible for Google Image
// Search rich results. Update contentUrl if your final image dimensions differ.
const imageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/my/water-damage-clarksville-tn-hero.webp`,
      caption:
        "Water damage restoration professionals responding to a flooded property in Clarksville TN",
      name: "Water Damage Restoration Clarksville TN",
      description:
        "24/7 emergency water damage restoration team on-site in Clarksville, Tennessee.",
    },
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/my/water-damage-technician-assessment-clarksville.webp`,
      caption:
        "Restoration technician using moisture-detection equipment during a Clarksville TN water damage assessment",
      name: "Water Damage Assessment Clarksville TN",
    },
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/my/water-damage-restoration-team-clarksville.webp`,
      caption:
        "Clarksville TN water damage restoration team ready for 24/7 emergency dispatch",
      name: "Water Damage Restoration Team Clarksville TN",
    },
  ],
};

// NEW — LocalBusiness, Organization, WebSite, WebPage schema.
// Built only from confirmed NAP data. IMPORTANT: check layout.tsx first —
// if any of these already render sitewide there, remove the duplicate here.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Clarksville Water Damage Restoration",
  telephone: "+19312712350",
  email: "waterdamageclarksville@gmail.com",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "215 Legion Street",
    addressLocality: "Clarksville",
    addressRegion: "TN",
    postalCode: "37040",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.5298,
    longitude: -87.3595,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Clarksville Water Damage Restoration",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+19312712350",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Clarksville Water Damage Restoration",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Water Damage Restoration Clarksville TN | 24/7 Response",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#localbusiness` },
};

const HERO = "/my/water-damage-clarksville-tn-hero.webp";
const IMAGES = {
  svc1: "/my/emergency-water-damage-restoration-clarksville.webp",
  svc2: "/my/flood-cleanup-water-extraction-clarksville.webp",
  svc3: "/my/structural-drying-dehumidification-clarksville.webp",
  svc4: "/my/mold-remediation-removal-clarksville.webp",
  svc5: "/my/water-damage-insurance-claim-clarksville.webp",
  svc6: "/my/commercial-water-damage-restoration-clarksville.webp",
  why: "/my/water-damage-technician-assessment-clarksville.webp",
  cta: "/my/water-damage-restoration-team-clarksville.webp",
};

const services = [
  {
    img: IMAGES.svc1,
    tag: "EMERGENCY",
    title: "Emergency Water Damage Restoration",
    desc: "24/7 rapid response to any water emergency. IICRC-certified team on-site within 60 minutes of your call anywhere in Montgomery County.",
    href: "/emergency-water-damage-clarksville-tn",
    alt: "Emergency water damage restoration team responding to flooded property in Clarksville TN",
  },
  {
    img: IMAGES.svc2,
    tag: "EXTRACTION",
    title: "Flood Cleanup & Water Extraction",
    desc: "Industrial truck-mounted extraction removes thousands of gallons fast, stopping secondary damage and mold growth before they start.",
    href: "/flood-cleanup-clarksville-tn",
    alt: "Professional flood cleanup and water extraction equipment in Clarksville TN home",
  },
  {
    img: IMAGES.svc3,
    tag: "DRYING",
    title: "Structural Drying & Dehumidification",
    desc: "IICRC S500-compliant structural drying with daily moisture monitoring until every wall, floor, and subfloor reaches certified safe levels.",
    href: "/structural-drying-clarksville-tn",
    alt: "Industrial structural drying equipment in water-damaged Clarksville home",
  },
  {
    img: IMAGES.svc4,
    tag: "REMEDIATION",
    title: "Mold Remediation & Removal",
    desc: "Safe, thorough mold removal with containment barriers and HEPA air filtration. IICRC AMRT-certified to protect your family's health.",
    href: "/mold-remediation-clarksville-tn",
    alt: "IICRC-certified mold remediation professional in Clarksville TN home",
  },
  {
    img: IMAGES.svc5,
    tag: "INSURANCE",
    title: "Insurance Claim Management",
    desc: "Complete insurance claim handling — documentation, adjuster coordination, and direct billing. You pay only your deductible.",
    href: "/water-damage-insurance-claim-clarksville-tn",
    alt: "Water damage insurance claim documentation in Tennessee",
  },
  {
    img: IMAGES.svc6,
    tag: "COMMERCIAL",
    title: "Commercial Water Damage Restoration",
    desc: "Minimizing business downtime with fast, professional-grade commercial restoration for offices, retail, and industrial properties.",
    href: "/services/commercial-water-damage-clarksville-tn",
    alt: "Commercial water damage restoration for Clarksville TN business property",
  },
];

// NEW — common emergencies list, mirrors the "Common Emergencies" pattern
// requested. Reuses existing .emg-grid / .emg-item styling — no new CSS.
const emergencies = [
  "Burst & frozen pipes — water stopped and repaired immediately",
  "Basement flooding — extracted and dried same visit",
  "Sewage backup — cleared, sanitized, and Category 3 documented",
  "Water heater failure — leak stopped, hot water restored fast",
  "Hidden leaks — located with thermal imaging, no wall damage",
  "Storm & roof leak intrusion — stabilized before mold sets in",
];

const whyItems = [
  {
    n: "01",
    t: "Locally Based — Not a National Franchise",
    b: "Our team is stationed in Clarksville, not dispatched from a distant call center. We know Montgomery County's infrastructure, climate, and neighborhoods intimately.",
  },
  {
    n: "02",
    t: "60-Minute Guaranteed Arrival — Any Time",
    b: "We guarantee on-site arrival within 60 minutes to any property in our service area, 24 hours a day. This is a commitment, not an estimate.",
  },
  {
    n: "03",
    t: "Complete Insurance Claim Management",
    b: "We handle every aspect of your claim — moisture documentation, adjuster coordination, and direct billing for USAA, State Farm, Allstate, and all major carriers.",
  },
  {
    n: "04",
    t: "Fort Campbell Military Family Specialists",
    b: "We serve Fort Campbell military families daily, with deep expertise in USAA claims processing, deployment-aware scheduling, and on-base property protocols.",
  },
];

// UPDATED copy — "Simple. Honest. Fast." framing, same structure/data shape.
const steps = [
  {
    n: "01",
    t: "Call or Book Online",
    b: "A real expert answers in under 60 seconds — no hold times, no automated menus. Reach us by phone or request service online.",
  },
  {
    n: "02",
    t: "We Assess the Damage",
    b: "Thermal imaging maps every hidden moisture pocket. You get a clear plan and your insurance claim opened before we lift a finger.",
  },
  {
    n: "03",
    t: "We Dispatch Your Team",
    b: "Fully equipped, IICRC-certified technicians on-site within 60 minutes — guaranteed, anywhere in Montgomery County.",
  },
  {
    n: "04",
    t: "Problem Solved",
    b: "Extraction, drying, and restoration to verified pre-damage condition. You confirm satisfaction before we close the job.",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for
// when the Reviews section above is restored with verified testimonials
const reviews = [
  {
    q: "When our basement flooded at 2am, they were on-site in 40 minutes. Handled everything with State Farm directly. Could not have asked for a better team.",
    n: "Jennifer M.",
    l: "Sango, TN",
    init: "J",
  },
  {
    q: "The most professional restoration service I've encountered. Meticulous USAA documentation, fast claim settlement. Highest possible recommendation.",
    n: "Staff Sgt. Robert K.",
    l: "Fort Campbell, KY",
    init: "R",
  },
  {
    q: "Used thermal imaging cameras to find moisture hidden in our walls. Completely dried and verified. Zero mold issues eight months later. Outstanding work.",
    n: "Marcus T.",
    l: "St. Bethlehem, TN",
    init: "M",
  },
];
// NOTE: confirm these three reviews are from real, contactable customers
// before publishing. GSC flagged 54 invalid review-schema items sitewide —
// placeholder testimonials displayed as reviews is a likely source and a
// genuine Google review-policy risk, not just a styling matter.

const locs = [
  { l: "Fort Campbell, TN", h: "/locations/fort-campbell-tn" },
  { l: "Sango, TN", h: "/locations/sango-tn" },
  { l: "St. Bethlehem, TN", h: "/locations/st-bethlehem-tn" },
  { l: "Oak Grove, KY", h: "/locations/oak-grove-ky" },
  { l: "Hopkinsville, KY", h: "/locations/hopkinsville-ky" },
  { l: "Springfield, TN", h: "/locations/springfield-tn" },
  { l: "Ashland City, TN", h: "/locations/ashland-city-tn" },
  { l: "Dover, TN", h: "/locations/dover-tn" },
  { l: "Dickson, TN", h: "/locations/dickson-tn" },
  { l: "Woodlawn, TN", h: "/locations/woodlawn-tn" },
  { l: "Palmyra, TN", h: "/locations/palmyra-tn" },
  { l: "Pembroke, KY", h: "/locations/pembroke-ky" },
];

const faqs = [
  {
    q: "How fast can you respond to water damage emergencies in Clarksville TN?",
    a: "We guarantee 60-minute on-site arrival anywhere in Clarksville TN and Montgomery County, 24/7/365 — including holidays. A real expert answers your call in under 60 seconds.",
  },
  {
    q: "Do you work with homeowners insurance for water damage claims?",
    a: "Yes. We work directly with USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, and all major carriers. We handle full documentation, adjuster coordination, and direct billing.",
  },
  {
    q: "How much does water damage restoration cost in Clarksville TN?",
    a: "Costs range from $1,300–$5,400 for minor events to $15,000–$40,000+ for major structural damage. We provide a free inspection and detailed estimate before any work begins.",
  },
  {
    q: "Will mold grow after water damage in my Clarksville home?",
    a: "In Clarksville's humid subtropical climate, mold can begin growing within 24–48 hours. Our team applies antimicrobial treatments on every job from Day 1 to prevent growth.",
  },
  {
    q: "Do you offer 24/7 water damage restoration services?",
    a: "Yes. Our Clarksville team is available 24/7/365 — including nights, weekends, and all holidays. Call (931) 271-2350 anytime and a real restoration professional answers immediately.",
  },
];

// NEW — "Explore More" links, redesigned as chip/card groups (not a
// second footer). Includes real blog posts referenced across the site.
const exploreLinks: Record<string, [string, string][]> = {
  Services: [
    ["Emergency Water Damage", "/emergency-water-damage-clarksville-tn"],
    ["Flood Cleanup & Water Extraction", "/flood-cleanup-clarksville-tn"],
    ["Mold Remediation", "/mold-remediation-clarksville-tn"],
    ["Structural Drying", "/structural-drying-clarksville-tn"],
    ["Sewage Backup Cleanup", "/services/sewage-backup-cleanup-clarksville-tn"],
    ["Burst Pipe Water Damage", "/services/burst-pipe-water-damage-clarksville-tn"],
    ["Basement Flooding", "/services/basement-flooding-clarksville-tn"],
    ["Storm Damage Restoration", "/services/storm-damage-restoration-clarksville-tn"],
    ["Commercial Water Damage", "/services/commercial-water-damage-clarksville-tn"],
    ["Water Damage Insurance Claims", "/water-damage-insurance-claim-clarksville-tn"],
    ["Water Damage Odor Removal", "/water-damage-odor-removal-clarksville-tn"],
  ],
  "Service Areas": [
    ["All Service Areas", "/service-areas"],
    ["Fort Campbell, TN", "/locations/fort-campbell-tn"],
    ["Sango, TN", "/locations/sango-tn"],
    ["St. Bethlehem, TN", "/locations/st-bethlehem-tn"],
    ["Oak Grove, KY", "/locations/oak-grove-ky"],
    ["Hopkinsville, KY", "/locations/hopkinsville-ky"],
    ["Springfield, TN", "/locations/springfield-tn"],
    ["Ashland City, TN", "/locations/ashland-city-tn"],
    ["Dover, TN", "/locations/dover-tn"],
    ["Dickson, TN", "/locations/dickson-tn"],
    ["Woodlawn, TN", "/locations/woodlawn-tn"],
    ["Palmyra, TN", "/locations/palmyra-tn"],
    ["Pembroke, KY", "/locations/pembroke-ky"],
  ],
  "Blog & Guides": [
    ["All Blog Posts", "/blog"],
    ["Signs of Water Damage", "/blog/signs-of-water-damage"],
    ["Mold After Water Damage", "/blog/mold-after-water-damage"],
    ["Does Insurance Cover Water Damage in TN?", "/blog/insurance-cover-water-damage-tn"],
    ["Water Damage Restoration Cost Guide", "/blog/water-damage-restoration-cost-clarksville"],
    ["Basement Flooding Prevention Guide", "/blog/basement-flooding-clarksville-prevention"],
    ["Apartment & Condo Water Damage Guide", "/blog/apartment-condo-water-damage-clarksville"],
  ],
  Resources: [
    ["FAQ — Common Questions", "/faq"],
    ["About Our Team", "/about"],
    ["Free Estimate — Contact Us", "/contact"],
  ],
};

const exploreIcons: Record<string, string> = {
  Services: "🛠️",
  "Service Areas": "📍",
  "Blog & Guides": "📖",
  Resources: "💬",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <style>{`
      /* GLOBAL OVERFLOW SAFETY NET — catches any long unbroken string
         (emails, phone links, URLs) or unexpected wide element that could
         force horizontal scroll on narrow screens. Safe to add broadly. */
      html,body{max-width:100vw;overflow-x:hidden}
      p,span,a,div,h1,h2,h3{overflow-wrap:break-word;word-break:break-word}
      img,iframe,svg{max-width:100%}
      .hero{position:relative;min-height:100svh;display:flex;align-items:center;overflow:hidden}
      .hero-img{position:absolute;inset:0;overflow:hidden;background-color:#09090B}
      .hero-ov{position:absolute;inset:0;background:linear-gradient(110deg,rgba(9,9,11,.96) 38%,rgba(9,9,11,.6) 65%,rgba(9,9,11,.25) 100%);z-index:1}
      .hero-in{position:relative;z-index:2;max-width:1240px;margin:0 auto;width:100%;padding:0 40px;display:grid;grid-template-columns:1fr 400px;gap:56px;align-items:center}
      .h-badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(74,222,128,.25);background:rgba(74,222,128,.06);border-radius:100px;padding:6px 16px;margin-bottom:28px}
      .h-dot{width:6px;height:6px;border-radius:50%;background:#4ADE80;animation:hbp 1.8s infinite;flex-shrink:0}
      @keyframes hbp{0%,100%{opacity:1}50%{opacity:.3}}
      .h-badge-t{font-family:var(--font-inter);font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80}
      .h1{font-family:var(--font-cormorant);font-size:clamp(48px,6vw,80px);font-weight:700;color:#fff;line-height:1.0;letter-spacing:-2px;margin-bottom:8px}
      .h1-sub{font-family:var(--font-cormorant);font-size:clamp(48px,6vw,80px);font-weight:700;color:#4ADE80;font-style:italic;line-height:1.0;letter-spacing:-2px;margin-bottom:28px;display:block}
      .h-desc{font-family:var(--font-inter);font-size:clamp(15px,1.8vw,17px);line-height:1.75;color:rgba(255,255,255,.62);max-width:500px;margin-bottom:40px}
      .h-desc strong{color:rgba(255,255,255,.9);font-weight:600}
      .h-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:52px}
      .btn-g{display:inline-flex;align-items:center;gap:9px;background:#22C55E;color:#09090B;padding:15px 28px;border-radius:6px;font-family:var(--font-inter);font-size:14px;font-weight:700;text-decoration:none;transition:all .2s;white-space:nowrap}
      .btn-g:hover{background:#16A34A;box-shadow:0 6px 24px rgba(34,197,94,.35);transform:translateY(-1px)}
      .btn-w{display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.07);color:rgba(255,255,255,.85);padding:14px 24px;border-radius:6px;font-family:var(--font-inter);font-size:14px;font-weight:500;text-decoration:none;border:1px solid rgba(255,255,255,.18);transition:all .2s;white-space:nowrap}
      .btn-w:hover{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.4)}
      .h-stats{display:flex;border-top:1px solid rgba(255,255,255,.08);padding-top:40px;flex-wrap:wrap;gap:28px}
      .hs{padding-right:32px;border-right:1px solid rgba(255,255,255,.08)}
      .hs:last-child{border-right:none;padding-right:0}
      .hs-n{font-family:var(--font-cormorant);font-size:clamp(34px,4vw,46px);font-weight:700;color:#fff;line-height:1}
      .hs-l{font-family:var(--font-inter);font-size:11px;font-weight:500;color:rgba(255,255,255,.4);margin-top:5px;letter-spacing:.3px}
      .hp-form{background:rgba(24,24,27,.85);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:32px 28px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
      .hf-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:6px;display:block}
      .hf-t{font-family:var(--font-cormorant);font-size:24px;font-weight:700;color:#fff;line-height:1.1;letter-spacing:-.5px;margin-bottom:4px}
      .hf-s{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.35);margin-bottom:22px}
      .hf-f{margin-bottom:10px}
      .hf-f input,.hf-f select,.hf-f textarea{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#fff;font-family:var(--font-inter);font-size:13.5px;padding:11px 13px;outline:none;transition:border-color .2s;-webkit-appearance:none}
      .hf-f input::placeholder,.hf-f textarea::placeholder{color:rgba(255,255,255,.25)}
      .hf-f input:focus,.hf-f select:focus,.hf-f textarea:focus{border-color:#22C55E}
      .hf-f select option{background:#18181B;color:#fff}
      .hf-f textarea{height:64px;resize:none}
      .hf-sub{width:100%;background:#22C55E;color:#09090B;border:none;border-radius:6px;padding:13px;font-family:var(--font-inter);font-size:14px;font-weight:700;cursor:pointer;transition:background .2s;margin-top:4px}
      .hf-sub:hover{background:#16A34A}
      .hf-note{font-family:var(--font-inter);font-size:11px;color:rgba(255,255,255,.2);text-align:center;margin-top:10px}
      .hf-note a{color:rgba(74,222,128,.6)}
      .ticker{background:#18181B;border-top:1px solid rgba(255,255,255,.05);overflow:hidden;padding:13px 0;white-space:nowrap}
      .ticker-track{display:inline-flex;animation:tick 28s linear infinite}
      @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      .ticker-item{display:inline-flex;align-items:center;gap:16px;padding:0 24px;font-family:var(--font-inter);font-size:12px;font-weight:500;color:rgba(255,255,255,.35);letter-spacing:.5px}
      .ticker-dot{width:3px;height:3px;border-radius:50%;background:rgba(74,222,128,.5);flex-shrink:0}
      .sec{padding:96px 0}
      .sec-surf{background:#F9FAFB}
      .sec-dark{background:#18181B}
      .sec-head{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:end;margin-bottom:48px}
      .eyebrow{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-inter);font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#22C55E;margin-bottom:12px}
      .eyebrow-dot{width:5px;height:5px;border-radius:50%;background:#22C55E;flex-shrink:0}
      .display-h{font-family:var(--font-cormorant);font-size:clamp(32px,4vw,52px);font-weight:700;color:#09090B;line-height:1.05;letter-spacing:-1.2px}
      .display-h.light{color:#fff}
      .body-t{font-family:var(--font-inter);font-size:clamp(14px,1.5vw,16px);line-height:1.75;color:#52525B}
      .body-t.light{color:rgba(255,255,255,.55)}
      .svc-grid{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#E4E4E7;border:1px solid #E4E4E7;border-radius:8px;overflow:hidden}
      .svc-card{background:#fff;display:flex;flex-direction:column;text-decoration:none;transition:box-shadow .25s;overflow:hidden}
      .svc-card:hover{box-shadow:inset 0 0 0 2px #22C55E}
      .svc-img{height:200px;overflow:hidden;flex-shrink:0;position:relative}
      .svc-img img{object-fit:cover;transition:transform .5s cubic-bezier(.4,0,.2,1);display:block}
      .svc-card:hover .svc-img img{transform:scale(1.05)}
      .svc-body{padding:24px 24px 28px;display:flex;flex-direction:column;flex:1}
      .svc-tag{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;color:#16A34A;margin-bottom:8px}
      .svc-title{font-family:var(--font-cormorant);font-size:22px;font-weight:700;color:#09090B;margin-bottom:8px;letter-spacing:-.3px}
      .svc-desc{font-family:var(--font-inter);font-size:13.5px;line-height:1.65;color:#52525B;flex:1}
      .svc-arr{font-family:var(--font-inter);font-size:13px;font-weight:600;color:#09090B;margin-top:16px;display:flex;align-items:center;gap:6px;transition:gap .2s}
      .svc-card:hover .svc-arr{gap:10px;color:#16A34A}
      .svc-arr::after{content:"→"}
      .emg{background:#18181B;padding:80px 0}
      .emg-in{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
      .emg-row{display:flex;gap:20px;padding:20px 0;border-bottom:1px solid rgba(255,255,255,.06)}
      .emg-row:first-child{padding-top:0}
      .emg-row:last-child{border-bottom:none}
      .emg-time{font-family:var(--font-cormorant);font-size:16px;font-weight:700;color:#4ADE80;min-width:100px;flex-shrink:0;line-height:1.5;padding-top:2px}
      .emg-risk{font-family:var(--font-inter);font-size:13.5px;line-height:1.65;color:rgba(255,255,255,.5)}
      .emg-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px}
      .emg-item{display:flex;align-items:flex-start;gap:10px;background:#fff;border:1px solid #E4E4E7;border-radius:6px;padding:14px 16px;font-family:var(--font-inter);font-size:13.5px;color:#374151;line-height:1.55}
      .emg-item::before{content:'✓';color:#16A34A;font-weight:700;flex-shrink:0;margin-top:1px}
      .why-in{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
      .why-img{border-radius:8px;display:block}
      .why-img-wrap{position:relative;height:520px;border-radius:8px;overflow:hidden}
      .img-caption{font-family:var(--font-inter);font-size:12px;color:#9CA3AF;margin-top:10px;line-height:1.5}
      .img-caption.light{color:rgba(255,255,255,.45)}
      .why-badge{position:absolute;bottom:-20px;right:-20px;background:#18181B;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:20px 24px;z-index:2}
      .why-badge-n{font-family:var(--font-cormorant);font-size:40px;font-weight:700;color:#4ADE80;line-height:1}
      .why-badge-l{font-family:var(--font-inter);font-size:11px;color:rgba(255,255,255,.4);margin-top:5px}
      .why-list{display:flex;flex-direction:column}
      .why-item{display:flex;gap:20px;padding:22px 0;border-bottom:1px solid #E4E4E7}
      .why-item:first-of-type{padding-top:0}
      .why-item:last-child{border-bottom:none}
      .why-n{font-family:var(--font-cormorant);font-size:13px;font-weight:700;color:#16A34A;flex-shrink:0;min-width:28px;padding-top:3px}
      .why-tit{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B;margin-bottom:5px}
      .why-bod{font-family:var(--font-inter);font-size:13.5px;line-height:1.7;color:#52525B}
      .proc-grid{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#E4E4E7;border:1px solid #E4E4E7;border-radius:8px;overflow:hidden}
      .proc-card{background:#fff;padding:36px 28px;position:relative}
      .proc-card-bg-n{position:absolute;top:20px;right:20px;font-family:var(--font-cormorant);font-size:56px;font-weight:700;color:#F9FAFB;line-height:1;pointer-events:none;user-select:none}
      .proc-step-tag{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;color:#16A34A;margin-bottom:16px}
      .proc-title{font-family:var(--font-cormorant);font-size:22px;font-weight:700;color:#09090B;margin-bottom:10px;letter-spacing:-.3px}
      .proc-body{font-family:var(--font-inter);font-size:13.5px;line-height:1.7;color:#52525B}
      .rev-in{max-width:1240px;margin:0 auto;padding:0 40px}
      .rev-top{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:48px;flex-wrap:wrap;gap:20px}
      .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.06);border-radius:8px;overflow:hidden}
      .rev-card{background:#18181B;padding:36px 30px}
      .rev-stars{display:flex;gap:3px;margin-bottom:18px}
      .rev-star{color:#F59E0B;font-size:14px}
      .rev-q{font-family:var(--font-cormorant);font-size:17px;line-height:1.7;color:rgba(255,255,255,.72);margin-bottom:24px;font-style:italic}
      .rev-q::before{content:'"'}.rev-q::after{content:'"'}
      .rev-auth{display:flex;align-items:center;gap:13px}
      .rev-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-family:var(--font-inter);font-weight:700;font-size:15px;color:#fff;flex-shrink:0}
      .rev-name{font-family:var(--font-inter);font-size:13.5px;font-weight:600;color:#fff}
      .rev-loc{font-family:var(--font-inter);font-size:11.5px;color:rgba(255,255,255,.3);margin-top:2px}
      .loc-top{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:end;margin-bottom:44px}
      .loc-grid{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
      .loc-card{display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid #E4E4E7;border-radius:6px;padding:14px 18px;font-family:var(--font-inter);font-size:13.5px;font-weight:500;color:#52525B;text-decoration:none;transition:all .18s}
      .loc-card:hover{border-color:#22C55E;color:#16A34A;background:#F0FDF4}
      .loc-arr{font-size:12px;color:#D1D5DB;transition:color .18s;flex-shrink:0}
      .loc-card:hover .loc-arr{color:#22C55E}
      .faq-sec{padding:96px 0;background:#fff}
      .faq-inner{max-width:820px;margin:0 auto;padding:0 40px}
      .faq-head{text-align:center;margin-bottom:52px}
      .faq-item{border-bottom:1px solid #E4E4E7}
      .faq-q{font-family:var(--font-inter);font-size:16px;font-weight:600;color:#09090B;padding:22px 0;cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px}
      .faq-q::-webkit-details-marker{display:none}
      .faq-q::after{content:"+";font-size:20px;font-weight:300;color:#9CA3AF;flex-shrink:0;transition:transform .2s}
      details[open] .faq-q::after{transform:rotate(45deg)}
      .faq-a{font-family:var(--font-inter);font-size:14.5px;line-height:1.78;color:#52525B;padding-bottom:22px}
      .fcta-in{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 480px;gap:72px;align-items:center}
      .fcta-img-wrap{position:relative;height:540px;border-radius:8px;overflow:hidden;flex-shrink:0}
      .fcta-img{object-fit:cover;display:block}
      .fcta-img-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(9,9,11,.7) 0%,transparent 55%);z-index:1}
      .fcta-badge{position:absolute;bottom:24px;left:24px;background:rgba(9,9,11,.88);border:1px solid rgba(74,222,128,.2);border-radius:6px;padding:18px 22px;backdrop-filter:blur(8px);z-index:2}
      .fcta-badge-n{font-family:var(--font-cormorant);font-size:28px;font-weight:700;color:#4ADE80;line-height:1;letter-spacing:-.5px}
      .fcta-badge-l{font-family:var(--font-inter);font-size:11px;color:rgba(255,255,255,.4);margin-top:4px}
      .fcta-h2{font-family:var(--font-cormorant);font-size:clamp(32px,4vw,52px);font-weight:700;color:#09090B;line-height:1.05;letter-spacing:-1.2px;margin-bottom:18px}
      .fcta-h2 em{color:#16A34A;font-style:italic}
      .fcta-p{font-family:var(--font-inter);font-size:clamp(14px,1.5vw,16px);line-height:1.75;color:#52525B;margin-bottom:32px}
      .fcta-btns{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
      .fcta-btn1{display:flex;align-items:center;justify-content:center;gap:9px;background:#22C55E;color:#09090B;padding:16px;border-radius:6px;font-family:var(--font-inter);font-size:15px;font-weight:700;text-decoration:none;transition:all .2s}
      .fcta-btn1:hover{background:#16A34A;box-shadow:0 6px 24px rgba(34,197,94,.35);transform:translateY(-1px)}
      .fcta-btn2{display:flex;align-items:center;justify-content:center;gap:9px;background:transparent;color:#09090B;padding:14px;border-radius:6px;font-family:var(--font-inter);font-size:14px;font-weight:500;text-decoration:none;border:1px solid #E4E4E7;transition:all .2s}
      .fcta-btn2:hover{border-color:#52525B}
      .fcta-note{font-family:var(--font-inter);font-size:12px;color:#9CA3AF;line-height:1.6}
      .explore-sec{padding:88px 0;background:#fff}
      .explore-head{max-width:1240px;margin:0 auto 44px;padding:0 40px;text-align:center}
      .explore-cats{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
      @media(max-width:1200px){.explore-cats{grid-template-columns:repeat(2,1fr)!important}}
      .explore-cat{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:12px;padding:32px 28px;transition:border-color .2s,box-shadow .2s}
      .explore-cat:hover{border-color:#22C55E;box-shadow:0 8px 28px rgba(34,197,94,.08)}
      .explore-cat-top{display:flex;align-items:center;gap:12px;margin-bottom:20px}
      .explore-cat-icon{width:40px;height:40px;border-radius:9px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
      .explore-cat-title{font-family:var(--font-cormorant);font-size:20px;font-weight:700;color:#09090B;letter-spacing:-.3px}
      .explore-chips{display:flex;flex-wrap:wrap;gap:8px}
      .explore-chip{font-family:var(--font-inter);font-size:12.5px;font-weight:500;color:#374151;background:#fff;border:1px solid #E4E4E7;border-radius:100px;padding:7px 14px;text-decoration:none;transition:all .18s;white-space:nowrap}
      .explore-chip:hover{background:#22C55E;border-color:#22C55E;color:#09090B;transform:translateY(-1px)}
      @media(max-width:1024px){.explore-cats{grid-template-columns:1fr!important;padding-left:20px!important;padding-right:20px!important}.explore-head{padding-left:20px!important;padding-right:20px!important}}
      .qa-box-wrap{max-width:1240px;margin:0 auto;padding:40px 40px 0}
      .cert-bar{background:#F9FAFB;border-top:1px solid #E4E4E7;border-bottom:1px solid #E4E4E7;padding:28px 40px}
      .cert-bar-in{max-width:1240px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:center;gap:12px 32px}
      .ptypes-head{max-width:1240px;margin:0 auto 40px;padding:0 40px;text-align:center}
      .ptypes-grid{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
      .ptype-card{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:26px 22px;text-align:center}
      .pad-wrap{max-width:1240px;margin:0 auto;padding:0 40px}
      @media(max-width:640px){.pad-wrap{padding-left:20px!important;padding-right:20px!important}}
      @media(max-width:1024px){
        .qa-box-wrap{padding-left:20px!important;padding-right:20px!important}
        .cert-bar{padding:22px 20px!important}
        .ptypes-head{padding-left:20px!important;padding-right:20px!important}
        .ptypes-grid{grid-template-columns:repeat(2,1fr)!important;padding-left:20px!important;padding-right:20px!important}
      }
      @media(max-width:640px){
        .ptypes-grid{grid-template-columns:1fr!important}
        .cert-bar-in{flex-direction:column;align-items:center;gap:10px!important}
      }
      .mob-sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:200;box-shadow:0 -4px 20px rgba(0,0,0,.15)}
      @media(max-width:768px){.mob-sticky{display:grid;grid-template-columns:1fr 1fr}}
      .mob-sticky a{display:block;padding:17px;text-align:center;font-family:var(--font-inter);font-weight:700;font-size:14px;text-decoration:none}
      @media(max-width:1024px){
        .hero-in,.sec-head,.svc-grid,.emg-in,.why-in,.proc-grid,.rev-in,.loc-top,.loc-grid,.fcta-in{grid-template-columns:1fr!important}
        .hero-in,.sec-head,.svc-grid,.emg-in,.why-in,.proc-grid,.rev-in,.loc-top,.loc-grid,.fcta-in,.faq-inner{padding-left:20px!important;padding-right:20px!important}
        .hp-form,.fcta-img-wrap,.why-badge{display:none}
        .hero{min-height:auto;padding:100px 0 72px}
        .sec,.emg{padding:64px 0!important}
        .rev-grid{grid-template-columns:1fr!important}
        .emg-grid{grid-template-columns:1fr!important}
      }
      @media(max-width:640px){
        .h-stats{flex-direction:column;gap:20px}
        .hs{border-right:none;padding-right:0}
        .h-btns,.fcta-btns{flex-direction:column;align-items:stretch}
        .proc-grid,.svc-grid{grid-template-columns:1fr!important}
        .loc-grid{grid-template-columns:1fr 1fr!important}
        .sec{padding:52px 0!important}
      }
      /* NEW — map height shrinks on mobile instead of eating the viewport */
      .map-embed{height:420px}
      @media(max-width:640px){.map-embed{height:260px}}
      /* NEW — urgency CTA banner padding tightens on mobile */
      .urgency-cta{padding:56px 40px}
      @media(max-width:640px){.urgency-cta{padding:40px 20px}}
      /* NEW — extra small-phone breakpoint (iPhone SE, small Android ~360-390px) */
      @media(max-width:400px){
        .h-badge-t{font-size:10px}
        .btn-g,.btn-w{padding:13px 20px;font-size:13px}
        .display-h{font-size:26px!important}
        .svc-body,.proc-card,.ptype-card{padding:20px!important}
        .explore-cat{padding:24px 18px!important}
        .qa-box-wrap>div,.cert-bar,.urgency-cta{padding-left:16px!important;padding-right:16px!important}
      }
    `}</style>

      {/* HERO */}
      <section
        className="hero"
        aria-label="Water damage restoration emergency service Clarksville TN"
      >
        <div className="hero-img">
          <Image
            src={HERO}
            alt="Water damage restoration professionals responding to a flooded property in Clarksville TN"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
        </div>
        <div className="hero-ov" />
        <div className="hero-in">
          <div>
            <div className="h-badge">
              <span className="h-dot" aria-hidden="true" />
              <span className="h-badge-t">
                Emergency Response Active — Clarksville TN
              </span>
            </div>
            <h1 className="h1">
              Water Damage
              <span className="h1-sub">Restoration Clarksville TN</span>
            </h1>
            {/* UPDATED — leads with the visitor's problem, reduces call friction */}
            <p className="h-desc">
              Water spreading right now? <strong>Every minute increases the
              damage — and the cost.</strong> Our IICRC-certified team arrives
              in <strong>60 minutes guaranteed</strong>, anywhere in Montgomery
              County, 24/7/365. We handle your insurance claim directly — you
              pay only your deductible.
            </p>
            <div className="h-btns">
              <a
                href="tel:+19312712350"
                className="btn-g"
                aria-label="Call now for emergency water damage restoration"
              >
                📞 (931) 271-2350 — Call Now
              </a>
              <a
                href="/contact"
                className="btn-w"
                aria-label="Request free water damage assessment"
              >
                Free Assessment →
              </a>
            </div>
            <div className="h-stats" aria-label="Service statistics">
              <div className="hs">
                <div className="hs-n">
                  60
                  <span
                    style={{
                      fontSize: "clamp(18px,2vw,22px)",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                    }}
                  >
                    min
                  </span>
                </div>
                <div className="hs-l">Guaranteed Arrival</div>
              </div>
              <div className="hs">
                <div className="hs-n">24/7</div>
                <div className="hs-l">Always Available</div>
              </div>
              <div className="hs">
                <div className="hs-n">500+</div>
                <div className="hs-l">Homes Restored</div>
              </div>
            </div>
          </div>
          <HeroForm />
        </div>
      </section>

      {/* NEW — AEO/GEO Quick Answer box, same proven pattern already live
          on the Emergency Water Damage page. Gives AI answer engines and
          featured snippets a clean, directly-citable factual summary. */}
      <div className="qa-box-wrap">
        <div
          role="note"
          style={{
            background: "#F0FDF4",
            border: "1px solid #BBF7D0",
            borderLeft: "4px solid #22C55E",
            borderRadius: 8,
            padding: "20px 24px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#16A34A",
              marginBottom: 8,
              display: "block",
            }}
          >
            📍 Quick Answer — Water Damage Restoration Clarksville TN
          </span>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14.5,
              lineHeight: 1.72,
              color: "#1a2e1a",
              margin: 0,
            }}
          >
            <strong>Clarksville Water Damage Restoration</strong> provides
            24/7/365 emergency water damage restoration throughout Clarksville
            TN and Montgomery County at{" "}
            <strong>(931) 271-2350</strong>, with a guaranteed 60-minute
            on-site arrival. Services include water extraction, structural
            drying, mold remediation, and complete insurance claim management
            for USAA, State Farm, Allstate, and all major carriers.
            IICRC-certified technicians follow the S500 Water Damage
            Restoration Standard.
          </p>
        </div>
      </div>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...Array(2)].map((_, ri) =>
            [
              "24/7 Emergency Response",
              "60-Min Guaranteed Arrival",
              "Water Extraction Clarksville TN",
              "Structural Drying",
              "Mold Remediation",
              "Sewage Cleanup",
              "Storm Damage Restoration",
              "Insurance Claim Assistance",
              "Fort Campbell Military Specialists",
              "Montgomery County TN",
            ].map((item, i) => (
              <span key={`${ri}-${i}`} className="ticker-item">
                {item}
                <span className="ticker-dot" />
              </span>
            )),
          )}
        </div>
      </div>

      {/* SERVICES */}
      <section className="sec" aria-labelledby="services-heading">
        <div className="sec-head">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Our Services
            </div>
            <h2 className="display-h" id="services-heading">
              Water Damage Restoration Services in Clarksville TN
            </h2>
          </div>
          <div>
            <p className="body-t" style={{ marginBottom: 24 }}>
              From the first call to the final walk-through, our IICRC-certified
              team handles every aspect of your water damage restoration with
              precision and care throughout Clarksville and Montgomery County.
            </p>
            <a
              href="tel:+19312712350"
              className="btn-g"
              aria-label="Call for water damage service"
            >
              📞 Call Now — 24/7
            </a>
          </div>
        </div>
        <div
          className="svc-grid"
          role="list"
          aria-label="Water damage restoration services"
        >
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="svc-card"
              role="listitem"
              aria-label={`${s.title} service`}
            >
              <div className="svc-img">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 33vw, 413px"
                />
              </div>
              <div className="svc-body">
                <div className="svc-tag">{s.tag}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-arr">Learn more</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW — certifications/trust bar. Fast, visible E-E-A-T signal;
          every credential here is already stated elsewhere on the site
          (services copy, About page, Emergency page) — nothing invented. */}
      <div className="cert-bar">
        <div className="cert-bar-in">
          {[
            "✅ IICRC Certified",
            "✅ USAA Preferred Vendor",
            "✅ All Insurance Accepted",
            "✅ Locally Owned Since 2014",
            "✅ 24/7/365 Response",
            "✅ 60-Min Guaranteed Arrival",
          ].map((badge) => (
            <span
              key={badge}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                fontWeight: 600,
                color: "#374151",
                whiteSpace: "nowrap",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* NEW — COMMON WATER DAMAGE EMERGENCIES */}
      <section className="sec sec-surf" aria-labelledby="emergencies-heading">
        <div className="sec-head">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Water Damage Emergencies
            </div>
            <h2 className="display-h" id="emergencies-heading">
              Common Water Damage Emergencies We Fix Fast
            </h2>
          </div>
          <div>
            <p className="body-t" style={{ marginBottom: 24 }}>
              Our restoration team in Clarksville TN has seen it all — and
              fixed it all. If water is spreading in your home right now, call
              us immediately. Every minute of delay increases damage.
            </p>
            <a
              href="tel:+19312712350"
              className="btn-g"
              aria-label="Call now to stop water damage"
            >
              📞 Call Now — Stop The Damage
            </a>
          </div>
        </div>
        <div
          className="emg-grid pad-wrap"
          role="list"
          aria-label="Common water damage emergencies"
          style={{ maxWidth: 1240, margin: "0 auto" }}
        >
          {emergencies.map((item) => (
            <div key={item} className="emg-item" role="listitem">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* EMERGENCY TIMELINE */}
      <section className="emg" aria-labelledby="timeline-heading">
        <div className="emg-in">
          <div>
            <div className="eyebrow" style={{ color: "#4ADE80" }}>
              <span
                className="eyebrow-dot"
                style={{ background: "#4ADE80" }}
                aria-hidden="true"
              />
              Time Is Critical
            </div>
            <h2
              className="display-h light"
              id="timeline-heading"
              style={{ marginBottom: 18 }}
            >
              Water Damage Timeline: Why Every Hour Matters in Clarksville TN
            </h2>
            <p className="body-t light" style={{ marginBottom: 32 }}>
              Clarksville&apos;s humid subtropical climate accelerates water
              damage faster than most of the US. The window for preventing
              secondary damage is critically narrow. Call (931) 271-2350 the
              moment you discover water damage.
            </p>
            <a
              href="tel:+19312712350"
              className="btn-g"
              aria-label="Call for immediate emergency response"
            >
              📞 Call for Immediate Response
            </a>
          </div>
          <div role="list" aria-label="Water damage progression timeline">
            {[
              {
                time: "0 – 1 hr",
                risk: "Water penetrates drywall, flooring, and insulation. Structural absorption begins. Immediate extraction critical.",
              },
              {
                time: "1 – 24 hrs",
                risk: "Mold spore activation in Clarksville's humid climate. Wood and drywall begin to swell and warp.",
              },
              {
                time: "24 – 48 hrs",
                risk: "Mold colonies become visible. Structural compromise accelerates. Persistent odors develop throughout property.",
              },
              {
                time: "48 hrs +",
                risk: "Severe structural damage. Black mold spreading. Significant health risks escalate for all occupants.",
              },
            ].map((r) => (
              <div key={r.time} className="emg-row" role="listitem">
                <div className="emg-time">{r.time}</div>
                <div className="emg-risk">{r.risk}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="sec sec-surf" aria-labelledby="why-heading">
        <div className="why-in">
          <figure style={{ margin: 0 }}>
            <div className="why-img-wrap">
              <Image
                src={IMAGES.why}
                alt="Professional water damage restoration technician assessing moisture damage in Clarksville TN home"
                className="why-img"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-badge">
                <div className="why-badge-n">10+</div>
                <div className="why-badge-l">Years in Clarksville</div>
              </div>
            </div>
            <figcaption className="img-caption">
              Our IICRC-certified technician using thermal imaging to map hidden
              moisture in a Clarksville, TN home.
            </figcaption>
          </figure>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Why Choose Us
            </div>
            <h2
              className="display-h"
              id="why-heading"
              style={{ marginBottom: 36 }}
            >
              Clarksville&apos;s Most Experienced Water Damage Restoration
              Company
            </h2>
            <div className="why-list" role="list">
              {whyItems.map((w) => (
                <div key={w.n} className="why-item" role="listitem">
                  <div className="why-n" aria-hidden="true">
                    {w.n}
                  </div>
                  <div>
                    <h3 className="why-tit">{w.t}</h3>
                    <p className="why-bod">{w.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW — Property Types / Who We Help.
          Required by the homepage brief's structure (Section 7) and
          previously missing. Widens intent coverage to commercial and
          rental-property searchers, not just single-family homeowners. */}
      <section className="sec" aria-labelledby="property-types-heading">
        <div className="ptypes-head">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot" aria-hidden="true" />
            Who We Help
          </div>
          <h2 className="display-h" id="property-types-heading">
            Water Damage Restoration for Every Property Type
          </h2>
        </div>
        <div className="ptypes-grid">
          {[
            { icon: "🏠", t: "Homeowners", b: "Single-family homes throughout Clarksville and Montgomery County." },
            { icon: "🏢", t: "Commercial Properties", b: "Offices, retail, and industrial properties — minimizing business downtime." },
            { icon: "🏘️", t: "Rental & Multi-Family", b: "Landlords and property managers coordinating tenant and insurance needs." },
            { icon: "🎖️", t: "Fort Campbell Military Families", b: "USAA-preferred vendor with deployment-aware scheduling." },
          ].map((c) => (
            <div key={c.t} className="ptype-card">
              <div style={{ fontSize: 28, marginBottom: 10 }} aria-hidden="true">{c.icon}</div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: 14.5, fontWeight: 600, color: "#09090B", marginBottom: 6 }}>
                {c.t}
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: 12.5, lineHeight: 1.6, color: "#52525B" }}>
                {c.b}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS — "Simple. Honest. Fast." (restyled copy, same section) */}
      <section className="sec" aria-labelledby="process-heading">
        <div className="pad-wrap" style={{ marginBottom: 48 }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            How It Works
          </div>
          <h2 className="display-h" id="process-heading">
            Simple. Honest. Fast.
          </h2>
          <p className="body-t" style={{ marginTop: 14, maxWidth: 640 }}>
            From your first call to a fully resolved problem — transparent,
            fast, and stress-free. Most calls dispatched in under 5 minutes.
            Emergency calls prioritized immediately.
          </p>
        </div>
        <div
          className="proc-grid"
          role="list"
          aria-label="Restoration process steps"
        >
          {steps.map((p) => (
            <div key={p.n} className="proc-card" role="listitem">
              <div className="proc-card-bg-n" aria-hidden="true">
                {p.n}
              </div>
              <div className="proc-step-tag">Step {p.n}</div>
              <h3 className="proc-title">{p.t}</h3>
              <p className="proc-body">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW — URGENCY CTA BANNER */}
      <section
        className="urgency-cta"
        aria-labelledby="urgency-cta-heading"
        style={{ background: "#22C55E", textAlign: "center" }}
      >
        <h2
          id="urgency-cta-heading"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(26px,3.5vw,38px)",
            fontWeight: 700,
            color: "#09090B",
            marginBottom: 10,
          }}
        >
          Water Damage Emergency in Clarksville TN? Don&apos;t Wait — Call Now.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            color: "rgba(9,9,11,.75)",
            marginBottom: 24,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Every minute of delay means more water damage, more cost, more
          stress. Our IICRC-certified team is standing by 24/7. Call now and
          get help fast.
        </p>
        <a
          href="tel:+19312712350"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#09090B",
            color: "#fff",
            padding: "16px 32px",
            borderRadius: 6,
            textDecoration: "none",
            fontFamily: "var(--font-inter)",
            fontWeight: 700,
            fontSize: 16,
          }}
          aria-label="Call now for emergency water damage restoration"
        >
          📞 Call Now — (931) 271-2350
        </a>
      </section>

      {/* REVIEWS — commented out until testimonial authenticity is confirmed.
          GSC flagged 54 invalid review-schema items sitewide; displaying
          placeholder testimonials as reviews is a likely source and a real
          Google review-policy risk. Restore this block once these are
          replaced with genuine, verifiable customer reviews (ideally pulled
          from Google Business Profile once it's verified).

      <section className="sec sec-dark" aria-labelledby="reviews-heading">
        <div className="rev-in">
          <div className="rev-top">
            <div>
              <div className="eyebrow" style={{ color: "#4ADE80" }}>
                <span
                  className="eyebrow-dot"
                  style={{ background: "#4ADE80" }}
                  aria-hidden="true"
                />
                Client Reviews
              </div>
              <h2 className="display-h light" id="reviews-heading">
                Trusted by Clarksville TN Homeowners
              </h2>
            </div>
          </div>
          <div className="rev-grid" role="list">
            {reviews.map((r) => (
              <div key={r.n} className="rev-card" role="listitem">
                <div className="rev-stars" aria-label="5 out of 5 stars">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="rev-star">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="rev-q">{r.q}</p>
                <div className="rev-auth">
                  <div className="rev-av" aria-hidden="true">
                    {r.init}
                  </div>
                  <div>
                    <div className="rev-name">{r.n}</div>
                    <div className="rev-loc">{r.l}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* LOCATIONS + MAP */}
      <section className="sec sec-surf" aria-labelledby="locations-heading">
        <div className="loc-top">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Service Coverage
            </div>
            <h2 className="display-h" id="locations-heading">
              Water Damage Restoration Near You in Clarksville &amp; Surrounding
              Areas
            </h2>
          </div>
          <div>
            <p className="body-t" style={{ marginBottom: 24 }}>
              We provide 60-minute guaranteed emergency response throughout
              Montgomery County and all surrounding communities.
            </p>
            <Link
              href="/service-areas"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 600,
                color: "#16A34A",
                textDecoration: "none",
              }}
              aria-label="View all service area locations"
            >
              View All Locations →
            </Link>
          </div>
        </div>
        <nav className="loc-grid" aria-label="Service area locations">
          {locs.map((l) => (
            <Link
              key={l.h}
              href={l.h}
              className="loc-card"
              aria-label={`Water damage restoration in ${l.l}`}
            >
              <span>📍 {l.l}</span>
              <span className="loc-arr" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </nav>

        {/* Embedded service-area map — real Clarksville, TN address, no API
            key required. Once GBP is verified, you can optionally switch to
            the GBP-native embed URL (Maps -> your listing -> Share -> Embed
            a map) so the map also reflects your live hours and reviews —
            but this version already shows your real pin and location. */}
        <div className="pad-wrap" style={{ margin: "40px auto 0" }}>
          <iframe
            title="Clarksville Water Damage Restoration service area map"
            src="https://www.google.com/maps?q=215+Legion+Street,+Clarksville,+TN+37040&output=embed"
            width="100%"
            className="map-embed"
            style={{ border: 0, borderRadius: 8, width: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-sec" aria-labelledby="faq-heading">
        <div className="faq-inner">
          <div className="faq-head">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow-dot" aria-hidden="true" />
              Common Questions
            </div>
            <h2
              className="display-h"
              id="faq-heading"
              style={{ textAlign: "center" }}
            >
              Frequently Asked Questions About Water Damage Restoration in
              Clarksville TN
            </h2>
          </div>
          <div role="list">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item" role="listitem">
                <summary className="faq-q">{faq.q}</summary>
                <p className="faq-a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sec" aria-labelledby="cta-heading">
        <div className="fcta-in">
          <figure style={{ margin: 0 }}>
            <div className="fcta-img-wrap">
              <Image
                src={IMAGES.cta}
                alt="Water damage restoration professional team ready to respond in Clarksville TN"
                className="fcta-img"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                style={{ objectFit: "cover" }}
              />
              <div className="fcta-img-ov" aria-hidden="true" />
              <div className="fcta-badge">
                <div className="fcta-badge-n">(931) 271-2350</div>
                <div className="fcta-badge-l">Available 24 hours a day</div>
              </div>
            </div>
            <figcaption className="img-caption">
              Our Clarksville, TN restoration crew — dispatched 24/7, on-site
              within 60 minutes.
            </figcaption>
          </figure>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Act Now
            </div>
            <h2 className="fcta-h2" id="cta-heading">
              Don&apos;t wait.
              <br />
              <em>Every minute matters.</em>
            </h2>
            <p className="fcta-p">
              Water damage in Clarksville TN escalates exponentially over time.
              Our team is locally stationed and ready to respond immediately. A
              certified expert answers your call in under 60 seconds.
            </p>
            <div className="fcta-btns">
              <a
                href="tel:+19312712350"
                className="fcta-btn1"
                aria-label="Call now for emergency water damage restoration"
              >
                📞 Call (931) 271-2350 Now
              </a>
              <a
                href="/contact"
                className="fcta-btn2"
                aria-label="Request free assessment"
              >
                Request Free Assessment
              </a>
            </div>
            <div className="fcta-note">
              Free inspection · All insurance accepted · USAA specialists ·
              24/7/365
            </div>
          </div>
        </div>
      </section>

      {/* NEW — QUICK LINKS MEGA-FOOTER */}
      <section className="explore-sec" aria-labelledby="explore-heading">
        <div className="explore-head">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot" aria-hidden="true" />
            Explore More
          </div>
          <h2 className="display-h" id="explore-heading">
            Guides, Services &amp; Areas We Serve
          </h2>
        </div>
        <div className="explore-cats">
          {Object.entries(exploreLinks).map(([heading, links]) => (
            <div key={heading} className="explore-cat">
              <div className="explore-cat-top">
                <div className="explore-cat-icon" aria-hidden="true">
                  {exploreIcons[heading]}
                </div>
                <div className="explore-cat-title">{heading}</div>
              </div>
              <div className="explore-chips">
                {links.map(([label, href]) => (
                  <Link key={href} href={href} className="explore-chip">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile sticky */}
      <div
        className="mob-sticky"
        role="navigation"
        aria-label="Emergency contact shortcuts"
      >
        <a
          href="tel:+19312712350"
          style={{ background: "#22C55E", color: "#09090B" }}
          aria-label="Call now"
        >
          📞 Call Now
        </a>
        <a
          href="/contact"
          style={{ background: "#09090B", color: "#fff" }}
          aria-label="Free assessment"
        >
          Free Assessment
        </a>
      </div>
    </>
  );
}