import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const SITE_URL = "https://water-damage-clarksville.com";

export const metadata: Metadata = {
  title: "Water Damage Odor Removal Clarksville TN | (931) 271-2350",
  description: "Professional water damage odor removal in Clarksville TN using hydroxyl generators, ozone treatment, and HEPA air scrubbing. All insurance accepted.",
  alternates: { canonical: "/water-damage-odor-removal-clarksville-tn" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Damage Odor Removal — Clarksville TN",
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: { "@type": "AdministrativeArea", name: "Montgomery County, Tennessee" },
  description: "Professional odor removal after water damage in Clarksville TN, using hydroxyl generators, ozone treatment, thermal fogging, and HEPA air scrubbing.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL },
    { "@type": "ListItem", position: 3, name: "Water Damage Odor Removal", item: `${SITE_URL}/water-damage-odor-removal-clarksville-tn` },
  ],
};

const faqs = [
  {
    q: "How long does water damage odor removal take?",
    a: "Most homes are treated within 24-48 hours, depending on the size of the affected area and how long the moisture was present before treatment began. Severe or long-standing odors from sewage or extended flooding may take longer.",
  },
  {
    q: "What removes musty smell after water damage?",
    a: "Air fresheners and candles only mask a musty smell temporarily. Removing it for good requires treating the source — usually mold or bacteria growing in wet materials — with hydroxyl generators, ozone treatment, or HEPA air scrubbing, combined with drying the space completely.",
  },
  {
    q: "Is ozone treatment safe for my home?",
    a: "Ozone treatment is effective but requires the space to be unoccupied during treatment, since ozone at working concentrations isn't safe to breathe. We ventilate the area fully before anyone returns. Hydroxyl generators are the alternative when the home needs to stay occupied.",
  },
  {
    q: "Will insurance cover odor removal after water damage?",
    a: "Odor removal following a covered water damage event is typically included as part of the restoration claim. We document the odor source and treatment as part of your claim paperwork and bill your carrier directly.",
  },
  {
    q: "Can odor return after treatment?",
    a: "Odor returns when the underlying moisture or mold source wasn't fully addressed. That's why we identify and treat the source — often inside walls, subfloor, or HVAC ductwork — rather than only treating the air in the room.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const toc = [
  ["Our Odor Elimination Methods", "#methods"],
  ["Common Odor Sources", "#sources"],
  ["What's Included", "#included"],
  ["FAQ", "#faq"],
];

export default function OdorRemovalPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <PageHero eyebrow="Professional Odor Elimination" title="Water Damage Odor Removal in Clarksville TN" subtitle="Industrial hydroxyl generators and ozone treatment target musty water damage odors at the source. All insurance accepted." image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80" imageFocus="center 40%" breadcrumbs={[{label:"Services",href:"/"},{label:"Odor Removal"}]} stat1="24-48hr" stat1Sub="Typical Treatment Time" stat2="24/7" stat2Sub="Emergency Response"/>
    <style>{`
      .sp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:52px;align-items:start}
      .sp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block;margin-top:28px}
      .sp-h2{font-family:var(--font-cormorant);font-size:clamp(22px,2.5vw,32px);font-weight:700;color:#09090B;margin-bottom:16px;letter-spacing:-.4px;line-height:1.1}
      .sp-p{font-family:var(--font-inter);font-size:15px;line-height:1.8;color:#52525B;margin-bottom:16px}
      .list{list-style:none;margin:16px 0;display:flex;flex-direction:column;gap:9px}
      .list li{display:flex;align-items:flex-start;gap:10px;font-family:var(--font-inter);font-size:14px;color:#374151;line-height:1.5}
      .list li::before{content:"✓";color:#16A34A;font-weight:700;flex-shrink:0;margin-top:1px}
      .methods{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0}
      .method{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:18px}
      .method-icon{font-size:26px;margin-bottom:10px}
      .method-t{font-family:var(--font-inter);font-size:13px;font-weight:700;color:#09090B;margin-bottom:6px}
      .method-d{font-family:var(--font-inter);font-size:12px;color:#71717A;line-height:1.6}
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
      .map-embed{height:320px;border-radius:8px;overflow:hidden;margin-top:8px}
      @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}.methods{grid-template-columns:1fr}}
    `}</style>
    <div style={{background:"#fff"}}>
      <div className="sp">
        <main>
          <nav className="toc-box" aria-label="Page contents">
            <div className="toc-label">On This Page</div>
            <div className="toc-links">
              {toc.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            </div>
          </nav>

          <span className="sp-ey" style={{marginTop:0}}>Eliminate Musty Odors at the Source</span>
          <h2 className="sp-h2">Professional Water Damage Odor Removal</h2>
          <p className="sp-p">The musty smell after water damage isn&apos;t just unpleasant — it&apos;s a warning sign of mold and bacterial growth in your walls, floors, and HVAC system. Air fresheners mask the odor temporarily; our industrial treatments target it at the source, typically within 24-48 hours. We serve Clarksville TN, Fort Campbell, Sango, and the rest of Montgomery County.</p>
          <p className="sp-p">We use EPA-registered hydroxyl generators, ozone treatment, thermal fogging, and HEPA air scrubbing to restore your home&apos;s air quality. Every job starts by finding where the odor is actually coming from — often behind drywall, under flooring, or inside ductwork — since treating the room air alone won&apos;t stop it from coming back.</p>

          <h2 className="sp-h2" id="methods" style={{fontSize:22, marginTop:40}}>Our Odor Elimination Methods</h2>
          <div className="methods">
            {[
              {i:"⚡",t:"Hydroxyl Generators",d:"Safe for occupied spaces — generates hydroxyl radicals that oxidize and neutralize odor molecules. No evacuation needed."},
              {i:"🌀",t:"Ozone Treatment",d:"High-concentration ozone penetrates walls, carpets, and HVAC to break down mold spores and bacteria causing odors. Requires temporary evacuation of the space."},
              {i:"🌫️",t:"Thermal Fogging",d:"Heated deodorizing solution creates fog that penetrates the same surfaces and materials the odor has soaked into."},
              {i:"🌬️",t:"HEPA Air Scrubbing",d:"Commercial HEPA air scrubbers capture mold spores, bacteria, and odor particles down to 0.3 microns."},
              {i:"💨",t:"Negative Air Pressure",d:"Containment with negative pressure keeps odors from spreading to unaffected areas during treatment."},
              {i:"🧪",t:"Antimicrobial Treatment",d:"EPA-registered antimicrobial applied to affected surfaces addresses the bacteria and mold causing persistent odors."},
            ].map(m=>(
              <div key={m.t} className="method">
                <div className="method-icon">{m.i}</div>
                <div className="method-t">{m.t}</div>
                <div className="method-d">{m.d}</div>
              </div>
            ))}
          </div>

          <h2 className="sp-h2" id="sources" style={{fontSize:22, marginTop:40}}>Common Odor Sources We Treat</h2>
          <ul className="list">
            {["Musty mold and mildew smell from water damage","Sewage backup odors","Flood water contamination smells","Pet odors from wet carpets and padding","Smoke damage combined with water damage","HVAC and duct odors from moisture intrusion"].map(i=><li key={i}>{i}</li>)}
          </ul>

          <h2 className="sp-h2" id="included" style={{fontSize:22, marginTop:40}}>What&apos;s Included</h2>
          <ul className="list">
            {["Source identification — find where the odor originates","Hydroxyl generator treatment (safe for occupied spaces)","Ozone treatment for severe cases","Thermal fogging where needed","HEPA air scrubbing throughout the affected area","Antimicrobial surface treatment","HVAC and duct odor treatment","Complete insurance documentation","Direct billing to your insurance carrier"].map(i=><li key={i}>{i}</li>)}
          </ul>

          <h2 className="sp-h2" id="faq" style={{fontSize:22, marginTop:40}}>Odor Removal FAQ</h2>
          <div>
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">{faq.q}</summary>
                <p className="faq-a">{faq.a}</p>
              </details>
            ))}
          </div>

          <h2 className="sp-h2" style={{fontSize:22, marginTop:40}}>Service Area Map</h2>
          <iframe
            title="Clarksville Water Damage Restoration service area map"
            src="https://www.google.com/maps?q=215+Legion+Street,+Clarksville,+TN+37040&output=embed"
            width="100%"
            className="map-embed"
            style={{border:0,width:"100%"}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <nav aria-label="Related services" style={{marginTop:32}}>
            <div style={{fontFamily:"var(--font-inter)",fontSize:10,fontWeight:600,letterSpacing:"2.5px",textTransform:"uppercase",color:"#16A34A",marginBottom:12}}>Related Services</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {[["Mold Remediation","/mold-remediation-clarksville-tn"],["Flood Cleanup","/flood-cleanup-clarksville-tn"],["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Insurance Claims","/water-damage-insurance-claim-clarksville-tn"]].map(([l,h])=>(
                <Link key={h} href={h} style={{fontFamily:"var(--font-inter)",fontSize:13,fontWeight:500,color:"#16A34A",textDecoration:"none",background:"#F0FDF4",border:"1px solid #BBF7D0",padding:"6px 14px",borderRadius:100}}>{l}</Link>
              ))}
            </div>
          </nav>
        </main>
        <aside className="sp-sb">
          <div className="sp-sb-cta">
            <div className="sp-sb-ey">24/7 Emergency Line</div>
            <div className="sp-sb-n">(931) 271-2350</div>
            <div className="sp-sb-s">Treatment typically starts within 24-48 hours</div>
            <a href="tel:+19312712350" className="sp-sb-b1">📞 Call Now</a>
            <Link href="/contact" className="sp-sb-b2">Free Assessment →</Link>
          </div>
          <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:10,padding:20}}>
            <h3 style={{fontFamily:"var(--font-inter)",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:1,color:"#16A34A",marginBottom:12}}>What We Offer</h3>
            {["✅ Source-focused treatment","✅ All insurance accepted","✅ Safe methods for family & pets","✅ 24/7 emergency response","✅ IICRC-trained team"].map(t=>(
              <div key={t} style={{fontFamily:"var(--font-inter)",fontSize:12,color:"#374151",marginBottom:7}}>{t}</div>
            ))}
          </div>
        </aside>
      </div>
    </div>
    <div style={{background:"#09090B",padding:"72px 40px",textAlign:"center"}}>
      <h2 style={{fontFamily:"var(--font-cormorant)",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#fff",marginBottom:14,letterSpacing:-1}}>Odor Removal in Clarksville TN</h2>
      <p style={{fontFamily:"var(--font-inter)",fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:28,maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>Source-focused treatment, not a cover-up. All insurance accepted.</p>
      <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
        <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
        <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:9,background:"transparent",color:"rgba(255,255,255,.7)",padding:"13px 22px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:15,fontWeight:500,border:"1px solid rgba(255,255,255,.18)"}}>Free Assessment →</Link>
      </div>
    </div>
  </>);
}