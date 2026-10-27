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
        <section className="vshanuy-site-footer__column" aria-label="Вшануй">
          <div className="vshanuy-site-footer__brand-lockup">
            <Logo variant="onInk" href="/" />
            <p className="vshanuy-site-footer__motto">
              Пам'ятай про полеглих
              <br />
              допомагай живим
            </p>
          </div>
          <a
            className="vshanuy-site-footer__cta"
            href="pidtrymaty.html"
          >
            Підтримати <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className="vshanuy-site-footer__column" aria-label="Контакти">
          <h2 className="vshanuy-site-footer__label">КОНТАКТИ</h2>
          <ul className="vshanuy-site-footer__inline-list">
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
          </ul>
          <a className="vshanuy-site-footer__email" href={`mailto:${email}`}>
            {email}
          </a>
        </section>

        <nav className="vshanuy-site-footer__column" aria-label="Розділи сайту">
          <h2 className="vshanuy-site-footer__label">НАВІГАЦІЯ</h2>
          <ul className="vshanuy-site-footer__links">
            <li>
              <a href="pro-nas.html">Про нас.</a>
            </li>
            <li>
              <a href="diyalnist.html">Наша діяльність.</a>
            </li>
            <li>
              <a href="proekty.html">Проєкти.</a>
            </li>
            <li>
              <a href="materialy.html">Матеріали.</a>
            </li>
            <li>Співпраця.</li>
            <li>Партнери.</li>
            <li>
              <a href="kontakty.html">Контакти.</a>
            </li>
          </ul>
        </nav>

        <section className="vshanuy-site-footer__column" aria-label="Службова інформація">
          <div className="vshanuy-site-footer__meta">
            <p>
              © 2026 ВШАНУЙ <span aria-hidden="true">·</span> Київ{' '}
              <span aria-hidden="true">·</span> Україна
            </p>
            <span>Політика конфіденційності</span>
          </div>
        </section>
      </div>
    </footer>
  )
}
