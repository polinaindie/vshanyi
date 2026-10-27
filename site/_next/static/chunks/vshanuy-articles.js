(() => {
  const replacements = {
    "7974a72876383dbc854755d31ec0653d6353dff9": "vshanuy-blog-dnipro.jpg",
    "9d0904fa69d33e2132c2a9b01218b2e81ceecb0f": "vshanuy-blog-pamyat.jpg",
    "63ae489882bfa558c9ff8677257bca254bcd7508": "vshanuy-blog-tablichky.jpg",
  };

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

  const urls = Object.fromEntries(
    Object.entries(replacements).map(([hash, file]) => [hash, mediaUrl(file)]),
  );

  const siteRoot = () => {
    if (typeof window.__VSHANUY_SITE_ROOT__ === "string") {
      return window.__VSHANUY_SITE_ROOT__;
    }
    return "";
  };

  const articlePhotos = [
    {
      hrefPart: "yak-dnipro-zupynyayetsya",
      file: "vshanuy-blog-dnipro.jpg",
      alt: "",
    },
    {
      hrefPart: "kolonka-kati-pamyat",
      file: "vshanuy-blog-pamyat.jpg",
      alt: "",
    },
    {
      hrefPart: "pomizh-nas-tablichky",
      file: "vshanuy-blog-tablichky.jpg",
      alt: "",
    },
  ];

  const applyPhotos = (section) => {
    section.querySelectorAll("img").forEach((img) => {
      const src = img.currentSrc || img.getAttribute("src") || "";
      const hash = Object.keys(urls).find((h) => src.includes(h));
      if (!hash) return;
      const next = urls[hash];
      if (!next || src.includes(replacements[hash])) return;
      img.removeAttribute("srcset");
      img.src = next;
    });
  };

  const ensureMediaPhoto = (section, cards) => {
    const carousel = section.querySelector("#article-overview-carousel");
    if (!carousel) return;

    let stage = carousel.querySelector(".vshanuy-articles__photo");
    if (!stage) {
      stage = document.createElement("div");
      stage.className = "vshanuy-articles__photo";
      carousel.replaceChildren(stage);

      articlePhotos.forEach((photo, index) => {
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

    const activate = (hrefPart) => {
      stage.querySelectorAll("img").forEach((img) => {
        img.classList.toggle("is-active", img.dataset.article === hrefPart);
      });
    };

    cards.forEach((card) => {
      if (card.dataset.vshanuyPhotoBound === "1") return;
      card.dataset.vshanuyPhotoBound = "1";
      const href = card.getAttribute("href") || "";
      const match = articlePhotos.find((p) => href.includes(p.hrefPart));
      if (!match) return;
      card.addEventListener("mouseenter", () => activate(match.hrefPart));
      card.addEventListener("focusin", () => activate(match.hrefPart));
    });
  };

  const uniqueArticleLinks = (root) => {
    const seen = new Set();
    const out = [];
    root.querySelectorAll('a[href*="articulos/"]').forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (!href || seen.has(href)) return;
      seen.add(href);
      out.push(a.cloneNode(true));
    });
    return out;
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

    const cards = uniqueArticleLinks(listCol);
    if (!cards.length) return;

    const intro = document.createElement("div");
    intro.className = "vshanuy-articles__intro";
    introSpans.forEach((span) => intro.append(span));

    const label = intro.querySelector("h2");
    const title = intro.querySelector("h3");
    if (label) label.classList.add("vshanuy-articles__label");
    if (title) {
      title.classList.add("vshanuy-articles__title");
      title.id = title.id || "vshanuy-articles-title";
      section.setAttribute("aria-labelledby", title.id);
    }

    mediaCol.classList.add("vshanuy-articles__media");
    listCol.classList.add("vshanuy-articles__list");

    const stack = document.createElement("div");
    stack.className = "vshanuy-articles__stack";
    cards.forEach((card) => stack.append(card));

    const cta = document.createElement("a");
    cta.className = "vshanuy-articles__all";
    cta.href = `${siteRoot()}materialy.html`;
    cta.textContent = "Усі статті";
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
    applyPhotos(section);
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
