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
              Пам'ятай про полеглих
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
              <a href="pro-nas.html">Хто ми.</a>
            </li>
            <li>Звіт про діяльність.</li>
            <li>
              <a href="merch.html">Мерч.</a>
            </li>
            <li>
              <a href="spivpratsya.html">Співпраця.</a>
            </li>
          </ul>
          <p className="vshanuy-site-footer__column-foot">
            © 2026 ВШАНУЙ <span aria-hidden="true">·</span> Київ{' '}
            <span aria-hidden="true">·</span> Україна
          </p>
        </nav>

        <nav
          className="vshanuy-site-footer__column vshanuy-site-footer__column--sections vshanuy-site-footer__column--sections-secondary"
          aria-label="Діяльність і матеріали"
        >
          <ul className="vshanuy-site-footer__links">
            <li>
              <a href="diyalnist.html">Напрямки роботи.</a>
            </li>
            <li>
              <a href="proekty.html">Проєкти.</a>
            </li>
            <li>
              <a href="posibnyky/">Посібники.</a>
            </li>
            <li>
              <a href="materialy.html">Матеріали.</a>
            </li>
          </ul>
          <span className="vshanuy-site-footer__column-foot">
            Політика конфіденційності
          </span>
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
