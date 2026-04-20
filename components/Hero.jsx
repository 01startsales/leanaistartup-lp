function Hero() {
  const C = window.CONTENT;
  return (
    <section id="hero" style={{position:"relative",overflow:"hidden",background:"var(--dark)",color:"var(--dark-ink)"}}>
      {/* Full-bleed background image */}
      <div aria-hidden style={{position:"absolute",inset:0,zIndex:0}}>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=2400&q=85"
          alt=""
          style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}
        />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(10,14,28,.92) 0%, rgba(10,14,28,.78) 42%, rgba(10,14,28,.4) 78%, rgba(10,14,28,.2) 100%)"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(10,14,28,.5) 0%, rgba(10,14,28,0) 22%, rgba(10,14,28,0) 70%, rgba(10,14,28,.55) 100%)"}}/>
      </div>

      <div className="container-wide" style={{position:"relative",zIndex:1,paddingTop:96,paddingBottom:120,minHeight:"min(780px,88vh)",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <Reveal>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:36}}>
            <Badge live>{C.hero.notice}</Badge>
            <span className="mono text-xs" style={{color:"rgba(255,255,255,.7)"}}>{C.hero.eyebrow}</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="hero-headline h-display" style={{color:"#fff",letterSpacing:"-.02em",lineHeight:1.08}}>
            <span style={{display:"block",whiteSpace:"nowrap"}}>
              {C.hero.titleMain}
              <em style={{fontStyle:"normal",color:"var(--accent)",fontFamily:"var(--serif)"}}>{C.hero.titleEm1}</em>
              <span>{C.hero.titleMid}</span>
            </span>
            <span style={{display:"block",whiteSpace:"nowrap"}}>
              <span>{C.hero.titleBreak}</span>
              <em style={{fontStyle:"normal",color:"var(--accent)",fontFamily:"var(--serif)"}}>{C.hero.titleEm2}</em>
              <span>{C.hero.titleEnd}</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="lead mt-8" style={{maxWidth:"52ch",color:"rgba(255,255,255,.82)"}}>{C.hero.lead}</p>
        </Reveal>

        <Reveal delay={240}>
          <div style={{display:"flex",gap:12,marginTop:40,flexWrap:"wrap"}}>
            <Btn variant="primary" size="lg" href={C.hero.primary.href} arrow>{C.hero.primary.label}</Btn>
            <a href={C.hero.secondary.href} style={{
              display:"inline-flex",alignItems:"center",gap:8,padding:"16px 28px",
              borderRadius:"var(--radius-pill)",border:"1px solid rgba(255,255,255,.35)",
              color:"#fff",fontSize:15,fontWeight:500,textDecoration:"none",
              background:"rgba(255,255,255,.06)",backdropFilter:"blur(8px)",
              transition:"all .2s"
            }}>{C.hero.secondary.label}</a>
          </div>
          <div className="hero-assurance" style={{marginTop:24,display:"flex",flexWrap:"wrap",gap:10}}>
            {[
              { t: "28日間返金保証", icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              )},
              { t: "いつでも解約OK", icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
              )},
              { t: "クレカ登録なしで無料体験", icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20"/></svg>
              )},
            ].map((it, i) => (
              <span key={i} style={{
                display:"inline-flex",alignItems:"center",gap:8,
                padding:"8px 14px",
                border:"1px solid rgba(255,255,255,.22)",
                borderRadius:"var(--radius-pill)",
                background:"rgba(255,255,255,.08)",
                backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",
                color:"#fff",fontSize:13,fontWeight:500,letterSpacing:".01em",
              }}>
                <span style={{color:"var(--accent)",display:"inline-flex"}}>{it.icon}</span>
                {it.t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Stats row — inside hero, on dark, full-width */}
      <div style={{position:"relative",zIndex:1,borderTop:"1px solid rgba(255,255,255,.14)",background:"rgba(10,14,28,.82)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)"}}>
        <div className="container-wide">
          <div className="stats-grid" style={{
            display:"grid",gridTemplateColumns:"repeat(4, 1fr)"}}>
            {C.hero.stats.map((s, i) => (
              <div key={i} style={{
                padding:"32px 28px",
                borderLeft: i === 0 ? "0" : "1px solid rgba(255,255,255,.14)",
              }}>
                <div style={{fontFamily:"var(--serif)",fontSize:"clamp(36px,3.6vw,52px)",fontWeight:500,color:"#fff",lineHeight:1}}>
                  <Counter to={s.n} suffix={s.suffix}/>
                </div>
                <div className="stat-label" style={{color:"rgba(255,255,255,.7)",marginTop:10}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
