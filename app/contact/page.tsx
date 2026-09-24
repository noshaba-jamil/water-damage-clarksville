import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const SITE_URL = "https://water-damage-clarksville.com";

export const metadata: Metadata = {
  title: "Contact Us | Free Water Damage Assessment TN",
  description:
    "Contact Clarksville Water Damage Restoration for a free assessment. Call (931) 271-2350 anytime, 24/7. Serving Clarksville TN and Fort Campbell.",
  alternates: { canonical: "/contact" },
};

// This page does NOT redeclare a full LocalBusiness entity. The canonical
// business record (name, address, geo, hours, @id) lives on the homepage
// as https://water-damage-clarksville.com/#localbusiness — every other
// page references it via that @id. The previous version of this schema
// declared a second, unlinked "HomeAndConstructionBusiness" entity on the
// wrong domain (waterdamageclarksville.com, no hyphens), which told Google
// this page belongs to a different business than the rest of the site.
// ContactPage + a reference to the canonical @id avoids that entirely.
const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Clarksville Water Damage Restoration",
  "url": `${SITE_URL}/contact`,
  "about": { "@id": `${SITE_URL}/#localbusiness` },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Clarksville Water Damage Restoration?",
      "acceptedAnswer": { "@type": "Answer", "text": "Call (931) 271-2350 anytime, 24 hours a day, or submit the contact form on this page and a team member will call you back within 15 minutes." }
    },
    {
      "@type": "Question",
      "name": "What are your business hours?",
      "acceptedAnswer": { "@type": "Answer", "text": "We are open 24 hours a day, 7 days a week, including holidays, for water damage emergencies." }
    },
    {
      "@type": "Question",
      "name": "Where are you located?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our office is at 215 Legion Street, Clarksville, TN 37040. See the map on this page for directions." }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "We serve Clarksville, TN and the surrounding Montgomery County area, including Fort Campbell military families." }
    },
    {
      "@type": "Question",
      "name": "What happens after I submit the contact form?",
      "acceptedAnswer": { "@type": "Answer", "text": "A team member calls you back within 15 minutes to confirm details and schedule your free assessment. If it's an active emergency, call (931) 271-2350 directly instead of using the form." }
    },
    {
      "@type": "Question",
      "name": "Do you work with insurance?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We accept all insurance, file claims on your behalf, and bill directly so you only pay your deductible. We also have USAA specialists for Fort Campbell families." }
    }
  ]
};

export default function ContactPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_PAGE_SCHEMA) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <PageHero eyebrow="Get In Touch — Free Assessment" title="Contact Us for" accent="Free Water Damage Assessment" subtitle="Call (931) 271-2350 anytime — 24 hours a day. Or submit the form and a real expert calls you back within 15 minutes." image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1800&q=80" imageFocus="center 45%" breadcrumbs={[{label:"Contact"}]}/>
    <style>{`.cp{max-width:1240px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 420px;gap:56px;align-items:start} .cf{background:#09090B;border-radius:10px;padding:40px;order:2} .cf-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#4ADE80;margin-bottom:8px;display:block} .cf-h{font-family:var(--font-cormorant);font-size:28px;font-weight:700;color:#fff;letter-spacing:-0.5px;margin-bottom:6px;line-height:1.1} .cf-s{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.35);margin-bottom:24px} .cf-row{display:grid;grid-template-columns:1fr 1fr;gap:12px} .cf-f{margin-bottom:12px} .cf-f label{display:block;font-family:var(--font-inter);font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:6px} .cf-f input,.cf-f select,.cf-f textarea{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#fff;font-family:var(--font-inter);font-size:14px;padding:11px 13px;outline:none;transition:border-color .2s;-webkit-appearance:none} .cf-f input::placeholder,.cf-f textarea::placeholder{color:rgba(255,255,255,.22)} .cf-f input:focus,.cf-f select:focus,.cf-f textarea:focus{border-color:#22C55E} .cf-f select option{background:#09090B;color:#fff} .cf-f textarea{height:90px;resize:none} .cf-btn{width:100%;background:#22C55E;color:#09090B;border:none;border-radius:6px;padding:14px;font-family:var(--font-inter);font-size:15px;font-weight:700;cursor:pointer;transition:background .2s;margin-top:4px} .cf-btn:hover{background:#16A34A} .cf-note{font-family:var(--font-inter);font-size:11px;color:rgba(255,255,255,.2);text-align:center;margin-top:12px} .ci{display:flex;flex-direction:column;gap:20px;order:1} .ci-emg{background:linear-gradient(135deg,#09090B,#18181B);border:1px solid rgba(74,222,128,.15);border-radius:10px;padding:28px;text-align:center} .ci-emg-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#4ADE80;margin-bottom:10px} .ci-emg-h{font-family:var(--font-cormorant);font-size:22px;font-weight:700;color:#fff;margin-bottom:6px;letter-spacing:-0.3px} .ci-emg-s{font-family:var(--font-inter);font-size:13px;color:rgba(255,255,255,.4);margin-bottom:18px} .ci-emg-num{display:block;font-family:var(--font-cormorant);font-size:34px;font-weight:700;color:#4ADE80;text-decoration:none;letter-spacing:-1px;transition:color .2s} .ci-emg-num:hover{color:#22C55E} .ci-card{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:24px;transition:border-color .25s} .ci-card:hover{border-color:#22C55E} .ci-card-i{font-size:22px;margin-bottom:10px} .ci-card-h{font-family:var(--font-inter);font-size:15px;font-weight:600;color:#09090B;margin-bottom:10px} .ci-card-t{font-family:var(--font-inter);font-size:13.5px;color:#52525B;line-height:1.65} .ci-card-t a{color:#16A34A;font-weight:600;text-decoration:none} .ci-check{display:flex;align-items:flex-start;gap:8px;margin-bottom:8px} .ci-check-m{color:#16A34A;font-weight:700;flex-shrink:0;font-family:var(--font-inter)} .ci-check-t{font-family:var(--font-inter);font-size:13.5px;color:#52525B} .cmap{max-width:1240px;margin:0 auto;padding:0 40px 80px} .cmap-inner{border-radius:10px;overflow:hidden;border:1px solid #E4E4E7;box-shadow:0 1px 3px rgba(0,0,0,.05)} .cmap-head{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:20px} .cmap-ey{font-family:var(--font-inter);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#16A34A;margin-bottom:8px;display:block} .cmap-h{font-family:var(--font-cormorant);font-size:26px;font-weight:700;color:#09090B;letter-spacing:-0.5px} .cmap-link{font-family:var(--font-inter);font-size:13px;font-weight:600;color:#16A34A;text-decoration:none;white-space:nowrap} .cmap-link:hover{color:#15803D} .cmap iframe{width:100%;height:420px;border:0;display:block} .cfaq{max-width:1240px;margin:0 auto;padding:0 40px 90px} .cfaq-list{display:grid;grid-template-columns:1fr 1fr;gap:20px} .cfaq-item{background:#F9FAFB;border:1px solid #E4E4E7;border-radius:10px;padding:22px 24px} .cfaq-q{font-family:var(--font-inter);font-size:14.5px;font-weight:700;color:#09090B;margin-bottom:8px;line-height:1.4} .cfaq-a{font-family:var(--font-inter);font-size:13.5px;color:#52525B;line-height:1.65;margin:0} @media(max-width:1024px){.cp{grid-template-columns:1fr;padding:52px 20px}.cf{order:1}.ci{order:2}.cf-row{grid-template-columns:1fr} .cmap{padding:0 20px 52px} .cmap iframe{height:320px} .cfaq{padding:0 20px 60px} .cfaq-list{grid-template-columns:1fr}}`}</style>
    <div style={{background:"#F9FAFB"}}>
      <div className="cp">
        <section className="cf" aria-labelledby="form-heading">
          <span className="cf-ey">Free Assessment</span>
          <h2 className="cf-h" id="form-heading">Request Help Now</h2>
          <div className="cf-s">We call back within 15 minutes. Emergencies answered immediately.</div>
          <ContactForm />
          <div className="cf-note">By submitting, you agree to be contacted by Clarksville Water Damage Restoration by phone, text, or email. See our <Link href="/privacy-policy" style={{color:"rgba(255,255,255,.4)",textDecoration:"underline"}}>Privacy Policy</Link>.</div>
        </section>
        <aside className="ci" aria-label="Contact information">
          <div className="ci-emg">
            <div className="ci-emg-ey">🚨 Emergency Line — Open 24/7</div>
            <div className="ci-emg-h">Water Damage Emergency?</div>
            <div className="ci-emg-s">Don&apos;t fill out a form. Call now — answered in 60 seconds.</div>
            <a href="tel:+19312712350" className="ci-emg-num" aria-label="Call emergency line">(931) 271-2350</a>
          </div>
          <div className="ci-card">
            <div className="ci-card-i" aria-hidden="true">📍</div>
            <h2 className="ci-card-h">Location &amp; Contact</h2>
            <div className="ci-card-t">
              <strong>Clarksville Water Damage Restoration</strong><br/>
              215 Legion Street, Clarksville, TN 37040<br/>
              Phone: <a href="tel:+19312712350">(931) 271-2350</a><br/>
              Email: <a href="mailto:waterdamageclarksville@gmail.com">waterdamageclarksville@gmail.com</a><br/>
              Hours: Open 24 Hours / 7 Days a Week
            </div>
          </div>
          <div className="ci-card">
            <div className="ci-card-i" aria-hidden="true">✅</div>
            <h2 className="ci-card-h">What to Expect</h2>
            {["Real expert answers every call — no voicemail","60-minute guaranteed on-site arrival","Free inspection and damage assessment","All insurance accepted — we file for you","USAA specialists for Fort Campbell families","Direct billing — you pay only your deductible"].map(item=>(
              <div key={item} className="ci-check">
                <span className="ci-check-m" aria-hidden="true">✓</span>
                <span className="ci-check-t">{item}</span>
              </div>
            ))}
          </div>
          <div className="ci-card">
            <div className="ci-card-i" aria-hidden="true">🔗</div>
            <h2 className="ci-card-h">Our Services</h2>
            <nav aria-label="Service links">
              {[["Emergency Water Damage","/emergency-water-damage-clarksville-tn"],["Flood Cleanup","/flood-cleanup-clarksville-tn"],["Mold Remediation","/mold-remediation-clarksville-tn"],["Structural Drying","/structural-drying-clarksville-tn"],["Insurance Claims","/water-damage-insurance-claim-clarksville-tn"],["All Service Areas","/service-areas"]].map(([l,h])=>(
                <div key={h} style={{marginBottom:8}}>
                  <Link href={h} style={{fontFamily:"var(--font-inter)",fontSize:13.5,fontWeight:500,color:"#16A34A",textDecoration:"none",display:"flex",alignItems:"center",gap:6}}>→ {l}</Link>
                </div>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      <section className="cmap" aria-labelledby="map-heading">
        <div className="cmap-head">
          <div>
            <span className="cmap-ey">Find Us</span>
            <h2 className="cmap-h" id="map-heading">Serving Clarksville, TN &amp; Fort Campbell</h2>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=215+Legion+Street+Clarksville+TN+37040"
            target="_blank"
            rel="noopener noreferrer"
            className="cmap-link"
          >
            Get Directions →
          </a>
        </div>
        <div className="cmap-inner">
          <iframe
            src="https://maps.google.com/maps?q=215%20Legion%20Street%2C%20Clarksville%2C%20TN%2037040&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Map showing Clarksville Water Damage Restoration location in Clarksville, TN"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="cfaq" aria-labelledby="faq-heading">
        <span className="cmap-ey">Common Questions</span>
        <h2 className="cmap-h" id="faq-heading" style={{marginBottom:24}}>Frequently Asked Questions</h2>
        <div className="cfaq-list">
          {FAQ_SCHEMA.mainEntity.map(f=>(
            <div key={f.name} className="cfaq-item">
              <h3 className="cfaq-q">{f.name}</h3>
              <p className="cfaq-a">{f.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </>);
}