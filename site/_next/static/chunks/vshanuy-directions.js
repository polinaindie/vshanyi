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

  const sectionMarkup = ({
    title = "Для кого ми говоримо<br>про памʼять",
    titleId = "vshanuy-home-directions-title",
  } = {}) => `
      <div class="vshanuy-directions-carousel__shell">
        <div class="vshanuy-directions-carousel__pin">
          <header class="vshanuy-directions-carousel__header">
            <p class="vshanuy-directions-carousel__label text-caption-30 uppercase">Наші напрями</p>
            <h2 id="${titleId}" class="vshanuy-directions-carousel__title font-serif">
              ${title}
            </h2>
          </header>
          <div
            class="vshanuy-directions-carousel__viewport"
            tabindex="0"
            aria-label="Наші напрями, гортайте стрілками"
          >
            <div class="vshanuy-directions-carousel__scroller">
              <ol class="vshanuy-directions-carousel__track">
                ${renderItems()}
              </ol>
            </div>
            <div class="vshanuy-directions-carousel__nav">
              <button type="button" class="vshanuy-directions-carousel__arrow" data-directions-prev aria-label="Попередній напрям"><svg viewBox="0 0 8 8" aria-hidden="true" focusable="false"><path d="M5.5 1 2.5 4l3 3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></button>
              <button type="button" class="vshanuy-directions-carousel__arrow" data-directions-next aria-label="Наступний напрям"><svg viewBox="0 0 8 8" aria-hidden="true" focusable="false"><path d="m2.5 1 3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></button>
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
   * Horizontal carousel without scroll-jacking: page scrolls on, cards move
   * by ‹ › buttons, arrow keys or native swipe.
   */
  const setupCarousel = (section) => {
    if (section.dataset.carouselReady === "true") return;
    section.dataset.carouselReady = "true";

    const runway = section.querySelector(".vshanuy-directions-carousel__runway");
    const viewport = section.querySelector(".vshanuy-directions-carousel__viewport");
    const scroller =
      section.querySelector(".vshanuy-directions-carousel__scroller") || viewport;
    const prev = section.querySelector("[data-directions-prev]");
    const next = section.querySelector("[data-directions-next]");
    if (!viewport || !prev || !next) return;

    section.classList.add("vshanuy-directions-carousel--static");
    if (runway) runway.style.height = "0px";

    let activeIndex = 0;
    let animFrame = 0;
    let scrollFrame = 0;

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

    const slides = () => [
      ...scroller.querySelectorAll(".vshanuy-directions-carousel__slide"),
    ];
    const lastIndex = () => Math.max(0, slides().length - 1);
    const maxScroll = () =>
      Math.max(0, scroller.scrollWidth - scroller.clientWidth);

    const centeredLeft = (index) => {
      const slide = slides()[index];
      if (!slide) return 0;
      const slideW = slide.getBoundingClientRect().width;
      return clamp(
        slide.offsetLeft - (scroller.clientWidth - slideW) / 2,
        0,
        maxScroll(),
      );
    };

    const nearestIndex = () => {
      const center = scroller.scrollLeft + scroller.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      slides().forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      return best;
    };

    const renderState = () => {
      prev.disabled = activeIndex <= 0;
      next.disabled = activeIndex >= lastIndex();
    };

    const goTo = (index, { immediate = false } = {}) => {
      activeIndex = clamp(index, 0, lastIndex());
      renderState();
      const target = centeredLeft(activeIndex);
      cancelAnimationFrame(animFrame);
      if (immediate || prefersReducedMotion()) {
        animFrame = 0;
        scroller.scrollLeft = target;
        return;
      }
      const from = scroller.scrollLeft;
      const start = performance.now();
      scroller.style.scrollSnapType = "none";
      const tick = (now) => {
        const t = clamp((now - start) / SNAP_MS, 0, 1);
        scroller.scrollLeft = from + (target - from) * easeBrand(t);
        if (t < 1) {
          animFrame = requestAnimationFrame(tick);
        } else {
          animFrame = 0;
          scroller.scrollLeft = target;
          scroller.style.scrollSnapType = "";
        }
      };
      animFrame = requestAnimationFrame(tick);
    };

    prev.addEventListener("click", () => goTo(activeIndex - 1));
    next.addEventListener("click", () => goTo(activeIndex + 1));

    scroller.addEventListener(
      "scroll",
      () => {
        if (animFrame) return;
        cancelAnimationFrame(scrollFrame);
        scrollFrame = requestAnimationFrame(() => {
          const index = nearestIndex();
          if (index === activeIndex) return;
          activeIndex = index;
          renderState();
        });
      },
      { passive: true },
    );

    viewport.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      goTo(activeIndex + (event.key === "ArrowLeft" ? -1 : 1));
    });

    const syncLayout = () => goTo(activeIndex, { immediate: true });
    window.addEventListener("resize", syncLayout, { passive: true });
    if (document.fonts?.ready) document.fonts.ready.then(syncLayout);
    viewport.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", syncLayout, { once: true });
    });

    syncLayout();
  };

  const sectionNeedsMarkup = (section) =>
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
    !section.querySelector(".vshanuy-directions-carousel__nav") ||
    section.querySelector(".vshanuy-directions-carousel__controls") ||
    section.querySelector(".vshanuy-directions-carousel__bar") ||
    section.querySelector(".vshanuy-directions-carousel__index") ||
    !section.querySelector(
      ".vshanuy-directions-carousel__card > .vshanuy-directions-carousel__media:first-child",
    ) ||
    section.querySelector(".vshanuy-directions-carousel__more");

  const hydrateSection = (section, markupOptions) => {
    if (sectionNeedsMarkup(section)) {
      section.dataset.revealReady = "";
      section.dataset.carouselReady = "";
      section.classList.remove(
        "is-visible",
        "vshanuy-home-directions--static",
        "vshanuy-directions-carousel--static",
        "vshanuy-directions-carousel--pinned",
        "vshanuy-directions-carousel--complete",
      );
      section.classList.add("vshanuy-directions-carousel");
      const titleId = markupOptions?.titleId || "vshanuy-home-directions-title";
      section.setAttribute("aria-labelledby", titleId);
      section.innerHTML = sectionMarkup(markupOptions);
    }
    setupReveal(section);
    setupCarousel(section);
  };

  /** About page (`pro-nas`): replace #napryamy slot with the homepage carousel. */
  const mountAbout = () => {
    const slot = document.querySelector("body.vshanuy-about-page #napryamy");
    if (!slot || !slot.isConnected) return false;
    hydrateSection(slot, {
      title: "Серед наших основних напрямів роботи",
      titleId: "about-directions-title",
    });
    return true;
  };

  const mount = () => {
    const anchor = findProjectsAnchor();
    if (!anchor || !anchor.isConnected) return false;

    let section = document.querySelector(".vshanuy-home-directions");

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
      if (sectionNeedsMarkup(section)) {
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
    mountAbout();
    const observer = new MutationObserver(() => {
      mount();
      mountAbout();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
    [300, 800, 1600, 3000].forEach((ms) => {
      window.setTimeout(() => {
        mount();
        mountAbout();
      }, ms);
    });
  };

  const schedule = () => window.setTimeout(start, 1000);

  if (document.readyState === "complete") {
    schedule();
  } else {
    window.addEventListener("load", schedule, { once: true });
  }
})();
