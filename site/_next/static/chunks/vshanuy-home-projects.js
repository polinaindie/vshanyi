(() => {
  const SECTION = 'section[data-block-type="blockSelectedProjects"]';
  const reducedMotion = () =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

  const caret = (dir) =>
    `<svg viewBox="0 0 8 8" aria-hidden="true" focusable="false"><path d="${
      dir === "prev" ? "M5.5 1 2.5 4l3 3" : "m2.5 1 3 3-3 3"
    }" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`;

  const pad2 = (n) => String(n).padStart(2, "0");

  const slidesOf = (section) =>
    [...section.querySelectorAll('[class*="group/slide"]')].filter(
      (el) => el.className.includes("group/slide") && !el.className.includes("group/slider"),
    );

  const perPage = () =>
    window.matchMedia("(min-width: 1024px)").matches ? 4 : 2;

  const ensureControls = (slider) => {
    let controls = slider.querySelector(".vshanuy-gallery-controls");
    if (controls) return controls;

    controls = document.createElement("div");
    controls.className =
      "vshanuy-gallery-controls grid grid-cols-1 pt-24 lg:grid-cols-4 lg:pt-80";
    controls.innerHTML = `
      <div class="lg:col-span-2 lg:col-start-2">
        <div class="flex h-32 items-center bg-base-stone-20 p-4">
          <button type="button" data-projects-prev aria-label="Попередні проєкти"
            class="flex size-20 items-center justify-center border border-transparent bg-base-white-off hover:bg-base-stone-100 transition-colors duration-500 ease-out">${caret("prev")}</button>
          <div class="mx-auto">
            <div class="flex h-full items-center justify-start">
              <span class="text-caption-30" data-projects-time aria-hidden="true">9:00</span>
            </div>
          </div>
          <button type="button" data-projects-next aria-label="Наступні проєкти"
            class="flex size-20 items-center justify-center border border-transparent bg-base-white-off hover:bg-base-stone-100 transition-colors duration-500 ease-out">${caret("next")}</button>
        </div>
      </div>`;
    slider.appendChild(controls);
    return controls;
  };

  const setup = (section) => {
    if (section.dataset.vshanuyProjectsSlider === "1") return true;

    const slider = section.querySelector('[class*="group/slider"]');
    const track = section.querySelector(".will-change-transform");
    if (!slider || !track) return false;

    const slides = slidesOf(section);
    if (slides.length < 2) return false;

    const controls = ensureControls(slider);
    const prev = controls.querySelector("[data-projects-prev]");
    const next = controls.querySelector("[data-projects-next]");
    const time = controls.querySelector("[data-projects-time]");
    if (!prev || !next || !time) return false;

    let index = 0;
    let dragX = 0;
    let startX = 0;
    let dragging = false;
    let didDrag = false;
    let pointerId = null;

    const maxIndex = () => {
      const page = perPage();
      return Math.max(0, Math.ceil(slides.length / page) - 1);
    };

    const offsetFor = (i) => {
      const slide = slides[0];
      if (!slide) return 0;
      const page = perPage();
      const width = slide.getBoundingClientRect().width;
      const maxStart = Math.max(0, slides.length - page);
      const start = Math.min(i * page, maxStart);
      return -(start * width);
    };

    const apply = ({ animate = true } = {}) => {
      const max = maxIndex();
      if (index > max) index = max;
      if (index < 0) index = 0;

      const x = offsetFor(index) + dragX;
      track.style.transition =
        animate && !reducedMotion() && !dragging
          ? "transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)"
          : "none";
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      time.textContent = `9:${pad2(index)}`;

      const loopable = slides.length > perPage();
      controls.hidden = !loopable;
      prev.disabled = !loopable;
      next.disabled = !loopable;
    };

    const go = (dir) => {
      const max = maxIndex();
      if (max <= 0) return;
      index = (index + dir + (max + 1)) % (max + 1);
      dragX = 0;
      apply({ animate: true });
    };

    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));

    const viewport =
      track.closest(".-mx-8") ||
      track.closest('[class*="overflow-hidden"]') ||
      slider;

    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      }
    });
    if (!viewport.hasAttribute("tabindex")) {
      viewport.setAttribute("tabindex", "0");
      viewport.setAttribute("aria-label", "Проєкти, гортайте вбік");
    }

    const onPointerDown = (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.target.closest("button")) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      dragging = false;
      didDrag = false;
      dragX = 0;
      slider.style.cursor = "grabbing";
    };

    const onPointerMove = (event) => {
      if (event.pointerId !== pointerId) return;
      const dx = event.clientX - startX;
      if (!dragging && Math.abs(dx) < 8) return;
      if (!dragging) {
        dragging = true;
        didDrag = true;
        try {
          viewport.setPointerCapture(pointerId);
        } catch {
          /* ignore */
        }
      }
      dragX = dx;
      apply({ animate: false });
    };

    const onPointerUp = (event) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      slider.style.cursor = "grab";
      if (!dragging) return;

      const pageWidth = perPage() * (slides[0]?.getBoundingClientRect().width || 1);
      const delta = dragX;
      dragX = 0;
      dragging = false;

      if (Math.abs(delta) > pageWidth * 0.18) {
        go(delta < 0 ? 1 : -1);
      } else {
        apply({ animate: true });
      }
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("pointercancel", onPointerUp);

    viewport.addEventListener(
      "click",
      (event) => {
        if (!didDrag) return;
        event.preventDefault();
        event.stopPropagation();
        didDrag = false;
      },
      true,
    );

    window.addEventListener(
      "resize",
      () => {
        dragX = 0;
        apply({ animate: false });
      },
      { passive: true },
    );

    slider.style.cursor = "grab";
    section.dataset.vshanuyProjectsSlider = "1";
    apply({ animate: false });
    return true;
  };

  const mount = () => {
    const section = document.querySelector(SECTION);
    if (!section) return false;
    return setup(section);
  };

  const start = () => {
    mount();
    [300, 800, 1600, 3200].forEach((ms) => window.setTimeout(mount, ms));
    window.addEventListener("resize", () => {
      const section = document.querySelector(SECTION);
      if (!section) return;
      // Track rebuild from footer fixProjectsTrack clears our flag only if DOM replaced —
      // re-bind when controls missing.
      if (!section.querySelector(".vshanuy-gallery-controls")) {
        section.dataset.vshanuyProjectsSlider = "";
        mount();
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
