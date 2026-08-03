(() => {
  const sections = [
    ["Про нас", "nosotros.html", [
      ["Історія створення", "nosotros.html#history"],
      ["Місія і цінності", "nosotros.html#mission"],
      ["Команда", "nosotros.html#team"],
      ["Звіти про діяльність", "nosotros.html#reports"],
    ]],
    ["Наша діяльність", "#projects", [
      ["Для громад", "napryamky/ceremonial-dorozhnya-karta.html"],
      ["Для бізнесів", "napryamky/osvitni-programy.html"],
      ["Наші проєкти", "#projects"],
      ["Посібники", "posibnyky/index.html"],
      ["Як підтримати", "contacto.html?topic=support"],
    ]],
    ["Блог", "#articles", [
      ["Опис кейсів", "articulos/pomizh-nas-tablichky.html"],
      ["Колонка Каті", "articulos/kolonka-kati-pamyat.html"],
    ]],
    ["Співпраця", "contacto.html", [
      ["Актуальні опитування", "contacto.html?topic=survey"],
      ["Стати волонтером", "contacto.html?topic=volunteer"],
      ["Стати партнером", "contacto.html?topic=partner"],
      ["Запросити нас у громаду", "contacto.html?topic=community"],
      ["Долучитися до акції/ініціативи", "contacto.html?topic=initiative"],
    ]],
    ["Партнери", "#partners", [
      ["Хто з нами працює, з ким ми дружимо", "#partners"],
      ["Донори", "#partners"],
      ["Організації", "#partners"],
      ["Бізнеси", "#partners"],
    ]],
    ["Контакти", "contacto.html", [
      ["Пошта", "contacto.html#email"],
      ["Соцмережі", "contacto.html#social"],
    ]],
    ["Підтримати", "contacto.html?topic=donate", [
      ["Донати", "contacto.html?topic=donate"],
      ["Реквізити", "contacto.html?topic=details"],
    ], "support"],
  ];

  const submenuMarkup = (links) => `
    <ul class="vshanuy-desktop-menu__submenu" role="list">
      ${links
        .map(
          ([label, link]) =>
            `<li><a href="${link}">${label}</a></li>`,
        )
        .join("")}
    </ul>
  `;

  const desktopItem = ({
    label,
    href,
    links,
    modifier = "",
    isButton = false,
  }) => {
    const control = isButton
      ? `<button class="vshanuy-desktop-menu__label vshanuy-desktop-menu__trigger" type="button" aria-expanded="false" aria-controls="vshanuy-menu" aria-haspopup="dialog">
            <span class="vshanuy-desktop-menu__slide">
              <span class="vshanuy-desktop-menu__layer">
                <span>${label}</span>
                <span class="vshanuy-desktop-menu__dot vshanuy-desktop-menu__dot--large" aria-hidden="true"></span>
              </span>
              <span class="vshanuy-desktop-menu__layer vshanuy-desktop-menu__layer--active" aria-hidden="true">
                <span>${label}</span>
                <span class="vshanuy-desktop-menu__dot vshanuy-desktop-menu__dot--large" aria-hidden="true"></span>
              </span>
            </span>
          </button>`
      : `<a class="vshanuy-desktop-menu__label" href="${href}"${
          links ? ' aria-haspopup="true"' : ""
        }>
            <span class="vshanuy-desktop-menu__slide">
              <span class="vshanuy-desktop-menu__layer">
                <span>${label}</span>
                <span class="vshanuy-desktop-menu__dot" aria-hidden="true"></span>
              </span>
              <span class="vshanuy-desktop-menu__layer vshanuy-desktop-menu__layer--active" aria-hidden="true">
                <span>${label}</span>
                <span class="vshanuy-desktop-menu__dot" aria-hidden="true"></span>
              </span>
            </span>
          </a>`;

    return `
      <li class="vshanuy-desktop-menu__item${modifier ? ` ${modifier}` : ""}">
        ${control}
        ${links ? submenuMarkup(links) : ""}
      </li>
    `;
  };

  const sectionMarkup = sections
    .map(
      ([title, href, links, modifier], index) => `
      <section class="vshanuy-menu__section${
        modifier ? ` vshanuy-menu__section--${modifier}` : ""
      }" aria-labelledby="menu-section-${index}">
        <h3 id="menu-section-${index}"><a href="${href}">${title}</a></h3>
        <ul>
          ${links
            .map(([label, link]) => `<li><a href="${link}">${label}</a></li>`)
            .join("")}
        </ul>
      </section>
    `,
    )
    .join("");

  const desktopMarkup = `
    <nav class="vshanuy-desktop-menu" aria-label="Головна навігація">
      <a class="vshanuy-desktop-menu__brand" href="./" aria-label="Вшануй. 09:00 — на головну">
        <span class="vshanuy-desktop-menu__slide" aria-hidden="true">
          <span class="vshanuy-desktop-menu__layer vshanuy-desktop-menu__brand-primary">09:00</span>
          <span class="vshanuy-desktop-menu__layer vshanuy-desktop-menu__brand-active">
            <span class="vshanuy-desktop-menu__wordmark">ВШАНУЙ.</span>
            <span>09:00</span>
          </span>
        </span>
      </a>
      <ul class="vshanuy-desktop-menu__primary">
        ${desktopItem({
          label: "Наша діяльність.",
          href: sections[1][1],
          links: sections[1][2],
        })}
        ${desktopItem({
          label: "Підтримати.",
          href: sections[6][1],
          links: sections[6][2],
          modifier: "vshanuy-desktop-menu__item--support",
        })}
        ${desktopItem({
          label: "Меню.",
          href: "#",
          isButton: true,
          modifier: "vshanuy-desktop-menu__item--menu",
        })}
      </ul>
    </nav>
  `;

  const markup = `
    <button class="vshanuy-menu-trigger" type="button" aria-expanded="false" aria-controls="vshanuy-menu" aria-label="Відкрити меню">
      <span class="vshanuy-menu-trigger__label">Меню</span>
      <span class="vshanuy-menu-trigger__dot" aria-hidden="true"></span>
    </button>
    <div class="vshanuy-menu" id="vshanuy-menu" role="dialog" aria-modal="true" aria-labelledby="vshanuy-menu-title" hidden>
      <div class="vshanuy-menu__guides" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="vshanuy-menu__topline">
        <h2 id="vshanuy-menu-title">
          <span>ВШАНУЙ.</span>
          <span>09:00</span>
        </h2>
        <button class="vshanuy-menu__close" type="button">
          <span>Закрити.</span>
          <span class="vshanuy-menu__close-dot" aria-hidden="true"></span>
        </button>
      </div>
      <nav class="vshanuy-menu__nav" aria-labelledby="vshanuy-menu-title">
        <div class="vshanuy-menu__grid">${sectionMarkup}</div>
      </nav>
    </div>
  `;

  const mountDesktop = () => {
    const header = document.querySelector("header.sticky");
    if (!header) return false;
    if (header.classList.contains("vshanuy-desktop-header")) return true;

    header.classList.add("vshanuy-desktop-header");
    header.innerHTML = desktopMarkup.trim();
    return true;
  };

  const mount = () => {
    const desktopMounted = mountDesktop();
    if (document.querySelector(".vshanuy-menu-trigger")) return desktopMounted;
    if (!document.body) return false;

    const template = document.createElement("template");
    template.innerHTML = markup.trim();
    document.body.append(template.content);

    const menu = document.querySelector(".vshanuy-menu");
    const closeButton = menu.querySelector(".vshanuy-menu__close");
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    let previousFocus = null;

    const closeMenu = () => {
      menu.hidden = true;
      document.documentElement.classList.remove("vshanuy-menu-open");
      document
        .querySelectorAll(
          ".vshanuy-menu-trigger, .vshanuy-desktop-menu__trigger",
        )
        .forEach((trigger) => {
          trigger.setAttribute("aria-expanded", "false");
          if (trigger.classList.contains("vshanuy-menu-trigger")) {
            trigger.setAttribute("aria-label", "Відкрити меню");
          }
        });
      previousFocus?.focus();
    };

    const openMenu = (trigger) => {
      previousFocus = trigger;
      menu.hidden = false;
      document.documentElement.classList.add("vshanuy-menu-open");
      trigger.setAttribute("aria-expanded", "true");
      if (trigger.classList.contains("vshanuy-menu-trigger")) {
        trigger.setAttribute("aria-label", "Закрити меню");
      }
      closeButton.focus();
    };

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest(
        ".vshanuy-menu-trigger, .vshanuy-desktop-menu__trigger",
      );
      if (!trigger) return;
      if (menu.hidden) openMenu(trigger);
      else closeMenu();
    });
    closeButton.addEventListener("click", closeMenu);
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (menu.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = [...menu.querySelectorAll(focusableSelector)];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    return desktopMounted;
  };

  const start = () => {
    mount();
    const observer = new MutationObserver(mount);
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);

    const updateBrandOnScroll = () => {
      document
        .querySelector(".vshanuy-desktop-header")
        ?.toggleAttribute("data-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", updateBrandOnScroll, { passive: true });
    updateBrandOnScroll();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
