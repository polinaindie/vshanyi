(() => {
  const directions = [
    {
      index: "01",
      title: "Громади",
      href: "napryamky/gromada.html",
      image: "_next/static/media/vshanuy-napryam-gromady-1600.webp",
      description:
        "Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики памʼяті. Поширюємо ініціативи в громадах, розробляємо ритуали памʼяті та прощання.",
    },
    {
      index: "02",
      title: "Бізнес",
      href: "napryamky/spivpratsya-z-biznesom.html",
      image: "_next/static/media/vshanuy-napryam-biznes-1600.webp",
      description:
        "Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації. Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й памʼять.",
    },
    {
      index: "03",
      title: "Держава",
      href: "napryamky/derzhava.html",
      image: "_next/static/media/vshanuy-napryam-derzhava-1600.webp",
      description:
        "Передаємо державним інституціям напрацьовані практики, рекомендації та інструкції й працюємо над їхнім системним впровадженням.",
    },
    {
      index: "04",
      title: "Суспільство",
      href: "napryamky/suspilstvo.html",
      image: "_next/static/media/vshanuy-napryam-suspilstvo-1600.webp",
      description:
        "Говоримо про складні й важливі теми, повʼязані з памʼяттю про війну: як прощатися, як говорити про загиблих, як уникати знеособлення втрат.",
    },
    {
      index: "05",
      title: "Освіта",
      href: "napryamky/osvita.html",
      image: "_next/static/media/vshanuy-napryam-osvita-1600.webp",
      description:
        "Досліджуємо, як діти, підлітки та вчителі сприймають тему памʼяті й якою хочуть бачити розмову про неї в школі. Розробляємо практичні матеріали для освітян, проводимо лекції та зустрічі, створюємо документи-опори для роботи з темою памʼяті.",
    },
    {
      index: "06",
      title: "Військо",
      href: "napryamky/viysko.html",
      image: "_next/static/media/vshanuy-napryam-viysko-1600.webp",
      description:
        "Досліджуємо військові ритуали й традиції та шукаємо способи зберігати їхню тяглість у сучасному українському війську. Працюємо над створенням церемоній прощання з військовослужбовцями, які можуть бути адаптовані та впроваджені в громадах по всій Україні.",
    },
    {
      index: "07",
      title: "Мистецтво",
      href: "napryamky/mystetstvo.html",
      image: "_next/static/media/vshanuy-napryam-mystetstvo-1600.webp",
      description:
        "Використовуємо мистецтво як спосіб говорити про памʼять, людей і наш досвід.",
    },
  ];

  const prefersReducedMotion = () =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const renderItems = () =>
    directions
      .map(
        ({ index, title, description, href, image }) => `
          <li class="vshanuy-directions-carousel__slide" id="direction-${index}">
            <a class="vshanuy-directions-carousel__card" href="${href}">
              <figure class="vshanuy-directions-carousel__media">
                <img
                  src="${image}"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="960"
                  height="640"
                  draggable="false"
                >
              </figure>
              <div class="vshanuy-directions-carousel__copy">
                <h3 class="vshanuy-directions-carousel__name">${title}</h3>
                <p class="vshanuy-directions-carousel__text">${description}</p>
              </div>
            </a>
          </li>
        `,
      )
      .join("");

  const sectionMarkup = () => `
      <div class="vshanuy-directions-carousel__shell">
        <div class="vshanuy-directions-carousel__pin">
          <header class="vshanuy-directions-carousel__header">
            <p class="vshanuy-directions-carousel__label text-caption-30 uppercase">НАШІ НАПРЯМИ</p>
            <h2 id="vshanuy-home-directions-title" class="vshanuy-directions-carousel__title font-serif">
              Для кого ми говоримо про памʼять
            </h2>
          </header>
          <div
            class="vshanuy-directions-carousel__viewport"
            tabindex="0"
            aria-label="Наші напрями, гортайте скролом"
          >
            <div class="vshanuy-directions-carousel__scroller">
              <ol class="vshanuy-directions-carousel__track">
                ${renderItems()}
              </ol>
            </div>
          </div>
        </div>
        <div class="vshanuy-directions-carousel__runway" aria-hidden="true"></div>
      </div>
    `;

  const findProjectsAnchor = () => {
    const projects = document.querySelector(
      'section[data-block-type="blockSelectedProjects"]',
    );
    if (!projects) return null;

    let el = projects.previousElementSibling;
    while (
      el &&
      (el.classList.contains("vshanuy-home-directions") ||
        el.classList.contains("vshanuy-directions-carousel"))
    ) {
      el = el.previousElementSibling;
    }

    if (
      el?.getAttribute("data-block-type") === "blockHeadline" &&
      /проєкт|Що ми робимо/i.test(el.textContent || "")
    ) {
      return el;
    }

    return projects;
  };

  const revealProjectsHeadline = (anchor) => {
    const headline =
      anchor?.getAttribute("data-block-type") === "blockHeadline"
        ? anchor
        : null;

    const section =
      headline && /проєкт|Що ми робимо/i.test(headline.textContent || "")
        ? headline
        : [...document.querySelectorAll('section[data-block-type="blockHeadline"]')].find(
            (node) => /проєкт|Що ми робимо/i.test(node.textContent || ""),
          );

    if (!section) return;

    section.querySelectorAll("span[style]").forEach((span) => {
      const style = span.getAttribute("style") || "";
      if (!/opacity\s*:\s*0/i.test(style) && !/translateY/i.test(style)) return;
      span.style.opacity = "1";
      span.style.transform = "none";
    });
  };

  const setupReveal = (section) => {
    if (section.dataset.revealReady === "true") return;

    section.dataset.revealReady = "true";
    section.classList.add("vshanuy-home-directions--animated");

    if (!("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        section.classList.add("is-visible");
        observer.disconnect();
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);
  };

  /**
   * Sticky pin at the bottom of the viewport: vertical scroll scrubs
   * horizontal cards until the last one, then the next block continues.
   */
  const setupCarousel = (section) => {
    if (section.dataset.carouselReady === "true") return;
    section.dataset.carouselReady = "true";

    const pin = section.querySelector(".vshanuy-directions-carousel__pin");
    const runway = section.querySelector(".vshanuy-directions-carousel__runway");
    const viewport = section.querySelector(".vshanuy-directions-carousel__viewport");
    /* Scrub the inner scroller — viewport keeps fixed V guides above cards. */
    const scroller =
      section.querySelector(".vshanuy-directions-carousel__scroller") || viewport;
    if (!pin || !runway || !viewport) return;

    let frame = 0;
    let runwayH = 0;
    let activeIndex = -1;
    let animFrame = 0;
    let animFrom = 0;
    let animTo = 0;
    let animStart = 0;

    /* Brand transform easing: cubic-bezier(0.22, 1, 0.36, 1). */
    const SNAP_MS = 800;
    const easeBrand = (() => {
      const x1 = 0.22;
      const y1 = 1;
      const x2 = 0.36;
      const y2 = 1;
      const sampleX = (t) => {
        const a = 1 - t;
        return 3 * a * a * t * x1 + 3 * a * t * t * x2 + t * t * t;
      };
      const sampleY = (t) => {
        const a = 1 - t;
        return 3 * a * a * t * y1 + 3 * a * t * t * y2 + t * t * t;
      };
      const sampleDX = (t) => {
        const a = 1 - t;
        return 3 * a * a * x1 + 6 * a * t * (x2 - x1) + 3 * t * t * (1 - x2);
      };
      return (x) => {
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        let t = x;
        for (let i = 0; i < 8; i += 1) {
          const d = sampleDX(t);
          if (Math.abs(d) < 1e-6) break;
          t = clamp(t - (sampleX(t) - x) / d, 0, 1);
        }
        return sampleY(t);
      };
    })();

    const maxScroll = () =>
      Math.max(0, scroller.scrollWidth - scroller.clientWidth);

    /* One step = one direction card. */
    const stepCount = () => {
      const n = scroller.querySelectorAll(
        ".vshanuy-directions-carousel__slide",
      ).length;
      return Math.max(1, n - 1);
    };

    const centeredLeft = (index) => {
      const slides = scroller.querySelectorAll(
        ".vshanuy-directions-carousel__slide",
      );
      const slide = slides[index];
      if (!slide) return 0;
      const max = maxScroll();
      const slideLeft = slide.offsetLeft;
      const slideW = slide.getBoundingClientRect().width;
      const viewW = scroller.clientWidth;
      /* Center the active card in the scroller (cols 2–3 on desktop). */
      return clamp(slideLeft - (viewW - slideW) / 2, 0, max);
    };

    const scrollToCenteredSlide = (index, { immediate = false } = {}) => {
      const target = centeredLeft(index);
      const jump =
        immediate || prefersReducedMotion() || activeIndex < 0;

      if (jump) {
        cancelAnimationFrame(animFrame);
        animFrame = 0;
        activeIndex = index;
        scroller.scrollLeft = target;
        return;
      }

      /* Same card — keep current / in-flight animation. */
      if (index === activeIndex) return;

      activeIndex = index;
      animFrom = scroller.scrollLeft;
      animTo = target;
      animStart = performance.now();
      cancelAnimationFrame(animFrame);

      const tick = (now) => {
        const t = clamp((now - animStart) / SNAP_MS, 0, 1);
        scroller.scrollLeft = animFrom + (animTo - animFrom) * easeBrand(t);
        if (t < 1) {
          animFrame = requestAnimationFrame(tick);
        } else {
          animFrame = 0;
          scroller.scrollLeft = animTo;
        }
      };
      animFrame = requestAnimationFrame(tick);
    };

    const applyProgress = (progress, { immediate = false } = {}) => {
      /* Discrete snap: one runway step → one card, eased into center. */
      const slides = scroller.querySelectorAll(
        ".vshanuy-directions-carousel__slide",
      ).length;
      const steps = Math.max(1, slides - 1);
      const index = clamp(Math.round(progress * steps), 0, steps);
      scrollToCenteredSlide(index, { immediate });
    };

    const syncProgress = ({ immediate = false } = {}) => {
      if (prefersReducedMotion() || runwayH <= 0) {
        applyProgress(0, { immediate: true });
        return;
      }

      const pinBottom = pin.getBoundingClientRect().bottom;
      const runwayTop = runway.getBoundingClientRect().top;
      const progress = clamp((pinBottom - runwayTop) / runwayH, 0, 1);
      applyProgress(progress, { immediate });

      const headerH =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 33;
      const stuck = pin.getBoundingClientRect().top <= headerH + 1;
      section.classList.toggle(
        "vshanuy-directions-carousel--pinned",
        stuck && progress < 1,
      );
      section.classList.toggle(
        "vshanuy-directions-carousel--complete",
        progress >= 1,
      );
    };

    const syncLayout = () => {
      if (prefersReducedMotion()) {
        section.classList.add("vshanuy-directions-carousel--static");
        runway.style.height = "0px";
        scroller.style.overflowX = "auto";
        applyProgress(0);
        return;
      }

      section.classList.remove("vshanuy-directions-carousel--static");
      scroller.style.overflowX = "hidden";

      const steps = stepCount();
      const stepPx = Math.round(
        Math.min(Math.max(window.innerHeight * 0.55, 280), 480),
      );
      runwayH = steps * stepPx;
      runway.style.height = `${runwayH}px`;
      /* Layout changes jump — no tween from a stale width. */
      syncProgress({ immediate: true });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncProgress);
    };

    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncLayout);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    if (document.fonts?.ready) document.fonts.ready.then(syncLayout);

    /* Images load can change track width */
    viewport.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", syncLayout, { once: true });
    });

    viewport.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const steps = stepCount();
      if (runwayH <= 0 || steps <= 0) return;
      const dir = event.key === "ArrowLeft" ? -1 : 1;
      const pinBottom = pin.getBoundingClientRect().bottom;
      const runwayTop = runway.getBoundingClientRect().top;
      const currentProgress = clamp((pinBottom - runwayTop) / runwayH, 0, 1);
      const currentStep = clamp(Math.round(currentProgress * steps), 0, steps);
      const nextStep = clamp(currentStep + dir, 0, steps);
      const targetProgress = nextStep / steps;
      const delta = (targetProgress - currentProgress) * runwayH;
      const top = window.scrollY + delta;
      if (window.vshanuyLenis?.scrollTo) {
        window.vshanuyLenis.scrollTo(top, { immediate: false });
      } else {
        window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      }
    });

    syncLayout();
  };

  const mount = () => {
    const anchor = findProjectsAnchor();
    if (!anchor || !anchor.isConnected) return false;

    let section = document.querySelector(".vshanuy-home-directions");
    const needsMarkup =
      !section ||
      !section.querySelector(".vshanuy-directions-carousel__shell") ||
      !section.querySelector(".vshanuy-directions-carousel__pin") ||
      !section.querySelector(".vshanuy-directions-carousel__runway") ||
      !section.querySelector(
        ".vshanuy-directions-carousel__pin > .vshanuy-directions-carousel__header",
      ) ||
      section.querySelector(
        ".vshanuy-directions-carousel__shell > .vshanuy-directions-carousel__header",
      ) ||
      !section.querySelector(".vshanuy-directions-carousel__viewport") ||
      !section.querySelector(".vshanuy-directions-carousel__scroller") ||
      !section.querySelector(".vshanuy-directions-carousel__track") ||
      !section.querySelector(".vshanuy-directions-carousel__card") ||
      section.querySelector(".vshanuy-directions-carousel__controls") ||
      section.querySelector(".vshanuy-directions-carousel__bar") ||
      section.querySelector(".vshanuy-directions-carousel__index") ||
      !section.querySelector(
        ".vshanuy-directions-carousel__card > .vshanuy-directions-carousel__media:first-child",
      ) ||
      section.querySelector(".vshanuy-directions-carousel__more");

    if (!section) {
      section = document.createElement("section");
      section.className = "vshanuy-home-directions vshanuy-directions-carousel";
      section.id = "directions";
      section.setAttribute("aria-labelledby", "vshanuy-home-directions-title");
      section.innerHTML = sectionMarkup();
      anchor.insertAdjacentElement("beforebegin", section);
    } else {
      if (section.nextElementSibling !== anchor) {
        anchor.insertAdjacentElement("beforebegin", section);
      }
      section.classList.add("vshanuy-directions-carousel");
      if (needsMarkup) {
        section.dataset.revealReady = "";
        section.dataset.carouselReady = "";
        section.classList.remove(
          "is-visible",
          "vshanuy-home-directions--static",
          "vshanuy-directions-carousel--static",
          "vshanuy-directions-carousel--pinned",
          "vshanuy-directions-carousel--complete",
        );
        section.innerHTML = sectionMarkup();
      }
    }

    setupReveal(section);
    setupCarousel(section);
    revealProjectsHeadline(anchor);
    return true;
  };

  const start = () => {
    mount();
    const observer = new MutationObserver(mount);
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
    [300, 800, 1600, 3000].forEach((ms) => {
      window.setTimeout(mount, ms);
    });
  };

  const schedule = () => window.setTimeout(start, 1000);

  if (document.readyState === "complete") {
    schedule();
  } else {
    window.addEventListener("load", schedule, { once: true });
  }
})();
