(() => {
  const directions = [
    {
      index: "01",
      title: "Робота з громадами",
      href: "napryamky/gromada.html",
      image: "_next/static/media/vshanuy-spivpratsya.jpg",
      description:
        "Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики памʼяті. Поширюємо ініціативи в громадах, розробляємо ритуали памʼяті та прощання.",
    },
    {
      index: "02",
      title: "Співпраця з бізнесами",
      href: "napryamky/spivpratsya-z-biznesom.html",
      image: "_next/static/media/vshanuy-business-intro.jpg",
      description:
        "Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації. Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й памʼять.",
    },
    {
      index: "03",
      title: "Держава",
      href: "napryamky/derzhava.html",
      image: "_next/static/media/vshanuy-ceremonial-dorozhnya-karta.jpg",
      description:
        "Передаємо державним інституціям напрацьовані практики, рекомендації та інструкції й працюємо над їхнім системним впровадженням.",
    },
    {
      index: "04",
      title: "Суспільство",
      href: "napryamky/suspilstvo.html",
      image: "_next/static/media/vshanuy-memory-chair.jpg",
      description:
        "Говоримо про складні й важливі теми, повʼязані з памʼяттю про війну: як прощатися, як говорити про загиблих, як уникати знеособлення втрат.",
    },
    {
      index: "05",
      title: "Освіта",
      href: "napryamky/osvita.html",
      image: "_next/static/media/vshanuy-osvitni-programy.jpg",
      description:
        "Досліджуємо, як діти, підлітки та вчителі сприймають тему памʼяті й якою хочуть бачити розмову про неї в школі. Розробляємо практичні матеріали для освітян, проводимо лекції та зустрічі, створюємо документи-опори для роботи з темою памʼяті.",
    },
    {
      index: "06",
      title: "Військо",
      href: "napryamky/viysko.html",
      image: "_next/static/media/vshanuy-tryzna.jpg",
      description:
        "Досліджуємо військові ритуали й традиції та шукаємо способи зберігати їхню тяглість у сучасному українському війську. Працюємо над створенням церемоній прощання з військовослужбовцями, які можуть бути адаптовані та впроваджені в громадах по всій Україні.",
    },
    {
      index: "07",
      title: "Памʼять в мистецтві",
      href: "napryamky/mystetstvo.html",
      image: "_next/static/media/vshanuy-chekafest.jpg",
      description:
        "Використовуємо мистецтво як спосіб говорити про памʼять, людей і наш досвід.",
    },
  ];

  const prefersReducedMotion = () =>
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

  const renderItems = () =>
    directions
      .map(
        ({ index, title, description, href, image }, i) => `
          <li
            class="vshanuy-home-directions__item"
            id="direction-${index}"
            style="--stack-i: ${i}"
          >
            <a class="vshanuy-home-directions__card" href="${href}">
              <div class="vshanuy-home-directions__card-guides" aria-hidden="true">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="vshanuy-home-directions__copy">
                <h3 class="vshanuy-home-directions__title">${title}</h3>
                <div class="vshanuy-home-directions__body">
                  <p class="vshanuy-home-directions__text">${description}</p>
                </div>
              </div>
              <span class="vshanuy-home-directions__media" aria-hidden="true">
                <img
                  src="${image}"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width="960"
                  height="480"
                >
              </span>
            </a>
          </li>
        `,
      )
      .join("");

  const sectionMarkup = () => `
      <div class="vshanuy-home-directions__guides" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="vshanuy-home-directions__inner">
        <div class="vshanuy-home-directions__track">
          <div class="vshanuy-home-directions__pin">
            <header class="vshanuy-home-directions__header">
              <div class="vshanuy-home-directions__header-guides" aria-hidden="true">
                <span></span><span></span><span></span><span></span>
              </div>
              <p class="vshanuy-home-directions__label text-caption-30 uppercase">НАШІ НАПРЯМКИ</p>
              <h2 id="vshanuy-home-directions-title" class="font-serif">
                Для кого ми говоримо про памʼять
              </h2>
            </header>
            <div class="vshanuy-home-directions__stage">
              <ol class="vshanuy-home-directions__list">
                ${renderItems()}
              </ol>
            </div>
          </div>
          <div class="vshanuy-home-directions__runway" aria-hidden="true"></div>
        </div>
      </div>
    `;

  const findProjectsAnchor = () => {
    const projects = document.querySelector(
      'section[data-block-type="blockSelectedProjects"]',
    );
    if (!projects) return null;

    let el = projects.previousElementSibling;
    while (el && el.classList.contains("vshanuy-home-directions")) {
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
   * Discrete stack depth from scroll, but cards ease via CSS transition
   * (no scroll-scrubbed frac — that felt sticky; no instant jump — that blinked).
   */
  const applyStackProgress = (items, progress) => {
    const last = Math.max(items.length - 1, 0);
    const stacked = Math.min(last, Math.floor(progress * last + 1e-6));

    items.forEach((item, i) => {
      const link = item.querySelector("a.vshanuy-home-directions__card");
      const on = i <= stacked;
      const upcoming = i === stacked + 1;
      const interactive = i === stacked;

      item.style.transform = `translate3d(0, ${on ? 0 : 100}%, 0)`;
      /* Keep current + next visible so the ease-in can paint; hide the rest. */
      item.style.visibility = on || upcoming ? "visible" : "hidden";
      item.style.pointerEvents = interactive ? "auto" : "none";
      item.setAttribute("aria-hidden", interactive ? "false" : "true");
      if (link) {
        if (interactive) link.removeAttribute("tabindex");
        else link.setAttribute("tabindex", "-1");
      }
    });
  };

  const setupSticky = (section) => {
    const chrome = 80;
    section.style.setProperty("--directions-sticky-chrome", `${chrome}px`);

    let runwayH = 0;
    let frame = 0;

    const els = () => {
      const track = section.querySelector(".vshanuy-home-directions__track");
      const stage = section.querySelector(".vshanuy-home-directions__stage");
      const runway = section.querySelector(".vshanuy-home-directions__runway");
      const list = section.querySelector(".vshanuy-home-directions__list");
      const items = [
        ...section.querySelectorAll(".vshanuy-home-directions__item"),
      ];
      return { track, stage, runway, list, items };
    };

    const measureStageHeight = (stage, list, items) => {
      const prevStage = stage.style.height;
      const prevList = list.style.cssText;
      const prevItems = items.map((item) => item.style.cssText);

      stage.style.height = "auto";
      list.style.cssText =
        "position:relative;inset:auto;display:block;margin:0;padding:0;";
      items.forEach((item) => {
        item.style.cssText =
          "position:relative;inset:auto;transform:none;visibility:hidden;pointer-events:none;display:block;";
      });

      let max = 0;
      items.forEach((item) => {
        item.style.visibility = "visible";
        max = Math.max(max, Math.ceil(item.getBoundingClientRect().height));
        item.style.visibility = "hidden";
      });

      stage.style.height = prevStage;
      list.style.cssText = prevList;
      items.forEach((item, i) => {
        item.style.cssText = prevItems[i];
      });

      return Math.max(max, 280);
    };

    const syncProgress = () => {
      const { track, items } = els();
      if (!track || !items.length) return;

      if (prefersReducedMotion() || runwayH <= 0) {
        applyStackProgress(items, 0);
        return;
      }

      const trackTop = track.getBoundingClientRect().top;
      const scrolled = chrome - trackTop;
      const progress = Math.min(1, Math.max(0, scrolled / runwayH));
      applyStackProgress(items, progress);
    };

    const syncLayout = () => {
      const { stage, runway, list, items } = els();
      if (!stage || !runway || !list || !items.length) return;

      if (prefersReducedMotion()) {
        section.classList.add("vshanuy-home-directions--static");
        runway.style.height = "0px";
        stage.style.height = "auto";
        items.forEach((item) => {
          item.style.cssText = "";
          item.removeAttribute("aria-hidden");
          item.querySelector("a")?.removeAttribute("tabindex");
        });
        return;
      }

      section.classList.remove("vshanuy-home-directions--static");
      const stageH = measureStageHeight(stage, list, items);
      const step = Math.round(
        Math.min(Math.max(window.innerHeight * 0.58, 320), stageH * 0.95),
      );
      runwayH = Math.max(items.length - 1, 0) * step;
      stage.style.height = `${stageH}px`;
      runway.style.height = `${runwayH}px`;
      section.style.setProperty("--directions-stage-h", `${stageH}px`);
      syncProgress();
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncLayout);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncProgress);
    };

    if (section.dataset.stickyReady !== "true") {
      section.dataset.stickyReady = "true";
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScrollOrResize, { passive: true });
      if (document.fonts?.ready) {
        document.fonts.ready.then(syncLayout);
      }
    }

    syncLayout();
  };

  const mount = () => {
    const anchor = findProjectsAnchor();
    if (!anchor || !anchor.isConnected) return false;

    let section = document.querySelector(".vshanuy-home-directions");
    const needsMarkup =
      !section ||
      !section.querySelector(".vshanuy-home-directions__track") ||
      !section.querySelector(".vshanuy-home-directions__stage") ||
      !section.querySelector(".vshanuy-home-directions__runway") ||
      !section.querySelector(".vshanuy-home-directions__pin") ||
      !section.querySelector(".vshanuy-home-directions__header-guides") ||
      !section.querySelector(".vshanuy-home-directions__card") ||
      !section.querySelector(".vshanuy-home-directions__copy") ||
      !section.querySelector(".vshanuy-home-directions__card-guides") ||
      !section.querySelector("a.vshanuy-home-directions__card") ||
      section.querySelector(".vshanuy-home-directions__caption") ||
      section.querySelector(".vshanuy-home-directions__index") ||
      section.querySelector(".vshanuy-home-directions__tail") ||
      section.querySelector(".vshanuy-home-directions__more") ||
      !section.querySelector(".vshanuy-home-directions__label.text-caption-30");

    if (!section) {
      section = document.createElement("section");
      section.className = "vshanuy-home-directions";
      section.id = "directions";
      section.setAttribute("aria-labelledby", "vshanuy-home-directions-title");
      section.innerHTML = sectionMarkup();
      anchor.insertAdjacentElement("beforebegin", section);
    } else {
      if (section.nextElementSibling !== anchor) {
        anchor.insertAdjacentElement("beforebegin", section);
      }
      if (needsMarkup) {
        section.dataset.revealReady = "";
        /* stickyReady лишаємо — слухачі читають живий DOM */
        section.classList.remove("is-visible", "vshanuy-home-directions--static");
        section.innerHTML = sectionMarkup();
      }
    }

    setupReveal(section);
    setupSticky(section);
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
