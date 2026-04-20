// Tweaks panel — theme + variant swatches

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "orange",
  "variant": "balanced"
}/*EDITMODE-END*/;

function Tweaks() {
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState(TWEAK_DEFAULTS.theme);
  const [variant, setVariant] = useState(TWEAK_DEFAULTS.variant);

  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setVisible(true);
      if (e.data?.type === "__deactivate_edit_mode") setVisible(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({type:"__edit_mode_available"}, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-variant", variant);
    window.parent.postMessage({type:"__edit_mode_set_keys", edits:{theme, variant}}, "*");
  }, [theme, variant]);

  const themes = [
    { k: "orange", l: "Orange", c: "#E85A1A" },
    { k: "navy",   l: "Navy",   c: "#0B1220" },
    { k: "mono",   l: "Mono",   c: "#0A0A0A" },
  ];
  const variants = [
    { k: "safe",     l: "安全", d: "現行踏襲" },
    { k: "balanced", l: "中庸", d: "おすすめ" },
    { k: "bold",     l: "攻め", d: "大胆" },
  ];

  return (
    <div className="tweaks-panel" data-visible={visible}>
      <div className="tweaks-title">Tweaks</div>

      <div className="tweaks-group">
        <div className="text-xs text-muted" style={{marginBottom:4}}>配色テーマ</div>
        <div className="tweaks-row">
          {themes.map(t => (
            <button key={t.k} className="tweak-opt" data-active={theme === t.k} onClick={() => setTheme(t.k)}>
              <span className="swatch" style={{background:t.c}}/> {t.l}
            </button>
          ))}
        </div>
      </div>

      <div className="tweaks-group">
        <div className="text-xs text-muted" style={{marginBottom:4}}>レイアウト案</div>
        <div className="tweaks-row">
          {variants.map(v => (
            <button key={v.k} className="tweak-opt" data-active={variant === v.k} onClick={() => setVariant(v.k)}
              title={v.d}
              style={{flexDirection:"column",height:50,gap:2,padding:"6px 0"}}>
              <span style={{fontSize:12,fontWeight:600}}>{v.l}</span>
              <span style={{fontSize:10,opacity:.6}}>{v.d}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{marginTop:4,paddingTop:12,borderTop:"1px solid var(--line)"}}>
        <div className="mono text-xs text-muted" style={{letterSpacing:".1em"}}>
          現在: {theme} / {variant}
        </div>
      </div>
    </div>
  );
}
window.Tweaks = Tweaks;
