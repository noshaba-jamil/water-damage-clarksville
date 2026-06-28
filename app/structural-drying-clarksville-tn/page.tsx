import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Structural Drying Clarksville TN | IICRC S500 Certified | (931) 271-2350",
  description: "IICRC S500-certified structural drying in Clarksville TN. Industrial LGR dehumidifiers, desiccant drying, daily moisture monitoring. All insurance. Call (931) 271-2350.",
  alternates: { canonical: "/structural-drying-clarksville-tn" },
};

export default function StructuralDryingPage() {
  return (<>
    <PageHero eyebrow="IICRC S500 Certified" title="Structural Drying Services in Clarksville TN" subtitle="Industrial LGR dehumidifiers and precision drying. Daily monitoring until certified dry. All insurance. 60-min response." image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80" imageFocus="center 40%" breadcrumbs={[{label:"Services",href:"/service-areas"},{label:"Structural Drying"}]} stat1="S500" stat1Sub="IICRC Certified" stat2="24/7" stat2Sub="Equipment Monitoring"/>
    <style>{`
      .sp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:52px;align-items:start}
      .sp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block;margin-top:28px}
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
      @media(max-width:1024px){.sp{grid-template-columns:1fr;padding:52px 20px}.sp-sb{position:static}.equip{grid-template-columns:1fr}}
    `}</style>
    <div style={{background:"#fff"}}>
      <div className="sp">
        <main>
          <span className="sp-ey">What Is Structural Drying?</span>
          <h2 className="sp-h2">Precision Structural Drying — Faster, Safer, Certified</h2>
          <p className="sp-p">After water extraction, your structure looks dry — but isn&apos;t. Water penetrates deep into wall cavities, subfloors, joists, and insulation. Without professional structural drying, this hidden moisture causes mold growth within 48 hours, warped flooring, and structural rot. Our IICRC S500-certified process removes moisture at the molecular level — not just the surface.</p>
          <p className="sp-p">We place precision-calibrated LGR dehumidifiers and high-velocity air movers to create a controlled drying environment. Daily moisture readings track progress to the exact IICRC S500 standard — and we don&apos;t leave until your home is certified dry.</p>

          <span className="sp-ey">Industrial Drying Equipment</span>
          <div className="equip">
            {[
              {i:"🌬️",t:"LGR Dehumidifiers",d:"Low Grain Refrigerant dehumidifiers extract moisture even at low humidity levels — far more effective than hardware store units."},
              {i:"💨",t:"High-Velocity Air Movers",d:"Centrifugal air movers create laminar airflow across wet surfaces, dramatically accelerating evaporation."},
              {i:"🔥",t:"Desiccant Dryers",d:"For extreme moisture situations, desiccant dehumidifiers work even in cold temperatures when refrigerant units can't."},
              {i:"📷",t:"FLIR Thermal Cameras",d:"Thermal imaging reveals hidden moisture in walls and ceilings invisible to the naked eye."},
              {i:"💧",t:"Moisture Meters",d:"Pin and pinless meters measure moisture content in wood, drywall, and concrete to precise percentages."},
              {i:"📊",t:"Psychrometric Monitoring",d:"Temperature, humidity, and dew point tracked continuously — documents drying progress for insurance."},
            ].map(e=>(
              <div key={e.t} className="eq">
                <div className="eq-icon">{e.i}</div>
                <div className="eq-t">{e.t}</div>
                <div className="eq-d">{e.d}</div>
              </div>
            ))}
          </div>

          <span className="sp-ey">Typical Drying Timeline</span>
          <div className="timeline">
            {[
              {day:"Day 1",t:"Extraction + Equipment Setup",d:"Water extracted, moisture mapped, drying equipment placed. Psychrometric readings recorded."},
              {day:"Day 2-3",t:"Active Drying Phase",d:"Daily monitoring. Equipment adjusted based on moisture readings. Rapid moisture reduction."},
              {day:"Day 3-5",t:"Secondary Drying",d:"Targeting deeper structural moisture — wall cavities, subfloor, joists. Equipment repositioned as needed."},
              {day:"Day 5-7",t:"Final Monitoring",d:"Moisture levels approaching IICRC S500 standard. Final documentation prepared for insurance."},
              {day:"Final Day",t:"Certification",d:"All readings at or below standard. Equipment removed. Certificate of dryness issued."},
            ].map(t=>(
              <div key={t.day} className="tl-item">
                <div className="tl-dot">{t.day.split(" ")[1]}</div>
                <div><div className="tl-t">{t.day} — {t.t}</div><div className="tl-d">{t.d}</div></div>
              </div>
            ))}
          </div>

          <span className="sp-ey">What&apos;s Included</span>
          <ul className="list">
            {["IICRC S500-certified drying protocols","Industrial LGR dehumidifiers","High-velocity air movers","Thermal imaging moisture mapping","Daily psychrometric monitoring and readings","Complete moisture log for insurance","Desiccant drying available for severe cases","Wall cavity drying if needed","Certificate of dryness at completion","All insurance direct billing"].map(i=><li key={i}>{i}</li>)}
          </ul>
          <nav aria-label="Related services" style={{marginTop:32}}>
            <div style={{fontFamily:"var(--font-inter)",fontSize:10,fontWeight:600,letterSpacing:"2.5px",textTransform:"uppercase",color:"#16A34A",marginBottom:12}}>Related Services</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {[["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Flood Cleanup","/flood-cleanup-clarksville-tn"],["Mold Remediation","/mold-remediation-clarksville-tn"],["Insurance Claims","/water-damage-insurance-claim-clarksville-tn"]].map(([l,h])=>(
                <Link key={h} href={h} style={{fontFamily:"var(--font-inter)",fontSize:13,fontWeight:500,color:"#16A34A",textDecoration:"none",background:"#F0FDF4",border:"1px solid #BBF7D0",padding:"6px 14px",borderRadius:100}}>{l}</Link>
              ))}
            </div>
          </nav>
        </main>
        <aside className="sp-sb">
          <div className="sp-sb-cta">
            <div className="sp-sb-ey">24/7 Emergency Line</div>
            <div className="sp-sb-n">(931) 271-2350</div>
            <div className="sp-sb-s">IICRC S500 Certified · 24/7</div>
            <a href="tel:+19312712350" className="sp-sb-b1">📞 Call Now</a>
            <Link href="/contact" className="sp-sb-b2">Free Assessment →</Link>
          </div>
          <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:10,padding:20}}>
            <h3 style={{fontFamily:"var(--font-inter)",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:1,color:"#16A34A",marginBottom:12}}>Why Us</h3>
            {["✅ IICRC S500 Certified","✅ Daily monitoring","✅ Certificate of dryness","✅ All insurance accepted","✅ USAA specialists","✅ 5★ rated"].map(t=>(
              <div key={t} style={{fontFamily:"var(--font-inter)",fontSize:12,color:"#374151",marginBottom:7}}>{t}</div>
            ))}
          </div>
        </aside>
      </div>
    </div>
    <div style={{background:"#09090B",padding:"72px 40px",textAlign:"center"}}>
      <h2 style={{fontFamily:"var(--font-cormorant)",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#fff",marginBottom:14,letterSpacing:-1}}>Structural Drying in Clarksville TN</h2>
      <p style={{fontFamily:"var(--font-inter)",fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:28,maxWidth:480,margin:"0 auto 28px",lineHeight:1.7}}>IICRC S500 certified. All insurance accepted. Free assessment.</p>
      <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
        <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
        <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:9,background:"transparent",color:"rgba(255,255,255,.7)",padding:"13px 22px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:15,fontWeight:500,border:"1px solid rgba(255,255,255,.18)"}}>Free Assessment →</Link>
      </div>
    </div>
  </>);
}
