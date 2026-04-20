function Journey() {
  const C = window.CONTENT.journey;
  const railRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setDrawn(true), 600);
          obs.disconnect();
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="section-pad" id="journey">
      <div className="container-wide">
        <Reveal>
          <SectionHeader eyebrow={C.eyebrow} title={C.title} lead={C.lead} />
        </Reveal>

        {/* Timeline — horizontal rail of 5 steps */}
        <div ref={railRef} className="journey-rail" style={{position:"relative",marginTop:88}}>
          {/* base line (subtle gray) — through circle centers */}
          <div style={{
            position:"absolute",left:"10%",right:"10%",top:40,
            height:1,background:"var(--line-2)",
          }}/>
          {/* animated orange line — draws from left to right */}
          <div aria-hidden="true" style={{
            position:"absolute",left:"10%",top:39,
            width:"80%",height:2,background:"var(--accent)",
            transformOrigin:"left center",
            transform: drawn ? "scaleX(1)" : "scaleX(0)",
            transition:"transform 2200ms cubic-bezier(.22,.61,.36,1)",
            boxShadow:"0 0 12px rgba(232,90,26,.35)",
          }}/>
          <div className="journey-steps" style={{
            display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:24,position:"relative",
          }}>
            {C.steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{textAlign:"center"}}>
                  <div style={{
                    width:80,height:80,borderRadius:"50%",
                    background:"var(--bg)",border:"1.5px solid var(--accent)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    marginBottom:24,marginInline:"auto",position:"relative",
                    boxShadow:"0 0 0 6px var(--bg)",
                  }}>
                    <span style={{fontFamily:"var(--serif)",fontSize:24,fontWeight:600,color:"var(--accent)"}}>{s.n}</span>
                  </div>
                  <div className="mono text-xs" style={{color:"var(--accent)",letterSpacing:".14em",marginBottom:8}}>{s.week}</div>
                  <h3 style={{fontFamily:"var(--sans)",fontSize:18,fontWeight:600,marginBottom:10}}>{s.t}</h3>
                  <p className="text-sm" style={{color:"var(--ink-2)",lineHeight:1.7,maxWidth:"22ch",marginInline:"auto"}}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Before / After */}
        <div className="journey-before-after" style={{
          marginTop:120,
          display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:40,alignItems:"stretch",
        }}>
          <Reveal>
            <div style={{border:"1px solid var(--line)",borderRadius:12,padding:"40px 36px",height:"100%",background:"var(--bg-2)"}}>
              <div className="mono text-xs" style={{color:"var(--ink-3)",letterSpacing:".16em"}}>BEFORE</div>
              <h3 className="h-3 mt-4" style={{fontFamily:"var(--serif)",color:"var(--ink-2)"}}>受講前のあなた</h3>
              <ul style={{marginTop:24,listStyle:"none",display:"flex",flexDirection:"column",gap:14}}>
                {C.before.map((b, i) => (
                  <li key={i} style={{display:"flex",gap:12,alignItems:"start",color:"var(--ink-2)",fontSize:15}}>
                    <span style={{color:"var(--ink-3)",marginTop:2}}><Cross/></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"0 12px"}}>
            <div style={{fontFamily:"var(--serif)",fontSize:40,color:"var(--accent)",fontWeight:500}}>→</div>
          </div>

          <Reveal delay={120}>
            <div style={{border:"1px solid var(--accent)",borderRadius:12,padding:"40px 36px",height:"100%",background:"var(--bg)",boxShadow:"0 20px 50px -30px rgba(232,90,26,.35)"}}>
              <div className="mono text-xs" style={{color:"var(--accent)",letterSpacing:".16em"}}>AFTER · WEEK 12</div>
              <h3 className="h-3 mt-4" style={{fontFamily:"var(--serif)"}}>Week 12終了後のあなた</h3>
              <ul style={{marginTop:24,listStyle:"none",display:"flex",flexDirection:"column",gap:14}}>
                {C.after.map((a, i) => (
                  <li key={i} style={{display:"flex",gap:12,alignItems:"start",color:"var(--ink)",fontSize:15,fontWeight:500}}>
                    <span style={{color:"var(--accent)",marginTop:2}}><Check/></span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
window.Journey = Journey;
