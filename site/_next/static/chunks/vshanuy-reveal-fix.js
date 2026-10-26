(() => {
  if (window.__vshanuyRevealFix) return;
  window.__vshanuyRevealFix = true;

  /**
   * MotionReveal keeps opacity:0 until intro + viewport enter fire
   * (viewport margin: 0 0 -100px 0 — late). On refresh mid-page those
   * never catch up; content stays invisible. Force-reveal past/near
   * viewport early so about (and peers) appear immediately / sooner.
   */
  const INTRO = "div.fixed.inset-0.z-5.bg-base-white";
  const SCROLL_SKIP_INTRO = 100;
  /** Reveal ~220px before the element fully enters — earlier than MotionReveal. */
  const EARLY_PX = 220;

  const dismissIntro = () => {
    const intro = document.querySelector(INTRO);
    if (!intro || intro.classList.contains("translate-x-full")) return;
    intro.classList.add("translate-x-full");
    document.documentElement.classList.add("vshanuy-skip-intro");
  };

  const revealEl = (el) => {
    if (!(el instanceof HTMLElement)) return;
    // Attribute + CSS !important beats Framer's non-important inline opacity.
    el.setAttribute("data-vshanuy-revealed", "");
    el.style.setProperty("opacity", "1", "important");
    el.style.setProperty("transform", "none", "important");
  };

  const isHiddenReveal = (el) => {
    if (!(el instanceof HTMLElement)) return false;
    const inline = el.getAttribute("style") || "";
    if (/opacity:\s*0/.test(inline)) return true;
    return el.style.opacity === "0";
  };

  const revealCandidates = () =>
    document.querySelectorAll(
      ".about-vshanuy__content span.block, section[data-block-type] span.block",
    );

  /** Everything already scrolled past or near the viewport. */
  const revealPastAndVisible = () => {
    const limit = window.innerHeight + EARLY_PX;
    revealCandidates().forEach((el) => {
      if (!isHiddenReveal(el)) return;
      const top = el.getBoundingClientRect().top;
      if (top < limit) revealEl(el);
    });
  };

  const run = () => {
    if (window.scrollY > SCROLL_SKIP_INTRO || window.location.hash) {
      dismissIntro();
    }
    revealPastAndVisible();
  };

  const start = () => {
    run();
    // Hydration / MotionReveal re-apply opacity:0 after first paint
    [0, 50, 150, 400, 800, 1600, 3000].forEach((ms) => {
      window.setTimeout(run, ms);
    });

    window.addEventListener("scroll", revealPastAndVisible, { passive: true });
    window.addEventListener("pageshow", run);
    window.addEventListener("load", run);

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            if (isHiddenReveal(el)) revealEl(el);
          });
        },
        {
          // Positive bottom margin → fire before MotionReveal's -100px
          rootMargin: `${EARLY_PX}px 0px ${EARLY_PX}px 0px`,
          threshold: 0,
        },
      );
      const observeHidden = () => {
        revealCandidates().forEach((el) => {
          if (isHiddenReveal(el)) io.observe(el);
        });
      };
      observeHidden();
      const mo = new MutationObserver(() => {
        observeHidden();
        run();
      });
      mo.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style"],
      });
      window.setTimeout(() => mo.disconnect(), 10000);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
