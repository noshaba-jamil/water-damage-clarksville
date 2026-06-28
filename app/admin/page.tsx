"use client";
import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!password.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include", // ensures cookie is stored
      });
      const data = await res.json();
      if (data.success) {
        // Hard redirect — not router.push — so middleware re-evaluates with new cookie
        window.location.href = "/admin/dashboard";
      } else {
        setError(data.message || "Invalid password.");
        setPassword("");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:var(--font-inter);background:#0F0F11;color:#fff;min-height:100vh}
        .page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F0F11;padding:20px}
        .card{background:#09090B;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:44px 40px;width:100%;max-width:400px;box-shadow:0 24px 64px rgba(0,0,0,.5)}
        .logo{display:flex;align-items:center;gap:12px;margin-bottom:32px;justify-content:center}
        .logo-mark{width:40px;height:40px;border-radius:8px;background:linear-gradient(135deg,#22C55E,#16A34A);display:flex;align-items:center;justify-content:center;font-size:18px}
        .logo-name{font-size:15px;font-weight:700;color:#fff}
        .logo-site{font-size:11px;color:rgba(255,255,255,.3)}
        .heading{font-size:22px;font-weight:700;color:#fff;text-align:center;margin-bottom:6px}
        .subhead{font-size:13px;color:rgba(255,255,255,.35);text-align:center;margin-bottom:28px}
        label{display:block;font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:8px}
        .input{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#fff;font-size:15px;padding:13px 14px;outline:none;transition:border-color .2s;margin-bottom:14px;font-family:inherit}
        .input:focus{border-color:#22C55E}
        .input::placeholder{color:rgba(255,255,255,.2)}
        .error{background:rgba(252,165,165,.07);border:1px solid rgba(252,165,165,.15);border-radius:6px;padding:10px 14px;font-size:13px;color:#FCA5A5;margin-bottom:14px}
        .btn{width:100%;background:#22C55E;color:#09090B;border:none;border-radius:8px;padding:14px;font-size:14px;font-weight:700;cursor:pointer;transition:background .2s;font-family:inherit}
        .btn:hover:not(:disabled){background:#16A34A}
        .btn:disabled{opacity:.6;cursor:not-allowed}
        .hint{text-align:center;font-size:11px;color:rgba(255,255,255,.2);margin-top:20px;line-height:1.6}
        @media(max-width:440px){.card{padding:32px 24px}}
      `}</style>
      <div className="page">
        <div className="card">
          <div className="logo">
            <div className="logo-mark">💧</div>
            <div>
              <div className="logo-name">WDR Admin</div>
              <div className="logo-site">waterdamageclarksville.com</div>
            </div>
          </div>
          <div className="heading">Sign In</div>
          <div className="subhead">Enter your admin password to continue</div>
          <label htmlFor="pw">Password</label>
          <input
            id="pw"
            className="input"
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            autoFocus
          />
          {error && <div className="error">⚠️ {error}</div>}
          <button className="btn" onClick={handleLogin} disabled={loading || !password.trim()}>
            {loading ? "Signing in…" : "Sign In →"}
          </button>
          <div className="hint">
            Set your password via <strong style={{color:"rgba(255,255,255,.4)"}}>ADMIN_PASSWORD</strong> env var.<br/>
            5 failed attempts = 15 min lockout.
          </div>
        </div>
      </div>
    </>
  );
}
