(() => {
  const sections = [
    [
      "Про нас",
      [
        "Історія створення",
        "Місія і цінності",
        "Команда",
        "Звіти про діяльність",
      ],
    ],
    [
      "Наша діяльність",
      [
        "Для громад",
        "Для бізнесів",
        "Наші проєкти",
        "Посібники",
        "Як підтримати",
      ],
    ],
    ["Блог", ["Опис кейсів", "Колонка Каті"]],
    [
      "Співпраця",
      [
        "Актуальні опитування",
        "Стати волонтером",
        "Стати партнером",
        "Запросити нас у громаду",
        "Долучитися до акції/ініціативи",
      ],
    ],
    [
      "Партнери",
      [
        "Хто з нами працює, з ким ми дружимо",
        "Донори",
        "Організації",
        "Бізнеси",
      ],
    ],
    ["Контакти", ["Пошта", "Соцмережі"]],
    ["Підтримати", ["Донати", "Реквізити"], "support"],
  ];

  const submenuMarkup = (labels) => `
    <ul class="vshanuy-desktop-menu__submenu" role="list">
      ${labels
        .map(
          (label) =>
            `<li><span class="vshanuy-desktop-menu__submenu-item">${label}</span></li>`,
        )
        .join("")}
    </ul>
  `;

  const desktopItem = ({
    label,
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
      : `<span class="vshanuy-desktop-menu__label">
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
          </span>`;

    return `
      <li class="vshanuy-desktop-menu__item${modifier ? ` ${modifier}` : ""}">
        ${control}
        ${links ? submenuMarkup(links) : ""}
      </li>
    `;
  };

  const sectionMarkup = sections
    .map(
      ([title, labels, modifier], index) => `
      <section class="vshanuy-menu__section${
        modifier ? ` vshanuy-menu__section--${modifier}` : ""
      }" aria-labelledby="menu-section-${index}">
        <h3 id="menu-section-${index}">${title}</h3>
        <ul>
          ${labels
            .map((label) => `<li><span class="vshanuy-menu__item">${label}</span></li>`)
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
          <span class="vshanuy-desktop-menu__layer vshanuy-desktop-menu__brand-primary">
            <span class="vshanuy-desktop-menu__time">09:00</span>
          </span>
          <span class="vshanuy-desktop-menu__layer vshanuy-desktop-menu__brand-active">
            <span class="vshanuy-desktop-menu__wordmark">ВШАНУЙ.</span>
            <span class="vshanuy-desktop-menu__time">09:00</span>
          </span>
        </span>
      </a>
      <ul class="vshanuy-desktop-menu__primary">
        ${desktopItem({
          label: "Наша діяльність.",
          links: sections[1][1],
        })}
        ${desktopItem({
          label: "Підтримати.",
          links: sections[6][1],
          modifier: "vshanuy-desktop-menu__item--support",
        })}
        ${desktopItem({
          label: "Усі розділи",
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

  const shouldKeepLink = (href) => {
    if (!href) return true;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return true;
    if (/^https?:\/\//i.test(href)) return true;
    if (
      href === "./" ||
      href === "/" ||
      href === "index.html" ||
      href.startsWith("./#") ||
      href.startsWith("/#")
    ) {
      return true;
    }
    if (href.startsWith("#")) return true;
    if (/\.pdf($|\?)/i.test(href)) return true;
    return false;
  };

  const neutralizeInternalPageLinks = (root = document) => {
    root.querySelectorAll("a[href]").forEach((anchor) => {
      if (anchor.closest(".vshanuy-desktop-menu__brand")) return;
      if (anchor.closest(".vshanuy-site-footer__wordmark")) return;
      // Keep project/article cards as anchors so CSS photos + hover copy still match.
      if (anchor.classList.contains("group/link")) {
        anchor.setAttribute("aria-disabled", "true");
        return;
      }
      const href = anchor.getAttribute("href") || "";
      if (shouldKeepLink(href)) return;

      const span = document.createElement("span");
      span.className = `${anchor.className} vshanuy-dead-link`.trim();
      span.innerHTML = anchor.innerHTML;
      const label = anchor.getAttribute("aria-label");
      if (label) span.setAttribute("aria-label", label);
      anchor.replaceWith(span);
    });
  };

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
    neutralizeInternalPageLinks();
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

    document.addEventListener(
      "click",
      (event) => {
        const anchor = event.target.closest("a[href]");
        if (!anchor) return;
        if (anchor.closest(".vshanuy-desktop-menu__brand")) return;
        if (anchor.closest(".vshanuy-site-footer__wordmark")) return;
        const href = anchor.getAttribute("href") || "";
        if (shouldKeepLink(href)) return;
        event.preventDefault();
        event.stopPropagation();
      },
      true,
    );

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
