import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Water Damage FAQ | Clarksville TN | Common Questions Answered",
  description: "Answers to the most common water damage restoration questions for Clarksville TN homeowners. Costs, insurance, mold, process, and more. Call (931) 271-2350.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Water Damage FAQ — Clarksville TN | Expert Answers",
    description: "Answers to the most common water damage restoration questions for Clarksville TN homeowners. Costs, insurance, mold, timeline, and more.",
    url: "https://waterdamageclarksville.com/faq",
  },
};

const SITE_URL = "https://waterdamageclarksville.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly can you respond to water damage emergencies in Clarksville TN?", acceptedAnswer: { "@type": "Answer", text: "We guarantee 60-minute on-site arrival anywhere in Clarksville TN and Montgomery County, 24/7/365. A real expert answers your call in under 60 seconds and our fully equipped team dispatches immediately." } },
    { "@type": "Question", name: "Does homeowners insurance cover water damage in Tennessee?", acceptedAnswer: { "@type": "Answer", text: "Yes — Tennessee homeowners insurance covers sudden, accidental water damage from internal sources including burst pipes, appliance failures, plumbing leaks, and roof leaks from covered storms. It does not cover gradual leaks or external flooding (which requires NFIP flood insurance). We work directly with all major carriers including USAA for Fort Campbell military families." } },
    { "@type": "Question", name: "How much does water damage restoration cost in Clarksville TN?", acceptedAnswer: { "@type": "Answer", text: "Costs range from $1,300–$5,400 for minor events to $15,000–$40,000+ for major structural damage. The average Tennessee insurance claim is approximately $13,200. We provide a free inspection and detailed estimate before any work begins. Most costs are covered by homeowners insurance." } },
    { "@type": "Question", name: "How long does water damage restoration take?", acceptedAnswer: { "@type": "Answer", text: "Most residential water damage restoration takes 3–7 days for the drying phase, followed by 1–4 weeks for structural repairs depending on scope. Minor events may be complete in 1–2 weeks total; major structural events can take 4–8 weeks. We provide daily updates and moisture readings throughout the process." } },
    { "@type": "Question", name: "Will mold grow after water damage in my Clarksville home?", acceptedAnswer: { "@type": "Answer", text: "In Clarksville's humid subtropical climate, mold can begin growing within 24–48 hours of any water event. This is why immediate professional extraction and structural drying is critical. Our team applies EPA-registered antimicrobial treatments on every job from Day 1 to prevent mold growth." } },
    { "@type": "Question", name: "Do you serve Fort Campbell military families?", acceptedAnswer: { "@type": "Answer", text: "Yes. Fort Campbell is within our primary service area. We are experienced USAA preferred vendors and serve military families daily with deployment-aware scheduling. We understand USAA claims processing, PCS move considerations, and on-base housing protocols." } },
    { "@type": "Question", name: "What is Category 3 black water and why is it dangerous?", acceptedAnswer: { "@type": "Answer", text: "Category 3 black water is water from sewage, river flooding, or other grossly contaminated sources. It contains dangerous pathogens including E. coli, Salmonella, and Hepatitis A. Category 3 cleanup requires professional PPE, hospital-grade disinfectants, and disposal of all contaminated porous materials. Never attempt DIY sewage backup cleanup." } },
    { "@type": "Question", name: "What is the IICRC S500 standard for water damage restoration?", acceptedAnswer: { "@type": "Answer", text: "The IICRC S500 is the global technical standard defining water damage categories, drying goals, equipment requirements, and monitoring protocols. When our team follows S500, your home is dried to verified, documented standards — which also satisfies insurance adjuster requirements and protects you from future claims disputes." } },
    { "@type": "Question", name: "Do you handle mold remediation after water damage?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our team holds IICRC AMRT (Applied Microbial Remediation Technician) certification. We provide complete mold remediation including containment barriers, HEPA air scrubbing, contaminated material removal, EPA-registered antimicrobial treatment, and post-remediation verification." } },
    { "@type": "Question", name: "How do I know if I need flood insurance in Clarksville TN?", acceptedAnswer: { "@type": "Answer", text: "Homeowners in FEMA-designated high-risk flood zones (Zone A or AE) with federally backed mortgages are required to carry NFIP flood insurance. Even outside mandatory zones, many Clarksville properties near the Cumberland River, Red River, and their tributaries benefit from flood insurance. Check FEMA's Flood Map Service Center at msc.fema.gov for your specific property." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

const categories = [
  {
    title: "Response & Service",
    faqs: [
      { q: "How quickly can you respond to water damage emergencies in Clarksville TN?", a: "We guarantee 60-minute on-site arrival anywhere in Clarksville TN and Montgomery County, 24 hours a day, 7 days a week, 365 days a year. A real expert answers your call in under 60 seconds — no voicemail, no call center. We dispatch your team immediately while you are still on the phone." },
      { q: "What areas do you serve around Clarksville TN?", a: "We serve a 50-mile radius from our Clarksville base, including all of Montgomery County TN, and portions of Robertson, Cheatham, Stewart, Dickson, and Houston counties in Tennessee, and Christian and Todd counties in Kentucky. Key communities include Fort Campbell, Sango, St. Bethlehem, Oak Grove KY, Hopkinsville KY, Woodlawn, Springfield, Ashland City, Dover, Dickson, Cunningham, Southside, and all surrounding areas." },
      { q: "Do you serve Kentucky as well as Tennessee?", a: "Yes. The Tennessee-Kentucky state line is no barrier to our service. We regularly serve Oak Grove KY, Hopkinsville KY, Pembroke KY, Guthrie KY, and other communities in Christian and Todd counties in Kentucky within our 50-mile service radius." },
      { q: "Are you available on weekends and holidays?", a: "Yes. Water damage emergencies don't respect business hours. Our team is available 24 hours a day, every day of the year — including all weekends, Thanksgiving, Christmas, New Year's Day, and all other holidays. When you call (931) 271-2350, a real professional answers immediately." },
    ],
  },
  {
    title: "Water Damage & Restoration Process",
    faqs: [
      { q: "What happens during the water damage restoration process?", a: "Our process follows four phases: (1) Emergency water extraction using truck-mounted industrial equipment; (2) Moisture mapping with thermal imaging cameras and professional meters to find all hidden water; (3) Structural drying using industrial air movers and LGR dehumidifiers following IICRC S500 standards with daily monitoring; (4) Antimicrobial treatment and final restoration. We document every step for your insurance claim." },
      { q: "What is Category 1, 2, and 3 water damage?", a: "Category 1 (clean water) comes from supply lines, appliances, or rainfall — least hazardous. Category 2 (grey water) comes from appliance discharge, toilet overflow without feces, or similar — contains contaminants requiring sanitization. Category 3 (black water) comes from sewage, river flooding, or grossly contaminated sources — most hazardous, requires full PPE and hospital-grade disinfection. Our team identifies the category on arrival." },
      { q: "How long does water damage restoration take?", a: "Drying typically takes 3–5 days for the structural drying phase. Repairs after drying take 1–4 additional weeks depending on scope. Minor events (small area, Category 1) may complete in 1–2 weeks total. Major structural events with extensive drywall or flooring replacement can take 4–8 weeks. We provide daily updates and moisture readings throughout." },
      { q: "Why can't I just use fans and a shop vac after water damage?", a: "Household fans and shop vacuums cannot remove sufficient moisture from structural materials to prevent mold growth. In Clarksville's humid climate, using residential equipment actually creates ideal mold growth conditions by moving moisture without removing it from the structure. IICRC S500-compliant structural drying requires industrial air movers and LGR dehumidifiers operating at specific ratios to achieve verified safe moisture levels." },
      { q: "What is IICRC certification and why does it matter?", a: "The IICRC (Institute of Inspection Cleaning and Restoration Certification) is the global certifying body for the restoration industry. IICRC certification verifies that technicians have been trained to industry standards and follow the S500 Water Damage Restoration Standard. Hiring an IICRC-certified company means your home is restored to documented, verifiable standards — which protects you with your insurance carrier and in any future property disclosures." },
    ],
  },
  {
    title: "Mold Questions",
    faqs: [
      { q: "How quickly does mold grow after water damage in Clarksville TN?", a: "In Clarksville's humid subtropical climate with annual humidity regularly exceeding 70%, mold spores can activate and begin colonizing within 24–48 hours of any water event. This is significantly faster than the 48–72 hour window often cited for drier regions. This is why immediate professional extraction and drying is critical — every hour of delay increases mold risk." },
      { q: "What does mold smell like after water damage?", a: "Mold produces volatile organic compounds (VOCs) with a distinctive musty, earthy, or damp basement odor. This smell often appears before visible mold growth — making it one of the earliest warning signs. If you notice a musty odor in your Clarksville home after any water event, call us for a professional moisture assessment." },
      { q: "Is black mold dangerous in Clarksville homes?", a: "Black mold (Stachybotrys chartarum) produces mycotoxins associated with respiratory symptoms, headaches, fatigue, and in severe cases, neurological effects. Children, elderly, and immunocompromised individuals are at highest risk. However, any mold growth in a home indicates a moisture problem requiring professional attention — not just black mold. Do not attempt DIY black mold removal; our IICRC-certified team handles all mold species safely." },
      { q: "Do I need mold testing before remediation?", a: "Not necessarily. Visible mold requires remediation regardless of species — testing doesn't change that. Testing is most valuable when: you smell mold but can't find it visually (to confirm presence for insurance); before purchasing a home; for post-remediation clearance verification; or when health symptoms may be mold-related. If you can see mold, skip testing and call (931) 271-2350 for immediate remediation." },
    ],
  },
  {
    title: "Insurance & Costs",
    faqs: [
      { q: "Does homeowners insurance cover water damage in Tennessee?", a: "Yes — standard Tennessee homeowners insurance covers sudden, accidental water damage from internal sources: burst pipes, appliance failures, plumbing leaks, and roof leaks from covered weather events. It does NOT cover: flooding from external sources (requires NFIP flood insurance), gradual leaks, sewer backup without endorsement, or neglect-related damage." },
      { q: "Do you work directly with insurance companies?", a: "Yes. We work directly with USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, Progressive, Travelers, American Family, GEICO, and all other major carriers. We open your claim, provide complete Xactimate documentation, communicate with your adjuster, and bill directly to your carrier. You pay only your deductible." },
      { q: "How much does water damage restoration cost in Clarksville TN?", a: "Minor events (small area, Category 1): $1,300–$5,400. Moderate events (multiple rooms): $5,000–$12,000. Severe events (full structural damage): $15,000–$40,000+. The average Tennessee insurance claim is approximately $13,200. We provide free inspections and detailed estimates. Most costs are covered by homeowners insurance for qualifying events." },
      { q: "What does USAA cover for Fort Campbell military families?", a: "USAA homeowners and renters insurance covers the same sudden, accidental water damage events as standard policies — burst pipes, appliance failures, plumbing leaks, and roof damage from covered storms. USAA is typically excluded from flood coverage (requires NFIP) like all standard carriers. As USAA preferred vendors, we handle all documentation to USAA's specific requirements." },
      { q: "Will my rates go up if I file a water damage insurance claim?", a: "We cannot predict your specific premium changes as they depend on your carrier, claim history, and policy terms. Generally, a single water damage claim for a significant event is unlikely to dramatically affect rates, and the financial protection from a covered loss often outweighs premium concerns. Speak with your insurance agent about your specific policy's claims history impact." },
    ],
  },
  {
    title: "Prevention",
    faqs: [
      { q: "What are the most common causes of water damage in Clarksville TN homes?", a: "In order of frequency: burst or leaking supply lines (washing machine hoses, refrigerator ice maker lines, toilet supply lines); water heater failures; roof leaks; frozen pipe bursts during cold snaps; HVAC condensate line blockages; and foundation or basement water intrusion from Clarksville's significant annual rainfall and clay-heavy soils." },
      { q: "How can I prevent water damage in my Clarksville TN home?", a: "Key prevention steps: replace washing machine rubber hoses every 5 years with braided stainless; inspect water heater annually and replace after 10-12 years; keep gutters clean and downspouts directed away from foundation; test sump pump quarterly; know your main water shutoff location; insulate crawl space pipes before winter cold snaps; install water leak detection sensors near appliances." },
      { q: "What should I do if I leave my Clarksville home vacant?", a: "For vacancies over 2 weeks: consider shutting off the main water supply; set thermostat no lower than 55°F in winter to prevent pipe freezing; arrange for periodic property checks; notify your insurance carrier (most policies require notification for extended vacancies). Military families deploying should have a trusted person check the property monthly at minimum." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="Expert Answers — Clarksville TN"
        title="Water Damage"
        accent="Frequently Asked Questions"
        subtitle="Answers to the most common questions about water damage restoration in Clarksville TN — from costs and insurance to mold, process, and prevention."
        image="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=1800&q=80"
        imageFocus="center 40%"
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <style>{`
        .faq-pg { max-width:960px; margin:0 auto; padding:80px 40px; }
        .faq-intro { background:#F0FDF4; border:1px solid #BBF7D0; border-radius:10px; padding:28px 32px; margin-bottom:56px; }
        .faq-intro-h { font-family:var(--font-cormorant); font-size:22px; font-weight:700; color:#09090B; margin-bottom:10px; letter-spacing:-0.3px; }
        .faq-intro-p { font-family:var(--font-inter); font-size:14px; line-height:1.72; color:#374151; margin-bottom:14px; }
        .faq-intro-cta { display:inline-flex; align-items:center; gap:8px; background:#22C55E; color:#09090B; padding:12px 22px; border-radius:6px; text-decoration:none; font-family:var(--font-inter); font-weight:700; font-size:14px; transition:background .2s; }
        .faq-intro-cta:hover { background:#16A34A; }
        .faq-cat { margin-bottom:52px; }
        .faq-cat-h { font-family:var(--font-cormorant); font-size:clamp(22px,2.8vw,30px); font-weight:700; color:#09090B; margin-bottom:24px; letter-spacing:-0.5px; padding-bottom:16px; border-bottom:2px solid #22C55E; }
        .faq-item { border-bottom:1px solid #E4E4E7; }
        .faq-q { font-family:var(--font-inter); font-size:15px; font-weight:600; color:#09090B; padding:20px 0; cursor:pointer; list-style:none; display:flex; align-items:center; justify-content:space-between; gap:16px; line-height:1.4; }
        .faq-q::-webkit-details-marker { display:none; }
        .faq-q::after { content:"+"; font-size:20px; font-weight:300; color:#9CA3AF; flex-shrink:0; transition:transform .2s; }
        details[open] .faq-q::after { transform:rotate(45deg); }
        .faq-a { font-family:var(--font-inter); font-size:14.5px; line-height:1.78; color:#52525B; padding-bottom:20px; }
        .faq-cta-box { background:#09090B; border-radius:10px; padding:44px; text-align:center; margin-top:56px; }
        .faq-cta-h { font-family:var(--font-cormorant); font-size:clamp(26px,3.5vw,40px); font-weight:700; color:#fff; margin-bottom:12px; letter-spacing:-0.8px; }
        .faq-cta-p { font-family:var(--font-inter); font-size:15px; color:rgba(255,255,255,.5); margin-bottom:28px; }
        .faq-nav { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:40px; }
        .faq-nav-pill { font-family:var(--font-inter); font-size:13px; font-weight:600; background:#F9FAFB; border:1px solid #E4E4E7; padding:8px 18px; border-radius:100px; color:#374151; text-decoration:none; transition:all .18s; }
        .faq-nav-pill:hover { background:#F0FDF4; border-color:#22C55E; color:#16A34A; }
        @media(max-width:1024px) { .faq-pg { padding:52px 20px; } }
      `}</style>

      <div style={{ background: "#fff" }}>
        <main className="faq-pg">
          {/* Emergency CTA box */}
          <div className="faq-intro">
            <div className="faq-intro-h">Have a water damage emergency right now?</div>
            <p className="faq-intro-p">Don't read — call. Our IICRC-certified team responds in 60 minutes, 24 hours a day, 7 days a week, 365 days a year. A real expert answers in under 60 seconds.</p>
            <a href="tel:+19312712350" className="faq-intro-cta" aria-label="Call for emergency water damage restoration">📞 Call (931) 271-2350 Now</a>
          </div>

          {/* Category quick nav */}
          <nav className="faq-nav" aria-label="FAQ categories">
            {categories.map(c => (
              <a key={c.title} href={`#${c.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="faq-nav-pill">{c.title}</a>
            ))}
          </nav>

          {/* FAQ Categories */}
          {categories.map(cat => (
            <section key={cat.title} className="faq-cat" id={cat.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')} aria-labelledby={`cat-${cat.title}`}>
              <h2 className="faq-cat-h" id={`cat-${cat.title}`}>{cat.title}</h2>
              <div role="list">
                {cat.faqs.map((faq, i) => (
                  <details key={i} className="faq-item" role="listitem">
                    <summary className="faq-q">{faq.q}</summary>
                    <p className="faq-a">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}

          {/* Internal Links */}
          <section aria-labelledby="resources-heading" style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid #E4E4E7" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, color: "#09090B", marginBottom: 20, letterSpacing: "-0.4px" }} id="resources-heading">
              Related Resources
            </h2>
            <nav aria-label="Related pages">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
                {[
                  ["Emergency Water Damage Restoration", "/emergency-water-damage-clarksville-tn"],
                  ["Flood Cleanup & Water Extraction", "/flood-cleanup-clarksville-tn"],
                  ["Mold Remediation & Removal", "/mold-remediation-clarksville-tn"],
                  ["Structural Drying & Dehumidification", "/structural-drying-clarksville-tn"],
                  ["Water Damage Insurance Claims", "/water-damage-insurance-claim-clarksville-tn"],
                  ["All Service Areas", "/service-areas"],
                  ["Water Damage Blog & Guides", "/blog"],
                  ["Contact Us", "/contact"],
                ].map(([l, h]) => (
                  <Link key={h} href={h} style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 500, color: "#16A34A", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 6, transition: "all .18s" }} aria-label={l}>
                    → {l}
                  </Link>
                ))}
              </div>
            </nav>
          </section>

          {/* CTA */}
          <div className="faq-cta-box">
            <h2 className="faq-cta-h">Still Have Questions? Call Now.</h2>
            <p className="faq-cta-p">Our team answers in under 60 seconds — any question, any time, 24/7.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a href="tel:+19312712350" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#22C55E", color: "#09090B", padding: "14px 32px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 700 }} aria-label="Call for water damage help">📞 (931) 271-2350</a>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "rgba(255,255,255,.7)", padding: "13px 24px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 500, border: "1px solid rgba(255,255,255,.18)" }} aria-label="Send us a message">Send a Message →</Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
