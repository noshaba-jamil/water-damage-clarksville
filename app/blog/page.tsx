 import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog/blogData";
import { getPublishedPostsAsync } from "@/lib/blogStorage";
import PageHero from "@/components/PageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title:"Water Damage Blog | Restoration Tips & Guides | Clarksville TN", description:"Expert water damage restoration guides for Clarksville TN homeowners. Insurance tips, cost breakdowns, mold prevention, flood preparedness & more. Call (931) 271-2350.", alternates:{canonical:"/blog"} };

const catColors: Record<string,string> = {"Cost & Insurance":"#16A34A","Restoration Process":"#2563EB","Prevention & Education":"#D97706","Mold & Health":"#DC2626","Flood Preparedness":"#7C3AED","Water Damage":"#16A34A"};
const catEmoji: Record<string,string> = {"Cost & Insurance":"💰","Restoration Process":"🔧","Prevention & Education":"🔍","Mold & Health":"🦠","Flood Preparedness":"🌊","Water Damage":"💧"};

export default async function BlogPage() {
  const adminPosts = await getPublishedPostsAsync();
  const allPosts = [...adminPosts, ...blogPosts];

  return (<>
    <PageHero eyebrow="Expert Knowledge Base — Clarksville TN" title="Water Damage Restoration" accent="Guides & Resources" subtitle="Insurance guides, cost breakdowns, mold prevention, and flood preparedness — expert knowledge for Clarksville TN homeowners from our restoration professionals." image="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=1800&q=80" imageFocus="center 40%" breadcrumbs={[{label:"Blog"}]}/>
    <style>{`.bl{max-width:1240px;margin:0 auto;padding:80px 40px} .bl-h{font-family:var(--font-cormorant);font-size:clamp(26px,3vw,36px);font-weight:700;color:#09090B;margin-bottom:12px;letter-spacing:-0.6px} .bl-p{font-family:var(--font-inter);font-size:15px;line-height:1.75;color:#52525B;margin-bottom:40px} .bl-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px} .bl-card{display:flex;flex-direction:column;background:#fff;border:1px solid #E4E4E7;border-radius:10px;overflow:hidden;text-decoration:none;transition:all .22s} .bl-card:hover{border-color:#22C55E;box-shadow:0 4px 24px rgba(34,197,94,.1);transform:translateY(-3px)} .bl-img{height:170px;overflow:hidden;flex-shrink:0;position:relative;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#09090B,#18181B)} .bl-emoji{font-size:48px} .bl-badge{position:absolute;top:12px;left:12px;font-family:var(--font-inter);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#fff;padding:4px 12px;border-radius:100px} .bl-body{padding:20px 22px 24px;display:flex;flex-direction:column;flex:1} .bl-meta{display:flex;align-items:center;gap:14px;margin-bottom:10px} .bl-meta-i{font-family:var(--font-inter);font-size:11px;font-weight:500;color:#9CA3AF} .bl-title{font-family:var(--font-cormorant);font-size:21px;font-weight:700;color:#09090B;margin-bottom:9px;letter-spacing:-0.3px;line-height:1.2} .bl-exc{font-family:var(--font-inter);font-size:13.5px;line-height:1.65;color:#52525B;flex:1} .bl-read{font-family:var(--font-inter);font-size:13px;font-weight:600;color:#16A34A;margin-top:14px;display:flex;align-items:center;gap:5px;transition:gap .2s} .bl-card:hover .bl-read{gap:9px} .bl-read::after{content:"→"} .bl-links{margin-top:52px;padding-top:44px;border-top:1px solid #E4E4E7} .bl-links-h{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#09090B;margin-bottom:18px} .bl-links-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px} .bl-link{font-family:var(--font-inter);font-size:14px;font-weight:500;color:#16A34A;text-decoration:none;display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:6px;transition:all .18s} .bl-link::before{content:'→';font-size:11px;flex-shrink:0} .bl-link:hover{background:#DCFCE7;border-color:#22C55E} .bl-cta{background:#09090B;border-radius:10px;padding:44px;text-align:center;margin-top:56px} .bl-cta-h{font-family:var(--font-cormorant);font-size:clamp(26px,3vw,38px);font-weight:700;color:#fff;margin-bottom:12px;letter-spacing:-0.8px} .bl-cta-p{font-family:var(--font-inter);font-size:15px;color:rgba(255,255,255,.5);margin-bottom:24px} @media(max-width:1024px){.bl{padding:52px 20px}} @media(max-width:640px){.bl-grid{grid-template-columns:1fr}.bl-links-grid{grid-template-columns:1fr}}`}</style>
    <div style={{background:"#F9FAFB"}}>
      <main className="bl">
        <header style={{marginBottom:40}}>
          <h2 className="bl-h">Expert Water Damage Guides for Clarksville TN Homeowners</h2>
          <p className="bl-p">Our restoration professionals share expert knowledge on water damage costs, insurance claims, mold prevention, and flood preparedness — specific to Clarksville TN&apos;s climate and conditions.</p>
        </header>
        <div className="bl-grid" role="list" aria-label="Blog articles">
          {allPosts.map(post=>(
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bl-card" role="listitem" aria-label={`Read: ${post.title}`}>
              <div className="bl-img" role="img" aria-label={`${post.category} article`}>
                <span className="bl-emoji" aria-hidden="true">{catEmoji[post.category]||"📄"}</span>
                <span className="bl-badge" style={{background:catColors[post.category]||"#16A34A"}} aria-label={`Category: ${post.category}`}>{post.category}</span>
              </div>
              <div className="bl-body">
                <div className="bl-meta">
                  <time dateTime={post.date} className="bl-meta-i">📅 {post.date}</time>
                  <span className="bl-meta-i">⏱ {post.readTime}</span>
                </div>
                <h2 className="bl-title">{post.title}</h2>
                <p className="bl-exc">{post.excerpt}</p>
                <div className="bl-read" aria-hidden="true">Read Article</div>
              </div>
            </Link>
          ))}
        </div>
        <nav className="bl-links" aria-label="Related services">
          <div className="bl-links-h">Related Services &amp; Resources</div>
          <div className="bl-links-grid">
            {[["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Flood Cleanup","/flood-cleanup-clarksville-tn"],["Mold Remediation","/mold-remediation-clarksville-tn"],["Structural Drying","/structural-drying-clarksville-tn"],["Insurance Claims","/water-damage-insurance-claim-clarksville-tn"],["View All Service Areas","/service-areas"]].map(([l,h])=>(
              <Link key={h} href={h} className="bl-link" aria-label={l}>{l}</Link>
            ))}
          </div>
        </nav>
        <div className="bl-cta">
          <h2 className="bl-cta-h">Water Damage Emergency?</h2>
          <p className="bl-cta-p">Don&apos;t read — call. Our team responds in 60 minutes, 24/7.</p>
          <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:9,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontSize:16,fontWeight:700}}>📞 (931) 271-2350</a>
        </div>
      </main>
    </div>
  </>);
}