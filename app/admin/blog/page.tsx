import { requireAdminAuth } from "@/lib/auth";
import { getAllBlogPosts } from "@/lib/blogStorage";
import Link from "next/link";
export const metadata = { title: "Blog Manager | Admin", robots: { index: false } };
export default async function BlogManagerPage() {
  await requireAdminAuth();
  const posts = getAllBlogPosts();
  return (
    <>
      <style>{`.l{display:grid;grid-template-columns:240px 1fr;min-height:100vh;font-family:var(--font-inter);background:#0F0F11;color:#fff} .sb{background:#09090B;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;position:sticky;top:0;height:100vh} .sbl{display:flex;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.06)} .sbm{width:32px;height:32px;border-radius:6px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:14px} .sbn{font-size:13px;font-weight:600;color:#fff} .sbs{font-size:9px;color:rgba(255,255,255,.3)} .sbnav{padding:16px 12px;flex:1} .sbsec{font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);padding:12px 8px 6px;margin-top:8px} .sblink{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:6px;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);text-decoration:none;margin-bottom:2px;transition:all .15s} .sblink:hover{background:rgba(255,255,255,.07);color:#fff} .sblink.active{background:rgba(34,197,94,.1);color:#4ADE80} .main{padding:32px;overflow-y:auto} .ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;flex-wrap:wrap;gap:14px} .pt{font-family:'Georgia',serif;font-size:24px;font-weight:700;color:#fff} .ps{font-size:13px;color:rgba(255,255,255,.4);margin-top:4px} .bp{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none} .bp:hover{background:#16A34A} .tbl{width:100%;border-collapse:collapse} .tbl th{text-align:left;font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.3);padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.06)} .tbl td{padding:13px 14px;border-bottom:1px solid rgba(255,255,255,.04);vertical-align:middle} .tbl tr:hover td{background:rgba(255,255,255,.02)} .pb{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:3px 9px;border-radius:100px} .pb.pub{background:rgba(34,197,94,.15);color:#4ADE80} .pb.draft{background:rgba(251,191,36,.1);color:#FBBF24} .ptit{font-size:13.5px;font-weight:500;color:#fff} .pmeta{font-size:11px;color:rgba(255,255,255,.3);margin-top:3px;font-family:monospace} .cb{font-size:10px;font-weight:500;background:rgba(96,165,250,.1);color:#60A5FA;padding:2px 8px;border-radius:100px} .ag{display:flex;gap:6px} .ab{font-size:11px;font-weight:600;padding:4px 10px;border-radius:4px;text-decoration:none;border:1px solid transparent;cursor:pointer;background:none} .ab.e{color:#60A5FA;border-color:rgba(96,165,250,.2)} .ab.e:hover{background:rgba(96,165,250,.1)} .ab.v{color:#4ADE80;border-color:rgba(74,222,128,.2)} .ab.v:hover{background:rgba(74,222,128,.1)} .empty{text-align:center;padding:56px 20px;color:rgba(255,255,255,.35)} @media(max-width:1024px){.l{grid-template-columns:1fr}.sb{display:none}.main{padding:20px}} @media(max-width:640px){.tbl th:nth-child(3),.tbl td:nth-child(3){display:none}}`}</style>
      <div className="l">
        <div className="sb">
          <div className="sbl"><div className="sbm">💧</div><div><div className="sbn">WDR Admin</div><div className="sbs">waterdamageclarksville.com</div></div></div>
          <div className="sbnav">
            <div className="sbsec">Main</div><Link href="/admin/dashboard" className="sblink">📊 Dashboard</Link>
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
          <div className="ph"><div><div className="pt">Blog Posts</div><div className="ps">{posts.length} total · {posts.filter(p=>p.published).length} published · {posts.filter(p=>!p.published).length} drafts</div></div><Link href="/admin/blog/new" className="bp">✍️ New Post</Link></div>
          {posts.length===0 ? (<div className="empty"><div style={{fontSize:40,marginBottom:14}}>✍️</div><div style={{fontSize:17,color:"rgba(255,255,255,.5)",marginBottom:10}}>No posts yet</div><div style={{fontSize:13,marginBottom:20}}>Write your first post to start ranking on Google</div><Link href="/admin/blog/new" className="bp">Write First Post →</Link></div>) : (
            <table className="tbl">
              <thead><tr><th>Title</th><th>Status</th><th>Category</th><th>Date</th><th>Actions</th></tr></thead>
              <tbody>{posts.map(p=>(
                <tr key={p.id}>
                  <td><div className="ptit">{p.title}</div><div className="pmeta">/blog/{p.slug} · {p.readTime}</div></td>
                  <td><span className={`pb ${p.published?"pub":"draft"}`}>{p.published?"Published":"Draft"}</span></td>
                  <td><span className="cb">{p.category}</span></td>
                  <td style={{fontSize:12,color:"rgba(255,255,255,.4)",whiteSpace:"nowrap"}}>{p.date}</td>
                  <td><div className="ag"><Link href={`/admin/blog/${p.id}`} className="ab e">Edit</Link>{p.published&&<Link href={`/blog/${p.slug}`} target="_blank" className="ab v">View ↗</Link>}</div></td>
                </tr>
              ))}</tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
