import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Structural Drying Clarksville TN | IICRC S500 Certified",
  description:
    "IICRC S500-certified structural drying in Clarksville TN. LGR dehumidifiers, daily moisture monitoring. All insurance. Call (931) 271-2350.",
  alternates: { canonical: "/structural-drying-clarksville-tn" },
};

const SITE_URL = "https://water-damage-clarksville.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Structural Drying Clarksville TN",
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: { "@type": "City", name: "Clarksville" },
  description:
    "IICRC S500-certified structural drying in Clarksville TN. Industrial LGR dehumidifiers, desiccant drying, and daily moisture monitoring.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does structural drying take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most homes reach IICRC S500 dry-standard within 3-7 days, depending on how deep the moisture penetrated and the materials involved. Concrete and dense wood framing dry slower than drywall. We'll give you a specific estimate after moisture mapping.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know when my home is fully dry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We don't guess — we measure. Daily moisture readings with calibrated meters track progress against the IICRC S500 standard, and we issue a Certificate of Dryness only once every reading confirms materials are back to normal moisture content.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if structural drying isn't done properly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Materials that look dry on the surface can still hold moisture deep inside wall cavities, subfloor, and framing. Left untreated, that hidden moisture causes mold growth within 48 hours, warped flooring, and structural rot — problems that are far more expensive to fix than proper drying would have been.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need structural drying after a small leak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Even small leaks can wick moisture into surrounding materials faster than they appear to. If water sat for more than a few hours or soaked into drywall, flooring, or subfloor, professional moisture mapping is the only reliable way to confirm nothing was missed.",
      },
    },
    {
      "@type": "Question",
      name: "Does insurance cover structural drying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Structural drying following a covered water event — like a burst pipe or storm damage — is typically included in the same claim as extraction. We document daily psychrometric readings specifically because carriers, including USAA, require that data to approve the claim.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between air movers and dehumidifiers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Air movers create airflow across wet surfaces to speed up evaporation. Dehumidifiers then pull that evaporated moisture out of the air. Both are needed together — air movers alone just push humidity around the room without actually removing it.",
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
      name: "Structural Drying Clarksville TN",
      item: `${SITE_URL}/structural-drying-clarksville-tn`,
    },
  ],
};

const toc = [
  ["Signs You Need Structural Drying", "#signs"],
  ["Drying Equipment", "#equipment"],
  ["Typical Timeline", "#timeline"],
  ["What's Included", "#included"],
  ["FAQ", "#faq"],
  ["All Services", "#all-services"],
  ["All Service Areas", "#all-areas"],
];

const signs = [
  "Musty or damp smell that lingers after visible water is gone",
  "Warped, cupped, or buckling flooring near a past water event",
  "Soft or spongy spots in drywall or subfloor",
  "Condensation or moisture on windows or walls",
  "A recent flood, leak, or extraction job with no follow-up drying",
  "Visible discoloration on baseboards or lower walls",
];

const allServices: [string, string][] = [
  ["Emergency Water Damage", "/emergency-water-damage-clarksville-tn"],
  ["Flood Cleanup & Water Extraction", "/flood-cleanup-clarksville-tn"],
  ["Mold Remediation", "/mold-remediation-clarksville-tn"],
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

const faqs = faqSchema.mainEntity.map((q) => ({
  q: q.name,
  a: q.acceptedAnswer.text,
}));

export default function StructuralDryingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="IICRC S500 Certified"
        title="Structural Drying Services in Clarksville TN"
        subtitle="Industrial LGR dehumidifiers and precision drying. Daily monitoring until certified dry. All insurance. 60-min response."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
        imageFocus="center 40%"
        breadcrumbs={[{ label: "Services", href: "/" }, { label: "Structural Drying" }]}
        stat1="S500"
        stat1Sub="IICRC Certified"
        stat2="24/7"
        stat2Sub="Equipment Monitoring"
      />
      <style>{`
        .sp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:52px;align-items:start}
        .sp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block;margin-top:28px}
        .sp-ey:first-child{margin-top:0}
        .sp-h2{font-family:var(--font-cormorant);font-size:clamp(22px,2.5vw,32px);font-weight:700;color:#09090B;margin-bottom:16px;letter-spacing:-.4px;line-height:1.1}
        .sp-p{font-family:var(--font-inter);font-size:15px;line-height:1.8;color:#52525B;margin-bottom:16px}
        .list{list-style:none;margin:16px 0;display:flex;flex-direction:column;gap:9px}
        .list li{display:flex;align-items:flex-start;gap:10px;font-family:var(--font-inter);font-size:14px;color:#374151;line-height:1.5}
        .list li::before{content:"✓";color:#16A34A;font-weight:700;flex-shrink:0;margin-top:1px}
        .equip{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0}
        .eq{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:8px;padding:16px}
        .eq-icon{font-size:24px;margin-bottom:8px}
        .eq-t{font-family:var(--font-inter);font-size:13px;font-weight:700;color:#09090B;margin-bottom:4px}
        .eq-d{font-family:var(--font-inter);font-size:12px;color:#71717A;line-height:1.5}
        .timeline{display:flex;flex-direction:column;gap:0;margin:20px 0;position:relative}
        .tl-item{display:flex;gap:16px;padding-bottom:20px;position:relative}
        .tl-item::before{content:'';position:absolute;left:15px;top:32px;bottom:0;width:1px;background:#E4E4E7}
        .tl-item:last-child::before{display:none}
        .tl-dot{width:32px;height:32px;border-radius:50%;background:#F0FDF4;border:2px solid #22C55E;display:flex;align-items:center;justify-content:center;font-family:var(--font-inter);font-size:12px;font-weight:700;color:#16A34A;flex-shrink:0}
        .tl-t{font-family:var(--font-inter);font-size:13px;font-weight:700;color:#09090B;margin-bottom:3px}
        .tl-d{font-family:var(--font-inter);font-size:13px;color:#52525B;line-height:1.6}
        .sp-sb{display:flex;flex-direction:column;gap:18px;position:sticky;top:130px}
        .sp-sb-cta{background:#09090B;border-radius:10px;padding:26px}
        .sp-sb-ey{font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px;font-family:var(--font-inter)}
        .sp-sb-n{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#fff;margin-bottom:4px}
        .sp-sb-s{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.3);margin-bottom:18px}
        .sp-sb-b1{display:block;background:#22C55E;color:#09090B;padding:13px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;text-align:center;margin-bottom:8px}
        .sp-sb-b2{display:block;color:rgba(255,255,255,.45);padding:10px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-size:13px;text-align:center;border:1px solid rgba(255,255,255,.09)}
        .warn-box{background:#FFF7ED;border:1px solid #FED7AA;border-radius:10px;padding:20px;margin:20px 0}
        .warn-box h3{font-family:var(--font-inter);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#C2410C;margin-bottom:10px}
        .signs-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}
        .sign{background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:12px;font-family:var(--font-inter);font-size:13px;color:#991B1B;display:flex;align-items:center;gap:8px}
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
        @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}.equip{grid-template-columns:1fr}.signs-grid{grid-template-columns:1fr}}
      `}</style>
      <div style={{ background: "#fff" }}>
        <div className="sp">
          <main>
            <nav className="toc-box" aria-label="Page contents">
              <div className="toc-label">On This Page</div>
              <div className="toc-links">
                {toc.map(([label, href]) => (
                  <a key={href} href={href}>{label}</a>
                ))}
              </div>
            </nav>

            <span className="sp-ey" style={{ marginTop: 0 }}>What Is Structural Drying?</span>
            <h2 className="sp-h2">Precision Structural Drying — Faster, Safer, Certified</h2>
            <p className="sp-p">
              After water extraction, your structure looks dry — but
              isn&apos;t. Water penetrates deep into wall cavities, subfloors,
              joists, and insulation. Without professional structural drying,
              this hidden moisture causes mold growth within 48 hours, warped
              flooring, and structural rot. Our IICRC S500-certified process
              removes moisture at the molecular level — not just the surface.
            </p>
            <p className="sp-p">
              We place precision-calibrated LGR dehumidifiers and
              high-velocity air movers to create a controlled drying
              environment. Daily moisture readings track progress to the
              exact IICRC S500 standard — and we don&apos;t leave until your
              home is certified dry.
            </p>

            <div id="signs" className="warn-box">
              <h3>⚠️ Signs You Need Structural Drying</h3>
              <div className="signs-grid">
                {signs.map((s) => (
                  <div key={s} className="sign">
                    <span>🔴</span>{s}
                  </div>
                ))}
              </div>
            </div>

            <span id="equipment" className="sp-ey">Industrial Drying Equipment</span>
            <div className="equip">
              {[
                { i: "🌬️", t: "LGR Dehumidifiers", d: "Low Grain Refrigerant dehumidifiers extract moisture even at low humidity levels — far more effective than hardware store units." },
                { i: "💨", t: "High-Velocity Air Movers", d: "Centrifugal air movers create laminar airflow across wet surfaces, dramatically accelerating evaporation." },
                { i: "🔥", t: "Desiccant Dryers", d: "For extreme moisture situations, desiccant dehumidifiers work even in cold temperatures when refrigerant units can't." },
                { i: "📷", t: "FLIR Thermal Cameras", d: "Thermal imaging reveals hidden moisture in walls and ceilings invisible to the naked eye." },
                { i: "💧", t: "Moisture Meters", d: "Pin and pinless meters measure moisture content in wood, drywall, and concrete to precise percentages." },
                { i: "📊", t: "Psychrometric Monitoring", d: "Temperature, humidity, and dew point tracked continuously — documents drying progress for insurance." },
              ].map((e) => (
                <div key={e.t} className="eq">
                  <div className="eq-icon">{e.i}</div>
                  <div className="eq-t">{e.t}</div>
                  <div className="eq-d">{e.d}</div>
                </div>
              ))}
            </div>

            <span id="timeline" className="sp-ey">Typical Drying Timeline</span>
            <div className="timeline">
              {[
                { day: "Day 1", t: "Extraction + Equipment Setup", d: "Water extracted, moisture mapped, drying equipment placed. Psychrometric readings recorded." },
                { day: "Day 2-3", t: "Active Drying Phase", d: "Daily monitoring. Equipment adjusted based on moisture readings. Rapid moisture reduction." },
                { day: "Day 3-5", t: "Secondary Drying", d: "Targeting deeper structural moisture — wall cavities, subfloor, joists. Equipment repositioned as needed." },
                { day: "Day 5-7", t: "Final Monitoring", d: "Moisture levels approaching IICRC S500 standard. Final documentation prepared for insurance." },
                { day: "Final Day", t: "Certification", d: "All readings at or below standard. Equipment removed. Certificate of dryness issued." },
              ].map((t) => (
                <div key={t.day} className="tl-item">
                  <div className="tl-dot">{t.day.split(" ")[1]}</div>
                  <div><div className="tl-t">{t.day} — {t.t}</div><div className="tl-d">{t.d}</div></div>
                </div>
              ))}
            </div>

            <span id="included" className="sp-ey">What&apos;s Included</span>
            <ul className="list">
              {["IICRC S500-certified drying protocols", "Industrial LGR dehumidifiers", "High-velocity air movers", "Thermal imaging moisture mapping", "Daily psychrometric monitoring and readings", "Complete moisture log for insurance", "Desiccant drying available for severe cases", "Wall cavity drying if needed", "Certificate of dryness at completion", "All insurance direct billing"].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <span id="faq" className="sp-ey">Structural Drying FAQ</span>
            <div>
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">{faq.q}</summary>
                  <p className="faq-a">{faq.a}</p>
                </details>
              ))}
            </div>

            <span id="all-services" className="sp-ey">All Water Damage Services in Clarksville TN</span>
            <div className="link-chips">
              {allServices.map(([l, h]) => (
                <Link key={h} href={h} className="link-chip">{l}</Link>
              ))}
            </div>

            <span id="all-areas" className="sp-ey" style={{ marginTop: 28 }}>All Service Areas</span>
            <div className="link-chips">
              {allAreas.map(([l, h]) => (
                <Link key={h} href={h} className="link-chip">{l}</Link>
              ))}
              <Link href="/service-areas" className="link-chip" style={{ background: "#09090B", color: "#fff", borderColor: "#09090B" }}>
                View All Areas →
              </Link>
            </div>
          </main>
          <aside className="sp-sb">
            <div className="sp-sb-cta">
              <div className="sp-sb-ey">24/7 Emergency Line</div>
              <div className="sp-sb-n">(931) 271-2350</div>
              <div className="sp-sb-s">IICRC S500 Certified · 24/7</div>
              <a href="tel:+19312712350" className="sp-sb-b1">📞 Call Now</a>
              <Link href="/contact" className="sp-sb-b2">Free Assessment →</Link>
            </div>
            <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#16A34A", marginBottom: 12 }}>
                Why Us
              </h3>
              {["✅ IICRC S500 Certified", "✅ Daily monitoring", "✅ Certificate of dryness", "✅ All insurance accepted", "✅ USAA specialists"].map((t) => (
                <div key={t} style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#374151", marginBottom: 7 }}>{t}</div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <div style={{ background: "#09090B", padding: "72px 40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(26px,4vw,44px)", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: -1 }}>
          Structural Drying in Clarksville TN
        </h2>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "rgba(255,255,255,.5)", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>
          IICRC S500 certified. All insurance accepted. Free assessment.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="tel:+19312712350" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#22C55E", color: "#09090B", padding: "14px 32px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 700 }}>
            📞 (931) 271-2350
          </a>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "rgba(255,255,255,.7)", padding: "13px 22px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 500, border: "1px solid rgba(255,255,255,.18)" }}>
            Free Assessment →
          </Link>
        </div>
      </div>
    </>
  );
}