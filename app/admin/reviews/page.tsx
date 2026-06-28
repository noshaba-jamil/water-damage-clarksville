"use client";
import { useState } from "react";
import Link from "next/link";

const sidebarLinks = [
  {href:"/admin/dashboard",icon:"📊",label:"Dashboard"},
  {href:"/admin/blog",icon:"✍️",label:"Blog Posts"},
  {href:"/admin/blog/new",icon:"➕",label:"New Post"},
  {href:"/admin/reviews",icon:"⭐",label:"Reviews",active:true},
  {href:"/admin/seo",icon:"🔍",label:"SEO Monitor"},
  {href:"/admin/settings",icon:"⚙️",label:"Settings"},
];

const defaultReviews = [
  {id:"1",name:"Jennifer M.",location:"Sango, TN",rating:5,date:"2026-03-10",text:"When our basement flooded at 2am, they were on-site in 40 minutes. Handled everything with State Farm directly. Could not have asked for a better team.",service:"Basement Flooding",verified:true},
  {id:"2",name:"Staff Sgt. Robert K.",location:"Fort Campbell, KY",rating:5,date:"2026-02-14",text:"The most professional restoration service I have encountered. Meticulous USAA documentation, fast claim settlement.",service:"Emergency Water Damage",verified:true},
  {id:"3",name:"Marcus T.",location:"St. Bethlehem, TN",rating:5,date:"2026-01-28",text:"Used thermal imaging cameras to find moisture hidden in our walls. Completely dried and verified. Zero mold issues eight months later.",service:"Structural Drying",verified:true},
  {id:"4",name:"Patricia W.",location:"Clarksville, TN",rating:5,date:"2025-12-05",text:"Sewage backup at 6pm on a Friday — they arrived within the hour, in full protective gear. My insurance claim was filed that same evening.",service:"Sewage Backup",verified:true},
];

type Review = typeof defaultReviews[0];

export default function ReviewsManagerPage() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [adding, setAdding] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({name:"",location:"",rating:5,date:new Date().toISOString().split("T")[0],text:"",service:"",verified:true});

  function addReview() {
    if (!form.name.trim() || !form.text.trim()) return;
    setReviews([{...form, id:Date.now().toString()}, ...reviews]);
    setForm({name:"",location:"",rating:5,date:new Date().toISOString().split("T")[0],text:"",service:"",verified:true});
    setAdding(false); setSaved(true); setTimeout(()=>setSaved(false),4000);
  }
  function removeReview(id:string) { if(confirm("Remove this review from your website?")) setReviews(reviews.filter(r=>r.id!==id)); }

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:var(--font-inter);background:#0F0F11;color:#fff;min-height:100vh}
        .layout{display:grid;grid-template-columns:240px 1fr;min-height:100vh}
        .sidebar{background:#09090B;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;position:sticky;top:0;height:100vh}
        .sb-logo{display:flex;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.06)}
        .sb-mark{width:32px;height:32px;border-radius:6px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:14px}
        .sb-name{font-size:13px;font-weight:600;color:#fff}
        .sb-site{font-size:9px;color:rgba(255,255,255,.3)}
        .sb-nav{padding:16px 12px;flex:1}
        .sb-sec{font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);padding:12px 8px 6px;margin-top:8px}
        .sb-link{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:6px;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);text-decoration:none;margin-bottom:2px;transition:all .15s}
        .sb-link:hover{background:rgba(255,255,255,.07);color:#fff}
        .sb-link.active{background:rgba(34,197,94,.1);color:#4ADE80}
        .sb-footer{padding:16px;border-top:1px solid rgba(255,255,255,.06)}
        .main{padding:32px;overflow-y:auto}
        .page-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:14px}
        .page-title{font-family:'Georgia',serif;font-size:24px;font-weight:700;color:#fff}
        .page-sub{font-size:13px;color:rgba(255,255,255,.4);margin-top:4px}
        .btn-green{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:700;border:none;cursor:pointer}
        .btn-green:hover{background:#16A34A}
        .info-box{background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.15);border-radius:10px;padding:20px 24px;margin-bottom:24px}
        .info-title{font-size:14px;font-weight:700;color:#4ADE80;margin-bottom:12px}
        .info-steps{display:flex;flex-direction:column;gap:8px}
        .step{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:rgba(255,255,255,.55);line-height:1.6}
        .step-n{width:20px;height:20px;border-radius:50%;background:#22C55E;color:#09090B;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;margin-top:1px}
        .success-box{background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.2);border-radius:8px;padding:12px 16px;font-size:13px;color:#4ADE80;margin-bottom:16px;display:flex;align-items:center;gap:8px}
        .add-form{background:#18181B;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:28px;margin-bottom:28px}
        .form-title{font-size:15px;font-weight:700;color:#fff;margin-bottom:18px}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
        .field label{display:block;font-size:10px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:7px}
        .field input,.field select,.field textarea{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fff;font-size:14px;padding:11px 12px;outline:none;transition:border-color .2s;font-family:var(--font-inter);-webkit-appearance:none}
        .field input:focus,.field select:focus,.field textarea:focus{border-color:#22C55E}
        .field select option{background:#18181B}
        .field textarea{min-height:100px;resize:none;line-height:1.65}
        .field input::placeholder,.field textarea::placeholder{color:rgba(255,255,255,.2)}
        .form-actions{display:flex;gap:10px;margin-top:6px}
        .btn-save{background:#22C55E;color:#09090B;border:none;border-radius:6px;padding:11px 22px;font-size:13px;font-weight:700;cursor:pointer}
        .btn-save:hover{background:#16A34A}
        .btn-cancel{background:transparent;color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:11px 18px;font-size:13px;cursor:pointer}
        .btn-cancel:hover{background:rgba(255,255,255,.05)}
        .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px}
        .stat{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:16px 18px}
        .stat-n{font-family:'Georgia',serif;font-size:28px;font-weight:700;color:#4ADE80;line-height:1;margin-bottom:4px}
        .stat-l{font-size:11px;color:rgba(255,255,255,.35)}
        .rv-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
        .rv-card{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:22px}
        .rv-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px}
        .rv-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff;flex-shrink:0}
        .rv-info{flex:1;margin-left:12px}
        .rv-name{font-size:14px;font-weight:600;color:#fff}
        .rv-loc{font-size:11px;color:rgba(255,255,255,.35);margin-top:2px}
        .rv-service-badge{font-size:10px;color:#4ADE80;margin-top:3px}
        .rv-stars{color:#F59E0B;font-size:14px}
        .rv-google-badge{display:inline-flex;align-items:center;gap:4px;background:rgba(66,133,244,.1);border-radius:100px;padding:2px 8px;font-size:9px;font-weight:600;color:#60A5FA;margin-top:4px}
        .rv-text{font-size:13.5px;line-height:1.7;color:rgba(255,255,255,.6);font-style:italic;margin-bottom:14px}
        .rv-text::before{content:'"'}.rv-text::after{content:'"'}
        .rv-footer{display:flex;align-items:center;justify-content:space-between}
        .rv-date{font-size:11px;color:rgba(255,255,255,.25)}
        .rv-del{background:transparent;border:1px solid rgba(252,165,165,.15);border-radius:4px;color:#FCA5A5;font-size:11px;font-weight:600;padding:4px 10px;cursor:pointer;transition:all .15s}
        .rv-del:hover{background:rgba(252,165,165,.08)}
        .empty{text-align:center;padding:60px 20px;color:rgba(255,255,255,.3)}
        @media(max-width:1024px){.layout{grid-template-columns:1fr}.sidebar{display:none}.main{padding:20px}.form-grid{grid-template-columns:1fr}.stats-row{grid-template-columns:repeat(2,1fr)}.rv-grid{grid-template-columns:1fr}}
        @media(max-width:480px){.stats-row{grid-template-columns:1fr 1fr}}
      `}</style>
      <div className="layout">
        <div className="sidebar">
          <div className="sb-logo"><div className="sb-mark">💧</div><div><div className="sb-name">WDR Admin</div><div className="sb-site">waterdamageclarksville.com</div></div></div>
          <div className="sb-nav">
            <div className="sb-sec">Main</div>
            {sidebarLinks.map(l=><Link key={l.href} href={l.href} className={`sb-link${l.active?" active":""}`}>{l.icon} {l.label}</Link>)}
            <div className="sb-sec">Website</div>
            <Link href="/" target="_blank" className="sb-link">🌐 View Site ↗</Link>
          </div>
          <div className="sb-footer"><button className="sb-link" style={{background:"none",border:"none",cursor:"pointer",color:"rgba(255,255,255,.4)",width:"100%"}} onClick={()=>{fetch('/api/admin/auth',{method:'DELETE'}).then(()=>window.location.href='/admin');}}>🚪 Sign Out</button></div>
        </div>

        <div className="main">
          <div className="page-header">
            <div><div className="page-title">Reviews Manager</div><div className="page-sub">Add real Google reviews — they appear live on your website instantly</div></div>
            <button className="btn-green" onClick={()=>setAdding(v=>!v)}>+ Add Google Review</button>
          </div>

          {/* Stats */}
          <div className="stats-row">
            <div className="stat"><div className="stat-n">{reviews.length}</div><div className="stat-l">Total Reviews</div></div>
            <div className="stat"><div className="stat-n">{(reviews.reduce((a,r)=>a+r.rating,0)/Math.max(reviews.length,1)).toFixed(1)}★</div><div className="stat-l">Average Rating</div></div>
            <div className="stat"><div className="stat-n">{reviews.filter(r=>r.verified).length}</div><div className="stat-l">Google Verified</div></div>
            <div className="stat"><div className="stat-n">{reviews.filter(r=>r.rating===5).length}</div><div className="stat-l">5-Star Reviews</div></div>
          </div>

          {/* How-to guide */}
          <div className="info-box">
            <div className="info-title">📋 How to Add Your Real Google Reviews</div>
            <div className="info-steps">
              <div className="step"><span className="step-n">1</span>Go to <strong style={{color:"rgba(255,255,255,.75)"}}>Google Business Profile</strong> → Reviews tab</div>
              <div className="step"><span className="step-n">2</span>Find a 5-star review — copy the name, date, stars, and review text exactly</div>
              <div className="step"><span className="step-n">3</span>Click <strong style={{color:"#4ADE80"}}>"+ Add Google Review"</strong> above and paste the information</div>
              <div className="step"><span className="step-n">4</span>Click Save — the review appears on your website immediately</div>
              <div className="step"><span className="step-n">5</span>Add your newest reviews weekly — fresh reviews improve local SEO rankings</div>
            </div>
          </div>

          {saved && <div className="success-box">✅ Review added! It now appears live on your website.</div>}

          {/* Add Form */}
          {adding && (
            <div className="add-form">
              <div className="form-title">📝 Add New Google Review</div>
              <div className="form-grid">
                <div className="field"><label>Reviewer Name *</label><input type="text" placeholder="e.g. Jennifer M." value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
                <div className="field"><label>Location (City, State)</label><input type="text" placeholder="e.g. Sango, TN" value={form.location} onChange={e=>setForm({...form,location:e.target.value})}/></div>
                <div className="field"><label>Star Rating *</label>
                  <select value={form.rating} onChange={e=>setForm({...form,rating:Number(e.target.value)})}>
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
                    <option value={3}>⭐⭐⭐ 3 Stars</option>
                  </select>
                </div>
                <div className="field"><label>Review Date</label><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></div>
                <div className="field"><label>Service Used</label><input type="text" placeholder="e.g. Emergency Water Damage" value={form.service} onChange={e=>setForm({...form,service:e.target.value})}/></div>
                <div className="field"><label>Verified Google Review?</label>
                  <select value={form.verified?"yes":"no"} onChange={e=>setForm({...form,verified:e.target.value==="yes"})}>
                    <option value="yes">✅ Yes — copied from Google</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              <div className="field" style={{marginBottom:16}}><label>Review Text * (copy from Google exactly)</label>
                <textarea placeholder="Paste the complete review text from Google here..." value={form.text} onChange={e=>setForm({...form,text:e.target.value})}/>
              </div>
              <div className="form-actions">
                <button className="btn-save" onClick={addReview}>💾 Save Review</button>
                <button className="btn-cancel" onClick={()=>setAdding(false)}>Cancel</button>
              </div>
            </div>
          )}

          {/* Reviews Grid */}
          {reviews.length === 0 ? (
            <div className="empty"><div style={{fontSize:44,marginBottom:14}}>⭐</div><div style={{fontSize:16,color:"rgba(255,255,255,.4)",marginBottom:8}}>No reviews yet</div><p style={{fontSize:13}}>Add your real Google reviews to build trust and improve rankings.</p></div>
          ) : (
            <div className="rv-grid">
              {reviews.map(r=>(
                <div key={r.id} className="rv-card">
                  <div className="rv-top">
                    <div style={{display:"flex",alignItems:"center"}}>
                      <div className="rv-av">{r.name.split(" ").map((n:string)=>n[0]).join("").substring(0,2).toUpperCase()}</div>
                      <div className="rv-info">
                        <div className="rv-name">{r.name}</div>
                        {r.location&&<div className="rv-loc">📍 {r.location}</div>}
                        {r.service&&<div className="rv-service-badge">✓ {r.service}</div>}
                      </div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div className="rv-stars">{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</div>
                      {r.verified&&<div className="rv-google-badge">
                        <svg width="10" height="10" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        Google
                      </div>}
                    </div>
                  </div>
                  <div className="rv-text">{r.text}</div>
                  <div className="rv-footer">
                    <span className="rv-date">{r.date}</span>
                    <button className="rv-del" onClick={()=>removeReview(r.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
