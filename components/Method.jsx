function Method() {
  const C = window.CONTENT.method;
  return (
    <section id="method" className="section-pad" style={{background:"var(--bg-2)"}}>
      <div className="container-wide">
        <Reveal>
          <SectionHeader eyebrow={C.eyebrow} title={C.title} lead={C.lead} />
        </Reveal>

        <div className="method-grid" style={{
          marginTop:72,
          display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:1,
          background:"var(--line)",border:"1px solid var(--line)",borderRadius:12,overflow:"hidden",
        }}>
          {C.steps.map((s, i) => (
            <Reveal key={i} delay={i * 70}>
              <div style={{background:"var(--bg)",padding:"40px 28px",height:"100%",display:"flex",flexDirection:"column",gap:14}}>
                <div className="mono text-xs" style={{color:"var(--accent)",letterSpacing:".14em"}}>{s.n}</div>
                <h3 style={{fontFamily:"var(--sans)",fontSize:19,fontWeight:600,letterSpacing:"-.005em"}}>{s.t}</h3>
                <p className="text-sm" style={{color:"var(--ink-2)",lineHeight:1.75}}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div style={{marginTop:24}}/>
        </Reveal>
      </div>
    </section>
  );
}
window.Method = Method;
