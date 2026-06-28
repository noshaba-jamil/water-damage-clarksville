import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title:"Contact Us | Free Water Damage Assessment | Clarksville TN | (931) 271-2350", description:"Contact Clarksville Water Damage Restoration for a free emergency assessment. Call (931) 271-2350 anytime — 24/7. 60-min arrival guaranteed. Serving Clarksville TN & Fort Campbell.", alternates:{canonical:"/contact"} };
export default function ContactPage() {
  return (<>
    <PageHero eyebrow="Get In Touch — Free Assessment" title="Contact Us for" accent="Free Water Damage Assessment" subtitle="Call (931) 271-2350 anytime — 24 hours a day. Or submit the form and a real expert calls you back within 15 minutes." image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1800&q=80" imageFocus="center 45%" breadcrumbs={[{label:"Contact"}]}/>
    <style>{`.cp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 420px;gap:56px;align-items:start} .cf{background:#09090B;border-radius:10px;padding:40px;order:2} .cf-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px;display:block} .cf-h{font-family:var(--font-cormorant);font-size:28px;font-weight:700;color:#fff;letter-spacing:-0.5px;margin-bottom:6px;line-height:1.1} .cf-s{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.35);margin-bottom:24px} .cf-row{display:grid;grid-template-columns:1fr 1fr;gap:12px} .cf-f{margin-bottom:12px} .cf-f label{display:block;font-family:var(--font-inter);font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:6px} .cf-f input,.cf-f select,.cf-f textarea{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#fff;font-family:var(--font-inter);font-size:14px;padding:11px 13px;outline:none;transition:border-color .2s;-webkit-appearance:none} .cf-f input::placeholder,.cf-f textarea::placeholder{color:rgba(255,255,255,.22)} .cf-f input:focus,.cf-f select:focus,.cf-f textarea:focus{border-color:#22C55E} .cf-f select option{background:#09090B;color:#fff} .cf-f textarea{height:90px;resize:none} .cf-btn{width:100%;background:#22C55E;color:#09090B;border:none;border-radius:6px;padding:14px;font-family:var(--font-inter);font-size:15px;font-weight:700;cursor:pointer;transition:background .2s;margin-top:4px} .cf-btn:hover{background:#16A34A} .cf-note{font-family:var(--font-inter);font-size:11px;color:rgba(255,255,255,.2);text-align:center;margin-top:12px} .ci{display:flex;flex-direction:column;gap:20px;order:1} .ci-emg{background:linear-gradient(135deg,#09090B,#18181B);border:1px solid rgba(74,222,128,.15);border-radius:10px;padding:28px;text-align:center} .ci-emg-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:10px} .ci-emg-h{font-family:var(--font-cormorant);font-size:22px;font-weight:700;color:#fff;margin-bottom:6px;letter-spacing:-0.3px} .ci-emg-s{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.4);margin-bottom:18px} .ci-emg-num{display:block;font-family:var(--font-cormorant);font-size:34px;font-weight:700;color:#4ADE80;text-decoration:none;letter-spacing:-1px;transition:color .2s} .ci-emg-num:hover{color:#22C55E} .ci-card{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:24px;transition:border-color .25s} .ci-card:hover{border-color:#22C55E} .ci-card-i{font-size:22px;margin-bottom:10px} .ci-card-h{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B;margin-bottom:10px} .ci-card-t{font-family:var(--font-inter);font-size:13.5px;color:#52525B;line-height:1.65} .ci-card-t a{color:#16A34A;font-weight:600;text-decoration:none} .ci-check{display:flex;align-items:flex-start;gap:8px;margin-bottom:8px} .ci-check-m{color:#16A34A;font-weight:700;flex-shrink:0;font-family:var(--font-inter)} .ci-check-t{font-family:var(--font-inter);font-size:13.5px;color:#52525B} @media(max-width:1024px){.cp{grid-template-columns:1fr;padding:52px 20px}.cf{order:1}.ci{order:2}.cf-row{grid-template-columns:1fr}}`}</style>
    <div style={{background:"#F9FAFB"}}>
      <div className="cp">
        <section className="cf" aria-labelledby="form-heading">
          <span className="cf-ey">Free Assessment</span>
          <h2 className="cf-h" id="form-heading">Request Help Now</h2>
          <div className="cf-s">We call back within 15 minutes. Emergencies answered immediately.</div>
          <form action="/api/lead" method="POST" aria-label="Contact form" noValidate>
            <div className="cf-row">
              <div className="cf-f"><label htmlFor="fn">First Name</label><input id="fn" name="firstName" type="text" placeholder="John" autoComplete="given-name" required/></div>
              <div className="cf-f"><label htmlFor="ln">Last Name</label><input id="ln" name="lastName" type="text" placeholder="Smith" autoComplete="family-name"/></div>
            </div>
            <div className="cf-f"><label htmlFor="ph">Phone Number *</label><input id="ph" name="phone" type="tel" placeholder="(931) 271-2350" autoComplete="tel" required/></div>
            <div className="cf-f"><label htmlFor="em">Email Address</label><input id="em" name="email" type="email" placeholder="john@example.com" autoComplete="email"/></div>
            <div className="cf-row">
              <div className="cf-f">
                <label htmlFor="dt">Type of Damage</label>
                <select id="dt" name="damageType" aria-label="Type of water damage">
                  <option value="">Select...</option>
                  <option value="water">Water Damage</option><option value="flood">Flood</option>
                  <option value="mold">Mold</option><option value="sewage">Sewage Backup</option>
                  <option value="storm">Storm Damage</option>
                </select>
              </div>
              <div className="cf-f">
                <label htmlFor="urg">Urgency</label>
                <select id="urg" name="urgency" aria-label="Urgency level">
                  <option value="emergency">🚨 Emergency NOW</option>
                  <option value="24h">Within 24 Hours</option><option value="sched">Scheduling</option>
                </select>
              </div>
            </div>
            <div className="cf-f"><label htmlFor="desc">Description (optional)</label><textarea id="desc" name="description" placeholder="Describe what happened..." aria-label="Description"/></div>
            <button className="cf-btn" type="submit">Request Assessment →</button>
            <div className="cf-note">✓ We respect your privacy. No spam, ever.</div>
          </form>
        </section>
        <aside className="ci" aria-label="Contact information">
          <div className="ci-emg">
            <div className="ci-emg-ey">🚨 Emergency Line — Open 24/7</div>
            <div className="ci-emg-h">Water Damage Emergency?</div>
            <div className="ci-emg-s">Don&apos;t fill out a form. Call now — answered in 60 seconds.</div>
            <a href="tel:+19312712350" className="ci-emg-num" aria-label="Call emergency line">(931) 271-2350</a>
          </div>
          <div className="ci-card" itemScope itemType="https://schema.org/LocalBusiness">
            <div className="ci-card-i" aria-hidden="true">📍</div>
            <h2 className="ci-card-h">Location &amp; Contact</h2>
            <div className="ci-card-t">
              <span itemProp="address">215 Legion Street, Clarksville, TN 37040</span><br/>
              Phone: <a href="tel:+19312712350" itemProp="telephone">(931) 271-2350</a><br/>
              Email: <a href="mailto:info@waterdamageclarksville.com" itemProp="email">info@waterdamageclarksville.com</a><br/>
              <span itemProp="openingHours" content="Mo-Su 00:00-24:00">Hours: Open 24 Hours / 7 Days a Week</span>
            </div>
            <meta itemProp="name" content="Clarksville Water Damage Restoration"/>
          </div>
          <div className="ci-card">
            <div className="ci-card-i" aria-hidden="true">✅</div>
            <h2 className="ci-card-h">What to Expect</h2>
            {["Real expert answers every call — no voicemail","60-minute guaranteed on-site arrival","Free inspection and damage assessment","All insurance accepted — we file for you","USAA specialists for Fort Campbell families","Direct billing — you pay only your deductible"].map(item=>(
              <div key={item} className="ci-check">
                <span className="ci-check-m" aria-hidden="true">✓</span>
                <span className="ci-check-t">{item}</span>
              </div>
            ))}
          </div>
          <div className="ci-card">
            <div className="ci-card-i" aria-hidden="true">🔗</div>
            <h2 className="ci-card-h">Our Services</h2>
            <nav aria-label="Service links">
              {[["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Flood Cleanup","/flood-cleanup-clarksville-tn"],["Mold Remediation","/mold-remediation-clarksville-tn"],["Structural Drying","/structural-drying-clarksville-tn"],["Insurance Claims","/water-damage-insurance-claim-clarksville-tn"],["All Service Areas","/service-areas"]].map(([l,h])=>(
                <div key={h} style={{marginBottom:8}}>
                  <Link href={h} style={{fontFamily:"var(--font-inter)",fontSize:13.5,fontWeight:500,color:"#16A34A",textDecoration:"none",display:"flex",alignItems:"center",gap:6}}>→ {l}</Link>
                </div>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  </>);
}
