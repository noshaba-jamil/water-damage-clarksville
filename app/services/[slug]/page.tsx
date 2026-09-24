import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  servicesData,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/content/services/servicesData";

const SITE_URL = "https://water-damage-clarksville.com";
const heroImgs: Record<string, string> = {
  "sewage-backup-cleanup-clarksville-tn":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80",
  "burst-pipe-water-damage-clarksville-tn":
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1800&q=80",
  "basement-flooding-clarksville-tn":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
  "commercial-water-damage-clarksville-tn":
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1800&q=80",
  "storm-damage-restoration-clarksville-tn":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=80",
  "crawl-space-water-damage-clarksville-tn":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=80",
};

// Per-service "causes" content. Only slugs with a real entry get the
// section rendered; unknown slugs simply skip it rather than showing
// fabricated content. Sewage backup is filled in with accurate,
// industry-standard causes (not business-specific facts).
const causesBySlug: Record<string, { intro: string; items: string[] }> = {
  "sewage-backup-cleanup-clarksville-tn": {
    intro:
      "Sewage backups are classified as Category 3 (\"black water\") contamination and require specialized handling — not a standard cleanup. Understanding the cause helps prevent recurrence after remediation.",
    items: [
      "Clogged or blocked sewer lines from grease, wipes, or debris buildup",
      "Tree root intrusion into aging sewer laterals — common in older Clarksville neighborhoods",
      "Municipal sewer system backups during heavy rain or flooding",
      "Collapsed or damaged sewer pipes",
      "Sump pump failure allowing sewage-contaminated water to back up",
      "Septic system failure or overflow in areas outside city sewer lines",
    ],
  },
};

// Per-service FAQ content. Sewage backup gets accurate, specific answers.
// The fallback below (used by every other slug) is deliberately kept free
// of the "how fast do you respond" and "Fort Campbell military families"
// questions — those are already covered on the homepage, and the military
// question in particular had zero interpolation, so it was rendering as
// literally identical text across every service page using this fallback.
const faqsBySlug: Record<
  string,
  { q: string; a: string }[]
> = {
  "sewage-backup-cleanup-clarksville-tn": [
    {
      q: "Is sewage backup water dangerous?",
      a: "Yes. Sewage backup is classified as Category 3 (\"black water\") — it can contain bacteria, viruses, and other pathogens. Avoid contact and don't attempt DIY cleanup. Our technicians use full PPE and follow IICRC S500 protocols for safe, complete decontamination.",
    },
    {
      q: "How much does sewage backup cleanup cost in Clarksville TN?",
      a: "Cost depends on the extent of contamination and how many materials (flooring, drywall, insulation) need to be removed and replaced due to Category 3 exposure. We provide a free inspection and handle insurance documentation directly.",
    },
    {
      q: "Will homeowners insurance cover a sewage backup?",
      a: "Often yes, especially with sewer backup coverage riders, which many Tennessee policies include. We work directly with USAA, State Farm, Allstate, and all major carriers to document and submit your claim.",
    },
    {
      q: "How long does sewage backup cleanup take?",
      a: "Most residential sewage backup jobs take 2-5 days, including extraction, disposal of contaminated materials, sanitization, and drying — longer than a standard water cleanup due to the decontamination requirements.",
    },
    {
      q: "What should I do immediately after a sewage backup?",
      a: "Avoid contact with the water, keep children and pets away from the area, and call (931) 271-2350 immediately. Don't attempt to clean it yourself — Category 3 water requires professional decontamination, not household cleaning products.",
    },
  ],
};

const allServices: [string, string][] = [
  ["Emergency Water Damage", "/emergency-water-damage-clarksville-tn"],
  ["Flood Cleanup & Water Extraction", "/flood-cleanup-clarksville-tn"],
  ["Mold Remediation", "/mold-remediation-clarksville-tn"],
  ["Structural Drying", "/structural-drying-clarksville-tn"],
  ["Sewage Backup Cleanup", "/services/sewage-backup-cleanup-clarksville-tn"],
  ["Burst Pipe Water Damage", "/services/burst-pipe-water-damage-clarksville-tn"],
  ["Basement Flooding", "/services/basement-flooding-clarksville-tn"],
  ["Storm Damage Restoration", "/services/storm-damage-restoration-clarksville-tn"],
  ["Commercial Water Damage", "/services/commercial-water-damage-clarksville-tn"],
  ["Insurance Claim Management", "/water-damage-insurance-claim-clarksville-tn"],
  ["Water Damage Odor Removal", "/water-damage-odor-removal-clarksville-tn"],
];

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

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = getServiceBySlug(params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    alternates: { canonical: `/services/${params.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const img =
    heroImgs[params.slug] ||
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80";

  const causes = causesBySlug[params.slug];
  const faqs =
    faqsBySlug[params.slug] ||
    [
      {
        q: `What does ${service.title} include in Clarksville TN?`,
        a: `Our ${service.title.toLowerCase()} service includes a full on-site inspection, IICRC-standard mitigation work specific to the issue, complete moisture and damage documentation, and direct coordination with your insurance carrier. Call (931) 271-2350 for a free assessment.`,
      },
      {
        q: `Is ${service.title} covered by homeowners insurance in Tennessee?`,
        a: `Most ${service.title.toLowerCase()} costs caused by sudden, accidental events are covered by homeowners insurance. We work directly with USAA, State Farm, Allstate, Farmers, Liberty Mutual, and all major carriers.`,
      },
      {
        q: `How long does ${service.title.toLowerCase()} typically take?`,
        a: `Timelines vary based on the extent of the damage — most jobs run from a few days to about a week. We'll give you a specific estimate for your property after an on-site inspection.`,
      },
    ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} — Clarksville TN`,
    serviceType: service.title,
    description: service.metaDesc,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Montgomery County, Tennessee",
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { position: 1, name: "Home", item: SITE_URL },
      { position: 2, name: "Services", item: SITE_URL },
      {
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${params.slug}`,
      },
    ].map((i) => ({ ...i, "@type": "ListItem" })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // TOC, built dynamically based on what actually exists on this page
  const toc: [string, string][] = [
    ...service.sections.map((sec: { heading: string }, i: number): [string, string] => [sec.heading, `#sec-${i}`]),
    ...(causes ? ([["What Causes This", "#causes"]] as [string, string][]) : []),
    ...(service.bullets ? ([["What's Included", "#included"]] as [string, string][]) : []),
    ["FAQ", "#faq"],
    ["All Services", "#all-services"],
    ["All Service Areas", "#all-areas"],
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Professional Restoration Service — Clarksville TN"
        title={service.title}
        accent="— Clarksville TN"
        subtitle={service.intro.substring(0, 180) + "..."}
        image={img}
        breadcrumbs={[{ label: "Services", href: "/" }, { label: service.title }]}
        stat1="60min"
        stat1Sub="Guaranteed Arrival"
        stat2="24/7"
        stat2Sub="Always Available"
      />
      <style>{`
        /* GLOBAL OVERFLOW SAFETY NET — same fix applied to the homepage */
        html,body{max-width:100vw;overflow-x:hidden}
        p,span,a,div,h1,h2,h3{overflow-wrap:break-word;word-break:break-word}
        img,iframe,svg{max-width:100%}
        .sp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:48px;align-items:start}
        .sp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block}
        .sp-h2{font-family:var(--font-cormorant);font-size:clamp(22px,2.5vw,30px);font-weight:700;color:#09090B;margin-bottom:14px;letter-spacing:-0.4px;line-height:1.1;margin-top:40px}
        .sp-h2:first-child{margin-top:0}
        .sp-h3{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B;margin-bottom:6px;margin-top:20px}
        .sp-p{font-family:var(--font-inter);font-size:15px;line-height:1.78;color:#52525B;margin-bottom:14px}
        .sp-bullet{display:flex;align-items:flex-start;gap:11px;margin-bottom:10px}
        .sp-bullet-check{width:20px;height:20px;border-radius:50%;background:#22C55E;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;flex-shrink:0;margin-top:2px}
        .sp-cta{background:#09090B;border-radius:10px;padding:30px;text-align:center;margin:36px 0}
        .sp-cta-h{font-family:var(--font-cormorant);font-size:24px;font-weight:700;color:#fff;margin-bottom:8px;letter-spacing:-0.3px}
        .sp-cta-p{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.5);margin-bottom:18px}
        .sp-cta-btn{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:12px 24px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px}
        .sp-cta-btn:hover{background:#16A34A}
        .faq-item{border-bottom:1px solid #E4E4E7}
        .faq-q{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B;padding:16px 0;cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:12px}
        .faq-q::-webkit-details-marker{display:none}
        .faq-q::after{content:'+';font-size:18px;font-weight:300;color:#9CA3AF;flex-shrink:0;transition:transform .2s}
        details[open] .faq-q::after{transform:rotate(45deg)}
        .faq-a{font-family:var(--font-inter);font-size:14px;line-height:1.78;color:#52525B;padding-bottom:16px}
        .sb{display:flex;flex-direction:column;gap:18px;position:sticky;top:130px}
        .sb-cta{background:#09090B;border-radius:10px;padding:26px}
        .sb-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px}
        .sb-num{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#fff;margin-bottom:4px;letter-spacing:-0.5px}
        .sb-sub{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.3);margin-bottom:18px}
        .sb-b1{display:block;background:#22C55E;color:#09090B;padding:12px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;text-align:center;margin-bottom:8px}
        .sb-b1:hover{background:#16A34A}
        .sb-b2{display:block;background:transparent;color:rgba(255,255,255,.45);padding:10px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-size:13px;font-weight:500;text-align:center;border:1px solid rgba(255,255,255,.09)}
        .sb-b2:hover{border-color:rgba(255,255,255,.25);color:rgba(255,255,255,.75)}
        .sb-box{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:22px}
        .sb-bh{font-family:var(--font-inter);font-size:12px;font-weight:600;color:#09090B;margin-bottom:14px}
        .sb-links{display:flex;flex-direction:column;gap:10px}
        .sb-links a{font-family:var(--font-inter);font-size:13px;font-weight:500;color:#52525B;text-decoration:none;transition:color .15s;display:flex;align-items:center;gap:6px}
        .sb-links a::before{content:'→';font-size:11px;color:#16A34A;flex-shrink:0}
        .sb-links a:hover{color:#16A34A}
        .toc-box{background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:18px 20px;margin-bottom:32px}
        .toc-label{font-family:var(--font-inter);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#16A34A;margin-bottom:10px}
        .toc-links{display:flex;flex-wrap:wrap;gap:8px 18px}
        .toc-links a{font-family:var(--font-inter);font-size:13px;font-weight:500;color:#1a2e1a;text-decoration:none}
        .toc-links a:hover{color:#16A34A;text-decoration:underline}
        .causes-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}
        .cause-item{display:flex;align-items:flex-start;gap:10px;background:#F9FAFB;border:1px solid #E4E4E7;border-radius:8px;padding:12px 14px;font-family:var(--font-inter);font-size:13px;color:#374151;line-height:1.55}
        .cause-item::before{content:"⚠️";flex-shrink:0}
        .link-chips{display:flex;flex-wrap:wrap;gap:8px}
        .link-chip{font-family:var(--font-inter);font-size:13px;font-weight:500;color:#16A34A;text-decoration:none;background:#F0FDF4;border:1px solid #BBF7D0;padding:6px 14px;border-radius:100}
        .link-chip:hover{background:#22C55E;color:#09090B;border-color:#22C55E}
        @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sb{position:static}.causes-grid{grid-template-columns:1fr}}
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

            {service.sections.map((sec: { heading: string; content: string }, i: number) => (
              <section key={i} aria-labelledby={`sec-${i}`}>
                {i === 1 && (
                  <div className="sp-cta">
                    <div className="sp-cta-h">Need Help in Clarksville?</div>
                    <div className="sp-cta-p">
                      We respond in 60 minutes — every time, any time of day.
                    </div>
                    <a href="tel:+19312712350" className="sp-cta-btn">
                      📞 Call (931) 271-2350 Now
                    </a>
                  </div>
                )}
                <span className="sp-ey">About This Service</span>
                <h2 className="sp-h2" id={`sec-${i}`}>
                  {sec.heading}
                </h2>
                <p className="sp-p">{sec.content}</p>
              </section>
            ))}

            {causes && (
              <section id="causes" aria-labelledby="causes-h">
                <span className="sp-ey">Common Causes</span>
                <h2 className="sp-h2" id="causes-h">
                  What Causes {service.title}
                </h2>
                <p className="sp-p">{causes.intro}</p>
                <div className="causes-grid">
                  {causes.items.map((c) => (
                    <div key={c} className="cause-item">
                      {c}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {service.bullets && (
              <section id="included" aria-labelledby="inc-h">
                <h2 className="sp-h2" id="inc-h">
                  What Our {service.title} Service Includes
                </h2>
                <div role="list">
                  {service.bullets.map((b: string) => (
                    <div key={b} className="sp-bullet" role="listitem">
                      <div className="sp-bullet-check" aria-hidden="true">
                        ✓
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: "#374151",
                        }}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section id="faq" aria-labelledby="faq-h" style={{ marginTop: 40 }}>
              <span className="sp-ey">Frequently Asked Questions</span>
              <h2 className="sp-h2" id="faq-h">
                {service.title} FAQs — Clarksville TN
              </h2>
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">{faq.q}</summary>
                  <p className="faq-a">{faq.a}</p>
                </details>
              ))}
            </section>

            <section id="all-services" style={{ marginTop: 40 }}>
              <span className="sp-ey">All Water Damage Services in Clarksville TN</span>
              <div className="link-chips">
                {allServices.map(([l, h]) => (
                  <Link key={h} href={h} className="link-chip">
                    {l}
                  </Link>
                ))}
              </div>
            </section>

            <section id="all-areas" style={{ marginTop: 28 }} aria-labelledby="areas-h">
              <span className="sp-ey">Service Areas</span>
              <h2 className="sp-h2" id="areas-h">
                {service.title} Throughout Our Service Area
              </h2>
              <nav aria-label="Service area locations">
                <div className="link-chips">
                  {allAreas.map(([l, h]) => (
                    <Link key={h} href={h} className="link-chip">
                      {l}
                    </Link>
                  ))}
                  <Link
                    href="/service-areas"
                    className="link-chip"
                    style={{ background: "#09090B", color: "#fff", borderColor: "#09090B" }}
                  >
                    View All Areas →
                  </Link>
                </div>
              </nav>
            </section>
          </main>
          <aside className="sb" aria-label="Contact and related services">
            <div className="sb-cta">
              <div className="sb-ey">Emergency Line</div>
              <div className="sb-num">(931) 271-2350</div>
              <div className="sb-sub">Answered in 60 seconds · 24/7</div>
              <a href="tel:+19312712350" className="sb-b1">
                📞 Call Now
              </a>
              <Link href="/contact" className="sb-b2">
                Free Assessment →
              </Link>
            </div>
            <nav className="sb-box" aria-label="Related services">
              <div className="sb-bh">Related Services</div>
              <div className="sb-links">
                {servicesData
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 5)
                  .map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}>
                      {s.title}
                    </Link>
                  ))}
              </div>
            </nav>
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
          Ready to Help in Clarksville TN
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
          60-minute response guaranteed. All insurance accepted. Free inspection
          and assessment.
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
              gap: 8,
              background: "#22C55E",
              color: "#09090B",
              padding: "14px 30px",
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
              gap: 8,
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