export default function AdminLoading() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0F0F11",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 16,
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 10,
        background: "linear-gradient(135deg,#22C55E,#16A34A)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        animation: "pulse 1.2s ease-in-out infinite",
      }}>
        💧
      </div>
      <div style={{
        width: 140,
        height: 3,
        background: "rgba(255,255,255,.06)",
        borderRadius: 3,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg,#22C55E,#4ADE80)",
          borderRadius: 3,
          animation: "slide 1.2s ease-in-out infinite",
          width: "60%",
        }}/>
      </div>
      <div style={{fontSize:12,color:"rgba(255,255,255,.3)",fontFamily:"system-ui"}}>Loading…</div>
      <style>{`
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        @keyframes slide{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}`}
      </style>
    </div>
  );
}
