(() => {
  const partners = [
    {
      name: "Міністерство у справах ветеранів України",
      logo: "_next/static/media/partners/minveteraniv.svg",
    },
    {
      name: "Міністерство розвитку громад та територій України",
      logo: "_next/static/media/partners/minrozvytku.svg",
    },
    {
      name: "Міністерство культури України",
      logo: "_next/static/media/partners/minkult.svg",
    },
    {
      name: "Український інститут національної пам’яті",
      logo: "_next/static/media/partners/uinp.png",
    },
    {
      name: "ПУМБ",
      logo: "_next/static/media/partners/pumb.svg",
    },
    {
      name: "MOKO",
      logo: "_next/static/media/partners/moko.svg",
    },
  ];

  const renderItems = () =>
    partners
      .map(
        ({ name, logo }) => `
          <li class="vshanuy-partners__item">
            <img
              src="${logo}"
              alt="${name}"
              loading="lazy"
              decoding="async"
            >
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

  const mount = () => {
    const existingSection = document.querySelector(".vshanuy-partners");
    if (existingSection) {
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

  const footerScript = document.createElement("script");
  footerScript.src = "_next/static/chunks/vshanuy-footer.js";
  document.head.append(footerScript);

  const menuScript = document.createElement("script");
  menuScript.src = "_next/static/chunks/vshanuy-menu.js";
  document.head.append(menuScript);

  const heroScript = document.createElement("script");
  heroScript.src = "_next/static/chunks/vshanuy-hero.js";
  document.head.append(heroScript);

  const articlesScript = document.createElement("script");
  articlesScript.src = "_next/static/chunks/vshanuy-articles.js";
  document.head.append(articlesScript);
})();
