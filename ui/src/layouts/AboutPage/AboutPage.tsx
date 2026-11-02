import bannerPhoto from '../../assets/about/vshanuy-banner.jpg'
import portraitPhoto from '../../assets/about/iryna-cheka-tsybukh-uniform.jpg'
import visionPhoto from '../../assets/about/vshanuy-memory-chair.jpg'
import hvylynaPhoto from '../../assets/projects/proekt-hvylyna-movchannya.webp'
import chekafestPhoto from '../../assets/projects/proekt-chekafest.webp'
import praporPhoto from '../../assets/projects/proekt-proshchannya-z-praporom.webp'
import tryznaPhoto from '../../assets/projects/proekt-tryzna.webp'
import pomizhNasPhoto from '../../assets/projects/proekt-pomizh-nas.webp'
import dzerkaloPhoto from '../../assets/projects/proekt-dzerkalo-pamyati.webp'
import vinkuvannyaPhoto from '../../assets/projects/proekt-vinkuvannya.webp'
import tyshaPhoto from '../../assets/projects/proekt-tse-mozhe-buty-tysha.webp'
import datsenkoPhoto from '../../assets/about/team/datsenko.jpg'
import stankevychPhoto from '../../assets/about/team/stankevych.jpg'
import kozorizPhoto from '../../assets/about/team/kozoriz.jpg'
import pleskachovaPhoto from '../../assets/about/team/pleskachova.jpg'
import nekypilaPhoto from '../../assets/about/team/nekypila.jpg'
import verbResearchPhoto from '../../assets/about/directions/napryam-osvita.webp'
import verbCreatePhoto from '../../assets/about/directions/tryzna.jpg'
import verbSupportPhoto from '../../assets/about/directions/napryam-suspilstvo.webp'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { DirectionsCarousel } from '../DirectionsCarousel/DirectionsCarousel'
import { ProjectSlider, type ProjectSliderCard } from '../ProjectPage/ProjectSlider'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../DirectionsCarousel/DirectionsCarousel.css'
import '../ProjectPage/ProjectSlider.css'

export type AboutDirection = {
  title: string
  text: string
  href: string
  image: string
}

export type AboutTeamMember = {
  name: string
  role: string
  image?: string
}

export type AboutPageProps = {
  showHeader?: boolean
  projects?: AboutDirection[]
  team?: AboutTeamMember[]
}

export const aboutTeam: AboutTeamMember[] = [
  {
    name: 'Катерина Даценко',
    role: 'Співзасновниця та голова ГО «Вшануй»',
    image: datsenkoPhoto,
  },
  {
    name: 'Катерина Станкевич',
    role: 'Операційна менеджерка ГО «Вшануй»',
    image: stankevychPhoto,
  },
  {
    name: 'Катерина Левчук',
    role: 'Комунікаційна менеджерка ГО «Вшануй»',
  },
  {
    name: 'Анна Козоріз',
    role: 'SMM-менеджерка ГО «Вшануй»',
    image: kozorizPhoto,
  },
  {
    name: 'Єлизавета Плескачова',
    role: 'Проєктна менеджерка ГО «Вшануй»',
    image: pleskachovaPhoto,
  },
  {
    name: 'Єлизавета Канєвська',
    role: 'Проєктна менеджерка освітнього напрямку',
  },
  {
    name: 'Наталя Некипіла',
    role: 'Експертка освітнього напрямку, проєктна менеджерка',
    image: nekypilaPhoto,
  },
]

/** Картки як у слайдері проєктів на головній — усі видимі, без гортання. */
export const aboutProjects: AboutDirection[] = [
  {
    title: 'Хвилина мовчання',
    href: 'napryamky/hvylyna-movchannya.html',
    image: hvylynaPhoto,
    text: 'Ритуал подяки, пошани та памʼяті. Символічна обʼєднавча дія, відкрита для широкого кола суспільства: зберігати памʼять про війну і спільну боротьбу за незалежність.',
  },
  {
    title: 'ЧЕКАFEST',
    href: 'napryamky/chekafest.html',
    image: chekafestPhoto,
    text: 'Благодійний освітньо-музичний фестиваль памʼяті Ірини Цибух. Створений родиною та друзями Іри ЧЕКИ. Щорічний — у зручних датах біля 1 червня, дня її народження.',
  },
  {
    title: 'Прощання з прапором',
    href: 'napryamky/proshchannya-z-praporom.html',
    image: praporPhoto,
    text: 'Церемонія, коли державний символ завершує службу — і ми визнаємо це з повагою. Коли прапор зношується й втрачає вигляд, постає питання: що робити далі?',
  },
  {
    title: 'Тризна',
    href: 'napryamky/tryzna.html',
    image: tryznaPhoto,
    text: 'Публічне прощання з військовим — спосіб вшанувати людину й подякувати за службу. Прощання з містом — остання зустріч загиблого з громадою; особливо важлива для родини.',
  },
  {
    title: 'Поміж нас',
    href: 'napryamky/pomizh-nas.html',
    image: pomizhNasPhoto,
    text: 'Загальноукраїнський проєкт ГО «Вшануй»: вшанування памʼяті загиблих Захисників і Захисниць та підтримка родин полонених і зниклих безвісти. Тактовне нагадування про ціну умовно спокійного життя.',
  },
  {
    title: 'Дзеркало памʼяті',
    href: 'napryamky/dzerkalo-pamyati.html',
    image: dzerkaloPhoto,
    text: 'Проєкт координаторок «Вшануй» у Полтаві. Місце, де кожен може залишити імʼя людини, яку вбила росія, — щоб вона була видимою у просторі міста.',
  },
  {
    title: 'Вінкування',
    href: 'napryamky/vinkuvannya.html',
    image: vinkuvannyaPhoto,
    text: '29 серпня 2026-го, у День памʼяті загиблих, ми відновлювали традицію вінкування. Родини та друзі плели вінки з живих квітів під розповіді про найщасливіші моменти полеглих.',
  },
  {
    title: 'Виставка «Це може бути тиша»',
    href: 'napryamky/tse-mozhe-buty-tysha.html',
    image: tyshaPhoto,
    text: 'Це виставка про мить, коли щодня о 9:00 ми зупиняємося, щоб згадати тих, кого вже немає поруч.',
  },
]

function toProjectSliderCards(items: AboutDirection[]): ProjectSliderCard[] {
  return items.map((item) => ({
    href: item.href,
    cardTitle: item.title,
    image: item.image,
    description: item.text,
  }))
}

/** Page composition: H1 + лід → фото → історія → місія → що робимо → DirectionsCarousel → проєкти → бачення + фото + CTA → команда. Жовтий-бюджет 0 (лише hover CTA). */
export function AboutPage({
  showHeader = true,
  projects = aboutProjects,
  team = aboutTeam,
}: AboutPageProps) {
  return (
    <div className="vshanuy-about-page">
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-about-page__main">
        <div className="vshanuy-about-page__guides" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <header className="vshanuy-about-page__intro">
          <h1 className="vshanuy-about-page__title">Місія та цінності.</h1>
          <p className="vshanuy-about-page__lead">
            Жодна країна не народжується з готовою культурою памʼяті — її формують роками. Україна
            проходить цей шлях зараз, і ми його частина.
          </p>
        </header>

        <div className="vshanuy-about-page__story-band">
          <figure className="vshanuy-about-page__figure vshanuy-about-page__figure--wide">
            <img
              src={bannerPhoto}
              alt="Учасники Хвилини мовчання з табличками «9:00»"
              width={2400}
              height={1600}
              decoding="async"
            />
          </figure>

          <section className="vshanuy-about-page__section" id="istoriya" aria-labelledby="about-history-label">
            <div className="vshanuy-about-page__split">
              <div className="vshanuy-about-page__prose">
                <h2 className="vshanuy-about-page__label vshanuy-about-page__label--plain" id="about-history-label">
                  Історія
                </h2>
                <h3 className="vshanuy-about-page__accent">
                  В основі «Вшануй» — переконання Ірини (Чеки) Цибух: памʼять не завершується датою в
                  календарі. Вона живе в повсякденні — у вдячності, що триває, в людях, які несуть
                  спогади, і в ритуалах.
                </h3>
                <p>
                  Після загибелі Ірини у травні 2024 року її справу продовжила команда однодумців.
                  Сьогодні ГО «Вшануй» розвиває ідею сучасної української культури памʼяті — відкритої,
                  людяної та зрозумілої кожному.
                </p>
                <p>
                  ГО «Вшануй» — організація, яка працює над формуванням та впровадженням нових
                  меморіальних практик в Україні. Зокрема, активно адвокує Хвилину мовчання на
                  національному рівні та інші практики памʼяті. А також працює над розвитком активної
                  спільноти у містах по Україні.
                </p>
                <p>
                  Співзасновницею громадської організації була загибла госпітальєрка, журналістка та
                  Герой України посмертно Ірина (Чека) Цибух, яка привертала увагу до питань памʼятання
                  людей, які загинули під час російсько-української війни.
                </p>
              </div>
              <figure className="vshanuy-about-page__figure vshanuy-about-page__portrait">
                <img
                  src={portraitPhoto}
                  alt="Ірина (Чека) Цибух у формі Госпітальєрів"
                  width={1600}
                  height={1055}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Ірина (Чека) Цибух · Госпітальєри</figcaption>
              </figure>
            </div>
          </section>
        </div>

        <section
          className="vshanuy-about-page__section vshanuy-about-page__section--headline"
          id="misiya"
          aria-labelledby="about-mission-label"
        >
          <div className="vshanuy-about-page__headline-frame">
            <div className="vshanuy-about-page__headline-grid">
              <div className="vshanuy-about-page__mission">
                <h2
                  className="vshanuy-about-page__label vshanuy-about-page__label--plain"
                  id="about-mission-label"
                >
                  Місія
                </h2>
                <blockquote className="vshanuy-about-page__quote">
                  <p>Памʼятай про полеглих допомагай живим.</p>
                </blockquote>
                <div className="vshanuy-about-page__aside">
                  <p>
                    Ми прагнемо, щоб памʼять стала природною частиною повсякденного життя України. Це
                    наше гасло. Ним визначаємо все, що робимо.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vshanuy-about-page__section" id="shcho-robymo" aria-label="Що ми робимо">
          <div className="vshanuy-about-page__work">
            <ul className="vshanuy-about-page__verbs">
              <li>
                <figure className="vshanuy-about-page__verb-photo">
                  <img
                    src={verbResearchPhoto}
                    alt=""
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <h3>Досліджуємо</h3>
                <p>
                  Ми досліджуємо та відроджуємо різноманітні практики, з різних часів та історичних
                  періодів, щоб віднайти саме те, що буде близьким українському суспільству.
                </p>
              </li>
              <li>
                <figure className="vshanuy-about-page__verb-photo">
                  <img
                    src={verbCreatePhoto}
                    alt=""
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <h3>Створюємо</h3>
                <p>
                  Ми створюємо практики, які допомагають державі, громадам, бізнесу та кожній людині
                  зробити памʼять частиною життя.
                </p>
              </li>
              <li>
                <figure className="vshanuy-about-page__verb-photo">
                  <img
                    src={verbSupportPhoto}
                    alt=""
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <h3>Підтримуємо</h3>
                <p>Ми підтримуємо та допомагаємо зберігати памʼять про наших людей.</p>
              </li>
            </ul>
          </div>
        </section>

        <DirectionsCarousel
          id="napryamy"
          title="Серед наших основних напрямів роботи"
        />

        <section className="vshanuy-about-page__section" id="proekty" aria-labelledby="about-projects-title">
          <div className="vshanuy-about-page__projects-head">
            <p className="vshanuy-about-page__label vshanuy-about-page__label--plain" aria-hidden="true">
              Наші проєкти
            </p>
            <h2 className="vshanuy-about-page__display" id="about-projects-title">
              Що ми робимо,
              <br />
              щоб поширювати
              <br />
              культуру памʼяті
            </h2>
          </div>
          <ProjectSlider variant="about" items={toProjectSliderCards(projects)} />
        </section>

        <section className="vshanuy-about-page__section" id="bachennya" aria-labelledby="about-vision-label">
          <div className="vshanuy-about-page__vision">
            <figure className="vshanuy-about-page__figure vshanuy-about-page__vision-photo">
              <img
                src={visionPhoto}
                alt="Білий стілець із соняшником і табличкою «Тут міг сидіти той, хто віддав своє життя за незалежність»"
                width={1600}
                height={1067}
                loading="lazy"
                decoding="async"
              />
              <figcaption>Україна · 2024 · Памʼять</figcaption>
            </figure>
            <div className="vshanuy-about-page__vision-copy">
              <h2 className="vshanuy-about-page__label vshanuy-about-page__label--plain" id="about-vision-label">
                Наше бачення
              </h2>
              <blockquote className="vshanuy-about-page__quote">
                <p>Від культури монументів — до культури відповідальності.</p>
              </blockquote>
              <div className="vshanuy-about-page__aside">
                <p>
                  Ми працюємо над тим, щоб в Україні сформувалася культура памʼяті, яка житиме незалежно
                  від нас. Культура, у якій Хвилина мовчання стане природною звичкою, громади самі
                  створюватимуть простори памʼяті, бізнес братиме участь у спільних практиках вдячності,
                  а діти зростатимуть із розумінням того, що свобода має свою ціну.
                </p>
                <p>
                  Наша країна зараз переживає багато змін. І одна з них це те, що ми переходимо від
                  культури монументів до культури відповідальності, де відповідальний кожен з нас.
                </p>
                <a className="vshanuy-about-page__cta" href="pidtrymaty.html">
                  Підтримати <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="vshanuy-about-page__section" id="komanda" aria-labelledby="about-team-title">
          <h2 className="vshanuy-about-page__label vshanuy-about-page__label--plain" id="about-team-title">
            Наша команда
          </h2>
          <ul className="vshanuy-about-page__team">
            {team.map((member) => (
              <li key={member.name}>
                <figure className="vshanuy-about-page__team-photo">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      width={800}
                      height={1067}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="vshanuy-about-page__team-placeholder" aria-hidden="true" />
                  )}
                </figure>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
