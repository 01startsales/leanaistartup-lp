function StickyBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => {
      const sc = window.scrollY;
      const docH = document.body.scrollHeight - window.innerHeight;
      // show after 60% but hide at very bottom (avoid overlap with FinalCTA/Footer)
      setVisible(sc > window.innerHeight * 0.8 && sc < docH - 1100);
    };
    h();
    window.addEventListener("scroll", h, {passive:true});
    return () => window.removeEventListener("scroll", h);
  }, []);
  const C = window.CONTENT;
  return (
    <div className="sticky-bar" data-visible={visible}>
      <div className="container-wide" style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:64,gap:16}}>
        <div style={{display:"flex",gap:20,alignItems:"center",minWidth:0}}>
          <span className="mono text-xs" style={{color:"rgba(244,239,228,.5)",letterSpacing:".14em"}}>FOUNDING · 先着20名</span>
          <span style={{fontFamily:"var(--serif)",fontSize:18,fontWeight:500,whiteSpace:"nowrap"}}>月額 ¥4,980<span style={{fontSize:12,opacity:.6,marginLeft:4}}>/月（税込）</span></span>
        </div>
        <div style={{display:"flex",gap:10}}>
          <Btn variant="secondary" size="sm" href="#trial" style={{color:"var(--dark-ink)",borderColor:"rgba(255,255,255,.2)",background:"transparent"}}>無料体験</Btn>
          <Btn variant="primary" size="sm" href={C.hero.primary.href} arrow>今すぐ始める</Btn>
        </div>
      </div>
    </div>
  );
}
window.StickyBar = StickyBar;
