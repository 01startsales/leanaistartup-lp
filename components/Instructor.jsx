function Instructor() {
  const C = window.CONTENT.instructor;
  const book = C.book;
  return (
    <section id="instructor" className="section-pad" style={{background:"var(--bg-2)"}}>
      <div className="container-wide">
        <div className="instructor-grid" style={{display:"grid",gridTemplateColumns:"320px 1fr",gap:56,alignItems:"start"}}>
          <Reveal>
            <div>
              {/* Portrait */}
              <div style={{
                aspectRatio:"4/5",borderRadius:12,overflow:"hidden",
                border:"1px solid var(--line)",position:"relative",background:"var(--bg-3)",
              }}>
                <img src="images/instructor.jpg" alt="講師 芝先恵介"
                  style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                <div style={{position:"absolute",left:14,bottom:14,padding:"5px 10px",background:"rgba(0,0,0,.55)",color:"#fff",borderRadius:"var(--radius-pill)",backdropFilter:"blur(6px)",fontFamily:"var(--mono)",fontSize:10,letterSpacing:".14em"}}>
                  SHIBASAKI KEISUKE
                </div>
              </div>

              {/* Credentials — horizontal chips, readable size */}
              <div style={{marginTop:16,display:"flex",flexWrap:"wrap",gap:6}}>
                {C.creds.map((c, i) => (
                  <span key={i} style={{
                    display:"inline-flex",alignItems:"center",gap:6,
                    padding:"5px 10px",border:"1px solid var(--line)",
                    borderRadius:"var(--radius-pill)",background:"var(--bg)",
                    fontSize:12,color:"var(--ink-2)",fontWeight:500,whiteSpace:"nowrap",
                  }}>
                    <span style={{width:5,height:5,borderRadius:"50%",background:"var(--accent)"}}/>
                    {c}
                  </span>
                ))}
              </div>

              {/* Book card — compact horizontal */}
              {book && (
                <a href={book.url} target="_blank" rel="noopener" style={{
                  marginTop:16,display:"grid",gridTemplateColumns:"92px 1fr",gap:14,
                  padding:12,border:"1px solid var(--line)",borderRadius:8,
                  background:"var(--bg)",textDecoration:"none",color:"inherit",
                  transition:"border-color .2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--accent)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--line)"}}>
                  <img src={book.img} alt={book.title} style={{width:92,aspectRatio:"92/130",objectFit:"cover",borderRadius:3,display:"block",boxShadow:"0 8px 20px -8px rgba(10,14,28,.35)"}}/>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:5,minWidth:0}}>
                    <div className="mono" style={{fontSize:9,color:"var(--accent)",letterSpacing:".14em"}}>CO-AUTHORED</div>
                    <div style={{fontFamily:"var(--serif)",fontSize:13,fontWeight:600,lineHeight:1.4,color:"var(--ink)",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{book.title}</div>
                    <div style={{fontSize:10.5,color:"var(--ink-3)"}}>{book.publisher} · Amazon →</div>
                  </div>
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <Eyebrow>{C.eyebrow}</Eyebrow>
              <h2 className="h-1 mt-4" style={{fontFamily:"var(--serif)"}}>
                講師：{C.name}
              </h2>
              <div style={{color:"var(--ink-2)",fontSize:15,marginTop:8}}>{C.role}</div>

              <blockquote className="pullquote mt-10">{C.quote}</blockquote>

              <div style={{marginTop:40,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24}}>
                {C.groups.map((g, i) => (
                  <div key={i}>
                    <div className="mono text-xs" style={{color:"var(--accent)",letterSpacing:".14em",marginBottom:12}}>{g.t}</div>
                    <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
                      {g.items.map((it, j) => (
                        <li key={j} style={{fontSize:13,color:"var(--ink-2)",lineHeight:1.6,borderTop:"1px solid var(--line)",paddingTop:10}}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
window.Instructor = Instructor;
