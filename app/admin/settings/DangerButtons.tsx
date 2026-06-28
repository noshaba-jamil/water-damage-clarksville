"use client";

export default function DangerButtons() {
  return (
    <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
      <button
        style={{background:"rgba(239,68,68,.1)",color:"#FCA5A5",border:"1px solid rgba(239,68,68,.2)",borderRadius:6,padding:"10px 18px",fontSize:13,fontWeight:600,cursor:"pointer"}}
        onClick={() => {
          if (confirm("Force sign out all sessions? You will need to log in again.")) {
            fetch("/api/admin/auth", { method: "DELETE" }).then(() => window.location.href = "/admin");
          }
        }}
      >
        🔓 Force Sign Out All Sessions
      </button>
      <button
        style={{background:"rgba(239,68,68,.1)",color:"#FCA5A5",border:"1px solid rgba(239,68,68,.2)",borderRadius:6,padding:"10px 18px",fontSize:13,fontWeight:600,cursor:"pointer"}}
        onClick={() => {
          alert("To clear drafts, delete files in /data/blog/ manually.");
        }}
      >
        🗑️ Clear All Blog Drafts
      </button>
    </div>
  );
}
