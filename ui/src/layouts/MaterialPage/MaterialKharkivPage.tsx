import { useEffect, useState } from 'react'
import coverPhoto from '../../assets/materials/vshanuy-material-kharkiv.jpg'
import benchPhoto from '../../assets/materials/kharkiv/pomizh-nas-lavka.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { defaultMaterials } from '../MaterialsPage/MaterialsPage'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'

export type MaterialKharkivPageProps = {
  showHeader?: boolean
}

const sectionIds = [
  'miskyi-prostir',
  'suchasna-viyna',
  'ne-lyshe-pamyatnykamy',
  'tseremoniya-proshchannya',
  'prapory',
  'povtoryty',
]

const currentHref = 'materialy/doslidzhennya-kharkiv.html'
const related = defaultMaterials.filter((material) => material.href !== currentHref)

/** Page composition: шаблон MaterialPage для дослідження — col 1 sticky зміст (без автора), cols 2–3 текст із розділами, фото «Поміж нас», завершальна цитата. Жовтий-бюджет 0. */
export function MaterialKharkivPage({ showHeader = true }: MaterialKharkivPageProps) {
  const [current, setCurrent] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const offset = window.innerHeight * 0.35
      let next: string | null = null
      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= offset) next = id
      })
      setCurrent(next)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="vshanuy-article-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-article">
        <article>
          <header className="vshanuy-article__intro">
            <a className="vshanuy-article__back" href="materialy.html"><span aria-hidden="true">←</span> Публікації</a>
            <p className="vshanuy-article__tag">Дослідження <span aria-hidden="true">·</span> м. Харків</p>
            <h1 className="vshanuy-article__title">Дослідження міських практик памʼяті, прощання та меморіалізації в Харкові</h1>
            <p className="vshanuy-article__standfirst">Як Харків памʼятає своїх? Що ми побачили, дізналися та зафіксували під час поїздки до Харкова.</p>
          </header>

          <figure className="vshanuy-article__cover">
            <img src={coverPhoto} alt="Молоді люди тримають саморобні плакати «Зупинись» і «Памʼятай про полеглих»" width="1024" height="682" decoding="async"/>
          </figure>

          <div className="vshanuy-article__layout">
            <aside className="vshanuy-article__aside">
              <div className="vshanuy-article__aside-inner">
                <nav className="vshanuy-article__toc" aria-labelledby="vshanuy-article-toc">
                  <p className="vshanuy-article__label" id="vshanuy-article-toc">Зміст</p>
                  <ol>
                    <li><a href="#miskyi-prostir" aria-current={current === 'miskyi-prostir' ? 'true' : undefined}>Памʼять у міському просторі</a></li>
                    <li><a href="#suchasna-viyna" aria-current={current === 'suchasna-viyna' ? 'true' : undefined}>Памʼять про сучасну війну</a></li>
                    <li><a href="#ne-lyshe-pamyatnykamy" aria-current={current === 'ne-lyshe-pamyatnykamy' ? 'true' : undefined}>Не лише памʼятниками</a></li>
                    <li><a href="#tseremoniya-proshchannya" aria-current={current === 'tseremoniya-proshchannya' ? 'true' : undefined}>Церемонія прощання</a></li>
                    <li><a href="#prapory" aria-current={current === 'prapory' ? 'true' : undefined}>Прапори, які відслужили</a></li>
                    <li><a href="#povtoryty" aria-current={current === 'povtoryty' ? 'true' : undefined}>А що, якщо повторити?</a></li>
                  </ol>
                </nav>
              </div>
            </aside>

            <div className="vshanuy-article__body">
              <section className="vshanuy-article__section" id="miskyi-prostir" aria-labelledby="miskyi-prostir-title">
                <h2 className="vshanuy-article__heading" id="miskyi-prostir-title">Памʼять у міському просторі</h2>
                <p>Подорожуючи українськими містами, ми звертаємо увагу не лише на нові меморіали, а й на те, яка памʼять уже займає міський простір.</p>
                <p>У багатьох містах центральні площі та вулиці досі займають радянські памʼятники й місця памʼяті про «Вєлікую Отєчєственную» – Другу світову війну. Відбувається нашарування памʼяті, і якщо вдуматися, то це абсурдно і несумісно.</p>
                <p>У Харкові радянські меморіали не домінують у центральному просторі. Частина з них розташована окремо — зокрема, у парку Слави.</p>
                <p>Іще один достатньо відомий меморіал солдату – раніше був на початку міста, а тепер він серед великої магістральної розвʼязки, будинків і магазинів. У 2022 році цей «солдат» отримав поранення від російських снарядів.</p>
                <p>За ним барельєф завісили синьо-жовтими прапорами. Цей простір добре показує, як змінюється міський контекст навколо старих меморіалів: обʼєкт залишається на своєму місці, але змінюється місто, яке його оточує, і значення, яке він має для цього простору.</p>
              </section>

              <section className="vshanuy-article__section" id="suchasna-viyna" aria-labelledby="suchasna-viyna-title">
                <h2 className="vshanuy-article__heading" id="suchasna-viyna-title">Памʼять про сучасну війну</h2>
                <p>У Харкові вже формується окремий шар памʼяті про російсько-українську війну – у різних форматах і в різних частинах міста.</p>
                <p>У 2023 році біля Палацу дитячої та юнацької творчості встановили памʼятник дітям, яких вбили росіяни. Біля нього містяни залишають квіти та мʼякі іграшки.</p>
                <p>На центральній алеї біля Харківської обласної військової адміністрації зʼявилися прапорці з іменами загиблих харківʼян – практика стихійних меморіалів, яка поширилася в українських містах після початку повномасштабної війни.</p>
                <p>У сквері біля флагштока побачите нативне нагадування у міському просторі – лавочки з табличками про загиблих, полонених та зниклих безвісти, з проєкту «Поміж нас». Поруч розташований цифровий екран із фотографіями загиблих.</p>
                <figure className="vshanuy-article__figure">
                  <img src={benchPhoto} alt="Лавочка в сквері з латунною табличкою «Тут могла б сидіти та, яка загинула у російському полоні»" width="1024" height="768" loading="lazy" decoding="async"/>
                  <figcaption>Лавочка з табличкою проєкту «Поміж нас» <span aria-hidden="true">·</span> м. Харків</figcaption>
                </figure>
              </section>

              <section className="vshanuy-article__section" id="ne-lyshe-pamyatnykamy" aria-labelledby="ne-lyshe-pamyatnykamy-title">
                <h2 className="vshanuy-article__heading" id="ne-lyshe-pamyatnykamy-title">Не лише памʼятниками</h2>
                <p>Кавʼярня «Паломник» виникла з мрії Андрія Авілова. Після його загибелі мама Олена відкрила цей простір і перетворила його на безпечний простір для своїх. На стінах висять фотографії Андрія та його загиблих побратимів.</p>
                <p>У кавʼярні «ЛяТюШо» віднедавна є «Дзеркало памʼяті» – дзеркало з іменами загиблих. Додати імʼя своєї людини можна через працівників закладу.</p>
              </section>

              <section className="vshanuy-article__section" id="tseremoniya-proshchannya" aria-labelledby="tseremoniya-proshchannya-title">
                <h2 className="vshanuy-article__heading" id="tseremoniya-proshchannya-title">Церемонія прощання</h2>
                <p>У Харкові немає єдиного сценарію прощання з усіма загиблими, наразі місто не пропонує цього, якщо стається щось відмінне від стандарту – це результат ініціативи та зусилля родини.</p>
                <p>Місто може долучатися до церемонії, коли йдеться про Героя України, але загалом намагається не навʼязувати сімʼї власний сценарій.</p>
                <p>На кладовищі №18 уже понад три тисячі поховань. Щодня тут відбуваються нові – по 3-5 поховань.</p>
                <p>Є почесний караул, майоріють прапори України та військових бригад, встановлені памʼятники. На одному із секторів сформувалася Алея слави – поховання тут відбуваються з 2014 року.</p>
                <p>Водночас Харків шукає відповідь на питання: «Яким ж має бути місце для поховання та памʼяті захисників?».</p>
              </section>

              <section className="vshanuy-article__section" id="prapory" aria-labelledby="prapory-title">
                <h2 className="vshanuy-article__heading" id="prapory-title">Прапори, які відслужили</h2>
                <p>Коли в місті постало питання: «А що робити з прапорами, які вже віджили своє?» – влада звернулась до Міністерства оборони задля вирішення питання, на що отримали відповідь, що наразі варто розбиратись із цим питанням на локальному рівні.</p>
                <p>25 серпня понад 800 прапорів, які були встановлені в місті та на кладовищах, склали та передали на зберігання до ТЦК. Це була окрема офіційна церемонія, на момент нашого дослідження вона відбулася один раз – на День державного прапору.</p>
                <p>Що відбувається з прапорами після передачі на зберігання – наразі невідомо. Практика також не закріплена окремим локальним положенням чи нормативним актом.</p>
                <p>Під час війни міста часто змушені самостійно знаходити відповіді на нові питання меморіалізації, ще до того, як для них зʼявляється єдиний загальнодержавний порядок.</p>
              </section>

              <section className="vshanuy-article__section" id="povtoryty" aria-labelledby="povtoryty-title">
                <h2 className="vshanuy-article__heading" id="povtoryty-title">А що, якщо повторити?</h2>
                <p>Ми часто приїжджаємо в місто з готовими практиками. Якщо щось добре працює в одному місці, здається логічним просто повторити це в іншому.</p>
                <p className="vshanuy-article__accent">Харків показує, що цього недостатньо.</p>
                <p>От наприклад у місті є кілька моргів, тож немає єдиного маршруту, яким можна було б проводжати загиблих через місто. Різність районів, родин, обставин не дає спроможності зробити ритуал єдиним.</p>
                <p>Те, що легко організувати в одному місці, в іншому може бути фізично неможливим або просто не відповідати досвіду людей для яких ця практика твориться.</p>
                <blockquote className="vshanuy-article__pullquote">
                  <p>Памʼять не можна просто привезти ззовні. От такому нас навчив Харків.</p>
                </blockquote>
              </section>
            </div>
          </div>
        </article>

        <section className="vshanuy-article__related" aria-labelledby="vshanuy-article-related">
          <div className="vshanuy-article__related-head">
            <h2 className="vshanuy-article__label" id="vshanuy-article-related">Інші публікації</h2>
            <a className="vshanuy-article__link" href="materialy.html">
              Усі публікації <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="vshanuy-materials-page__list">
            {related.map((material) => (
              <li key={material.href} className="vshanuy-materials-page__item">
                <a className="vshanuy-materials-page__card" href={material.href}>
                  <img
                    src={material.cover}
                    alt=""
                    width={material.coverWidth}
                    height={material.coverHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="vshanuy-materials-page__body">
                    <span className="vshanuy-materials-page__tag">{material.tag}</span>
                    <span className="vshanuy-materials-page__name">{material.title}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
