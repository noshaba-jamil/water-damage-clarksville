import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Water Damage Insurance Claims Clarksville TN | USAA",
  description:
    "Water damage insurance claims handled completely in Clarksville TN. USAA, State Farm, Allstate specialists. Direct billing, deductible only.",
  alternates: { canonical: "/water-damage-insurance-claim-clarksville-tn" },
};

const SITE_URL = "https://water-damage-clarksville.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Damage Insurance Claim Management — Clarksville TN",
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: { "@type": "AdministrativeArea", name: "Montgomery County, Tennessee" },
  description:
    "Complete water damage insurance claim management in Clarksville TN — documentation, adjuster coordination, and direct billing for USAA and all major carriers.",
};

// The "does insurance cover water damage" and "will my rates go up"
// questions also live on /faq's Insurance & Costs category with near-
// identical answers (same facts, same structure) — since this page is the
// specialist/deeper resource on insurance claims specifically, its answers
// go further than the hub's summary version instead of restating it.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does homeowners insurance cover water damage in Tennessee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually yes for the source, but coverage depends on how the claim is documented. A burst pipe is covered; the same pipe leaking slowly for months often isn't, because carriers treat that as a maintenance issue. This is exactly why we photograph and log everything before cleanup starts — proper documentation is what turns a borderline claim into an approved one.",
      },
    },
    {
      "@type": "Question",
      name: "Does USAA cover water damage for Fort Campbell military families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "USAA homeowners and renters insurance covers the same sudden, accidental water damage events as standard policies. As a USAA preferred vendor, we handle documentation to USAA's specific requirements and understand deployment-related scheduling and on-post/off-post housing considerations.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do before filing a water damage insurance claim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Don't clean up before documenting. Call us first — we photograph and document the full damage scope and moisture readings before any cleanup begins, which is critical evidence for full claim approval. Cleaning up first is one of the most common reasons claims get underpaid.",
      },
    },
    {
      "@type": "Question",
      name: "Will filing a water damage claim raise my insurance rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's carrier- and policy-specific, so we won't promise an outcome — but the pattern we see most often with our clients is that a single, well-documented claim for a covered event has a smaller rate impact than homeowners expect, especially compared to the cost of not filing at all. Ask your agent about your policy's specific claims-surcharge rules before deciding.",
      },
    },
    {
      "@type": "Question",
      name: "What if my water damage insurance claim gets denied?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our complete documentation — photos, moisture logs, and scope of loss — gives you the evidence needed to appeal a denial or dispute an underpayment. We support the claims process through resolution, not just the initial filing.",
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
      name: "Water Damage Insurance Claims Clarksville TN",
      item: `${SITE_URL}/water-damage-insurance-claim-clarksville-tn`,
    },
  ],
};

const toc = [
  ["Insurance Companies We Work With", "#insurers"],
  ["Our Claims Process", "#process"],
  ["What We Handle", "#included"],
  ["FAQ", "#faq"],
  ["All Services", "#all-services"],
  ["All Service Areas", "#all-areas"],
];

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
  ["Cunningham, TN", "/locations/cunningham-tn"],
  ["Southside, TN", "/locations/southside-tn"],
];

const faqs = faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }));

export default function InsurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageHero
        eyebrow="Insurance Claim Specialists"
        title="Water Damage Insurance Claims in Clarksville TN"
        subtitle="We handle everything — documentation, adjuster communication, direct billing. USAA specialists for Fort Campbell. You pay only your deductible."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80"
        imageFocus="center 40%"
        breadcrumbs={[{ label: "Services", href: "/" }, { label: "Insurance Claims" }]}
        stat1="$0"
        stat1Sub="Out of Pocket*"
        stat2="USAA"
        stat2Sub="Preferred Contractor"
      />
      <style>{`
        html,body{max-width:100vw;overflow-x:hidden}
        p,span,a,div,h1,h2,h3{overflow-wrap:break-word;word-break:break-word}
        img,iframe,svg{max-width:100%}
        .sp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:52px;align-items:start}
        .sp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block;margin-top:28px}
        .sp-ey:first-child{margin-top:0}
        .sp-h2{font-family:var(--font-cormorant);font-size:clamp(22px,2.5vw,32px);font-weight:700;color:#09090B;margin-bottom:16px;letter-spacing:-.4px;line-height:1.1}
        .sp-p{font-family:var(--font-inter);font-size:15px;line-height:1.8;color:#52525B;margin-bottom:16px}
        .list{list-style:none;margin:16px 0;display:flex;flex-direction:column;gap:9px}
        .list li{display:flex;align-items:flex-start;gap:10px;font-family:var(--font-inter);font-size:14px;color:#374151;line-height:1.5}
        .list li::before{content:"✓";color:#16A34A;font-weight:700;flex-shrink:0;margin-top:1px}
        .insurers{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0}
        .ins{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:8px;padding:16px;text-align:center;font-family:var(--font-inter);font-size:13px;font-weight:600;color:#09090B}
        .ins.primary{background:#F0FDF4;border-color:#BBF7D0;color:#16A34A}
        .steps{display:flex;flex-direction:column;gap:12px;margin:20px 0}
        .step{display:flex;gap:14px;padding:16px;background:#F9FAFB;border:1px solid #E4E4E7;border-radius:8px}
        .step-n{font-family:var(--font-cormorant);font-size:28px;font-weight:700;color:#D1FAE5;flex-shrink:0;line-height:1}
        .step-t{font-family:var(--font-inter);font-size:13px;font-weight:700;color:#09090B;margin-bottom:3px}
        .step-d{font-family:var(--font-inter);font-size:12px;color:#71717A;line-height:1.6}
        .sp-sb{display:flex;flex-direction:column;gap:18px;position:sticky;top:130px}
        .sp-sb-cta{background:#09090B;border-radius:10px;padding:26px}
        .sp-sb-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px}
        .sp-sb-n{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#fff;margin-bottom:4px}
        .sp-sb-s{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.3);margin-bottom:18px}
        .sp-sb-b1{display:block;background:#22C55E;color:#09090B;padding:13px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;text-align:center;margin-bottom:8px}
        .sp-sb-b2{display:block;color:rgba(255,255,255,.45);padding:10px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-size:13px;text-align:center;border:1px solid rgba(255,255,255,.09)}
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
        .usaa-box{background:#0F172A;border:1px solid rgba(74,222,128,.2);border-radius:10px;padding:24px 26px;margin:24px 0}
        .usaa-box h3{font-family:var(--font-inter);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#4ADE80;margin-bottom:10px}
        .usaa-box p{font-family:var(--font-inter);font-size:14px;line-height:1.75;color:rgba(255,255,255,.7);margin:0}
        @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}.insurers{grid-template-columns:1fr 1fr}}
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

            <span className="sp-ey" style={{ marginTop: 0 }}>We Handle Everything</span>
            <h2 className="sp-h2">Complete Insurance Claim Management — You Focus on Your Family</h2>
            <p className="sp-p">
              Dealing with an insurance claim after water damage is
              overwhelming — especially when your home is still wet. We&apos;ve
              managed hundreds of claims in Clarksville TN and know exactly
              what adjusters need. Our team handles every step: emergency
              documentation, moisture reports, adjuster communication, and
              direct billing. You pay only your deductible.
            </p>

            <div className="usaa-box">
              <h3>🎖️ USAA Preferred Contractor — Fort Campbell Families</h3>
              <p>
                We are USAA-preferred contractors — critical for Fort Campbell
                military families whose damage often involves military
                housing, on-post flooding, or USAA-specific claim
                requirements. We know the USAA process inside and out,
                including deployment-aware scheduling so a PCS move or
                deployment doesn&apos;t stall your claim.
              </p>
            </div>

            <span id="insurers" className="sp-ey">Insurance Companies We Work With</span>
            <div className="insurers">
              {[["USAA", true], ["State Farm", false], ["Allstate", false], ["Farmers", false], ["GEICO", false], ["Progressive", false], ["Nationwide", false], ["Liberty Mutual", false], ["Travelers", false]].map(([n, p]) => (
                <div key={n as string} className={`ins${p ? " primary" : ""}`}>{p ? "⭐ " : ""}{n as string}{p ? " (USAA Specialist)" : ""}</div>
              ))}
            </div>

            <span id="process" className="sp-ey">Our Claims Process</span>
            <div className="steps">
              {[
                { n: "01", t: "Emergency Documentation", d: "We document everything immediately — photos, moisture readings, damage scope — before cleanup begins. This protects your claim." },
                { n: "02", t: "Claim Initiation Support", d: "We help you file your claim correctly from the start. Wrong info on initial claims causes delays and underpayment." },
                { n: "03", t: "Adjuster Coordination", d: "We meet the adjuster on-site, present our scope of loss, and advocate for full coverage of all damage — visible and hidden." },
                { n: "04", t: "Moisture Documentation", d: "Daily moisture logs in the format insurance companies require. Undeniable evidence for full claim approval." },
                { n: "05", t: "Direct Billing", d: "We bill your insurance company directly. You receive the work; insurance pays us. You pay only your deductible." },
                { n: "06", t: "Claim Follow-Through", d: "If your claim is delayed or disputed, our documentation gives you everything needed to push back and win." },
              ].map((s) => (
                <div key={s.n} className="step">
                  <div className="step-n">{s.n}</div>
                  <div><div className="step-t">{s.t}</div><div className="step-d">{s.d}</div></div>
                </div>
              ))}
            </div>

            <span id="included" className="sp-ey">What We Handle For You</span>
            <ul className="list">
              {["Emergency documentation before cleanup starts", "Complete photo and moisture log package", "Scope of loss preparation in insurance format", "On-site adjuster meeting and advocacy", "Direct billing to your insurance company", "USAA-specific claim requirements (Fort Campbell)", "Supplemental claims if additional damage found", "Denied claim documentation support", "Zero out-of-pocket beyond your deductible*"].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#9CA3AF", marginTop: 8 }}>
              *Subject to your policy coverage and deductible amount.
            </p>

            <div style={{ background: "#FFF7ED", border: "1px solid #FED7AA", borderRadius: 10, padding: 20, margin: "28px 0" }}>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 700, color: "#C2410C", marginBottom: 8 }}>
                ⚠️ Don&apos;t Clean Up Before Documenting
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#92400E", lineHeight: 1.6 }}>
                Many homeowners lose thousands in insurance money by cleaning
                up before proper documentation. Call us FIRST — we document
                everything before starting cleanup to protect your full claim
                value.
              </p>
            </div>

            <span id="faq" className="sp-ey">Insurance Claim FAQ</span>
            <div>
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">{faq.q}</summary>
                  <p className="faq-a">{faq.a}</p>
                </details>
              ))}
            </div>

            <span id="all-services" className="sp-ey" style={{ marginTop: 28 }}>All Water Damage Services in Clarksville TN</span>
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
              <div className="sp-sb-ey">USAA Specialists — Fort Campbell</div>
              <div className="sp-sb-n">(931) 271-2350</div>
              <div className="sp-sb-s">Call before you clean up — protect your claim</div>
              <a href="tel:+19312712350" className="sp-sb-b1">📞 Call Now — Free Claim Help</a>
              <Link href="/contact" className="sp-sb-b2">Free Assessment →</Link>
            </div>
            <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#16A34A", marginBottom: 12 }}>
                Claim Benefits
              </h3>
              {["✅ Direct insurance billing", "✅ You pay deductible only", "✅ USAA specialists", "✅ On-site adjuster support", "✅ Complete documentation", "✅ Denied claim help", "✅ No upfront costs"].map((t) => (
                <div key={t} style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#374151", marginBottom: 7 }}>{t}</div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <div style={{ background: "#09090B", padding: "72px 40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(26px,4vw,44px)", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: -1 }}>
          Insurance Claim Help in Clarksville TN
        </h2>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "rgba(255,255,255,.5)", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>
          USAA specialists. Direct billing. Free claim consultation.
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