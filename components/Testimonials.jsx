function Testimonials() {
  const C = window.CONTENT.testimonials;
  return (
    <section className="section-pad">
      <div className="container-wide">
        <Reveal>
          <div style={{textAlign:"center",maxWidth:720,marginInline:"auto"}}>
            <Eyebrow>{C.eyebrow}</Eyebrow>
            <h2 className="h-1 mt-4" style={{textAlign:"center"}}>{C.title}</h2>
          </div>
        </Reveal>

        {/* Logo ticker */}
        <div className="ticker-wrap" style={{marginTop:56,padding:"28px 0",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
          <div className="ticker">
            {[...C.logos, ...C.logos].map((l, i) => (
              <span key={i} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",height:40,filter:"grayscale(1)",opacity:.6,transition:"opacity .2s, filter .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.opacity=1;e.currentTarget.style.filter="grayscale(0)"}}
                onMouseLeave={e=>{e.currentTarget.style.opacity=.6;e.currentTarget.style.filter="grayscale(1)"}}>
                <span style={{fontFamily:"var(--serif)",fontSize:20,fontWeight:500,color:"var(--ink-3)",whiteSpace:"nowrap"}}>{l.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* quotes */}
        <div className="testimonials-grid" style={{marginTop:72,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24}}>
          {C.items.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <a href={t.href} target="_blank" rel="noopener" style={{textDecoration:"none",display:"block",height:"100%"}}>
                <figure className="card" style={{padding:"32px 28px",height:"100%",display:"flex",flexDirection:"column",gap:20,transition:"border-color .2s, transform .2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.transform="translateY(-2px)"}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="";e.currentTarget.style.transform=""}}>
                  <div style={{display:"flex",gap:2,color:"var(--accent)"}}>
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M7 0l1.8 4.5L13.5 5l-3.6 3.1 1.1 4.8L7 10.3 2 12.9l1.1-4.8L0 5l4.7-.5L7 0z"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote style={{flex:1,fontSize:14.5,lineHeight:1.8,color:"var(--ink-2)"}}>"{t.q}"</blockquote>
                  <figcaption style={{borderTop:"1px solid var(--line)",paddingTop:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontFamily:"var(--sans)",fontWeight:600,fontSize:13,color:"var(--ink)"}}>{t.who}</span>
                    <span style={{color:"var(--accent)",fontSize:11,fontWeight:500}}>事例を見る →</span>
                  </figcaption>
                </figure>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
