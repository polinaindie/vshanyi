import memorialLogo from '../../assets/partners/memorial.svg'
import nvmkLogo from '../../assets/partners/nvmk.svg'
import starlightLogo from '../../assets/partners/starlight.svg'
import suspilneLogo from '../../assets/partners/suspilne.svg'
import uinpLogo from '../../assets/partners/uinp.png'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'

export type Partner = {
  name: string
  logo: string
  href: string
  /** Широкий локап (НВМК): інші межі розміру лого. */
  wide?: boolean
}

export type PartnersPageProps = {
  showHeader?: boolean
  partners?: Partner[]
}

export const partners: Partner[] = [
  {
    name: 'Український інститут національної памʼяті',
    logo: uinpLogo,
    href: 'https://uinp.gov.ua/',
  },
  {
    name: 'Starlight Media',
    logo: starlightLogo,
    href: 'https://starlight.media/',
  },
  {
    name: 'Суспільне Мовлення',
    logo: suspilneLogo,
    href: 'https://corp.suspilne.media/',
  },
  {
    name: 'Платформа памʼяті Меморіал',
    logo: memorialLogo,
    href: 'https://memorial.ua/',
  },
  {
    name: 'Національне військове меморіальне кладовище',
    logo: nvmkLogo,
    href: 'https://nmmc.gov.ua/',
    wide: true,
  },
]

/** Page composition: H1 → текст у кол. 2–3 (акцент + абзац) → сітка логотипів 2 → 4 колонки. Жовтий-бюджет 0. */
export function PartnersPage({ showHeader = true, partners: items = partners }: PartnersPageProps) {
  return (
    <div className="vshanuy-partners-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-partners-page__main">
        <header className="vshanuy-partners-page__intro">
          <h1 className="vshanuy-partners-page__title" id="partners-title">
            Партнери.
          </h1>
        </header>

        <div className="vshanuy-partners-page__section">
          <div className="vshanuy-partners-page__split">
            <div className="vshanuy-partners-page__prose">
              <p className="vshanuy-partners-page__accent">
                Культура памʼяті формується не однією організацією. Вона виникає там, де громади,
                медіа, бізнес, культурні й освітні інституції та небайдужі люди обʼєднують свої
                можливості заради гідного вшанування загиблих.
              </p>
              <p>
                Ми співпрацюємо з партнерами у створенні меморіальних практик, інформаційних
                кампаній, публічних подій, досліджень та проєктів, які допомагають говорити про
                памʼять уважно, сучасно й без знеособлення.
              </p>
            </div>
          </div>
        </div>

        {items.length > 0 ? (
          <section className="vshanuy-partners-page__logos" aria-labelledby="partners-title">
            <ul className="vshanuy-partners-page__list">
              {items.map((partner) => (
                <li
                  key={partner.href}
                  className={`vshanuy-partners-page__item${
                    partner.wide ? ' vshanuy-partners-page__item--wide' : ''
                  }`}
                >
                  <a
                    className="vshanuy-partners-page__link"
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={partner.logo} alt="" loading="lazy" decoding="async" />
                    <span className="vshanuy-visually-hidden">
                      {partner.name} (відкриється в новій вкладці)
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </div>
  )
}
