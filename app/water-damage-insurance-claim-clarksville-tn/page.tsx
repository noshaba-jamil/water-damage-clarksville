import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Water Damage Insurance Claims Clarksville TN | USAA Specialists | (931) 271-2350",
  description: "Water damage insurance claims handled completely in Clarksville TN. USAA, State Farm, Allstate, Farmers specialists. Direct billing. You pay only your deductible. Call (931) 271-2350.",
  alternates: { canonical: "/water-damage-insurance-claim-clarksville-tn" },
};

export default function InsurancePage() {
  return (<>
    <PageHero eyebrow="Insurance Claim Specialists" title="Water Damage Insurance Claims in Clarksville TN" subtitle="We handle everything — documentation, adjuster communication, direct billing. USAA specialists for Fort Campbell. You pay only your deductible." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80" imageFocus="center 40%" breadcrumbs={[{label:"Services",href:"/service-areas"},{label:"Insurance Claims"}]} stat1="$0" stat1Sub="Out of Pocket*" stat2="USAA" stat2Sub="Preferred Contractor"/>
    <style>{`
      .sp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:52px;align-items:start}
      .sp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block;margin-top:28px}
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
      @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}.insurers{grid-template-columns:1fr 1fr}}
    `}</style>
    <div style={{background:"#fff"}}>
      <div className="sp">
        <main>
          <span className="sp-ey">We Handle Everything</span>
          <h2 className="sp-h2">Complete Insurance Claim Management — You Focus on Your Family</h2>
          <p className="sp-p">Dealing with an insurance claim after water damage is overwhelming — especially when your home is still wet. We&apos;ve managed hundreds of claims in Clarksville TN and know exactly what adjusters need. Our team handles every step: emergency documentation, moisture reports, adjuster communication, and direct billing. You pay only your deductible.</p>
          <p className="sp-p">We are USAA-preferred contractors — critical for Fort Campbell military families whose damage often involves military housing, on-post flooding, or USAA-specific claim requirements. We know the USAA process inside and out.</p>

          <span className="sp-ey">Insurance Companies We Work With</span>
          <div className="insurers">
            {[["USAA",true],["State Farm",false],["Allstate",false],["Farmers",false],["GEICO",false],["Progressive",false],["Nationwide",false],["Liberty Mutual",false],["Travelers",false]].map(([n,p])=>(
              <div key={n as string} className={`ins${p?" primary":""}`}>{p?"⭐ ":""}{n as string}{p?" (USAA Specialist)":""}</div>
            ))}
          </div>

          <span className="sp-ey">Our Claims Process</span>
          <div className="steps">
            {[
              {n:"01",t:"Emergency Documentation",d:"We document everything immediately — photos, moisture readings, damage scope — before cleanup begins. This protects your claim."},
              {n:"02",t:"Claim Initiation Support",d:"We help you file your claim correctly from the start. Wrong info on initial claims causes delays and underpayment."},
              {n:"03",t:"Adjuster Coordination",d:"We meet the adjuster on-site, present our scope of loss, and advocate for full coverage of all damage — visible and hidden."},
              {n:"04",t:"Moisture Documentation",d:"Daily moisture logs in the format insurance companies require. Undeniable evidence for full claim approval."},
              {n:"05",t:"Direct Billing",d:"We bill your insurance company directly. You receive the work; insurance pays us. You pay only your deductible."},
              {n:"06",t:"Claim Follow-Through",d:"If your claim is delayed or disputed, our documentation gives you everything needed to push back and win."},
            ].map(s=>(
              <div key={s.n} className="step">
                <div className="step-n">{s.n}</div>
                <div><div className="step-t">{s.t}</div><div className="step-d">{s.d}</div></div>
              </div>
            ))}
          </div>

          <span className="sp-ey">What We Handle For You</span>
          <ul className="list">
            {["Emergency documentation before cleanup starts","Complete photo and moisture log package","Scope of loss preparation in insurance format","On-site adjuster meeting and advocacy","Direct billing to your insurance company","USAA-specific claim requirements (Fort Campbell)","Supplemental claims if additional damage found","Denied claim documentation support","Zero out-of-pocket beyond your deductible*"].map(i=><li key={i}>{i}</li>)}
          </ul>
          <p style={{fontFamily:"var(--font-inter)",fontSize:12,color:"#9CA3AF",marginTop:8}}>*Subject to your policy coverage and deductible amount.</p>

          <div style={{background:"#FFF7ED",border:"1px solid #FED7AA",borderRadius:10,padding:20,margin:"28px 0"}}>
            <div style={{fontFamily:"var(--font-inter)",fontSize:13,fontWeight:700,color:"#C2410C",marginBottom:8}}>⚠️ Don&apos;t Clean Up Before Documenting</div>
            <p style={{fontFamily:"var(--font-inter)",fontSize:13,color:"#92400E",lineHeight:1.6}}>Many homeowners lose thousands in insurance money by cleaning up before proper documentation. Call us FIRST — we document everything before starting cleanup to protect your full claim value.</p>
          </div>

          <nav aria-label="Related services" style={{marginTop:16}}>
            <div style={{fontFamily:"var(--font-inter)",fontSize:10,fontWeight:600,letterSpacing:"2.5px",textTransform:"uppercase",color:"#16A34A",marginBottom:12}}>Related Services</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {[["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Flood Cleanup","/flood-cleanup-clarksville-tn"],["Mold Remediation","/mold-remediation-clarksville-tn"],["Structural Drying","/structural-drying-clarksville-tn"]].map(([l,h])=>(
                <Link key={h} href={h} style={{fontFamily:"var(--font-inter)",fontSize:13,fontWeight:500,color:"#16A34A",textDecoration:"none",background:"#F0FDF4",border:"1px solid #BBF7D0",padding:"6px 14px",borderRadius:100}}>{l}</Link>
              ))}
            </div>
          </nav>
        </main>
        <aside className="sp-sb">
          <div className="sp-sb-cta">
            <div className="sp-sb-ey">USAA Specialists — Fort Campbell</div>
            <div className="sp-sb-n">(931) 271-2350</div>
            <div className="sp-sb-s">Call before you clean up — protect your claim</div>
            <a href="tel:+19312712350" className="sp-sb-b1">📞 Call Now — Free Claim Help</a>
            <Link href="/contact" className="sp-sb-b2">Free Assessment →</Link>
          </div>
          <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:10,padding:20}}>
            <h3 style={{fontFamily:"var(--font-inter)",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:1,color:"#16A34A",marginBottom:12}}>Claim Benefits</h3>
            {["✅ Direct insurance billing","✅ You pay deductible only","✅ USAA specialists","✅ On-site adjuster support","✅ Complete documentation","✅ Denied claim help","✅ No upfront costs"].map(t=>(
              <div key={t} style={{fontFamily:"var(--font-inter)",fontSize:12,color:"#374151",marginBottom:7}}>{t}</div>
            ))}
          </div>
        </aside>
      </div>
    </div>
    <div style={{background:"#09090B",padding:"72px 40px",textAlign:"center"}}>
      <h2 style={{fontFamily:"var(--font-cormorant)",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#fff",marginBottom:14,letterSpacing:-1}}>Insurance Claim Help in Clarksville TN</h2>
      <p style={{fontFamily:"var(--font-inter)",fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:28,maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>USAA specialists. Direct billing. Free claim consultation.</p>
      <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
        <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
        <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:9,background:"transparent",color:"rgba(255,255,255,.7)",padding:"13px 22px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:15,fontWeight:500,border:"1px solid rgba(255,255,255,.18)"}}>Free Assessment →</Link>
      </div>
    </div>
  </>);
}
