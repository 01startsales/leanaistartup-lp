function Curriculum() {
  const C = window.CONTENT.curriculum;
  const [open, setOpen] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setOpen((o) => (o + 1) % C.phases.length);
    }, 1500);
    return () => clearInterval(id);
  }, [paused, C.phases.length]);

  return (
    <section id="curriculum" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionHeader eyebrow={C.eyebrow} title={C.title} lead={C.lead} />
        </Reveal>

        <div style={{marginTop:64}} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {C.phases.map((p, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{
                borderTop: "1px solid var(--line)",
                borderBottom: i === C.phases.length - 1 ? "1px solid var(--line)" : "none",
              }}>
                {/* Phase header row */}
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width:"100%",textAlign:"left",
                    display:"grid",
                    gridTemplateColumns:"40px 1fr auto",
                    gap:16,alignItems:"center",
                    padding:"22px 4px",
                    background:"transparent",border:"none",cursor:"pointer",
                    transition:"color .2s",
                  }}
                >
                  {/* Phase number */}
                  <div style={{
                    width:40,height:40,borderRadius:"50%",flexShrink:0,
                    background: isOpen ? "var(--accent)" : "var(--bg-2)",
                    border: isOpen ? "none" : "1px solid var(--line)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    transition:"background .25s, border .25s",
                  }}>
                    <span style={{
                      fontFamily:"var(--serif)",fontSize:16,fontWeight:600,
                      color: isOpen ? "#fff" : "var(--ink-3)",
                      transition:"color .25s",
                    }}>{i+1}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <div className="mono text-xs" style={{color:"var(--ink-3)",letterSpacing:".12em",marginBottom:4}}>
                      {p.label} · {p.weeks} · {p.count}
                    </div>
                    <div style={{
                      fontFamily:"var(--sans)",fontSize:17,fontWeight:600,
                      color: isOpen ? "var(--accent)" : "var(--ink)",
                      transition:"color .2s",
                      lineHeight:1.3,
                    }}>{p.title}</div>
                  </div>

                  {/* +/- indicator */}
                  <div style={{
                    width:28,height:28,borderRadius:"50%",
                    border:"1px solid var(--line)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    flexShrink:0,
                    background: isOpen ? "var(--accent)" : "transparent",
                    transition:"background .25s, border .25s, transform .35s",
                    transform: isOpen ? "rotate(45deg)" : "none",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 0v10M0 5h10" stroke={isOpen ? "#fff" : "currentColor"} strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                {/* Expanded week detail */}
                <div style={{
                  display:"grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition:"grid-template-rows .4s cubic-bezier(.22,.61,.36,1)",
                }}>
                  <div style={{overflow:"hidden"}}>
                    <div style={{padding:"0 56px 28px 56px",display:"flex",flexDirection:"column",gap:16}}>
                      {p.sub.map((w, j) => (
                        <div key={j} style={{
                          border:"1px solid var(--line)",borderRadius:10,padding:"20px 24px",
                          background:"var(--surface)",
                        }}>
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:16,marginBottom:12,flexWrap:"wrap"}}>
                            <div>
                              <div className="mono text-xs" style={{color:"var(--accent)",letterSpacing:".14em",marginBottom:4}}>{w.w}</div>
                              <h3 style={{fontFamily:"var(--sans)",fontSize:16,fontWeight:600}}>{w.t}</h3>
                            </div>
                            <span className="tag">{w.n}</span>
                          </div>
                          <ul style={{listStyle:"none",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px 24px"}}>
                            {w.items.map((it, k) => (
                              <li key={k} style={{color:"var(--ink-2)",fontSize:13,lineHeight:1.6,display:"flex",gap:8}}>
                                <span style={{color:"var(--accent)",flexShrink:0}}>—</span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          #curriculum [style*="padding:\"0 56px"] { padding: 0 0 24px 0 !important; }
          #curriculum ul[style*="gridTemplateColumns:\"1fr 1fr\""] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
window.Curriculum = Curriculum;
