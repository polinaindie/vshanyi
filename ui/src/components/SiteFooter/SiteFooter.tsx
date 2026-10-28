import { Logo } from '../Logo/Logo'
import '../Logo/Logo.css'

export type SiteFooterProps = {
  email?: string
}

export function SiteFooter({
  email = 'momentofhonorukraine@gmail.com',
}: SiteFooterProps) {
  return (
    <footer className="vshanuy-site-footer" aria-label="Нижня навігація та контакти">
      <div className="vshanuy-site-footer__guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="vshanuy-site-footer__grid">
        <section className="vshanuy-site-footer__column vshanuy-site-footer__column--brand" aria-label="Вшануй">
          <div className="vshanuy-site-footer__brand-lockup">
            <Logo variant="onInk" href="/" />
            <p className="vshanuy-site-footer__motto">
              Памʼятай про полеглих
              <br />
              допомагай живим
            </p>
          </div>
          <a className="vshanuy-site-footer__cta" href="pidtrymaty.html">
            Підтримати <span aria-hidden="true">→</span>
          </a>
        </section>

        <nav
          className="vshanuy-site-footer__column vshanuy-site-footer__column--sections vshanuy-site-footer__column--sections-primary"
          aria-label="Про організацію"
        >
          <ul className="vshanuy-site-footer__links">
            <li>
              <a href="pro-nas.html">Місія та цінності.</a>
            </li>
            <li>Звіт про діяльність.</li>
            <li>
              <a href="spivpratsya.html">Співпраця.</a>
            </li>
            <li>
              <a href="index.html#partners">Партнери.</a>
            </li>
            <li>
              <a href="kontakty.html">Контакти.</a>
            </li>
          </ul>
          <p className="vshanuy-site-footer__column-foot">
            © 2026 ВШАНУЙ
          </p>
        </nav>

        <nav
          className="vshanuy-site-footer__column vshanuy-site-footer__column--sections vshanuy-site-footer__column--sections-secondary"
          aria-label="Діяльність і публікації"
        >
          <ul className="vshanuy-site-footer__links">
            <li>
              <a href="diyalnist.html">Напрями роботи.</a>
            </li>
            <li>
              <a href="proekty.html">Проєкти.</a>
            </li>
            <li>
              <a href="posibnyky/">Гайди.</a>
            </li>
            <li>
              <a href="materialy.html">Публікації.</a>
            </li>
          </ul>
          <a className="vshanuy-site-footer__column-foot" href="polityka-konfidentsiynosti.html">
            Політика конфіденційності
          </a>
        </nav>

        <section
          className="vshanuy-site-footer__column vshanuy-site-footer__column--support"
          aria-label="Контакти та службова інформація"
        >
          <div className="vshanuy-site-footer__contacts">
            <ul className="vshanuy-site-footer__inline-list" aria-label="Контакти">
              <li>
                <a
                  href="https://www.instagram.com/moment_of_honor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram.
                </a>
              </li>
              <li>
                <a
                  href="https://www.threads.com/@moment_of_honor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Threads.
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/momentofhonor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook.
                </a>
              </li>
              <li>
                <a
                  className="vshanuy-site-footer__email"
                  href={`mailto:${email}`}
                >
                  написати нам
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  )
}
