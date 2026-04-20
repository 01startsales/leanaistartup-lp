function FAQ() {
  const C = window.CONTENT.faq;
  const [cat, setCat] = useState("すべて");
  const [open, setOpen] = useState(null);

  const filtered = cat === "すべて" ? C.items : C.items.filter(i => i.c === cat);

  return (
    <section id="faq" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <SectionHeader eyebrow={C.eyebrow} title={C.title} />
        </Reveal>

        <Reveal delay={80}>
          <div style={{marginTop:40,display:"flex",gap:8,flexWrap:"wrap"}}>
            {C.categories.map((c, i) => (
              <button key={i} className="chip" data-active={cat === c} onClick={() => {setCat(c); setOpen(null);}}>
                {c}
                {cat === c && <span style={{marginLeft:6,opacity:.6,fontSize:11}}>· {c === "すべて" ? C.items.length : C.items.filter(x => x.c === c).length}</span>}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{marginTop:32,borderTop:"1px solid var(--line)"}}>
            {filtered.map((f, i) => (
              <div key={f.q} className="acc-item" data-open={open === i}>
                <div className="acc-head" onClick={() => setOpen(open === i ? null : i)}>
                  <div style={{display:"flex",gap:20,alignItems:"center",flex:1}}>
                    <span className="mono text-xs" style={{color:"var(--ink-3)",letterSpacing:".14em",minWidth:28}}>{String(i+1).padStart(2,"0")}</span>
                    <span className="acc-q">{f.q}</span>
                  </div>
                  <span className="acc-plus" aria-hidden/>
                </div>
                <div className="acc-body">
                  <div>
                    <div style={{display:"grid",gridTemplateColumns:"48px 1fr",gap:20,paddingLeft:0}}>
                      <span className="mono text-xs" style={{color:"var(--accent)",letterSpacing:".14em"}}>{f.c}</span>
                      <p className="acc-a">{f.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div style={{marginTop:48,textAlign:"center"}}>
          <a className="link" href={C.moreHref} style={{color:"var(--accent)"}}>{C.moreLabel} →</a>
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
