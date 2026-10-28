(() => {
  const mediaUrl = (filename) => {
    const css = document.querySelector('link[href*="font-overrides.css"]');
    if (css?.href) {
      try {
        return new URL(`../media/${filename}`, css.href).href;
      } catch {
        /* fall through */
      }
    }
    return `_next/static/media/${filename}`;
  };

  const siteRoot = () => {
    if (typeof window.__VSHANUY_SITE_ROOT__ === "string") {
      return window.__VSHANUY_SITE_ROOT__;
    }
    return "";
  };

  /* Canonical homepage cards = first 3 columns from materialy.html */
  const materials = [
    {
      hrefPart: "istoriya-khvylyny-movchannya",
      href: "materialy/istoriya-khvylyny-movchannya.html",
      tag: "Колонка Катерини Даценко",
      title: "Історія Хвилини мовчання",
      excerpt:
        "Яка ще країна проводила Хвилину мовчання щодня і від кого ми успадкували цю практику.",
      file: "vshanuy-material-istoriya.jpg",
      alt: "",
    },
    {
      hrefPart: "yak-vshanuvaty-u-den-pamyati",
      href: "materialy/yak-vshanuvaty-u-den-pamyati.html",
      tag: "Колонка Катерини Даценко",
      title: "Як вшанувати полеглих захисників та захисниць у День памʼяті",
      excerpt:
        "Чому нам так важливо обʼєднуватись і як памʼять може це зробити.",
      file: "vshanuy-material-den-pamyati.jpg",
      alt: "",
    },
    {
      hrefPart: "dlya-choho-pamyatayesh-ty",
      href: "materialy/dlya-choho-pamyatayesh-ty.html",
      tag: "Колонка Катерини Даценко",
      title: "А для чого памʼятаєш ти?",
      excerpt:
        "Про що фестиваль памʼяті ЧекаFest і як це продовжує життя.",
      file: "vshanuy-material-dlya-choho.jpg",
      alt: "",
    },
  ];

  const buildCard = (item) => {
    const card = document.createElement("a");
    card.className =
      "vshanuy-articles__card flex flex-col gap-y-24 p-8 lg:p-24 border border-base-stone-20 lg:border-none h-full";
    card.href = `${siteRoot()}${item.href}`;
    card.setAttribute("data-vshanuy-no-nav", "");

    const tag = document.createElement("p");
    tag.className =
      "order-3 text-caption-30 uppercase lg:order-1 transition-colors duration-500 ease-out";
    tag.textContent = item.tag;

    const title = document.createElement("h3");
    title.className = "order-2 font-serif text-title-10";
    title.textContent = item.title;

    const excerpt = document.createElement("p");
    excerpt.className =
      "order-1 text-body-20 lg:order-3 transition-colors duration-500 ease-out";
    excerpt.textContent = item.excerpt;

    card.append(tag, title, excerpt);
    return card;
  };

  const ensureMediaPhoto = (section, cards) => {
    const carousel = section.querySelector("#article-overview-carousel");
    if (!carousel) return;

    let stage = carousel.querySelector(".vshanuy-articles__photo");
    if (!stage) {
      stage = document.createElement("div");
      stage.className = "vshanuy-articles__photo";
      carousel.replaceChildren(stage);

      materials.forEach((photo, index) => {
        const img = document.createElement("img");
        img.src = mediaUrl(photo.file);
        img.alt = photo.alt;
        img.decoding = "async";
        img.loading = index === 0 ? "eager" : "lazy";
        if (index === 0) img.classList.add("is-active");
        img.dataset.article = photo.hrefPart;
        stage.append(img);
      });
    }

    const activate = (hrefPart, activeCard) => {
      stage.querySelectorAll("img").forEach((img) => {
        img.classList.toggle("is-active", img.dataset.article === hrefPart);
      });
      cards.forEach((card) => {
        card.classList.toggle("is-active", card === activeCard);
      });
    };

    const hasActive = cards.some((card) => card.classList.contains("is-active"));
    if (!hasActive && cards[0]) {
      cards[0].classList.add("is-active");
    }

    cards.forEach((card) => {
      if (card.dataset.vshanuyPhotoBound === "1") return;
      card.dataset.vshanuyPhotoBound = "1";
      const href = card.getAttribute("href") || "";
      const match = materials.find((p) => href.includes(p.hrefPart));
      if (!match) return;
      const show = () => activate(match.hrefPart, card);
      card.addEventListener("mouseenter", show);
      card.addEventListener("focusin", show);
    });
  };

  const layoutSection = (section) => {
    if (section.dataset.vshanuyArticlesLayout === "1") return;

    const grid = section.querySelector(".grid.grid-cols-1.lg\\:grid-cols-4");
    if (!grid) return;

    const mediaCol = grid.querySelector(":scope > .mb-96");
    const listCol = grid.querySelector(":scope > .lg\\:col-start-4");
    if (!mediaCol || !listCol) return;

    const introSpans = [...mediaCol.querySelectorAll(":scope > span.block")];
    const carousel = mediaCol.querySelector("#article-overview-carousel");
    if (!introSpans.length || !carousel) return;

    const cards = materials.map(buildCard);

    const intro = document.createElement("div");
    intro.className = "vshanuy-articles__intro";
    introSpans.forEach((span) => intro.append(span));

    const label = intro.querySelector("h2");
    const title = intro.querySelector("h3");
    if (label) {
      label.classList.add("vshanuy-articles__label");
      const labelRaw = (label.textContent || "").replace(/\s+/g, " ").trim();
      if (/^блог$/i.test(labelRaw)) label.textContent = "Матеріали";
    }
    if (title) {
      title.classList.add("vshanuy-articles__title");
      title.id = title.id || "vshanuy-articles-title";
      section.setAttribute("aria-labelledby", title.id);
      const raw = (title.textContent || "").replace(/\s+/g, " ").trim();
      if (raw === "Як пам'ять живе у практиках, діях, місцях") {
        title.textContent = "Як пам'ять живе\nу практиках, діях, місцях";
      }
    }

    mediaCol.classList.add("vshanuy-articles__media");
    listCol.classList.add("vshanuy-articles__list");

    const stack = document.createElement("div");
    stack.className = "vshanuy-articles__stack";
    cards.forEach((card) => stack.append(card));

    const cta = document.createElement("a");
    cta.className = "vshanuy-articles__all";
    cta.href = `${siteRoot()}materialy.html`;
    cta.textContent = "Усі матеріали";
    cta.setAttribute("data-vshanuy-no-nav", "");

    listCol.replaceChildren(stack, cta);
    grid.prepend(intro);
    ensureMediaPhoto(section, cards);

    section.dataset.vshanuyArticlesLayout = "1";
    section.classList.add("vshanuy-articles--ready");
  };

  const apply = () => {
    const section =
      document.querySelector("#articles") ||
      document.querySelector('section[data-block-type="blockArticleOverview"]');
    if (!section) return;
    layoutSection(section);
    const stack = section.querySelectorAll(".vshanuy-articles__stack > a");
    if (stack.length) ensureMediaPhoto(section, [...stack]);
  };

  const start = () => {
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "srcset"],
    });
    window.setTimeout(() => observer.disconnect(), 15000);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
