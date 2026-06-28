import type { Metadata } from "next";
import Link from "next/link";
import { locationsData } from "@/content/locations/locationsData";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title:"Service Areas | Water Damage Restoration Near Me | Clarksville TN", description:"Water damage restoration serving Clarksville TN, Fort Campbell, Oak Grove, Hopkinsville, Sango, Springfield & more. 60-min guaranteed response. Call (931) 271-2350.", alternates:{canonical:"/service-areas"} };
const bSchema = { "@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{position:1,name:"Home",item:"https://waterdamageclarksville.com"},{position:2,name:"Service Areas",item:"https://waterdamageclarksville.com/service-areas"}].map(i=>({...i,"@type":"ListItem"})) };
export default function ServiceAreasPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(bSchema)}}/>
    <PageHero eyebrow="50-Mile Coverage Radius — Middle Tennessee & Southern Kentucky" title="Water Damage Restoration" accent="Service Areas" subtitle="We provide 24/7 emergency water damage restoration to Clarksville TN and all communities within our 50-mile service radius. 60-minute guaranteed response to every location." image="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1800&q=80" imageFocus="center 40%" breadcrumbs={[{label:"Service Areas"}]} stat1="50mi" stat1Sub="Coverage Radius" stat2="60min" stat2Sub="Guaranteed Arrival" stat3="12+" stat3Sub="Communities Served"/>
    <style>{`.sa{max-width:1240px;margin:0 auto;padding:80px 40px} .sa-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:12px;display:block} .sa-h2{font-family:var(--font-cormorant);font-size:clamp(26px,3vw,38px);font-weight:700;color:#09090B;margin-bottom:10px;letter-spacing:-0.8px} .sa-p{font-family:var(--font-inter);font-size:15px;color:#52525B;line-height:1.7;margin-bottom:16px} .sa-primary{background:linear-gradient(135deg,#09090B,#18181B);border-radius:10px;padding:40px;margin-bottom:52px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap} .sa-p-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#4ADE80;margin-bottom:10px} .sa-p-h{font-family:var(--font-cormorant);font-size:clamp(24px,3vw,36px);font-weight:700;color:#fff;margin-bottom:8px;letter-spacing:-0.8px;line-height:1.1} .sa-p-sub{font-family:var(--font-inter);font-size:14px;color:rgba(255,255,255,.45);margin-bottom:16px;max-width:460px;line-height:1.65} .sa-p-zips{display:flex;flex-wrap:wrap;gap:8px} .sa-p-zip{font-family:var(--font-inter);font-size:12px;font-weight:600;color:#4ADE80;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.2);padding:5px 14px;border-radius:100px} .sa-p-btn{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:13px 24px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;transition:background .2s;flex-shrink:0} .sa-p-btn:hover{background:#16A34A} .sa-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:32px} .sa-card{display:flex;align-items:center;justify-content:space-between;gap:12px;background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:18px 20px;text-decoration:none;transition:all .2s} .sa-card:hover{border-color:#22C55E;background:#F0FDF4;transform:translateY(-2px)} .sa-card-city{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B} .sa-card-county{font-family:var(--font-inter);font-size:12px;color:#9CA3AF;margin-top:2px} .sa-card-note{font-family:var(--font-inter);font-size:11px;color:#4ADE80;margin-top:4px;font-weight:600} .sa-card-arr{font-size:16px;color:#D1D5DB;transition:color .18s;flex-shrink:0} .sa-card:hover .sa-card-arr{color:#22C55E} .sa-svc{margin-top:52px;padding:36px;background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px} .sa-svc-h{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#09090B;margin-bottom:18px;letter-spacing:-0.5px} .sa-svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px} .sa-svc-link{font-family:var(--font-inter);font-size:14px;font-weight:500;color:#16A34A;text-decoration:none;display:flex;align-items:center;gap:6px;padding:10px 14px;background:#fff;border:1px solid #E4E4E7;border-radius:6px;transition:all .18s} .sa-svc-link::before{content:'→';font-size:11px;flex-shrink:0} .sa-svc-link:hover{border-color:#22C55E;background:#F0FDF4} .sa-faq{margin-top:52px} .sa-faq-h{font-family:var(--font-cormorant);font-size:clamp(24px,3vw,34px);font-weight:700;color:#09090B;margin-bottom:28px;letter-spacing:-0.6px} .faq-item{border-bottom:1px solid #E4E4E7} .faq-q{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B;padding:18px 0;cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:12px} .faq-q::-webkit-details-marker{display:none} .faq-q::after{content:'+';font-size:18px;font-weight:300;color:#9CA3AF;flex-shrink:0;transition:transform .2s} details[open] .faq-q::after{transform:rotate(45deg)} .faq-a{font-family:var(--font-inter);font-size:14px;line-height:1.78;color:#52525B;padding-bottom:18px} .sa-cta{background:#09090B;border-radius:10px;padding:44px;text-align:center;margin-top:52px} .sa-cta-h{font-family:var(--font-cormorant);font-size:clamp(24px,3vw,36px);font-weight:700;color:#fff;margin-bottom:12px;letter-spacing:-0.8px} .sa-cta-p{font-family:var(--font-inter);font-size:15px;color:rgba(255,255,255,.45);margin-bottom:24px;max-width:460px;margin-left:auto;margin-right:auto;line-height:1.7} @media(max-width:1024px){.sa{padding:52px 20px}.sa-grid{grid-template-columns:1fr 1fr}.sa-svc-grid{grid-template-columns:1fr 1fr}.sa-primary{flex-direction:column}} @media(max-width:640px){.sa-grid{grid-template-columns:1fr}.sa-svc-grid{grid-template-columns:1fr}}`}</style>
    <div style={{background:"#F9FAFB"}}>
      <main className="sa">
        <section aria-labelledby="primary-h">
          <div className="sa-primary">
            <div>
              <div className="sa-p-ey">Primary Service Area</div>
              <div className="sa-p-h" id="primary-h">Clarksville, Tennessee</div>
              <div className="sa-p-sub">Our home base. Fastest response in all of Clarksville and Montgomery County — 24/7/365. Serving all ZIP codes:</div>
              <div className="sa-p-zips" aria-label="Clarksville ZIP codes">
                {["37040","37041","37042","37043","37044"].map(z=><span key={z} className="sa-p-zip">ZIP {z}</span>)}
              </div>
            </div>
            <a href="tel:+19312712350" className="sa-p-btn" aria-label="Call for emergency response">📞 Call Now →</a>
          </div>
        </section>
        <section aria-labelledby="all-areas-h">
          <span className="sa-ey">Extended Service Coverage</span>
          <h2 className="sa-h2" id="all-areas-h">All Communities We Serve for Water Damage Restoration</h2>
          <p className="sa-p">We guarantee 60-minute emergency response to all locations listed below. Click any city for dedicated water damage restoration information and local service details.</p>
          <nav className="sa-grid" aria-label="Service area locations">
            {locationsData.map(loc=>(
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="sa-card" aria-label={`Water damage restoration in ${loc.city}, ${loc.state}`}>
                <div>
                  <div className="sa-card-city">📍 {loc.city}, {loc.state}</div>
                  <div className="sa-card-county">{loc.county}</div>
                  <div className="sa-card-note">{loc.distanceNote}</div>
                </div>
                <span className="sa-card-arr" aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>
        </section>
        <section className="sa-svc" aria-labelledby="svc-h">
          <h2 className="sa-svc-h" id="svc-h">Services Available Throughout Our Coverage Area</h2>
          <nav className="sa-svc-grid" aria-label="Water damage services">
            {[["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Flood Cleanup & Extraction","/flood-cleanup-clarksville-tn"],["Mold Remediation & Removal","/mold-remediation-clarksville-tn"],["Structural Drying","/structural-drying-clarksville-tn"],["Sewage Backup Cleanup","/services/sewage-backup-cleanup-clarksville-tn"],["Basement Flooding","/services/basement-flooding-clarksville-tn"],["Commercial Restoration","/services/commercial-water-damage-clarksville-tn"],["Storm Damage","/services/storm-damage-restoration-clarksville-tn"],["Insurance Claims","/water-damage-insurance-claim-clarksville-tn"]].map(([l,h])=>(
              <Link key={h} href={h} className="sa-svc-link" aria-label={l}>{l}</Link>
            ))}
          </nav>
        </section>
        <section className="sa-faq" aria-labelledby="faq-h">
          <span className="sa-ey">Common Questions</span>
          <h2 className="sa-faq-h" id="faq-h">Service Area Frequently Asked Questions</h2>
          {[
            {q:"How far do you travel for water damage restoration?",a:"We serve a 50-mile radius from our Clarksville TN base — covering all of Montgomery County TN, parts of Robertson, Cheatham, Stewart, and Dickson counties in Tennessee, and Christian County in Kentucky. Call (931) 271-2350 to confirm coverage."},
            {q:"Do you serve Fort Campbell military base?",a:"Yes. Fort Campbell is within our primary service area. We respond within 60 minutes to all on-base and off-base properties. We have extensive experience with USAA insurance claims and military family scheduling."},
            {q:"Do you serve locations in Kentucky?",a:"Yes. We serve Oak Grove KY, Hopkinsville KY, and Pembroke KY as part of our regular service area. The Tennessee-Kentucky state line is no barrier to our service."},
            {q:"What if my location isn't listed?",a:"Call (931) 271-2350 and we'll confirm coverage in under 60 seconds. If you are within 50 miles of Clarksville TN, there's a good chance we can respond."},
          ].map((faq,i)=><details key={i} className="faq-item"><summary className="faq-q">{faq.q}</summary><p className="faq-a">{faq.a}</p></details>)}
        </section>
        <div className="sa-cta" aria-label="Call to action">
          <h2 className="sa-cta-h">Not Sure If We Cover Your Area?</h2>
          <p className="sa-cta-p">Call (931) 271-2350 and we confirm coverage in under 60 seconds. We serve a 50-mile radius from Clarksville TN.</p>
          <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
        </div>
      </main>
    </div>
  </>);
}
