"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const CATS = ["Water Damage","Mold Remediation","Flood Cleanup","Insurance","Prevention","Fort Campbell","Seasonal","Emergency"];

const SIDEBAR = `
  .sb{background:#09090B;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;width:240px;flex-shrink:0}
  .sbl{display:flex;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.06)}
  .sbm{width:32px;height:32px;border-radius:6px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:14px}
  .sbn{font-size:13px;font-weight:600;color:#fff}.sbs{font-size:9px;color:rgba(255,255,255,.3)}
  .sbnav{padding:16px 12px;flex:1;overflow-y:auto}
  .sbsec{font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);padding:12px 8px 6px;margin-top:8px}
  .sblink{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:6px;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);text-decoration:none;margin-bottom:2px}
  .sblink:hover{background:rgba(255,255,255,.07);color:#fff}
  .sblink.active{background:rgba(34,197,94,.1);color:#4ADE80}
`;

export default function NewBlogPostPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Water Damage");
  const [excerpt, setExcerpt] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [sections, setSections] = useState([{heading:"",body:""}]);
  const [featuredImage, setFeaturedImage] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const autoSlug = (v:string) => v.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();
  const wc = sections.reduce((a,s)=>a+s.body.split(/\s+/).filter(Boolean).length,0);

  function handleTitle(v:string) {
    setTitle(v);
    if(!slug || slug===autoSlug(title)) setSlug(autoSlug(v));
    if(!metaTitle) setMetaTitle(v + " | Clarksville Water Damage Restoration");
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { setError("Image must be under 2MB"); return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setFeaturedImage(result);
      setImagePreview(result);
      setError("");
    };
    reader.readAsDataURL(file);
  }

  function removeImage() {
    setFeaturedImage("");
    setImagePreview("");
    if (fileRef.current) fileRef.current.value = "";
  }

  function updateSection(i:number, field:string, val:string) {
    setSections(s => s.map((sec,idx) => idx===i ? {...sec,[field]:val} : sec));
  }
  function addSection() { setSections(s=>[...s,{heading:"",body:""}]); }
  function removeSection(i:number) { if(sections.length>1) setSections(s=>s.filter((_,idx)=>idx!==i)); }

  // SEO scores
  const titleScore = metaTitle.length >= 50 && metaTitle.length <= 60 ? "green" : metaTitle.length > 0 ? "yellow" : "red";
  const descScore = metaDesc.length >= 150 && metaDesc.length <= 160 ? "green" : metaDesc.length > 0 ? "yellow" : "red";
  const wcScore = wc >= 800 ? "green" : wc >= 400 ? "yellow" : "red";
  const kwScore = focusKeyword && sections.some(s=>s.body.toLowerCase().includes(focusKeyword.toLowerCase())) ? "green" : "red";

  async function save(publish:boolean) {
    if(!title.trim()||!slug.trim()) { setError("Title and slug are required."); return; }
    if(sections.every(s=>!s.body.trim())) { setError("Add at least one content section."); return; }
    publish ? setPublishing(true) : setSaving(true);
    setError(""); setSuccess("");
    try {
      const res = await fetch("/api/blog/posts", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          title, slug, category, excerpt, metaTitle: metaTitle||title,
          metaDesc: metaDesc||excerpt, focusKeyword, date,
          content: sections.filter(s=>s.body.trim()),
          featuredImage: featuredImage||"",
          published: publish, author: "Clarksville Restoration Team"
        })
      });
      const data = await res.json();
      if(data.success) {
        setSuccess(publish ? "✅ Post published!" : "✅ Draft saved!");
        if(publish) setTimeout(()=>window.location.href="/admin/blog",1200);
      } else { setError(data.message||"Save failed."); }
    } catch { setError("Connection error."); }
    finally { setSaving(false); setPublishing(false); }
  }

  const scoreColor = (s:string) => s==="green"?"#4ADE80":s==="yellow"?"#FBBF24":"#FCA5A5";
  const scoreLabel = (s:string) => s==="green"?"✅":s==="yellow"?"⚠️":"❌";

  return (<>
    <style>{`
      *{box-sizing:border-box;margin:0;padding:0}
      body{font-family:var(--font-inter,system-ui,sans-serif);background:#0F0F11;color:#fff;min-height:100vh}
      ${SIDEBAR}
      .layout{display:flex;min-height:100vh}
      .main{flex:1;padding:28px 32px;overflow-y:auto;min-width:0}
      .ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;flex-wrap:wrap;gap:12px}
      .pt{font-size:20px;font-weight:700;color:#fff}
      .actions{display:flex;gap:10px;flex-wrap:wrap}
      .btn-save{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:10px 20px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit}
      .btn-save:hover{background:rgba(255,255,255,.14)}
      .btn-pub{background:#22C55E;color:#09090B;border:none;border-radius:6px;padding:10px 20px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit}
      .btn-pub:hover{background:#16A34A}
      .btn-pub:disabled,.btn-save:disabled{opacity:.5;cursor:not-allowed}
      .grid{display:grid;grid-template-columns:1fr 320px;gap:20px;align-items:start}
      .card{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:20px;margin-bottom:16px}
      .card-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.35);margin-bottom:14px}
      label{display:block;font-size:11px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:6px}
      .inp{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fff;font-size:14px;padding:10px 12px;outline:none;font-family:inherit;transition:border-color .2s}
      .inp:focus{border-color:#22C55E}
      .inp::placeholder{color:rgba(255,255,255,.2)}
      textarea.inp{resize:vertical;line-height:1.6}
      select.inp option{background:#18181B}
      .field{margin-bottom:14px}
      .hint{font-size:11px;color:rgba(255,255,255,.3);margin-top:5px}
      .cnt{font-size:11px;margin-top:4px;text-align:right}
      .sec-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:16px;margin-bottom:12px}
      .sec-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
      .sec-lbl{font-size:11px;font-weight:600;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px}
      .rm-btn{background:rgba(252,165,165,.08);border:1px solid rgba(252,165,165,.12);color:#FCA5A5;border-radius:4px;padding:4px 10px;font-size:11px;cursor:pointer;font-family:inherit}
      .add-btn{width:100%;background:rgba(34,197,94,.06);border:1px dashed rgba(34,197,94,.25);color:#4ADE80;border-radius:6px;padding:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;margin-top:4px}
      .add-btn:hover{background:rgba(34,197,94,.1)}
      .seo-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)}
      .seo-row:last-child{border-bottom:none}
      .seo-label{font-size:12px;color:rgba(255,255,255,.55)}
      .alert{border-radius:6px;padding:10px 14px;font-size:13px;margin-bottom:14px}
      .alert.err{background:rgba(252,165,165,.07);border:1px solid rgba(252,165,165,.15);color:#FCA5A5}
      .alert.ok{background:rgba(34,197,94,.07);border:1px solid rgba(34,197,94,.2);color:#4ADE80}
      .img-upload-area{border:2px dashed rgba(255,255,255,.12);border-radius:8px;padding:24px;text-align:center;cursor:pointer;transition:all .2s;margin-bottom:14px}
      .img-upload-area:hover{border-color:#22C55E;background:rgba(34,197,94,.04)}
      .img-preview{position:relative;border-radius:8px;overflow:hidden;margin-bottom:10px}
      .img-preview img{width:100%;height:160px;object-fit:cover;border-radius:8px;display:block}
      .img-remove{position:absolute;top:8px;right:8px;background:rgba(0,0,0,.7);border:none;color:#fff;border-radius:4px;padding:4px 10px;font-size:11px;cursor:pointer;font-family:inherit}
      .wc-bar{height:4px;border-radius:2px;background:rgba(255,255,255,.06);margin-top:6px;overflow:hidden}
      .wc-fill{height:100%;border-radius:2px;transition:width .3s,background .3s}
      @media(max-width:1100px){.grid{grid-template-columns:1fr}.sb{display:none}.main{padding:16px}}
    `}</style>
    <div className="layout">
      <div className="sb">
        <div className="sbl"><div className="sbm">💧</div><div><div className="sbn">WDR Admin</div><div className="sbs">waterdamageclarksville.com</div></div></div>
        <div className="sbnav">
          <div className="sbsec">Main</div>
          <Link href="/admin/dashboard" className="sblink">📊 Dashboard</Link>
          <div className="sbsec">Content</div>
          <Link href="/admin/blog" className="sblink">✍️ Blog Posts</Link>
          <Link href="/admin/blog/new" className="sblink active">➕ New Post</Link>
          <Link href="/admin/reviews" className="sblink">⭐ Reviews</Link>
          <div className="sbsec">SEO</div>
          <Link href="/admin/seo" className="sblink">🔍 SEO Monitor</Link>
          <Link href="/admin/settings" className="sblink">⚙️ Settings</Link>
          <div className="sbsec">Website</div>
          <Link href="/" target="_blank" className="sblink">🌐 View Site ↗</Link>
        </div>
      </div>
      <div className="main">
        <div className="ph">
          <div>
            <Link href="/admin/blog" style={{fontSize:12,color:"rgba(255,255,255,.4)",textDecoration:"none"}}>← All Posts</Link>
            <div className="pt" style={{marginTop:4}}>✍️ New Blog Post</div>
          </div>
          <div className="actions">
            <button className="btn-save" onClick={()=>save(false)} disabled={saving||publishing}>{saving?"Saving…":"Save Draft"}</button>
            <button className="btn-pub" onClick={()=>save(true)} disabled={saving||publishing}>{publishing?"Publishing…":"🚀 Publish Now"}</button>
          </div>
        </div>
        {error && <div className="alert err">⚠️ {error}</div>}
        {success && <div className="alert ok">{success}</div>}
        <div className="grid">
          <div>
            {/* Basic Info */}
            <div className="card">
              <div className="card-title">Post Details</div>
              <div className="field">
                <label>Post Title *</label>
                <input className="inp" placeholder="e.g. Water Damage Prevention Tips for Fort Campbell Families" value={title} onChange={e=>handleTitle(e.target.value)}/>
              </div>
              <div className="field">
                <label>URL Slug *</label>
                <input className="inp" placeholder="auto-generated-from-title" value={slug} onChange={e=>setSlug(autoSlug(e.target.value))}/>
                <div className="hint">→ /blog/{slug||"your-slug-here"}</div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                <div className="field">
                  <label>Category</label>
                  <select className="inp" value={category} onChange={e=>setCategory(e.target.value)}>
                    {CATS.map(c=><option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label>Publish Date</label>
                  <input className="inp" type="date" value={date} onChange={e=>setDate(e.target.value)}/>
                </div>
              </div>
              <div className="field">
                <label>Excerpt (shown in blog listing)</label>
                <textarea className="inp" rows={2} placeholder="Brief summary of this post…" value={excerpt} onChange={e=>setExcerpt(e.target.value)}/>
              </div>
            </div>

            {/* Featured Image */}
            <div className="card">
              <div className="card-title">📸 Featured Image</div>
              {imagePreview ? (
                <div className="img-preview">
                  <img src={imagePreview} alt="Featured"/>
                  <button className="img-remove" onClick={removeImage}>✕ Remove</button>
                </div>
              ) : (
                <div className="img-upload-area" onClick={()=>fileRef.current?.click()}>
                  <div style={{fontSize:28,marginBottom:8}}>🖼️</div>
                  <div style={{fontSize:13,color:"rgba(255,255,255,.5)",marginBottom:4}}>Click to upload featured image</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,.25)"}}>JPG, PNG, WebP · Max 2MB · Recommended 1200×630px</div>
                </div>
              )}
              <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleImageUpload}/>
              {!imagePreview && (
                <button className="add-btn" onClick={()=>fileRef.current?.click()}>📁 Choose Image File</button>
              )}
              <div className="hint">Featured images appear at the top of your blog post and in social sharing previews.</div>
            </div>

            {/* Content Sections */}
            <div className="card">
              <div className="card-title">Content Sections</div>
              {sections.map((sec,i)=>(
                <div key={i} className="sec-card">
                  <div className="sec-hdr">
                    <span className="sec-lbl">Section {i+1}</span>
                    {sections.length>1 && <button className="rm-btn" onClick={()=>removeSection(i)}>✕ Remove</button>}
                  </div>
                  <div className="field">
                    <label>Section Heading</label>
                    <input className="inp" placeholder="e.g. How to Prevent Water Damage" value={sec.heading} onChange={e=>updateSection(i,"heading",e.target.value)}/>
                  </div>
                  <div className="field">
                    <label>Content *</label>
                    <textarea className="inp" rows={5} placeholder="Write your section content here…" value={sec.body} onChange={e=>updateSection(i,"body",e.target.value)}/>
                    <div className="cnt" style={{color:"rgba(255,255,255,.3)"}}>{sec.body.split(/\s+/).filter(Boolean).length} words</div>
                  </div>
                </div>
              ))}
              <button className="add-btn" onClick={addSection}>+ Add Another Section</button>
              <div style={{marginTop:14}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                  <span style={{fontSize:12,color:"rgba(255,255,255,.4)"}}>Total word count</span>
                  <span style={{fontSize:12,color:scoreColor(wcScore)}}>{wc} words {wc>=800?"✅":wc>=400?"(aim for 800+)":"(too short)"}</span>
                </div>
                <div className="wc-bar"><div className="wc-fill" style={{width:`${Math.min(100,wc/8)}%`,background:scoreColor(wcScore)}}/></div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            {/* SEO Checker */}
            <div className="card">
              <div className="card-title">🔍 Live SEO Checker</div>
              <div className="field">
                <label>Focus Keyword</label>
                <input className="inp" placeholder="e.g. water damage Clarksville TN" value={focusKeyword} onChange={e=>setFocusKeyword(e.target.value)}/>
              </div>
              <div className="field">
                <label>Meta Title <span style={{color:"rgba(255,255,255,.3)",fontWeight:400,textTransform:"none",letterSpacing:0}}>({metaTitle.length}/60)</span></label>
                <input className="inp" placeholder="SEO title (50-60 chars)" value={metaTitle} onChange={e=>setMetaTitle(e.target.value)}/>
                <div className="wc-bar" style={{marginTop:6}}><div className="wc-fill" style={{width:`${Math.min(100,(metaTitle.length/60)*100)}%`,background:scoreColor(titleScore)}}/></div>
              </div>
              <div className="field">
                <label>Meta Description <span style={{color:"rgba(255,255,255,.3)",fontWeight:400,textTransform:"none",letterSpacing:0}}>({metaDesc.length}/160)</span></label>
                <textarea className="inp" rows={3} placeholder="SEO description (150-160 chars)" value={metaDesc} onChange={e=>setMetaDesc(e.target.value)}/>
                <div className="wc-bar" style={{marginTop:4}}><div className="wc-fill" style={{width:`${Math.min(100,(metaDesc.length/160)*100)}%`,background:scoreColor(descScore)}}/></div>
              </div>
              <div style={{marginTop:8}}>
                {[
                  {label:"Meta title length",score:titleScore,detail:`${metaTitle.length} chars`},
                  {label:"Meta description",score:descScore,detail:`${metaDesc.length} chars`},
                  {label:"Word count",score:wcScore,detail:`${wc} words`},
                  {label:"Keyword in content",score:kwScore,detail:focusKeyword?"Check":"-"},
                ].map(({label,score,detail})=>(
                  <div key={label} className="seo-row">
                    <span className="seo-label">{scoreLabel(score)} {label}</span>
                    <span style={{fontSize:11,color:scoreColor(score)}}>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick tips */}
            <div className="card">
              <div className="card-title">💡 SEO Tips</div>
              {[
                "Include focus keyword in title & first paragraph",
                "Aim for 800+ words per post",
                "Add featured image for social sharing",
                "Meta title: 50-60 characters",
                "Meta description: 150-160 characters",
                "Target: 'water damage [city] TN' keywords",
              ].map((t,i)=>(
                <div key={i} style={{fontSize:12,color:"rgba(255,255,255,.4)",padding:"7px 0",borderBottom:"1px solid rgba(255,255,255,.04)",lineHeight:1.5}}>
                  → {t}
                </div>
              ))}
            </div>

            {/* Save buttons (sticky on mobile) */}
            <div className="card">
              <button className="btn-pub" style={{width:"100%",marginBottom:10}} onClick={()=>save(true)} disabled={saving||publishing}>
                {publishing?"Publishing…":"🚀 Publish Now"}
              </button>
              <button className="btn-save" style={{width:"100%"}} onClick={()=>save(false)} disabled={saving||publishing}>
                {saving?"Saving…":"💾 Save as Draft"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}
