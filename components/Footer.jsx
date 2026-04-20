function Footer() {
  const C = window.CONTENT.footer;
  return (
    <footer style={{background:"var(--dark)",color:"var(--dark-ink)",padding:"72px 0 40px"}}>
      <div className="container-wide">
        <div className="footer-grid" style={{display:"grid",gridTemplateColumns:"1fr auto",gap:48,alignItems:"start"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none">
                <rect x="0.5" y="0.5" width="21" height="21" rx="4" stroke="currentColor"/>
                <path d="M5 11 L9 15 L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{fontFamily:"var(--serif)",fontSize:20,fontWeight:600}}>リーンAIスタートアップ講座</span>
            </div>
            <p style={{marginTop:20,fontSize:13,color:"rgba(244,239,228,.55)",maxWidth:"44ch",lineHeight:1.8}}>
              リーンAIスタートアップ講座 ── 12週間で、生成AIを武器に新規事業をPMFまで導く実践プログラム。<br/>
              運営：株式会社01START
            </p>

            <div style={{marginTop:28,display:"flex",gap:10}}>
              {[
                {l:"X", t:"x", href:"https://x.com/shibasaki_k"},
                {l:"n", t:"note", href:"https://note.com/01start"},
                {l:"NP", t:"NewsPicks", href:"https://newspicks.com/user/193990/"},
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener" title={s.t} style={{
                  width:36,height:36,borderRadius:"50%",border:"1px solid rgba(255,255,255,.15)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontFamily:"var(--mono)",fontSize:12,color:"rgba(244,239,228,.7)",
                  transition:"all .2s var(--ease)",
                }}
                  onMouseEnter={e => {e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent-2)"}}
                  onMouseLeave={e => {e.currentTarget.style.borderColor="rgba(255,255,255,.15)";e.currentTarget.style.color="rgba(244,239,228,.7)"}}
                >{s.l}</a>
              ))}
            </div>
          </div>

          <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:14}}>
            {C.links.map((l, i) => (
              <li key={i}><a href={l.href} style={{fontSize:13,color:"rgba(244,239,228,.75)"}}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div style={{marginTop:64,paddingTop:24,borderTop:"1px solid var(--dark-line)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
          <span className="mono text-xs" style={{color:"rgba(244,239,228,.45)",letterSpacing:".1em"}}>{C.copyright}</span>
          <span className="mono text-xs" style={{color:"rgba(244,239,228,.3)",letterSpacing:".14em"}}>MADE FOR 01START · v2.0</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
