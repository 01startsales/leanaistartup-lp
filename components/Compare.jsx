function Compare() {
  const C = window.CONTENT.compare;
  return (
    <section className="section-pad" style={{background:"var(--dark)",color:"var(--dark-ink)"}}>
      <div className="container-wide">
        <Reveal>
          <div style={{maxWidth:720}}>
            <Eyebrow accent="var(--accent-2)">{C.eyebrow}</Eyebrow>
            <h2 className="h-1 mt-4" style={{whiteSpace:"pre-line",color:"var(--dark-ink)"}}>{C.title}</h2>
            <p className="lead mt-6" style={{color:"rgba(244,239,228,.7)"}}>{C.lead}</p>
          </div>
        </Reveal>

        <div className="compare-grid" style={{
          marginTop:72,
          display:"grid",gridTemplateColumns:"200px 1fr 1fr",gap:"1px",
          background:"var(--dark-line)",border:"1px solid var(--dark-line)",
          borderRadius:12,overflow:"hidden",
        }}>
          {/* Header row */}
          <div style={{background:"var(--dark)",padding:"22px 24px"}}>
            <div className="mono text-xs" style={{color:"rgba(244,239,228,.5)",letterSpacing:".14em"}}>DIMENSION</div>
          </div>
          <div style={{background:"var(--dark)",padding:"22px 24px"}}>
            <div className="mono text-xs" style={{color:"rgba(244,239,228,.5)",letterSpacing:".14em"}}>CONVENTIONAL</div>
            <div style={{fontFamily:"var(--serif)",fontSize:20,marginTop:6,fontWeight:500}}>従来の起業</div>
          </div>
          <div style={{background:"color-mix(in srgb, var(--accent) 14%, var(--dark))",padding:"22px 24px",borderLeft:"1px solid var(--accent)"}}>
            <div className="mono text-xs" style={{color:"var(--accent-2)",letterSpacing:".14em"}}>LEAN AI STARTUP</div>
            <div style={{fontFamily:"var(--serif)",fontSize:20,marginTop:6,fontWeight:500}}>リーンAIスタートアップ</div>
          </div>

          {C.rows.map((r, i) => (
            <React.Fragment key={i}>
              <div style={{background:"var(--dark)",padding:"22px 24px"}}>
                <div style={{fontFamily:"var(--sans)",fontWeight:600,fontSize:14,color:"var(--dark-ink)"}}>{r.key}</div>
              </div>
              <div style={{background:"var(--dark)",padding:"22px 24px"}}>
                <p style={{color:"rgba(244,239,228,.68)",fontSize:14,lineHeight:1.75}}>
                  <Cross/> <span style={{marginLeft:8}}>{r.a}</span>
                </p>
              </div>
              <div style={{background:"color-mix(in srgb, var(--accent) 6%, var(--dark))",padding:"22px 24px",borderLeft:"1px solid color-mix(in srgb, var(--accent) 40%, transparent)"}}>
                <p style={{color:"var(--dark-ink)",fontSize:14,lineHeight:1.75}}>
                  <Check color="var(--accent-2)"/> <span style={{marginLeft:8}}>{r.b}</span>
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        <p className="mono text-xs mt-8" style={{color:"rgba(244,239,228,.4)"}}>{C.source}</p>
      </div>
    </section>
  );
}
window.Compare = Compare;
