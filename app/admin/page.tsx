 "use client";
import { useState } from "react";

export default function AdminLoginPage() {
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function login() {
    if (!pw) return;
    setLoading(true);
    setMsg("");
    try {
      const r = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
        credentials: "include",
      });
      const d = await r.json();
      if (d.success) {
        window.location.replace("/admin/dashboard");
      } else {
        setMsg(d.message || "Invalid password.");
        setPw("");
      }
    } catch (e) {
      setMsg("Error: " + String(e));
    }
    setLoading(false);
  }

  return (
    <div style={{minHeight:"100vh",background:"#0F0F11",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"system-ui,sans-serif"}}>
      <div style={{background:"#18181B",border:"1px solid rgba(255,255,255,.1)",borderRadius:12,padding:40,width:360,maxWidth:"90vw"}}>
        <div style={{textAlign:"center",marginBottom:28}}>
          <div style={{fontSize:32,marginBottom:8}}>💧</div>
          <div style={{fontSize:18,fontWeight:700,color:"#fff"}}>WDR Admin</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,.4)",marginTop:4}}>waterdamageclarksville.com</div>
        </div>
        <div style={{marginBottom:14}}>
          <label style={{display:"block",fontSize:11,color:"rgba(255,255,255,.4)",marginBottom:6,textTransform:"uppercase",letterSpacing:1}}>Password</label>
          <input
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === "Enter" && login()}
            placeholder="Enter admin password"
            autoFocus
            style={{width:"100%",background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.1)",borderRadius:6,color:"#fff",fontSize:14,padding:"11px 12px",outline:"none",boxSizing:"border-box"}}
          />
        </div>
        {msg && <div style={{background:"rgba(239,68,68,.1)",border:"1px solid rgba(239,68,68,.2)",borderRadius:6,padding:"10px 12px",fontSize:13,color:"#FCA5A5",marginBottom:14}}>{msg}</div>}
        <button
          onClick={login}
          disabled={loading || !pw}
          style={{width:"100%",background:"#22C55E",color:"#09090B",border:"none",borderRadius:6,padding:"12px",fontSize:14,fontWeight:700,cursor:loading||!pw?"not-allowed":"pointer",opacity:loading||!pw?.trim()?0.6:1}}
        >
          {loading ? "Signing in..." : "Sign In →"}
        </button>
        <div style={{fontSize:11,color:"rgba(255,255,255,.2)",textAlign:"center",marginTop:16,lineHeight:1.6}}>
          Set password via ADMIN_PASSWORD env var.<br/>5 failed attempts = 15 min lockout.
        </div>
      </div>
    </div>
  );
}