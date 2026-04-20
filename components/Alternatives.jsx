function Alternatives() {
  const C = window.CONTENT.alternatives;
  return (
    <section className="section-pad" style={{background:"var(--bg-2)"}}>
      <div className="container-wide">
        <Reveal>
          <SectionHeader eyebrow={C.eyebrow} title={C.title} lead={C.lead} />
        </Reveal>

        <Reveal delay={100}>
          <div className="alternatives-table-wrap" style={{marginTop:64,border:"1px solid var(--line)",borderRadius:12,overflow:"hidden",background:"var(--surface)"}}>
            <table className="cmp-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="col-hero" style={{padding:"20px 20px",textAlign:"center"}}>
                    <div style={{fontFamily:"var(--serif)",fontSize:20,fontWeight:600,letterSpacing:".02em"}}>{C.cols[0]}</div>
                  </th>
                  {C.cols.slice(1).map((c, i) => (
                    <th key={i} style={{textAlign:"center",whiteSpace:"pre-line",lineHeight:1.4}}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {C.rows.map((r, i) => (
                  <tr key={i}>
                    <td className="row-label">{r.k}</td>
                    {r.v.map((v, j) => (
                      <td key={j} className={j === 0 ? "col-hero" : ""} style={{
                        color: j === 0 ? "var(--ink)" : "var(--ink-2)",
                        fontWeight: j === 0 ? 600 : 400,
                        textAlign:"center",
                      }}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="pullquote mt-10" style={{maxWidth:"50ch"}}>{C.note}</p>
      </div>
    </section>
  );
}
window.Alternatives = Alternatives;
