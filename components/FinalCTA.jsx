function FinalCTA() {
  const C = window.CONTENT.finalCta;
  const theme = document.body.getAttribute("data-theme");
  // Always use brand-colored solid, not photo
  return (
    <section id="finalcta" style={{
      position:"relative",overflow:"hidden",
      background: "var(--accent)",
      color: "var(--accent-ink)",
      paddingBlock: "clamp(96px, 12vw, 160px)",
    }}>
      {/* Soft noise texture / grain */}
      <div aria-hidden style={{
        position:"absolute",inset:0,opacity:.08,pointerEvents:"none",
        backgroundImage:"radial-gradient(circle at 20% 20%, rgba(255,255,255,.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,.3), transparent 45%)",
      }}/>
      {/* Horizon line */}
      <div aria-hidden style={{
        position:"absolute",left:0,right:0,top:"50%",height:1,background:"rgba(255,255,255,.2)",
      }}/>

      <div className="container-wide" style={{position:"relative",textAlign:"center"}}>
        <Reveal>
          <div style={{display:"inline-flex",alignItems:"center",gap:10,padding:"8px 16px",borderRadius:999,border:"1px solid rgba(255,255,255,.3)",background:"rgba(0,0,0,.08)"}}>
            <span style={{width:6,height:6,borderRadius:"50%",background:"#fff",animation:"pulse 2s infinite"}}/>
            <span className="mono text-xs" style={{letterSpacing:".14em",fontWeight:500}}>{C.notice}</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 style={{
            fontFamily:"var(--serif)",fontWeight:600,
            fontSize:"clamp(72px, 10vw, 140px)",lineHeight:1.02,letterSpacing:"-.03em",
            marginTop:40,textWrap:"balance",
          }}>{C.titleJa}</h2>
        </Reveal>

        <Reveal delay={200}>
          <p style={{
            maxWidth:"44ch",marginInline:"auto",marginTop:32,
            fontSize:17,lineHeight:1.85,color:"rgba(255,255,255,.9)",
          }}>{C.lead}</p>
        </Reveal>

        <Reveal delay={280}>
          <div style={{marginTop:48,display:"inline-flex",flexDirection:"column",alignItems:"center",gap:14}}>
            <a href={C.primary.href} style={{
              display:"inline-flex",alignItems:"center",gap:12,height:66,padding:"0 40px",
              borderRadius:8,background:"#fff",color:"var(--accent)",
              fontSize:17,fontWeight:700,fontFamily:"var(--sans)",
              boxShadow:"0 20px 40px -16px rgba(0,0,0,.25)",
              transition:"transform .25s var(--ease)",
            }}
              onMouseEnter={e => e.currentTarget.style.transform="translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform="none"}>
              {C.primary.label}
              <span style={{marginLeft:4}}>→</span>
            </a>

            {/* Tertiary row */}
            <div style={{display:"flex",gap:24,marginTop:8,alignItems:"center"}}>
              <a href={C.secondary.href} style={{color:"rgba(255,255,255,.9)",borderBottom:"1px solid rgba(255,255,255,.4)",paddingBottom:2,fontSize:14}}>{C.secondary.label}</a>
              <span style={{color:"rgba(255,255,255,.4)"}}>·</span>
              <a href={C.tertiary.href} style={{color:"rgba(255,255,255,.9)",borderBottom:"1px solid rgba(255,255,255,.4)",paddingBottom:2,fontSize:14}}>{C.tertiary.label}</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <p className="mono text-xs mt-12" style={{color:"rgba(255,255,255,.6)",letterSpacing:".1em"}}>{C.fine}</p>
        </Reveal>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;
