import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/lib/blogStorage";
import { getBlogPostBySlug as getStaticPostBySlug, blogPosts as staticPosts } from "@/content/blog/blogData";

const SITE_URL = "https://water-damage-clarksville.com";

export const dynamic = "force-dynamic";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug) || getStaticPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: { title: post.metaTitle, description: post.metaDesc, url: `${SITE_URL}/blog/${params.slug}`, type: "article", publishedTime: post.date },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Check admin-created posts first, then fall back to static posts
  const adminPost = getBlogPostBySlug(params.slug);
  const staticPost = getStaticPostBySlug(params.slug);
  const post = adminPost || staticPost;

  if (!post) notFound();

  // Related posts: mix of admin published + static
  const adminPublished = getPublishedBlogPosts().filter(p => p.slug !== params.slug);
  const related = [...adminPublished, ...staticPosts.filter(p => p.slug !== params.slug)].slice(0, 3);

  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.metaDesc, datePublished: post.date, dateModified: post.date, author: { "@type": "Organization", name: "Clarksville Water Damage Restoration", url: SITE_URL }, publisher: { "@type": "Organization", name: "Clarksville Water Damage Restoration", url: SITE_URL }, mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${params.slug}` }, articleSection: post.category };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` }, { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${params.slug}` }] };

  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <style>{`.bph{background:linear-gradient(135deg,#09090B 0%,#18181B 100%);padding:80px 40px 64px;position:relative;overflow:hidden} .bph::after{content:'';position:absolute;right:-100px;top:-100px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(34,197,94,0.06) 0%,transparent 70%);pointer-events:none} .bph-in{max-width:860px;position:relative;z-index:1} .bph-bc{display:flex;align-items:center;gap:6px;margin-bottom:22px;flex-wrap:wrap} .bph-bc a{font-family:var(--font-inter);font-size:11px;font-weight:500;color:rgba(255,255,255,.35);text-decoration:none;transition:color .15s} .bph-bc a:hover{color:rgba(255,255,255,.7)} .bph-bc-sep{font-size:11px;color:rgba(255,255,255,.15)} .bph-bc-cur{font-family:var(--font-inter);font-size:11px;font-weight:500;color:rgba(255,255,255,.5)} .bph-cat{display:inline-flex;align-items:center;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);color:#4ADE80;font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;padding:5px 14px;border-radius:100px;margin-bottom:18px} .bph-h1{font-family:var(--font-cormorant);font-size:clamp(28px,4vw,50px);font-weight:700;color:#fff;line-height:1.05;letter-spacing:-1px;margin-bottom:18px} .bph-meta{display:flex;align-items:center;gap:18px;flex-wrap:wrap} .bph-meta-i{font-family:var(--font-inter);font-size:12px;font-weight:500;color:rgba(255,255,255,.4)} .bpl{max-width:1240px;margin:0 auto;padding:72px 40px;display:grid;grid-template-columns:1fr 300px;gap:52px;align-items:start} .art-exc{font-family:var(--font-cormorant);font-size:clamp(17px,2vw,21px);font-weight:500;line-height:1.6;color:#374151;font-style:italic;border-left:3px solid #22C55E;padding-left:20px;margin-bottom:36px} .art-h2{font-family:var(--font-cormorant);font-size:clamp(22px,2.5vw,28px);font-weight:700;color:#09090B;margin-bottom:12px;letter-spacing:-0.4px;margin-top:40px;line-height:1.1} .art-h2:first-of-type{margin-top:0} .art-p{font-family:var(--font-inter);font-size:15px;line-height:1.8;color:#374151;margin-bottom:0} .art-cta{background:#09090B;border-radius:10px;padding:30px;text-align:center;margin:36px 0} .ac-h{font-family:var(--font-cormorant);font-size:24px;font-weight:700;color:#fff;margin-bottom:8px;letter-spacing:-0.3px} .ac-p{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.45);margin-bottom:18px} .ac-btn{display:inline-flex;align-items:center;gap:8px;background:#22C55E;color:#09090B;padding:12px 24px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:14px;transition:background .2s} .ac-btn:hover{background:#16A34A} .art-int{margin-top:44px;padding-top:32px;border-top:1px solid #E4E4E7} .art-int-h{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#09090B;margin-bottom:14px} .art-int-links{display:flex;flex-direction:column;gap:10px} .art-int-links a{font-family:var(--font-inter);font-size:14px;font-weight:500;color:#16A34A;text-decoration:none;display:flex;align-items:center;gap:6px;transition:color .15s} .art-int-links a::before{content:'→';font-size:11px;flex-shrink:0} .art-int-links a:hover{color:#09090B} .art-rel{margin-top:44px} .art-rel-h{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#09090B;margin-bottom:14px} .art-rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px} .arc{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:8px;padding:18px;text-decoration:none;transition:border-color .18s;display:block} .arc:hover{border-color:#22C55E} .arc-cat{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#16A34A;margin-bottom:6px} .arc-t{font-family:var(--font-cormorant);font-size:16px;font-weight:700;color:#09090B;line-height:1.3} .bsb{display:flex;flex-direction:column;gap:18px;position:sticky;top:130px} .bsb-cta{background:#09090B;border-radius:10px;padding:24px} .bsb-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px} .bsb-n{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#fff;margin-bottom:4px;letter-spacing:-0.5px} .bsb-s{font-family:var(--font-inter);font-size:12px;color:rgba(255,255,255,.28);margin-bottom:18px} .bsb-b1{display:block;background:#22C55E;color:#09090B;padding:11px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-weight:700;font-size:13px;text-align:center;margin-bottom:7px} .bsb-b1:hover{background:#16A34A} .bsb-b2{display:block;background:transparent;color:rgba(255,255,255,.4);padding:10px;border-radius:6px;text-decoration:none;font-family:var(--font-inter);font-size:12px;font-weight:500;text-align:center;border:1px solid rgba(255,255,255,.09)} .bsb-b2:hover{border-color:rgba(255,255,255,.25);color:rgba(255,255,255,.7)} .bsb-box{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:20px} .bsb-bh{font-family:var(--font-inter);font-size:11px;font-weight:600;color:#09090B;margin-bottom:12px} .bsb-links{display:flex;flex-direction:column;gap:9px} .bsb-links a{font-family:var(--font-inter);font-size:13px;font-weight:500;color:#52525B;text-decoration:none;transition:color .15s;display:flex;align-items:center;gap:5px} .bsb-links a::before{content:'→';font-size:11px;color:#16A34A;flex-shrink:0} .bsb-links a:hover{color:#16A34A} @media(max-width:1024px){.bph{padding:56px 20px 44px}.bpl{grid-template-columns:1fr;padding:52px 20px}.bsb{position:static}.art-rel-grid{grid-template-columns:1fr}}`}</style>
    <header className="bph">
      <div className="bph-in">
        <nav className="bph-bc" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="bph-bc-sep" aria-hidden="true">/</span>
          <Link href="/blog">Blog</Link>
          <span className="bph-bc-sep" aria-hidden="true">/</span>
          <span className="bph-bc-cur" aria-current="page">{post.category}</span>
        </nav>
        <div className="bph-cat">{post.category}</div>
        <h1 className="bph-h1">{post.title}</h1>
        <div className="bph-meta">
          <time dateTime={post.date} className="bph-meta-i">📅 {post.date}</time>
          <span className="bph-meta-i">⏱ {post.readTime}</span>
          <span className="bph-meta-i" itemProp="author">✍️ Clarksville Restoration Team</span>
        </div>
      </div>
    </header>
    <div style={{ background: "#fff" }}>
      <div className="bpl">
        <article itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={post.title} />
          <meta itemProp="datePublished" content={post.date} />
          {"excerpt" in post && post.excerpt && <div className="art-exc" role="note">{post.excerpt}</div>}
          {post.content.map((sec, i) => (
            <section key={i} aria-labelledby={sec.heading ? `ah-${i}` : undefined}>
              {i === 2 && <div className="art-cta"><div className="ac-h">Water Damage in Clarksville?</div><div className="ac-p">Our team responds in 60 minutes — 24/7. All insurance accepted.</div><a href="tel:+19312712350" className="ac-btn">📞 Call (931) 271-2350 Now</a></div>}
              {sec.heading && <h2 className="art-h2" id={`ah-${i}`} itemProp="articleBody">{sec.heading}</h2>}
              <p className="art-p" itemProp="articleBody">{sec.body}</p>
            </section>
          ))}
          <div className="art-int" aria-label="Related services">
            <div className="art-int-h">Related Services &amp; Resources</div>
            <nav className="art-int-links" aria-label="Internal links">
              <a href="/emergency-water-damage-clarksville-tn">Emergency Water Damage Restoration — Clarksville TN</a>
              <a href="/flood-cleanup-clarksville-tn">Flood Cleanup & Water Extraction — Clarksville TN</a>
              <a href="/mold-remediation-clarksville-tn">Mold Remediation & Removal — Clarksville TN</a>
              <a href="/water-damage-insurance-claim-clarksville-tn">Insurance Claim Management — Tennessee</a>
              <a href="/service-areas">View All Service Areas →</a>
            </nav>
          </div>
          {related.length > 0 && (
            <aside className="art-rel" aria-label="Related articles">
              <div className="art-rel-h">Related Articles</div>
              <div className="art-rel-grid">
                {related.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="arc" aria-label={`Read: ${p.title}`}>
                    <div className="arc-cat">{p.category}</div>
                    <div className="arc-t">{p.title}</div>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </article>
        <aside className="bsb" aria-label="Emergency contact">
          <div className="bsb-cta">
            <div className="bsb-ey">24/7 Emergency</div>
            <div className="bsb-n">(931) 271-2350</div>
            <div className="bsb-s">Answered in 60 seconds · 24/7/365</div>
            <a href="tel:+19312712350" className="bsb-b1">📞 Call Now</a>
            <Link href="/contact" className="bsb-b2">Free Assessment →</Link>
          </div>
          <nav className="bsb-box" aria-label="Our services">
            <div className="bsb-bh">Our Services</div>
            <div className="bsb-links">
              {[["Emergency Water Damage", "/emergency-water-damage-clarksville-tn"], ["Flood Cleanup", "/flood-cleanup-clarksville-tn"], ["Mold Remediation", "/mold-remediation-clarksville-tn"], ["Sewage Backup", "/services/sewage-backup-cleanup-clarksville-tn"], ["Structural Drying", "/structural-drying-clarksville-tn"], ["Insurance Claims", "/water-damage-insurance-claim-clarksville-tn"]].map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}
            </div>
          </nav>
        </aside>
      </div>
    </div>
    <div style={{ background: "#09090B", padding: "64px 40px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: -1 }}>Need Water Damage Help in Clarksville?</h2>
      <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "rgba(255,255,255,.5)", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>Our team responds in 60 minutes — 24/7. All insurance accepted including USAA.</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        <a href="tel:+19312712350" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#22C55E", color: "#09090B", padding: "14px 30px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: 16, fontWeight: 700 }}>📞 (931) 271-2350</a>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "rgba(255,255,255,.7)", padding: "13px 22px", borderRadius: 6, textDecoration: "none", fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 500, border: "1px solid rgba(255,255,255,.18)" }}>Free Assessment →</Link>
      </div>
    </div>
  </>);
}
