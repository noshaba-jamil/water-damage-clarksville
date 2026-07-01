import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Water Damage Restoration Clarksville TN | 24/7 Emergency Response",
  description: "Clarksville TN water damage restoration. 60-min guaranteed arrival, 24/7. Expert flood cleanup, mold remediation & structural drying. All insurance accepted. Free assessment — call (931) 271-2350.",
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How fast can you respond to water damage in Clarksville TN?", acceptedAnswer: { "@type": "Answer", text: "We guarantee 60-minute on-site arrival anywhere in Clarksville TN and Montgomery County, 24/7/365. A real expert answers your call in under 60 seconds." } },
    { "@type": "Question", name: "Do you work with homeowners insurance for water damage in Tennessee?", acceptedAnswer: { "@type": "Answer", text: "Yes. We work directly with USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, and all major carriers. We handle full documentation, adjuster coordination, and direct billing." } },
    { "@type": "Question", name: "How much does water damage restoration cost in Clarksville TN?", acceptedAnswer: { "@type": "Answer", text: "Costs range from $1,300–$5,400 for minor events to $15,000–$40,000+ for major structural damage. The average Tennessee insurance claim is $12,473. Free inspection — call (931) 271-2350." } },
    { "@type": "Question", name: "Will mold grow after water damage in Clarksville?", acceptedAnswer: { "@type": "Answer", text: "Yes — in Clarksville's humid subtropical climate, mold can begin growing within 24–48 hours of any water event. Immediate professional extraction and structural drying is critical." } },
    { "@type": "Question", name: "Do you serve Fort Campbell military families?", acceptedAnswer: { "@type": "Answer", text: "Yes. Fort Campbell is within our primary service area. We are experienced USAA preferred vendors and serve military families daily with deployment-aware scheduling." } },
  ],
};

const HERO = "https://morris-and-passaic-counties.pauldavis.com/wp-content/uploads/sites/165/2024/12/Water-Damage-Picture.jpg";
const IMGS = {
  svc1:"https://qrrestore.com/wp-content/uploads/2026/04/water-damage-qrr-2.png",
  svc2:"https://killeentxwaterdamage.com/wp-content/uploads/2026/06/Professional-Water-Damage-Restoration-Technicians-Extracting-Floodwater-from-Residential-Living-Room-1-1024x576.png",
  svc3:"https://ik.imagekit.io/4wu305uo4/image_0tNfShL-R.jpg",
  svc4:"https://dlczb9lfz9r73.cloudfront.net/wp-content/uploads/2023/01/13160310/AdobeStock_1049719901.jpeg",
  svc5:" https://kmrdpartners.com/wp-content/uploads/2017/10/KMRD-Claims-Management.jpg",
  svc6:"https://www.bmscat.com/wp-content/uploads/2021/06/Commercial-Water-Damage.png",
  why:"https://lamunyon.com/wp-content/uploads/2021/04/Cat-3-Sewer-Water-Damage-Restoration.jpg",
  cta:"https://upperrestoration.com/wp-content/uploads/2026/03/ur-1617-diy-water-damage-restoration-pros-cons-and-best-pr-1024x559.webp",
};

const services = [
  { img:IMGS.svc1, tag:"EMERGENCY", title:"Emergency Water Damage Restoration", desc:"24/7 rapid response to any water emergency. IICRC-certified team on-site within 60 minutes of your call anywhere in Montgomery County.", href:"/emergency-water-damage-clarksville-tn", alt:"Emergency water damage restoration team responding to flooded property in Clarksville TN" },
  { img:IMGS.svc2, tag:"EXTRACTION", title:"Flood Cleanup & Water Extraction", desc:"Industrial truck-mounted extraction removes thousands of gallons fast, stopping secondary damage and mold growth before they start.", href:"/flood-cleanup-clarksville-tn", alt:"Professional flood cleanup and water extraction equipment in Clarksville TN home" },
  { img:IMGS.svc3, tag:"DRYING", title:"Structural Drying & Dehumidification", desc:"IICRC S500-compliant structural drying with daily moisture monitoring until every wall, floor, and subfloor reaches certified safe levels.", href:"/structural-drying-clarksville-tn", alt:"Industrial structural drying equipment in water-damaged Clarksville home" },
  { img:IMGS.svc4, tag:"REMEDIATION", title:"Mold Remediation & Removal", desc:"Safe, thorough mold removal with containment barriers and HEPA air filtration. IICRC AMRT-certified to protect your family's health.", href:"/mold-remediation-clarksville-tn", alt:"IICRC-certified mold remediation professional in Clarksville TN home" },
  { img:IMGS.svc5, tag:"INSURANCE", title:"Insurance Claim Management", desc:"Complete insurance claim handling — documentation, adjuster coordination, and direct billing. You pay only your deductible.", href:"/water-damage-insurance-claim-clarksville-tn", alt:"Water damage insurance claim documentation in Tennessee" },
  { img:IMGS.svc6, tag:"COMMERCIAL", title:"Commercial Water Damage Restoration", desc:"Minimizing business downtime with fast, professional-grade commercial restoration for offices, retail, and industrial properties.", href:"/services/commercial-water-damage-clarksville-tn", alt:"Commercial water damage restoration for Clarksville TN business property" },
];

const whyItems = [
  { n:"01", t:"Locally Based — Not a National Franchise", b:"Our team is stationed in Clarksville, not dispatched from a distant call center. We know Montgomery County's infrastructure, climate, and neighborhoods intimately." },
  { n:"02", t:"60-Minute Guaranteed Arrival — Any Time", b:"We guarantee on-site arrival within 60 minutes to any property in our service area, 24 hours a day. This is a commitment, not an estimate." },
  { n:"03", t:"Complete Insurance Claim Management", b:"We handle every aspect of your claim — moisture documentation, adjuster coordination, and direct billing for USAA, State Farm, Allstate, and all major carriers." },
  { n:"04", t:"Fort Campbell Military Family Specialists", b:"We serve Fort Campbell military families daily, with deep expertise in USAA claims processing, deployment-aware scheduling, and on-base property protocols." },
];

const steps = [
  { n:"01", t:"You Call — Expert Answers Immediately", b:"A real certified expert answers in under 60 seconds, any time of day or night. No voicemail. No call center. We dispatch your team immediately." },
  { n:"02", t:"We Arrive Within 60 Minutes", b:"Fully equipped team on-site within 60 minutes — industrial pumps, extractors, moisture meters, and drying equipment ready to deploy immediately." },
  { n:"03", t:"Assessment, Documentation & Claim Opening", b:"Complete thermal imaging moisture mapping. Your insurance claim documentation begins the moment we arrive on-site." },
  { n:"04", t:"Full Restoration — Pre-Damage Condition", b:"Extraction, structural drying, antimicrobial treatment, and final restoration. Your home returned to verified pre-damage condition." },
];

const reviews = [
  { q:"When our basement flooded at 2am, they were on-site in 40 minutes. Handled everything with State Farm directly. Could not have asked for a better team.", n:"Jennifer M.", l:"Sango, TN", init:"J" },
  { q:"The most professional restoration service I've encountered. Meticulous USAA documentation, fast claim settlement. Highest possible recommendation.", n:"Staff Sgt. Robert K.", l:"Fort Campbell, KY", init:"R" },
  { q:"Used thermal imaging cameras to find moisture hidden in our walls. Completely dried and verified. Zero mold issues eight months later. Outstanding work.", n:"Marcus T.", l:"St. Bethlehem, TN", init:"M" },
];

const locs = [
  {l:"Fort Campbell, TN",h:"/locations/fort-campbell-tn"},{l:"Sango, TN",h:"/locations/sango-tn"},
  {l:"St. Bethlehem, TN",h:"/locations/st-bethlehem-tn"},{l:"Oak Grove, KY",h:"/locations/oak-grove-ky"},
  {l:"Hopkinsville, KY",h:"/locations/hopkinsville-ky"},{l:"Springfield, TN",h:"/locations/springfield-tn"},
  {l:"Ashland City, TN",h:"/locations/ashland-city-tn"},{l:"Dover, TN",h:"/locations/dover-tn"},
  {l:"Dickson, TN",h:"/locations/dickson-tn"},{l:"Woodlawn, TN",h:"/locations/woodlawn-tn"},
  {l:"Palmyra, TN",h:"/locations/palmyra-tn"},{l:"Pembroke, KY",h:"/locations/pembroke-ky"},
];

const faqs = [
  { q:"How fast can you respond to water damage emergencies in Clarksville TN?", a:"We guarantee 60-minute on-site arrival anywhere in Clarksville TN and Montgomery County, 24/7/365 — including holidays. A real expert answers your call in under 60 seconds." },
  { q:"Do you work with homeowners insurance for water damage claims?", a:"Yes. We work directly with USAA, State Farm, Allstate, Farmers, Liberty Mutual, Nationwide, and all major carriers. We handle full documentation, adjuster coordination, and direct billing." },
  { q:"How much does water damage restoration cost in Clarksville TN?", a:"Costs range from $1,300–$5,400 for minor events to $15,000–$40,000+ for major structural damage. We provide a free inspection and detailed estimate before any work begins." },
  { q:"Will mold grow after water damage in my Clarksville home?", a:"In Clarksville's humid subtropical climate, mold can begin growing within 24–48 hours. Our team applies antimicrobial treatments on every job from Day 1 to prevent growth." },
  { q:"Do you offer 24/7 water damage restoration services?", a:"Yes. Our Clarksville team is available 24/7/365 — including nights, weekends, and all holidays. Call (931) 271-2350 anytime and a real restoration professional answers immediately." },
];

export default function HomePage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
    <style>{`
      .hero{position:relative;min-height:100svh;display:flex;align-items:center;overflow:hidden}
      .hero-img{position:absolute;inset:0;background-image:url('${HERO}');background-size:cover;background-position:center 35%;background-color:#09090B;will-change:auto}
      .hero-ov{position:absolute;inset:0;background:linear-gradient(110deg,rgba(9,9,11,.96) 38%,rgba(9,9,11,.6) 65%,rgba(9,9,11,.25) 100%)}
      .hero-in{position:relative;z-index:1;max-width:1240px;margin:0 auto;width:100%;padding:0 40px;display:grid;grid-template-columns:1fr 400px;gap:56px;align-items:center}
      .h-badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(74,222,128,.25);background:rgba(74,222,128,.06);border-radius:100px;padding:6px 16px;margin-bottom:28px}
      .h-dot{width:6px;height:6px;border-radius:50%;background:#4ADE80;animation:hbp 1.8s infinite;flex-shrink:0}
      @keyframes hbp{0%,100%{opacity:1}50%{opacity:.3}}
      .h-badge-t{font-family:var(--font-inter);font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80}
      .h1{font-family:var(--font-cormorant);font-size:clamp(48px,6vw,80px);font-weight:700;color:#fff;line-height:1.0;letter-spacing:-2px;margin-bottom:8px}
      .h1-sub{font-family:var(--font-cormorant);font-size:clamp(48px,6vw,80px);font-weight:700;color:#4ADE80;font-style:italic;line-height:1.0;letter-spacing:-2px;margin-bottom:28px;display:block}
      .h-desc{font-family:var(--font-inter);font-size:clamp(15px,1.8vw,17px);line-height:1.75;color:rgba(255,255,255,.62);max-width:500px;margin-bottom:40px}
      .h-desc strong{color:rgba(255,255,255,.9);font-weight:600}
      .h-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:52px}
      .btn-g{display:inline-flex;align-items:center;gap:9px;background:#22C55E;color:#09090B;padding:15px 28px;border-radius:6px;font-family:var(--font-inter);font-size:14px;font-weight:700;text-decoration:none;transition:all .2s;white-space:nowrap}
      .btn-g:hover{background:#16A34A;box-shadow:0 6px 24px rgba(34,197,94,.35);transform:translateY(-1px)}
      .btn-w{display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.07);color:rgba(255,255,255,.85);padding:14px 24px;border-radius:6px;font-family:var(--font-inter);font-size:14px;font-weight:500;text-decoration:none;border:1px solid rgba(255,255,255,.18);transition:all .2s;white-space:nowrap}
      .btn-w:hover{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.4)}
      .h-stats{display:flex;border-top:1px solid rgba(255,255,255,.08);padding-top:40px;flex-wrap:wrap;gap:28px}
      .hs{padding-right:32px;border-right:1px solid rgba(255,255,255,.08)}
      .hs:last-child{border-right:none;padding-right:0}
      .hs-n{font-family:var(--font-cormorant);font-size:clamp(34px,4vw,46px);font-weight:700;color:#fff;line-height:1}
      .hs-l{font-family:var(--font-inter);font-size:11px;font-weight:500;color:rgba(255,255,255,.4);margin-top:5px;letter-spacing:.3px}
      .hp-form{background:rgba(24,24,27,.85);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:32px 28px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)}
      .hf-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:6px;display:block}
      .hf-t{font-family:var(--font-cormorant);font-size:24px;font-weight:700;color:#fff;line-height:1.1;letter-spacing:-.5px;margin-bottom:4px}
      .hf-s{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.35);margin-bottom:22px}
      .hf-f{margin-bottom:10px}
      .hf-f input,.hf-f select,.hf-f textarea{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#fff;font-family:var(--font-inter);font-size:13.5px;padding:11px 13px;outline:none;transition:border-color .2s;-webkit-appearance:none}
      .hf-f input::placeholder,.hf-f textarea::placeholder{color:rgba(255,255,255,.25)}
      .hf-f input:focus,.hf-f select:focus,.hf-f textarea:focus{border-color:#22C55E}
      .hf-f select option{background:#18181B;color:#fff}
      .hf-f textarea{height:64px;resize:none}
      .hf-sub{width:100%;background:#22C55E;color:#09090B;border:none;border-radius:6px;padding:13px;font-family:var(--font-inter);font-size:14px;font-weight:700;cursor:pointer;transition:background .2s;margin-top:4px}
      .hf-sub:hover{background:#16A34A}
      .hf-note{font-family:var(--font-inter);font-size:11px;color:rgba(255,255,255,.2);text-align:center;margin-top:10px}
      .hf-note a{color:rgba(74,222,128,.6)}
      .ticker{background:#18181B;border-top:1px solid rgba(255,255,255,.05);overflow:hidden;padding:13px 0;white-space:nowrap}
      .ticker-track{display:inline-flex;animation:tick 28s linear infinite}
      @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      .ticker-item{display:inline-flex;align-items:center;gap:16px;padding:0 24px;font-family:var(--font-inter);font-size:12px;font-weight:500;color:rgba(255,255,255,.35);letter-spacing:.5px}
      .ticker-dot{width:3px;height:3px;border-radius:50%;background:rgba(74,222,128,.5);flex-shrink:0}
      .sec{padding:96px 0}
      .sec-surf{background:#F9FAFB}
      .sec-dark{background:#18181B}
      .sec-head{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:end;margin-bottom:48px}
      .eyebrow{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-inter);font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#22C55E;margin-bottom:12px}
      .eyebrow-dot{width:5px;height:5px;border-radius:50%;background:#22C55E;flex-shrink:0}
      .display-h{font-family:var(--font-cormorant);font-size:clamp(32px,4vw,52px);font-weight:700;color:#09090B;line-height:1.05;letter-spacing:-1.2px}
      .display-h.light{color:#fff}
      .body-t{font-family:var(--font-inter);font-size:clamp(14px,1.5vw,16px);line-height:1.75;color:#52525B}
      .body-t.light{color:rgba(255,255,255,.55)}
      .svc-grid{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#E4E4E7;border:1px solid #E4E4E7;border-radius:8px;overflow:hidden}
      .svc-card{background:#fff;display:flex;flex-direction:column;text-decoration:none;transition:box-shadow .25s;overflow:hidden}
      .svc-card:hover{box-shadow:inset 0 0 0 2px #22C55E}
      .svc-img{height:200px;overflow:hidden;flex-shrink:0}
      .svc-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.4,0,.2,1);display:block}
      .svc-card:hover .svc-img img{transform:scale(1.05)}
      .svc-body{padding:24px 24px 28px;display:flex;flex-direction:column;flex:1}
      .svc-tag{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;color:#16A34A;margin-bottom:8px}
      .svc-title{font-family:var(--font-cormorant);font-size:22px;font-weight:700;color:#09090B;margin-bottom:8px;letter-spacing:-.3px}
      .svc-desc{font-family:var(--font-inter);font-size:13.5px;line-height:1.65;color:#52525B;flex:1}
      .svc-arr{font-family:var(--font-inter);font-size:13px;font-weight:600;color:#09090B;margin-top:16px;display:flex;align-items:center;gap:6px;transition:gap .2s}
      .svc-card:hover .svc-arr{gap:10px;color:#16A34A}
      .svc-arr::after{content:"→"}
      .emg{background:#18181B;padding:80px 0}
      .emg-in{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
      .emg-row{display:flex;gap:20px;padding:20px 0;border-bottom:1px solid rgba(255,255,255,.06)}
      .emg-row:first-child{padding-top:0}
      .emg-row:last-child{border-bottom:none}
      .emg-time{font-family:var(--font-cormorant);font-size:16px;font-weight:700;color:#4ADE80;min-width:100px;flex-shrink:0;line-height:1.5;padding-top:2px}
      .emg-risk{font-family:var(--font-inter);font-size:13.5px;line-height:1.65;color:rgba(255,255,255,.5)}
      .why-in{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
      .why-img{width:100%;height:520px;object-fit:cover;border-radius:8px;display:block}
      .why-img-wrap{position:relative}
      .why-badge{position:absolute;bottom:-20px;right:-20px;background:#18181B;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:20px 24px}
      .why-badge-n{font-family:var(--font-cormorant);font-size:40px;font-weight:700;color:#4ADE80;line-height:1}
      .why-badge-l{font-family:var(--font-inter);font-size:11px;color:rgba(255,255,255,.4);margin-top:5px}
      .why-list{display:flex;flex-direction:column}
      .why-item{display:flex;gap:20px;padding:22px 0;border-bottom:1px solid #E4E4E7}
      .why-item:first-of-type{padding-top:0}
      .why-item:last-child{border-bottom:none}
      .why-n{font-family:var(--font-cormorant);font-size:13px;font-weight:700;color:#16A34A;flex-shrink:0;min-width:28px;padding-top:3px}
      .why-tit{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B;margin-bottom:5px}
      .why-bod{font-family:var(--font-inter);font-size:13.5px;line-height:1.7;color:#52525B}
      .proc-grid{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#E4E4E7;border:1px solid #E4E4E7;border-radius:8px;overflow:hidden}
      .proc-card{background:#fff;padding:36px 28px;position:relative}
      .proc-card-bg-n{position:absolute;top:20px;right:20px;font-family:var(--font-cormorant);font-size:56px;font-weight:700;color:#F9FAFB;line-height:1;pointer-events:none;user-select:none}
      .proc-step-tag{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;color:#16A34A;margin-bottom:16px}
      .proc-title{font-family:var(--font-cormorant);font-size:22px;font-weight:700;color:#09090B;margin-bottom:10px;letter-spacing:-.3px}
      .proc-body{font-family:var(--font-inter);font-size:13.5px;line-height:1.7;color:#52525B}
      .rev-in{max-width:1240px;margin:0 auto;padding:0 40px}
      .rev-top{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:48px;flex-wrap:wrap;gap:20px}
      .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.06);border-radius:8px;overflow:hidden}
      .rev-card{background:#18181B;padding:36px 30px}
      .rev-stars{display:flex;gap:3px;margin-bottom:18px}
      .rev-star{color:#F59E0B;font-size:14px}
      .rev-q{font-family:var(--font-cormorant);font-size:17px;line-height:1.7;color:rgba(255,255,255,.72);margin-bottom:24px;font-style:italic}
      .rev-q::before{content:'"'}.rev-q::after{content:'"'}
      .rev-auth{display:flex;align-items:center;gap:13px}
      .rev-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-family:var(--font-inter);font-weight:700;font-size:15px;color:#fff;flex-shrink:0}
      .rev-name{font-family:var(--font-inter);font-size:13.5px;font-weight:600;color:#fff}
      .rev-loc{font-family:var(--font-inter);font-size:11.5px;color:rgba(255,255,255,.3);margin-top:2px}
      .loc-top{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:end;margin-bottom:44px}
      .loc-grid{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
      .loc-card{display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid #E4E4E7;border-radius:6px;padding:14px 18px;font-family:var(--font-inter);font-size:13.5px;font-weight:500;color:#52525B;text-decoration:none;transition:all .18s}
      .loc-card:hover{border-color:#22C55E;color:#16A34A;background:#F0FDF4}
      .loc-arr{font-size:12px;color:#D1D5DB;transition:color .18s;flex-shrink:0}
      .loc-card:hover .loc-arr{color:#22C55E}
      .faq-sec{padding:96px 0;background:#fff}
      .faq-inner{max-width:820px;margin:0 auto;padding:0 40px}
      .faq-head{text-align:center;margin-bottom:52px}
      .faq-item{border-bottom:1px solid #E4E4E7}
      .faq-q{font-family:var(--font-inter);font-size:16px;font-weight:600;color:#09090B;padding:22px 0;cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px}
      .faq-q::-webkit-details-marker{display:none}
      .faq-q::after{content:"+";font-size:20px;font-weight:300;color:#9CA3AF;flex-shrink:0;transition:transform .2s}
      details[open] .faq-q::after{transform:rotate(45deg)}
      .faq-a{font-family:var(--font-inter);font-size:14.5px;line-height:1.78;color:#52525B;padding-bottom:22px}
      .fcta-in{max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 480px;gap:72px;align-items:center}
      .fcta-img-wrap{position:relative;height:540px;border-radius:8px;overflow:hidden;flex-shrink:0}
      .fcta-img{width:100%;height:100%;object-fit:cover;display:block}
      .fcta-img-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(9,9,11,.7) 0%,transparent 55%)}
      .fcta-badge{position:absolute;bottom:24px;left:24px;background:rgba(9,9,11,.88);border:1px solid rgba(74,222,128,.2);border-radius:6px;padding:18px 22px;backdrop-filter:blur(8px)}
      .fcta-badge-n{font-family:var(--font-cormorant);font-size:28px;font-weight:700;color:#4ADE80;line-height:1;letter-spacing:-.5px}
      .fcta-badge-l{font-family:var(--font-inter);font-size:11px;color:rgba(255,255,255,.4);margin-top:4px}
      .fcta-h2{font-family:var(--font-cormorant);font-size:clamp(32px,4vw,52px);font-weight:700;color:#09090B;line-height:1.05;letter-spacing:-1.2px;margin-bottom:18px}
      .fcta-h2 em{color:#16A34A;font-style:italic}
      .fcta-p{font-family:var(--font-inter);font-size:clamp(14px,1.5vw,16px);line-height:1.75;color:#52525B;margin-bottom:32px}
      .fcta-btns{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
      .fcta-btn1{display:flex;align-items:center;justify-content:center;gap:9px;background:#22C55E;color:#09090B;padding:16px;border-radius:6px;font-family:var(--font-inter);font-size:15px;font-weight:700;text-decoration:none;transition:all .2s}
      .fcta-btn1:hover{background:#16A34A;box-shadow:0 6px 24px rgba(34,197,94,.35);transform:translateY(-1px)}
      .fcta-btn2{display:flex;align-items:center;justify-content:center;gap:9px;background:transparent;color:#09090B;padding:14px;border-radius:6px;font-family:var(--font-inter);font-size:14px;font-weight:500;text-decoration:none;border:1px solid #E4E4E7;transition:all .2s}
      .fcta-btn2:hover{border-color:#52525B}
      .fcta-note{font-family:var(--font-inter);font-size:12px;color:#9CA3AF;line-height:1.6}
      .mob-sticky{display:none;position:fixed;bottom:0;left:0;right:0;z-index:200;box-shadow:0 -4px 20px rgba(0,0,0,.15)}
      @media(max-width:768px){.mob-sticky{display:grid;grid-template-columns:1fr 1fr}}
      .mob-sticky a{display:block;padding:17px;text-align:center;font-family:var(--font-inter);font-weight:700;font-size:14px;text-decoration:none}
      @media(max-width:1024px){
        .hero-in,.sec-head,.svc-grid,.emg-in,.why-in,.proc-grid,.rev-in,.loc-top,.loc-grid,.fcta-in{grid-template-columns:1fr!important}
        .hero-in,.sec-head,.svc-grid,.emg-in,.why-in,.proc-grid,.rev-in,.loc-top,.loc-grid,.fcta-in,.faq-inner{padding-left:20px!important;padding-right:20px!important}
        .hp-form,.fcta-img-wrap,.why-badge{display:none}
        .hero{min-height:auto;padding:100px 0 72px}
        .sec,.emg{padding:64px 0!important}
        .rev-grid{grid-template-columns:1fr!important}
      }
      @media(max-width:640px){
        .h-stats{flex-direction:column;gap:20px}
        .hs{border-right:none;padding-right:0}
        .h-btns,.fcta-btns{flex-direction:column;align-items:stretch}
        .proc-grid,.svc-grid{grid-template-columns:1fr!important}
        .loc-grid{grid-template-columns:1fr 1fr!important}
        .sec{padding:52px 0!important}
      }
    `}</style>

    {/* HERO */}
    <section className="hero" aria-label="Water damage restoration emergency service Clarksville TN">
      <div className="hero-img" role="img" aria-label="Water damage restoration professionals in Clarksville TN"/>
      <div className="hero-ov"/>
      <div className="hero-in">
        <div>
          <div className="h-badge"><span className="h-dot" aria-hidden="true"/><span className="h-badge-t">Emergency Response Active — Clarksville TN</span></div>
          <h1 className="h1">Water Damage<span className="h1-sub">Restoration Clarksville TN</span></h1>
          <p className="h-desc">Clarksville&apos;s most trusted restoration team. <strong>60-minute guaranteed arrival</strong> anywhere in Montgomery County — 24 hours a day, every day of the year. All insurance accepted.</p>
          <div className="h-btns">
            <a href="tel:+19312712350" className="btn-g" aria-label="Call now for emergency water damage restoration">📞 (931) 271-2350 — Call Now</a>
            <a href="/contact" className="btn-w" aria-label="Request free water damage assessment">Free Assessment →</a>
          </div>
          <div className="h-stats" aria-label="Service statistics">
            <div className="hs"><div className="hs-n">60<span style={{fontSize:"clamp(18px,2vw,22px)",fontFamily:"var(--font-inter)",fontWeight:400}}>min</span></div><div className="hs-l">Guaranteed Arrival</div></div>
            <div className="hs"><div className="hs-n">24/7</div><div className="hs-l">Always Available</div></div>
            <div className="hs"><div className="hs-n">500+</div><div className="hs-l">Homes Restored</div></div>
          </div>
        </div>
        <div className="hp-form" role="complementary" aria-label="Emergency assessment request form">
          <span className="hf-ey">Free Assessment</span>
          <div className="hf-t">Get Emergency Help</div>
          <div className="hf-s">We respond within 15 minutes. Emergencies answered immediately.</div>
          <div className="hf-f"><input type="text" placeholder="Your full name" aria-label="Your full name" autoComplete="name"/></div>
          <div className="hf-f"><input type="tel" placeholder="Phone number" aria-label="Your phone number" autoComplete="tel"/></div>
          <div className="hf-f"><select aria-label="Type of water damage"><option value="">Type of damage</option><option value="water-damage">Water Damage</option><option value="flood">Flood</option><option value="mold">Mold</option><option value="sewage">Sewage Backup</option><option value="storm">Storm Damage</option></select></div>
          <div className="hf-f"><select aria-label="Urgency"><option value="emergency">🚨 Emergency — Happening Now</option><option value="24hours">Within 24 Hours</option><option value="scheduling">Scheduling Future Work</option></select></div>
          <div className="hf-f"><textarea placeholder="Brief description..." aria-label="Brief description of water damage"/></div>
          <button className="hf-sub" type="submit">Request Emergency Help →</button>
          <div className="hf-note">Or call: <a href="tel:+19312712350">(931) 271-2350</a></div>
        </div>
      </div>
    </section>

    {/* TICKER */}
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...Array(2)].map((_,ri)=>["24/7 Emergency Response","60-Min Guaranteed Arrival","Water Extraction Clarksville TN","Structural Drying","Mold Remediation","Sewage Cleanup","Storm Damage Restoration","Insurance Claim Assistance","Fort Campbell Military Specialists","Montgomery County TN"].map((item,i)=>(
          <span key={`${ri}-${i}`} className="ticker-item">{item}<span className="ticker-dot"/></span>
        )))}
      </div>
    </div>

    {/* SERVICES */}
    <section className="sec" aria-labelledby="services-heading">
      <div className="sec-head">
        <div><div className="eyebrow"><span className="eyebrow-dot" aria-hidden="true"/>Our Services</div><h2 className="display-h" id="services-heading">Water Damage Restoration Services in Clarksville TN</h2></div>
        <div><p className="body-t" style={{marginBottom:24}}>From the first call to the final walk-through, our IICRC-certified team handles every aspect of your water damage restoration with precision and care throughout Clarksville and Montgomery County.</p><a href="tel:+19312712350" className="btn-g" aria-label="Call for water damage service">📞 Call Now — 24/7</a></div>
      </div>
      <div className="svc-grid" role="list" aria-label="Water damage restoration services">
        {services.map(s=>(
          <Link key={s.href} href={s.href} className="svc-card" role="listitem" aria-label={`${s.title} service`}>
            <div className="svc-img"><img src={s.img} alt={s.alt} loading="lazy" decoding="async" width={600} height={200}/></div>
            <div className="svc-body"><div className="svc-tag">{s.tag}</div><h3 className="svc-title">{s.title}</h3><p className="svc-desc">{s.desc}</p><div className="svc-arr">Learn more</div></div>
          </Link>
        ))}
      </div>
    </section>

    {/* EMERGENCY TIMELINE */}
    <section className="emg" aria-labelledby="timeline-heading">
      <div className="emg-in">
        <div>
          <div className="eyebrow" style={{color:"#4ADE80"}}><span className="eyebrow-dot" style={{background:"#4ADE80"}} aria-hidden="true"/>Time Is Critical</div>
          <h2 className="display-h light" id="timeline-heading" style={{marginBottom:18}}>Water Damage Timeline: Why Every Hour Matters in Clarksville TN</h2>
          <p className="body-t light" style={{marginBottom:32}}>Clarksville&apos;s humid subtropical climate accelerates water damage faster than most of the US. The window for preventing secondary damage is critically narrow. Call (931) 271-2350 the moment you discover water damage.</p>
          <a href="tel:+19312712350" className="btn-g" aria-label="Call for immediate emergency response">📞 Call for Immediate Response</a>
        </div>
        <div role="list" aria-label="Water damage progression timeline">
          {[{time:"0 – 1 hr",risk:"Water penetrates drywall, flooring, and insulation. Structural absorption begins. Immediate extraction critical."},{time:"1 – 24 hrs",risk:"Mold spore activation in Clarksville's humid climate. Wood and drywall begin to swell and warp."},{time:"24 – 48 hrs",risk:"Mold colonies become visible. Structural compromise accelerates. Persistent odors develop throughout property."},{time:"48 hrs +",risk:"Severe structural damage. Black mold spreading. Significant health risks escalate for all occupants."}].map(r=>(
            <div key={r.time} className="emg-row" role="listitem"><div className="emg-time">{r.time}</div><div className="emg-risk">{r.risk}</div></div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY */}
    <section className="sec sec-surf" aria-labelledby="why-heading">
      <div className="why-in">
        <div className="why-img-wrap">
          <img src={IMGS.why} alt="Professional water damage restoration technician assessing moisture damage in Clarksville TN home" className="why-img" loading="lazy" decoding="async" width={900} height={520}/>
          <div className="why-badge"><div className="why-badge-n">10+</div><div className="why-badge-l">Years in Clarksville</div></div>
        </div>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" aria-hidden="true"/>Why Choose Us</div>
          <h2 className="display-h" id="why-heading" style={{marginBottom:36}}>Clarksville&apos;s Most Experienced Water Damage Restoration Company</h2>
          <div className="why-list" role="list">
            {whyItems.map(w=>(
              <div key={w.n} className="why-item" role="listitem">
                <div className="why-n" aria-hidden="true">{w.n}</div>
                <div><h3 className="why-tit">{w.t}</h3><p className="why-bod">{w.b}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="sec" aria-labelledby="process-heading">
      <div style={{maxWidth:1240,margin:"0 auto",padding:"0 40px",marginBottom:48}}>
        <div className="eyebrow"><span className="eyebrow-dot" aria-hidden="true"/>Our Process</div>
        <h2 className="display-h" id="process-heading">Our 4-Step Water Damage Restoration Process</h2>
      </div>
      <div className="proc-grid" role="list" aria-label="Restoration process steps">
        {steps.map(p=>(
          <div key={p.n} className="proc-card" role="listitem">
            <div className="proc-card-bg-n" aria-hidden="true">{p.n}</div>
            <div className="proc-step-tag">Step {p.n}</div>
            <h3 className="proc-title">{p.t}</h3>
            <p className="proc-body">{p.b}</p>
          </div>
        ))}
      </div>
    </section>

    {/* REVIEWS */}
    <section className="sec sec-dark" aria-labelledby="reviews-heading">
      <div className="rev-in">
        <div className="rev-top">
          <div><div className="eyebrow" style={{color:"#4ADE80"}}><span className="eyebrow-dot" style={{background:"#4ADE80"}} aria-hidden="true"/>Client Testimonials</div><h2 className="display-h light" id="reviews-heading">What Our Clients Say</h2></div>
          <div style={{textAlign:"right"}}><div style={{fontFamily:"var(--font-cormorant)",fontSize:44,fontWeight:700,color:"#fff",lineHeight:1}} aria-label="5 star rating">★★★★★</div><div style={{fontFamily:"var(--font-inter)",fontSize:12,color:"rgba(255,255,255,.35)",marginTop:6}}>5.0 — 47 verified reviews</div></div>
        </div>
        <div className="rev-grid" role="list">
          {reviews.map((r,i)=>(
            <article key={i} className="rev-card" role="listitem" itemScope itemType="https://schema.org/Review">
              <div className="rev-stars" aria-label="5 stars">{[1,2,3,4,5].map(s=><span key={s} className="rev-star" aria-hidden="true">★</span>)}</div>
              <meta itemProp="reviewRating" content="5"/>
              <blockquote className="rev-q" itemProp="reviewBody">{r.q}</blockquote>
              <div className="rev-auth"><div className="rev-av" aria-hidden="true">{r.init}</div><div><div className="rev-name" itemProp="author">{r.n}</div><div className="rev-loc">{r.l}</div></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* LOCATIONS */}
    <section className="sec sec-surf" aria-labelledby="locations-heading">
      <div className="loc-top">
        <div><div className="eyebrow"><span className="eyebrow-dot" aria-hidden="true"/>Service Coverage</div><h2 className="display-h" id="locations-heading">Water Damage Restoration Near You in Clarksville &amp; Surrounding Areas</h2></div>
        <div><p className="body-t" style={{marginBottom:24}}>We provide 60-minute guaranteed emergency response throughout Montgomery County and all surrounding communities.</p><Link href="/service-areas" style={{display:"inline-flex",alignItems:"center",gap:8,fontFamily:"var(--font-inter)",fontSize:14,fontWeight:600,color:"#16A34A",textDecoration:"none"}} aria-label="View all service area locations">View All Locations →</Link></div>
      </div>
      <nav className="loc-grid" aria-label="Service area locations">
        {locs.map(l=>(
          <Link key={l.h} href={l.h} className="loc-card" aria-label={`Water damage restoration in ${l.l}`}>
            <span>📍 {l.l}</span><span className="loc-arr" aria-hidden="true">→</span>
          </Link>
        ))}
      </nav>
    </section>

    {/* FAQ */}
    <section className="faq-sec" aria-labelledby="faq-heading">
      <div className="faq-inner">
        <div className="faq-head">
          <div className="eyebrow" style={{justifyContent:"center"}}><span className="eyebrow-dot" aria-hidden="true"/>Common Questions</div>
          <h2 className="display-h" id="faq-heading" style={{textAlign:"center"}}>Frequently Asked Questions About Water Damage Restoration in Clarksville TN</h2>
        </div>
        <div role="list">
          {faqs.map((faq,i)=>(
            <details key={i} className="faq-item" role="listitem">
              <summary className="faq-q">{faq.q}</summary>
              <p className="faq-a">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="sec" aria-labelledby="cta-heading">
      <div className="fcta-in">
        <div className="fcta-img-wrap">
          <img src={IMGS.cta} alt="Water damage restoration professional team ready to respond in Clarksville TN" className="fcta-img" loading="lazy" decoding="async" width={900} height={540}/>
          <div className="fcta-img-ov" aria-hidden="true"/>
          <div className="fcta-badge"><div className="fcta-badge-n">(931) 271-2350</div><div className="fcta-badge-l">Available 24 hours a day</div></div>
        </div>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" aria-hidden="true"/>Act Now</div>
          <h2 className="fcta-h2" id="cta-heading">Don&apos;t wait.<br/><em>Every minute matters.</em></h2>
          <p className="fcta-p">Water damage in Clarksville TN escalates exponentially over time. Our team is locally stationed and ready to respond immediately. A certified expert answers your call in under 60 seconds.</p>
          <div className="fcta-btns">
            <a href="tel:+19312712350" className="fcta-btn1" aria-label="Call now for emergency water damage restoration">📞 Call (931) 271-2350 Now</a>
            <a href="/contact" className="fcta-btn2" aria-label="Request free assessment">Request Free Assessment</a>
          </div>
          <div className="fcta-note">Free inspection · All insurance accepted · USAA specialists · 24/7/365</div>
        </div>
      </div>
    </section>

    {/* Mobile sticky */}
    <div className="mob-sticky" role="navigation" aria-label="Emergency contact shortcuts">
      <a href="tel:+19312712350" style={{background:"#22C55E",color:"#09090B"}} aria-label="Call now">📞 Call Now</a>
      <a href="/contact" style={{background:"#09090B",color:"#fff"}} aria-label="Free assessment">Free Assessment</a>
    </div>
  </>);
}
