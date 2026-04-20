function Line() {
  const C = window.CONTENT.line;
  return (
    <section className="section-pad">
      <div className="container-wide">
        <div style={{
          background:"var(--ink)",color:"var(--bg)",borderRadius:18,
          padding:"72px 64px",position:"relative",overflow:"hidden",
        }}>
          <div aria-hidden style={{
            position:"absolute",top:-100,right:-100,width:420,height:420,borderRadius:"50%",
            background:"radial-gradient(circle, color-mix(in srgb, #06C755 40%, transparent), transparent 60%)",
            filter:"blur(20px)",pointerEvents:"none",
          }}/>
          <div className="line-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,position:"relative",alignItems:"start"}}>
            <Reveal>
              <div>
                <Eyebrow accent="#06C755">{C.eyebrow}</Eyebrow>
                <h2 className="h-1 mt-4" style={{whiteSpace:"pre-line",color:"var(--bg)"}}>{C.title}</h2>
                <p className="lead mt-6" style={{color:"rgba(244,239,228,.7)"}}>{C.lead}</p>
                <div style={{marginTop:32,display:"flex",gap:12,flexWrap:"wrap"}}>
                  <Btn variant="line" size="lg" href={C.cta.href} arrow>{C.cta.label}</Btn>
                </div>
                <p className="text-xs mt-6" style={{color:"rgba(244,239,228,.45)"}}>{C.fine}</p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ol style={{listStyle:"none",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px 18px"}}>
                {C.items.map((it, i) => (
                  <li key={i} style={{display:"flex",gap:12,alignItems:"start",fontSize:13.5,color:"rgba(244,239,228,.88)",lineHeight:1.6,padding:"10px 0",borderTop:"1px solid rgba(255,255,255,.1)"}}>
                    <span className="mono" style={{color:"#06C755",fontSize:11,fontWeight:600,marginTop:3,minWidth:20}}>{String(i+1).padStart(2,"0")}</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Line = Line;
