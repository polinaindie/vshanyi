import coverPhoto from '../../assets/materials/vshanuy-material-dlya-choho.jpg'
import fest1Photo from '../../assets/materials/dlya-choho/chekafest-hlyadachi.jpg'
import fest2Photo from '../../assets/materials/dlya-choho/chekafest-stsena.jpg'
import authorPhoto from '../../assets/materials/istoriya/avtorka-datsenko.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { defaultMaterials } from '../MaterialsPage/MaterialsPage'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'

export type MaterialDlyaChohoPageProps = {
  showHeader?: boolean
}

const currentHref = 'materialy/dlya-choho-pamyatayesh-ty.html'
const related = defaultMaterials.filter((material) => material.href !== currentHref)

/** Page composition: шаблон MaterialPage без змісту (у тексті немає розділів) — col 1 sticky автор, cols 2–3 текст, підзаголовок-питання, цитати Ірини Цибух. Жовтий-бюджет 0. */
export function MaterialDlyaChohoPage({ showHeader = true }: MaterialDlyaChohoPageProps) {
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
            <a className="vshanuy-article__back" href="materialy.html"><span aria-hidden="true">←</span> Матеріали</a>
            <p className="vshanuy-article__tag">Колонка Катерини Даценко <span aria-hidden="true">·</span> <time dateTime="2026-05-22">22 травня 2026</time></p>
            <h1 className="vshanuy-article__title">А для чого памʼятаєш ти?</h1>
            <p className="vshanuy-article__standfirst">«Не сумуйте за мною, життя дуже коротке, якщо воно продовжується після смерті, то побачимось», – писала наша подруга і бойова медикиня Іра «Чека» Цибух у листі на випадок загибелі.</p>
          </header>

          <figure className="vshanuy-article__cover">
            <img src={coverPhoto} alt="Дві дівчини обіймаються біля поля памʼятних прапорців на Майдані Незалежності" width="1024" height="682" decoding="async"/>
          </figure>

          <div className="vshanuy-article__layout">
            <aside className="vshanuy-article__aside">
              <div className="vshanuy-article__aside-inner">
                <div className="vshanuy-article__author">
                  <img src={authorPhoto} alt="" width="964" height="1014" loading="lazy" decoding="async"/>
                  <p className="vshanuy-article__author-name">Катерина Даценко</p>
                  <p className="vshanuy-article__author-role">Співзасновниця ГО «Вшануй»</p>
                </div>
              </div>
            </aside>

            <div className="vshanuy-article__body">
              <div className="vshanuy-article__section">
                <p>Коли ти живеш у часи непевності, як наші, не хочеться думати про майбутнє, хочеться жити. Встигнути відповісти на повідомлення, поговорити, купити квитки на концерт, випити смачної кави, пробігти, пробути, прожити.</p>
                <p>Водночас смерть – те, що живе з нами поруч. Вона ходить з нами на каву, зустрічає нас на вулицях. Кожен її носить в собі через наших близьких, які загинули. І ми всі тепер живемо зі смертю. І з памʼяттю.</p>
                <p>Мабуть, через те, що ми втрачаємо так багато наших найдорожчих людей, памʼять припинила бути тільки підручником, чи тільки днем. Тепер для нас памʼять – це наше життя.</p>
                <blockquote className="vshanuy-article__pullquote">
                  <p>«Смуток за людьми, яких ми втратили, накладає на нас відповідальність. І це відповідальність живих перед мертвими – свідчити про те, що відбулося, та про зло, з яким ми зіткнулися»</p>
                  <footer>Ірина Цибух, «Чека»</footer>
                </blockquote>
                <p>Усе те, що ми з вами як суспільство зробимо зараз, вплине на майбутнє – хочемо ми цього чи ні. Те, яким буде наша памʼять, впливатиме на життя, економіку, освіту та країну загалом. Від того, як ми запамʼятаємо цю війну, залежить, чи потрібні будуть оборонні підприємства у міжвоєнний період, чи буде у нас армія і яка та як ми відбудовуватимемо країну.</p>
                <p>Власне від того, як ми памʼятатимемо, залежить і наше ставлення до ветеранів і військових. Ці чудові люди повернуться до цивільного життя, і памʼять про них і їхній внесок може стати нашим містком. А може і не стати. Залежить від усіх нас, як свідків цих подій.</p>
              </div>

              <section className="vshanuy-article__section" aria-labelledby="yak-zberihayemo-title">
                <h2 className="vshanuy-article__heading vshanuy-article__heading--sub" id="yak-zberihayemo-title">Як же ми, як суспільство, зберігаємо цю памʼять?</h2>
                <p>Існують простори памʼяті. Наприклад, ними стали Михайлівська стіна, прапорці на Майдані, сектори військових поховань. Крім того, прапорці на Майдані – це ще й стихійне місце памʼяті, бо його створили люди. Це відповідь на державну чи місцеву бездіяльність.</p>
                <p>А є речі, які ми можемо робити і щодня. Однією з них є хвилина мовчання – дія, яка дуже важлива у своїй простоті. Перші згадки про цей ритуал є ще за часів Першої світової війни.</p>
                <p>Але своєю щоденністю ми зробили цей ритуал особливим: бо для когось це хвилина честі, хвилина гідності, хвилина, що має значення, а хтось згадує імена своїх людей, хтось думає кому з друзів, які у війську, напише сьогодні. Для нас тепер це справді універсальна щоденна дія, де подумки можеш заземлитись. Де ми всі з вами на цю одну хвилину опиняємося в спільному просторі памʼяті.</p>
                <p>Не вигадали поки принципу за яким держава могла б запамʼятати всіх загиблих і вбитих росією. Але це можемо зробити ми з вами. Як і казала Іра, як свідки цих подій. Тому ми створили фестиваль памʼяті ЧекаFest. Він показує, що памʼять ніколи не про смерть, вона про життя людини, яка жила, любила та мріяла.</p>
                <p>Іра любила українську музику. Маринка Круть, її подруга й українська бандуристка зібрала артистів для музичної частини, щоб всі змогли послухати і полюбити наше українське. Цього року будуть ДахаБраха, Пиріг і Батіг, ЩукаРиба.</p>
                <p>Іра багато вчилася. Юра, її брат зібрав людей для освітньої сцени навколо теми «ідентичність». Ми будемо з вами її винаходити через памʼять, літературу, особисті зусилля та вибір і через історії Ірини, безпосередньо.</p>
                <p>Іра багато говорила про памʼять і багато робила для суспільної памʼяті. Тому ми, від «Вшануй» зробимо простори для того, щоб ви змогли познайомитися з Ірою справжньою, а ще розказали нам про своїх людей.</p>
                <p>«Чека» рятувала життя на війні. І навіть після смерті продовжує це робити. Минулого року, на фестивалі ми зібрали більше двох мільйонів на Госпітальєрів. Цього року збираємо на наземні роботизовані комплекси, які рятуватимуть поранених, для 503 батальйону, з якими працювала Іра.</p>
                <figure className="vshanuy-article__figure">
                  <img src={fest1Photo} alt="Глядачі сидять на галявині між деревʼяними хатами під час фестивалю ЧекаFest" width="1600" height="1068" loading="lazy" decoding="async"/>
                  <figcaption>Благодійний фестиваль «ЧекаFest» <span aria-hidden="true">·</span> фото надані організаторами фестивалю</figcaption>
                </figure>
                <p>Мабуть, цей фестиваль не лише про «Чеку», він про те, щоб кожен згадував, ділився і був чесним. А ще щоб знаходив своє: що почитати, послухати, подосліджувати. Між собою ми говоримо, що це простір для своїх.</p>
                <p>І, звісно, 10 пісень, які заповідала Іринка. Будемо співати біля ватри.</p>
                <p>Ми будемо сміятися і плакати, багато згадувати. Про Іру такою як вона була – дівчиною, яка мріяла про свій дім із «помідорами у високих грядках», любила подорожі, хотіла гарну освіту для брата і здоров’я для батьків.</p>
                <p>Її «хочу їсти цукерки „ліщина“, гортаючи сторінки якоїсь художки». Чека казала, що «війна – не місце моєї реалізації», бо «я хотіла і хочу працювати з полісі про національну памʼять». Це було у 22-му.</p>
                <p className="vshanuy-article__accent">Іро, тепер ти наша «полісі» про національну памʼять…</p>
                <p>Своїм прощанням вона показала нам на практиці, що памʼятаючи можна співати, танцювати, продовжувати жити. Як би складно не було. Пані Оксана, мама Іри, продовжує писати писанки, щоб не втратити себе.</p>
                <p>Маринка Круть віддала свою останню струну для Іринки, але її бандура продовжує грати. Юра продовжує проводити екскурсії, тільки тепер про сестру. А ми – продовжуємо нести культуру памʼяті, адвокатувати «хвилину мовчання» та проводити фестиваль у її пам’ять.</p>
                <figure className="vshanuy-article__figure">
                  <img src={fest2Photo} alt="Натовп перед сценою з кольоровими стрічками на фестивалі ЧекаFest" width="1600" height="1068" loading="lazy" decoding="async"/>
                  <figcaption>Благодійний фестиваль «ЧекаFest» <span aria-hidden="true">·</span> фото надані організаторами фестивалю</figcaption>
                </figure>
                <p>Іра говорила, що національна трагедія, якою є війна, впливає на нашу ідентичність через жертовність. Ми цією жертвою об’єднані, і вона робить нас частиною зграї. Спільні терпіння єднають більше, аніж спільні радощі.</p>
                <p>Єднають не лише, щоб пройти через горе і втрату, але й щоб мати мотивацію продовжувати захищати своє, не мовчати на несправедливість і чітко розуміти хто ти.</p>
                <blockquote className="vshanuy-article__pullquote">
                  <p>«Не сумуйте за мною, життя дуже коротке, якщо воно продовжується після смерті, то побачимось»</p>
                </blockquote>
                <p>Іро, ми дуже стараємося продовжити твоє життя після смерті.</p>
                <p className="vshanuy-article__accent">Давайте бачитись.</p>
              </section>

              <section className="vshanuy-article__sources" aria-labelledby="vshanuy-article-sources">
                <h2 className="vshanuy-article__label" id="vshanuy-article-sources">Джерела</h2>
                <div className="vshanuy-article__sources-group">
                  <h3>Перша публікація</h3>
                  <ul>
                    <li><a className="vshanuy-article__inline-link" href="https://www.rbc.ua/rus/news/chogo-pam-yataesh-ti-1779452878.html" target="_blank" rel="noopener noreferrer">rbc.ua</a></li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </article>

        <section className="vshanuy-article__related" aria-labelledby="vshanuy-article-related">
          <div className="vshanuy-article__related-head">
            <h2 className="vshanuy-article__label" id="vshanuy-article-related">Інші матеріали</h2>
            <a className="vshanuy-article__link" href="materialy.html">
              Усі матеріали <span aria-hidden="true">→</span>
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
