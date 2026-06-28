"use client";

export default function SignOutButton() {
  return (
    <button
      style={{background:"none",border:"none",cursor:"pointer",color:"rgba(255,255,255,.4)",fontSize:13,display:"flex",alignItems:"center",gap:8,width:"100%",padding:"9px 10px"}}
      onClick={() => {
        fetch("/api/admin/auth", { method: "DELETE" }).then(() => {
          window.location.href = "/admin";
        });
      }}
    >
      🚪 Sign Out
    </button>
  );
}
