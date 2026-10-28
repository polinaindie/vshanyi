(() => {
  const aboutLinks = ["Місія та цінності", "Звіт про діяльність", "Контакти"];
  const activityLinks = [
    "Напрями роботи",
    "Проєкти",
    "Гайди",
    "Публікації",
  ];
  const joinLinks = ["Підтримати", "Співпраця", "Купити мерч", "Партнери"];

  const siteRoot = (() => {
    if (typeof window.__VSHANUY_SITE_ROOT__ === "string") return window.__VSHANUY_SITE_ROOT__;
    const src = document.currentScript?.src;
    if (!src) return "";
    const root = new URL("../../../", src).pathname;
    const path = window.location.pathname;
    if (!path.startsWith(root)) return "";
    return "../".repeat(path.slice(root.length).split("/").length - 1);
  })();
  const supportPageHref = `${siteRoot}pidtrymaty.html`;

  // Порядок: Про нас → Діяльність → Долучитися
  const sections = [
    {
      kind: "group",
      title: "Про нас",
      items: aboutLinks.map((label) => ({
        label,
        href: hrefForLabel(label),
      })),
    },
    {
      kind: "group",
      title: "Діяльність",
      items: activityLinks.map((label) => ({
        label,
        href: hrefForLabel(label),
      })),
    },
    {
      kind: "group",
      title: "Долучитися",
      items: joinLinks.map((label) => ({
        label,
        href: hrefForLabel(label),
      })),
    },
  ];

  function hrefForLabel(label) {
    const key = String(label || "").replace(/\.$/, "");
    if (key === "Хто ми" || key === "Місія та цінності") return `${siteRoot}pro-nas.html`;
    if (key === "Контакти") return `${siteRoot}kontakty.html`;
    if (key === "Напрями роботи" || key === "Напрямки роботи") {
      return `${siteRoot}diyalnist.html`;
    }
    if (key === "Проєкти") return `${siteRoot}proekty.html`;
    if (key === "Гайди" || key === "Посібники") return `${siteRoot}posibnyky/`;
    if (key === "Публікації" || key === "Матеріали") {
      return `${siteRoot}materialy.html`;
    }
    if (key === "Співпраця") return `${siteRoot}spivpratsya.html`;
    if (key === "Підтримати") return supportPageHref;
    if (key === "Купити мерч" || key === "Мерч") return `${siteRoot}merch.html`;
    if (key === "Партнери") return `${siteRoot}partnery.html`;
    return null;
  }

  const linkForLabel = (label) => {
    const href = hrefForLabel(label);
    if (href) return { href, external: false };
    return null;
  };

  /* Оригінальне лого: верхній ряд ВШАНУЙ., нижній 09:00 (див. original-logo.mdc) */
  const menuLogoMarkup = `
    <span class="vshanuy-menu__logo vshanuy-logo vshanuy-logo--onPaper">
      <svg class="vshanuy-logo__svg" viewBox="0 0 977.942 266.892" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path class="vshanuy-logo__name" d="M482.985 45.2234L496.717 28.4479H547.187L547.304 84.6986H575.004V45.6927L557.633 45.2821L571.307 28.4479H621.953V137.723L640.263 137.958L625.356 155.906H575.004V102.765H547.363V137.665L565.673 138.017L550.943 155.848H500.766L500.062 141.77L488.032 155.906L436.212 155.789L377.643 122.707L368.195 137.606L390.378 137.958L375.648 155.848H153.287V45.5754L135.799 45.3407L149.649 28.3893H200.236V137.723H220.659V45.5167L205.048 45.3407L218.722 28.4479H267.666V137.723L288.03 137.841V45.7513L270.718 45.3407L284.274 28.5652H335.038V137.723L346.892 137.958L361.505 114.261L351.763 108.337L361.564 92.3825L371.775 97.9548L394.604 61.1777L387.796 45.7513L367.491 45.3407L381.106 28.5652H431.048L480.109 137.665L500.414 137.841V45.9273L483.043 45.2234H482.985ZM424.181 128.749L403.289 80.886L387.209 107.046L424.181 128.69V128.749Z"/>
        <path class="vshanuy-logo__name" d="M147.008 116.783C147.243 131.036 140.435 143.12 127.935 149.454C120.306 153.326 111.562 155.73 102.524 155.789L18.31 155.965V45.7513L0 45.2821L14.4367 28.4479L96.7143 28.5652C104.696 28.5652 112.207 30.6182 119.308 33.1404C130.576 38.1261 137.09 48.0975 136.855 60.2979C136.679 70.328 132.923 79.2436 123.827 85.3438C138.147 90.2122 146.773 101.474 147.067 116.666L147.008 116.783ZM88.0875 45.5167H65.1413V80.0648H88.0875V45.5167ZM96.7143 96.4884H65.1413V137.899H96.7143V96.4884Z"/>
        <path class="vshanuy-logo__name" d="M796.015 165.585L795.839 45.7513L778.468 45.3407L792.025 28.5066L842.67 28.4479L842.964 92.6171L915.441 18.7698L915.558 137.782L933.868 138.016L919.255 155.906L868.727 155.965L868.434 91.7959L796.015 165.585Z"/>
        <path class="vshanuy-logo__name" d="M710.158 137.489L751.883 138.075L737.095 156.024L677.704 155.848L694.136 129.101L647.54 45.9273L631.167 45.2234L644.899 28.4479L691.496 28.5066L721.484 85.5198L746.895 45.6927L714.207 45.458L728.233 28.4479L778.703 28.5652L710.158 137.489Z"/>
        <path class="vshanuy-logo__name" d="M876.239 43.3465C868.258 43.5224 861.333 43.6397 853.88 42.9359L895.664 0L918.258 0.175967L876.239 43.3465Z"/>
        <path class="vshanuy-logo__name" d="M960.747 155.672L946.955 156.024V134.263L977.942 134.439L960.747 155.672Z"/>
        <path class="vshanuy-logo__timer" d="M314.674 239.256C308.688 256.911 292.901 266.12 275.295 266.237C254.286 266.355 237.032 252.571 233.922 231.396C231.927 218.14 234.157 204.532 242.49 193.856C250.823 183.181 263.089 179.017 276.234 179.134C293.488 179.251 308.746 188.871 314.439 205.353C318.195 216.263 318.488 227.935 314.674 239.315V239.256ZM284.392 191.334H266.023L266.199 254.037H284.568L284.392 191.334Z"/>
        <path class="vshanuy-logo__timer" d="M58.8619 266.179C41.7843 265.358 27.641 255.973 21.9485 240.018C18.486 230.399 18.2513 219.665 20.5987 209.752C25.1175 190.572 41.3735 179.193 60.6812 179.017C81.5734 178.841 98.9444 191.98 102.348 213.154C103.287 219.02 103.287 225.824 102.348 231.748C99.1204 253.509 80.9865 267.293 58.8619 266.179ZM70.4817 252.453V192.625C64.1437 190.924 58.099 190.806 51.7022 192.625V252.571C57.8643 254.33 64.3784 254.448 70.4817 252.453Z"/>
        <path class="vshanuy-logo__timer" d="M368.489 266.237C349.768 265.592 334.099 254.448 329.58 235.971C327.056 225.589 327.35 214.445 331.164 204.297C337.092 188.343 351.998 179.779 368.254 179.075C394.252 177.961 412.151 197.317 412.151 222.422C412.151 247.644 394.839 267.176 368.489 266.237ZM379.404 252.395V192.625C373.008 190.865 366.904 190.865 360.625 192.625V252.512C366.845 254.389 373.301 254.506 379.404 252.395Z"/>
        <path class="vshanuy-logo__timer" d="M117.372 255.679L125.881 247.057C135.212 254.272 145.952 255.914 157.63 254.096V236.088C143.956 237.731 123.358 235.971 115.2 222.95C106.574 209.107 112.501 191.745 127.231 184.706C139.262 178.958 153.581 178.43 166.374 182.771C190.025 190.806 193.663 220.251 187.56 240.898C182.807 257.029 168.487 266.707 151.879 266.883C139.262 267.059 127.642 264.888 117.313 255.621L117.372 255.679ZM157.806 223.536L157.63 192.742C152.525 192.331 148.064 192.331 143.663 192.742V224.709C148.593 225.296 153.405 224.885 157.806 223.536Z"/>
        <path class="vshanuy-logo__timer" d="M213.969 197.083C212.443 198.96 207.044 198.314 204.344 197.786L204.227 183.475L224.884 183.768L214.027 197.141L213.969 197.083Z"/>
        <path class="vshanuy-logo__timer" d="M224.767 251.456C215.905 261.311 216.023 267.763 204.227 265.416L204.11 251.28L224.767 251.456Z"/>
      </svg>
    </span>
  `;

  const renderMenuLink = (label, className) => {
    const link = linkForLabel(label);
    if (!link) {
      return `<span class="${className}">${label}</span>`;
    }
    const externalAttrs = link.external
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
    return `<a class="${className}" href="${link.href}"${externalAttrs}>${label}</a>`;
  };

  const slideLayers = (label, largeDot = false) => {
    const dotClass = largeDot
      ? "vshanuy-desktop-menu__dot vshanuy-desktop-menu__dot--large"
      : "vshanuy-desktop-menu__dot";
    return `
      <span class="vshanuy-desktop-menu__slide">
        <span class="vshanuy-desktop-menu__layer">
          <span>${label}</span>
          <span class="${dotClass}" aria-hidden="true"></span>
        </span>
        <span class="vshanuy-desktop-menu__layer vshanuy-desktop-menu__layer--active" aria-hidden="true">
          <span>${label}</span>
          <span class="${dotClass}" aria-hidden="true"></span>
        </span>
      </span>
    `;
  };

  const submenuMarkup = (labels) => `
    <ul class="vshanuy-desktop-menu__submenu" role="list">
      ${labels
        .map(
          (label) =>
            `<li>${renderMenuLink(label, "vshanuy-desktop-menu__submenu-item")}</li>`,
        )
        .join("")}
    </ul>
  `;

  const desktopItem = ({
    label,
    links,
    href,
    modifier = "",
    isButton = false,
  }) => {
    let control;
    if (isButton) {
      control = `<button class="vshanuy-desktop-menu__label vshanuy-desktop-menu__trigger" type="button" aria-expanded="false" aria-controls="vshanuy-menu" aria-haspopup="dialog">
            ${slideLayers(label, true)}
          </button>`;
    } else if (href) {
      control = `<a class="vshanuy-desktop-menu__label" href="${href}">
            ${slideLayers(label)}
          </a>`;
    } else {
      control = `<span class="vshanuy-desktop-menu__label">
            ${slideLayers(label)}
          </span>`;
    }

    return `
      <li class="vshanuy-desktop-menu__item${modifier ? ` ${modifier}` : ""}">
        ${control}
        ${links ? submenuMarkup(links) : ""}
      </li>
    `;
  };

  const renderItem = (item) => {
    if (item.href) {
      return `<a class="vshanuy-menu__item" href="${item.href}">${item.label}</a>`;
    }
    return `<span class="vshanuy-menu__item">${item.label}</span>`;
  };

  const supportCtaMarkup = `
    <div class="vshanuy-menu__cta">
      <a class="vshanuy-menu__support-btn" href="${supportPageHref}">
        <span>Підтримати</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>
  `;

  const sectionMarkup = sections
    .map((section, index) => {
      const titleId = `menu-section-${index}`;
      if (section.kind === "link") {
        return `
      <section class="vshanuy-menu__section vshanuy-menu__section--link" aria-labelledby="${titleId}">
        <a class="vshanuy-menu__section-title" id="${titleId}" href="${section.href}">
          <span>${section.title}</span>
          <span aria-hidden="true">→</span>
        </a>
      </section>
    `;
      }
      const list =
        section.items.length > 0
          ? `<ul>
          ${section.items
            .map((item) => `<li>${renderItem(item)}</li>`)
            .join("")}
        </ul>`
          : "";
      return `
      <section class="vshanuy-menu__section" aria-labelledby="${titleId}">
        <h3 id="${titleId}">${section.title}</h3>
        ${list}
        ${section.support ? supportCtaMarkup : ""}
      </section>
    `;
    })
    .join("");

  const desktopMarkup = `
    <nav class="vshanuy-desktop-menu" aria-label="Головна навігація">
      <a class="vshanuy-desktop-menu__brand" href="${siteRoot}index.html" aria-label="Вшануй. 09:00 — на головну">
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
          label: "Про нас.",
          links: aboutLinks,
        })}
        ${desktopItem({
          label: "Діяльність.",
          links: activityLinks,
          modifier: "vshanuy-desktop-menu__item--activity",
        })}
        ${desktopItem({
          label: "Долучитися.",
          links: joinLinks,
          modifier: "vshanuy-desktop-menu__item--support",
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
        <h2 id="vshanuy-menu-title" class="vshanuy-menu__brand" aria-label="Вшануй. 09:00">${menuLogoMarkup}</h2>
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

  const shouldKeepLink = (rawHref) => {
    if (!rawHref) return true;
    const href = rawHref.replace(/^(?:\.\.\/)+/, "");
    if (!href) return true;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return true;
    if (/^https?:\/\//i.test(href)) return true;
    if (
      href === "./" ||
      href === "/" ||
      href === "index.html" ||
      href.startsWith("index.html#") ||
      href.startsWith("kontakty.html") ||
      href.startsWith("pidtrymaty.html") ||
      href.startsWith("pro-nas.html") ||
      href.startsWith("materialy") ||
      href === "merch.html" ||
      href === "polityka-konfidentsiynosti.html" ||
      href === "spivpratsya.html" ||
      href.startsWith("spivpratsya.html") ||
      href.startsWith("partnery.html") ||
      href.startsWith("diyalnist.html") ||
      href.startsWith("proekty.html") ||
      href === "posibnyky/" ||
      href === "posibnyky/index.html" ||
      href === "napryamky/spivpratsya-z-biznesom.html" ||
      href.endsWith("napryamky/spivpratsya-z-biznesom.html") ||
      href.startsWith("napryamky/") ||
      href.startsWith("../napryamky/") ||
      href.includes("/napryamky/") ||
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
      const href = anchor.getAttribute("href") || "";
      if (shouldKeepLink(href)) return;
      if (anchor.hasAttribute("data-vshanuy-no-nav")) return;
      // Keep the original anchor markup so hover/focus styles still apply.
      anchor.setAttribute("data-vshanuy-no-nav", "");
    });
  };

  const mountDesktop = () => {
    const header = document.querySelector("header.sticky");
    if (!header) return false;
    if (header.classList.contains("vshanuy-desktop-header")) {
      if (document.body.classList.contains("vshanuy-business-page")) {
        header
          .querySelector(".vshanuy-desktop-menu__item--activity")
          ?.classList.add("vshanuy-desktop-menu__item--nav-active");
      }
      return true;
    }

    header.classList.add("vshanuy-desktop-header");
    header.innerHTML = desktopMarkup.trim();
    if (document.body.classList.contains("vshanuy-business-page")) {
      header
        .querySelector(".vshanuy-desktop-menu__item--activity")
        ?.classList.add("vshanuy-desktop-menu__item--nav-active");
    }
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
