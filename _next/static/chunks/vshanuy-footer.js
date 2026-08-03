(() => {
  const footerMarkup = `
    <footer class="vshanuy-site-footer" aria-label="Нижня навігація та контакти">
      <div class="vshanuy-site-footer__guides" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="vshanuy-site-footer__grid">
        <section class="vshanuy-site-footer__column vshanuy-site-footer__column--brand" aria-label="Вшануй">
          <a class="vshanuy-site-footer__wordmark" href="./" aria-label="Вшануй. 09:00 — на головну">
            <img src="_next/static/media/vshanuy-original-logo.svg" alt="">
          </a>
          <div class="vshanuy-site-footer__brand-action">
            <p class="vshanuy-site-footer__motto">Пам'ятай про полеглих<br>допомагай живим</p>
            <a class="vshanuy-site-footer__cta" href="contacto.html?topic=donate">Підтримати <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section class="vshanuy-site-footer__column vshanuy-site-footer__column--contacts" aria-label="Контакти">
          <h2 class="vshanuy-site-footer__label">КОНТАКТИ</h2>
          <ul class="vshanuy-site-footer__inline-list" aria-label="Соціальні мережі">
            <li><a href="https://www.instagram.com/moment_of_honor/" target="_blank" rel="noopener noreferrer">Instagram.</a></li>
            <li><a href="contacto.html#social">Telegram.</a></li>
            <li><a href="https://www.facebook.com/momentofhonor" target="_blank" rel="noopener noreferrer">Facebook.</a></li>
          </ul>
          <a class="vshanuy-site-footer__email" href="mailto:hello@vshanuy.org">hello@vshanuy.org</a>
        </section>

        <nav class="vshanuy-site-footer__column vshanuy-site-footer__column--sections" aria-label="Розділи сайту">
          <h2 class="vshanuy-site-footer__label">НАВІГАЦІЯ</h2>
          <ul class="vshanuy-site-footer__links">
            <li><a href="nosotros.html">Про нас.</a></li>
            <li><a href="#projects">Наша діяльність.</a></li>
            <li><a href="#articles">Блог.</a></li>
            <li><a href="contacto.html">Співпраця.</a></li>
            <li><a href="#partners">Партнери.</a></li>
            <li><a href="contacto.html">Контакти.</a></li>
          </ul>
        </nav>

        <section class="vshanuy-site-footer__column vshanuy-site-footer__column--support" aria-label="Службова інформація">
          <div class="vshanuy-site-footer__meta">
          <p>© 2026 ВШАНУЙ <span aria-hidden="true">·</span> Київ <span aria-hidden="true">·</span> Україна</p>
          <a href="legal/politica-de-privacidad.html">Політика конфіденційності</a>
          </div>
          <div class="vshanuy-site-footer__developer">
            <img src="_next/static/media/OpenTech.svg" alt="Розроблено в OpenTech і SoftServe">
          </div>
        </section>
      </div>
    </footer>
  `;

  const mount = () => {
    document.querySelector(".about-vshanuy")?.closest("section")?.setAttribute("id", "about");
    document
      .querySelector('section[data-block-type="blockSelectedProjects"]')
      ?.setAttribute("id", "projects");
    document
      .querySelector('section[data-block-type="blockArticleOverview"]')
      ?.setAttribute("id", "articles");
    document.querySelector(".vshanuy-partners")?.setAttribute("id", "partners");

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
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
