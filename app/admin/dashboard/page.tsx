 import { requireAdminAuth } from "@/lib/auth";
import { getAllBlogPostsAsync } from "@/lib/blogStorage";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

export const metadata = { title: "Dashboard | Admin", robots: { index: false } };

export default async function DashboardPage() {
  await requireAdminAuth();
  const posts = await getAllBlogPostsAsync();
  const published = posts.filter(p => p.published).length;
  const drafts = posts.filter(p => !p.published).length;
  return (
    <>
      <style>{`.l{display:grid;grid-template-columns:240px 1fr;min-height:100vh;font-family:var(--font-inter);background:#0F0F11;color:#fff} .sb{background:#09090B;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;position:sticky;top:0;height:100vh} .sbl{display:flex;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.06)} .sbm{width:32px;height:32px;border-radius:6px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:14px} .sbn{font-size:13px;font-weight:600;color:#fff} .sbs{font-size:9px;color:rgba(255,255,255,.3)} .sbnav{padding:16px 12px;flex:1} .sbsec{font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);padding:12px 8px 6px;margin-top:8px} .sblink{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:6px;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);text-decoration:none;margin-bottom:2px;transition:all .15s} .sblink:hover{background:rgba(255,255,255,.07);color:#fff} .sblink.active{background:rgba(34,197,94,.1);color:#4ADE80} .main{padding:32px;overflow-y:auto} .ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:14px} .pt{font-family:'Georgia',serif;font-size:24px;font-weight:700;color:#fff} .ps{font-size:13px;color:rgba(255,255,255,.4);margin-top:4px} .bp{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none} .bp:hover{background:#16A34A} .sg{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:28px} .sc{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:20px} .si{font-size:20px;margin-bottom:10px} .sn{font-family:'Georgia',serif;font-size:32px;font-weight:700;color:#fff;line-height:1;margin-bottom:5px} .sn.g{color:#4ADE80} .sn.b{color:#60A5FA} .sl{font-size:12px;color:rgba(255,255,255,.4)} .qa{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px} .qac{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:18px;text-decoration:none;display:block;transition:border-color .2s} .qac:hover{border-color:#22C55E} .qai{font-size:22px;margin-bottom:8px} .qat{font-size:13px;font-weight:600;color:#fff;margin-bottom:3px} .qad{font-size:11px;color:rgba(255,255,255,.35);line-height:1.5} .card{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:22px;margin-bottom:20px} .ct{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:rgba(255,255,255,.35);margin-bottom:16px;display:flex;align-items:center;justify-content:space-between} .pr{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.04)} .pr:last-child{border-bottom:none} .pb{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:3px 8px;border-radius:100px} .pb.pub{background:rgba(34,197,94,.15);color:#4ADE80} .pb.draft{background:rgba(251,191,36,.1);color:#FBBF24} .ptit{font-size:13px;font-weight:500;color:#fff;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap} .pdt{font-size:11px;color:rgba(255,255,255,.3);flex-shrink:0} .ea{font-size:11px;font-weight:600;color:#60A5FA;text-decoration:none;padding:4px 10px;border:1px solid rgba(96,165,250,.2);border-radius:4px} .tips{display:flex;flex-direction:column;gap:9px} .tip{display:flex;align-items:flex-start;gap:8px;padding:11px;background:rgba(255,255,255,.02);border-radius:6px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.6} @media(max-width:1024px){.l{grid-template-columns:1fr}.sb{display:none}.sg{grid-template-columns:1fr 1fr}.qa{grid-template-columns:1fr 1fr}} @media(max-width:480px){.sg{grid-template-columns:1fr}.qa{grid-template-columns:1fr}}`}</style>
      <div className="l">
        <div className="sb">
          <div className="sbl"><div className="sbm">💧</div><div><div className="sbn">WDR Admin</div><div className="sbs">water-damage-clarksville.com</div></div></div>
          <div className="sbnav">
            <div className="sbsec">Main</div>
            <Link href="/admin/dashboard" className="sblink active">📊 Dashboard</Link>
            <div className="sbsec">Content</div>
            <Link href="/admin/blog" className="sblink">✍️ Blog Posts</Link>
            <Link href="/admin/blog/new" className="sblink">➕ New Post</Link>
            <Link href="/admin/reviews" className="sblink">⭐ Reviews</Link>
            <div className="sbsec">SEO Tools</div>
            <Link href="/admin/seo" className="sblink">🔍 SEO Monitor</Link>
            <Link href="/admin/settings" className="sblink">⚙️ Settings</Link>
            <div className="sbsec">Website</div>
            <Link href="/" target="_blank" className="sblink">🌐 View Site ↗</Link>
            <Link href="/blog" target="_blank" className="sblink">📰 View Blog ↗</Link>
          </div>
          <div style={{padding:16,borderTop:"1px solid rgba(255,255,255,.06)"}}>
            <SignOutButton />
          </div>
        </div>
        <div className="main">
          <div className="ph"><div><div className="pt">Dashboard</div><div className="ps">Welcome back. Here&apos;s your site at a glance.</div></div><Link href="/admin/blog/new" className="bp">✍️ Write New Post</Link></div>
          <div className="sg">
            <div className="sc"><div className="si">📰</div><div className="sn g">{published}</div><div className="sl">Published Posts</div></div>
            <div className="sc"><div className="si">📝</div><div className="sn" style={{color:"#FBBF24"}}>{drafts}</div><div className="sl">Draft Posts</div></div>
            <div className="sc"><div className="si">📍</div><div className="sn">32</div><div className="sl">Location Pages</div></div>
            <div className="sc"><div className="si">🔧</div><div className="sn b">12</div><div className="sl">Service Pages</div></div>
          </div>
          <div className="qa">
            <Link href="/admin/blog/new" className="qac"><div className="qai">✍️</div><div className="qat">Write Blog Post</div><div className="qad">Create SEO-optimized content to improve rankings daily</div></Link>
            <Link href="/admin/reviews" className="qac"><div className="qai">⭐</div><div className="qat">Manage Reviews</div><div className="qad">Add real Google reviews to build trust and local rankings</div></Link>
            <Link href="/admin/seo" className="qac"><div className="qai">🔍</div><div className="qat">SEO Monitor</div><div className="qad">Track keywords, metadata, and optimization checklist</div></Link>
          </div>
          <div className="card">
            <div className="ct">Recent Blog Posts <Link href="/admin/blog" style={{fontSize:12,color:"#4ADE80",textDecoration:"none",fontWeight:500}}>View All →</Link></div>
            {posts.length === 0 ? (
              <div style={{textAlign:"center",padding:"28px 0",color:"rgba(255,255,255,.3)",fontSize:13}}>No posts yet. <Link href="/admin/blog/new" style={{color:"#22C55E",textDecoration:"none"}}>Write your first →</Link></div>
            ) : posts.slice(0,6).map(p=>(
              <div key={p.id} className="pr"><span className={`pb ${p.published?"pub":"draft"}`}>{p.published?"Live":"Draft"}</span><span className="ptit">{p.title}</span><span className="pdt">{p.date}</span><Link href={`/admin/blog/${p.id}`} className="ea">Edit</Link></div>
            ))}
          </div>
          <div className="card">
            <div className="ct">🎯 Daily SEO Actions</div>
            <div className="tips">
              {[
                {i:"✍️",t:"Write 1 blog post daily — target long-tail keywords like 'water damage [city] TN 2026'"},
                {i:"⭐",t:"Add newest Google reviews weekly — fresh reviews improve local rankings significantly"},
                {i:"🔗",t:"Build 2-3 local citations monthly — Yelp, BBB, Angi, HomeAdvisor, Nextdoor"},
                {i:"📊",t:"Check Google Search Console weekly for new keyword opportunities on your pages"},
                {i:"🗺️",t:"Post to Google Business Profile weekly — photos, updates, respond to reviews"},
              ].map((t,i)=><div key={i} className="tip"><span>{t.i}</span><span>{t.t}</span></div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
