import Link from "next/link";
interface PageHeroProps {
  eyebrow?:string; title:string; accent?:string; subtitle?:string;
  image?:string; imageFocus?:string;
  breadcrumbs?:{label:string;href?:string}[];
  stat1?:string;stat1Sub?:string;stat2?:string;stat2Sub?:string;stat3?:string;stat3Sub?:string;
  cta1?:string;cta2?:string;
}
export default function PageHero({eyebrow,title,accent,subtitle,image,imageFocus="center 40%",breadcrumbs,stat1,stat1Sub,stat2,stat2Sub,stat3,stat3Sub}:PageHeroProps){
  const bg=image||"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80";
  return(<>
    <style>{`.ph{position:relative;overflow:hidden;min-height:min(88vh,660px);display:flex;flex-direction:column;justify-content:flex-end}.ph-bg{position:absolute;inset:0;background-size:cover;background-repeat:no-repeat}.ph-ov1{position:absolute;inset:0;background:linear-gradient(to right,rgba(9,9,11,0.94) 0%,rgba(9,9,11,0.94) 38%,rgba(9,9,11,0.6) 65%,rgba(9,9,11,0.25) 100%)}.ph-ov2{position:absolute;inset:0;background:linear-gradient(to top,rgba(9,9,11,0.82) 0%,transparent 55%)}.ph-content{position:relative;z-index:1;max-width:1240px;margin:0 auto;width:100%;padding:80px 40px 64px}.ph-bc{display:flex;align-items:center;gap:6px;margin-bottom:22px;flex-wrap:wrap}.ph-bc a{font-family:var(--font-inter);font-size:11px;font-weight:500;color:rgba(255,255,255,.35);text-decoration:none;letter-spacing:.4px;transition:color .15s}.ph-bc a:hover{color:rgba(255,255,255,.7)}.ph-bc-sep{font-size:11px;color:rgba(255,255,255,.15)}.ph-bc-cur{font-family:var(--font-inter);font-size:11px;font-weight:500;color:rgba(255,255,255,.5)}.ph-ey{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-inter);font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#4ADE80;margin-bottom:16px}.ph-ey-dot{width:5px;height:5px;border-radius:50%;background:#4ADE80;animation:phdot 2s ease-in-out infinite;flex-shrink:0}@keyframes phdot{0%,100%{opacity:1}50%{opacity:.3}}.ph-h1{font-family:var(--font-cormorant);font-size:clamp(36px,5.5vw,70px);font-weight:700;color:#fff;line-height:1.0;letter-spacing:-1.5px;margin-bottom:18px;max-width:760px}.ph-h1-acc{color:#4ADE80;font-style:italic;display:block}.ph-sub{font-family:var(--font-inter);font-size:clamp(14px,1.6vw,17px);line-height:1.72;color:rgba(255,255,255,.62);max-width:580px;margin-bottom:34px;font-weight:400}.ph-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:48px}.ph-btn1{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:14px 26px;border-radius:6px;font-family:var(--font-inter);font-size:14px;font-weight:700;text-decoration:none;transition:all .2s;white-space:nowrap}.ph-btn1:hover{background:#16A34A;box-shadow:0 6px 20px rgba(34,197,94,.35);transform:translateY(-1px)}.ph-btn2{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.07);color:rgba(255,255,255,.85);padding:13px 22px;border-radius:6px;font-family:var(--font-inter);font-size:14px;font-weight:500;text-decoration:none;border:1px solid rgba(255,255,255,.18);transition:all .2s;white-space:nowrap}.ph-btn2:hover{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.4)}.ph-stats{display:flex;gap:0;border-top:1px solid rgba(255,255,255,.08);padding-top:30px;flex-wrap:wrap;row-gap:20px}.ph-stat{padding-right:32px;border-right:1px solid rgba(255,255,255,.08)}.ph-stat:last-child{border-right:none;padding-right:0}.ph-stat-n{font-family:var(--font-cormorant);font-size:clamp(28px,3.5vw,40px);font-weight:700;color:#fff;line-height:1}.ph-stat-l{font-family:var(--font-inter);font-size:11px;font-weight:500;color:rgba(255,255,255,.38);margin-top:5px;letter-spacing:.3px}@media(max-width:768px){.ph{min-height:auto}.ph-ov1{background:rgba(9,9,11,.90)}.ph-content{padding:72px 20px 52px}.ph-btns{flex-direction:column;align-items:flex-start}.ph-stats{row-gap:18px}.ph-stat{border-right:none;padding-right:24px}}`}</style>
    <section className="ph">
      <div className="ph-bg" style={{backgroundImage:`url(${bg})`,backgroundPosition:imageFocus}}/>
      <div className="ph-ov1"/><div className="ph-ov2"/>
      <div className="ph-content">
        {breadcrumbs&&(
          <nav className="ph-bc" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumbs.map((b,i)=>(<span key={i} style={{display:"contents"}}><span className="ph-bc-sep">/</span>{b.href?<Link href={b.href}>{b.label}</Link>:<span className="ph-bc-cur">{b.label}</span>}</span>))}
          </nav>
        )}
        {eyebrow&&<div className="ph-ey"><span className="ph-ey-dot"/>{eyebrow}</div>}
        <h1 className="ph-h1">{title}{accent&&<span className="ph-h1-acc">{accent}</span>}</h1>
        {subtitle&&<p className="ph-sub">{subtitle}</p>}
        <div className="ph-btns">
          <a href="tel:+19312712350" className="ph-btn1">📞 Call (931) 271-2350</a>
          <a href="/contact" className="ph-btn2">Free Assessment →</a>
        </div>
        {(stat1||stat2||stat3)&&(
          <div className="ph-stats">
            {stat1&&<div className="ph-stat"><div className="ph-stat-n">{stat1}</div><div className="ph-stat-l">{stat1Sub}</div></div>}
            {stat2&&<div className="ph-stat"><div className="ph-stat-n">{stat2}</div><div className="ph-stat-l">{stat2Sub}</div></div>}
            {stat3&&<div className="ph-stat"><div className="ph-stat-n">{stat3}</div><div className="ph-stat-l">{stat3Sub}</div></div>}
          </div>
        )}
      </div>
    </section>
  </>);
}
