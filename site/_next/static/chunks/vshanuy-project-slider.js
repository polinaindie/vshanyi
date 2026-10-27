(() => {
  const reducedMotion = () =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

  const setup = (root) => {
    const viewport = root.querySelector(".vshanuy-project-slider__viewport");
    const prev = root.querySelector("[data-slider-prev]");
    const next = root.querySelector("[data-slider-next]");
    if (!viewport || !prev || !next) return;

    const step = () => {
      const slide = viewport.querySelector(".vshanuy-project-slider__slide");
      return slide ? slide.getBoundingClientRect().width : viewport.clientWidth;
    };

    const update = () => {
      const max = viewport.scrollWidth - viewport.clientWidth - 2;
      prev.disabled = viewport.scrollLeft <= 2;
      next.disabled = viewport.scrollLeft >= max;
    };

    const go = (dir) => {
      viewport.scrollBy({
        left: dir * step(),
        behavior: reducedMotion() ? "auto" : "smooth",
      });
    };

    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));
    viewport.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      }
    });

    let startX = 0;
    let startScroll = 0;
    let dragged = false;
    let pointerId = null;

    viewport.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = viewport.scrollLeft;
      dragged = false;
    });

    viewport.addEventListener("pointermove", (event) => {
      if (event.pointerId !== pointerId) return;
      const dx = event.clientX - startX;
      if (!dragged && Math.abs(dx) < 6) return;
      if (!dragged) {
        dragged = true;
        viewport.classList.add("is-dragging");
        viewport.setPointerCapture(pointerId);
      }
      viewport.scrollLeft = startScroll - dx;
    });

    const endDrag = (event) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      if (!dragged) return;
      viewport.classList.remove("is-dragging");
      const slide = step();
      viewport.scrollTo({
        left: Math.round(viewport.scrollLeft / slide) * slide,
        behavior: reducedMotion() ? "auto" : "smooth",
      });
    };

    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    /* A drag must not open the card it started on */
    viewport.addEventListener(
      "click",
      (event) => {
        if (!dragged) return;
        event.preventDefault();
        event.stopPropagation();
        dragged = false;
      },
      true,
    );

    update();
  };

  const start = () => document.querySelectorAll(".vshanuy-project-slider").forEach(setup);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
