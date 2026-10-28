import collabPhoto from '../../assets/spivpratsya.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'

export type CollaborationPageProps = {
  showHeader?: boolean
  email?: string
}

/** Page composition: H1 → фото (кол. 1–2) | проза + пошта (кол. 3–4). Жовтий-бюджет 0. */
export function CollaborationPage({
  showHeader = true,
  email = 'momentofhonorukraine@gmail.com',
}: CollaborationPageProps) {
  const [mailbox, domain] = email.split('@')

  return (
    <div className="vshanuy-collab-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-collab-page__main">
        <header className="vshanuy-collab-page__intro">
          <h1 className="vshanuy-collab-page__title" id="collab-title">
            Співпраця.
          </h1>
        </header>

        <section className="vshanuy-collab-page__section" aria-labelledby="collab-title">
          <div className="vshanuy-collab-page__split">
            <figure className="vshanuy-collab-page__figure">
              <img
                src={collabPhoto}
                alt="Група людей із картонними табличками «Хвилина мовчання» та «Зупинись. Вийди з авто. Вшануй» перед входом до будівлі з написом «ЦУМ»"
                width={1024}
                height={682}
                decoding="async"
              />
            </figure>
            <div className="vshanuy-collab-page__prose">
              <p className="vshanuy-collab-page__accent">
                «Вшануй» відкрита до різних форм співпраці — з людьми, громадами, волонтерами,
                організаціями, бізнесами та медіа. Для нас важливо, щоб памʼять про загиблих Захисників і
                Захисниць залишалася живою — не лише в датах і церемоніях, а й у щоденній культурі
                вдячності та взаємної турботи.
              </p>
              <p>
                Якщо серед запропонованих форматів ви не знайшли того, що відгукується саме вам, або
                маєте власну ідею, напишіть нам:
              </p>
              <ul className="vshanuy-collab-page__list">
                <li>
                  <a
                    className="vshanuy-collab-page__link vshanuy-collab-page__link--primary"
                    href={`mailto:${email}`}
                  >
                    <span className="vshanuy-collab-page__service">Пошта</span>
                    <span className="vshanuy-collab-page__value">
                      {domain ? (
                        <>
                          {mailbox}
                          <wbr />@{domain}
                        </>
                      ) : (
                        email
                      )}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter email={email} />
    </div>
  )
}
