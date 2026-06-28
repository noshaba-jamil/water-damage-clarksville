export default function EmergencyBar() {
  return (
    <div style={{background:"#09090B",color:"rgba(255,255,255,0.55)",display:"flex",alignItems:"center",justifyContent:"center",gap:32,padding:"9px 24px",fontFamily:"var(--font-inter)",fontSize:12,fontWeight:500,flexWrap:"wrap",position:"sticky",top:0,zIndex:100,borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
      <span style={{display:"flex",alignItems:"center",gap:7}}>
        <span style={{width:6,height:6,borderRadius:"50%",background:"#4ADE80",display:"inline-block"}}/>
        Emergency response team available now
      </span>
      <span>|</span>
      <a href="tel:+19312712350" style={{color:"#4ADE80",fontWeight:600}}>(931) 271-2350</a>
      <span>|</span>
      <span>60-Minute guaranteed arrival · Clarksville TN</span>
    </div>
  );
}
