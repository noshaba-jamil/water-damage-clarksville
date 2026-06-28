import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Emergency Water Damage Restoration Clarksville TN | 60-Min Response | (931) 271-2350",
  description: "Emergency water damage restoration in Clarksville TN. IICRC-certified team arrives in 60 minutes, 24/7/365. Burst pipes, flooding, sewage, storm damage. All insurance. Free inspection. Call (931) 271-2350.",
  alternates: { canonical: "/emergency-water-damage-clarksville-tn" },
  openGraph: {
    title: "Emergency Water Damage Restoration Clarksville TN | 60-Min Response",
    description: "24/7 emergency water damage restoration in Clarksville TN. 60-min guaranteed arrival. IICRC-certified. All insurance including USAA. Call (931) 271-2350.",
    url: "https://waterdamageclarksville.com/emergency-water-damage-clarksville-tn",
    type: "website",
  },
};

const SITE_URL = "https://waterdamageclarksville.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Water Damage Restoration — Clarksville TN",
  serviceType: "Emergency Water Damage Restoration",
  description: "24/7 emergency water damage restoration in Clarksville TN and Montgomery County. IICRC-certified team responds within 60 minutes to burst pipes, flooding, sewage backup, and storm damage.",
  provider: {
    "@type": "LocalBusiness",
    name: "Clarksville Water Damage Restoration",
    telephone: "(931) 271-2350",
    215 Legion Street, Clarksville, TN 37040", postalCode: "37040" },
    url: SITE_URL,
  },
  areaServed: { "@type": "AdministrativeArea", name: "Montgomery County, Tennessee" },
  availableChannel: { "@type": "ServiceChannel", serviceUrl: SITE_URL, servicePhone: "(931) 271-2350", availableLanguage: "English" },
  offers: { "@type": "Offer", description: "Free emergency inspection. Direct insurance billing. You pay only your deductible." },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly can you respond to a water damage emergency in Clarksville TN?", acceptedAnswer: { "@type": "Answer", text: "We guarantee 60-minute on-site arrival anywhere in Clarksville TN and Montgomery County, 24 hours a day, 7 days a week, 365 days a year. A real IICRC-certified expert answers your call in under 60 seconds — no voicemail, no automated systems." } },
    { "@type": "Question", name: "What types of water damage emergencies do you handle in Clarksville?", acceptedAnswer: { "@type": "Answer", text: "We handle all water damage emergencies in Clarksville TN including burst and frozen pipes, basement flooding, sewage backup (Category 3 black water), washing machine and appliance failures, water heater ruptures, storm flooding, roof leak intrusion, toilet overflow, foundation water intrusion, and commercial property emergencies." } },
    { "@type": "Question", name: "What is the most important thing to do after water damage in my Clarksville home?", acceptedAnswer: { "@type": "Answer", text: "The most important action is calling a professional restoration company immediately — (931) 271-2350. Every hour of delay allows water to penetrate deeper into structural materials and increases mold risk in Clarksville's humid subtropical climate. Shut off your water supply if the source is a plumbing failure, then call for professional help." } },
    { "@type": "Question", name: "Does emergency water damage restoration cost more at night or on weekends?", acceptedAnswer: { "@type": "Answer", text: "No. We charge the same rates 24 hours a day, 7 days a week, including nights, weekends, and holidays. Water damage emergencies do not wait for business hours, and neither do our rates." } },
    { "@type": "Question", name: "Do you work directly with insurance companies for emergency water damage in Clarksville?", acceptedAnswer: { "@type": "Answer", text: "Yes. We work directly with all major insurance carriers including USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, and all others. We open your claim, provide complete Xactimate documentation, communicate directly with your adjuster, and bill the carrier directly. You pay only your deductible." } },
    { "@type": "Question", name: "What equipment does your emergency team use?", acceptedAnswer: { "@type": "Answer", text: "Our emergency trucks carry truck-mounted water extractors capable of removing thousands of gallons per hour, thermal imaging cameras for hidden moisture detection, professional moisture meters, industrial LGR dehumidifiers, high-velocity air movers, HEPA air scrubbers, EPA-registered antimicrobials, and complete PPE for Category 3 black water events." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Emergency Water Damage Clarksville TN", item: `${SITE_URL}/emergency-water-damage-clarksville-tn` },
  ],
};

export default function EmergencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="24/7 Emergency Response — Clarksville TN"
        title="Emergency Water Damage Restoration"
        accent="in Clarksville TN"
        subtitle="IICRC-certified team on-site within 60 minutes. Burst pipes, flooding, sewage backup, storm damage — we respond to every water emergency 24 hours a day. All insurance accepted including USAA."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
        breadcrumbs={[{ label: "Emergency Water Damage Clarksville TN" }]}
        stat1="60min" stat1Sub="Guaranteed Arrival"
        stat2="24/7" stat2Sub="Always Available"
        stat3="All" stat3Sub="Insurance Accepted"
      />

      <style>{`
        .ep { max-width:1240px; margin:0 auto; padding:80px 40px; display:grid; grid-template-columns:1fr 320px; gap:56px; align-items:start; }
        .ep-ey { font-family:var(--font-inter); font-size:10px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:#16A34A; margin-bottom:10px; display:block; }
        .ep-h2 { font-family:var(--font-cormorant); font-size:clamp(22px,2.8vw,32px); font-weight:700; color:#09090B; margin-bottom:14px; letter-spacing:-0.5px; line-height:1.1; margin-top:44px; }
        .ep-h2:first-child { margin-top:0; }
        .ep-h3 { font-family:var(--font-inter); font-size:16px; font-weight:600; color:#09090B; margin-bottom:8px; margin-top:24px; }
        .ep-p { font-family:var(--font-inter); font-size:15px; line-height:1.8; color:#374151; margin-bottom:14px; }
        .ep-p strong { color:#09090B; font-weight:600; }
        .answer-box { background:#F0FDF4; border:1px solid #BBF7D0; border-left:4px solid #22C55E; border-radius:8px; padding:20px 24px; margin:20px 0 28px; }
        .ab-label { font-family:var(--font-inter); font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#16A34A; margin-bottom:8px; display:block; }
        .ab-text { font-family:var(--font-inter); font-size:14.5px; line-height:1.72; color:#1a2e1a; }
        .warn-box { background:#FEF2F2; border:1px solid #FECACA; border-left:4px solid #DC2626; border-radius:8px; padding:18px 22px; margin:20px 0; }
        .warn-title { font-family:var(--font-inter); font-size:14px; font-weight:700; color:#DC2626; margin-bottom:6px; }
        .warn-text { font-family:var(--font-inter); font-size:13.5px; line-height:1.65; color:#374151; }
        .emg-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:18px 0; }
        .emg-item { display:flex; align-items:flex-start; gap:10px; background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:12px 14px; font-family:var(--font-inter); font-size:13.5px; color:#1a2332; line-height:1.5; }
        .emg-item::before { content:'✓'; color:#16A34A; font-weight:700; flex-shrink:0; margin-top:1px; }
        .timeline { display:flex; flex-direction:column; gap:0; margin:20px 0; }
        .tl-row { display:grid; grid-template-columns:110px 1fr; gap:16px; padding:16px 0; border-bottom:1px solid #E4E4E7; }
        .tl-row:last-child { border-bottom:none; }
        .tl-time { font-family:var(--font-cormorant); font-size:15px; font-weight:700; color:#DC2626; line-height:1.4; padding-top:2px; }
        .tl-risk { font-family:var(--font-inter); font-size:14px; line-height:1.65; color:#374151; }
        .tl-risk strong { color:#09090B; }
        .steps-list { display:flex; flex-direction:column; gap:0; }
        .step-row { display:flex; gap:20px; padding:20px 0; border-bottom:1px solid #E4E4E7; }
        .step-row:last-child { border-bottom:none; }
        .step-n { font-family:var(--font-cormorant); font-size:30px; font-weight:700; color:#22C55E; flex-shrink:0; min-width:44px; line-height:1; padding-top:4px; }
        .step-title { font-family:var(--font-inter); font-size:15px; font-weight:600; color:#09090B; margin-bottom:5px; }
        .step-body { font-family:var(--font-inter); font-size:14px; line-height:1.7; color:#52525B; }
        .mid-cta { background:#09090B; border-radius:10px; padding:32px; text-align:center; margin:36px 0; }
        .mc-h { font-family:var(--font-cormorant); font-size:26px; font-weight:700; color:#fff; margin-bottom:8px; letter-spacing:-0.3px; }
        .mc-p { font-family:var(--font-inter); font-size:13px; color:rgba(255,255,255,.5); margin-bottom:20px; }
        .mc-btn { display:inline-flex; align-items:center; gap:8px; background:#22C55E; color:#09090B; padding:13px 26px; border-radius:6px; text-decoration:none; font-family:var(--font-inter); font-weight:700; font-size:15px; transition:background .2s; }
        .mc-btn:hover { background:#16A34A; }
        .faq-item { border-bottom:1px solid #E4E4E7; }
        .faq-q { font-family:var(--font-inter); font-size:15px; font-weight:600; color:#09090B; padding:18px 0; cursor:pointer; list-style:none; display:flex; align-items:flex-start; justify-content:space-between; gap:12px; line-height:1.4; }
        .faq-q::-webkit-details-marker { display:none; }
        .faq-q::after { content:'+'; font-size:20px; font-weight:300; color:#9CA3AF; flex-shrink:0; transition:transform .2s; margin-top:-2px; }
        details[open] .faq-q::after { transform:rotate(45deg); }
        .faq-a { font-family:var(--font-inter); font-size:14.5px; line-height:1.78; color:#52525B; padding-bottom:18px; }
        .int-links { display:flex; flex-direction:column; gap:9px; margin:18px 0; }
        .int-link { font-family:var(--font-inter); font-size:14px; font-weight:500; color:#16A34A; text-decoration:none; display:flex; align-items:center; gap:6px; }
        .int-link::before { content:'→'; font-size:11px; flex-shrink:0; }
        .int-link:hover { color:#09090B; }
        /* Sidebar */
        .sidebar { display:flex; flex-direction:column; gap:18px; position:sticky; top:130px; }
        .sb-cta { background:#09090B; border-radius:10px; padding:26px; }
        .sb-ey { font-family:var(--font-inter); font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#4ADE80; margin-bottom:8px; }
        .sb-num { font-family:var(--font-cormorant); font-size:28px; font-weight:700; color:#fff; margin-bottom:4px; letter-spacing:-0.5px; }
        .sb-sub { font-family:var(--font-inter); font-size:12px; color:rgba(255,255,255,.3); margin-bottom:18px; }
        .sb-b1 { display:block; background:#22C55E; color:#09090B; padding:12px; border-radius:6px; text-decoration:none; font-family:var(--font-inter); font-weight:700; font-size:14px; text-align:center; margin-bottom:8px; transition:background .2s; }
        .sb-b1:hover { background:#16A34A; }
        .sb-b2 { display:block; background:transparent; color:rgba(255,255,255,.45); padding:10px; border-radius:6px; text-decoration:none; font-family:var(--font-inter); font-size:13px; font-weight:500; text-align:center; border:1px solid rgba(255,255,255,.09); transition:all .18s; }
        .sb-b2:hover { border-color:rgba(255,255,255,.25); color:rgba(255,255,255,.75); }
        .sb-box { background:#F9FAFB; border:1px solid #E4E4E7; border-radius:10px; padding:22px; }
        .sb-bh { font-family:var(--font-inter); font-size:12px; font-weight:700; color:#09090B; margin-bottom:14px; text-transform:uppercase; letter-spacing:1px; }
        .sb-list { display:flex; flex-direction:column; gap:9px; }
        .sb-list a { font-family:var(--font-inter); font-size:13px; font-weight:500; color:#374151; text-decoration:none; transition:color .15s; display:flex; align-items:center; gap:6px; }
        .sb-list a::before { content:'→'; font-size:11px; color:#16A34A; flex-shrink:0; }
        .sb-list a:hover { color:#16A34A; }
        .sb-areas { display:flex; flex-wrap:wrap; gap:6px; }
        .sb-area { font-family:var(--font-inter); font-size:11px; font-weight:500; background:#fff; border:1px solid #E4E4E7; padding:4px 10px; border-radius:100px; color:#52525B; text-decoration:none; transition:all .15s; }
        .sb-area:hover { background:#F0FDF4; border-color:#22C55E; color:#16A34A; }
        .end-cta { background:#09090B; padding:72px 40px; text-align:center; }
        .ec-h { font-family:var(--font-cormorant); font-size:clamp(28px,4vw,48px); font-weight:700; color:#fff; margin-bottom:14px; letter-spacing:-1px; }
        .ec-p { font-family:var(--font-inter); font-size:15px; color:rgba(255,255,255,.5); margin-bottom:28px; max-width:520px; margin-left:auto; margin-right:auto; line-height:1.7; }
        @media(max-width:1024px) { .ep { grid-template-columns:1fr; padding:52px 20px; } .sidebar { position:static; } .emg-grid { grid-template-columns:1fr; } .end-cta { padding:56px 20px; } }
      `}</style>

      {/* Main layout */}
      <div style={{ background: "#fff" }}>
        <div className="ep">

          {/* ═══ MAIN CONTENT ═══ */}
          <main>

            {/* AI CITATION QUICK ANSWER */}
            <div className="answer-box" role="note">
              <span className="ab-label">📍 Quick Answer — Emergency Water Damage Clarksville TN</span>
              <p className="ab-text">
                <strong>Emergency water damage restoration in Clarksville TN</strong> is provided 24/7/365 by Clarksville Water Damage Restoration at <strong>(931) 271-2350</strong>. The company guarantees 60-minute on-site arrival throughout Montgomery County TN. Services include water extraction, structural drying, mold prevention, and complete insurance claim management for USAA, State Farm, Allstate, and all major carriers. IICRC-certified technicians follow the S500 Water Damage Restoration Standard.
              </p>
            </div>

            {/* WHAT IS EMERGENCY WATER DAMAGE RESTORATION */}
            <section aria-labelledby="what-heading">
              <span className="ep-ey">What Is Emergency Water Damage Restoration?</span>
              <h2 className="ep-h2" id="what-heading" style={{ marginTop: 0 }}>
                Emergency Water Damage Restoration in Clarksville TN: Definition & Overview
              </h2>
              <p className="ep-p">
                <strong>Emergency water damage restoration</strong> is the rapid professional process of extracting water, drying structural materials, preventing mold growth, and restoring a property to pre-damage condition after a sudden water intrusion event. In Clarksville TN's humid subtropical climate — with over 50 inches of annual rainfall and ambient humidity regularly exceeding 70% — emergency response speed is critical because mold can begin growing within 24 hours.
              </p>
              <p className="ep-p">
                Emergency water damage restoration is different from routine cleanup. It requires <strong>IICRC-certified technicians</strong>, industrial-grade equipment (truck-mounted extractors, LGR dehumidifiers, air movers, thermal imaging cameras), and documented protocols that satisfy insurance adjuster requirements. When you call <strong>(931) 271-2350</strong>, our IICRC-certified team arrives within 60 minutes — fully equipped to begin immediate mitigation.
              </p>
            </section>

            {/* EMERGENCIES WE HANDLE */}
            <section aria-labelledby="types-heading">
              <h2 className="ep-h2" id="types-heading">Water Damage Emergencies We Handle 24/7 in Clarksville TN</h2>
              <p className="ep-p">We respond to every type of water damage emergency — no matter the source, category, or time of day:</p>
              <div className="emg-grid" role="list" aria-label="Types of water damage emergencies">
                {[
                  "Burst and frozen pipes",
                  "Basement flooding",
                  "Sewage backup (Category 3 black water)",
                  "Washing machine & appliance failures",
                  "Water heater ruptures",
                  "Storm flooding & flash floods",
                  "Roof leak water intrusion",
                  "Toilet overflow",
                  "Foundation water intrusion",
                  "Slab leaks",
                  "HVAC condensate overflows",
                  "Commercial property flooding",
                ].map(e => <div key={e} className="emg-item" role="listitem">{e}</div>)}
              </div>

              <div className="warn-box" role="alert">
                <div className="warn-title">⚠️ Do Not Wait — Every Hour Increases Damage and Cost</div>
                <div className="warn-text">In Clarksville's humid subtropical climate, water begins penetrating structural materials within minutes and mold spores activate within 24 hours. The longer you wait, the greater the damage scope — and the higher the restoration cost. Call (931) 271-2350 immediately.</div>
              </div>
            </section>

            {/* DAMAGE TIMELINE */}
            <section aria-labelledby="timeline-heading">
              <h2 className="ep-h2" id="timeline-heading">The Water Damage Timeline: Why Speed Matters in Clarksville TN</h2>
              <p className="ep-p">
                Understanding what happens to your Clarksville home after water damage explains why our 60-minute response guarantee exists. Every hour matters:
              </p>
              <div className="timeline" role="list" aria-label="Water damage progression timeline">
                {[
                  { time: "0 – 30 min", risk: "Water spreads rapidly across floors and into walls. Drywall absorbs moisture. Furniture begins soaking. Electrical systems may be compromised." },
                  { time: "1 – 12 hrs", risk: "Drywall begins to swell, warp, and lose structural integrity. Hardwood floors begin to cup and buckle. Odors develop. Cost of restoration escalates." },
                  { time: "12 – 24 hrs", risk: "Mold spores activate in Clarksville's humid climate. Metal fixtures begin to corrode. Paint blisters. Biological contaminants increase in grey or black water events." },
                  { time: "24 – 48 hrs", risk: "Visible mold colonies appear on porous surfaces. Structural materials require replacement rather than drying. HVAC ductwork may become contaminated." },
                  { time: "48 hrs +", risk: "Severe structural compromise. Widespread mold infestation requiring full remediation. Biohazard conditions. Costs are 3–5x higher than immediate response." },
                ].map(r => (
                  <div key={r.time} className="tl-row" role="listitem">
                    <div className="tl-time">{r.time}</div>
                    <div className="tl-risk">{r.risk}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="mid-cta">
              <div className="mc-h">Don't Wait — Call Right Now</div>
              <div className="mc-p">Every minute of delay increases damage, cost, and mold risk in Clarksville's humid climate.</div>
              <a href="tel:+19312712350" className="mc-btn" aria-label="Call for emergency water damage restoration">📞 Call (931) 271-2350 — 60-Min Response</a>
            </div>

            {/* OUR PROCESS */}
            <section aria-labelledby="process-heading">
              <h2 className="ep-h2" id="process-heading">Our Emergency Restoration Process — Step by Step</h2>
              <div className="answer-box">
                <span className="ab-label">🤖 AI-Citable Summary</span>
                <p className="ab-text">Clarksville Water Damage Restoration's emergency process: (1) Call answered in under 60 seconds by IICRC-certified professional; (2) Team dispatched, on-site within 60 minutes; (3) Safety assessment, moisture mapping with thermal imaging, insurance claim opened; (4) Industrial water extraction — thousands of gallons per hour via truck-mounted equipment; (5) IICRC S500 structural drying with daily moisture monitoring; (6) EPA-registered antimicrobial treatment; (7) Final verification and restoration.</p>
              </div>
              <div className="steps-list" role="list">
                {[
                  { n: "01", title: "Call — Expert Answers in Under 60 Seconds", body: "When you call (931) 271-2350, a real IICRC-certified professional answers immediately — not a voicemail, not a call center. We gather essential details and dispatch your team while you are still on the phone. No automated menus, no callbacks." },
                  { n: "02", title: "We Arrive Within 60 Minutes — Guaranteed", body: "Our fully equipped truck arrives on-site within 60 minutes anywhere in Clarksville TN and Montgomery County. Equipment on every truck: truck-mounted extractors, thermal imaging cameras, professional moisture meters, LGR dehumidifiers, air movers, HEPA air scrubbers, and Category 3 PPE." },
                  { n: "03", title: "Safety Assessment & Claim Documentation", body: "We assess structural safety before entry. Thermal imaging cameras map all hidden moisture in walls, floors, and ceilings — finding water invisible to the naked eye. We open your insurance claim simultaneously and begin complete Xactimate documentation." },
                  { n: "04", title: "Industrial Water Extraction", body: "Truck-mounted extractors remove standing water at thousands of gallons per hour — far exceeding what any residential or rental equipment can achieve. We extract from all surfaces including carpets, hardwood, concrete, and drywall cavities where possible." },
                  { n: "05", title: "IICRC S500 Structural Drying", body: "Industrial LGR dehumidifiers and high-velocity air movers are placed throughout affected areas following IICRC S500 placement ratios. We monitor moisture readings daily and document the drying curve — providing your insurance carrier with the verifiable data they require." },
                  { n: "06", title: "Antimicrobial Treatment & Mold Prevention", body: "EPA-registered antimicrobial treatments are applied to all affected surfaces from Day 1. In Clarksville's climate, mold prevention cannot wait — we treat simultaneously with drying, not after. If mold is discovered, our IICRC AMRT-certified team proceeds with contained remediation." },
                  { n: "07", title: "Final Verification & Restoration", body: "After structural drying achieves IICRC S500 target moisture levels — verified by documentation, not guesswork — we proceed with repairs: drywall replacement, flooring installation, painting, and any other restoration needed to return your home to pre-damage condition." },
                ].map(s => (
                  <div key={s.n} className="step-row" role="listitem">
                    <div className="step-n" aria-hidden="true">{s.n}</div>
                    <div><div className="step-title">{s.title}</div><p className="step-body">{s.body}</p></div>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY CHOOSE US */}
            <section aria-labelledby="why-heading">
              <h2 className="ep-h2" id="why-heading">Why Clarksville TN Homeowners Choose Us for Emergency Restoration</h2>
              <p className="ep-p">
                There is no shortage of companies claiming to offer water damage restoration in Middle Tennessee. Here is what distinguishes our Clarksville team specifically:
              </p>
              <h3 className="ep-h3">We Are Locally Based — Not a Franchise</h3>
              <p className="ep-p">Our team is stationed in Clarksville TN — not dispatched from Nashville or a national call center. We know Montgomery County's neighborhoods, water infrastructure, building styles, and climate conditions. That local knowledge produces faster, better restoration outcomes.</p>

              <h3 className="ep-h3">IICRC-Certified — Every Technician</h3>
              <p className="ep-p">Every technician holds active IICRC certification — Water Damage Restoration Technician (WRT), Applied Structural Drying (ASD), or Applied Microbial Remediation Technician (AMRT). IICRC certification means your home is restored to documented, verifiable industry standards.</p>

              <h3 className="ep-h3">USAA Preferred Vendor for Fort Campbell</h3>
              <p className="ep-p">
                <Link href="/locations/fort-campbell-tn" style={{ color: "#16A34A", fontWeight: 600 }}>Fort Campbell military families</Link> carrying USAA insurance receive the fastest possible claims processing when working with an experienced USAA preferred vendor. We understand USAA's specific documentation requirements and submit complete Xactimate packages that minimize adjuster review delays.
              </p>

              <h3 className="ep-h3">Same-Rate Service — 24/7/365</h3>
              <p className="ep-p">We do not charge emergency surcharges for nights, weekends, or holidays. Water damage at 3am on Christmas morning receives the same rate and the same quality of service as a weekday afternoon call.</p>
            </section>

            {/* LOCAL SECTION */}
            <section aria-labelledby="local-heading">
              <h2 className="ep-h2" id="local-heading">Emergency Water Damage Restoration Throughout Clarksville and Montgomery County</h2>
              <p className="ep-p">
                Clarksville TN's geography — positioned at the confluence of the Cumberland River and Red River, receiving 50+ inches of annual rainfall, with clay-heavy soils that drain slowly — creates specific water damage risks that vary by neighborhood and proximity to waterways.
              </p>
              <p className="ep-p">We serve every corner of Clarksville and surrounding communities:</p>
              <nav aria-label="Emergency service locations" className="int-links">
                {[
                  ["Fort Campbell TN — USAA preferred vendor, military specialists", "/locations/fort-campbell-tn"],
                  ["Sango TN — fast response, newer subdivision expertise", "/locations/sango-tn"],
                  ["St. Bethlehem TN — established neighborhood specialists", "/locations/st-bethlehem-tn"],
                  ["Oak Grove KY — Kentucky service, 15-min response", "/locations/oak-grove-ky"],
                  ["Hopkinsville KY — full service throughout Christian County", "/locations/hopkinsville-ky"],
                  ["Southside TN — slab foundation and new construction specialists", "/locations/southside-tn"],
                  ["Cunningham TN — Red River flooding specialists", "/locations/cunningham-tn"],
                  ["Ashland City TN — Cumberland River flooding experts", "/locations/ashland-city-tn"],
                ].map(([l, h]) => <Link key={h} href={h} className="int-link">{l as string}</Link>)}
              </nav>
              <Link href="/service-areas" style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 600, color: "#16A34A", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8 }}>
                → View All 32 Service Area Locations
              </Link>
            </section>

            {/* RELATED SERVICES */}
            <section aria-labelledby="related-heading" style={{ marginTop: 44 }}>
              <h2 className="ep-h2" id="related-heading">Related Water Damage Services in Clarksville TN</h2>
              <nav aria-label="Related services" className="int-links">
                {[
                  ["Flood Cleanup & Water Extraction — Clarksville TN", "/flood-cleanup-clarksville-tn"],
                  ["Mold Remediation & Removal — IICRC AMRT Certified", "/mold-remediation-clarksville-tn"],
                  ["Structural Drying & Dehumidification — IICRC S500", "/structural-drying-clarksville-tn"],
                  ["Sewage Backup Cleanup — Category 3 Black Water", "/services/sewage-backup-cleanup-clarksville-tn"],
                  ["Burst Pipe Water Damage Restoration", "/services/burst-pipe-water-damage-clarksville-tn"],
                  ["Basement Flooding Cleanup", "/services/basement-flooding-clarksville-tn"],
                  ["Storm Damage Restoration", "/services/storm-damage-restoration-clarksville-tn"],
                  ["Water Damage Insurance Claims — All Carriers", "/water-damage-insurance-claim-clarksville-tn"],
                  ["Water Damage Odor Removal", "/water-damage-odor-removal-clarksville-tn"],
                  ["Complete FAQ — Common Questions Answered", "/faq"],
                ].map(([l, h]) => <Link key={h} href={h} className="int-link">{l as string}</Link>)}
              </nav>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-heading" style={{ marginTop: 44 }}>
              <span className="ep-ey">Frequently Asked Questions</span>
              <h2 className="ep-h2" id="faq-heading">Emergency Water Damage FAQs — Clarksville TN</h2>
              {[
                { q: "How quickly can you respond to a water damage emergency in Clarksville TN?", a: "We guarantee 60-minute on-site arrival anywhere in Clarksville TN and Montgomery County, 24 hours a day, 7 days a week, 365 days a year. A real IICRC-certified expert answers your call in under 60 seconds — no voicemail, no automated systems." },
                { q: "What should I do first after water damage in my Clarksville home?", a: "First, shut off your water supply at the main shutoff valve if the source is a plumbing failure. Then call (931) 271-2350 immediately. Do not attempt cleanup with household equipment — a shop vac cannot achieve the drying depth or speed required to prevent mold growth in Clarksville's climate. Move valuables to dry areas while waiting for our team." },
                { q: "Does emergency water damage restoration cost more at night or on weekends?", a: "No. We charge the same rates 24 hours a day, 7 days a week, including nights, weekends, and holidays. Water damage emergencies do not wait for business hours, and neither do our rates." },
                { q: "Do you work directly with insurance companies for emergency water damage in Clarksville?", a: "Yes. We work directly with USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, Progressive, and all other major carriers. We open your claim, provide complete Xactimate documentation, communicate with your adjuster, and bill the carrier directly. You pay only your deductible." },
                { q: "Is mold going to grow after water damage in my Clarksville home?", a: "In Clarksville's humid subtropical climate, mold can begin growing within 24-48 hours of any water event — faster than in drier regions. This is why we apply EPA-registered antimicrobial treatments on Day 1 of every job. Immediate professional extraction and drying dramatically reduces mold risk. If you call us immediately, mold growth is typically preventable." },
                { q: "What equipment does your emergency team bring?", a: "Every emergency truck carries: truck-mounted water extractors (thousands of gallons per hour), thermal imaging cameras for hidden moisture, professional moisture meters, industrial LGR dehumidifiers, high-velocity air movers, HEPA air scrubbers, EPA-registered antimicrobials, and full Category 3 PPE for sewage events." },
              ].map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">{faq.q}</summary>
                  <p className="faq-a">{faq.a}</p>
                </details>
              ))}
            </section>

          </main>

          {/* ═══ SIDEBAR ═══ */}
          <aside className="sidebar" aria-label="Emergency contact and related services">
            <div className="sb-cta">
              <div className="sb-ey">24/7 Emergency Line</div>
              <div className="sb-num">(931) 271-2350</div>
              <div className="sb-sub">Real expert answers in 60 seconds</div>
              <a href="tel:+19312712350" className="sb-b1" aria-label="Call emergency line now">📞 Call Now</a>
              <Link href="/contact" className="sb-b2" aria-label="Request free assessment">Free Inspection →</Link>
            </div>

            <div className="sb-box">
              <div className="sb-bh">Our Services</div>
              <div className="sb-list">
                {[
                  ["Flood Cleanup", "/flood-cleanup-clarksville-tn"],
                  ["Mold Remediation", "/mold-remediation-clarksville-tn"],
                  ["Structural Drying", "/structural-drying-clarksville-tn"],
                  ["Sewage Backup Cleanup", "/services/sewage-backup-cleanup-clarksville-tn"],
                  ["Burst Pipe Damage", "/services/burst-pipe-water-damage-clarksville-tn"],
                  ["Basement Flooding", "/services/basement-flooding-clarksville-tn"],
                  ["Storm Damage", "/services/storm-damage-restoration-clarksville-tn"],
                  ["Commercial Restoration", "/services/commercial-water-damage-clarksville-tn"],
                  ["Insurance Claims", "/water-damage-insurance-claim-clarksville-tn"],
                  ["Odor Removal", "/water-damage-odor-removal-clarksville-tn"],
                ].map(([l, h]) => <Link key={h} href={h}>{l as string}</Link>)}
              </div>
            </div>

            <div className="sb-box">
              <div className="sb-bh">Areas We Serve</div>
              <div className="sb-areas">
                {[
                  ["Fort Campbell", "/locations/fort-campbell-tn"],
                  ["Sango", "/locations/sango-tn"],
                  ["St. Bethlehem", "/locations/st-bethlehem-tn"],
                  ["Oak Grove KY", "/locations/oak-grove-ky"],
                  ["Hopkinsville KY", "/locations/hopkinsville-ky"],
                  ["Southside", "/locations/southside-tn"],
                  ["Cunningham", "/locations/cunningham-tn"],
                  ["Woodlawn", "/locations/woodlawn-tn"],
                  ["Ashland City", "/locations/ashland-city-tn"],
                  ["Dover", "/locations/dover-tn"],
                  ["Palmyra", "/locations/palmyra-tn"],
                  ["All Areas →", "/service-areas"],
                ].map(([l, h]) => <Link key={h} href={h} className="sb-area">{l as string}</Link>)}
              </div>
            </div>

            <div className="sb-box">
              <div className="sb-bh">Helpful Resources</div>
              <div className="sb-list">
                {[
                  ["FAQ — Common Questions", "/faq"],
                  ["About Our Team", "/about"],
                  ["Water Damage Blog", "/blog"],
                  ["Signs of Water Damage", "/blog/signs-of-water-damage"],
                  ["Mold After Water Damage", "/blog/mold-after-water-damage"],
                  ["Insurance Coverage Guide", "/blog/insurance-cover-water-damage-tn"],
                  ["Restoration Cost Guide", "/blog/water-damage-restoration-cost-clarksville"],
                ].map(([l, h]) => <Link key={h} href={h}>{l as string}</Link>)}
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* END CTA */}
      <div className="end-cta">
        <h2 className="ec-h">Our Emergency Team Is Standing By — Clarksville TN</h2>
        <p className="ec-p">Call (931) 271-2350 right now. A real expert answers in under 60 seconds. Your 60-minute response clock starts the moment you dial. Serving Clarksville TN, Fort Campbell, and all of Montgomery County 24/7/365.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="tel:+19312712350" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#22C55E", color: "#09090B", padding: "15px 32px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 700 }} aria-label="Call emergency line">📞 (931) 271-2350</a>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "rgba(255,255,255,.7)", padding: "14px 24px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 500, border: "1px solid rgba(255,255,255,.18)" }} aria-label="Request free inspection">Free Inspection →</Link>
        </div>
      </div>
    </>
  );
}
