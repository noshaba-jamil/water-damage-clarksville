export default function Loading() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 16,
      background: "#fff",
    }}>
      <div style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "linear-gradient(135deg,#22C55E,#16A34A)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        animation: "pulse 1.2s ease-in-out infinite",
      }}>
        💧
      </div>
      <div style={{
        width: 120,
        height: 3,
        background: "rgba(0,0,0,.06)",
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
      <style>{`
        @keyframes pulse {
          0%,100%{transform:scale(1);opacity:1}
          50%{transform:scale(1.1);opacity:.8}
        }
        @keyframes slide {
          0%{transform:translateX(-100%)}
          100%{transform:translateX(200%)}
        }
      `}</style>
    </div>
  );
}
