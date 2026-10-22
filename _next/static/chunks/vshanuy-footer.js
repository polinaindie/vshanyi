(() => {
  const footerMarkup = `
    <footer class="vshanuy-site-footer" aria-label="Нижня навігація та контакти">
      <div class="vshanuy-site-footer__guides" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="vshanuy-site-footer__grid">
        <section class="vshanuy-site-footer__column vshanuy-site-footer__column--brand" aria-label="Вшануй">
          <div class="vshanuy-site-footer__brand-lockup">
            <a class="vshanuy-site-footer__wordmark" href="./" aria-label="Вшануй. 09:00 — на головну">
              <img src="_next/static/media/vshanuy-original-logo.svg" alt="">
            </a>
            <p class="vshanuy-site-footer__motto">Пам'ятай про полеглих<br>допомагай живим</p>
          </div>
          <a class="vshanuy-site-footer__cta" href="https://send.monobank.ua/jar/7rme78odM9" target="_blank" rel="noopener noreferrer">Підтримати <span aria-hidden="true">→</span></a>
        </section>

        <section class="vshanuy-site-footer__column vshanuy-site-footer__column--contacts" aria-label="Контакти">
          <h2 class="vshanuy-site-footer__label">КОНТАКТИ</h2>
          <ul class="vshanuy-site-footer__inline-list" aria-label="Соціальні мережі">
            <li><a href="https://www.instagram.com/moment_of_honor/" target="_blank" rel="noopener noreferrer">Instagram.</a></li>
            <li><a href="https://www.threads.com/@moment_of_honor" target="_blank" rel="noopener noreferrer">Threads.</a></li>
            <li><a href="https://www.facebook.com/momentofhonor" target="_blank" rel="noopener noreferrer">Facebook.</a></li>
          </ul>
          <a class="vshanuy-site-footer__email" href="mailto:momentofhonorukraine@gmail.com">momentofhonorukraine@<wbr>gmail.com</a>
        </section>

        <nav class="vshanuy-site-footer__column vshanuy-site-footer__column--sections" aria-label="Розділи сайту">
          <h2 class="vshanuy-site-footer__label">НАВІГАЦІЯ</h2>
          <ul class="vshanuy-site-footer__links">
            <li><span class="vshanuy-dead-link">Про нас.</span></li>
            <li><span class="vshanuy-dead-link">Наша діяльність.</span></li>
            <li><span class="vshanuy-dead-link">Блог.</span></li>
            <li><span class="vshanuy-dead-link">Співпраця.</span></li>
            <li><span class="vshanuy-dead-link">Партнери.</span></li>
            <li><a href="kontakty.html">Контакти.</a></li>
          </ul>
        </nav>

        <section class="vshanuy-site-footer__column vshanuy-site-footer__column--support" aria-label="Службова інформація">
          <div class="vshanuy-site-footer__meta">
          <p>© 2026 ВШАНУЙ <span aria-hidden="true">·</span> Київ <span aria-hidden="true">·</span> Україна</p>
          <span class="vshanuy-dead-link">Політика конфіденційності</span>
          </div>
          <div class="vshanuy-site-footer__developer">
            <a href="https://opentech.softserveinc.com/" target="_blank" rel="noopener noreferrer" aria-label="Розроблено в OpenTech і SoftServe">
              <img src="_next/static/media/OpenTech.svg" alt="">
            </a>
          </div>
        </section>
      </div>
    </footer>
  `;

  /** Rebuild project track if hydration nested cards inside each other. */
  const fixProjectsTrack = () => {
    const section = document.querySelector(
      'section[data-block-type="blockSelectedProjects"]',
    );
    if (!section) return false;

    const flex = section.querySelector(".will-change-transform");
    if (!flex) return false;

    const nestedCount = section.querySelectorAll(
      'a[class*="group/link"] a[class*="group/link"]',
    ).length;
    if (!nestedCount && section.dataset.vshanuyProjectsFixed === "1") {
      return true;
    }
    if (!nestedCount) {
      section.dataset.vshanuyProjectsFixed = "1";
      return true;
    }

    const byHref = new Map();
    section.querySelectorAll('a[href*="napryamky/"]').forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (!href) return;
      // Keep the outermost occurrence for each href
      if (!byHref.has(href) || anchor.querySelector('a[href*="napryamky/"]')) {
        byHref.set(href, anchor);
      }
    });

    const cards = [...byHref.values()].map((anchor) => {
      const clone = anchor.cloneNode(true);
      clone.querySelectorAll('a[href*="napryamky/"]').forEach((child) => {
        child.remove();
      });
      // MotionReveal opacity may never fire on cloned nodes
      clone.querySelectorAll("span[style]").forEach((span) => {
        span.style.opacity = "1";
        span.style.transform = "none";
      });
      return clone;
    });

    flex.replaceChildren(
      ...cards.map((card, index) => {
        const slide = document.createElement("div");
        slide.className = "group/slide flex-[0_0_50%] lg:flex-[0_0_25%]";
        const pad = document.createElement("div");
        pad.className = "p-4";
        if (index === 0) pad.classList.add("group-first/slide:pl-0");
        if (index === cards.length - 1) pad.classList.add("group-last/slide:pr-0");
        pad.appendChild(card);
        slide.appendChild(pad);
        return slide;
      }),
    );

    section.dataset.vshanuyProjectsFixed = "1";
    window.dispatchEvent(new Event("resize"));
    return true;
  };

  const mount = () => {
    document.querySelector(".about-vshanuy")?.closest("section")?.setAttribute("id", "about");
    document
      .querySelector('section[data-block-type="blockSelectedProjects"]')
      ?.setAttribute("id", "projects");
    document
      .querySelector('section[data-block-type="blockArticleOverview"]')
      ?.setAttribute("id", "articles");
    document.querySelector(".vshanuy-partners")?.setAttribute("id", "partners");

    fixProjectsTrack();

    const currentFooter = document.querySelector("footer");
    if (!currentFooter) return false;
    if (currentFooter.classList.contains("vshanuy-site-footer")) return true;

    const template = document.createElement("template");
    template.innerHTML = footerMarkup.trim();
    currentFooter.replaceWith(template.content.firstElementChild);
    return true;
  };

  const start = () => {
    mount();
    const observer = new MutationObserver(mount);
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
    // Hydration can finish after first paint — re-check a few times
    [300, 800, 1600, 3000].forEach((ms) => {
      window.setTimeout(fixProjectsTrack, ms);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
