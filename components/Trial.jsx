function Trial() {
  const C = window.CONTENT.trial;
  return (
    <section id="trial" className="section-pad" style={{background:"var(--dark)",color:"var(--dark-ink)",position:"relative",overflow:"hidden"}}>
      <div aria-hidden style={{position:"absolute",inset:0,opacity:.18,pointerEvents:"none"}}>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" alt="" style={{width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(1)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, var(--dark) 0%, rgba(14,19,32,.7) 40%, var(--dark) 100%)"}}/>
      </div>
      <div className="container-wide" style={{position:"relative"}}>
        {/* Header */}
        <Reveal>
          <div style={{marginBottom:48}}>
            <Eyebrow accent="var(--accent-2)">{C.eyebrow}</Eyebrow>
            <h2 className="h-1 mt-4" style={{color:"var(--dark-ink)"}}>{C.title}</h2>
            <p className="lead mt-6" style={{color:"rgba(244,239,228,.7)"}}>{C.lead}</p>
          </div>
        </Reveal>

        <div className="trial-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"start"}}>
          {/* Left: demo video + CTA */}
          <Reveal>
            <div style={{display:"flex",flexDirection:"column",gap:24}}>
              {/* HeyGen iframe */}
              <div style={{
                borderRadius:12,overflow:"hidden",
                border:"1px solid rgba(255,255,255,.15)",
                boxShadow:"0 20px 60px -20px rgba(0,0,0,.6)",
                background:"#000",
                aspectRatio:"16/9",position:"relative",
              }}>
                <iframe
                  width="100%" height="100%"
                  src="https://app.heygen.com/embeds/8df664b4296545fd88b703ad4a1aed42"
                  title="video_0101_スタートアップの定義とJカーブ"
                  frameBorder="0"
                  allow="encrypted-media; fullscreen;"
                  allowFullScreen
                  style={{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}
                />
              </div>

              <Btn variant="primary" size="lg" href="https://checkout.teachable.com/secure/2701449/checkout/order_tld2xxlf" arrow>Week 1を無料で始める</Btn>

              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {C.fine.map((f, i) => (
                  <span key={i} style={{
                    display:"inline-flex",alignItems:"center",gap:8,
                    padding:"7px 12px",
                    border:"1px solid rgba(244,239,228,.22)",
                    borderRadius:"var(--radius-pill)",
                    background:"rgba(255,255,255,.06)",
                    color:"var(--dark-ink)",fontSize:13,fontWeight:500,
                  }}>
                    <span style={{color:"var(--accent-2)",display:"inline-flex"}}><Check color="var(--accent-2)"/></span>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol style={{listStyle:"none",display:"flex",flexDirection:"column",gap:0,border:"1px solid var(--dark-line)",borderRadius:12,overflow:"hidden"}}>
              {C.videos.map((v, i) => (
                <li key={i} style={{
                  display:"grid",gridTemplateColumns:"48px 1fr 56px",alignItems:"center",gap:16,
                  padding:"14px 20px",
                  borderBottom: i === C.videos.length - 1 ? "none" : "1px solid var(--dark-line)",
                  transition:"background .2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,.03)"}
                  onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                  <span className="mono text-xs" style={{color:"rgba(244,239,228,.4)"}}>{String(i+1).padStart(2,"0")}</span>
                  <span style={{fontSize:14,color:"var(--dark-ink)"}}>{v}</span>
                  <span className="mono text-xs" style={{color:"rgba(244,239,228,.4)",textAlign:"right"}}>{C.times[i]}m</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
window.Trial = Trial;
