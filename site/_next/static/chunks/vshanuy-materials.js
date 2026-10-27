(() => {
  const hashToFilter = {
    "#kolonka-avtora": "kolonka-avtora",
    "#doslidzhennya": "doslidzhennya",
  };

  const start = () => {
    const buttons = [...document.querySelectorAll("[data-filter]")];
    const items = [...document.querySelectorAll("[data-materials] > [data-type]")];
    const status = document.querySelector("[data-materials-status]");
    if (!buttons.length || !items.length) return;

    const apply = (filter, announce) => {
      let shown = 0;
      items.forEach((item) => {
        const visible = filter === "all" || item.dataset.type === filter;
        item.hidden = !visible;
        item.classList.toggle(
          "vshanuy-materials-page__item--featured",
          filter === "all" && item.hasAttribute("data-featured"),
        );
        if (visible) shown += 1;
      });
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
      });
      if (announce && status) status.textContent = `Показано матеріалів: ${shown}`;
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        apply(filter, true);
        const hash = filter === "all" ? "" : `#${filter}`;
        history.replaceState(null, "", `${location.pathname}${location.search}${hash}`);
      });
    });

    const fromHash = () => apply(hashToFilter[location.hash] || "all", false);
    window.addEventListener("hashchange", fromHash);
    fromHash();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
