import collabPhoto from '../../assets/spivpratsya.jpg'
import volunteerPhoto from '../../assets/spivpratsya-volonter.jpg'
import communityPhoto from '../../assets/spivpratsya-gromada.jpg'
import partnerPhoto from '../../assets/projects/vinkuvannya-komanda.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'

export type CollaborationFormat = {
  /** Якір секції: `volonter` → `#volonter`. */
  id: string
  title: string
  /** Без фото показується заглушка. */
  image?: string
  alt?: string
  paragraphs: string[]
  cta: {
    label: string
    href: string
  }
  more?: {
    label: string
    href: string
  }
}

export type CollaborationPageProps = {
  showHeader?: boolean
  email?: string
  formats?: CollaborationFormat[]
}

export const collaborationFormats: CollaborationFormat[] = [
  {
    id: 'volonter',
    title: 'Стати волонтером',
    image: volunteerPhoto,
    alt: 'Жінка в чорному й темних окулярах тримає над головою картонну табличку «Стою за всіх» на тлі трамвая',
    paragraphs: [
      'Проєкти «Вшануй» відбуваються в різних містах України, і часто для їх реалізації нам потрібні люди, готові допомогти на місці.',
      'Волонтерство може бути різним: допомога під час подій і меморіальних практик, комунікація з громадами, організаційні завдання, фото й відео, робота з матеріалами, дослідження або інша професійна підтримка.',
      'Не обовʼязково мати спеціальний досвід. Для нас важливі уважність до людей, повага до памʼяті загиблих та готовність відповідально робити свою частину роботи.',
      'Якщо ви хочете долучитися до команди «Вшануй», залиште свої контакти у формі зворотного звʼязку — ми напишемо, коли зʼявиться проєкт або завдання, у якому ваша допомога буде потрібна.',
    ],
    cta: {
      label: 'Залишити контакти',
      href: 'kontakty.html?tema=volunteer#contact-form',
    },
  },
  {
    id: 'partner',
    title: 'Стати партнером',
    image: partnerPhoto,
    alt: 'Учасники вінкування стоять у ряд у залі, двоє тримають вінки й букети з польових квітів і соняшників',
    paragraphs: [
      'Культура памʼяті формується не однією організацією. Вона виникає там, де громади, медіа, бізнес, культурні й освітні інституції та небайдужі люди обʼєднують свої можливості заради гідного вшанування загиблих.',
      'Ми співпрацюємо з партнерами у створенні меморіальних практик, інформаційних кампаній, публічних подій, досліджень та проєктів, які допомагають говорити про памʼять уважно, сучасно й без знеособлення.',
      'Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації. Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й памʼять.',
    ],
    cta: {
      label: 'Залишити контакти',
      href: 'kontakty.html?tema=partner#contact-form',
    },
    more: {
      label: 'Наші партнери',
      href: 'partnery.html',
    },
  },
  {
    id: 'gromada',
    title: 'Запросити нас в громаду',
    image: communityPhoto,
    alt: 'Учасники зустрічі сидять за столами в залі й слухають жінку, яка стоїть спиною до камери',
    paragraphs: [
      'Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики памʼяті.',
      'Під час поїздок ми зустрічаємося з родинами загиблих, місцевими активістами, представниками міста та області, відвідуємо кладовища, меморіали та інші місця памʼяті, досліджуємо вже наявні ритуали й практики.',
      'Під час таких поїздок не лише збираємо досвід, а й допомагаємо людям знаходити одне одного. Обмінюємося рішеннями, які вже працюють в інших містах, говоримо про різні практики та намагаємося зрозуміти, чому одна й та сама ідея може працювати в одній громаді й не працювати в іншій.',
    ],
    cta: {
      label: 'Залишити контакти',
      href: 'kontakty.html?tema=community#contact-form',
    },
    more: {
      label: 'Робота з громадами',
      href: 'napryamky/gromada.html',
    },
  },
]

/** Page composition: H1 → вступ (фото кол. 1–2 | акцент кол. 3–4) → нумеровані формати → пошта. Жовтий-бюджет 0 (лише hover CTA). */
export function CollaborationPage({
  showHeader = true,
  email = 'momentofhonorukraine@gmail.com',
  formats = collaborationFormats,
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
            </div>
          </div>
        </section>

        {formats.length > 0 ? (
          <div className="vshanuy-collab-page__formats">
            {formats.map((format) => (
              <section
                key={format.id}
                className="vshanuy-collab-page__format"
                id={format.id}
                aria-labelledby={`${format.id}-title`}
              >
                <h2 className="vshanuy-collab-page__format-title" id={`${format.id}-title`}>
                  {format.title}
                </h2>
                <figure className="vshanuy-collab-page__figure">
                  {format.image ? (
                    <img
                      src={format.image}
                      alt={format.alt ?? ''}
                      width={1024}
                      height={682}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="vshanuy-collab-page__placeholder" aria-hidden="true">
                      Фото
                    </div>
                  )}
                </figure>
                <div className="vshanuy-collab-page__prose">
                  {format.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="vshanuy-collab-page__actions">
                    <a className="vshanuy-collab-page__cta" href={format.cta.href}>
                      {format.cta.label} <span aria-hidden="true">→</span>
                    </a>
                    {format.more ? (
                      <a className="vshanuy-collab-page__more" href={format.more.href}>
                        <span className="vshanuy-collab-page__more-text">{format.more.label}</span>{' '}
                        <span className="vshanuy-collab-page__more-arrow" aria-hidden="true">→</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </section>
            ))}
          </div>
        ) : null}

        <section className="vshanuy-collab-page__closing" aria-label="Звʼязок">
          <div className="vshanuy-collab-page__prose">
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
        </section>
      </main>

      <SiteFooter email={email} />
    </div>
  )
}
