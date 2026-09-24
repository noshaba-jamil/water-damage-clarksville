import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Flood Cleanup & Water Extraction Clarksville TN",
  description:
    "Professional flood cleanup in Clarksville TN. Truck-mounted extraction, structural drying. All insurance including USAA. Call (931) 271-2350.",
  alternates: { canonical: "/flood-cleanup-clarksville-tn" },
};

const SITE_URL = "https://water-damage-clarksville.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flood Cleanup & Water Extraction Clarksville TN",
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: { "@type": "City", name: "Clarksville" },
  description:
    "Professional flood cleanup and water extraction in Clarksville TN. IICRC-certified technicians, industrial equipment, 24/7 emergency response.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

// FAQ schema, tied to the FAQ section below. Kept flood/extraction-specific —
// the "how fast do you respond" question already lives on the homepage, so
// it's deliberately left out here to avoid three pages competing for the
// same FAQ rich-result slot.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does flood cleanup cost in Clarksville TN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the amount of standing water and how far it's spread into walls, flooring, and subfloor. We provide a free on-site assessment before any work begins, and we bill your insurance carrier directly when the flooding is a covered event.",
      },
    },
    {
      "@type": "Question",
      name: "How long does water extraction take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standing water extraction itself is usually completed the same day we arrive — often within a few hours for a typical residential flood. Full structural drying afterward can take an additional 3-7 days depending on how deep the moisture has penetrated.",
      },
    },
    {
      "@type": "Question",
      name: "Will my homeowners insurance cover flood cleanup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coverage depends on the cause — sudden events like a burst pipe or storm damage are typically covered, while gradual flooding may require separate flood insurance. We work directly with USAA, State Farm, Allstate, and all major carriers to document your claim either way.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between flood cleanup and structural drying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flood cleanup is the extraction of standing water — getting the bulk of the water out fast. Structural drying is the follow-up process that removes the moisture that's already soaked into walls, subfloor, and framing, which isn't visible but causes mold and structural damage if left untreated.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stay in my home during flood cleanup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most residential floods, yes — we work around your household while extraction and drying equipment run. For severe flooding or sewage contamination (Category 3 water), we'll advise if temporary relocation is safer while remediation is completed.",
      },
    },
    {
      "@type": "Question",
      name: "What equipment do you use to extract standing water?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Truck-mounted extraction units pull hundreds of gallons per hour directly from carpet, hardwood, and concrete — far more powerful than portable shop-vac equipment. We follow extraction with thermal imaging to confirm no hidden moisture remains in walls or subfloor.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 3,
      name: "Flood Cleanup & Water Extraction Clarksville TN",
      item: `${SITE_URL}/flood-cleanup-clarksville-tn`,
    },
  ],
};

const steps = [
  {
    n: "01",
    t: "Emergency Call",
    d: "Call (931) 271-2350 — we answer in under 60 seconds, 24/7/365. Tell us the extent of flooding and your address.",
  },
  {
    n: "02",
    t: "60-Minute Arrival",
    d: "Our fully-equipped truck arrives in under 60 minutes anywhere in Montgomery County, guaranteed.",
  },
  {
    n: "03",
    t: "Water Extraction",
    d: "Industrial truck-mounted pumps extract hundreds of gallons per hour. Standing water is gone fast.",
  },
  {
    n: "04",
    t: "Moisture Mapping",
    d: "FLIR thermal cameras and moisture meters map hidden water in walls, floors, and subfloor.",
  },
  {
    n: "05",
    t: "Structural Drying",
    d: "LGR dehumidifiers and high-velocity air movers dry the structure to IICRC S500 standards.",
  },
  {
    n: "06",
    t: "Mold Prevention",
    d: "Antimicrobial treatment applied to all affected surfaces — prevents mold growth within 24-48 hrs.",
  },
  {
    n: "07",
    t: "Documentation",
    d: "Complete photo and moisture-log documentation submitted directly to your insurance adjuster.",
  },
  {
    n: "08",
    t: "Final Inspection",
    d: "Final moisture readings confirm all materials are dry. Certificate of dryness provided.",
  },
];

// TOC
const toc = [
  ["Common Flood Causes", "#causes"],
  ["Our 8-Step Process", "#process"],
  ["What's Included", "#included"],
  ["FAQ", "#faq"],
  ["All Services", "#all-services"],
  ["All Service Areas", "#all-areas"],
];

// Full service list, linking every other service page
const allServices: [string, string][] = [
  ["Emergency Water Damage", "/emergency-water-damage-clarksville-tn"],
  ["Mold Remediation", "/mold-remediation-clarksville-tn"],
  ["Structural Drying", "/structural-drying-clarksville-tn"],
  ["Sewage Backup Cleanup", "/services/sewage-backup-cleanup-clarksville-tn"],
  [
    "Burst Pipe Water Damage",
    "/services/burst-pipe-water-damage-clarksville-tn",
  ],
  ["Basement Flooding", "/services/basement-flooding-clarksville-tn"],
  [
    "Storm Damage Restoration",
    "/services/storm-damage-restoration-clarksville-tn",
  ],
  [
    "Commercial Water Damage",
    "/services/commercial-water-damage-clarksville-tn",
  ],
  [
    "Insurance Claim Management",
    "/water-damage-insurance-claim-clarksville-tn",
  ],
  ["Water Damage Odor Removal", "/water-damage-odor-removal-clarksville-tn"],
];

// Full service-area list, matching the homepage's location set
const allAreas: [string, string][] = [
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
];

const faqs = faqSchema.mainEntity.map((q) => ({
  q: q.name,
  a: q.acceptedAnswer.text,
}));

export default function FloodCleanupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        eyebrow="Flood Cleanup & Water Extraction"
        title="Flood Cleanup & Water Extraction in Clarksville TN"
        subtitle="Industrial truck-mounted pumps. 60-minute guaranteed arrival. IICRC S500 certified. All insurance accepted including USAA."
        image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1800&q=80"
        imageFocus="center 40%"
        breadcrumbs={[
          { label: "Services", href: "/" },
          { label: "Flood Cleanup" },
        ]}
        stat1="60min"
        stat1Sub="Guaranteed Arrival"
        stat2="24/7"
        stat2Sub="Emergency Response"
      />
      <style>{`
        .sp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:52px;align-items:start}
        .sp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block}
        .sp-h2{font-family:var(--font-cormorant);font-size:clamp(22px,2.5vw,32px);font-weight:700;color:#09090B;margin-bottom:16px;letter-spacing:-.4px;line-height:1.1}
        .sp-p{font-family:var(--font-inter);font-size:15px;line-height:1.8;color:#52525B;margin-bottom:16px}
        .steps{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:28px 0}
        .step{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:18px;display:flex;gap:14px}
        .step-n{font-family:var(--font-cormorant);font-size:28px;font-weight:700;color:#D1FAE5;line-height:1;flex-shrink:0}
        .step-t{font-family:var(--font-inter);font-size:13px;font-weight:700;color:#09090B;margin-bottom:4px}
        .step-d{font-family:var(--font-inter);font-size:12px;color:#71717A;line-height:1.6}
        .list{list-style:none;margin:16px 0;display:flex;flex-direction:column;gap:9px}
        .list li{display:flex;align-items:flex-start;gap:10px;font-family:var(--font-inter);font-size:14px;color:#374151;line-height:1.5}
        .list li::before{content:"✓";color:#16A34A;font-weight:700;flex-shrink:0;margin-top:1px}
        .sp-sb{display:flex;flex-direction:column;gap:18px;position:sticky;top:130px}
        .sp-sb-cta{background:#09090B;border-radius:10px;padding:26px}
        .sp-sb-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px}
        .sp-sb-n{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#fff;margin-bottom:4px;letter-spacing:-.5px}
        .sp-sb-s{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.3);margin-bottom:18px}
        .sp-sb-b1{display:block;background:#22C55E;color:#09090B;padding:13px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;text-align:center;margin-bottom:8px;transition:background .2s}
        .sp-sb-b1:hover{background:#16A34A}
        .sp-sb-b2{display:block;color:rgba(255,255,255,.45);padding:10px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-size:13px;text-align:center;border:1px solid rgba(255,255,255,.09)}
        .sp-sb-b2:hover{border-color:rgba(255,255,255,.25);color:rgba(255,255,255,.75)}
        .trust-box{background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:20px}
        .trust-box h3{font-family:var(--font-inter);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#16A34A;margin-bottom:12px}
        .trust-item{display:flex;align-items:center;gap:8px;font-family:var(--font-inter);font-size:12px;color:#374151;margin-bottom:8px}
        .causes{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}
        .cause{background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;padding:14px;font-family:var(--font-inter);font-size:13px;color:#92400E;display:flex;align-items:center;gap:8px}
        .toc-box{background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:18px 20px;margin-bottom:32px}
        .toc-label{font-family:var(--font-inter);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#16A34A;margin-bottom:10px}
        .toc-links{display:flex;flex-wrap:wrap;gap:8px 18px}
        .toc-links a{font-family:var(--font-inter);font-size:13px;font-weight:500;color:#1a2e1a;text-decoration:none}
        .toc-links a:hover{color:#16A34A;text-decoration:underline}
        .faq-item{border-bottom:1px solid #E4E4E7}
        .faq-q{font-family:var(--font-inter);font-size:14.5px;font-weight:600;color:#09090B;padding:16px 0;cursor:pointer;list-style:none;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;line-height:1.4}
        .faq-q::-webkit-details-marker{display:none}
        .faq-q::after{content:"+";font-size:18px;font-weight:300;color:#9CA3AF;flex-shrink:0}
        details[open] .faq-q::after{transform:rotate(45deg)}
        .faq-a{font-family:var(--font-inter);font-size:13.5px;line-height:1.72;color:#52525B;padding-bottom:16px}
        .link-chips{display:flex;flex-wrap:wrap;gap:8px}
        .link-chip{font-family:var(--font-inter);font-size:13px;font-weight:500;color:#16A34A;text-decoration:none;background:#F0FDF4;border:1px solid #BBF7D0;padding:6px 14px;border-radius:100}
        .link-chip:hover{background:#22C55E;color:#09090B;border-color:#22C55E}
        @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}.steps{grid-template-columns:1fr}.causes{grid-template-columns:1fr}}
      `}</style>

      <div style={{ background: "#fff" }}>
        <div className="sp">
          <main>
            <nav className="toc-box" aria-label="Page contents">
              <div className="toc-label">On This Page</div>
              <div className="toc-links">
                {toc.map(([label, href]) => (
                  <a key={href} href={href}>
                    {label}
                  </a>
                ))}
              </div>
            </nav>

            <span className="sp-ey">Professional Flood Cleanup</span>
            <h2 className="sp-h2">
              Fast Water Extraction & Complete Flood Cleanup
            </h2>
            <p className="sp-p">
              When flooding strikes your Clarksville home or business, every
              minute matters. Water migrates into walls, floors, and subfloor
              within hours — causing structural damage and mold growth that
              begins within 24-48 hours. Our IICRC S500-certified team deploys
              immediately with industrial truck-mounted extraction equipment
              capable of removing hundreds of gallons per minute.
            </p>
            <p className="sp-p">
              We serve all of Clarksville TN, Fort Campbell, Montgomery County,
              and surrounding areas — including Oak Grove KY and Hopkinsville
              KY. All insurance claims handled directly. USAA specialists for
              Fort Campbell military families.
            </p>

            <span id="causes" className="sp-ey" style={{ marginTop: 32 }}>
              Common Flood Causes We Handle
            </span>
            <div className="causes">
              {[
                ["🌧️", "Heavy rain & flash flooding"],
                ["🚿", "Burst or leaking pipes"],
                ["🚽", "Toilet & sewage overflow"],
                ["🏠", "Roof leaks & storm damage"],
                ["🔥", "Sprinkler system discharge"],
                ["🪣", "Appliance failures (washer, dishwasher, water heater)"],
              ].map(([i, l]) => (
                <div key={l} className="cause">
                  <span>{i}</span>
                  {l}
                </div>
              ))}
            </div>

            <span id="process" className="sp-ey" style={{ marginTop: 32 }}>
              Our 8-Step Flood Cleanup Process
            </span>
            <div className="steps">
              {steps.map((s) => (
                <div key={s.n} className="step">
                  <div className="step-n">{s.n}</div>
                  <div>
                    <div className="step-t">{s.t}</div>
                    <div className="step-d">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <span id="included" className="sp-ey" style={{ marginTop: 32 }}>
              What&apos;s Included
            </span>
            <ul className="list">
              {[
                "Industrial truck-mounted water extraction (800+ GPH)",
                "Thermal imaging to find hidden moisture in walls & floors",
                "Industrial LGR dehumidifiers and air movers",
                "IICRC S500-certified structural drying protocols",
                "Antimicrobial treatment to prevent mold",
                "Complete moisture log documentation for insurance",
                "Direct insurance billing — you pay only your deductible",
                "Certificate of dryness at project completion",
                "USAA-preferred contractor for Fort Campbell families",
                "24/7 monitoring of drying equipment",
              ].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <div
              style={{
                background: "#09090B",
                borderRadius: 12,
                padding: 32,
                margin: "40px 0",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(22px,3vw,34px)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 10,
                  letterSpacing: -0.5,
                }}
              >
                Flooding Right Now?
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  color: "rgba(255,255,255,.5)",
                  marginBottom: 22,
                  maxWidth: 440,
                  margin: "0 auto 22px",
                  lineHeight: 1.7,
                }}
              >
                Don&apos;t wait. Water damage doubles every hour. Our team is
                ready 24/7 and arrives in 60 minutes or less.
              </p>
              <a
                href="tel:+19312712350"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: "#22C55E",
                  color: "#09090B",
                  padding: "14px 32px",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontFamily: "var(--font-inter)",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                📞 Call (931) 271-2350 Now
              </a>
            </div>

            <span id="faq" className="sp-ey">
              Flood Cleanup FAQ
            </span>
            <div>
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">{faq.q}</summary>
                  <p className="faq-a">{faq.a}</p>
                </details>
              ))}
            </div>

            <span id="all-services" className="sp-ey" style={{ marginTop: 32 }}>
              All Water Damage Services in Clarksville TN
            </span>
            <div className="link-chips">
              {allServices.map(([l, h]) => (
                <Link key={h} href={h} className="link-chip">
                  {l}
                </Link>
              ))}
            </div>

            <span id="all-areas" className="sp-ey" style={{ marginTop: 28 }}>
              All Service Areas
            </span>
            <div className="link-chips">
              {allAreas.map(([l, h]) => (
                <Link key={h} href={h} className="link-chip">
                  {l}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="link-chip"
                style={{
                  background: "#09090B",
                  color: "#fff",
                  borderColor: "#09090B",
                }}
              >
                View All Areas →
              </Link>
            </div>
          </main>

          <aside className="sp-sb">
            <div className="sp-sb-cta">
              <div className="sp-sb-ey">24/7 Emergency Line</div>
              <div className="sp-sb-n">(931) 271-2350</div>
              <div className="sp-sb-s">Answered in 60 seconds · 24/7/365</div>
              <a href="tel:+19312712350" className="sp-sb-b1">
                📞 Call Now — We Answer 24/7
              </a>
              <Link href="/contact" className="sp-sb-b2">
                Free Assessment →
              </Link>
            </div>
            <div className="trust-box">
              <h3>Why Choose Us</h3>
              {[
                "✅ IICRC S500 Certified",
                "✅ 60-min guaranteed arrival",
                "✅ All insurance accepted",
                "✅ USAA specialists",
                "✅ Serving Clarksville since 2014",
                "✅ Direct insurance billing",
                "✅ Free assessment",
              ].map((t) => (
                <div key={t} className="trust-item">
                  {t}
                </div>
              ))}
            </div>
            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #E4E4E7",
                borderRadius: 10,
                padding: 20,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  color: "#09090B",
                  marginBottom: 12,
                }}
              >
                Service Areas
              </h3>
              {[
                "Clarksville TN",
                "Fort Campbell",
                "Sango TN",
                "Oak Grove KY",
                "Hopkinsville KY",
                "Springfield TN",
                "Ashland City TN",
              ].map((a) => (
                <div
                  key={a}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "#52525B",
                    marginBottom: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "#16A34A" }}>→</span>
                  {a}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div
        style={{
          background: "#09090B",
          padding: "72px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(26px,4vw,44px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: 14,
            letterSpacing: -1,
          }}
        >
          Flood Cleanup in Clarksville TN
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            color: "rgba(255,255,255,.5)",
            marginBottom: 28,
            maxWidth: 480,
            margin: "0 auto 28px",
            lineHeight: 1.7,
          }}
        >
          60-minute response guaranteed. All insurance accepted. Free
          inspection.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+19312712350"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#22C55E",
              color: "#09090B",
              padding: "14px 32px",
              borderRadius: 6,
              textDecoration: "none",
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            📞 (931) 271-2350
          </a>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "transparent",
              color: "rgba(255,255,255,.7)",
              padding: "13px 22px",
              borderRadius: 6,
              textDecoration: "none",
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,.18)",
            }}
          >
            Free Assessment →
          </Link>
        </div>
      </div>
    </>
  );
}
