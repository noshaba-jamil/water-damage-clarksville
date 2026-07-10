  import { requireAdminAuth } from "@/lib/auth";
import { getAllBlogPostsAsync } from "@/lib/blogStorage";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const metadata = { title: "Blog Manager | Admin", robots: { index: false } };

export default async function BlogManagerPage() {
  await requireAdminAuth();
  const posts = await getAllBlogPostsAsync();
  const published = posts.filter(p => p.published).length;
  const drafts = posts.filter(p => !p.published).length;

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:var(--font-inter,system-ui,sans-serif);background:#0F0F11;color:#fff;min-height:100vh}
        .layout{display:flex;min-height:100vh}
        .sb{background:#09090B;border-right:1px solid rgba(255,255,255,.06);width:240px;flex-shrink:0;display:flex;flex-direction:column;position:sticky;top:0;height:100vh}
        .sbl{display:flex;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.06)}
        .sbm{width:32px;height:32px;border-radius:6px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:14px}
        .sbn{font-size:13px;font-weight:600;color:#fff}.sbs{font-size:9px;color:rgba(255,255,255,.3)}
        .sbnav{padding:16px 12px;flex:1;overflow-y:auto}
        .sbsec{font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);padding:12px 8px 6px;margin-top:8px}
        .sblink{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:6px;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);text-decoration:none;margin-bottom:2px}
        .sblink:hover{background:rgba(255,255,255,.07);color:#fff}
        .sblink.active{background:rgba(34,197,94,.1);color:#4ADE80}
        .main{flex:1;padding:28px 32px;overflow-y:auto}
        .ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px}
        .pt{font-size:22px;font-weight:700;color:#fff}
        .ps{font-size:13px;color:rgba(255,255,255,.4);margin-top:4px}
        .stats{display:flex;gap:16px;margin-bottom:24px}
        .stat{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:16px 20px;text-align:center}
        .stat-n{font-size:28px;font-weight:700;color:#fff}
        .stat-l{font-size:11px;color:rgba(255,255,255,.4);margin-top:3px}
        .new-btn{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none}
        .new-btn:hover{background:#16A34A}
        .card{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;overflow:hidden}
        table{width:100%;border-collapse:collapse}
        th{text-align:left;font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.3);padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.06)}
        td{padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.04);font-size:13px;color:rgba(255,255,255,.7);vertical-align:middle}
        tr:last-child td{border-bottom:none}
        tr:hover td{background:rgba(255,255,255,.02)}
        .badge{font-size:10px;font-weight:700;padding:3px 10px;border-radius:100px}
        .pub{background:rgba(34,197,94,.15);color:#4ADE80}
        .draft{background:rgba(251,191,36,.1);color:#FBBF24}
        .edit-btn{font-size:11px;font-weight:600;color:#60A5FA;text-decoration:none;padding:4px 10px;border:1px solid rgba(96,165,250,.2);border-radius:4px}
        .empty{text-align:center;padding:60px 20px;color:rgba(255,255,255,.3)}
        .empty-icon{font-size:40px;margin-bottom:14px}
        @media(max-width:1024px){.layout{flex-direction:column}.sb{display:none}.main{padding:16px}}
      `}</style>
      <div className="layout">
        <div className="sb">
          <div className="sbl"><div className="sbm">💧</div><div><div className="sbn">WDR Admin</div><div className="sbs">water-damage-clarksville.com</div></div></div>
          <div className="sbnav">
            <div className="sbsec">Main</div>
            <Link href="/admin/dashboard" className="sblink">📊 Dashboard</Link>
            <div className="sbsec">Content</div>
            <Link href="/admin/blog" className="sblink active">✍️ Blog Posts</Link>
            <Link href="/admin/blog/new" className="sblink">➕ New Post</Link>
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
            <div><div className="pt">Blog Posts</div><div className="ps">{posts.length} total · {published} published · {drafts} drafts</div></div>
            <Link href="/admin/blog/new" className="new-btn">✍️ New Post</Link>
          </div>
          <div className="stats">
            <div className="stat"><div className="stat-n" style={{color:"#4ADE80"}}>{published}</div><div className="stat-l">Published</div></div>
            <div className="stat"><div className="stat-n" style={{color:"#FBBF24"}}>{drafts}</div><div className="stat-l">Drafts</div></div>
            <div className="stat"><div className="stat-n">{posts.length}</div><div className="stat-l">Total</div></div>
          </div>
          <div className="card">
            {posts.length === 0 ? (
              <div className="empty">
                <div className="empty-icon">✍️</div>
                <div style={{fontSize:16,fontWeight:600,color:"rgba(255,255,255,.5)",marginBottom:8}}>No posts yet</div>
                <div style={{fontSize:13,marginBottom:20}}>Write your first post to start ranking on Google</div>
                <Link href="/admin/blog/new" className="new-btn">Write First Post →</Link>
              </div>
            ) : (
              <table>
                <thead><tr><th>Title</th><th>Category</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  {posts.map(p => (
                    <tr key={p.id}>
                      <td style={{fontWeight:600,color:"#fff",maxWidth:300}}>{p.title}</td>
                      <td><span style={{fontSize:11,background:"rgba(255,255,255,.06)",padding:"2px 8px",borderRadius:100,color:"rgba(255,255,255,.5)"}}>{p.category}</span></td>
                      <td style={{color:"rgba(255,255,255,.4)"}}>{p.date}</td>
                      <td><span className={`badge ${p.published?"pub":"draft"}`}>{p.published?"Published":"Draft"}</span></td>
                      <td><Link href={`/admin/blog/${p.id}`} className="edit-btn">Edit</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
