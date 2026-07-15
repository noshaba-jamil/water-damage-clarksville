       import Link from "next/link";
const svcLinks=[{l:"Emergency Water Damage",h:"/emergency-water-damage-clarksville-tn"},{l:"Flood Cleanup",h:"/flood-cleanup-clarksville-tn"},{l:"Mold Remediation",h:"/mold-remediation-clarksville-tn"},{l:"Sewage Backup",h:"/services/sewage-backup-cleanup-clarksville-tn"},{l:"Burst Pipe Damage",h:"/services/burst-pipe-water-damage-clarksville-tn"},{l:"Basement Flooding",h:"/services/basement-flooding-clarksville-tn"},{l:"Commercial Restoration",h:"/services/commercial-water-damage-clarksville-tn"},{l:"Storm Damage",h:"/services/storm-damage-restoration-clarksville-tn"},{l:"Structural Drying",h:"/structural-drying-clarksville-tn"},{l:"Insurance Claims",h:"/water-damage-insurance-claim-clarksville-tn"}];
const areaLinks=[{l:"Fort Campbell, TN",h:"/locations/fort-campbell-tn"},{l:"Sango, TN",h:"/locations/sango-tn"},{l:"St. Bethlehem, TN",h:"/locations/st-bethlehem-tn"},{l:"Oak Grove, KY",h:"/locations/oak-grove-ky"},{l:"Hopkinsville, KY",h:"/locations/hopkinsville-ky"},{l:"Springfield, TN",h:"/locations/springfield-tn"},{l:"Ashland City, TN",h:"/locations/ashland-city-tn"},{l:"Dover, TN",h:"/locations/dover-tn"},{l:"Dickson, TN",h:"/locations/dickson-tn"},{l:"Woodlawn, TN",h:"/locations/woodlawn-tn"},{l:"Palmyra, TN",h:"/locations/palmyra-tn"},{l:"Pembroke, KY",h:"/locations/pembroke-ky"}];
const socialLinks=[
  {l:"YouTube",h:"https://youtube.com/@waterdamageclarksville?si=1YSSAin6cK7EeiP-",icon:"M23.5 6.2c-.3-1-1.1-1.8-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6c-1 .3-1.8 1.1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1.1 1.8 2.1 2.1 1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"},
  {l:"Instagram",h:"https://www.instagram.com/waterdamageclarksville2026/?hl=en",icon:"M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5.9.4.4.7.9.9 1.5.2.4.3 1.1.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-.9 1.5-.4.4-.9.7-1.5.9-.4.2-1.1.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.4-.3-1.1-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 .9-1.5.4-.4.9-.7 1.5-.9.4-.2 1.1-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.4-.5.2-.8.4-1.2.7-.3.3-.5.7-.7 1.2-.1.3-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 1.9.2.5.4.8.7 1.2.3.3.7.5 1.2.7.3.1.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.4.5-.2.8-.4 1.2-.7.3-.3.5-.7.7-1.2.1-.3.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-1.9-.2-.5-.4-.8-.7-1.2-.3-.3-.7-.5-1.2-.7-.3-.1-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.8a3.1 3.1 0 100 6.2 3.1 3.1 0 000-6.2zm5.1-2a1.1 1.1 0 110 2.3 1.1 1.1 0 010-2.3z"},
  {l:"Facebook",h:"https://www.facebook.com/profile.php?id=61591774597110",icon:"M13.5 22v-8.3h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9C16.5 3.9 15.4 3.8 14.2 3.8c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.2v3.2h2.8V22h3.5z"},
  {l:"Pinterest",h:"https://www.pinterest.com/waterdamageclarksville/",icon:"M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-.9 3.8-.3 1.1.6 2.1 1.7 2.1 2.1 0 3.6-2.6 3.6-5.8 0-2.4-1.6-4.2-4.6-4.2-3.4 0-5.5 2.5-5.5 5.3 0 1 .3 1.6.7 2.2.2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.3-1.6-.7-2.4-2.6-2.4-4.7 0-3.5 3-7.7 8.7-7.7 4.6 0 7.7 3.4 7.7 7 0 4.8-2.7 8.4-6.6 8.4-1.3 0-2.6-.7-3-1.5l-.8 3.2c-.3 1.1-.9 2.2-1.4 3 .9.2 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z"}
];
export default function Footer(){
  return(
    <footer style={{background:"#09090B",fontFamily:"var(--font-inter)"}}>
      <style>{`.ft{max-width:1240px;margin:0 auto;padding:72px 40px 0}.ft-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1.1fr;gap:48px;padding-bottom:56px;border-bottom:1px solid rgba(255,255,255,0.06)}.ft-logo{display:flex;align-items:center;gap:12px;text-decoration:none;margin-bottom:18px}.ft-mark{width:36px;height:36px;background:linear-gradient(135deg,#22C55E,#16A34A);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}.ft-name{font-size:14px;font-weight:600;color:#fff;letter-spacing:-0.2px;line-height:1.25}.ft-sub{font-size:10px;color:rgba(255,255,255,.3);letter-spacing:.8px;text-transform:uppercase}.ft-desc{font-size:13.5px;line-height:1.75;color:rgba(255,255,255,.35);margin-bottom:22px;max-width:280px}.ft-cl{font-size:13px;color:rgba(255,255,255,.38);margin-bottom:9px}.ft-cl a{color:#4ADE80;font-weight:600;transition:color .15s}.ft-cl a:hover{color:#22C55E}.ft-col-h{font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);margin-bottom:16px}.ft-links{display:flex;flex-direction:column;gap:11px}.ft-links a{font-size:13.5px;color:rgba(255,255,255,.42);text-decoration:none;transition:color .15s}.ft-links a:hover{color:#4ADE80}.ft-cta{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:24px}.ft-cta-ey{font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px}.ft-cta-num{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#fff;margin-bottom:4px;letter-spacing:-0.5px}.ft-cta-hours{font-size:12px;color:rgba(255,255,255,.3);margin-bottom:18px}.ft-cta-btn{display:block;background:#22C55E;color:#09090B;padding:12px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;text-align:center;transition:background .18s;margin-bottom:8px}.ft-cta-btn:hover{background:#16A34A}.ft-cta-link{display:block;background:transparent;color:rgba(255,255,255,.45);padding:11px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:500;text-align:center;border:1px solid rgba(255,255,255,.08);transition:all .18s}.ft-cta-link:hover{border-color:rgba(255,255,255,.25);color:rgba(255,255,255,.8)}.ft-social{display:flex;gap:10px;margin-top:20px}.ft-social a{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;transition:all .18s}.ft-social a:hover{background:#22C55E;border-color:#22C55E}.ft-social svg{width:16px;height:16px;fill:rgba(255,255,255,.55);transition:fill .18s}.ft-social a:hover svg{fill:#09090B}.ft-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;padding:22px 0}.ft-copy{font-size:12px;color:rgba(255,255,255,.2)}.ft-blinks{display:flex;gap:22px;flex-wrap:wrap}.ft-blinks a{font-size:12px;color:rgba(255,255,255,.22);text-decoration:none;transition:color .15s}.ft-blinks a:hover{color:rgba(255,255,255,.6)}@media(max-width:1024px){.ft{padding:56px 20px 0}.ft-grid{grid-template-columns:1fr 1fr;gap:32px}}@media(max-width:600px){.ft-grid{grid-template-columns:1fr}.ft-bottom{flex-direction:column;align-items:flex-start}}`}</style>
      <div className="ft">
        <div className="ft-grid">
          <div>
            <Link href="/" className="ft-logo">
              <div className="ft-mark">💧</div>
              <div><div className="ft-name">Clarksville Restoration</div><div className="ft-sub">Water Damage Experts</div></div>
            </Link>
            <div className="ft-desc">Clarksville TN&apos;s premier water damage restoration service. Available 24 hours a day for any water emergency across Montgomery County and surrounding region.</div>
            <div className="ft-cl">📍 215 Legion Street, Clarksville, TN 37040</div>
            <div className="ft-cl">📞 <a href="tel:+19312712350">(931) 271-2350</a></div>
            <div className="ft-cl">✉️ waterdamageclarksville@gmail.com</div>
            <div className="ft-cl">🕐 Open 24 Hours / 7 Days a Week</div>
            <div className="ft-social">
              {socialLinks.map(s=>(
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" aria-label={s.l}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d={s.icon}/></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="ft-col-h">Services</div>
            <div className="ft-links">{svcLinks.map(l=><Link key={l.h} href={l.h}>{l.l}</Link>)}</div>
          </div>
          <div>
            <div className="ft-col-h">Service Areas</div>
            <div className="ft-links">
              {areaLinks.map(l=><Link key={l.h} href={l.h}>{l.l}</Link>)}
              <Link href="/service-areas" style={{color:"#4ADE80",fontWeight:600}}>View All →</Link>
            </div>
          </div>
          <div>
            <div className="ft-col-h">Emergency Line</div>
            <div className="ft-cta">
              <div className="ft-cta-ey">Available Now</div>
              <div className="ft-cta-num">(931) 271-2350</div>
              <div className="ft-cta-hours">Answered in under 60 seconds</div>
              <a href="tel:+19312712350" className="ft-cta-btn">📞 Call Now — 24/7</a>
              <Link href="/contact" className="ft-cta-link">Free Assessment</Link>
            </div>
          </div>
        </div>
        <div className="ft-bottom">
          <div className="ft-copy">© {new Date().getFullYear()} Clarksville Water Damage Restoration. All rights reserved.</div>
          <div className="ft-blinks">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/service-areas">Service Areas</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}