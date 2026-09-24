import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Clarksville Water Damage Restoration",
  description: "Meet the IICRC-certified restoration team serving Clarksville TN. Call (931) 271-2350.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Clarksville Water Damage Restoration | Local IICRC Experts",
    description: "IICRC-certified team serving Montgomery County and surrounding areas 24/7. Fast response and full insurance claim support.",
    url: "https://water-damage-clarksville.com/about",
    type: "website",
  },
};

const SITE_URL = "https://water-damage-clarksville.com";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Clarksville Water Damage Restoration",
  url: `${SITE_URL}/about`,
  description: "Clarksville Water Damage Restoration is an IICRC-certified water damage restoration company serving Clarksville TN and Montgomery County.",
  mainEntity: { "@id": `${SITE_URL}/#localbusiness` },
  about: {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about` },
  ],
};

const credentials = [
  { icon: "🏆", title: "IICRC Certified Firm", desc: "Institute of Inspection Cleaning and Restoration Certification — the global standard for restoration professionals." },
  { icon: "📋", title: "Xactimate Certified", desc: "Our estimators are Xactimate certified — the industry-standard estimating software used by all major insurance carriers." },
  { icon: "✅", title: "IICRC S500 Compliant", desc: "All restoration follows IICRC S500 Water Damage Restoration Standard — verifiable, documented, and defensible." },
  { icon: "🔬", title: "IICRC AMRT Certified", desc: "Applied Microbial Remediation Technician certification for safe, effective mold identification and removal." },
  { icon: "📍", title: "Locally Based, Not a Franchise", desc: "Our team is stationed in Clarksville and knows Montgomery County's neighborhoods and infrastructure." },
];
 const stats = [
  { n: "IICRC", label: "Certified Restoration Team" },
  { n: "24/7", label: "Emergency Response — Every Day" },
  { n: "50mi", label: "Service Radius from Clarksville" },
];

const processSteps = [
  { n: "01", title: "You Call — Expert Answers Quickly", body: "When you call (931) 271-2350, a real IICRC-certified professional answers — not a call center or voicemail. We gather the essential details and dispatch your team while you are still on the phone." },
  { n: "02", title: "We Aim to Arrive Within 60 Minutes", body: "Our fully equipped team aims to arrive on-site within 60 minutes anywhere in Clarksville TN and Montgomery County, 24 hours a day. Every truck carries industrial extractors, thermal imaging cameras, and complete drying equipment." },
  { n: "03", title: "Assessment, Documentation & Claim Opening", body: "We perform comprehensive moisture mapping using thermal imaging cameras and professional moisture meters. We open your insurance claim and begin documentation the moment we arrive — no waiting." },
  { n: "04", title: "IICRC S500 Structural Drying", body: "Industrial air movers and LGR dehumidifiers run continuously. We monitor moisture levels daily until every structural component reaches verified, documented safe levels per IICRC S500 standards." },
  { n: "05", title: "Complete Restoration — Verified Safe", body: "After drying is certified, we complete all necessary repairs and perform final moisture verification. Your home is returned to pre-damage condition — documented and confirmed, not just assumed." },
];

// Full services grid. Fixes a real gap found in the existing page:
// the old service link list was missing Burst Pipe Water Damage entirely.
// This is now the complete, accurate 11-service list.
const allServicesFull = [
  { icon: "🚨", title: "Emergency Water Damage Restoration", desc: "24/7 rapid response — IICRC-certified team aims to be on-site within 60 minutes for any water emergency.", href: "/emergency-water-damage-clarksville-tn" },
  { icon: "💧", title: "Flood Cleanup & Water Extraction", desc: "Industrial truck-mounted extraction removes standing water fast, stopping secondary damage before it starts.", href: "/flood-cleanup-clarksville-tn" },
  { icon: "🔵", title: "Structural Drying & Dehumidification", desc: "IICRC S500-compliant drying with daily moisture monitoring until every wall and subfloor is certified dry.", href: "/structural-drying-clarksville-tn" },
  { icon: "🦠", title: "Mold Remediation & Removal", desc: "IICRC AMRT-certified containment, HEPA air scrubbing, and safe removal to protect your family's health.", href: "/mold-remediation-clarksville-tn" },
  { icon: "⚠️", title: "Sewage Backup Cleanup", desc: "Category 3 black water remediation with full PPE, sanitization, and complete decontamination.", href: "/services/sewage-backup-cleanup-clarksville-tn" },
  { icon: "🚿", title: "Burst Pipe Water Damage", desc: "Rapid response to burst and frozen pipe emergencies — water stopped and extraction started immediately.", href: "/services/burst-pipe-water-damage-clarksville-tn" },
  { icon: "🏠", title: "Basement Flooding Cleanup", desc: "Extraction, drying, and mold prevention for flooded basements and crawlspaces throughout Montgomery County.", href: "/services/basement-flooding-clarksville-tn" },
  { icon: "🌩️", title: "Storm Damage Restoration", desc: "Restoration for storm, wind, and roof-leak water intrusion — stabilized before mold sets in.", href: "/services/storm-damage-restoration-clarksville-tn" },
  { icon: "🏢", title: "Commercial Water Damage", desc: "Fast-turnaround restoration for offices, retail, and industrial properties — minimizing business downtime.", href: "/services/commercial-water-damage-clarksville-tn" },
  { icon: "💨", title: "Water Damage Odor Removal", desc: "Complete odor elimination following any water damage event — not just masking, actual removal.", href: "/water-damage-odor-removal-clarksville-tn" },
  { icon: "📋", title: "Insurance Claim Management", desc: "Complete documentation, adjuster coordination, and direct billing for USAA and all major carriers.", href: "/water-damage-insurance-claim-clarksville-tn" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="Locally Based & IICRC-Certified"
        title="Clarksville's Local"
        accent="Water Damage Restoration Team"
        subtitle="IICRC-certified technicians serving Clarksville TN and Montgomery County. Fast, 24/7/365 emergency response and complete insurance claim support."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80"
        imageFocus="center 40%"
        breadcrumbs={[{ label: "About Us" }]}
        stat1="IICRC" stat1Sub="Certified Team"
        stat2="24/7" stat2Sub="Emergency Response"
        
      />

      <style>{`
        html,body{max-width:100vw;overflow-x:hidden}
        p,span,a,div,h1,h2,h3{overflow-wrap:break-word;word-break:break-word}
        img,iframe,svg{max-width:100%}
        .ab { max-width:1240px; margin:0 auto; padding:80px 40px; }
        .ab-ey { font-family:var(--font-inter); font-size:10px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:#16A34A; margin-bottom:10px; display:block; }
        .ab-h2 { font-family:var(--font-cormorant); font-size:clamp(26px,3.2vw,40px); font-weight:700; color:#09090B; margin-bottom:16px; letter-spacing:-0.8px; line-height:1.05; }
        .ab-h3 { font-family:var(--font-inter); font-size:17px; font-weight:600; color:#09090B; margin-bottom:8px; }
        .ab-p { font-family:var(--font-inter); font-size:15px; line-height:1.8; color:#374151; margin-bottom:14px; }
        .ab-p strong { color:#09090B; font-weight:600; }
        .divider { height:1px; background:#E4E4E7; margin:64px 0; }
        .answer-box { background:#F0FDF4; border:1px solid #BBF7D0; border-left:4px solid #22C55E; border-radius:8px; padding:22px 26px; margin-bottom:32px; }
        .answer-box-label { font-family:var(--font-inter); font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:#16A34A; margin-bottom:8px; display:block; }
        .answer-box-text { font-family:var(--font-inter); font-size:15px; line-height:1.7; color:#1a2e1a; }
        .two-col { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; margin-bottom:64px; }
        .two-col-rev { direction:rtl; }
        .two-col-rev > * { direction:ltr; }
        .about-img { width:100%; height:420px; object-fit:cover; border-radius:10px; display:block; }
        .stats-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin:36px 0; }
        .stat-card { background:#09090B; border-radius:8px; padding:24px 20px; text-align:center; }
        .stat-n { font-family:var(--font-cormorant); font-size:clamp(28px,3.5vw,40px); font-weight:700; color:#4ADE80; line-height:1; }
        .stat-l { font-family:var(--font-inter); font-size:12px; color:rgba(255,255,255,.5); margin-top:6px; }
        .creds-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:24px; }
        .cred-card { background:#FAFAFA; border:1px solid #E4E4E7; border-radius:8px; padding:22px; transition:border-color .2s; }
        .cred-card:hover { border-color:#22C55E; }
        .cred-icon { font-size:26px; margin-bottom:12px; }
        .cred-title { font-family:var(--font-inter); font-size:14px; font-weight:700; color:#09090B; margin-bottom:6px; }
        .cred-desc { font-family:var(--font-inter); font-size:13px; line-height:1.65; color:#52525B; }
        .process-steps { display:flex; flex-direction:column; gap:0; }
        .proc-step { display:flex; gap:24px; padding:24px 0; border-bottom:1px solid #E4E4E7; }
        .proc-step:last-child { border-bottom:none; }
        .proc-num { font-family:var(--font-cormorant); font-size:32px; font-weight:700; color:#22C55E; flex-shrink:0; min-width:52px; line-height:1; padding-top:4px; }
        .proc-title { font-family:var(--font-inter); font-size:15px; font-weight:600; color:#09090B; margin-bottom:6px; }
        .proc-body { font-family:var(--font-inter); font-size:14px; line-height:1.72; color:#52525B; }
        .nap-block { background:#09090B; border-radius:12px; padding:44px; display:grid; grid-template-columns:1fr 1fr; gap:48px; }
        .nap-h { font-family:var(--font-cormorant); font-size:26px; font-weight:700; color:#fff; margin-bottom:20px; letter-spacing:-0.5px; }
        .nap-line { font-family:var(--font-inter); font-size:14px; color:rgba(255,255,255,.55); margin-bottom:12px; display:flex; align-items:flex-start; gap:10px; }
        .nap-line a { color:#4ADE80; font-weight:600; text-decoration:none; }
        .nap-line a:hover { color:#22C55E; }
        .nap-links { display:flex; flex-direction:column; gap:10px; }
        .nap-link { font-family:var(--font-inter); font-size:14px; font-weight:500; color:rgba(255,255,255,.55); text-decoration:none; display:flex; align-items:center; gap:7px; transition:color .15s; }
        .nap-link::before { content:'→'; font-size:11px; color:#22C55E; flex-shrink:0; }
        .nap-link:hover { color:#fff; }
        .values-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:24px; }
        .val-card { background:#fff; border:1px solid #E4E4E7; border-radius:8px; padding:22px; }
        .val-icon { font-size:22px; margin-bottom:10px; }
        .val-title { font-family:var(--font-inter); font-size:14px; font-weight:700; color:#09090B; margin-bottom:6px; }
        .val-desc { font-family:var(--font-inter); font-size:13.5px; line-height:1.68; color:#52525B; }
        .svc-full-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:24px; }
        .svc-full-card { background:#fff; border:1px solid #E4E4E7; border-radius:10px; padding:22px; text-decoration:none; display:block; transition:all .2s; }
        .svc-full-card:hover { border-color:#22C55E; box-shadow:0 8px 24px rgba(34,197,94,.08); }
        .svc-full-icon { font-size:24px; margin-bottom:10px; }
        .svc-full-title { font-family:var(--font-inter); font-size:14.5px; font-weight:700; color:#09090B; margin-bottom:6px; }
        .svc-full-desc { font-family:var(--font-inter); font-size:13px; line-height:1.6; color:#52525B; margin-bottom:10px; }
        .svc-full-link { font-family:var(--font-inter); font-size:12.5px; font-weight:600; color:#16A34A; }
        @media(max-width:1024px) {
          .ab { padding:52px 20px; }
          .two-col { grid-template-columns:1fr; gap:32px; }
          .about-img { height:280px; }
          .stats-grid { grid-template-columns:repeat(2,1fr); }
          .creds-grid { grid-template-columns:1fr 1fr; }
          .nap-block { grid-template-columns:1fr; gap:32px; padding:28px; }
          .values-grid { grid-template-columns:1fr; }
          .svc-full-grid { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:640px) {
          .stats-grid { grid-template-columns:1fr 1fr; }
          .creds-grid { grid-template-columns:1fr; }
          .two-col-rev { direction:ltr; }
          .svc-full-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <div style={{ background: "#fff" }}>
        <div className="ab">

          <div className="answer-box" role="note" aria-label="Quick answer about Clarksville Water Damage Restoration">
            <span className="answer-box-label">📍 Quick Answer — Who We Are</span>
            <p className="answer-box-text">
              <strong>Clarksville Water Damage Restoration</strong> is an IICRC-certified water damage restoration company based in <strong>Clarksville, Tennessee</strong>. We serve Montgomery County TN and a 50-mile radius including Fort Campbell, Sango, Oak Grove KY, and Hopkinsville KY. We provide 24/7 emergency water damage restoration, flood cleanup, mold remediation, structural drying, and insurance claim management, including experience with USAA claims for military families. Phone: <strong>(931) 271-2350</strong>.
            </p>
          </div>

          <section className="two-col" aria-labelledby="who-heading">
            <div>
              <span className="ab-ey">Locally Based — Clarksville, Tennessee</span>
              <h2 className="ab-h2" id="who-heading">Who We Are: Clarksville's Water Damage Restoration Team</h2>
              <p className="ab-p">
                <strong>Clarksville Water Damage Restoration</strong> is headquartered in <strong>215 Legion Street, Clarksville, TN 37040</strong>. We are not a national franchise — we are your neighbors, and we serve Montgomery County homeowners, Fort Campbell military families, and businesses.
              </p>
              <p className="ab-p">
                When water damage strikes — whether from a <Link href="/services/burst-pipe-water-damage-clarksville-tn" style={{ color: "#16A34A", fontWeight: 600 }}>burst pipe</Link>, <Link href="/flood-cleanup-clarksville-tn" style={{ color: "#16A34A", fontWeight: 600 }}>basement flood</Link>, <Link href="/services/sewage-backup-cleanup-clarksville-tn" style={{ color: "#16A34A", fontWeight: 600 }}>sewage backup</Link>, or <Link href="/services/storm-damage-restoration-clarksville-tn" style={{ color: "#16A34A", fontWeight: 600 }}>storm damage</Link> — our IICRC-certified team aims to be on-site within <strong>60 minutes</strong>, 24 hours a day, 7 days a week.
              </p>
              <p className="ab-p">
                We handle the entire restoration process — from emergency water extraction and <Link href="/structural-drying-clarksville-tn" style={{ color: "#16A34A", fontWeight: 600 }}>structural drying</Link> to <Link href="/mold-remediation-clarksville-tn" style={{ color: "#16A34A", fontWeight: 600 }}>mold remediation</Link> and <Link href="/water-damage-insurance-claim-clarksville-tn" style={{ color: "#16A34A", fontWeight: 600 }}>complete insurance claim management</Link>. You pay only your deductible.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="Clarksville Water Damage Restoration team members preparing equipment for water damage emergency response"
              className="about-img"
              loading="lazy" decoding="async" width={800} height={420}
            />
          </section>

          <section aria-labelledby="stats-heading">
            <span className="ab-ey">By the Numbers</span>
            <h2 className="ab-h2" id="stats-heading">Proven Results in Clarksville TN</h2>
            <div className="stats-grid" role="list" aria-label="Company statistics">
              {stats.map(s => (
                <div key={s.n} className="stat-card" role="listitem">
                  <div className="stat-n">{s.n}</div>
                  <div className="stat-l">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          <section aria-labelledby="services-heading">
            <span className="ab-ey">Our Services</span>
            <h2 className="ab-h2" id="services-heading">What We Do: Full-Service Water Damage Restoration in Clarksville TN</h2>

            <div className="answer-box">
              <span className="answer-box-label">📋 Service Summary</span>
              <p className="answer-box-text">
                Clarksville Water Damage Restoration provides: (1) <strong>Emergency Water Extraction</strong> — industrial truck-mounted pumps remove thousands of gallons within minutes; (2) <strong>Structural Drying</strong> — IICRC S500-compliant drying with daily moisture monitoring; (3) <strong>Mold Remediation</strong> — IICRC AMRT-certified containment and removal; (4) <strong>Sewage Backup Cleanup</strong> — Category 3 black water remediation with full PPE; (5) <strong>Insurance Claim Management</strong> — USAA, State Farm, Allstate, and all major carriers. Service area: Clarksville TN and 50-mile radius.
              </p>
            </div>

            <div className="two-col" style={{ marginBottom: 0 }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                alt="IICRC-certified technician performing moisture assessment with thermal imaging camera in Clarksville TN home"
                className="about-img"
                loading="lazy" decoding="async" width={800} height={420}
              />
              <div>
                <h3 className="ab-h3">Our Core Restoration Services</h3>
                <p className="ab-p">Every service we provide follows IICRC industry standards with full documentation for your insurance carrier:</p>
                <nav aria-label="Service links">
                  {[
                    ["🚨 Emergency Water Damage Restoration", "/emergency-water-damage-clarksville-tn"],
                    ["💧 Flood Cleanup & Water Extraction", "/flood-cleanup-clarksville-tn"],
                    ["🔵 Structural Drying & Dehumidification", "/structural-drying-clarksville-tn"],
                    ["🦠 Mold Remediation & Removal", "/mold-remediation-clarksville-tn"],
                    ["⚠️ Sewage Backup Cleanup", "/services/sewage-backup-cleanup-clarksville-tn"],
                    ["🏠 Basement Flooding Cleanup", "/services/basement-flooding-clarksville-tn"],
                    ["🌩️ Storm Damage Restoration", "/services/storm-damage-restoration-clarksville-tn"],
                    ["🏢 Commercial Water Damage", "/services/commercial-water-damage-clarksville-tn"],
                    ["💨 Odor Removal", "/water-damage-odor-removal-clarksville-tn"],
                    ["📋 Insurance Claim Management", "/water-damage-insurance-claim-clarksville-tn"],
                  ].map(([l, h]) => (
                    <div key={h} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 0", borderBottom: "1px solid #F3F4F6" }}>
                      <Link href={h} style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 500, color: "#16A34A", textDecoration: "none" }}>{l as string}</Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </section>

          <hr className="divider" />

          <section aria-labelledby="all-services-heading">
            <span className="ab-ey">Complete Service List</span>
            <h2 className="ab-h2" id="all-services-heading">All Water Damage Services We Provide in Clarksville TN</h2>
            <p className="ab-p">
              From the first emergency call to the final insurance sign-off, this is the complete list of restoration services we provide throughout Clarksville and Montgomery County — every one IICRC-standard and fully documented.
            </p>
            <div className="svc-full-grid" role="list" aria-label="All services provided">
              {allServicesFull.map((s) => (
                <Link key={s.href} href={s.href} className="svc-full-card" role="listitem">
                  <div className="svc-full-icon" aria-hidden="true">{s.icon}</div>
                  <div className="svc-full-title">{s.title}</div>
                  <p className="svc-full-desc">{s.desc}</p>
                  <span className="svc-full-link">Learn more →</span>
                </Link>
              ))}
            </div>
          </section>

          <hr className="divider" />

          <section aria-labelledby="creds-heading">
            <span className="ab-ey">Certifications & Credentials — E-E-A-T</span>
            <h2 className="ab-h2" id="creds-heading">Why Clarksville Homeowners Trust Our IICRC-Certified Team</h2>
            <p className="ab-p">
              <strong>IICRC certification</strong> (Institute of Inspection Cleaning and Restoration Certification) is the global standard that verifies a restoration company's training, equipment, and adherence to industry protocols. Our team holds multiple IICRC certifications — and we follow the <strong>IICRC S500 Water Damage Restoration Standard</strong> on every single job. This is not optional for us. It protects you, your insurance claim, and your home.
            </p>
            <div className="creds-grid" role="list" aria-label="Certifications and credentials">
              {credentials.map(c => (
                <div key={c.title} className="cred-card" role="listitem">
                  <div className="cred-icon" aria-hidden="true">{c.icon}</div>
                  <h3 className="cred-title">{c.title}</h3>
                  <p className="cred-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          <section aria-labelledby="process-heading">
            <span className="ab-ey">How We Work — Step by Step</span>
            <h2 className="ab-h2" id="process-heading">Our 5-Step Water Damage Restoration Process in Clarksville TN</h2>
            <div className="answer-box">
              <span className="answer-box-label">🤖 AI Summary — Our Restoration Process</span>
              <p className="answer-box-text">
                Clarksville Water Damage Restoration follows a 5-step IICRC-compliant process: (1) You call (931) 271-2350 and speak to a certified expert. (2) Our team aims to arrive within 60 minutes. (3) We perform moisture assessment with thermal imaging and open your insurance claim. (4) IICRC S500 structural drying with daily monitoring. (5) Complete restoration to verified pre-damage condition.
              </p>
            </div>
            <div className="process-steps" role="list">
              {processSteps.map(s => (
                <div key={s.n} className="proc-step" role="listitem">
                  <div className="proc-num" aria-hidden="true">{s.n}</div>
                  <div>
                    <div className="proc-title">{s.title}</div>
                    <p className="proc-body">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="divider" />

          <section aria-labelledby="values-heading">
            <div className="two-col">
              <div>
                <span className="ab-ey">Our Values</span>
                <h2 className="ab-h2" id="values-heading">What Drives Us Every Day</h2>
                <p className="ab-p">
                  Water damage happens at the worst possible moments — 2am on a Sunday, the day before the holidays, during a military deployment. Our values guide how we respond every single time, regardless of when or where.
                </p>
                <div className="values-grid" role="list">
                  {[
                    { icon: "⚡", title: "Speed Without Compromise", desc: "We aim for 60 minutes or less on every call. We do not sacrifice thoroughness for speed, or speed for thoroughness." },
                    { icon: "🏠", title: "Local First", desc: "We are Clarksville homeowners too. We know Montgomery County's neighborhoods, infrastructure, and climate — and we care about our community." },
                    { icon: "💯", title: "Documented Results", desc: "Every moisture reading, every photo, every step documented. You can verify our work — and so can your insurance carrier." },
                    { icon: "🎖️", title: "Military Family Respect", desc: "Fort Campbell families sacrifice everything for our country. We honor that with USAA claims experience, deployment-aware scheduling, and the highest level of service." },
                  ].map(v => (
                    <div key={v.title} className="val-card" role="listitem">
                      <div className="val-icon" aria-hidden="true">{v.icon}</div>
                      <div className="val-title">{v.title}</div>
                      <p className="val-desc">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Clarksville Water Damage Restoration team working together on a residential restoration project in Montgomery County TN"
                className="about-img"
                loading="lazy" decoding="async" width={800} height={420}
              />
            </div>
          </section>

          <hr className="divider" />

          <section aria-labelledby="area-heading">
            <span className="ab-ey">Service Area — 50-Mile Radius</span>
            <h2 className="ab-h2" id="area-heading">Where We Serve: Clarksville TN and Surrounding Communities</h2>
            <p className="ab-p">
              Our Clarksville TN base allows us to aim for a <strong>fast emergency response</strong> throughout Montgomery County and surrounding communities in Middle Tennessee and Southern Kentucky. We serve communities within a 50-mile radius.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, margin: "24px 0" }}>
              {[
                ["Fort Campbell, TN", "/locations/fort-campbell-tn"],
                ["Sango, TN", "/locations/sango-tn"],
                ["St. Bethlehem, TN", "/locations/st-bethlehem-tn"],
                ["Oak Grove, KY", "/locations/oak-grove-ky"],
                ["Hopkinsville, KY", "/locations/hopkinsville-ky"],
                ["Woodlawn, TN", "/locations/woodlawn-tn"],
                ["Cunningham, TN", "/locations/cunningham-tn"],
                ["Southside, TN", "/locations/southside-tn"],
                ["Springfield, TN", "/locations/springfield-tn"],
                ["Ashland City, TN", "/locations/ashland-city-tn"],
                ["Dover, TN", "/locations/dover-tn"],
                ["Palmyra, TN", "/locations/palmyra-tn"],
              ].map(([l, h]) => (
                <Link key={h} href={h} style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 500, color: "#16A34A", textDecoration: "none", background: "#F0FDF4", border: "1px solid #BBF7D0", padding: "8px 12px", borderRadius: 6, display: "flex", alignItems: "center", gap: 5 }}>
                  📍 {l as string}
                </Link>
              ))}
            </div>
            <Link href="/service-areas" style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 600, color: "#16A34A", textDecoration: "none" }}>View All Service Area Locations →</Link>
          </section>

          <hr className="divider" />

          <div className="nap-block">
            <div>
              <h2 className="nap-h">Contact Information</h2>
              <div className="nap-line">
                <span>📍</span>
                <span>
                  215 Legion Street, Clarksville, TN 37040
                </span>
              </div>
              <div className="nap-line">
                <span>📞</span>
                <a href="tel:+19312712350">(931) 271-2350</a>
              </div>
              <div className="nap-line">
                <span>✉️</span>
                <a href="mailto:waterdamageclarksville@gmail.com">waterdamageclarksville@gmail.com</a>
              </div>
              <div className="nap-line">
                <span>🕐</span>
                <span>Open 24 Hours / 7 Days a Week / 365 Days a Year</span>
              </div>
              <div className="nap-line">
                <span>🌐</span>
                <a href="https://water-damage-clarksville.com">waterdamageclarksville.com</a>
              </div>
              <div style={{ marginTop: 24 }}>
                <a href="tel:+19312712350" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#22C55E", color: "#09090B", padding: "13px 24px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: 15 }} aria-label="Call Clarksville Water Damage Restoration">📞 Call Now — 24/7</a>
              </div>
            </div>
            <div>
              <h2 className="nap-h">Quick Links</h2>
              <nav className="nap-links" aria-label="About page navigation">
                {[
                  ["Emergency Water Damage Restoration", "/emergency-water-damage-clarksville-tn"],
                  ["Flood Cleanup & Extraction", "/flood-cleanup-clarksville-tn"],
                  ["Mold Remediation & Removal", "/mold-remediation-clarksville-tn"],
                  ["Structural Drying", "/structural-drying-clarksville-tn"],
                  ["Insurance Claim Management", "/water-damage-insurance-claim-clarksville-tn"],
                  ["FAQ — Common Questions", "/faq"],
                  ["All Service Areas", "/service-areas"],
                  ["Contact Us", "/contact"],
                  ["Water Damage Blog & Guides", "/blog"],
                ].map(([l, h]) => <Link key={h} href={h} className="nap-link">{l as string}</Link>)}
              </nav>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}