(() => {
  const partners = [
    {
      name: "Український інститут національної пам’яті",
      logo: "_next/static/media/partners/uinp.png",
      href: "https://uinp.gov.ua/",
    },
    {
      name: "Starlight Media",
      logo: "_next/static/media/partners/starlight.svg",
      href: "https://starlight.media/",
    },
    {
      name: "Суспільне Мовлення",
      logo: "_next/static/media/partners/suspilne.svg",
      href: "https://corp.suspilne.media/",
    },
    {
      name: "Платформа пам’яті Меморіал",
      logo: "_next/static/media/partners/memorial.svg",
      href: "https://memorial.ua/",
    },
    {
      name: "Національне військове меморіальне кладовище",
      logo: "_next/static/media/partners/nvmk.svg",
      href: "https://nmmc.gov.ua/",
    },
  ];

  const renderItems = () =>
    partners
      .map(
        ({ name, logo, href }) => `
          <li class="vshanuy-partners__item">
            <a
              class="vshanuy-partners__link"
              href="${href}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="${name}"
            >
              <img
                src="${logo}"
                alt=""
                loading="lazy"
                decoding="async"
              >
            </a>
          </li>
        `,
      )
      .join("");

  const setupReveal = (section) => {
    if (section.dataset.revealReady === "true") return;

    section.dataset.revealReady = "true";
    section.classList.add("vshanuy-partners--animated");

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
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);
  };

  const fillList = (section) => {
    const list = section.querySelector(".vshanuy-partners__list");
    if (list) list.innerHTML = renderItems();
  };

  const mount = () => {
    const existingSection = document.querySelector(".vshanuy-partners");
    if (existingSection) {
      fillList(existingSection);
      setupReveal(existingSection);
      return true;
    }

    const articleSection = document.querySelector(
      'section[data-block-type="blockArticleOverview"]',
    );
    if (!articleSection) return false;

    const section = document.createElement("section");
    section.className = "vshanuy-partners";
    section.setAttribute("aria-labelledby", "vshanuy-partners-title");
    section.innerHTML = `
      <div class="vshanuy-partners__guides" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="vshanuy-partners__inner">
        <header class="vshanuy-partners__header">
          <p class="vshanuy-partners__label">ПАРТНЕРИ</p>
          <h2
            id="vshanuy-partners-title"
            class="font-serif"
          >
            Працюємо разом
          </h2>
        </header>
        <div class="vshanuy-partners__viewport">
          <ul class="vshanuy-partners__list">${renderItems()}</ul>
        </div>
      </div>
    `;

    articleSection.insertAdjacentElement("afterend", section);
    setupReveal(section);

    return true;
  };

  const start = () => {
    if (mount()) return;

    const observer = new MutationObserver(() => {
      if (mount()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const schedule = () => window.setTimeout(start, 1000);

  if (document.readyState === "complete") {
    schedule();
  } else {
    window.addEventListener("load", schedule, { once: true });
  }

  const findProjectsHeadline = () =>
    [...document.querySelectorAll('section[data-block-type="blockHeadline"]')].find(
      (section) => /Наші проєкти/i.test(section.textContent || ""),
    );

  const markProjectsAnchor = () => {
    const section = findProjectsHeadline();
    if (section && section.id !== "proekty") section.id = "proekty";
    return section;
  };

  /* Hydration drops the static id, and the directions block mounts above it later,
     so the browser's own hash jump lands in the wrong place. */
  let userScrolled = false;
  const stopAutoScroll = () => {
    userScrolled = true;
  };
  ["wheel", "touchstart", "keydown"].forEach((type) =>
    window.addEventListener(type, stopAutoScroll, { once: true, passive: true }),
  );

  const scrollToProjects = (event) => {
    if (window.location.hash !== "#proekty") return;
    if (userScrolled && event?.type !== "hashchange") return;
    const section = markProjectsAnchor();
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 40;
    if (window.vshanuyLenis?.scrollTo) window.vshanuyLenis.scrollTo(top, { immediate: true });
    else window.scrollTo(0, top);
  };

  const anchorObserver = new MutationObserver(markProjectsAnchor);
  anchorObserver.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(() => anchorObserver.disconnect(), 10000);
  [0, 1800, 2800].forEach((ms) => window.setTimeout(scrollToProjects, ms));
  window.addEventListener("hashchange", scrollToProjects);

  const footerScript = document.createElement("script");
  footerScript.src = "_next/static/chunks/vshanuy-footer.js?v=20261027d";
  document.head.append(footerScript);

  const menuScript = document.createElement("script");
  menuScript.src = "_next/static/chunks/vshanuy-menu.js?v=20261027d";
  document.head.append(menuScript);

  const heroScript = document.createElement("script");
  heroScript.src = "_next/static/chunks/vshanuy-hero.js";
  document.head.append(heroScript);

  const articlesScript = document.createElement("script");
  articlesScript.src = "_next/static/chunks/vshanuy-articles.js?v=20261027a";
  document.head.append(articlesScript);

  const revealScript = document.createElement("script");
  revealScript.src = "_next/static/chunks/vshanuy-reveal-fix.js?v=20261026about2";
  document.head.append(revealScript);
})();
