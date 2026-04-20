/**
 * leanaistartup.jp LP - Interactive JS (vanilla, ~120行)
 * React/JSX廃止後の最小限の動的機能
 */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  // Nav: scroll で data-scrolled 切替
  // ─────────────────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const updateNav = () => {
      nav.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
    };
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  // ─────────────────────────────────────────────
  // StickyBar: scroll で表示切替 + プログレスバー
  // ─────────────────────────────────────────────
  // 位置: position:fixed; bottom:0 の div を探す
  const stickyBar = Array.from(document.querySelectorAll('body > div, #root > div')).find((el) => {
    const s = el.style;
    return s.position === 'fixed' && (s.bottom === '0px' || s.bottom === '0');
  });
  if (stickyBar) {
    // progress bar（最初の子 div で height が細いもの）
    const progressBar = stickyBar.querySelector('div[style*="height: 3px"], div[style*="height:3px"], div[style*="height: 2px"]');
    const updateSticky = () => {
      const sc = window.scrollY;
      const docH = document.body.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (sc / docH) * 100 : 0;
      // Hero 高さ超えたら表示
      const shouldShow = sc > 600;
      stickyBar.style.transform = shouldShow ? 'translateY(0)' : 'translateY(100%)';
      stickyBar.style.transition = 'transform 0.3s ease';
      if (progressBar) {
        progressBar.style.width = pct + '%';
      }
    };
    // 初期は非表示
    stickyBar.style.transform = 'translateY(100%)';
    updateSticky();
    window.addEventListener('scroll', updateSticky, { passive: true });
  }

  // ─────────────────────────────────────────────
  // Curriculum: phase ヘッダクリックで開閉
  // ─────────────────────────────────────────────
  const curriculumSection = document.getElementById('curriculum');
  if (curriculumSection) {
    // phase wrapper: border-top: 1px solid ... を持つ div
    const phaseButtons = curriculumSection.querySelectorAll('button');
    phaseButtons.forEach((btn) => {
      // 次の兄弟要素が展開領域
      btn.addEventListener('click', () => {
        const wrapper = btn.parentElement;
        const expandEl = btn.nextElementSibling;
        if (!expandEl) return;
        const currentRows = expandEl.style.gridTemplateRows;
        const isOpen = currentRows === '1fr';
        // 他の全てを閉じる
        phaseButtons.forEach((b) => {
          const e = b.nextElementSibling;
          if (e) e.style.gridTemplateRows = '0fr';
        });
        // トグル
        expandEl.style.gridTemplateRows = isOpen ? '0fr' : '1fr';
      });
    });
  }

  // ─────────────────────────────────────────────
  // FAQ: カテゴリフィルタ + 質問クリックで開閉
  // ─────────────────────────────────────────────
  const faqSection = document.getElementById('faq');
  if (faqSection) {
    const chips = faqSection.querySelectorAll('.chip');
    const items = faqSection.querySelectorAll('.acc-item');

    // 各 item に data-cat を追加（.acc-body 内の最初の mono text-xs の内容）
    items.forEach((item) => {
      const catEl = item.querySelector('.acc-body .mono.text-xs');
      if (catEl) {
        item.dataset.cat = catEl.textContent.trim();
      }
    });

    // カテゴリフィルタ
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const cat = chip.textContent.replace(/[·\d\s]+$/, '').trim(); // "すべて · 10" → "すべて"
        chips.forEach((c) => {
          const cText = c.textContent.replace(/[·\d\s]+$/, '').trim();
          c.dataset.active = (cText === cat) ? 'true' : 'false';
        });
        items.forEach((item) => {
          const itemCat = item.dataset.cat || '';
          item.style.display = (cat === 'すべて' || itemCat === cat) ? '' : 'none';
        });
      });
    });

    // 質問クリックで開閉
    items.forEach((item) => {
      const head = item.querySelector('.acc-head');
      if (head) {
        head.style.cursor = 'pointer';
        head.addEventListener('click', () => {
          const isOpen = item.dataset.open === 'true';
          items.forEach((i) => { i.dataset.open = 'false'; });
          item.dataset.open = isOpen ? 'false' : 'true';
        });
      }
    });
  }

  // ─────────────────────────────────────────────
  // Journey: 線アニメーション
  // ─────────────────────────────────────────────
  const journeyRail = document.querySelector('.journey-rail, [class*="journey"]');
  if (journeyRail) {
    // 線要素は scaleX(1) transform を持つ div
    const line = journeyRail.querySelector('div[style*="scaleX"]');
    if (line) {
      // 初期 scaleX(0) に
      line.style.transform = 'scaleX(0)';
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setTimeout(() => {
                line.style.transform = 'scaleX(1)';
                line.style.transition = 'transform 2200ms cubic-bezier(.22,.61,.36,1)';
              }, 300);
              obs.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      obs.observe(journeyRail);
    }
  }

  // ─────────────────────────────────────────────
  // スクロール復元を無効化
  // ─────────────────────────────────────────────
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
})();
