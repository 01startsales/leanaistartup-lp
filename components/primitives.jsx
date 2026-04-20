// Shared primitive components. Exposes to window so all other scripts can use them.

const { useState, useEffect, useRef, useMemo } = React;

function Eyebrow({ children, accent }) {
  return <div className="eyebrow" style={accent ? {color: accent} : null}>{children}</div>;
}

function SectionHeader({ eyebrow, title, lead, align = "left", maxWidth = 720 }) {
  const style = align === "center" ? { textAlign: "center", marginInline: "auto", maxWidth } : { maxWidth };
  return (
    <header style={style}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="h-1 mt-4" style={{whiteSpace:"pre-line",wordBreak:"keep-all",lineBreak:"strict",overflowWrap:"normal"}}>{title}</h2>
      {lead && <p className="lead mt-6" style={align === "center" ? {marginInline:"auto"} : null}>{lead}</p>}
    </header>
  );
}

function Badge({ children, live }) {
  return <span className={"badge" + (live ? " badge-live" : "")}>{children}</span>;
}

function Btn({ variant = "primary", size, href, children, arrow, onClick, style }) {
  const cls = `btn btn-${variant}${size ? " btn-" + size : ""}${arrow ? " btn-arrow" : ""}`;
  if (href) return <a className={cls} href={href} style={style} onClick={onClick}>{children}</a>;
  return <button className={cls} style={style} onClick={onClick}>{children}</button>;
}

// Animated counter — counts up when in view
function Counter({ to, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  const parsedTo = typeof to === "string" ? parseInt(to.replace(/,/g, ""), 10) : to;
  useEffect(() => {
    const el = ref.current;
    if (!el || !parsedTo) return;
    let rafId;
    const run = () => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(Math.round(parsedTo * eased));
        if (p < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };
    // If already in viewport on mount, start immediately
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { run(); return () => cancelAnimationFrame(rafId); }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { run(); obs.disconnect(); }
      });
    }, { threshold: 0.1 });
    obs.observe(el);
    // safety: fire after 1.2s regardless
    const t = setTimeout(() => { run(); obs.disconnect(); }, 1200);
    return () => { obs.disconnect(); clearTimeout(t); cancelAnimationFrame(rafId); };
  }, [parsedTo]);
  return <span ref={ref} className="stat-num">{v.toLocaleString()}{suffix}</span>;
}

// Reveal wrapper — fade/slide up on enter
function Reveal({ children, delay = 0, y = 16 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(true); // default to shown; observer only overrides if off-screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // If already in viewport, do nothing (already shown)
    if (r.top < window.innerHeight && r.bottom > 0) return;
    // Otherwise: hide, then reveal on intersection
    setShown(false);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setShown(true); obs.disconnect(); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    obs.observe(el);
    const t = setTimeout(() => setShown(true), 1500);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity .8s cubic-bezier(.22,.61,.36,1) ${delay}ms, transform .8s cubic-bezier(.22,.61,.36,1) ${delay}ms`,
    }}>{children}</div>
  );
}

// Check icon used across comparison tables
function Check({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{display:"inline",verticalAlign:"-2px"}}>
      <path d="M2 7.5L5.5 11L12 3.5" stroke={color || "currentColor"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Cross() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{display:"inline",verticalAlign:"-1px"}}>
      <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

Object.assign(window, { Eyebrow, SectionHeader, Badge, Btn, Counter, Reveal, Check, Cross });
