import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mold Remediation Clarksville TN | Black Mold Removal | (931) 271-2350",
  description: "IICRC AMRT-certified mold remediation in Clarksville TN. Black mold removal, containment, HEPA air scrubbing, air quality testing. All insurance. Call (931) 271-2350.",
  alternates: { canonical: "/mold-remediation-clarksville-tn" },
};

const schema = {"@context":"https://schema.org","@type":"Service","name":"Mold Remediation Clarksville TN","provider":{"@type":"LocalBusiness","name":"Clarksville Water Damage Restoration","telephone":"+19312712350","address":{"@type":"PostalAddress","streetAddress":"215 Legion Street","addressLocality":"Clarksville","addressRegion":"TN","postalCode":"37040"}},"areaServed":{"@type":"City","name":"Clarksville"},"description":"IICRC AMRT-certified mold remediation and black mold removal in Clarksville TN. Containment, HEPA filtration, air quality testing, and documentation.","aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"47"}};

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

export default function MoldRemediationPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <PageHero eyebrow="IICRC AMRT Certified" title="Mold Remediation & Black Mold Removal in Clarksville TN" subtitle="IICRC AMRT-certified mold remediation. Containment, HEPA air scrubbing, air quality testing. All insurance accepted. 60-min response." image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1800&q=80" imageFocus="center 40%" breadcrumbs={[{label:"Services",href:"/service-areas"},{label:"Mold Remediation"}]} stat1="AMRT" stat1Sub="IICRC Certified" stat2="24/7" stat2Sub="Emergency Response"/>
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
      ${SIDEBAR}
      @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}.signs{grid-template-columns:1fr}}
    `}</style>
    <div style={{background:"#fff"}}>
      <div className="sp">
        <main>
          <span className="sp-ey">Expert Mold Remediation</span>
          <h2 className="sp-h2">Professional Mold Removal Clarksville Homeowners Trust</h2>
          <p className="sp-p">Mold begins growing within 24-48 hours of water damage — and it doesn&apos;t stop. Black mold (Stachybotrys) produces mycotoxins that cause respiratory problems, allergic reactions, and serious health issues. Our IICRC AMRT-certified technicians follow strict remediation protocols to safely remove mold, restore air quality, and prevent recurrence.</p>
          <p className="sp-p">We serve Clarksville TN, Fort Campbell, and all of Montgomery County. USAA-preferred contractor for military families. All insurance claims handled directly — you pay only your deductible.</p>

          <div className="warn-box">
            <h3>⚠️ Signs You Have a Mold Problem</h3>
            <div className="signs">
              {[["🔴","Visible black, green, or white spots on walls"],["🔴","Musty or earthy odor — especially in basement"],["🔴","Respiratory issues, coughing, or eye irritation"],["🔴","Water stains or discoloration on ceilings/walls"],["🔴","Peeling paint or wallpaper"],["🔴","Past flooding or water damage left untreated"]].map(([i,l])=>(
                <div key={l} className="sign"><span>{i}</span>{l}</div>
              ))}
            </div>
          </div>

          <span className="sp-ey">Our Mold Remediation Process</span>
          <div className="process">
            {[
              {n:"01",t:"Mold Inspection & Air Testing",d:"We identify all mold-affected areas using thermal imaging, moisture meters, and air quality testing. No hidden mold escapes our inspection."},
              {n:"02",t:"Containment Setup",d:"Negative air pressure containment prevents cross-contamination. Plastic sheeting and zipper doors isolate the remediation zone."},
              {n:"03",t:"HEPA Air Scrubbing",d:"Industrial HEPA air scrubbers capture mold spores as small as 0.3 microns — cleaning the air during the entire remediation process."},
              {n:"04",t:"Safe Mold Removal",d:"Affected materials are safely removed following IICRC S520 standards. PPE-protected technicians eliminate all visible mold growth."},
              {n:"05",t:"Antimicrobial Treatment",d:"EPA-registered antimicrobial solution applied to all surfaces — kills remaining spores and inhibits future mold growth."},
              {n:"06",t:"Post-Remediation Verification",d:"Air quality testing confirms mold levels are within safe limits. Independent lab results available upon request."},
            ].map(s=>(
              <div key={s.n} className="proc-step">
                <div className="proc-n">{s.n}</div>
                <div><div className="proc-t">{s.t}</div><div className="proc-d">{s.d}</div></div>
              </div>
            ))}
          </div>

          <span className="sp-ey">What&apos;s Included in Every Job</span>
          <ul className="list">
            {["Free mold inspection and assessment","Air quality testing before and after","Full containment with negative air pressure","HEPA air scrubbing throughout job","IICRC S520-certified removal protocols","EPA-registered antimicrobial treatment","Complete insurance documentation","Direct billing to insurance company","USAA specialist support","Certificate of remediation at completion"].map(i=><li key={i}>{i}</li>)}
          </ul>

          <div style={{background:"#09090B",borderRadius:12,padding:32,margin:"40px 0",textAlign:"center"}}>
            <div style={{fontFamily:"var(--font-cormorant)",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,color:"#fff",marginBottom:10}}>Mold Problem? Act Fast.</div>
            <p style={{fontFamily:"var(--font-inter)",fontSize:14,color:"rgba(255,255,255,.5)",marginBottom:22,maxWidth:440,margin:"0 auto 22px",lineHeight:1.7}}>Mold spreads fast — every 24 hours it doubles in size. Call now for a free inspection.</p>
            <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350 — Free Inspection</a>
          </div>

          <nav aria-label="Related services">
            <div style={{fontFamily:"var(--font-inter)",fontSize:10,fontWeight:600,letterSpacing:"2.5px",textTransform:"uppercase",color:"#16A34A",marginBottom:12}}>Related Services</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {[["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Flood Cleanup","/flood-cleanup-clarksville-tn"],["Structural Drying","/structural-drying-clarksville-tn"],["Odor Removal","/water-damage-odor-removal-clarksville-tn"],["Insurance Claims","/water-damage-insurance-claim-clarksville-tn"]].map(([l,h])=>(
                <Link key={h} href={h} style={{fontFamily:"var(--font-inter)",fontSize:13,fontWeight:500,color:"#16A34A",textDecoration:"none",background:"#F0FDF4",border:"1px solid #BBF7D0",padding:"6px 14px",borderRadius:100}}>{l}</Link>
              ))}
            </div>
          </nav>
        </main>
        <aside className="sp-sb">
          <div className="sp-sb-cta">
            <div className="sp-sb-ey">Free Mold Inspection</div>
            <div className="sp-sb-n">(931) 271-2350</div>
            <div className="sp-sb-s">IICRC AMRT Certified · 24/7</div>
            <a href="tel:+19312712350" className="sp-sb-b1">📞 Call Now — Free Inspection</a>
            <Link href="/contact" className="sp-sb-b2">Schedule Assessment →</Link>
          </div>
          <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:10,padding:20}}>
            <h3 style={{fontFamily:"var(--font-inter)",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:1,color:"#16A34A",marginBottom:12}}>Certifications</h3>
            {["✅ IICRC AMRT Certified","✅ IICRC S520 Protocol","✅ EPA Registered Products","✅ OSHA Compliant","✅ Insurance Approved","✅ 5★ Rated (47 reviews)"].map(t=>(
              <div key={t} style={{fontFamily:"var(--font-inter)",fontSize:12,color:"#374151",marginBottom:7}}>{t}</div>
            ))}
          </div>
        </aside>
      </div>
    </div>
    <div style={{background:"#09090B",padding:"72px 40px",textAlign:"center"}}>
      <h2 style={{fontFamily:"var(--font-cormorant)",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#fff",marginBottom:14,letterSpacing:-1}}>Mold Remediation in Clarksville TN</h2>
      <p style={{fontFamily:"var(--font-inter)",fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:28,maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>IICRC certified. All insurance accepted. Free inspection and air quality testing.</p>
      <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
        <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
        <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:9,background:"transparent",color:"rgba(255,255,255,.7)",padding:"13px 22px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:15,fontWeight:500,border:"1px solid rgba(255,255,255,.18)"}}>Free Assessment →</Link>
      </div>
    </div>
  </>);
}
