(() => {
  const start = () => {
    const buttons = [...document.querySelectorAll("[data-project-filter]")];
    const items = [...document.querySelectorAll("[data-projects] > [data-directions]")];
    const status = document.querySelector("[data-projects-status]");
    if (!buttons.length || !items.length) return;

    const apply = (filter) => {
      let shown = 0;
      items.forEach((item) => {
        const visible = filter === "all" || item.dataset.directions.split(" ").includes(filter);
        item.hidden = !visible;
        if (visible) shown += 1;
      });
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.projectFilter === filter));
      });
      if (status) status.textContent = `Показано проєктів: ${shown}`;
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => apply(button.dataset.projectFilter));
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
