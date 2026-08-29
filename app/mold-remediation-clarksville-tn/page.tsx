import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mold Remediation Clarksville TN | Black Mold Removal",
  description:
    "IICRC AMRT-certified mold remediation in Clarksville TN. Black mold removal, containment, HEPA air scrubbing. All insurance. Call (931) 271-2350.",
  alternates: { canonical: "/mold-remediation-clarksville-tn" },
};

const SITE_URL = "https://water-damage-clarksville.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mold Remediation Clarksville TN",
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: { "@type": "City", name: "Clarksville" },
  description:
    "IICRC AMRT-certified mold remediation and black mold removal in Clarksville TN. Containment, HEPA filtration, air quality testing, and documentation.",
};

// NEW — FAQ schema, tied to the new on-page FAQ section below. This is what
// makes the FAQ content eligible for rich results, not just readable copy.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between mold removal and mold remediation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mold removal typically means cleaning visible mold off a surface. Remediation is the complete process — inspection, containment, safe removal, antimicrobial treatment, and verification that air quality is back within safe limits. We only do full remediation, because removal alone rarely solves the underlying problem.",
      },
    },
    {
      "@type": "Question",
      name: "How much does mold remediation cost in Clarksville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on the extent of contamination and whether materials need to be removed and replaced. We provide a free inspection and written assessment before any work begins, and we handle insurance documentation directly so you know your deductible upfront.",
      },
    },
    {
      "@type": "Question",
      name: "Does homeowners insurance cover mold remediation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, if the mold resulted from a covered event like a burst pipe or storm damage. As a USAA-preferred contractor, we work directly with insurance carriers on mold claims for military families and civilian homeowners alike — you're not left navigating the claims process alone.",
      },
    },
    {
      "@type": "Question",
      name: "Is black mold dangerous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Black mold (Stachybotrys) can produce mycotoxins linked to respiratory problems and allergic reactions, especially with prolonged exposure. If you suspect black mold, avoid disturbing it and call for an inspection rather than attempting removal yourself.",
      },
    },
    {
      "@type": "Question",
      name: "How long does mold remediation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential jobs take 1-5 days depending on the extent of contamination and whether materials need replacement. We'll give you a specific timeline after inspection.",
      },
    },
    {
      "@type": "Question",
      name: "Will mold come back after remediation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not if the moisture source is fixed. That's why our process includes identifying and addressing the underlying cause — a leak, humidity issue, or ventilation problem — not just removing visible mold.",
      },
    },
  ],
};

// NEW — BreadcrumbList schema, matching the pattern already live on the
// Emergency Water Damage page.
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/service-areas` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mold Remediation Clarksville TN",
      item: `${SITE_URL}/mold-remediation-clarksville-tn`,
    },
  ],
};

const SIDEBAR = `
  .sp-sb{display:flex;flex-direction:column;gap:18px;position:sticky;top:130px}
  .sp-sb-cta{background:#09090B;border-radius:10px;padding:26px}
  .sp-sb-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px}
  .sp-sb-n{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#fff;margin-bottom:4px;letter-spacing:-.5px}
  .sp-sb-s{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.3);margin-bottom:18px}
  .sp-sb-b1{display:block;background:#22C55E;color:#09090B;padding:13px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;text-align:center;margin-bottom:8px}
  .sp-sb-b1:hover{background:#16A34A}
  .sp-sb-b2{display:block;color:rgba(255,255,255,.45);padding:10px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-size:13px;text-align:center;border:1px solid rgba(255,255,255,.09)}
  .sp-sb-b2:hover{border-color:rgba(255,255,255,.25);color:rgba(255,255,255,.75)}
`;

// NEW — table-of-contents jump links, matching the AEO-structured pattern
// already proven on the Emergency page. Anchors point to the section ids
// added throughout the page below.
const toc = [
  ["Signs of a Mold Problem", "#signs"],
  ["What Causes Mold Growth", "#causes"],
  ["Our Remediation Process", "#process"],
  ["Residential & Commercial", "#property-types"],
  ["What's Included", "#included"],
  ["FAQ", "#faq"],
  ["Areas We Serve", "#areas"],
  ["All Services", "#all-services"],
  ["All Service Areas", "#all-areas"],
];

// NEW — full service list, matching the pattern added to Flood Cleanup and
// Structural Drying.
const allServices: [string, string][] = [
  ["Emergency Water Damage", "/emergency-water-damage-clarksville-tn"],
  ["Flood Cleanup & Water Extraction", "/flood-cleanup-clarksville-tn"],
  ["Structural Drying", "/structural-drying-clarksville-tn"],
  ["Sewage Backup Cleanup", "/services/sewage-backup-cleanup-clarksville-tn"],
  ["Burst Pipe Water Damage", "/services/burst-pipe-water-damage-clarksville-tn"],
  ["Basement Flooding", "/services/basement-flooding-clarksville-tn"],
  ["Storm Damage Restoration", "/services/storm-damage-restoration-clarksville-tn"],
  ["Commercial Water Damage", "/services/commercial-water-damage-clarksville-tn"],
  ["Insurance Claim Management", "/water-damage-insurance-claim-clarksville-tn"],
  ["Water Damage Odor Removal", "/water-damage-odor-removal-clarksville-tn"],
];

// NEW — full service-area list, matching the homepage's location set.
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

// NEW — causes section content, per the content playbook built from the
// Thomas Restoration comparison. Genuinely fills a gap this page didn't
// cover before.
const causes = [
  "Water damage from burst pipes, flooding, or storm intrusion left untreated",
  "Roof leaks and attic moisture",
  "Plumbing leaks behind walls or under sinks",
  "Crawlspace humidity — a widespread issue in this region's older and newer construction alike",
  "Poor bathroom, kitchen, or laundry room ventilation",
  "HVAC condensation during peak humidity months",
];

// NEW — residential/commercial coverage, closing the property-type gap
// found in the earlier content audit.
const propertyTypes = [
  { icon: "🏠", t: "Homes & Basements" },
  { icon: "🏘️", t: "Rental Properties & Apartment Units" },
  { icon: "🏢", t: "Office & Retail Spaces" },
  { icon: "⛪", t: "Churches & Community Buildings" },
];

// NEW — FAQ content matching faqSchema above, written as natural
// conversational queries targeting the low-KD mold keywords found in
// keyword research (mold testing, mold inspection, mold clean up).
const faqs = [
  {
    q: "What's the difference between mold removal and mold remediation?",
    a: "Mold removal typically means cleaning visible mold off a surface. Remediation is the complete process — inspection, containment, safe removal, antimicrobial treatment, and verification that air quality is back within safe limits. We only do full remediation, because removal alone rarely solves the underlying problem.",
  },
  {
    q: "How much does mold remediation cost in Clarksville?",
    a: "Cost depends on the extent of contamination and whether materials need to be removed and replaced. We provide a free inspection and written assessment before any work begins, and we handle insurance documentation directly so you know your deductible upfront.",
  },
  {
    q: "Does homeowners insurance cover mold remediation?",
    a: "Often, if the mold resulted from a covered event like a burst pipe or storm damage. As a USAA-preferred contractor, we work directly with insurance carriers on mold claims for military families and civilian homeowners alike — you're not left navigating the claims process alone.",
  },
  {
    q: "Is black mold dangerous?",
    a: "Black mold (Stachybotrys) can produce mycotoxins linked to respiratory problems and allergic reactions, especially with prolonged exposure. If you suspect black mold, avoid disturbing it and call for an inspection rather than attempting removal yourself.",
  },
  {
    q: "How long does mold remediation take?",
    a: "Most residential jobs take 1-5 days depending on the extent of contamination and whether materials need replacement. We'll give you a specific timeline after inspection.",
  },
  {
    q: "Will mold come back after remediation?",
    a: "Not if the moisture source is fixed. That's why our process includes identifying and addressing the underlying cause — a leak, humidity issue, or ventilation problem — not just removing visible mold.",
  },
];

export default function MoldRemediationPage() {
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
        eyebrow="IICRC AMRT Certified"
        title="Mold Remediation & Black Mold Removal in Clarksville TN"
        subtitle="IICRC AMRT-certified mold remediation. Containment, HEPA air scrubbing, air quality testing. All insurance accepted. 60-min response."
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=80"
        imageFocus="center 40%"
        breadcrumbs={[{ label: "Services", href: "/service-areas" }, { label: "Mold Remediation" }]}
        stat1="AMRT"
        stat1Sub="IICRC Certified"
        stat2="24/7"
        stat2Sub="Emergency Response"
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
        .warn-box{background:#FFF7ED;border:1px solid #FED7AA;border-radius:10px;padding:20px;margin:20px 0}
        .warn-box h3{font-family:var(--font-inter);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#C2410C;margin-bottom:10px}
        .signs{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}
        .sign{background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:12px;font-family:var(--font-inter);font-size:13px;color:#991B1B;display:flex;align-items:center;gap:8px}
        .process{display:flex;flex-direction:column;gap:12px;margin:16px 0}
        .proc-step{display:flex;gap:14px;padding:14px;background:#F9FAFB;border:1px solid #E4E4E7;border-radius:8px}
        .proc-n{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#D1FAE5;flex-shrink:0;line-height:1}
        .proc-t{font-family:var(--font-inter);font-size:13px;font-weight:700;color:#09090B;margin-bottom:3px}
        .proc-d{font-family:var(--font-inter);font-size:12px;color:#71717A;line-height:1.6}
        /* NEW — TOC, causes, property types, FAQ, areas styles */
        .toc-box{background:#F0FDF4;border:1px solid #BBF7D0;border-radius:10px;padding:18px 20px;margin-bottom:32px}
        .toc-label{font-family:var(--font-inter);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#16A34A;margin-bottom:10px}
        .toc-links{display:flex;flex-wrap:wrap;gap:8px 18px}
        .toc-links a{font-family:var(--font-inter);font-size:13px;font-weight:500;color:#1a2e1a;text-decoration:none}
        .toc-links a:hover{color:#16A34A;text-decoration:underline}
        .causes-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}
        .cause-item{display:flex;align-items:flex-start;gap:10px;background:#F9FAFB;border:1px solid #E4E4E7;border-radius:8px;padding:12px 14px;font-family:var(--font-inter);font-size:13px;color:#374151;line-height:1.55}
        .cause-item::before{content:"💧";flex-shrink:0}
        .ptype-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:16px 0}
        .ptype-item{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:8px;padding:16px 12px;text-align:center;font-family:var(--font-inter);font-size:12.5px;font-weight:600;color:#374151}
        .ptype-item span{display:block;font-size:22px;margin-bottom:8px}
        .faq-item{border-bottom:1px solid #E4E4E7}
        .faq-q{font-family:var(--font-inter);font-size:14.5px;font-weight:600;color:#09090B;padding:16px 0;cursor:pointer;list-style:none;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;line-height:1.4}
        .faq-q::-webkit-details-marker{display:none}
        .faq-q::after{content:"+";font-size:18px;font-weight:300;color:#9CA3AF;flex-shrink:0}
        details[open] .faq-q::after{transform:rotate(45deg)}
        .faq-a{font-family:var(--font-inter);font-size:13.5px;line-height:1.72;color:#52525B;padding-bottom:16px}
        .link-chips{display:flex;flex-wrap:wrap;gap:8px}
        .link-chip{font-family:var(--font-inter);font-size:13px;font-weight:500;color:#16A34A;text-decoration:none;background:#F0FDF4;border:1px solid #BBF7D0;padding:6px 14px;border-radius:100}
        .link-chip:hover{background:#22C55E;color:#09090B;border-color:#22C55E}
        ${SIDEBAR}
        @media(max-width:1024px){
          .sp{grid-template-columns:1fr;padding:52px 20px}
          .sp-sb{position:static}
          .signs{grid-template-columns:1fr}
          .causes-grid{grid-template-columns:1fr}
          .ptype-grid{grid-template-columns:repeat(2,1fr)}
        }
      `}</style>
      <div style={{ background: "#fff" }}>
        <div className="sp">
          <main>
            {/* NEW — jump-link TOC */}
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

            <span className="sp-ey">Expert Mold Remediation</span>
            <h2 className="sp-h2">
              Professional Mold Removal Clarksville Homeowners Trust
            </h2>
            <p className="sp-p">
              Mold begins growing within 24-48 hours of water damage — and it
              doesn&apos;t stop. Black mold (Stachybotrys) produces mycotoxins
              that cause respiratory problems, allergic reactions, and serious
              health issues. Our IICRC AMRT-certified technicians follow strict
              remediation protocols to safely remove mold, restore air
              quality, and prevent recurrence.
            </p>
            <p className="sp-p">
              We serve Clarksville TN, Fort Campbell, and all of Montgomery
              County. USAA-preferred contractor for military families. All
              insurance claims handled directly — you pay only your
              deductible.
            </p>

            <div id="signs" className="warn-box">
              <h3>⚠️ Signs You Have a Mold Problem</h3>
              <div className="signs">
                {[
                  ["🔴", "Visible black, green, or white spots on walls"],
                  ["🔴", "Musty or earthy odor — especially in basement"],
                  ["🔴", "Respiratory issues, coughing, or eye irritation"],
                  ["🔴", "Water stains or discoloration on ceilings/walls"],
                  ["🔴", "Peeling paint or wallpaper"],
                  ["🔴", "Past flooding or water damage left untreated"],
                ].map(([i, l]) => (
                  <div key={l} className="sign">
                    <span>{i}</span>
                    {l}
                  </div>
                ))}
              </div>
            </div>

            {/* NEW — causes section, closes a real content gap vs.
                competitors */}
            <span id="causes" className="sp-ey">
              What Causes Mold Growth in Clarksville Homes
            </span>
            <p className="sp-p">
              Clarksville&apos;s humid summers and frequent spring storms
              create ideal conditions for mold once moisture gets into a
              home. Understanding the cause matters as much as removing the
              mold itself — remediation without fixing the source usually
              means the problem returns.
            </p>
            <div className="causes-grid">
              {causes.map((c) => (
                <div key={c} className="cause-item">
                  {c}
                </div>
              ))}
            </div>
            <p className="sp-p">
              If your mold problem started with a leak, flood, or storm event,
              our{" "}
              <Link href="/emergency-water-damage-clarksville-tn" style={{ color: "#16A34A", fontWeight: 600 }}>
                water damage restoration team
              </Link>{" "}
              addresses both the water and the resulting mold as one
              coordinated job — not two separate calls.
            </p>

            <span id="process" className="sp-ey">
              Our Mold Remediation Process
            </span>
            <div className="process">
              {[
                { n: "01", t: "Mold Inspection & Air Testing", d: "We identify all mold-affected areas using thermal imaging, moisture meters, and air quality testing. No hidden mold escapes our inspection." },
                { n: "02", t: "Containment Setup", d: "Negative air pressure containment prevents cross-contamination. Plastic sheeting and zipper doors isolate the remediation zone." },
                { n: "03", t: "HEPA Air Scrubbing", d: "Industrial HEPA air scrubbers capture mold spores as small as 0.3 microns — cleaning the air during the entire remediation process." },
                { n: "04", t: "Safe Mold Removal", d: "Affected materials are safely removed following IICRC S520 standards. PPE-protected technicians eliminate all visible mold growth." },
                { n: "05", t: "Antimicrobial Treatment", d: "EPA-registered antimicrobial solution applied to all surfaces — kills remaining spores and inhibits future mold growth." },
                { n: "06", t: "Post-Remediation Verification", d: "Air quality testing confirms mold levels are within safe limits. Independent lab results available upon request." },
              ].map((s) => (
                <div key={s.n} className="proc-step">
                  <div className="proc-n">{s.n}</div>
                  <div>
                    <div className="proc-t">{s.t}</div>
                    <div className="proc-d">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* NEW — residential/commercial coverage */}
            <span id="property-types" className="sp-ey">
              Residential & Commercial Mold Remediation
            </span>
            <p className="sp-p">
              We remediate mold in single-family homes, rental properties, and
              commercial spaces throughout Clarksville and Montgomery County.
              Every job follows the same containment and safety standards
              regardless of property size.
            </p>
            <div className="ptype-grid">
              {propertyTypes.map((p) => (
                <div key={p.t} className="ptype-item">
                  <span aria-hidden="true">{p.icon}</span>
                  {p.t}
                </div>
              ))}
            </div>

            <span id="included" className="sp-ey">
              What&apos;s Included in Every Job
            </span>
            <ul className="list">
              {[
                "Free mold inspection and assessment",
                "Air quality testing before and after",
                "Full containment with negative air pressure",
                "HEPA air scrubbing throughout job",
                "IICRC S520-certified removal protocols",
                "EPA-registered antimicrobial treatment",
                "Complete insurance documentation",
                "Direct billing to insurance company",
                "USAA specialist support",
                "Certificate of remediation at completion",
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
                }}
              >
                Mold Problem? Act Fast.
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
                Mold spreads fast — every 24 hours it doubles in size. Call
                now for a free inspection.
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
                📞 (931) 271-2350 — Free Inspection
              </a>
            </div>

            {/* NEW — FAQ section, powers faqSchema above */}
            <span id="faq" className="sp-ey">
              Mold Remediation FAQ
            </span>
            <div>
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">{faq.q}</summary>
                  <p className="faq-a">{faq.a}</p>
                </details>
              ))}
            </div>

            {/* NEW — areas served, prose not just nav links */}
            <span id="areas" className="sp-ey">
              Areas We Serve
            </span>
            <p className="sp-p">
              We provide mold remediation throughout Clarksville and
              Montgomery County, including Fort Campbell, Sango, St.
              Bethlehem, Oak Grove KY, Hopkinsville KY, and Springfield TN. As
              a USAA-preferred contractor, we regularly assist military
              families relocating to or from Fort Campbell who need a fast,
              insurance-coordinated mold inspection before move-in or
              move-out.
            </p>

            {/* NEW — full services list */}
            <span id="all-services" className="sp-ey" style={{ marginTop: 28 }}>
              All Water Damage Services in Clarksville TN
            </span>
            <div className="link-chips">
              {allServices.map(([l, h]) => (
                <Link key={h} href={h} className="link-chip">
                  {l}
                </Link>
              ))}
            </div>

            {/* NEW — full service areas list */}
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
                style={{ background: "#09090B", color: "#fff", borderColor: "#09090B" }}
              >
                View All Areas →
              </Link>
            </div>
          </main>
          <aside className="sp-sb">
            <div className="sp-sb-cta">
              <div className="sp-sb-ey">Free Mold Inspection</div>
              <div className="sp-sb-n">(931) 271-2350</div>
              <div className="sp-sb-s">IICRC AMRT Certified · 24/7</div>
              <a href="tel:+19312712350" className="sp-sb-b1">
                📞 Call Now — Free Inspection
              </a>
              <Link href="/contact" className="sp-sb-b2">
                Schedule Assessment →
              </Link>
            </div>
            <div
              style={{
                background: "#F0FDF4",
                border: "1px solid #BBF7D0",
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
                  color: "#16A34A",
                  marginBottom: 12,
                }}
              >
                Certifications
              </h3>
              {[
                "✅ IICRC AMRT Certified",
                "✅ IICRC S520 Protocol",
                "✅ EPA Registered Products",
                "✅ OSHA Compliant",
                "✅ Insurance Approved",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 12,
                    color: "#374151",
                    marginBottom: 7,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <div style={{ background: "#09090B", padding: "72px 40px", textAlign: "center" }}>
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
          Mold Remediation in Clarksville TN
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
          IICRC certified. All insurance accepted. Free inspection and air
          quality testing.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
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