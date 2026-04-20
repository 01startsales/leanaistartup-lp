function Pricing() {
  const C = window.CONTENT.pricing;
  return (
    <section id="pricing" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionHeader eyebrow={C.eyebrow} title={C.title} lead={C.lead} align="center" />
        </Reveal>

        <div className="pricing-grid" style={{marginTop:72,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20,alignItems:"stretch"}}>
          {C.plans.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{
                position:"relative",height:"100%",
                border: p.hero ? "1px solid var(--accent)" : "1px solid var(--line)",
                borderRadius:14,padding:"36px 32px 32px",
                background: p.hero ? "var(--ink)" : "var(--surface)",
                color: p.hero ? "var(--bg)" : "var(--ink)",
                boxShadow: p.hero ? "0 30px 80px -30px rgba(232,90,26,.4)" : "none",
                display:"flex",flexDirection:"column",
                transform: p.hero ? "translateY(-8px)" : "none",
              }}>
                {p.hero && (
                  <div style={{
                    position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",
                    background:"var(--accent)",color:"var(--accent-ink)",
                    padding:"6px 16px",borderRadius:"var(--radius-pill)",
                    fontSize:11,fontFamily:"var(--mono)",letterSpacing:".14em",fontWeight:600,
                  }}>RECOMMENDED · 先着20名</div>
                )}
                <div style={{fontFamily:"var(--mono)",fontSize:12,letterSpacing:".14em",color:p.hero?"var(--accent-2)":"var(--ink-3)"}}>
                  {p.name.toUpperCase()}
                </div>
                <h3 style={{fontFamily:"var(--sans)",fontSize:18,fontWeight:600,marginTop:4,color:p.hero?"var(--bg)":"var(--ink)"}}>{p.name}</h3>

                <div style={{display:"flex",alignItems:"baseline",gap:8,marginTop:24}}>
                  <span style={{fontFamily:"var(--serif)",fontSize:56,fontWeight:600,letterSpacing:"-.02em",lineHeight:1}}>{p.price}</span>
                  <span style={{fontSize:13,opacity:.7}}>{p.per}</span>
                </div>
                <div style={{fontSize:12,opacity:.7,marginTop:8,minHeight:32}} dangerouslySetInnerHTML={{__html: p.note.replace(/\n/g,"<br/>")}}/>

                <div style={{marginTop:24}}>
                  <Btn variant={p.hero ? "primary" : "secondary"} href={p.href} style={{width:"100%"}} arrow>{p.cta}</Btn>
                </div>

                <ul style={{listStyle:"none",marginTop:28,display:"flex",flexDirection:"column",gap:10,paddingTop:24,borderTop:"1px solid " + (p.hero ? "rgba(255,255,255,.12)" : "var(--line)")}}>
                  {C.features.map((f, j) => (
                    <li key={j} style={{fontSize:13,display:"flex",gap:10,alignItems:"center",opacity:p.hero?.9:1}}>
                      <Check color={p.hero ? "var(--accent-2)" : "var(--accent)"}/> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="pricing-bottom" style={{marginTop:64,display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
          <Reveal>
            <div className="card" style={{
              padding:"32px 36px",display:"flex",gap:24,alignItems:"center",
              border:"1.5px solid var(--accent)",
              background:"linear-gradient(135deg, color-mix(in srgb, var(--accent) 6%, var(--bg)) 0%, var(--bg) 60%)",
              boxShadow:"0 20px 60px -30px rgba(232,90,26,.45)",
              position:"relative",overflow:"hidden",
            }}>
              {/* Shield badge */}
              <div style={{
                width:72,height:82,flexShrink:0,position:"relative",
                display:"flex",alignItems:"center",justifyContent:"center",
              }}>
                <svg width="72" height="82" viewBox="0 0 72 82" fill="none" style={{position:"absolute",inset:0,filter:"drop-shadow(0 8px 20px rgba(232,90,26,.35))"}}>
                  <defs>
                    <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent)"/>
                      <stop offset="100%" stopColor="color-mix(in srgb, var(--accent) 80%, #000)"/>
                    </linearGradient>
                  </defs>
                  <path d="M36 2 L68 12 V40 C68 58 54 72 36 80 C18 72 4 58 4 40 V12 Z" fill="url(#shieldGrad)" stroke="color-mix(in srgb, var(--accent) 90%, #000)" strokeWidth="1"/>
                  <path d="M22 42 L32 52 L52 30" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <div style={{flex:1}}>
                <div className="mono text-xs" style={{color:"var(--accent)",letterSpacing:".16em",marginBottom:6}}>MONEY-BACK GUARANTEE</div>
                <h4 style={{fontFamily:"var(--serif)",fontSize:22,fontWeight:600,letterSpacing:".01em"}}>{C.guarantee.t}</h4>
                <p className="text-sm mt-2" style={{color:"var(--ink-2)",lineHeight:1.7}}>{C.guarantee.d}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card" style={{padding:"28px 32px"}}>
              <h4 style={{fontFamily:"var(--sans)",fontSize:16,fontWeight:600}}>{C.after.t}</h4>
              <ul style={{listStyle:"none",marginTop:14,display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 16px"}}>
                {C.after.items.map((a, i) => (
                  <li key={i} style={{fontSize:13,color:"var(--ink-2)",display:"flex",gap:8}}>
                    <span style={{color:"var(--accent)"}}>•</span> {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <p className="text-sm text-muted mt-8" style={{textAlign:"center"}}>
          5名以上でのご利用をお考えの場合は <a className="link" href="https://01start.co.jp/contact/">法人プランについてお問い合わせ</a> ください。
        </p>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
