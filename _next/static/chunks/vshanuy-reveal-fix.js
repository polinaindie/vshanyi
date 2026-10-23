(() => {
  /**
   * MotionReveal keeps opacity:0 until intro + viewport enter fire.
   * On refresh mid-page (scroll restoration) those never catch up —
   * content above/in the viewport stays invisible. Force-reveal it.
   */
  const INTRO = "div.fixed.inset-0.z-5.bg-base-white";
  const SCROLL_SKIP_INTRO = 100;

  const dismissIntro = () => {
    const intro = document.querySelector(INTRO);
    if (!intro || intro.classList.contains("translate-x-full")) return;
    intro.classList.add("translate-x-full");
    document.documentElement.classList.add("vshanuy-skip-intro");
  };

  const revealEl = (el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.setProperty("opacity", "1", "important");
    el.style.setProperty("transform", "none", "important");
  };

  const isHiddenReveal = (el) => {
    if (!(el instanceof HTMLElement)) return false;
    const inline = el.getAttribute("style") || "";
    if (/opacity:\s*0/.test(inline)) return true;
    // Framer may have moved opacity onto the style object
    return el.style.opacity === "0";
  };

  /** Everything already scrolled past or currently on screen. */
  const revealPastAndVisible = () => {
    const limit = window.innerHeight - 24;
    document.querySelectorAll("span.block").forEach((el) => {
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
    [50, 200, 600, 1200, 2500, 4000].forEach((ms) => {
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
        { rootMargin: "0px 0px -24px 0px", threshold: 0 },
      );
      const observeHidden = () => {
        document.querySelectorAll("span.block").forEach((el) => {
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
      window.setTimeout(() => mo.disconnect(), 8000);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
