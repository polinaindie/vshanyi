import { useId, useState, type ReactNode } from 'react'
import { ArchiveGrid } from '../../components/ArchiveGrid/ArchiveGrid'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import { PhotoCaption, type PhotoCaptionProps } from '../../components/PhotoCaption/PhotoCaption'
import '../../components/ArchiveGrid/ArchiveGrid.css'
import '../../components/SectionLabel/SectionLabel.css'
import '../../components/PhotoCaption/PhotoCaption.css'

export type DirectionPhoto = {
  src: string
  alt?: string
  caption?: PhotoCaptionProps
}

export type DirectionRegisterItem = {
  index: string
  title: string
  short: string
  /** Довший / інший контент у expand. Не дублювати short. */
  detail?: ReactNode
  cities?: string
  photo?: DirectionPhoto
}

export type DirectionsBridgeLink = {
  label: string
  href?: string
}

export type DirectionsRegisterProps = {
  labelIndex?: string
  label?: string
  labelTrailing?: string
  title?: string
  intro?: string
  items?: DirectionRegisterItem[]
  bridgeTitle?: string
  bridgeLinks?: DirectionsBridgeLink[]
}

function hasPanelContent(item: DirectionRegisterItem): boolean {
  return item.detail != null || Boolean(item.cities) || Boolean(item.photo?.src)
}

const defaultItems: DirectionRegisterItem[] = [
  {
    index: '01',
    title: 'Громади',
    short:
      'Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики памʼяті. Поширюємо ініціативи в громадах, розробляємо ритуали памʼяті та прощання.',
    detail: (
      <>
        <p>
          Працюємо безпосередньо в громадах і їздимо в регіони, щоб бачити, як памʼять про загиблих
          живе на місцях. Зустрічаємося з родинами загиблих, місцевими активістами, представниками
          міста та області, відвідуємо кладовища, меморіали та інші місця памʼяті, досліджуємо вже
          наявні ритуали й практики.
        </p>
        <p>
          Під час таких поїздок не лише збираємо досвід, а й допомагаємо людям знаходити одне одного.
          Обмінюємося рішеннями, які вже працюють в інших містах. Поступово формуємо мережу людей,
          які займаються памʼяттю на місцях. На основі побаченого розробляємо й поширюємо нові
          практики памʼяті чи цілі ритуали прощання.
        </p>
        <p>
          Дослідили Харків, Запоріжжя, Суми, Павлоград, Миколаїв, Одеса, Вінниця, Полтава,
          Кропивницький, Львів, Чернігів — якщо хочете, щоб ми поділились досвідом у цих містах,
          звертайтесь.
        </p>
      </>
    ),
    cities:
      'Харків · Запоріжжя · Суми · Павлоград · Миколаїв · Одеса · Вінниця · Полтава · Кропивницький · Львів · Чернігів',
  },
  {
    index: '02',
    title: 'Бізнес',
    short:
      'Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації. Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й памʼять.',
    detail: (
      <>
        <p>
          А як зробити памʼять видимою у своєму бізнесі? До цього питання часто приходять компанії та
          організації. У більшості є чоловіки і жінки, які пішли до війська. І є ті, хто загинули. І
          також є ті, чиї життя забрала російська атака на робочому місці. Сьогодні це частина
          корпоративної соціальної відповідальності на рівні із ветеранською політикою.
        </p>
        <p className="vshanuy-directions-register__lead-list">Чим можемо бути корисні:</p>
        <ol className="vshanuy-directions-register__ordered">
          <li>
            Дорожня карта для бізнесу аби впровадити Хвилину мовчання — матеріали, звук-оголошення
            (готовий або запис під бізнес:{' '}
            <a href="https://t.me/moment_of_honor">tg moment_of_honor</a>,{' '}
            <a href="mailto:momentofhonorukraine@gmail.com">momentofhonorukraine@gmail.com</a>),
            постери, банери для сайту (приклад коду:{' '}
            <a href="https://www.work.ua/minute-of-silence">work.ua/minute-of-silence</a>).
          </li>
          <li>
            {/* PLACEHOLDER: текст консультації в PDF обірваний */}
            Консультація в темі памʼяті — допомагаємо продумати доречний і етичний формат для
            команди.
          </li>
        </ol>
      </>
    ),
  },
  {
    index: '03',
    title: 'Держава',
    short:
      'Передаємо державним інституціям напрацьовані практики, рекомендації та інструкції й працюємо над їхнім системним впровадженням.',
  },
  {
    index: '04',
    title: 'Суспільство',
    short:
      'Говоримо про складні й важливі теми, повʼязані з памʼяттю про війну: як прощатися, як говорити про загиблих, як уникати знеособлення втрат.',
    detail: (
      <p>
        Порушуємо теми, про які часто складно говорити: якими мають бути публічні прощання із
        загиблими військовими і чи мають вони бути взагалі, хто і як має вшановувати загиблих, як
        створювати меморіали, що не травмують і не відштовхують. Як говорити з дітьми про втрату. Це
        відбувається через публічні комунікації, лекції, розмови — шукаємо мову, якою суспільство
        може говорити про памʼять.
      </p>
    ),
  },
  {
    index: '05',
    title: 'Освіта',
    short:
      'Досліджуємо, як діти, підлітки та вчителі сприймають тему памʼяті й якою хочуть бачити розмову про неї в школі. На основі цих досліджень розробляємо практичні матеріали для освітян, проводимо лекції та зустрічі, створюємо документи-опори для роботи з темою памʼяті.',
  },
  {
    index: '06',
    title: 'Військо',
    short:
      'Досліджуємо військові ритуали й традиції та шукаємо способи зберігати їхню тяглість у сучасному українському війську. Працюємо над створенням церемоній прощання з військовослужбовцями, які можуть бути адаптовані та впроваджені в громадах по всій Україні.',
  },
  {
    index: '07',
    title: 'Мистецтво',
    short: 'Використовуємо мистецтво як спосіб говорити про памʼять, людей і наш досвід.',
  },
]

const defaultBridgeLinks: DirectionsBridgeLink[] = [
  { label: 'Для громад', href: '#' },
  { label: 'Для бізнесу', href: '#' },
]

export function DirectionsRegister({
  labelIndex = '01',
  label = 'НАПРЯМИ ДІЯЛЬНОСТІ',
  labelTrailing = 'РЕЄСТР →',
  title = 'Напрями діяльності',
  intro = 'Сім напрямів роботи — від громад і бізнесу до освіти, війська та мистецтва.',
  items = defaultItems,
  bridgeTitle = 'Діяльність →',
  bridgeLinks = defaultBridgeLinks,
}: DirectionsRegisterProps) {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <ArchiveGrid className="vshanuy-directions-register-grid">
      <section
        className="vshanuy-directions-register"
        aria-labelledby={`${baseId}-title`}
      >
        <header className="vshanuy-directions-register__intro">
          <SectionLabel index={labelIndex} trailing={labelTrailing}>
            {label}
          </SectionLabel>
          <h1 id={`${baseId}-title`}>{title}</h1>
          <p className="vshanuy-directions-register__frame">{intro}</p>
        </header>

        <div className="vshanuy-directions-register__list">
          {items.map((item, index) => {
            const expandable = hasPanelContent(item)
            const isOpen = expandable && open === index
            const panelId = `${baseId}-panel-${item.index}`
            const triggerId = `${baseId}-trigger-${item.index}`

            return (
              <div
                key={item.index}
                className="vshanuy-directions-register__row"
                data-state={expandable ? (isOpen ? 'open' : 'closed') : 'static'}
              >
                {expandable ? (
                  <button
                    type="button"
                    id={triggerId}
                    className="vshanuy-directions-register__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="vshanuy-directions-register__index">{item.index}</span>
                    <span className="vshanuy-directions-register__title-wrap">
                      <span className="vshanuy-directions-register__title">{item.title}</span>
                      <span className="vshanuy-directions-register__short">{item.short}</span>
                    </span>
                    <span className="vshanuy-directions-register__toggle" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                ) : (
                  <div className="vshanuy-directions-register__trigger vshanuy-directions-register__trigger--static">
                    <span className="vshanuy-directions-register__index">{item.index}</span>
                    <span className="vshanuy-directions-register__title-wrap">
                      <span className="vshanuy-directions-register__title">{item.title}</span>
                      <span className="vshanuy-directions-register__short">{item.short}</span>
                    </span>
                  </div>
                )}

                {expandable ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="vshanuy-directions-register__panel"
                    hidden={!isOpen}
                  >
                    {item.detail ? (
                      <div className="vshanuy-directions-register__detail">{item.detail}</div>
                    ) : null}
                    {item.cities ? (
                      <p className="vshanuy-directions-register__cities">{item.cities}</p>
                    ) : null}
                    {item.photo?.src ? (
                      <figure className="vshanuy-directions-register__photo">
                        <img src={item.photo.src} alt={item.photo.alt ?? ''} />
                        {item.photo.caption ? <PhotoCaption {...item.photo.caption} /> : null}
                      </figure>
                    ) : null}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        <aside className="vshanuy-directions-register__bridge" aria-label={bridgeTitle}>
          <p className="vshanuy-directions-register__bridge-title">{bridgeTitle}</p>
          <ul className="vshanuy-directions-register__bridge-links">
            {bridgeLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href || '#'}>{link.label}</a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </ArchiveGrid>
  )
}
