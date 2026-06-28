import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{minHeight:"70vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#F9FAFB",padding:"48px 20px"}}>
      <div style={{textAlign:"center",maxWidth:480}}>
        <div style={{fontFamily:"var(--font-cormorant)",fontSize:96,fontWeight:700,color:"#E4E4E7",lineHeight:1}}>404</div>
        <h1 style={{fontFamily:"var(--font-cormorant)",fontSize:32,fontWeight:700,color:"#09090B",margin:"16px 0 12px",letterSpacing:"-0.5px"}}>Page Not Found</h1>
        <p style={{fontFamily:"var(--font-inter)",fontSize:15,color:"#52525B",marginBottom:32,lineHeight:1.7}}>The page you&apos;re looking for doesn&apos;t exist. For a water damage emergency in Clarksville TN, please call us immediately.</p>
        <div style={{display:"flex",flexDirection:"column",gap:10,alignItems:"center"}}>
          <a href="tel:+19312712350" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#22C55E",color:"#09090B",padding:"14px 32px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontWeight:700,fontSize:16}}>📞 (931) 271-2350 — Emergency</a>
          <Link href="/" style={{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"#52525B",padding:"12px 24px",borderRadius:6,textDecoration:"none",fontFamily:"var(--font-inter)",fontWeight:500,fontSize:14,border:"1px solid #E4E4E7"}}>← Go to Homepage</Link>
        </div>
      </div>
    </div>
  );
}
