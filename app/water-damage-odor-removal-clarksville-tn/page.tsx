import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Water Damage Odor Removal Clarksville TN | Odor Elimination | (931) 271-2350",
  description: "Professional water damage odor removal in Clarksville TN. Hydroxyl generators, ozone treatment, HEPA air scrubbing. Musty smell eliminated completely. All insurance. Call (931) 271-2350.",
  alternates: { canonical: "/water-damage-odor-removal-clarksville-tn" },
};

export default function OdorRemovalPage() {
  return (<>
    <PageHero eyebrow="Professional Odor Elimination" title="Water Damage Odor Removal in Clarksville TN" subtitle="Industrial hydroxyl generators and ozone treatment permanently eliminate musty water damage odors. All insurance. 60-min response." image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80" imageFocus="center 40%" breadcrumbs={[{label:"Services",href:"/service-areas"},{label:"Odor Removal"}]} stat1="100%" stat1Sub="Odor Elimination" stat2="24/7" stat2Sub="Emergency Response"/>
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
      @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}.methods{grid-template-columns:1fr}}
    `}</style>
    <div style={{background:"#fff"}}>
      <div className="sp">
        <main>
          <span className="sp-ey">Eliminate Musty Odors Permanently</span>
          <h2 className="sp-h2">Professional Water Damage Odor Removal</h2>
          <p className="sp-p">The musty smell after water damage isn&apos;t just unpleasant — it&apos;s a warning sign of mold and bacterial growth in your walls, floors, and HVAC system. Air fresheners mask the odor temporarily; our industrial treatments eliminate it at the molecular level, permanently. We address the source, not the symptom.</p>
          <p className="sp-p">We use EPA-registered hydroxyl generators, ozone treatment, thermal fogging, and HEPA air scrubbing to restore your home to fresh, clean air. No temporary cover-ups — complete odor elimination guaranteed.</p>

          <span className="sp-ey">Our Odor Elimination Methods</span>
          <div className="methods">
            {[
              {i:"⚡",t:"Hydroxyl Generators",d:"Safe for occupied spaces — generates hydroxyl radicals that oxidize and neutralize odor molecules permanently. No evacuation needed."},
              {i:"🌀",t:"Ozone Treatment",d:"High-concentration ozone penetrates walls, carpets, and HVAC to eliminate mold spores and bacteria causing odors. Requires temporary evacuation."},
              {i:"🌫️",t:"Thermal Fogging",d:"Heated deodorizing solution creates fog that penetrates all surfaces — same molecular pathway as the odor itself."},
              {i:"🌬️",t:"HEPA Air Scrubbing",d:"Commercial HEPA air scrubbers capture mold spores, bacteria, and odor particles down to 0.3 microns."},
              {i:"💨",t:"Negative Air Pressure",d:"Containment with negative pressure prevents odors from spreading to unaffected areas during treatment."},
              {i:"🧪",t:"Antimicrobial Treatment",d:"EPA-registered antimicrobial applied to all surfaces kills the bacteria and mold causing persistent odors."},
            ].map(m=>(
              <div key={m.t} className="method">
                <div className="method-icon">{m.i}</div>
                <div className="method-t">{m.t}</div>
                <div className="method-d">{m.d}</div>
              </div>
            ))}
          </div>

          <span className="sp-ey">Common Odor Sources We Eliminate</span>
          <ul className="list">
            {["Musty mold and mildew smell from water damage","Sewage backup odors","Flood water contamination smells","Pet odors from wet carpets and padding","Smoke damage combined with water damage","HVAC and duct odors from moisture intrusion"].map(i=><li key={i}>{i}</li>)}
          </ul>

          <span className="sp-ey">What&apos;s Included</span>
          <ul className="list">
            {["Source identification — find where odor originates","Hydroxyl generator treatment (safe for occupied spaces)","Ozone treatment for severe cases","Thermal fogging where needed","HEPA air scrubbing throughout","Antimicrobial surface treatment","HVAC and duct odor treatment","Complete insurance documentation","All insurance direct billing"].map(i=><li key={i}>{i}</li>)}
          </ul>

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
            <div className="sp-sb-s">Odor eliminated guaranteed · 24/7</div>
            <a href="tel:+19312712350" className="sp-sb-b1">📞 Call Now</a>
            <Link href="/contact" className="sp-sb-b2">Free Assessment →</Link>
          </div>
          <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:10,padding:20}}>
            <h3 style={{fontFamily:"var(--font-inter)",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:1,color:"#16A34A",marginBottom:12}}>Our Guarantee</h3>
            {["✅ Complete odor elimination","✅ All insurance accepted","✅ Safe for family & pets","✅ 60-min response","✅ 5★ rated","✅ IICRC certified"].map(t=>(
              <div key={t} style={{fontFamily:"var(--font-inter)",fontSize:12,color:"#374151",marginBottom:7}}>{t}</div>
            ))}
          </div>
        </aside>
      </div>
    </div>
    <div style={{background:"#09090B",padding:"72px 40px",textAlign:"center"}}>
      <h2 style={{fontFamily:"var(--font-cormorant)",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#fff",marginBottom:14,letterSpacing:-1}}>Odor Removal in Clarksville TN</h2>
      <p style={{fontFamily:"var(--font-inter)",fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:28,maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>Permanent elimination — not a cover-up. All insurance accepted.</p>
      <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
        <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
        <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:9,background:"transparent",color:"rgba(255,255,255,.7)",padding:"13px 22px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:15,fontWeight:500,border:"1px solid rgba(255,255,255,.18)"}}>Free Assessment →</Link>
      </div>
    </div>
  </>);
}
