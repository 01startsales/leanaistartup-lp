function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const C = window.CONTENT;

  return (
    <nav className="nav" data-scrolled={scrolled}>
      <div className="container-wide" style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
        <a href="#hero" style={{display:"flex",alignItems:"center",gap:10,color:"var(--ink)"}}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="21" height="21" rx="4" stroke="currentColor"/>
            <path d="M5 11 L9 15 L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{fontFamily:"var(--serif)",fontSize:15,fontWeight:600,letterSpacing:".02em"}}>
            リーンAIスタートアップ講座
          </span>
        </a>

        <ul className="nav-links" style={{display:"flex",gap:32,listStyle:"none"}}>
          {C.nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} style={{fontSize:14,color:"var(--ink-2)",transition:"color .2s"}}
                onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--ink-2)"}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          <a className="nav-trial-link" href="#trial" style={{fontSize:13,color:"var(--ink-2)"}}>無料体験 →</a>
          <Btn variant="primary" size="sm" href={C.hero.primary.href}>月額¥4,980で始める</Btn>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
