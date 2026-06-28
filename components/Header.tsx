"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PHONE = "(931) 271-2350";
const PHONE_HREF = "tel:+19312712350";

const services = [
  { l: "Emergency Water Damage", h: "/emergency-water-damage-clarksville-tn" },
  { l: "Flood Cleanup", h: "/flood-cleanup-clarksville-tn" },
  { l: "Mold Remediation", h: "/mold-remediation-clarksville-tn" },
  { l: "Structural Drying", h: "/structural-drying-clarksville-tn" },
  { l: "Sewage Backup Cleanup", h: "/services/sewage-backup-cleanup-clarksville-tn" },
  { l: "Burst Pipe Damage", h: "/services/burst-pipe-water-damage-clarksville-tn" },
  { l: "Basement Flooding", h: "/services/basement-flooding-clarksville-tn" },
  { l: "Commercial Restoration", h: "/services/commercial-water-damage-clarksville-tn" },
  { l: "Storm Damage", h: "/services/storm-damage-restoration-clarksville-tn" },
  { l: "Insurance Claims", h: "/water-damage-insurance-claim-clarksville-tn" },
  { l: "Odor Removal", h: "/water-damage-odor-removal-clarksville-tn" },
  { l: "All Services →", h: "/service-areas", special: true },
];

const areas = [
  { l: "Fort Campbell, TN", h: "/locations/fort-campbell-tn" },
  { l: "Sango, TN", h: "/locations/sango-tn" },
  { l: "St. Bethlehem, TN", h: "/locations/st-bethlehem-tn" },
  { l: "Oak Grove, KY", h: "/locations/oak-grove-ky" },
  { l: "Hopkinsville, KY", h: "/locations/hopkinsville-ky" },
  { l: "Springfield, TN", h: "/locations/springfield-tn" },
  { l: "Ashland City, TN", h: "/locations/ashland-city-tn" },
  { l: "All Areas →", h: "/service-areas", special: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  const [openDd, setOpenDd] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mob ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mob]);

  function open(id: string) { if (timer.current) clearTimeout(timer.current); setOpenDd(id); }
  function close() { timer.current = setTimeout(() => setOpenDd(null), 120); }

  return (<>
    <style>{`
      .hdr-wrap{position:sticky;top:37px;z-index:99}
      .hdr{background:rgba(9,9,11,.97);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 40px;border-bottom:1px solid rgba(255,255,255,.06);transition:box-shadow .3s}
      .hdr.sc{box-shadow:0 8px 32px rgba(0,0,0,.5)}
      .hdr-logo{display:flex;align-items:center;gap:12px;text-decoration:none;flex-shrink:0}
      .hdr-mark{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
      .hdr-name{font-size:14px;font-weight:600;color:#fff;letter-spacing:-.2px;line-height:1.2}
      .hdr-sub{font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.8px;text-transform:uppercase}
      .hdr-nav{display:flex;align-items:center;gap:2px;flex:1;justify-content:center;padding:0 24px}
      .nl{font-size:13px;font-weight:500;color:rgba(255,255,255,.6);padding:6px 12px;border-radius:6px;text-decoration:none;transition:all .15s;background:none;border:none;display:flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap;font-family:inherit}
      .nl:hover{color:#fff;background:rgba(255,255,255,.07)}
      .nl svg{width:10px;height:10px;opacity:.6;transition:transform .2s}
      .nl.dd-open svg{transform:rotate(180deg)}
      .dd-wrap{position:relative}
      .dd{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%);background:#18181B;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:8px;box-shadow:0 24px 64px rgba(0,0,0,.6);z-index:200;animation:ddIn .15s ease}
      .dd.wide{display:grid;grid-template-columns:1fr 1fr;min-width:480px}
      .dd.slim{min-width:220px}
      @keyframes ddIn{from{opacity:0;transform:translateX(-50%) translateY(-6px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
      .di{display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:6px;font-size:13px;font-weight:500;color:rgba(255,255,255,.6);text-decoration:none;transition:all .12s;white-space:nowrap}
      .di::before{content:'';width:3px;height:3px;border-radius:50%;background:rgba(74,222,128,.5);flex-shrink:0}
      .di:hover{background:rgba(74,222,128,.08);color:#fff}
      .di.sp{color:#4ADE80;font-weight:600}
      .hdr-cta{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:9px 18px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;flex-shrink:0;transition:all .2s}
      .hdr-cta:hover{background:#16A34A;box-shadow:0 4px 16px rgba(34,197,94,.3)}
      .mob-btn{display:none;background:none;border:none;padding:8px;flex-direction:column;gap:5px;cursor:pointer;margin-left:8px}
      .mob-line{display:block;width:22px;height:1.5px;background:rgba(255,255,255,.75);border-radius:2px;transition:all .25s;transform-origin:center}
      .mob-drawer{display:none;position:fixed;inset:0;top:105px;background:#09090B;z-index:98;overflow-y:auto;padding:24px 20px 40px}
      .mob-drawer.open{display:block}
      .mob-call{display:block;background:#22C55E;color:#09090B;padding:16px;border-radius:8px;text-align:center;font-weight:700;font-size:16px;text-decoration:none;margin-bottom:20px}
      .mob-sec{font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);padding:16px 0 8px}
      .mob-link{display:block;font-size:14px;font-weight:500;color:rgba(255,255,255,.6);padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);text-decoration:none}
      .mob-link:hover,.mob-link:active{color:#fff}
      @media(max-width:1100px){.hdr{padding:0 20px}.hdr-nav{display:none}.mob-btn{display:flex}}
      @media(max-width:480px){.hdr-sub{display:none}}
    `}</style>

    <div className="hdr-wrap">
      <header className={`hdr${scrolled ? " sc" : ""}`} role="banner" suppressHydrationWarning>
        <Link href="/" className="hdr-logo" aria-label="Clarksville Water Damage Restoration — Home">
          <div className="hdr-mark" aria-hidden="true">💧</div>
          <div>
            <div className="hdr-name">Clarksville Restoration</div>
            <div className="hdr-sub">Water Damage Experts</div>
          </div>
        </Link>

        <nav className="hdr-nav" aria-label="Main navigation">
          <Link href="/" className="nl">Home</Link>

          <div className="dd-wrap" onMouseEnter={() => open("svc")} onMouseLeave={close}>
            <button className={`nl${openDd === "svc" ? " dd-open" : ""}`} aria-haspopup="true" aria-expanded={openDd === "svc"}>
              Services
              <svg viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {openDd === "svc" && (
              <div className="dd wide" role="menu">
                {services.map(s => (
                  <Link key={s.h} href={s.h} className={`di${s.special ? " sp" : ""}`} role="menuitem" onClick={() => setOpenDd(null)}>{s.l}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="dd-wrap" onMouseEnter={() => open("area")} onMouseLeave={close}>
            <button className={`nl${openDd === "area" ? " dd-open" : ""}`} aria-haspopup="true" aria-expanded={openDd === "area"}>
              Service Areas
              <svg viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {openDd === "area" && (
              <div className="dd slim" role="menu">
                {areas.map(a => (
                  <Link key={a.h} href={a.h} className={`di${a.special ? " sp" : ""}`} role="menuitem" onClick={() => setOpenDd(null)}>{a.l}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="nl">About</Link>
          <Link href="/blog" className="nl">Blog</Link>
          <Link href="/faq" className="nl">FAQ</Link>
          <Link href="/contact" className="nl">Contact</Link>
        </nav>

        <a href={PHONE_HREF} className="hdr-cta" aria-label={`Call ${PHONE} for emergency water damage restoration`}>
          📞 {PHONE}
        </a>

        <button className="mob-btn" onClick={() => setMob(m => !m)} aria-label="Toggle menu" aria-expanded={mob} type="button">
          <span className="mob-line" style={mob ? { transform: "rotate(45deg) translate(4.5px,4.5px)" } : {}} />
          <span className="mob-line" style={mob ? { opacity: 0 } : {}} />
          <span className="mob-line" style={mob ? { transform: "rotate(-45deg) translate(4.5px,-4.5px)" } : {}} />
        </button>
      </header>
    </div>

    <div className={`mob-drawer${mob ? " open" : ""}`} role="dialog" aria-label="Mobile navigation">
      <a href={PHONE_HREF} className="mob-call" onClick={() => setMob(false)}>📞 {PHONE} — Call Now</a>
      <div className="mob-sec">Menu</div>
      {[{l:"Home",h:"/"},{l:"About",h:"/about"},{l:"Blog",h:"/blog"},{l:"FAQ",h:"/faq"},{l:"Contact",h:"/contact"},{l:"Service Areas",h:"/service-areas"}].map(({l,h})=>(
        <Link key={h} href={h} className="mob-link" onClick={() => setMob(false)}>{l}</Link>
      ))}
      <div className="mob-sec">Services</div>
      {services.filter(s=>!s.special).map(s=><Link key={s.h} href={s.h} className="mob-link" onClick={()=>setMob(false)}>{s.l}</Link>)}
      <div className="mob-sec">Service Areas</div>
      {areas.filter(a=>!a.special).map(a=><Link key={a.h} href={a.h} className="mob-link" onClick={()=>setMob(false)}>{a.l}</Link>)}
    </div>
  </>);
}
