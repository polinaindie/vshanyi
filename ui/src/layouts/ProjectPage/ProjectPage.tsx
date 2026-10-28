import { Fragment, type ReactNode } from 'react'
import hvylynaMovchannyaPhoto from '../../assets/projects/proekt-hvylyna-movchannya.webp'
import chekafestPhoto from '../../assets/projects/proekt-chekafest.webp'
import proshchannyaZPraporomPhoto from '../../assets/projects/proekt-proshchannya-z-praporom.webp'
import tryznaPhoto from '../../assets/projects/proekt-tryzna.webp'
import pomizhNasPhoto from '../../assets/projects/proekt-pomizh-nas.webp'
import dzerkaloPamyatiPhoto from '../../assets/projects/proekt-dzerkalo-pamyati.webp'
import vinkuvannyaPhoto from '../../assets/projects/proekt-vinkuvannya.webp'
import tseMozheButyTyshaPhoto from '../../assets/projects/proekt-tse-mozhe-buty-tysha.webp'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'
import '../MaterialPage/MaterialPage.css'
import { ProjectSlider } from './ProjectSlider'

export type ProjectMaterial = {
  label: string
  document: string
}

export type Project = {
  slug: string
  number: string
  cardTitle: string
  title: string
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  imageCaption?: string
  standfirst: string
  body: ReactNode[]
  materials: ProjectMaterial[]
}

export const projects: Project[] = [
  {
    slug: 'hvylyna-movchannya',
    number: '01',
    cardTitle: 'Хвилина мовчання',
    title: 'Хвилина мовчання',
    image: hvylynaMovchannyaPhoto,
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: 'Учасники акції з табличками на площі',
    standfirst: 'Хвилина мовчання – це ритуал подяки, пошани та памʼяті. Це символічна обʼєднавча дія, відкрита для залученості широкого кола суспільства, і покликана зберігати памʼять про російсько-українську війну, нашу спільну боротьбу за незалежність.',
    body: [
      <p>Незалежно від політичних поглядів, віросповідання, Хвилина мовчання вшановує всіх і не передбачає забарвлення певними ідеологіями, які можуть проявлятися в інших ритуалах памʼятування. Саме з цього простого і зрозумілого ритуалу почалась наша діяльність і продовжується досі. Ми щиро віримо (і вже бачимо), що Хвилина мовчання може бути підтримуючою для тих, хто втратив.</p>,
      <p>Ми пройшли довгий шлях від двох людей з картонками на Майдані до <a className="vshanuy-article__inline-link" href="https://zakon.rada.gov.ua/laws/show/4783-20" target="_blank" rel="noopener noreferrer">Закону України № 4783-IX</a>, який офіційно закріпив щоденну загальнонаціональну хвилину мовчання о 9:00. Ми багато працюємо з суспільством, розповідаючи про значення та сенси цієї хвилини. Наша мета – не примусова зупинка людей на вулиці, а глибоке розуміння, для кого і чому потрібна ця мить.</p>,
    ],
    materials: [],
  },
  {
    slug: 'chekafest',
    number: '02',
    cardTitle: 'ЧекаFest',
    title: 'ЧекаFest',
    image: chekafestPhoto,
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: 'Гості фестивалю ЧекаFest танцюють біля сцени з портретом Ірини Цибух',
    standfirst: 'ЧЕКАфест – це благодійний освітньо-музичний фестиваль памʼяті Ірини Цибух. Він створений родиною та друзями Іри ЧЕКИ Цибух. Фестиваль щорічний та проводиться у найближчих зручних датах до дня народження Ірини – 1 червня.',
    body: [
      <p>Діяльність Ірини була присвячена політиці памʼяті, меморіалізації тих, хто віддав життя за Україну, а також реформі медіа в Україні, плеканню медіаграмотності та критичного мислення у суспільстві, утвердженню української культури, зокрема через пісню. З 2022 Іра була бойовою медикинею «Госпітальєрів» і рятувала життя на лінії фронту.</p>,
      <p>ЧЕКАфест існує, щоб утвердити нові практики памʼятування: живі, людяні, персоналізовані, без кальки та без пафосу, та продовжити справу Чеки як спадщину, яку реалізують люди з її кола.</p>,
      <p>Наше завдання – творити і поширювати культуру памʼятування через освіту, музику і спільні практики так, щоб памʼять про полеглих ставала дією, підтримкою живих і ґрунтом для майбутнього.</p>,
    ],
    materials: [],
  },
  {
    slug: 'proshchannya-z-praporom',
    number: '03',
    cardTitle: 'Прощання з прапором',
    title: 'Прощання з прапором',
    image: proshchannyaZPraporomPhoto,
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: 'Вицвілі прапори України над засніженими могилами',
    standfirst: 'Прощання з прапором – це церемонія, коли державний символ завершує свою службу і ми визнаємо це з повагою. З часом прапор зношується, вигорає, рветься та втрачає вигляд. І в якийсь момент перед нами постає дуже практичне і ціннісне питання – що ж робити далі?',
    body: [
      <p>Сьогодні в Україні немає окремого закону чи чіткої державної процедури, яка б регулювала цей процес. І саме тому різні громади починають шукати свої відповіді.</p>,
      <p>Наразі ми проводимо дослідження, як цю проблему вирішують різні громади та країни, і налагоджуємо співпрацю з державою, військовими та родинами загиблих, щоб знайти саме той ритуал, який найбільше відповідатиме запиту українського суспільства.</p>,
    ],
    materials: [],
  },
  {
    slug: 'tryzna',
    number: '04',
    cardTitle: 'Тризна',
    title: 'Тризна – прощання міста із загиблими',
    image: tryznaPhoto,
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: 'Почесна варта тримає державний прапор над трунами загиблих під час прощання',
    standfirst: 'Прощання з військовим – це публічний спосіб вшанувати людину й символічно подякувати їй за службу. Прощання з містом – остання зустріч загиблого з його громадою. Це важливий, майже сакральний момент для всіх учасників, а надто для родини, яка втратила найдорожче – свою людину.',
    body: [
      <p>Ми прагнемо, щоб це прощання відбувалось однаково гідно як у великому мегаполісі, так і в маленькому селі, щоб місто прощалось шанобливо як з генералом, так і з рядовим солдатом. Тому в межах проєкту «Тризна» ми збираємо та досліджуємо досвід громад і людей, щоб розробити алгоритм із мінімально необхідних кроків, завдяки яким церемонія прощання з містом буде гідною.</p>,
      <p>Просимо всіх, хто має досвід прощання з військовими, <a className="vshanuy-article__inline-link" href="https://forms.gle/hz4xq3g1Hz4ccVAz8" target="_blank" rel="noopener noreferrer">пройти наше опитування</a>.</p>,
    ],
    materials: [],
  },
  {
    slug: 'pomizh-nas',
    number: '05',
    cardTitle: 'Поміж нас',
    title: 'Поміж нас',
    image: pomizhNasPhoto,
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: 'Лавочка з табличкою проєкту «Поміж нас» біля кавʼярні',
    standfirst: 'Загальноукраїнський проєкт «Поміж нас», започаткований ГО «Вшануй», є глибоко гуманним та важливим проєктом із вшанування памʼяті загиблих Захисників і Захисниць України, а також підтримки родин полонених та зниклих безвісти. Це тактовне нагадування суспільству про ціну нашого умовно спокійного життя.',
    body: [
      <p>Ми назвали проєкт <strong>«Поміж нас»</strong>, бо ті, про кого хочемо нагадати, у наших серцях, думках, діях і памʼяті. Поміж нас завжди, де б не були.</p>,
    ],
    materials: [
      { label: 'Інструкція, як втілити', document: 'Як реалізувати проєкт «Поміж нас»' },
      { label: 'Рекомендації для місцевої влади', document: 'Рекомендації для громад «Поміж нас»' },
      { label: 'Рекомендації для Рад родин загиблих', document: 'Рекомендації до Рад родин загиблих' }
    ],
  },
  {
    slug: 'dzerkalo-pamyati',
    number: '06',
    cardTitle: 'Дзеркало памʼяті',
    title: 'Дзеркало памʼяті',
    image: dzerkaloPamyatiPhoto,
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: 'Дзеркало памʼяті біля входу до кавʼярні в Полтаві',
    standfirst: 'Дзеркало памʼяті – проєкт, реалізований командою координаторок «Вшануй» у Полтаві. Це місце, де кожен може залишити імʼя людини, яку вбила росія, щоб вона була видимою у просторі міста.',
    body: [
      <p>У Полтаві дзеркало розміщене у кавʼярні «Благокава», а точніше ззовні закладу, де кожен, хто проходить повз, може долучитись. Люди залишають написи на папері, а потім за місяць дзеркало доповнюють новими іменами.</p>,
    ],
    materials: [
      { label: 'Інструкція, як втілити', document: 'Дзеркало памʼяті – інструкція' }
    ],
  },
  {
    slug: 'vinkuvannya',
    number: '07',
    cardTitle: 'Вінкування',
    title: 'Вінкування',
    image: vinkuvannyaPhoto,
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: 'Учасниці плетуть вінки з живих квітів за довгим столом',
    standfirst: '29 серпня 2026 року, в День памʼяті загиблих захисників та захисниць, ми відновлювали давню українську традицію вінкування на честь полеглих. Родини та друзі загиблих під розповіді про їх найщасливіші моменти власноруч створювали вінки з живих квітів. Кожна квітка та рослинка – як спомин про рідну людину: волошка – бо він мав сині очі…',
    body: [],
    materials: [
      { label: 'Вінкування для бізнесу', document: 'Вінкування для бізнесу (PDF)' },
      { label: 'Гайд, як організувати вінкування', document: 'Гайд з вінкування' }
    ],
  },
  {
    slug: 'tse-mozhe-buty-tysha',
    number: '08',
    cardTitle: 'Виставка «Це може бути тиша»',
    title: 'Виставка «Це може бути тиша»',
    image: tseMozheButyTyshaPhoto,
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: 'Жінка розповідає про експозицію виставки «Це може бути тиша» серед підвішених фотографій неба',
    imageCaption: 'Музей війни · Фото: Роман Пупенко',
    standfirst: 'Протягом вересня 2026 року у Головному корпусі Музею війни проходила виставка «Це може бути тиша» – про небо над могилами, імена полеглих та історію Хвилини мовчання. Виставку було приурочено до Дня памʼяті захисників України.',
    body: [<p key="0">29 серпня – це ще один день, коли ми згадуємо своїх і нагадуємо усім про ціну нашої Незалежності.</p>, <p key="1">Центральною експозицією виставки стала робота Вероніки Моль «Це може бути тиша» – 470 фотографій неба над могилами полеглих Захисників і Захисниць, підписаних їхніми іменами.</p>, <p key="2">Окремою частиною виставки стала історія Хвилини мовчання – від її виникнення до сучасної української практики. Авторки виставки говорять про щоденний ритуал памʼяті, його значення та про те, як спільна дія допомагає суспільству памʼятати.</p>, <p key="3">Ми так часто опускаємо очі до землі.<br />А як же небо?</p>],
    materials: [],
  },
]

export type DirectionId = 'gromada' | 'biznes' | 'derzhava' | 'suspilstvo' | 'osvita' | 'viysko' | 'mystetstvo'

export const directionFilters: { id: DirectionId; label: string }[] = [
  { id: 'gromada', label: 'Громади' },
  { id: 'biznes', label: 'Бізнес' },
  { id: 'derzhava', label: 'Держава' },
  { id: 'suspilstvo', label: 'Суспільство' },
  { id: 'osvita', label: 'Освіта' },
  { id: 'viysko', label: 'Військо' },
  { id: 'mystetstvo', label: 'Мистецтво' },
]

export const projectDirections: Record<string, DirectionId[]> = {
  'hvylyna-movchannya': ['gromada', 'biznes', 'derzhava', 'osvita'],
  chekafest: ['suspilstvo'],
  'proshchannya-z-praporom': ['gromada', 'derzhava'],
  tryzna: ['gromada'],
  'pomizh-nas': ['suspilstvo'],
  'dzerkalo-pamyati': ['suspilstvo'],
  vinkuvannya: ['suspilstvo'],
  'tse-mozhe-buty-tysha': ['mystetstvo'],
}

const directionPages: Partial<Record<DirectionId, string>> = { biznes: 'spivpratsya-z-biznesom' }

export type ProjectPageProps = {
  slug: string
  showHeader?: boolean
}

/** Page composition: єдиний шаблон проєкту на базі MaterialPage — H1, лід (коротко), обкладинка, текст (довше), «Корисні матеріали», «Інші проєкти». Жовтий-бюджет 0. */
export function ProjectPage({ slug, showHeader = true }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === slug) ?? projects[0]
  const others = projects.filter((item) => item.slug !== project.slug)

  return (
    <div className="vshanuy-article-page vshanuy-project-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-article">
        <article>
          <header className="vshanuy-article__intro vshanuy-project__intro">
            <a className="vshanuy-article__back" href="proekty.html">
              <span aria-hidden="true">←</span> Проєкти
            </a>
            <figure className="vshanuy-project__hero">
              <img
                src={project.image}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
                decoding="async"
              />
              {project.imageCaption ? <figcaption>{project.imageCaption}</figcaption> : null}
            </figure>
            <h1 className="vshanuy-article__title">{project.title}</h1>
            <dl className="vshanuy-project__passport">
              <div>
                <dt className="vshanuy-article__label">Напрями</dt>
                <dd>
                  {(projectDirections[project.slug] ?? []).map((id, index) => (
                    <Fragment key={id}>
                      {index ? ', ' : null}
                      <a href={`napryamky/${directionPages[id] ?? id}.html`}>
                        {directionFilters.find((item) => item.id === id)?.label}
                      </a>
                    </Fragment>
                  ))}
                </dd>
              </div>
            </dl>
            <p className="vshanuy-article__standfirst">{project.standfirst}</p>
          </header>

          <div className="vshanuy-article__layout">
            <div className="vshanuy-article__body">
              {project.body.length ? (
                <div className="vshanuy-article__section">
                  {project.body.map((paragraph, index) => (
                    <Fragment key={index}>{paragraph}</Fragment>
                  ))}
                </div>
              ) : null}

              {project.materials.length ? (
                <section className="vshanuy-article__sources" aria-labelledby="vshanuy-project-materials">
                  <h2 className="vshanuy-article__label" id="vshanuy-project-materials">
                    Корисні матеріали
                  </h2>
                  {project.materials.map((material) => (
                    <div key={material.label} className="vshanuy-article__sources-group">
                      <h3>{material.label}</h3>
                      <ul>
                        <li>{material.document}</li>
                      </ul>
                    </div>
                  ))}
                </section>
              ) : null}
            </div>
          </div>
        </article>

        <ProjectSlider items={others} />
      </main>

      <SiteFooter />
    </div>
  )
}
