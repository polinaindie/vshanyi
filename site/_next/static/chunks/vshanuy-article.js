(() => {
  const start = () => {
    const links = [...document.querySelectorAll(".vshanuy-article__toc a[href^='#']")];
    const sections = links
      .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
      .filter(Boolean);
    if (!sections.length) return;

    const setCurrent = (id) => {
      links.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const update = () => {
      const offset = window.innerHeight * 0.35;
      let current = null;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= offset) current = section.id;
      });
      setCurrent(current);
    };

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const lenis = window.vshanuyLenis;
        const target = document.getElementById(link.getAttribute("href").slice(1));
        if (!lenis || !target) return;
        event.preventDefault();
        const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        lenis.scrollTo(target, { offset: -offset });
        history.replaceState(null, "", `#${target.id}`);
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });

    let frame = 0;
    window.addEventListener(
      "scroll",
      () => {
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          update();
        });
      },
      { passive: true },
    );
    window.addEventListener("resize", update);
    update();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
