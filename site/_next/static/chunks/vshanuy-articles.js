(() => {
  const replacements = {
    "7974a72876383dbc854755d31ec0653d6353dff9": "vshanuy-material-istoriya.jpg",
    "9d0904fa69d33e2132c2a9b01218b2e81ceecb0f": "vshanuy-material-den-pamyati.jpg",
    "63ae489882bfa558c9ff8677257bca254bcd7508": "vshanuy-material-dlya-choho.jpg?v=20261027a",
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

  const author = "Колонка Катерини Даценко";
  const materials = {
    "yak-dnipro-zupynyayetsya": {
      title: "Історія Хвилини мовчання",
      href: "materialy/istoriya-khvylyny-movchannya.html",
    },
    "kolonka-kati-pamyat": {
      title: "Як вшанувати полеглих захисників та захисниць у День памʼяті",
      href: "materialy/yak-vshanuvaty-u-den-pamyati.html",
    },
    "pomizh-nas-tablichky": {
      title: "А для чого памʼятаєш ти?",
      href: "materialy/dlya-choho-pamyatayesh-ty.html",
    },
  };

  const setText = (el, text) => {
    if (el && el.textContent !== text) el.textContent = text;
  };

  const applyMaterials = (section) => {
    const label = [...section.querySelectorAll("h2")].find((h) =>
      /^(Блог|Матеріали)$/.test(h.textContent.trim()),
    );
    setText(label, "Матеріали");

    section.querySelectorAll("a[href]").forEach((anchor) => {
      const href = anchor.getAttribute("href") || "";
      const key = Object.keys(materials).find((slug) => href.includes(slug));
      if (!key) return;
      const material = materials[key];
      setText(anchor.querySelector("p.text-caption-30"), author);
      setText(anchor.querySelector("h3"), material.title);
      anchor.setAttribute("href", material.href);
    });

    const heading = section.querySelector("h3.text-title-40");
    const wrapper = heading?.parentElement;
    if (wrapper && !wrapper.querySelector(".vshanuy-articles-all")) {
      wrapper.insertAdjacentHTML(
        "beforeend",
        '<a class="vshanuy-articles-all" href="materialy.html">Усі матеріали <span aria-hidden="true">→</span></a>',
      );
    }
  };

  const apply = () => {
    const section =
      document.querySelector("#articles") ||
      document.querySelector('section[data-block-type="blockArticleOverview"]');
    if (!section) return;
    applyMaterials(section);

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
