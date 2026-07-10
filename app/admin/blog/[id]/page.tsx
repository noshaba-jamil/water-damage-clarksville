 import { requireAdminAuth } from "@/lib/auth";
import { getPostByIdAsync } from "@/lib/blogStorage";
import { notFound } from "next/navigation";
import Link from "next/link";
import PostActions from "../PostActions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit Post | Admin", robots: { index: false } };

export default async function EditPostPage({ params }: { params: { id: string } }) {
  await requireAdminAuth();
  const post = await getPostByIdAsync(params.id);
  if (!post) notFound();
  const wc = post.content.reduce((a, s) => a + s.body.split(/\s+/).filter(Boolean).length, 0);
  return (
    <>
      <style>{`.l{display:grid;grid-template-columns:240px 1fr;min-height:100vh;font-family:var(--font-inter);background:#0F0F11;color:#fff} .sb{background:#09090B;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;position:sticky;top:0;height:100vh} .sbl{display:flex;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.06)} .sbm{width:32px;height:32px;border-radius:6px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:14px} .sbn{font-size:13px;font-weight:600;color:#fff} .sbs{font-size:9px;color:rgba(255,255,255,.3)} .sbnav{padding:16px 12px;flex:1} .sbsec{font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);padding:12px 8px 6px;margin-top:8px} .sblink{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:6px;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);text-decoration:none;margin-bottom:2px;transition:all .15s} .sblink:hover{background:rgba(255,255,255,.07);color:#fff} .main{padding:32px;overflow-y:auto} .badge{font-size:10px;font-weight:700;padding:4px 12px;border-radius:100px} .badge.pub{background:rgba(34,197,94,.15);color:#4ADE80} .badge.draft{background:rgba(251,191,36,.1);color:#FBBF24} .info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:22px} .ig{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:16px} .ig label{font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.3);display:block;margin-bottom:5px} .ig .val{font-size:14px;color:#fff;font-weight:500;word-break:break-all} .ig .val.green{color:#4ADE80} .secs{display:flex;flex-direction:column;gap:14px;margin-bottom:22px} .sec{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:18px} .sec h3{font-family:'Georgia',serif;font-size:17px;font-weight:700;color:#fff;margin-bottom:8px} .sec p{font-size:13px;line-height:1.7;color:rgba(255,255,255,.55)} @media(max-width:1024px){.l{grid-template-columns:1fr}.sb{display:none}.main{padding:20px}.info-grid{grid-template-columns:1fr 1fr}} @media(max-width:480px){.info-grid{grid-template-columns:1fr}}`}</style>
      <div className="l">
        <div className="sb">
          <div className="sbl"><div className="sbm">💧</div><div><div className="sbn">WDR Admin</div><div className="sbs">water-damage-clarksville.com</div></div></div>
          <div className="sbnav">
            <div className="sbsec">Main</div><Link href="/admin/dashboard" className="sblink">📊 Dashboard</Link>
            <div className="sbsec">Content</div>
            <Link href="/admin/blog" className="sblink">✍️ Blog Posts</Link>
            <Link href="/admin/blog/new" className="sblink">➕ New Post</Link>
            <Link href="/admin/reviews" className="sblink">⭐ Reviews</Link>
            <div className="sbsec">SEO</div>
            <Link href="/admin/seo" className="sblink">🔍 SEO Monitor</Link>
            <Link href="/admin/settings" className="sblink">⚙️ Settings</Link>
          </div>
        </div>
        <div className="main">
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22,flexWrap:"wrap",gap:12}}>
            <div><Link href="/admin/blog" style={{fontSize:12,color:"rgba(255,255,255,.4)",textDecoration:"none"}}>← All Posts</Link><div style={{fontFamily:"'Georgia',serif",fontSize:20,fontWeight:700,color:"#fff",marginTop:6}}>{post.title}</div></div>
            <span className={`badge ${post.published?"pub":"draft"}`}>{post.published?"Published":"Draft"}</span>
          </div>
          <div className="info-grid">
            <div className="ig"><label>Slug</label><div className="val">/blog/{post.slug}</div></div>
            <div className="ig"><label>Category</label><div className="val">{post.category}</div></div>
            <div className="ig"><label>Read Time</label><div className="val">{post.readTime}</div></div>
            <div className="ig"><label>Date</label><div className="val">{post.date}</div></div>
            <div className="ig"><label>Focus Keyword</label><div className="val green">{post.focusKeyword||"—"}</div></div>
            <div className="ig"><label>Word Count</label><div className="val green">{wc} words</div></div>
          </div>
          <div style={{background:"#18181B",border:"1px solid rgba(255,255,255,.06)",borderRadius:8,padding:18,marginBottom:22}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:1,color:"rgba(255,255,255,.35)",marginBottom:12}}>SEO Settings</div>
            <div style={{fontSize:13,color:"rgba(255,255,255,.55)",marginBottom:8}}><strong style={{color:"#fff"}}>Meta Title:</strong> {post.metaTitle}</div>
            <div style={{fontSize:13,color:"rgba(255,255,255,.55)"}}><strong style={{color:"#fff"}}>Meta Desc:</strong> {post.metaDesc}</div>
          </div>
          <div className="secs">{post.content.map((s,i)=><div key={i} className="sec"><h3>{s.heading||`Section ${i+1}`}</h3><p>{s.body.substring(0,200)}{s.body.length>200?"...":""}</p></div>)}</div>
          <PostActions postId={post.id} slug={post.slug} published={post.published} />
        </div>
      </div>
    </>
  );
}