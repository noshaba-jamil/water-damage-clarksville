 import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getLocationBySlug, getAllLocationSlugs, locationsData } from "@/content/locations/locationsData";

const SITE_URL = "https://water-damage-clarksville.com";
const locImgs: Record<string,{img:string;focus:string}> = {
  "fort-campbell-tn":{img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80",focus:"center 40%"},
  "oak-grove-ky":{img:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1800&q=80",focus:"center 45%"},
  "hopkinsville-ky":{img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80",focus:"center 40%"},
  "sango-tn":{img:"https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1800&q=80",focus:"center 45%"},
  "st-bethlehem-tn":{img:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80",focus:"center 40%"},
  "springfield-tn":{img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",focus:"center 45%"},
  "ashland-city-tn":{img:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1800&q=80",focus:"center 40%"},
  "dover-tn":{img:"https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?auto=format&fit=crop&w=1800&q=80",focus:"center 45%"},
  "dickson-tn":{img:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1800&q=80",focus:"center 40%"},
  "woodlawn-tn":{img:"https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1800&q=80",focus:"center 45%"},
  "palmyra-tn":{img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80",focus:"center 40%"},
  "pembroke-ky":{img:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1800&q=80",focus:"center 45%"},
};
const defaultHero = {img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",focus:"center 40%"};

export function generateStaticParams() { return getAllLocationSlugs().map(city=>({city})); }
export function generateMetadata({params}:{params:{city:string}}): Metadata {
  const loc = getLocationBySlug(params.city);
  if(!loc) return {};
  return { title:loc.metaTitle, description:loc.metaDesc, alternates:{canonical:`/locations/${params.city}`} };
}

export default function LocationPage({params}:{params:{city:string}}) {
  const location = getLocationBySlug(params.city);
  if(!location) notFound();
  const hero = locImgs[params.city] || defaultHero;

  const bizSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Water Damage Restoration — ${location.city}, ${location.state}`,
    description: location.metaDesc,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: { "@type": "City", name: location.city },
  };
  const bSchema = { "@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{position:1,name:"Home",item:SITE_URL},{position:2,name:"Service Areas",item:`${SITE_URL}/service-areas`},{position:3,name:`${location.city}, ${location.state}`,item:`${SITE_URL}/locations/${params.city}`}].map(i=>({...i,"@type":"ListItem"})) };
  const faqSchema = { "@context":"https://schema.org","@type":"FAQPage",mainEntity:[
    {name:`How quickly can you respond to water damage in ${location.city} ${location.state}?`,acceptedAnswer:{text:`We guarantee 60-minute on-site arrival in ${location.city}, ${location.state}. ${location.distanceNote} Our team answers in under 60 seconds, 24/7/365.`}},
    {name:`Do you accept insurance for water damage in ${location.city}?`,acceptedAnswer:{text:`Yes. We work with USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, and all major carriers. We handle complete documentation and direct billing for ${location.city} homeowners.`}},
  ].map(q=>({...q,"@type":"Question",acceptedAnswer:{"@type":"Answer",...q.acceptedAnswer}})) };

  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(bizSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(bSchema)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    <PageHero eyebrow={`Water Damage Restoration — ${location.city}, ${location.state}`} title="Water Damage Restoration in" accent={`${location.city}, ${location.state}`} subtitle={location.intro.substring(0,200)+"..."} image={hero.img} imageFocus={hero.focus} breadcrumbs={[{label:"Service Areas",href:"/service-areas"},{label:`${location.city}, ${location.state}`}]} stat1="60min" stat1Sub="Guaranteed Arrival" stat2={location.county} stat2Sub="Coverage Area"/>
    <style>{`.lp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 300px;gap:48px;align-items:start} .lp-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:10px;display:block} .lp-h2{font-family:var(--font-cormorant);font-size:clamp(22px,2.8vw,30px);font-weight:700;color:#09090B;margin-bottom:14px;letter-spacing:-0.4px;line-height:1.1;margin-top:40px} .lp-h2:first-child{margin-top:0} .lp-p{font-family:var(--font-inter);font-size:15px;line-height:1.78;color:#52525B;margin-bottom:14px} .lp-risk{display:flex;align-items:flex-start;gap:12px;background:#FFF7ED;border:1px solid #FED7AA;border-radius:6px;padding:13px 16px;margin-bottom:10px} .lp-risk-i{font-size:14px;flex-shrink:0;margin-top:1px} .lp-risk-t{font-family:var(--font-inter);font-size:13.5px;line-height:1.65;color:#374151} .lp-svc-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:18px} .lp-svc{display:flex;align-items:flex-start;gap:9px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:6px;padding:11px 13px;font-family:var(--font-inter);font-size:13.5px;color:#1a2332} .lp-svc::before{content:'✓';color:#16A34A;font-weight:700;flex-shrink:0} .lp-tc{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px} .lp-t{background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:18px 14px;text-align:center;transition:border-color .2s} .lp-t:hover{border-color:#22C55E} .lp-ti{font-size:22px;margin-bottom:10px} .lp-tt{font-family:var(--font-inter);font-size:13px;font-weight:600;color:#09090B;margin-bottom:4px} .lp-ts{font-family:var(--font-inter);font-size:12px;color:#6B7280;line-height:1.5} .lp-mc{background:#09090B;border-radius:10px;padding:30px;text-align:center;margin:36px 0} .lp-mc-h{font-family:var(--font-cormorant);font-size:24px;font-weight:700;color:#fff;margin-bottom:8px;letter-spacing:-0.3px} .lp-mc-p{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.5);margin-bottom:18px} .lp-mc-btn{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:12px 24px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px} .lp-mc-btn:hover{background:#16A34A} .faq-item{border-bottom:1px solid #E4E4E7} .faq-q{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B;padding:16px 0;cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:12px} .faq-q::-webkit-details-marker{display:none} .faq-q::after{content:'+';font-size:18px;font-weight:300;color:#9CA3AF;flex-shrink:0;transition:transform .2s} details[open] .faq-q::after{transform:rotate(45deg)} .faq-a{font-family:var(--font-inter);font-size:14px;line-height:1.78;color:#52525B;padding-bottom:16px} .lp-sb{display:flex;flex-direction:column;gap:18px;position:sticky;top:130px} .lp-sb-cta{background:#09090B;border-radius:10px;padding:26px} .lp-sb-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px} .lp-sb-city{font-family:var(--font-cormorant);font-size:18px;font-weight:700;color:#fff;margin-bottom:4px;line-height:1.2} .lp-sb-note{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.3);margin-bottom:6px;font-style:italic} .lp-sb-num{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#4ADE80;margin-bottom:4px;letter-spacing:-0.5px} .lp-sb-hrs{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.28);margin-bottom:18px} .lp-sb-b1{display:block;background:#22C55E;color:#09090B;padding:12px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;text-align:center;margin-bottom:8px} .lp-sb-b1:hover{background:#16A34A} .lp-sb-b2{display:block;background:transparent;color:rgba(255,255,255,.4);padding:10px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-size:13px;font-weight:500;text-align:center;border:1px solid rgba(255,255,255,.09)} .lp-sb-b2:hover{border-color:rgba(255,255,255,.25);color:rgba(255,255,255,.7)} .lp-sb-box{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:22px} .lp-sb-bh{font-family:var(--font-inter);font-size:12px;font-weight:600;color:#09090B;margin-bottom:14px} .lp-areas{display:flex;flex-wrap:wrap;gap:7px} .lp-ap{font-family:var(--font-inter);font-size:12px;font-weight:500;background:#fff;border:1px solid #E4E4E7;padding:5px 12px;border-radius:100px;color:#52525B;text-decoration:none;transition:all .15s} .lp-ap:hover{background:#F0FDF4;border-color:#22C55E;color:#16A34A} @media(max-width:1024px){.lp{grid-template-columns:1fr;padding:52px 20px}.lp-sb{position:static}.lp-svc-grid{grid-template-columns:1fr}.lp-tc{grid-template-columns:1fr 1fr}}@media(max-width:480px){.lp-tc{grid-template-columns:1fr}}`}</style>
    <div style={{background:"#fff"}}>
      <div className="lp">
        <main>
          <section aria-labelledby="risks-h">
            <span className="lp-ey">Local Risk Factors</span>
            <h2 className="lp-h2" id="risks-h" style={{marginTop:0}}>Common Water Damage Issues in {location.city}, {location.state}</h2>
            <div role="list">{location.risks.map(r=><div key={r} className="lp-risk" role="listitem"><span className="lp-risk-i" aria-hidden="true">⚠️</span><span className="lp-risk-t">{r}</span></div>)}</div>
          </section>
          <div className="lp-mc"><div className="lp-mc-h">Water Damage in {location.city}? Call Now</div><div className="lp-mc-p">{location.distanceNote}</div><a href="tel:+19312712350" className="lp-mc-btn">📞 (931) 271-2350 — 60-Min Response</a></div>
          <section aria-labelledby="svc-h">
            <span className="lp-ey">Our Services in {location.city}</span>
            <h2 className="lp-h2" id="svc-h">Water Damage Restoration Services in {location.city}, {location.state}</h2>
            <div className="lp-svc-grid" role="list">{location.services.map(s=><div key={s} className="lp-svc" role="listitem">{s}</div>)}</div>
          </section>
          <section aria-labelledby="why-h" style={{marginTop:40}}>
            <span className="lp-ey">Why Choose Us</span>
            <h2 className="lp-h2" id="why-h">Why {location.city} Residents Trust Clarksville Water Damage Restoration</h2>
            <p className="lp-p">{location.closingLine}</p>
            <div className="lp-tc" role="list">
              {[{i:"⚡",t:"60-Min Response",s:`Fastest professional response in ${location.county}`},{i:"📋",t:"Insurance Managed",s:"USAA, State Farm, Allstate & all carriers"},{i:"✅",t:"Free Inspection",s:"No obligation assessment any time"}].map(t=>(
                <div key={t.t} className="lp-t" role="listitem"><div className="lp-ti" aria-hidden="true">{t.i}</div><div className="lp-tt">{t.t}</div><div className="lp-ts">{t.s}</div></div>
              ))}
            </div>
          </section>
          <section aria-labelledby="faq-h" style={{marginTop:40}}>
            <span className="lp-ey">Frequently Asked Questions</span>
            <h2 className="lp-h2" id="faq-h">Water Damage FAQs — {location.city}, {location.state}</h2>
            {[
              {q:`How quickly can you respond to water damage in ${location.city} ${location.state}?`,a:`We guarantee 60-minute on-site arrival in ${location.city}, ${location.state}. ${location.distanceNote} Our team answers in under 60 seconds, 24 hours a day.`},
              {q:`Do you accept insurance for water damage in ${location.city}?`,a:`Yes. We work with USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, and all major carriers. We handle complete documentation, adjuster coordination, and direct billing for ${location.city} homeowners.`},
              {q:`What water damage services do you provide in ${location.city}?`,a:`We provide the full range of services in ${location.city}: emergency water extraction, structural drying, mold remediation, sewage backup cleanup, storm damage restoration, and insurance claim management. Call (931) 271-2350 for immediate response.`},
            ].map((faq,i)=><details key={i} className="faq-item"><summary className="faq-q">{faq.q}</summary><p className="faq-a">{faq.a}</p></details>)}
          </section>
          <section style={{marginTop:40}} aria-labelledby="svc-links-h">
            <span className="lp-ey">Explore Our Services</span>
            <h2 className="lp-h2" id="svc-links-h">Water Damage Services Available in {location.city}</h2>
            <nav aria-label="Restoration services">
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {[["Emergency Water Damage Restoration","/emergency-water-damage-clarksville-tn"],["Flood Cleanup & Water Extraction","/flood-cleanup-clarksville-tn"],["Mold Remediation & Removal","/mold-remediation-clarksville-tn"],["Structural Drying & Dehumidification","/structural-drying-clarksville-tn"],["Insurance Claim Management","/water-damage-insurance-claim-clarksville-tn"]].map(([l,h])=>(
                  <Link key={h} href={h} style={{fontFamily:"var(--font-inter)",fontSize:14,fontWeight:500,color:"#16A34A",textDecoration:"none",display:"flex",alignItems:"center",gap:6}}>→ {l}</Link>
                ))}
              </div>
            </nav>
          </section>
        </main>
        <aside className="lp-sb" aria-label={`Emergency contact for ${location.city}`}>
          <div className="lp-sb-cta">
            <div className="lp-sb-ey">24/7 Emergency — {location.city}</div>
            <div className="lp-sb-city">Water Damage in {location.city}?</div>
            <div className="lp-sb-note">{location.distanceNote}</div>
            <div className="lp-sb-num">(931) 271-2350</div>
            <div className="lp-sb-hrs">Answered in 60 seconds · 24/7/365</div>
            <a href="tel:+19312712350" className="lp-sb-b1">📞 Call Now</a>
            <Link href="/contact" className="lp-sb-b2">Free Assessment →</Link>
          </div>
          <nav className="lp-sb-box" aria-label="Other service areas">
            <div className="lp-sb-bh">Other Areas We Serve</div>
            <div className="lp-areas">
              {locationsData.filter(l=>l.slug!==location.slug).map(l=>(
                <Link key={l.slug} href={`/locations/${l.slug}`} className="lp-ap">{l.city}, {l.state}</Link>
              ))}
            </div>
          </nav>
        </aside>
      </div>
    </div>
    <div style={{background:"#09090B",padding:"72px 40px",textAlign:"center"}}>
      <h2 style={{fontFamily:"var(--font-cormorant)",fontSize:"clamp(26px,4vw,44px)",fontWeight:700,color:"#fff",marginBottom:14,letterSpacing:-1}}>Call Now — {location.city} Team Standing By</h2>
      <p style={{fontFamily:"var(--font-inter)",fontSize:15,color:"rgba(255,255,255,.5)",marginBottom:28,maxWidth:520,margin:"0 auto 28px",lineHeight:1.7}}>{location.closingLine}</p>
      <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
        <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#22C55E",color:"#09090B",padding:"14px 30px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
        <Link href="/contact" style={{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"rgba(255,255,255,.7)",padding:"13px 22px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:15,fontWeight:500,border:"1px solid rgba(255,255,255,.18)"}}>Free Assessment →</Link>
      </div>
    </div>
  </>);
}