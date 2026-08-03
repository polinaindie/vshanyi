(() => {
  const sourceHash = "cc3e29644da1a1a694d53d5c146a8af40acb68d9";
  const localSource = "_next/static/media/vshanuy-hero.png";
  const alt =
    "Військові та містяни під час хвилини мовчання на міській вулиці";

  const mount = () => {
    let mounted = false;
    const image = document.querySelector(
      `main img[data-vshanuy-hero], main img[src*="${sourceHash}"]`,
    );
    if (image) {
      image.setAttribute("data-vshanuy-hero", "");
      image.setAttribute("alt", alt);

      if (!image.getAttribute("src")?.endsWith(localSource)) {
        image.removeAttribute("srcset");
        image.removeAttribute("sizes");
        image.setAttribute("src", localSource);
      }
      mounted = true;
    }

    return mounted;
  };

  const start = () => {
    mount();
    const observer = new MutationObserver(mount);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "srcset"],
    });
    window.setTimeout(() => observer.disconnect(), 10000);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
