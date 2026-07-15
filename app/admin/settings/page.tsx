import { requireAdminAuth } from "@/lib/auth";
import Link from "next/link";
import DangerButtons from "./DangerButtons";

export const metadata = { title: "Settings | Admin", robots: { index: false } };

export default async function SettingsPage() {
  await requireAdminAuth();
  return (
    <>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}body{font-family:var(--font-inter);background:#0F0F11;color:#fff;min-height:100vh}.layout{display:grid;grid-template-columns:240px 1fr;min-height:100vh}.sidebar{background:#09090B;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;position:sticky;top:0;height:100vh}.sb-logo{display:flex;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.06)}.sb-mark{width:32px;height:32px;border-radius:6px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:14px}.sb-name{font-size:13px;font-weight:600;color:#fff}.sb-site{font-size:9px;color:rgba(255,255,255,.3)}.sb-nav{padding:16px 12px;flex:1}.sb-sec{font-size:9px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.25);padding:12px 8px 6px;margin-top:8px}.sb-link{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:6px;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);text-decoration:none;margin-bottom:2px;transition:all .15s}.sb-link:hover{background:rgba(255,255,255,.07);color:#fff}.sb-link.active{background:rgba(34,197,94,.1);color:#4ADE80}.main{padding:32px;overflow-y:auto}.page-title{font-family:'Georgia',serif;font-size:24px;font-weight:700;color:#fff;margin-bottom:4px}.page-sub{font-size:13px;color:rgba(255,255,255,.4);margin-bottom:28px}.settings-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}.setting-card{background:#18181B;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:24px}.setting-card.full{grid-column:1/-1}.setting-title{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,.4);margin-bottom:18px;display:flex;align-items:center;gap:8px}.field{margin-bottom:14px}.field label{display:block;font-size:11px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:7px}.field input,.field select{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fff;font-size:14px;padding:11px 12px;outline:none;transition:border-color .2s;font-family:var(--font-inter)}.field input:focus,.field select:focus{border-color:#22C55E}.field select option{background:#18181B}.field input::placeholder{color:rgba(255,255,255,.2)}.field-note{font-size:11px;color:rgba(255,255,255,.3);margin-top:5px;line-height:1.55}.field-note a{color:#4ADE80;text-decoration:none}.field-note code{background:rgba(255,255,255,.08);padding:2px 6px;border-radius:3px;font-size:10px;font-family:monospace}.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.info-item{background:rgba(255,255,255,.03);border-radius:6px;padding:14px}.info-label{font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:5px}.info-value{font-size:13.5px;color:#fff;font-weight:500;font-family:monospace}.info-value.green{color:#4ADE80}.danger-zone{border-color:rgba(239,68,68,.2)!important}.step-box{background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.12);border-radius:8px;padding:16px;margin-bottom:14px}.step-title{font-size:13px;font-weight:700;color:#4ADE80;margin-bottom:8px}.step-code{background:#09090B;border-radius:6px;padding:12px;font-family:monospace;font-size:12px;color:#4ADE80;line-height:1.7;overflow-x:auto;white-space:pre}@media(max-width:1024px){.layout{grid-template-columns:1fr}.sidebar{display:none}.main{padding:20px}.settings-grid{grid-template-columns:1fr}.info-grid{grid-template-columns:1fr}}`}</style>
      <div className="layout">
        <div className="sidebar">
          <div className="sb-logo"><div className="sb-mark">💧</div><div><div className="sb-name">WDR Admin</div><div className="sb-site">waterdamageclarksville.com</div></div></div>
          <div className="sb-nav">
            <div className="sb-sec">Main</div>
            <Link href="/admin/dashboard" className="sb-link">📊 Dashboard</Link>
            <div className="sb-sec">Content</div>
            <Link href="/admin/blog" className="sb-link">✍️ Blog Posts</Link>
            <Link href="/admin/blog/new" className="sb-link">➕ New Post</Link>
            <Link href="/admin/reviews" className="sb-link">⭐ Reviews</Link>
            <div className="sb-sec">SEO</div>
            <Link href="/admin/seo" className="sb-link">🔍 SEO Monitor</Link>
            <Link href="/admin/settings" className="sb-link active">⚙️ Settings</Link>
            <div className="sb-sec">Website</div>
            <Link href="/" target="_blank" className="sb-link">🌐 View Site ↗</Link>
          </div>
        </div>
        <div className="main">
          <div className="page-title">Settings</div>
          <div className="page-sub">Configure your website, security, and deployment settings</div>
          <div className="settings-grid">
            <div className="setting-card">
              <div className="setting-title"><span>🏢</span> Business Information</div>
              <div className="field"><label>Business Name</label><input type="text" defaultValue="Clarksville Water Damage Restoration"/></div>
              <div className="field"><label>Phone (Ringba #)</label><input type="tel" defaultValue="(931) 271-2350"/><div className="field-note">Replace with your Ringba number sitewide</div></div>
              <div className="field"><label>Address</label><input type="text" defaultValue="215 Legion Street, Clarksville, TN 37040"/></div>
              <div className="field"><label>Email</label><input type="email" defaultValue="waterdamageclarksville@gmail.com"/></div>
            </div>
            <div className="setting-card">
              <div className="setting-title"><span>🔍</span> SEO &amp; Analytics</div>
              <div className="field"><label>Google Analytics 4 ID</label><input type="text" placeholder="G-XXXXXXXXXX"/><div className="field-note">Get from <a href="https://analytics.google.com" target="_blank">analytics.google.com</a></div></div>
              <div className="field"><label>Google Review Link</label><input type="text" placeholder="https://g.page/r/YOUR_LINK/review"/></div>
              <div className="field"><label>Search Console Verified?</label><select><option>Not yet</option><option>Verified ✅</option></select></div>
            </div>
            <div className="setting-card">
              <div className="setting-title"><span>🔒</span> Security Status</div>
              <div className="info-grid">
                {[["Admin Protection","✅ Active"],["Session Auth","✅ Cookie-based"],["Rate Limiting","✅ 5/15min"],["Security Headers","✅ All set"],["XSS Protection","✅ Enabled"],["Clickjacking","✅ DENY"]].map(([l,v])=>(
                  <div key={l} className="info-item"><div className="info-label">{l}</div><div className="info-value green">{v}</div></div>
                ))}
              </div>
            </div>
            <div className="setting-card">
              <div className="setting-title"><span>🚀</span> Deploy to Vercel</div>
              <div className="step-box"><div className="step-title">Step 1: Build</div><div className="step-code">{`npm install\nnpm run build`}</div></div>
              <div className="step-box"><div className="step-title">Step 2: Deploy</div><div className="step-code">{`npx vercel --prod`}</div></div>
              <div className="step-box"><div className="step-title">Step 3: Env Vars</div><div className="step-code">{`ADMIN_PASSWORD=YourPassword\nAUTH_SALT=RandomString32Chars`}</div></div>
            </div>
            <div className="setting-card full danger-zone">
              <div className="setting-title"><span>⚠️</span> Danger Zone</div>
              <DangerButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
