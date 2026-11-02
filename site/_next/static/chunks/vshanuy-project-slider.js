(() => {
  const reducedMotion = () =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

  const pad2 = (n) => String(n).padStart(2, "0");

  const perPage = () =>
    window.matchMedia("(min-width: 1024px)").matches ? 4 : 2;

  const setup = (root) => {
    if (root.dataset.vshanuySliderReady === "1") return;

    const viewport = root.querySelector(".vshanuy-project-slider__viewport");
    const prev = root.querySelector("[data-slider-prev]");
    const next = root.querySelector("[data-slider-next]");
    const time = root.querySelector(".vshanuy-project-slider__time");
    const controls = root.querySelector(".vshanuy-project-slider__controls");
    if (!viewport || !prev || !next || !time) return;

    const slides = [...viewport.querySelectorAll(".vshanuy-project-slider__slide")];
    if (slides.length < 1) return;

    let pageIndex = 0;

    const slideWidth = () => {
      const slide = slides[0];
      return slide ? slide.getBoundingClientRect().width : viewport.clientWidth;
    };

    const maxPage = () =>
      Math.max(0, Math.ceil(slides.length / perPage()) - 1);

    const offsetFor = (page) => {
      const width = slideWidth();
      if (width <= 0) return 0;
      const pageSize = perPage();
      const maxStart = Math.max(0, slides.length - pageSize);
      const start = Math.min(page * pageSize, maxStart);
      return start * width;
    };

    const apply = ({ animate = true } = {}) => {
      const max = maxPage();
      if (pageIndex > max) pageIndex = max;
      if (pageIndex < 0) pageIndex = 0;

      viewport.scrollTo({
        left: offsetFor(pageIndex),
        behavior:
          animate && !reducedMotion() ? "smooth" : "auto",
      });
      time.textContent = `9:${pad2(pageIndex)}`;

      const loopable = slides.length > perPage();
      if (controls) controls.hidden = !loopable;
      prev.disabled = !loopable;
      next.disabled = !loopable;
    };

    const go = (dir) => {
      const max = maxPage();
      if (max <= 0) return;
      pageIndex = (pageIndex + dir + (max + 1)) % (max + 1);
      apply({ animate: true });
    };

    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));

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
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.target.closest("button")) return;
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
        try {
          viewport.setPointerCapture(pointerId);
        } catch {
          /* ignore */
        }
      }
      viewport.scrollLeft = startScroll - dx;
    });

    const endDrag = (event) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      if (!dragged) return;
      viewport.classList.remove("is-dragging");

      const width = slideWidth();
      const pageSize = perPage();
      const pageWidth = pageSize * width;
      const delta = viewport.scrollLeft - startScroll;

      if (Math.abs(delta) > pageWidth * 0.18) {
        go(delta < 0 ? 1 : -1);
      } else {
        const raw = Math.round(viewport.scrollLeft / width / pageSize);
        pageIndex = Math.min(maxPage(), Math.max(0, raw));
        apply({ animate: true });
      }
      dragged = false;
    };

    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    viewport.addEventListener(
      "click",
      (event) => {
        if (!dragged) return;
        event.preventDefault();
        event.stopPropagation();
      },
      true,
    );

    window.addEventListener(
      "resize",
      () => {
        apply({ animate: false });
      },
      { passive: true },
    );

    root.dataset.vshanuySliderReady = "1";
    apply({ animate: false });
  };

  const start = () =>
    document.querySelectorAll(".vshanuy-project-slider").forEach(setup);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
