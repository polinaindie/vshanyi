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

  const apply = () => {
    const section =
      document.querySelector("#articles") ||
      document.querySelector('section[data-block-type="blockArticleOverview"]');
    if (!section) return;

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
