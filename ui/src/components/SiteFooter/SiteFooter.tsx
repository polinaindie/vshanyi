import { Logo } from '../Logo/Logo'
import '../Logo/Logo.css'

export type SiteFooterProps = {
  email?: string
}

export function SiteFooter({ email = 'hello@vshanuy.org' }: SiteFooterProps) {
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
          <span className="vshanuy-site-footer__cta">
            Підтримати <span aria-hidden="true">→</span>
          </span>
        </section>

        <section className="vshanuy-site-footer__column" aria-label="Контакти">
          <h2 className="vshanuy-site-footer__label">КОНТАКТИ</h2>
          <ul className="vshanuy-site-footer__inline-list">
            <li>Instagram.</li>
            <li>Telegram.</li>
            <li>Facebook.</li>
          </ul>
          <a className="vshanuy-site-footer__email" href={`mailto:${email}`}>
            {email}
          </a>
        </section>

        <nav className="vshanuy-site-footer__column" aria-label="Розділи сайту">
          <h2 className="vshanuy-site-footer__label">НАВІГАЦІЯ</h2>
          <ul className="vshanuy-site-footer__links">
            {['Про нас.', 'Наша діяльність.', 'Блог.', 'Співпраця.', 'Партнери.', 'Контакти.'].map(
              (item) => (
                <li key={item}>{item}</li>
              ),
            )}
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
