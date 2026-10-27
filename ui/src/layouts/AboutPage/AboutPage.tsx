import bannerPhoto from '../../assets/about/vshanuy-banner.jpg'
import gromadaPhoto from '../../assets/about/directions/spivpratsya.jpg'
import businessPhoto from '../../assets/about/directions/business-intro.jpg'
import derzhavaPhoto from '../../assets/about/directions/ceremonial-dorozhnya-karta.jpg'
import suspilstvoPhoto from '../../assets/about/vshanuy-memory-chair.jpg'
import osvitaPhoto from '../../assets/about/directions/osvitni-programy.jpg'
import viyskoPhoto from '../../assets/about/directions/tryzna.jpg'
import mystetstvoPhoto from '../../assets/about/directions/chekafest.jpg'
import portraitPhoto from '../../assets/about/iryna-cheka-tsybukh.png'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'

export type AboutDirection = {
  title: string
  text: string
  href: string
  image: string
}

export type AboutPageProps = {
  showHeader?: boolean
  directions?: AboutDirection[]
}

export const aboutDirections: AboutDirection[] = [
  {
    title: 'Регіони',
    href: 'napryamky/gromada.html',
    image: gromadaPhoto,
    text: 'Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики пам’яті. Поширюємо ініціативи в громадах, розробляємо ритуали пам’яті та прощання.',
  },
  {
    title: 'Бізнес',
    href: 'napryamky/spivpratsya-z-biznesom.html',
    image: businessPhoto,
    text: 'Допомагаємо бізнесу інтегрувати культуру пам’яті у свої комунікації. Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й пам’ять.',
  },
  {
    title: 'Держава',
    href: 'napryamky/derzhava.html',
    image: derzhavaPhoto,
    text: 'Передаємо державним інституціям напрацьовані практики, рекомендації та інструкції й працюємо над їхнім системним впровадженням.',
  },
  {
    title: 'Суспільство',
    href: 'napryamky/suspilstvo.html',
    image: suspilstvoPhoto,
    text: 'Говоримо про складні й важливі теми, пов’язані з пам’яттю про війну: як прощатися, як говорити про загиблих, як уникати знеособлення втрат.',
  },
  {
    title: 'Освіта',
    href: 'napryamky/osvita.html',
    image: osvitaPhoto,
    text: 'Досліджуємо, як діти, підлітки та вчителі сприймають тему пам’яті й якою хочуть бачити розмову про неї в школі. Розробляємо практичні матеріали для освітян, проводимо лекції та зустрічі, створюємо документи-опори для роботи з темою пам’яті.',
  },
  {
    title: 'Військо',
    href: 'napryamky/viysko.html',
    image: viyskoPhoto,
    text: 'Досліджуємо військові ритуали й традиції та шукаємо способи зберігати їхню тяглість у сучасному українському війську. Працюємо над створенням церемоній прощання з військовослужбовцями, які можуть бути адаптовані та впроваджені в громадах по всій Україні.',
  },
  {
    title: 'Мистецтво',
    href: 'napryamky/mystetstvo.html',
    image: mystetstvoPhoto,
    text: 'Використовуємо мистецтво як спосіб говорити про пам’ять, людей і наш досвід.',
  },
]

/** Page composition: H1 + лід → фото → історія → місія → що робимо → напрями 4 в ряд (фото + назва + текст, hover — беж і zoom фото) → бачення + CTA. Жовтий-бюджет 0 (лише hover CTA). */
export function AboutPage({ showHeader = true, directions = aboutDirections }: AboutPageProps) {
  return (
    <div className="vshanuy-about-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-about-page__main">
        <header className="vshanuy-about-page__intro">
          <h1 className="vshanuy-about-page__title">Про нас.</h1>
          <p className="vshanuy-about-page__lead">
            Жодна країна не народжується з готовою культурою пам’яті — її формують роками. Україна
            проходить цей шлях зараз, і ми його частина.
          </p>
        </header>

        <figure className="vshanuy-about-page__figure vshanuy-about-page__figure--wide">
          <img
            src={bannerPhoto}
            alt="Фото-заглушка: учасники Хвилини мовчання з табличками «9:00»"
            width={2400}
            height={1600}
            decoding="async"
          />
          <figcaption>Фото-заглушка · місце · рік</figcaption>
        </figure>

        <section className="vshanuy-about-page__section" id="istoriya" aria-label="Історія">
          <div className="vshanuy-about-page__split">
            <figure className="vshanuy-about-page__figure vshanuy-about-page__portrait">
              <img src={portraitPhoto} alt="Ірина (Чека) Цибух" width={689} height={1024} loading="lazy" decoding="async" />
              <figcaption>Ірина (Чека) Цибух</figcaption>
            </figure>
            <div className="vshanuy-about-page__prose">
              <p className="vshanuy-about-page__accent">
                В основі «Вшануй» — переконання Ірини (Чеки) Цибух: пам’ять не завершується датою в
                календарі. Вона живе в повсякденні — у вдячності, що триває, в людях, які несуть
                спогади, і в ритуалах.
              </p>
              <p>
                Після загибелі Ірини у травні 2024 року її справу продовжила команда однодумців. Сьогодні
                ГО «Вшануй» розвиває ідею сучасної української культури пам’яті — відкритої, людяної та
                зрозумілої кожному.
              </p>
              <p>
                ГО «Вшануй» — організація, яка працює над формуванням та впровадженням нових меморіальних
                практик в Україні. Зокрема, активно адвокує Хвилину мовчання на національному рівні та
                інші практики пам’яті. А також працює над розвитком активної спільноти у містах по
                Україні.
              </p>
              <p>
                Співзасновницею громадської організації була загибла госпітальєрка, журналістка та Герой
                України посмертно Ірина (Чека) Цибух, яка привертала увагу до питань пам’ятання людей, які
                загинули під час російсько-української війни.
              </p>
            </div>
          </div>
        </section>

        <section className="vshanuy-about-page__section" id="misiya" aria-labelledby="about-mission-label">
          <h2 className="vshanuy-about-page__label vshanuy-about-page__label--plain" id="about-mission-label">
            Місія
          </h2>
          <blockquote className="vshanuy-about-page__quote">
            <p>Пам’ятай про полеглих — допомагай живим.</p>
          </blockquote>
          <div className="vshanuy-about-page__aside">
            <p>Ми прагнемо, щоб пам’ять стала природною частиною повсякденного життя України.</p>
            <p>Це наше гасло. Ним визначаємо все, що робимо.</p>
          </div>
        </section>

        <section className="vshanuy-about-page__section" id="shcho-robymo" aria-labelledby="about-work-label">
          <h2 className="vshanuy-about-page__label vshanuy-about-page__label--plain" id="about-work-label">
            Що ми робимо
          </h2>
          <ul className="vshanuy-about-page__verbs">
            <li>
              <h3>Досліджуємо</h3>
              <p>
                Ми <strong>досліджуємо</strong> та <strong>відроджуємо</strong> різноманітні практики, з
                різних часів та історичних періодів, щоб віднайти саме те, що буде близьким українському
                суспільству.
              </p>
            </li>
            <li>
              <h3>Створюємо</h3>
              <p>
                Ми <strong>створюємо</strong> практики, які допомагають державі, громадам, бізнесу та
                кожній людині зробити пам’ять частиною життя.
              </p>
            </li>
            <li>
              <h3>Підтримуємо</h3>
              <p>
                Ми <strong>підтримуємо</strong> та <strong>допомагаємо</strong> зберігати пам’ять про
                наших людей.
              </p>
            </li>
          </ul>
        </section>

        <section className="vshanuy-about-page__section" id="napryamy" aria-labelledby="about-directions-title">
          <p className="vshanuy-about-page__label vshanuy-about-page__label--plain" aria-hidden="true">
            Напрями роботи
          </p>
          <h2 className="vshanuy-about-page__display" id="about-directions-title">
            Серед наших основних напрямів роботи
          </h2>
          <ul className="vshanuy-about-page__directions">
            {directions.map((direction) => (
              <li key={direction.title}>
                <a className="vshanuy-about-page__direction" href={direction.href}>
                  <span className="vshanuy-about-page__direction-media" aria-hidden="true">
                    <img src={direction.image} alt="" width={960} height={640} loading="lazy" decoding="async" />
                  </span>
                  <h3>{direction.title}</h3>
                  <p>{direction.text}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>


        <section className="vshanuy-about-page__section" id="bachennya" aria-labelledby="about-vision-label">
          <h2 className="vshanuy-about-page__label vshanuy-about-page__label--plain" id="about-vision-label">
            Наше бачення
          </h2>
          <blockquote className="vshanuy-about-page__quote">
            <p>Від культури монументів — до культури відповідальності.</p>
          </blockquote>
          <div className="vshanuy-about-page__aside">
            <p>
              Ми працюємо над тим, щоб в Україні сформувалася культура пам’яті, яка житиме незалежно від
              нас. Культура, у якій Хвилина мовчання стане природною звичкою, громади самі створюватимуть
              простори пам’яті, бізнес братиме участь у спільних практиках вдячності, а діти зростатимуть
              із розумінням того, що свобода має свою ціну.
            </p>
            <p>
              Наша країна зараз переживає багато змін. І одна з них це те, що ми переходимо від культури
              монументів до культури відповідальності, де відповідальний кожен з нас.
            </p>
            <a className="vshanuy-about-page__cta" href="pidtrymaty.html">
              Підтримати <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
