import coverPhoto from '../../assets/materials/vshanuy-material-den-pamyati.jpg'
import authorPhoto from '../../assets/materials/istoriya/avtorka-datsenko.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { defaultMaterials } from '../MaterialsPage/MaterialsPage'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'

export type MaterialDenPamyatiPageProps = {
  showHeader?: boolean
}

const currentHref = 'materialy/yak-vshanuvaty-u-den-pamyati.html'
const related = defaultMaterials.filter((material) => material.href !== currentHref)

/** Page composition: шаблон MaterialPage без змісту (у тексті немає розділів) — col 1 sticky автор, cols 2–3 текст, кроки «Як долучитися» нумерованим списком, особистий епілог. Жовтий-бюджет 0. */
export function MaterialDenPamyatiPage({ showHeader = true }: MaterialDenPamyatiPageProps) {
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
            <p className="vshanuy-article__tag">Колонка Катерини Даценко <span aria-hidden="true">·</span> <time dateTime="2026-08-28">28 серпня 2026</time></p>
            <h1 className="vshanuy-article__title">Як вшанувати полеглих захисників та захисниць у День памʼяті</h1>
            <p className="vshanuy-article__standfirst">Що для вас є одним із головних атрибутів поховання? Хрест, рушники і, мабуть, вінок. І більшість із нас памʼятають саме ось цей – із пластикових квітів. Але звідки взялася ця пластикова копія?</p>
          </header>

          <figure className="vshanuy-article__cover">
            <img src={coverPhoto} alt="Хлопчик у військовій формі стоїть біля могили з пластиковими вінками, позаду прапор України" width="920" height="613" decoding="async"/>
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
                <p>Наприкінці радянського періоду й особливо у 1990-х живі, хвойні, паперові та воскові композиції почав масово витісняти дешевий пластик. Так ми зберегли форму вінка, але втратили саму дію вінкування.</p>
                <p>В українській традиції вінок зʼявляється там, де потрібно позначити щось важливе: перехід, завершення, звʼязок. Ми маємо купальські вінки і весільні, вінки зі жнив, оберегові вінки на Зелені свята і різдвяні. І ми також мали вінки, які плели та несли на кладовища до вояків. Всі вінки, що ми плели протягом календарного року були обрядовими.</p>
                <p>У книзі «Звичаї нашого народу» в описі про Зелені свята читаємо <em>«Дівчата ще мають сплести вінок та покласти його на козацькі могили»</em>. Сплести вінок означає зробити ряд дій: зібрати квіти, сісти, сплести, примовляти, віднести. Ось це персональне вшанування (людина до людини) було нам притаманним.</p>
                <p>Тепер же бачимо біля наших людей лише пластикові клони. Ким ми є, якщо ставимо пластикові квіти до своїх людей? Ким ми є, якщо користуємося логікою «повернутися через кілька років, щоб замінити»?</p>
                <p>Томас Лакер пише, що через ставлення до мертвих, спільноти показують ким вони є. То що про нас говорить пластикова «Вічна памʼять»?</p>
                <p>Чи може памʼять бути вічною? Пластикові вінки кажуть, що формально може. Але при цьому вона схожа і на одноразове забуття, дію, в якій немає внутрішнього сенсу і наповнення.</p>
                <p>Вінки із живих квітів кажуть, що памʼять – річ дуже тендітна. Її потрібно оновлювати.</p>
                <blockquote className="vshanuy-article__pullquote">
                  <p>Памʼять триває не тому, що залишений нами предмет не вʼяне, а тому, що живі знову і знову до неї повертаються.</p>
                </blockquote>
                <p>Хочеться повернути традицію живого вінкування. Щоб збиратися рідними і говорити про рідних.</p>
                <p>Повернути наше не означає точно відтворити один давній обряд. Ми не знаємо, яким був єдиний «правильний» вінок, бо в різних регіонах і в різні часи вони відрізнялися. Але ми можемо повернути собі сам спосіб пам’ятати: через руки, розповіді, спільну роботу. Ми назвали цей процес «Вінкуванням».</p>
                <p>Вінок символізує нам коло – символ безкінечності, немає початку і кінця. Символ того, що все повертається. Життя, яке продовжується навіть після смерті людини – в памʼяті про неї, у звичках, які ми перейняли, у словах, речах.</p>
                <p>Вінкуючи, ти вплітаєш квітку за квіткою, думаєш про свою людину, про долю, про життя, про любов, яку несеш.</p>
              </div>

              <section className="vshanuy-article__section" aria-label="29 серпня">
                <p className="vshanuy-article__stamp">29 серпня <span aria-hidden="true">·</span> 9:00</p>
                <p>29 серпня ми маємо спільний День пам’яті загиблих Захисників і Захисниць, але кожен із нас проживає його через пам’ять про конкретних людей. Ми зупиняємось всією країною о 9-й ранку у памʼять про наших. Ми Вінкуємо і згадуємо історії про наших людей. Ми лишаємо вільним Стіл памʼяті і записуємо імена (ідея Марії Грабар та Платформи памʼяті Меморіал). Ми біжимо всією країною та на інших континентах у памʼять про наших людей (ініціатива Олега Дурмасенка, тато загиблого «кіборга» Олексія). Ми відкриваємо виставки у памʼять, щоб знати — цей день Перша велика трагедія українського війська — Ілловайський котел.</p>
                <p className="vshanuy-article__accent">Ми хочемо в цей день бути не самі.</p>
              </section>

              <section className="vshanuy-article__section" aria-labelledby="yak-doluchytysya-title">
                <h2 className="vshanuy-article__heading" id="yak-doluchytysya-title">Як можна долучитися до Вінкування</h2>
                <ol className="vshanuy-article__steps">
                  <li>Зібрати або придбати квіти, трави, колоски із гнучкими пагонами.</li>
                  <li>29 серпня після Хвилини мовчання сплести вінок у памʼять про свою людину.</li>
                  <li>Покласти вінок до могили або у памʼятне місце.</li>
                </ol>
                <p>Ви можете обирати квіти, які нагадують вашу людину. А можете вплести сонях, який є символом цього дня.</p>
                <p className="vshanuy-article__accent">Приносити живі квіти у вінках до наших вояків – це відродження давньої традиції.</p>
              </section>

              <footer className="vshanuy-article__epilogue">
                <p>Андрій, друг нашої сімʼї, загинув у травні 2022 на останній вільній землі його рідної Луганщини. У памʼять про нього я вплету у вінок блакитну квітку. Настільки блакитну, якими були його очі.</p>
              </footer>

              <section className="vshanuy-article__sources" aria-labelledby="vshanuy-article-sources">
                <h2 className="vshanuy-article__label" id="vshanuy-article-sources">Джерела</h2>
                <div className="vshanuy-article__sources-group">
                  <h3>Перша публікація</h3>
                  <ul>
                    <li><a className="vshanuy-article__inline-link" href="https://lb.ua/blog/kateryna_datsenko/762138_yak_vshanuvati_poleglih.html" target="_blank" rel="noopener noreferrer">lb.ua</a></li>
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
