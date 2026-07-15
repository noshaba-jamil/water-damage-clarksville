"use client";
import { useState } from "react";
import Link from "next/link";

const NAP = {
  name: "Clarksville Water Damage Restoration",
  phone: "(931) 271-2350",
  phoneHref: "tel:+19312712350",
  address: "215 Legion Street",
  city: "Clarksville",
  state: "TN",
  zip: "37040",
  email: "waterdamageclarksville@gmail.com",
  website: "https://water-damage-clarksville.com",
  hours: "24/7 — 365 days a year",
  geo: "36.5298, -87.3595",
  serviceRadius: "50 miles",
};

const TABS = ["Overview","SEO","GEO","AEO","LLM","NAP","Keywords","Schema","Backlinks","Actions"];

const pages = [
  {url:"/",title:"Water Damage Restoration Clarksville TN | 24/7 Emergency | (931) 271-2350",tLen:69,meta:"Clarksville TN #1 water damage restoration. 60-min guaranteed arrival, 24/7/365. Flood cleanup, mold remediation.",mLen:113,kw:"water damage restoration Clarksville TN",h1:"Water Damage Restoration Clarksville TN",canonical:true,schema:["LocalBusiness","WebSite","Organization"],og:true,score:88},
  {url:"/emergency-water-damage-clarksville-tn",title:"Emergency Water Damage Clarksville TN | 60-Min Response",tLen:56,meta:"Emergency water damage restoration in Clarksville TN. IICRC-certified team responds in 60 minutes 24/7.",mLen:103,kw:"emergency water damage Clarksville TN",h1:"Emergency Water Damage Restoration",canonical:true,schema:["Service","LocalBusiness"],og:true,score:82},
  {url:"/flood-cleanup-clarksville-tn",title:"Flood Cleanup & Water Extraction Clarksville TN",tLen:48,meta:"Professional flood cleanup in Clarksville TN. Industrial truck-mounted pumps extract water fast.",mLen:93,kw:"flood cleanup Clarksville TN",h1:"Flood Cleanup & Water Extraction",canonical:true,schema:["Service"],og:true,score:74},
  {url:"/mold-remediation-clarksville-tn",title:"Mold Remediation Clarksville TN | IICRC AMRT Certified",tLen:55,meta:"IICRC AMRT-certified mold remediation in Clarksville TN. Black mold removal, air quality testing.",mLen:97,kw:"mold remediation Clarksville TN",h1:"Mold Remediation & Removal",canonical:true,schema:["Service","LocalBusiness"],og:true,score:85},
  {url:"/structural-drying-clarksville-tn",title:"Structural Drying Clarksville TN | IICRC S500 Certified",tLen:56,meta:"IICRC S500-certified structural drying in Clarksville TN. Industrial LGR dehumidifiers.",mLen:89,kw:"structural drying Clarksville TN",h1:"Structural Drying Services",canonical:true,schema:["Service"],og:true,score:79},
  {url:"/water-damage-insurance-claim-clarksville-tn",title:"Water Damage Insurance Claims Clarksville TN | USAA Specialists",tLen:63,meta:"Water damage insurance claims in Clarksville TN handled completely. USAA, State Farm, Allstate.",mLen:95,kw:"water damage insurance claim Clarksville TN",h1:"Insurance Claim Management",canonical:true,schema:["Service"],og:true,score:77},
  {url:"/about",title:"About Clarksville Water Damage Restoration | Local IICRC Experts",tLen:64,meta:"Meet the IICRC-certified team serving Clarksville TN since 2014.",mLen:64,kw:"Clarksville water damage company",h1:"About Our Team",canonical:true,schema:["Organization"],og:true,score:68},
  {url:"/contact",title:"Contact Us | Free Water Damage Assessment Clarksville TN",tLen:57,meta:"Contact for free emergency assessment. Call (931) 271-2350 anytime 24/7.",mLen:72,kw:"water damage contact Clarksville",h1:"Contact Us",canonical:true,schema:["ContactPage"],og:true,score:72},
  {url:"/blog",title:"Water Damage Blog | Restoration Tips & Guides | Clarksville TN",tLen:63,meta:"Expert water damage restoration guides for Clarksville TN homeowners.",mLen:68,kw:"water damage blog Clarksville TN",h1:"Water Damage Blog",canonical:true,schema:["Blog"],og:true,score:70},
  {url:"/service-areas",title:"Service Areas | Water Damage Restoration Near Me | Clarksville TN",tLen:65,meta:"Water damage restoration serving Clarksville TN, Fort Campbell, Oak Grove KY.",mLen:77,kw:"water damage restoration near me",h1:"Our Service Areas",canonical:true,schema:["LocalBusiness"],og:true,score:73},
  {url:"/faq",title:"Water Damage FAQ | Clarksville TN | Common Questions Answered",tLen:61,meta:"Answers to common water damage restoration questions for Clarksville TN homeowners.",mLen:83,kw:"water damage FAQ Clarksville TN",h1:"Water Damage FAQ",canonical:true,schema:["FAQPage"],og:true,score:86},
];

const keywords = [
  {kw:"water damage restoration Clarksville TN",vol:480,diff:"Low",intent:"Commercial",tier:1,ranking:"Not tracking",pages:["Homepage","Emergency"],opportunity:"HIGH"},
  {kw:"emergency water damage Clarksville",vol:210,diff:"Low",intent:"Emergency",tier:1,ranking:"Not tracking",pages:["Emergency page"],opportunity:"HIGH"},
  {kw:"flood cleanup Clarksville TN",vol:170,diff:"Low",intent:"Commercial",tier:1,ranking:"Not tracking",pages:["Flood page"],opportunity:"HIGH"},
  {kw:"mold remediation Clarksville TN",vol:140,diff:"Low",intent:"Commercial",tier:1,ranking:"Not tracking",pages:["Mold page"],opportunity:"HIGH"},
  {kw:"water damage Fort Campbell",vol:90,diff:"Very Low",intent:"Local",tier:1,ranking:"Not tracking",pages:["Fort Campbell"],opportunity:"HIGH"},
  {kw:"USAA water damage claim Tennessee",vol:70,diff:"Low",intent:"Informational",tier:2,ranking:"Not tracking",pages:["Insurance","Blog"],opportunity:"MEDIUM"},
  {kw:"water damage restoration near me",vol:1900,diff:"High",intent:"Emergency",tier:2,ranking:"Not tracking",pages:["Service areas"],opportunity:"MEDIUM"},
  {kw:"sewage backup cleanup Clarksville",vol:50,diff:"Very Low",intent:"Emergency",tier:2,ranking:"Not tracking",pages:["Sewage page"],opportunity:"HIGH"},
  {kw:"structural drying Clarksville TN",vol:60,diff:"Very Low",intent:"Commercial",tier:2,ranking:"Not tracking",pages:["Structural page"],opportunity:"HIGH"},
  {kw:"water damage insurance claim Clarksville",vol:80,diff:"Low",intent:"Commercial",tier:2,ranking:"Not tracking",pages:["Insurance page"],opportunity:"HIGH"},
  {kw:"basement flooding Clarksville TN",vol:40,diff:"Very Low",intent:"Emergency",tier:2,ranking:"Not tracking",pages:["Basement page"],opportunity:"HIGH"},
  {kw:"24 hour water damage restoration",vol:320,diff:"Medium",intent:"Emergency",tier:2,ranking:"Not tracking",pages:["Homepage"],opportunity:"MEDIUM"},
  {kw:"water damage company Clarksville",vol:110,diff:"Low",intent:"Commercial",tier:1,ranking:"Not tracking",pages:["Homepage","About"],opportunity:"HIGH"},
  {kw:"mold removal Clarksville TN",vol:90,diff:"Low",intent:"Commercial",tier:2,ranking:"Not tracking",pages:["Mold page"],opportunity:"HIGH"},
  {kw:"water extraction Clarksville TN",vol:70,diff:"Very Low",intent:"Commercial",tier:2,ranking:"Not tracking",pages:["Flood page"],opportunity:"HIGH"},
];

const citations = [
  {name:"Google Business Profile",url:"google.com/business",status:"pending",importance:"CRITICAL",category:"Primary",napMatch:null},
  {name:"Yelp",url:"yelp.com",status:"pending",importance:"HIGH",category:"General",napMatch:null},
  {name:"BBB",url:"bbb.org",status:"pending",importance:"HIGH",category:"Trust",napMatch:null},
  {name:"Angi (Angie's List)",url:"angi.com",status:"pending",importance:"HIGH",category:"Home Services",napMatch:null},
  {name:"HomeAdvisor",url:"homeadvisor.com",status:"pending",importance:"HIGH",category:"Home Services",napMatch:null},
  {name:"Thumbtack",url:"thumbtack.com",status:"pending",importance:"MEDIUM",category:"Services",napMatch:null},
  {name:"Nextdoor",url:"nextdoor.com",status:"pending",importance:"HIGH",category:"Local",napMatch:null},
  {name:"Facebook Business",url:"facebook.com",status:"pending",importance:"HIGH",category:"Social",napMatch:null},
  {name:"Apple Maps",url:"maps.apple.com",status:"pending",importance:"MEDIUM",category:"Maps",napMatch:null},
  {name:"Bing Places",url:"bingplaces.com",status:"pending",importance:"MEDIUM",category:"Maps",napMatch:null},
  {name:"Houzz",url:"houzz.com",status:"pending",importance:"MEDIUM",category:"Home Services",napMatch:null},
  {name:"Porch",url:"porch.com",status:"pending",importance:"MEDIUM",category:"Home Services",napMatch:null},
  {name:"Restoration1",url:"restoration1.com",status:"pending",importance:"LOW",category:"Industry",napMatch:null},
  {name:"Manta",url:"manta.com",status:"pending",importance:"LOW",category:"General",napMatch:null},
  {name:"Foursquare",url:"foursquare.com",status:"pending",importance:"LOW",category:"General",napMatch:null},
  {name:"Expertise.com",url:"expertise.com",status:"pending",importance:"MEDIUM",category:"Industry",napMatch:null},
  {name:"Chamber of Commerce",url:"chamberofcommerce.com",status:"pending",importance:"MEDIUM",category:"Local",napMatch:null},
  {name:"Yellow Pages",url:"yellowpages.com",status:"pending",importance:"LOW",category:"General",napMatch:null},
];

const schemaTypes = [
  {page:"All pages",type:"Organization",present:true,fields:["name","telephone","address","url","logo"],missing:[]},
  {page:"Homepage",type:"LocalBusiness → ProfessionalService",present:true,fields:["name","telephone","address","geo","openingHours","areaServed","priceRange","aggregateRating"],missing:["image","sameAs"]},
  {page:"Service pages",type:"Service",present:true,fields:["name","description","provider","areaServed"],missing:["offers","review"]},
  {page:"/faq",type:"FAQPage",present:true,fields:["mainEntity","acceptedAnswer"],missing:[]},
  {page:"/blog/[slug]",type:"Article",present:true,fields:["headline","datePublished","author","publisher"],missing:["image","wordCount"]},
  {page:"Homepage",type:"WebSite + Sitelinks Searchbox",present:true,fields:["url","name","potentialAction"],missing:[]},
  {page:"Homepage",type:"BreadcrumbList",present:false,fields:[],missing:["All breadcrumb fields"]},
  {page:"Service pages",type:"Review + AggregateRating",present:false,fields:[],missing:["reviewBody","ratingValue","author"]},
];

const aeoData = [
  {question:"Who provides water damage restoration in Clarksville TN?",answered:true,source:"Homepage + LocalBusiness schema",strength:"Strong"},
  {question:"What is the phone number for water damage emergency in Clarksville?",answered:true,source:"NAP schema + EmergencyBar",strength:"Strong"},
  {question:"How fast does water damage restoration arrive in Clarksville TN?",answered:true,source:"Homepage hero — 60-min guarantee",strength:"Strong"},
  {question:"Does Clarksville Water Damage accept USAA insurance?",answered:true,source:"Insurance page + blog posts",strength:"Medium"},
  {question:"What are the hours for water damage restoration in Clarksville?",answered:true,source:"Schema openingHours + EmergencyBar",strength:"Strong"},
  {question:"How much does water damage restoration cost in Clarksville TN?",answered:false,source:"Missing — needs blog/FAQ content",strength:"Weak"},
  {question:"Is there mold remediation available in Fort Campbell TN?",answered:true,source:"Fort Campbell location page",strength:"Medium"},
  {question:"What certifications does Clarksville Water Damage Restoration have?",answered:true,source:"About page — IICRC certified",strength:"Medium"},
  {question:"Does Clarksville Water Damage Restoration serve Oak Grove KY?",answered:true,source:"Locations page",strength:"Medium"},
  {question:"What causes water damage in Tennessee homes?",answered:false,source:"Missing — needs FAQ/blog content",strength:"Weak"},
  {question:"How long does structural drying take in Clarksville TN?",answered:false,source:"Missing — needs FAQ content",strength:"Weak"},
  {question:"What should I do immediately after water damage?",answered:false,source:"Missing — critical FAQ/blog needed",strength:"Weak"},
];

const llmData = [
  {signal:"Business name clearly stated on all pages",status:true,detail:"Clarksville Water Damage Restoration — consistent"},
  {signal:"Phone number in plain text (not image)",status:true,detail:"(931) 271-2350 in EmergencyBar, Header, Footer"},
  {signal:"Address in plain text with schema markup",status:true,detail:"215 Legion Street, Clarksville, TN 37040"},
  {signal:"Service list clearly defined",status:true,detail:"6 core services + 6 sub-services listed"},
  {signal:"Geographic service area explicitly stated",status:true,detail:"32 location pages covering Montgomery County"},
  {signal:"Business hours explicitly stated",status:true,detail:"24/7, 365 days — in schema + EmergencyBar"},
  {signal:"Entity disambiguation (what you do, where, who)",status:true,detail:"Water damage restoration company in Clarksville TN"},
  {signal:"FAQ content covering common questions",status:true,detail:"/faq page with FAQPage schema"},
  {signal:"Structured data for AI parsing",status:true,detail:"JSON-LD on all pages — LocalBusiness + Service"},
  {signal:"E-E-A-T signals (experience, expertise)",status:false,detail:"Missing: staff bios, credentials photos, case studies"},
  {signal:"Reviews/testimonials with names and dates",status:false,detail:"Missing: real review content with schema markup"},
  {signal:"Cost/pricing information",status:false,detail:"Missing: price ranges help LLMs answer cost questions"},
  {signal:"How-to content (process explanations)",status:false,detail:"Missing: restoration process step-by-step pages"},
  {signal:"Comparison content (why choose us vs competitors)",status:false,detail:"Missing: helps LLMs recommend you specifically"},
  {signal:"Local landmark references",status:false,detail:"Missing: Fort Campbell gate references, local streets"},
];

const geoData = [
  {signal:"Google Business Profile verified",status:false,detail:"CRITICAL — Set up at business.google.com",priority:"CRITICAL"},
  {signal:"NAP consistent across website",status:true,detail:"215 Legion Street, Clarksville TN 37040 — all pages",priority:"DONE"},
  {signal:"Geo meta tags (geo.region, geo.position)",status:true,detail:"US-TN, 36.5298;-87.3595 in layout metadata",priority:"DONE"},
  {signal:"LocalBusiness schema with geo coordinates",status:true,detail:"Lat: 36.5298, Long: -87.3595 in JSON-LD",priority:"DONE"},
  {signal:"Service area pages (32 locations)",status:true,detail:"32 city/neighborhood pages with unique content",priority:"DONE"},
  {signal:"Fort Campbell military targeting",status:true,detail:"Fort Campbell specific page + USAA content",priority:"DONE"},
  {signal:"Apple Maps listing",status:false,detail:"Submit at mapsconnect.apple.com",priority:"HIGH"},
  {signal:"Bing Places listing",status:false,detail:"Submit at bingplaces.com",priority:"HIGH"},
  {signal:"Nextdoor Business listing",status:false,detail:"Hyperlocal — critical for residential leads",priority:"HIGH"},
  {signal:"Montgomery County citations",status:false,detail:"Local chamber, county directory submissions",priority:"MEDIUM"},
  {signal:"Embedded Google Map on contact page",status:false,detail:"Add iframe map to /contact page",priority:"MEDIUM"},
  {signal:"Driving directions content",status:false,detail:"Add 'near [landmark]' content to location pages",priority:"MEDIUM"},
];

const actionPlan = [
  {week:"Week 1",tasks:[
    {task:"Set up Google Business Profile",why:"Most important local ranking factor",time:"2 hrs",priority:"CRITICAL"},
    {task:"Submit sitemap to Google Search Console",why:"Get pages indexed fast",time:"30 min",priority:"CRITICAL"},
    {task:"Replace phone with real Ringba tracking number",why:"Track lead sources",time:"15 min",priority:"CRITICAL"},
    {task:"Verify site in Google Search Console",why:"Monitor rankings and errors",time:"30 min",priority:"HIGH"},
  ]},
  {week:"Week 2",tasks:[
    {task:"Add 5 real Google reviews (ask customers)",why:"3.5+ stars unlocks map pack",time:"Ongoing",priority:"HIGH"},
    {task:"Submit to Yelp, BBB, Angi, HomeAdvisor",why:"Citation consistency = local ranking boost",time:"3 hrs",priority:"HIGH"},
    {task:"Write 5 blog posts targeting Tier 1 keywords",why:"Content = organic traffic",time:"5 hrs",priority:"HIGH"},
    {task:"Add Google Analytics 4 tracking code",why:"Data-driven SEO decisions",time:"1 hr",priority:"HIGH"},
  ]},
  {week:"Week 3-4",tasks:[
    {task:"Build 10 more local citations (Nextdoor, Facebook, Apple Maps)",why:"NAP consistency signals trust",time:"3 hrs",priority:"MEDIUM"},
    {task:"Write FAQ answers for unanswered AEO questions",why:"Featured snippets + AI answers",time:"3 hrs",priority:"MEDIUM"},
    {task:"Add real customer photos to GBP weekly",why:"Photos boost GBP visibility 35%",time:"30 min/week",priority:"MEDIUM"},
    {task:"Create E-E-A-T content (staff bios, certifications)",why:"Trust signals for AI + Google",time:"2 hrs",priority:"MEDIUM"},
  ]},
  {week:"Month 2+",tasks:[
    {task:"Daily blog posts (use admin blog editor)",why:"Fresh content = ranking velocity",time:"20 min/day",priority:"HIGH"},
    {task:"Respond to ALL Google reviews within 24 hrs",why:"Engagement signals to Google",time:"5 min/review",priority:"HIGH"},
    {task:"Build 40 total citations (our full list)",why:"40 citations = strong local presence",time:"Ongoing",priority:"MEDIUM"},
    {task:"Monitor Search Console weekly for keyword opportunities",why:"Find easy wins to target",time:"30 min/week",priority:"MEDIUM"},
  ]},
];

const COLORS = {
  green:"#22C55E", greenLight:"#4ADE80", red:"#EF4444", redLight:"#FCA5A5",
  yellow:"#FBBF24", blue:"#60A5FA", purple:"#A78BFA", bg:"#0F0F11",
  card:"#18181B", border:"rgba(255,255,255,.06)", muted:"rgba(255,255,255,.4)"
};

function StatusDot({ok}:{ok:boolean}) {
  return <span style={{width:8,height:8,borderRadius:"50%",background:ok?COLORS.green:COLORS.red,display:"inline-block",flexShrink:0}}/>;
}
function Badge({label,color}:{label:string,color:string}) {
  return <span style={{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:100,background:`${color}18`,color,letterSpacing:.5}}>{label}</span>;
}
function Score({val}:{val:number}) {
  const c = val>=85?COLORS.green:val>=70?COLORS.yellow:COLORS.red;
  return (
    <div style={{display:"flex",alignItems:"center",gap:8}}>
      <div style={{width:36,height:36,borderRadius:"50%",border:`2px solid ${c}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:c}}>{val}</div>
    </div>
  );
}

export default function SeoMonitorPage() {
  const [tab, setTab] = useState("Overview");
  const [citations_, setCitations] = useState(citations.map(c=>({...c,status:"pending" as string})));
  const [checklist_, setChecklist] = useState([
    {task:"Set up Google Business Profile",done:false,priority:"CRITICAL"},
    {task:"Verify Google Search Console",done:false,priority:"CRITICAL"},
    {task:"Submit sitemap.xml to Google",done:false,priority:"CRITICAL"},
    {task:"Add real Ringba tracking number sitewide",done:false,priority:"HIGH"},
    {task:"Get first 5 Google reviews",done:false,priority:"HIGH"},
    {task:"Submit to Yelp, BBB, Angi, HomeAdvisor",done:false,priority:"HIGH"},
    {task:"Set up Google Analytics 4",done:false,priority:"HIGH"},
    {task:"Claim Bing Places listing",done:false,priority:"MEDIUM"},
    {task:"Claim Apple Maps listing",done:false,priority:"MEDIUM"},
    {task:"Add Nextdoor Business listing",done:false,priority:"MEDIUM"},
    {task:"Upload OG image (public/og-image.jpg)",done:false,priority:"MEDIUM"},
    {task:"Write first 5 blog posts (Tier 1 keywords)",done:false,priority:"HIGH"},
    {task:"Add embedded Google Map to contact page",done:false,priority:"LOW"},
    {task:"Create staff bios for E-E-A-T signals",done:false,priority:"LOW"},
    {task:"Add customer photo to GBP weekly",done:false,priority:"MEDIUM"},
  ]);

  const avgScore = Math.round(pages.reduce((a,p)=>a+p.score,0)/pages.length);
  const doneTasks = checklist_.filter(c=>c.done).length;
  const llmPass = llmData.filter(l=>l.status).length;
  const geoPass = geoData.filter(g=>g.status).length;
  const aeoPass = aeoData.filter(a=>a.answered).length;

  const SB = () => (
    <div style={{background:"#09090B",borderRight:"1px solid rgba(255,255,255,.06)",display:"flex",flexDirection:"column",width:240,flexShrink:0,position:"sticky",top:0,height:"100vh"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,padding:20,borderBottom:"1px solid rgba(255,255,255,.06)"}}>
        <div style={{width:32,height:32,borderRadius:6,background:"linear-gradient(135deg,#22C55E,#16A34A)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14}}>💧</div>
        <div><div style={{fontSize:13,fontWeight:600,color:"#fff"}}>WDR Admin</div><div style={{fontSize:9,color:"rgba(255,255,255,.3)"}}>water-damage-clarksville.com</div></div>
      </div>
      <div style={{padding:"16px 12px",flex:1,overflowY:"auto"}}>
        {[["Main",""],["📊 Dashboard","/admin/dashboard"],["",""],["Content",""],["✍️ Blog Posts","/admin/blog"],["➕ New Post","/admin/blog/new"],["⭐ Reviews","/admin/reviews"],["",""],["SEO Tools",""],["🔍 SEO Monitor","/admin/seo"],["⚙️ Settings","/admin/settings"],["",""],["Website",""],["🌐 View Site ↗","/"]].map(([l,h],i)=>
          !h ? <div key={i} style={{fontSize:9,fontWeight:600,letterSpacing:2,textTransform:"uppercase",color:"rgba(255,255,255,.25)",padding:"12px 8px 6px",marginTop:8}}>{l}</div> :
          <Link key={i} href={h} target={h==="/"?"_blank":undefined} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 10px",borderRadius:6,fontSize:13,fontWeight:500,color:h==="/admin/seo"?"#4ADE80":"rgba(255,255,255,.55)",textDecoration:"none",background:h==="/admin/seo"?"rgba(34,197,94,.1)":"none",marginBottom:2}}>{l}</Link>
        )}
      </div>
    </div>
  );

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:var(--font-inter,system-ui,sans-serif);background:#0F0F11;color:#fff;min-height:100vh}
    .layout{display:flex;min-height:100vh}
    .main{flex:1;padding:28px 32px;overflow-y:auto;min-width:0}
    .tabs{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:24px;background:#18181B;padding:4px;border-radius:10px;border:1px solid rgba(255,255,255,.06)}
    .tab{padding:8px 16px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:none;transition:all .15s;white-space:nowrap;font-family:inherit}
    .tab.active{background:#22C55E;color:#09090B}
    .tab:not(.active){background:none;color:rgba(255,255,255,.45)}
    .tab:not(.active):hover{background:rgba(255,255,255,.07);color:#fff}
    .card{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:20px;margin-bottom:16px}
    .card-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.35);margin-bottom:14px;display:flex;align-items:center;gap:8px}
    .grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    .grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
    .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .stat{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:18px}
    .stat-val{font-size:36px;font-weight:700;line-height:1;margin-bottom:6px}
    .stat-lbl{font-size:11px;color:rgba(255,255,255,.4)}
    table{width:100%;border-collapse:collapse}
    th{text-align:left;font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.3);padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.06)}
    td{padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.04);font-size:12.5px;color:rgba(255,255,255,.65);vertical-align:middle}
    tr:last-child td{border-bottom:none}
    tr:hover td{background:rgba(255,255,255,.02)}
    .row{display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.04)}
    .row:last-child{border-bottom:none}
    .bar{height:5px;border-radius:3px;background:rgba(255,255,255,.06);overflow:hidden;margin-top:5px}
    .bar-fill{height:100%;border-radius:3px;transition:width .4s}
    @media(max-width:1100px){.layout{flex-direction:column}.grid4{grid-template-columns:1fr 1fr}.grid3{grid-template-columns:1fr 1fr}}
    @media(max-width:768px){.grid2,.grid3,.grid4{grid-template-columns:1fr}.main{padding:16px}.tabs{gap:2px}.tab{padding:7px 10px;font-size:11px}}
  `;

  return (<>
    <style>{css}</style>
    <div className="layout">
      <SB/>
      <div className="main">
        <div style={{marginBottom:20}}>
          <div style={{fontSize:22,fontWeight:700,color:"#fff",marginBottom:4}}>🔍 SEO · GEO · AEO · LLM Monitor</div>
          <div style={{fontSize:13,color:"rgba(255,255,255,.4)"}}>Your complete ranking intelligence dashboard for water-damage-clarksville.com</div>
        </div>

        <div className="tabs">
          {TABS.map(t=><button key={t} className={`tab${tab===t?" active":""}`} onClick={()=>setTab(t)}>{t}</button>)}
        </div>

        {/* ── OVERVIEW ── */}
        {tab==="Overview" && (<>
          <div className="grid4" style={{marginBottom:16}}>
            <div className="stat"><div style={{fontSize:11,color:"rgba(255,255,255,.35)",marginBottom:6}}>AVG SEO SCORE</div><div className="stat-val" style={{color:avgScore>=80?COLORS.green:COLORS.yellow}}>{avgScore}</div><div className="stat-lbl">/{100} across {pages.length} pages</div><div className="bar"><div className="bar-fill" style={{width:`${avgScore}%`,background:COLORS.green}}/></div></div>
            <div className="stat"><div style={{fontSize:11,color:"rgba(255,255,255,.35)",marginBottom:6}}>LLM SIGNALS</div><div className="stat-val" style={{color:COLORS.blue}}>{llmPass}/{llmData.length}</div><div className="stat-lbl">AI readability signals active</div><div className="bar"><div className="bar-fill" style={{width:`${(llmPass/llmData.length)*100}%`,background:COLORS.blue}}/></div></div>
            <div className="stat"><div style={{fontSize:11,color:"rgba(255,255,255,.35)",marginBottom:6}}>GEO SIGNALS</div><div className="stat-val" style={{color:COLORS.purple}}>{geoPass}/{geoData.length}</div><div className="stat-lbl">Local ranking signals active</div><div className="bar"><div className="bar-fill" style={{width:`${(geoPass/geoData.length)*100}%`,background:COLORS.purple}}/></div></div>
            <div className="stat"><div style={{fontSize:11,color:"rgba(255,255,255,.35)",marginBottom:6}}>AEO COVERAGE</div><div className="stat-val" style={{color:COLORS.yellow}}>{aeoPass}/{aeoData.length}</div><div className="stat-lbl">Questions your site answers</div><div className="bar"><div className="bar-fill" style={{width:`${(aeoPass/aeoData.length)*100}%`,background:COLORS.yellow}}/></div></div>
          </div>
          <div className="grid2">
            <div className="card">
              <div className="card-title">🚨 Critical Actions Right Now</div>
              {[
                {a:"Set up Google Business Profile",w:"#1 local ranking factor — nothing else matters more",c:COLORS.red},
                {a:"Submit sitemap to Search Console",w:"Pages can't rank if Google hasn't indexed them",c:COLORS.red},
                {a:"Get 5 Google reviews ASAP",w:"Need 3.5+ stars + reviews to enter local map pack",c:COLORS.red},
                {a:"Replace (931) 271-2350 with Ringba number",w:"You're losing call tracking data right now",c:COLORS.yellow},
                {a:"Write daily blog posts",w:"Fresh content is your fastest path to rankings",c:COLORS.yellow},
              ].map((a,i)=>(
                <div key={i} className="row" style={{alignItems:"flex-start"}}>
                  <span style={{fontSize:16,flexShrink:0}}>{i<3?"🔴":"🟡"}</span>
                  <div><div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:3}}>{a.a}</div><div style={{fontSize:11,color:"rgba(255,255,255,.4)",lineHeight:1.5}}>{a.w}</div></div>
                </div>
              ))}
            </div>
            <div className="card">
              <div className="card-title">📈 Ranking Roadmap — How To Hit #1</div>
              {[
                {step:"Month 1",goal:"Get indexed + GBP live + 10 reviews",status:"pending"},
                {step:"Month 2",goal:"Enter map pack for Clarksville keywords",status:"pending"},
                {step:"Month 3",goal:"Rank page 1 for 5 Tier 1 keywords",status:"pending"},
                {step:"Month 4-6",goal:"Dominate local pack + blog traffic",status:"pending"},
                {step:"Month 6+",goal:"#1 for 'water damage Clarksville TN'",status:"pending"},
              ].map((r,i)=>(
                <div key={i} className="row">
                  <div style={{width:28,height:28,borderRadius:"50%",background:`rgba(34,197,94,${0.1+i*0.05})`,border:"1px solid rgba(34,197,94,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#4ADE80",flexShrink:0}}>{i+1}</div>
                  <div><div style={{fontSize:13,fontWeight:600,color:"#fff"}}>{r.step}</div><div style={{fontSize:11,color:"rgba(255,255,255,.45)",marginTop:2}}>{r.goal}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-title">📊 Page SEO Scores</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {pages.map((p,i)=>{
                const c = p.score>=85?COLORS.green:p.score>=70?COLORS.yellow:COLORS.red;
                return (
                  <div key={i} style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:36,fontSize:12,fontWeight:700,color:c,textAlign:"center"}}>{p.score}</div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                        <span style={{fontSize:12,color:"rgba(255,255,255,.6)",fontFamily:"monospace"}}>{p.url}</span>
                        <span style={{fontSize:11,color:"rgba(255,255,255,.3)"}}>{p.score>=85?"Excellent":p.score>=70?"Good":"Needs Work"}</span>
                      </div>
                      <div className="bar"><div className="bar-fill" style={{width:`${p.score}%`,background:c}}/></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>)}

        {/* ── SEO TAB ── */}
        {tab==="SEO" && (<>
          <div className="card">
            <div className="card-title">📋 Page Metadata Audit — All Pages</div>
            <div style={{overflowX:"auto"}}>
              <table>
                <thead><tr><th>URL</th><th>Title</th><th>T.Len</th><th>Meta Desc</th><th>D.Len</th><th>Keyword</th><th>Schema</th><th>OG</th><th>Score</th></tr></thead>
                <tbody>
                  {pages.map((p,i)=>{
                    const tc = p.tLen>=50&&p.tLen<=60?"#4ADE80":p.tLen>=45&&p.tLen<=65?"#FBBF24":"#FCA5A5";
                    const mc = p.mLen>=140&&p.mLen<=160?"#4ADE80":p.mLen>=120?"#FBBF24":"#FCA5A5";
                    return <tr key={i}>
                      <td style={{color:"#60A5FA",fontFamily:"monospace",fontSize:11}}>{p.url}</td>
                      <td style={{fontSize:11,maxWidth:200,color:"rgba(255,255,255,.7)"}}>{p.title.substring(0,40)}…</td>
                      <td><span style={{fontWeight:700,color:tc}}>{p.tLen}</span><span style={{fontSize:10,color:"rgba(255,255,255,.2)"}}>/60</span></td>
                      <td style={{fontSize:11,maxWidth:180,color:"rgba(255,255,255,.5)"}}>{p.meta.substring(0,40)}…</td>
                      <td><span style={{fontWeight:700,color:mc}}>{p.mLen}</span><span style={{fontSize:10,color:"rgba(255,255,255,.2)"}}>/160</span></td>
                      <td style={{fontSize:11,color:"#60A5FA",maxWidth:160}}>{p.kw.substring(0,30)}</td>
                      <td style={{fontSize:11}}>{p.schema.map(s=><span key={s} style={{fontSize:9,background:"rgba(167,139,250,.1)",color:"#A78BFA",padding:"1px 6px",borderRadius:100,marginRight:3}}>{s}</span>)}</td>
                      <td style={{textAlign:"center"}}>{p.og?"✅":"❌"}</td>
                      <td><Score val={p.score}/></td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid2">
            <div className="card">
              <div className="card-title">🔗 Internal Link Silo Structure</div>
              {[
                {hub:"Emergency Hub",pages:["Emergency Water Damage","Flood Cleanup","Sewage Backup","Storm Damage","Burst Pipe"],color:"#EF4444"},
                {hub:"Mold & Drying Hub",pages:["Mold Remediation","Structural Drying","Odor Removal","Basement Flooding"],color:"#8B5CF6"},
                {hub:"Insurance Hub",pages:["Insurance Claims","USAA Blog","Cost Guide"],color:"#22C55E"},
                {hub:"Location Hub (32 pages)",pages:["Fort Campbell","Sango TN","Oak Grove KY","+ 29 more"],color:"#F59E0B"},
                {hub:"Military Hub",pages:["Fort Campbell page","USAA blog","Military housing blog"],color:"#3B82F6"},
                {hub:"Blog Content Hub",pages:["16+ posts","Daily publishing","Long-tail keywords"],color:"#EC4899"},
              ].map((s,i)=>(
                <div key={i} style={{background:"rgba(255,255,255,.02)",border:`1px solid ${s.color}20`,borderRadius:8,padding:12,marginBottom:10}}>
                  <div style={{fontSize:12,fontWeight:700,color:s.color,marginBottom:8}}>{s.hub}</div>
                  {s.pages.map(p=><div key={p} style={{fontSize:11,color:"rgba(255,255,255,.45)",marginBottom:4}}>→ {p}</div>)}
                </div>
              ))}
            </div>
            <div className="card">
              <div className="card-title">⚙️ Technical SEO Status</div>
              {[
                {item:"sitemap.xml",status:true,url:"/sitemap.xml"},
                {item:"robots.txt",status:true,url:"/robots.txt"},
                {item:"Canonical tags",status:true,url:"All pages"},
                {item:"HTTPS / SSL",status:true,url:"Required for Vercel"},
                {item:"Mobile responsive",status:true,url:"All pages"},
                {item:"Page speed optimization",status:true,url:"next/font, image opt"},
                {item:"Open Graph meta tags",status:true,url:"All pages"},
                {item:"Twitter card meta",status:true,url:"All pages"},
                {item:"Hreflang (en-US)",status:true,url:"layout.tsx"},
                {item:"404 page",status:true,url:"/not-found.tsx"},
                {item:"Security headers",status:true,url:"next.config.js"},
                {item:"AI bot blocking",status:true,url:"robots.txt"},
                {item:"Core Web Vitals",status:false,url:"Need Vercel Analytics"},
                {item:"Image alt text audit",status:false,url:"Check all images"},
                {item:"Broken link audit",status:false,url:"Use Screaming Frog"},
              ].map((t,i)=>(
                <div key={i} className="row" style={{padding:"8px 0"}}>
                  <StatusDot ok={t.status}/>
                  <div style={{flex:1,display:"flex",justifyContent:"space-between"}}>
                    <span style={{fontSize:13,color:t.status?"rgba(255,255,255,.7)":"rgba(255,255,255,.45)"}}>{t.item}</span>
                    <span style={{fontSize:11,color:"rgba(255,255,255,.3)",fontFamily:"monospace"}}>{t.url}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>)}

        {/* ── GEO TAB ── */}
        {tab==="GEO" && (<>
          <div className="card">
            <div className="card-title">🗺️ NAP Information — Must Be 100% Consistent Everywhere</div>
            <div className="grid2">
              {Object.entries(NAP).map(([k,v])=>(
                <div key={k} style={{background:"rgba(255,255,255,.03)",borderRadius:8,padding:14}}>
                  <div style={{fontSize:10,fontWeight:600,letterSpacing:1,textTransform:"uppercase",color:"rgba(255,255,255,.3)",marginBottom:5}}>{k}</div>
                  <div style={{fontSize:14,color:"#fff",fontWeight:500,fontFamily:k==="phone"||k==="geo"?"monospace":"inherit"}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-title">📍 Local GEO Ranking Signals</div>
            {geoData.map((g,i)=>(
              <div key={i} className="row">
                <StatusDot ok={g.status}/>
                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:13,fontWeight:600,color:g.status?"#fff":"rgba(255,255,255,.55)"}}>{g.signal}</span>
                    <Badge label={g.priority} color={g.priority==="CRITICAL"?COLORS.red:g.priority==="HIGH"?COLORS.yellow:g.priority==="DONE"?COLORS.green:COLORS.muted}/>
                  </div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,.4)",marginTop:3,lineHeight:1.5}}>{g.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="card-title">📋 Citation Tracker — {citations_.filter(c=>c.status==="done").length}/{citations_.length} Submitted</div>
            <div style={{overflowX:"auto"}}>
              <table>
                <thead><tr><th>Platform</th><th>Category</th><th>Importance</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {citations_.map((c,i)=>(
                    <tr key={i}>
                      <td style={{fontWeight:600,color:"#fff"}}>{c.name}</td>
                      <td><Badge label={c.category} color={COLORS.blue}/></td>
                      <td><Badge label={c.importance} color={c.importance==="CRITICAL"?COLORS.red:c.importance==="HIGH"?COLORS.yellow:COLORS.muted}/></td>
                      <td>
                        <select value={c.status} onChange={e=>setCitations(cs=>cs.map((cc,ii)=>ii===i?{...cc,status:e.target.value}:cc))}
                          style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:4,color:c.status==="done"?"#4ADE80":c.status==="in-progress"?"#FBBF24":"rgba(255,255,255,.5)",fontSize:12,padding:"4px 8px",fontFamily:"inherit"}}>
                          <option value="pending">⏳ Pending</option>
                          <option value="in-progress">🔄 In Progress</option>
                          <option value="done">✅ Done</option>
                        </select>
                      </td>
                      <td><a href={`https://${c.url}`} target="_blank" rel="noopener noreferrer" style={{fontSize:11,color:"#60A5FA",textDecoration:"none"}}>Submit →</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>)}

        {/* ── AEO TAB ── */}
        {tab==="AEO" && (<>
          <div className="card">
            <div style={{fontSize:13,color:"rgba(255,255,255,.5)",lineHeight:1.7,marginBottom:16}}>
              <strong style={{color:"#fff"}}>Answer Engine Optimization (AEO)</strong> targets featured snippets, Google's "People Also Ask", voice search, and AI answer engines (ChatGPT, Perplexity, Gemini). Your goal: be the source these engines cite when someone asks about water damage in Clarksville.
            </div>
            <div className="card-title">❓ Questions Your Site Answers ({aeoPass}/{aeoData.length})</div>
            {aeoData.map((a,i)=>(
              <div key={i} className="row">
                <StatusDot ok={a.answered}/>
                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8}}>
                    <span style={{fontSize:13,fontWeight:600,color:a.answered?"#fff":"rgba(255,255,255,.5)"}}>{a.question}</span>
                    <Badge label={a.strength} color={a.strength==="Strong"?COLORS.green:a.strength==="Medium"?COLORS.yellow:COLORS.red}/>
                  </div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,.4)",marginTop:3}}>{a.source}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="card-title">✍️ Missing AEO Content — Write These Now</div>
            {[
              {q:"How much does water damage restoration cost in Clarksville TN?",action:"Write blog post: 'Water Damage Restoration Cost Clarksville TN 2026'",target:"Featured snippet for cost queries"},
              {q:"What should I do immediately after water damage?",action:"Add to FAQ page + blog: '10 Immediate Steps After Water Damage'",target:"Voice search + People Also Ask"},
              {q:"How long does structural drying take?",action:"Add to FAQ + structural drying page content",target:"Featured snippet"},
              {q:"What causes water damage in Tennessee homes?",action:"Write blog: 'Top Causes of Water Damage in Clarksville TN Homes'",target:"Informational keyword traffic"},
              {q:"Is mold dangerous after water damage?",action:"Add to mold remediation page + blog post",target:"High urgency — drives calls"},
              {q:"Does homeowner insurance cover water damage?",action:"Expand insurance page with specific coverage scenarios",target:"USAA + insurance queries"},
            ].map((m,i)=>(
              <div key={i} className="row">
                <span style={{fontSize:16,flexShrink:0}}>❌</span>
                <div>
                  <div style={{fontSize:13,fontWeight:600,color:"#FCA5A5",marginBottom:3}}>{m.q}</div>
                  <div style={{fontSize:12,color:"#4ADE80",marginBottom:2}}>→ {m.action}</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,.35)"}}>Target: {m.target}</div>
                </div>
              </div>
            ))}
          </div>
        </>)}

        {/* ── LLM TAB ── */}
        {tab==="LLM" && (<>
          <div className="card">
            <div style={{fontSize:13,color:"rgba(255,255,255,.5)",lineHeight:1.7,marginBottom:16}}>
              <strong style={{color:"#fff"}}>LLM Optimization</strong> ensures ChatGPT, Claude, Gemini, Perplexity, and other AI tools recommend your business when users ask about water damage in Clarksville. These engines read your site, schema markup, and citations to build their knowledge.
            </div>
            <div className="card-title">🤖 AI Readability Signals ({llmPass}/{llmData.length} Active)</div>
            {llmData.map((l,i)=>(
              <div key={i} className="row">
                <StatusDot ok={l.status}/>
                <div style={{flex:1}}>
                  <span style={{fontSize:13,fontWeight:600,color:l.status?"#fff":"rgba(255,255,255,.55)"}}>{l.signal}</span>
                  <div style={{fontSize:11,color:"rgba(255,255,255,.4)",marginTop:3,lineHeight:1.5}}>{l.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="card-title">💡 How To Get Recommended by ChatGPT & Gemini</div>
            {[
              {tip:"Publish daily blog posts with specific local information",why:"LLMs prioritize frequently updated, authoritative local content"},
              {tip:"Add staff names, photos, and credentials to your About page",why:"E-E-A-T (Experience, Expertise, Authoritativeness, Trust) is key for AI ranking"},
              {tip:"Write detailed process pages ('How We Restore Water Damage')",why:"LLMs love step-by-step process content to answer how-to questions"},
              {tip:"Build citations on 40+ platforms with identical NAP",why:"More citations = more data points for AI to confirm your existence"},
              {tip:"Get mentioned in local news, press releases, or community sites",why:"Third-party mentions are powerful LLM training signals"},
              {tip:"Add pricing ranges to your pages",why:"'How much does X cost' is one of the most common AI questions"},
              {tip:"Include specific local landmarks in content",why:"'Near Fort Campbell', 'serving Exit 4 off I-24' = geographic specificity"},
              {tip:"Maintain consistent entity identity across the web",why:"Same name, phone, address everywhere = strong entity disambiguation"},
            ].map((t,i)=>(
              <div key={i} className="row">
                <span style={{color:"#4ADE80",fontWeight:700,fontSize:14,flexShrink:0}}>→</span>
                <div>
                  <div style={{fontSize:13,fontWeight:600,color:"#fff",marginBottom:3}}>{t.tip}</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,.4)",lineHeight:1.5}}>{t.why}</div>
                </div>
              </div>
            ))}
          </div>
        </>)}

        {/* ── NAP TAB ── */}
        {tab==="NAP" && (<>
          <div className="card">
            <div className="card-title">✅ Your Official NAP — Use This Everywhere, Exactly As Written</div>
            <div style={{background:"rgba(34,197,94,.05)",border:"1px solid rgba(34,197,94,.15)",borderRadius:8,padding:20,fontFamily:"monospace",fontSize:14,lineHeight:2,color:"#fff"}}>
              <div><strong style={{color:"#4ADE80"}}>Business Name:</strong> {NAP.name}</div>
              <div><strong style={{color:"#4ADE80"}}>Phone:</strong> {NAP.phone}</div>
              <div><strong style={{color:"#4ADE80"}}>Address:</strong> {NAP.address}, {NAP.city}, {NAP.state} {NAP.zip}</div>
              <div><strong style={{color:"#4ADE80"}}>Website:</strong> {NAP.website}</div>
              <div><strong style={{color:"#4ADE80"}}>Email:</strong> {NAP.email}</div>
              <div><strong style={{color:"#4ADE80"}}>Hours:</strong> {NAP.hours}</div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">🔍 NAP Consistency Audit — Where It Appears On Your Site</div>
            {[
              {location:"EmergencyBar (top of every page)",phone:true,address:false,name:false,status:"Partial"},
              {location:"Header navigation CTA button",phone:true,address:false,name:true,status:"Partial"},
              {location:"Footer",phone:true,address:true,name:true,status:"Full"},
              {location:"Contact page",phone:true,address:true,name:true,status:"Full"},
              {location:"About page",phone:true,address:true,name:true,status:"Full"},
              {location:"Homepage JSON-LD schema",phone:true,address:true,name:true,status:"Full"},
              {location:"All service pages (phone only)",phone:true,address:false,name:false,status:"Partial"},
              {location:"Blog post sidebar",phone:true,address:false,name:true,status:"Partial"},
              {location:"404 error page",phone:true,address:false,name:false,status:"Partial"},
              {location:"Sitemap.xml",phone:false,address:false,name:false,status:"None"},
            ].map((n,i)=>(
              <div key={i} className="row">
                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:13,color:"rgba(255,255,255,.7)"}}>{n.location}</span>
                    <Badge label={n.status} color={n.status==="Full"?COLORS.green:n.status==="Partial"?COLORS.yellow:COLORS.red}/>
                  </div>
                  <div style={{display:"flex",gap:12,marginTop:6}}>
                    <span style={{fontSize:11,color:n.phone?COLORS.green:"rgba(255,255,255,.25)"}}>{n.phone?"✅":"❌"} Phone</span>
                    <span style={{fontSize:11,color:n.address?COLORS.green:"rgba(255,255,255,.25)"}}>{n.address?"✅":"❌"} Address</span>
                    <span style={{fontSize:11,color:n.name?COLORS.green:"rgba(255,255,255,.25)"}}>{n.name?"✅":"❌"} Biz Name</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>)}

        {/* ── KEYWORDS TAB ── */}
        {tab==="Keywords" && (<>
          <div className="card">
            <div className="card-title">🎯 Complete Keyword Map — {keywords.length} Target Keywords</div>
            <div style={{overflowX:"auto"}}>
              <table>
                <thead><tr><th>Keyword</th><th>Vol/mo</th><th>Difficulty</th><th>Intent</th><th>Tier</th><th>Opportunity</th><th>Target Pages</th></tr></thead>
                <tbody>
                  {keywords.map((k,i)=>(
                    <tr key={i}>
                      <td style={{fontWeight:600,color:"#fff",minWidth:200}}>{k.kw}</td>
                      <td style={{color:COLORS.green,fontWeight:700}}>{k.vol.toLocaleString()}</td>
                      <td><Badge label={k.diff} color={k.diff==="Very Low"?COLORS.blue:k.diff==="Low"?COLORS.green:k.diff==="Medium"?COLORS.yellow:COLORS.red}/></td>
                      <td><span style={{fontSize:10,background:"rgba(255,255,255,.06)",padding:"2px 8px",borderRadius:100,color:"rgba(255,255,255,.5)"}}>{k.intent}</span></td>
                      <td style={{textAlign:"center"}}><Badge label={`T${k.tier}`} color={k.tier===1?COLORS.green:COLORS.blue}/></td>
                      <td><Badge label={k.opportunity} color={k.opportunity==="HIGH"?COLORS.green:k.opportunity==="MEDIUM"?COLORS.yellow:COLORS.muted}/></td>
                      <td style={{fontSize:11,color:"rgba(255,255,255,.45)"}}>{k.pages.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card-title">📝 Daily Blog Keyword Targets</div>
            <div style={{fontSize:13,color:"rgba(255,255,255,.45)",marginBottom:14}}>Write one post per day targeting these long-tail keywords. Low difficulty = fast rankings.</div>
            {[
              "water damage prevention tips Clarksville TN",
              "how long does water damage restoration take Tennessee",
              "water damage restoration cost Clarksville 2026",
              "USAA water damage claim process Tennessee",
              "mold after water damage Clarksville TN",
              "best water damage company Fort Campbell area",
              "emergency flood cleanup Montgomery County TN",
              "sewage backup cleanup cost Clarksville TN",
              "what to do after pipe burst Clarksville",
              "water damage restoration vs mold remediation Tennessee",
              "structural drying timeline Clarksville TN",
              "basement flooding cleanup Clarksville TN",
              "water damage insurance claim denied Tennessee",
              "storm damage water restoration Clarksville TN 2026",
              "water damage Sango TN restoration services",
            ].map((kw,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:11,color:"rgba(255,255,255,.25)",width:20,textAlign:"right"}}>{i+1}.</span>
                  <span style={{fontSize:13,color:"rgba(255,255,255,.7)"}}>{kw}</span>
                </div>
                <Link href="/admin/blog/new" style={{fontSize:11,color:"#4ADE80",textDecoration:"none",padding:"3px 10px",border:"1px solid rgba(34,197,94,.2)",borderRadius:4}}>Write →</Link>
              </div>
            ))}
          </div>
        </>)}

        {/* ── SCHEMA TAB ── */}
        {tab==="Schema" && (<>
          <div className="card">
            <div className="card-title">🏗️ JSON-LD Schema Audit</div>
            <div style={{overflowX:"auto"}}>
              <table>
                <thead><tr><th>Page</th><th>Schema Type</th><th>Status</th><th>Fields Present</th><th>Missing</th></tr></thead>
                <tbody>
                  {schemaTypes.map((s,i)=>(
                    <tr key={i}>
                      <td style={{color:"#60A5FA",fontFamily:"monospace",fontSize:11}}>{s.page}</td>
                      <td style={{fontWeight:600,color:"#fff",fontSize:12}}>{s.type}</td>
                      <td><StatusDot ok={s.present}/></td>
                      <td style={{fontSize:11}}>{s.fields.map(f=><span key={f} style={{fontSize:9,background:"rgba(34,197,94,.1)",color:"#4ADE80",padding:"1px 6px",borderRadius:100,marginRight:3,marginBottom:2,display:"inline-block"}}>{f}</span>)}</td>
                      <td style={{fontSize:11}}>{s.missing.map(f=><span key={f} style={{fontSize:9,background:"rgba(252,165,165,.1)",color:"#FCA5A5",padding:"1px 6px",borderRadius:100,marginRight:3,marginBottom:2,display:"inline-block"}}>{f}</span>)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card-title">📝 Schema To Add Next</div>
            {[
              {type:"Review + AggregateRating",page:"Service pages",impact:"HIGH",reason:"Star ratings in search results = more clicks",code:`"aggregateRating":{"@type":"AggregateRating","ratingValue":"5.0","reviewCount":"47"}`},
              {type:"BreadcrumbList",page:"All pages",impact:"MEDIUM",reason:"Breadcrumbs appear in Google results",code:`"@type":"BreadcrumbList","itemListElement":[...]`},
              {type:"ImageObject",page:"Homepage",impact:"MEDIUM",reason:"Google can show rich image results",code:`"image":{"@type":"ImageObject","url":"https://..."}`},
              {type:"HowTo",page:"Process pages",impact:"HIGH",reason:"Featured snippets for 'how to' queries",code:`"@type":"HowTo","step":[{"@type":"HowToStep","text":"..."}]`},
              {type:"sameAs (Social profiles)",page:"Organization schema",impact:"MEDIUM",reason:"Links your GBP, Yelp, Facebook to your entity",code:`"sameAs":["https://g.page/...", "https://yelp.com/..."]`},
            ].map((s,i)=>(
              <div key={i} className="row">
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                    <span style={{fontSize:13,fontWeight:700,color:"#A78BFA"}}>{s.type}</span>
                    <Badge label={`Impact: ${s.impact}`} color={s.impact==="HIGH"?COLORS.green:COLORS.yellow}/>
                    <span style={{fontSize:11,color:"rgba(255,255,255,.35)"}}>→ {s.page}</span>
                  </div>
                  <div style={{fontSize:12,color:"rgba(255,255,255,.5)",marginBottom:6}}>{s.reason}</div>
                  <div style={{background:"#09090B",borderRadius:6,padding:"8px 12px",fontFamily:"monospace",fontSize:11,color:"#4ADE80"}}>{s.code}</div>
                </div>
              </div>
            ))}
          </div>
        </>)}

        {/* ── BACKLINKS TAB ── */}
        {tab==="Backlinks" && (<>
          <div className="card">
            <div className="card-title">🔗 Backlink Building Strategy</div>
            <div style={{overflowX:"auto"}}>
              <table>
                <thead><tr><th>Source</th><th>Type</th><th>DR</th><th>Priority</th><th>How To Get It</th><th>Status</th></tr></thead>
                <tbody>
                  {[
                    {src:"Google Business Profile",type:"Citation",dr:"N/A",priority:"CRITICAL",how:"Verify business at business.google.com",status:"pending"},
                    {src:"Clarksville Now (local news)",type:"Press mention",dr:"45+",priority:"HIGH",how:"Submit press release about emergency services",status:"pending"},
                    {src:"Montgomery County TN Govt site",type:"Government",dr:"50+",priority:"HIGH",how:"Contact county emergency management office",status:"pending"},
                    {src:"Fort Campbell Sentinel",type:"Military media",dr:"35+",priority:"HIGH",how:"Pitch article: water damage tips for military families",status:"pending"},
                    {src:"Angi (Angie's List)",type:"Directory",dr:"75",priority:"HIGH",how:"Create free business listing at angi.com",status:"pending"},
                    {src:"HomeAdvisor",type:"Directory",dr:"72",priority:"HIGH",how:"List at homeadvisor.com",status:"pending"},
                    {src:"BBB (Better Business Bureau)",type:"Trust",dr:"65",priority:"HIGH",how:"Apply at bbb.org/accreditation",status:"pending"},
                    {src:"Yelp Business",type:"Directory",dr:"70",priority:"HIGH",how:"Claim/create at biz.yelp.com",status:"pending"},
                    {src:"Expertise.com",type:"Industry",dr:"55",priority:"MEDIUM",how:"Apply to be listed as top Clarksville contractor",status:"pending"},
                    {src:"Thumbtack",type:"Directory",dr:"60",priority:"MEDIUM",how:"Create profile at thumbtack.com",status:"pending"},
                    {src:"Houzz",type:"Home Services",dr:"68",priority:"MEDIUM",how:"Create pro profile at houzz.com",status:"pending"},
                    {src:"Local church/community newsletters",type:"Community",dr:"15-25",priority:"MEDIUM",how:"Sponsor or donate to get a mention + link",status:"pending"},
                  ].map((b,i)=>(
                    <tr key={i}>
                      <td style={{fontWeight:600,color:"#fff",fontSize:12}}>{b.src}</td>
                      <td><Badge label={b.type} color={COLORS.blue}/></td>
                      <td style={{fontWeight:700,color:COLORS.green}}>{b.dr}</td>
                      <td><Badge label={b.priority} color={b.priority==="CRITICAL"?COLORS.red:b.priority==="HIGH"?COLORS.yellow:COLORS.muted}/></td>
                      <td style={{fontSize:11,color:"rgba(255,255,255,.5)",maxWidth:200}}>{b.how}</td>
                      <td><select style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:4,color:"rgba(255,255,255,.5)",fontSize:11,padding:"3px 6px",fontFamily:"inherit"}}>
                        <option>⏳ Pending</option><option>🔄 In Progress</option><option>✅ Done</option>
                      </select></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>)}

        {/* ── ACTIONS TAB ── */}
        {tab==="Actions" && (<>
          <div className="card">
            <div className="card-title">☑️ SEO Launch Checklist ({doneTasks}/{checklist_.length} Complete)</div>
            <div style={{marginBottom:14}}>
              <div className="bar"><div className="bar-fill" style={{width:`${(doneTasks/checklist_.length)*100}%`,background:COLORS.green}}/></div>
              <div style={{fontSize:11,color:"rgba(255,255,255,.35)",marginTop:6}}>{doneTasks} of {checklist_.length} tasks complete — {Math.round((doneTasks/checklist_.length)*100)}%</div>
            </div>
            {checklist_.map((c,i)=>(
              <div key={i} className="row" style={{alignItems:"flex-start"}}>
                <input type="checkbox" checked={c.done} onChange={()=>setChecklist(cl=>cl.map((cc,ii)=>ii===i?{...cc,done:!cc.done}:cc))}
                  style={{accentColor:"#22C55E",width:15,height:15,cursor:"pointer",marginTop:2,flexShrink:0}}/>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontSize:13,fontWeight:600,color:c.done?"rgba(255,255,255,.3)":"#fff",textDecoration:c.done?"line-through":"none"}}>{c.task}</span>
                    <Badge label={c.priority} color={c.priority==="CRITICAL"?COLORS.red:c.priority==="HIGH"?COLORS.yellow:COLORS.muted}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {actionPlan.map((week,wi)=>(
            <div key={wi} className="card">
              <div className="card-title">📅 {week.week} Action Plan</div>
              {week.tasks.map((t,i)=>(
                <div key={i} className="row">
                  <div style={{flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3,flexWrap:"wrap"}}>
                      <span style={{fontSize:13,fontWeight:600,color:"#fff"}}>{t.task}</span>
                      <Badge label={t.priority} color={t.priority==="CRITICAL"?COLORS.red:t.priority==="HIGH"?COLORS.yellow:COLORS.muted}/>
                      <span style={{fontSize:11,color:"rgba(255,255,255,.3)"}}>⏱ {t.time}</span>
                    </div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,.4)",lineHeight:1.5}}>{t.why}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>)}

      </div>
    </div>
  </>);
}
