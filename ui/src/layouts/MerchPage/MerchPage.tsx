import heroPhoto from '../../assets/merch/vshanuy-merch-sheet.jpg'
import phonePhoto from '../../assets/merch/vshanuy-merch-phone.jpg'
import doorPhoto from '../../assets/merch/vshanuy-merch-door.jpg'
import carPhoto from '../../assets/merch/vshanuy-merch-car.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'

export type MerchItem = {
  title: string
  photoSrc: string
  photoAlt: string
  width: number
  height: number
}

export type MerchPageProps = {
  showHeader?: boolean
  orderHref?: string
  items?: MerchItem[]
}

const defaultItems: MerchItem[] = [
  { title: 'Шильди на телефон', photoSrc: phonePhoto, photoAlt: 'Чорні обʼємні шильди «Вшануй 09:00» з жовтим написом', width: 768, height: 1024 },
  { title: 'Наліпки на двері', photoSrc: doorPhoto, photoAlt: 'Біла наліпка «Щодня 09:00 Вшануй» на скляних дверях', width: 768, height: 1024 },
  { title: 'Наліпки на авто', photoSrc: carPhoto, photoAlt: 'Біла наліпка «Щодня зупинись 09:00 Вшануй» на задньому склі авто', width: 768, height: 1024 },
]

/** Page composition: H1 + лід → загальне фото | акцент + кнопка форми → три види наліпок. Жовтий-бюджет 0 (лише hover CTA). */
export function MerchPage({
  showHeader = true,
  orderHref = 'https://docs.google.com/forms/d/e/1FAIpQLSedwTh5jXDLWiNBfxVPTscTubMBvEPFvAZjtkNJad6uSXRlbQ/viewform?usp=header',
  items = defaultItems,
}: MerchPageProps) {
  return (
    <div className="vshanuy-merch-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-merch-page__main">
        <header className="vshanuy-merch-page__intro">
          <h1 className="vshanuy-merch-page__title">Мерч.</h1>
          <p className="vshanuy-merch-page__lead">
            Щоб підтримати ГО «Вшануй», ви можете придбати мерч. Зараз у доступі є різні наліпки.
          </p>
        </header>

        <div className="vshanuy-merch-page__row">
          <figure className="vshanuy-merch-page__figure vshanuy-merch-page__hero">
            <img
              src={heroPhoto}
              alt="Аркуш наліпок «Вшануй» у руці: «Памʼятай про полеглих — допомагай живим», «Зупинись», годинник 09:00"
              width={1024}
              height={682}
              decoding="async"
            />
          </figure>

          <div className="vshanuy-merch-page__order">
            <p className="vshanuy-merch-page__accent">
              Це не просто наліпки — вони також є маркерами для оточення.
            </p>
            <a className="vshanuy-merch-page__cta" href={orderHref} target="_blank" rel="noopener noreferrer">
              Замовити наліпки <span aria-hidden="true">→</span>
              <span className="vshanuy-visually-hidden"> (відкриється в новій вкладці)</span>
            </a>
          </div>
        </div>

        <section className="vshanuy-merch-page__section" aria-labelledby="merch-items-label">
          <h2 className="vshanuy-merch-page__label" id="merch-items-label">
            Що є в доступі
          </h2>
          <ul className="vshanuy-merch-page__items">
            {items.map((item) => (
              <li key={item.title}>
                <figure className="vshanuy-merch-page__figure">
                  <img
                    src={item.photoSrc}
                    alt={item.photoAlt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="vshanuy-merch-page__item-title">{item.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
