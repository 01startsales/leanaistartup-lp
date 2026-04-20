function Problems() {
  const C = window.CONTENT.problems;
  return (
    <section className="section-pad" style={{background:"var(--bg-2)"}}>
      <div className="container-wide">
        <Reveal>
          <SectionHeader eyebrow={C.eyebrow} title={C.title} />
        </Reveal>

        <div className="problems-grid" style={{
          marginTop:72,
          display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1px",
          background:"var(--line)",border:"1px solid var(--line)",
        }}>
          {C.items.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                background:"var(--bg)",padding:"44px 40px",height:"100%",
                display:"flex",flexDirection:"column",gap:16,
              }}>
                <div className="num-plate">— {p.n}</div>
                <h3 className="h-3" style={{fontFamily:"var(--sans)",fontSize:20,fontWeight:600}}>{p.t}</h3>
                <p style={{color:"var(--ink-2)",fontSize:15,lineHeight:1.8,maxWidth:"44ch"}}>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div style={{marginTop:64,textAlign:"center",maxWidth:680,marginInline:"auto"}}>
            <p className="text-muted text-sm" style={{letterSpacing:".04em"}}>{C.conclusion}</p>
            <p style={{marginTop:12,fontFamily:"var(--serif)",fontSize:26,lineHeight:1.6,fontWeight:500}}>
              「<span style={{color:"var(--accent)"}}>{C.conclusionEm}</span>」
              <span style={{color:"var(--ink-2)",fontSize:18}}>{C.conclusionRest}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
window.Problems = Problems;
