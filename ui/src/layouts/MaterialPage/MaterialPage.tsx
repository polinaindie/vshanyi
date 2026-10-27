import { useEffect, useState } from 'react'
import coverPhoto from '../../assets/materials/vshanuy-material-istoriya.jpg'
import authorPhoto from '../../assets/materials/istoriya/avtorka-datsenko.jpg'
import streetPhoto from '../../assets/materials/istoriya/vulytsya.jpg'
import capeTownPhoto from '../../assets/materials/istoriya/keiptaun-1918.jpg'
import upaInstructionPhoto from '../../assets/materials/istoriya/upa-instruktsiya-1947.jpg'
import upaPointDPhoto from '../../assets/materials/istoriya/upa-punkt-d.jpg'
import volynPhoto from '../../assets/materials/istoriya/volyn-1933.jpg'
import diloPhoto from '../../assets/materials/istoriya/dilo-1938.jpg'
import hrynykPhoto from '../../assets/materials/istoriya/hrynyk-dysertatsiya.jpg'
import londonPhoto from '../../assets/materials/istoriya/london-1919.jpg'
import maidanPhoto from '../../assets/materials/istoriya/maidan.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { defaultMaterials } from '../MaterialsPage/MaterialsPage'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'

export type MaterialPageProps = {
  showHeader?: boolean
}

const sectionIds = [
  'istoriya-rytualu',
  'keiptaun',
  'alternatyvna-versiya',
  'velyka-brytaniya',
  'u-sviti',
  'suchasna-ukrayina',
  'povstanska-armiya',
  'iryna-tsybukh',
]

const related = defaultMaterials.filter((material) => !material.featured)

/** Page composition: інтро → обкладинка (cols 2–4, підпис у col 1) → col 1 sticky автор + зміст, cols 2–3 текст, col 4 примітки → епілог + джерело → інші матеріали. Жовтий-бюджет 0. */
export function MaterialPage({ showHeader = true }: MaterialPageProps) {
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
            <a className="vshanuy-article__back" href="materialy.html"><span aria-hidden="true">←</span> Матеріали</a>
            <p className="vshanuy-article__tag">Колонка Катерини Даценко <span aria-hidden="true">·</span> <time dateTime="2026-10-09">9 жовтня 2026</time></p>
            <h1 className="vshanuy-article__title">Історія Хвилини мовчання</h1>
            <p className="vshanuy-article__standfirst">Під час війни – у лісах, криївках – Українська повстанська армія завмирає на «Загальне вшанування трихвилинною мовчанкою пам'яті всіх поляглих вояків УПА та учасників збройного підпілля, які загинули у рр. 1942–1947». Це цитата зі Святочного наказу, в якому є Інструкція відзначення п'ятиріччя Свята УПА, 14 жовтня 1947 року. Але виявилося, що документ від 1947 року – не найдавніший.</p>
          </header>

          <figure className="vshanuy-article__cover">
            <img src={coverPhoto} alt="Чоловіки на лондонській вулиці стоять, знявши капелюхи, під час двохвилинного мовчання" width="1024" height="760" decoding="async"/>
            <figcaption>Двохвилинне мовчання у День памʼяті <span aria-hidden="true">·</span> м. Лондон <span aria-hidden="true">·</span> 1919</figcaption>
          </figure>

          <div className="vshanuy-article__layout">
            <aside className="vshanuy-article__aside">
              <div className="vshanuy-article__aside-inner">
                <div className="vshanuy-article__author">
                  <img src={authorPhoto} alt="" width="964" height="1014" loading="lazy" decoding="async"/>
                  <p className="vshanuy-article__author-name">Катерина Даценко</p>
                  <p className="vshanuy-article__author-role">Співзасновниця ГО «Вшануй»</p>
                </div>
                <nav className="vshanuy-article__toc" aria-labelledby="vshanuy-article-toc">
                  <p className="vshanuy-article__label" id="vshanuy-article-toc">Зміст</p>
                  <ol>
                    <li>
                      <a href="#istoriya-rytualu" aria-current={current === 'istoriya-rytualu' ? 'true' : undefined}>Історія щоденного ритуалу</a>
                      <ol>
                        <li><a href="#keiptaun" aria-current={current === 'keiptaun' ? 'true' : undefined}>Місто, що спинялося щодня</a></li>
                        <li><a href="#alternatyvna-versiya" aria-current={current === 'alternatyvna-versiya' ? 'true' : undefined}>Альтернативна версія</a></li>
                        <li><a href="#velyka-brytaniya" aria-current={current === 'velyka-brytaniya' ? 'true' : undefined}>Тиша на всю країну</a></li>
                      </ol>
                    </li>
                    <li><a href="#u-sviti" aria-current={current === 'u-sviti' ? 'true' : undefined}>Хвилина мовчання у світі</a></li>
                    <li><a href="#suchasna-ukrayina" aria-current={current === 'suchasna-ukrayina' ? 'true' : undefined}>Сучасна Україна</a></li>
                    <li><a href="#povstanska-armiya" aria-current={current === 'povstanska-armiya' ? 'true' : undefined}>Повстанська армія</a></li>
                    <li><a href="#iryna-tsybukh" aria-current={current === 'iryna-tsybukh' ? 'true' : undefined}>Ірина Цибух, «Чека»</a></li>
                  </ol>
                </nav>
              </div>
            </aside>

            <div className="vshanuy-article__body">
              <div className="vshanuy-article__section">
                <figure className="vshanuy-article__figure">
                  <img src={streetPhoto} alt="Люди стоять на вулиці біля зупинених автомобілів під час Хвилини мовчання" width="660" height="440" loading="lazy" decoding="async"/>
                </figure>
                <p>Перебираючи в домашньому архіві документи близько року тому, натрапила на «Святочий указ УПА» 1947 року. Це п'ятиріччя святкування Дня Української повстанської армії. В документі, який описував, як проводити цей день у своєму загоні, був один пункт: «проведення трихвилинки мовчанки памʼяті за поляглими вояками».</p>
                <p>«Вау», подумала я. Невже це підтвердження того, що ми успадкували цю традицію не від совка, а мали історію проведення цього ритуалу в українських повстанців на Запоріжжі, Львівщині, Черкащині та в інших регіонах?</p>
                <p>Ритуали вигадують люди, але органічно вплітатися в наше життя вони можуть тільки з доброї волі суспільства. Щоразу, коли я читаю чи бачу, як люди агресивно реагують, коли хтось не дотримується Хвилини мовчання, то думаю: це ж так не працює.</p>
                <p>Мабуть, це буде один із найповніших текстів про Хвилину мовчання, її значення і її історію для українців. Наступні написані речі для того, щоб мати ґрунт під ногами і розуміти більше, що ми робимо.</p>
              </div>

              <section className="vshanuy-article__part" id="istoriya-rytualu" aria-labelledby="istoriya-rytualu-title">
                <h2 className="vshanuy-article__heading vshanuy-article__heading--part" id="istoriya-rytualu-title">Історія щоденного ритуалу</h2>

                <section className="vshanuy-article__section" id="keiptaun" aria-labelledby="keiptaun-title">
                  <p className="vshanuy-article__stamp">м. Кейптаун <span aria-hidden="true">·</span> 1916 → 1919</p>
                  <h3 className="vshanuy-article__heading vshanuy-article__heading--sub" id="keiptaun-title">Місто, що спинялося щодня</h3>
                  <p>Уявіть південь Африки. Велике портове місто, через яке проводиться чи не половина логістики Першої світової війни. Щодня рівно опівдні тут стріляє гармата, а містяни за нею звіряють годинники.</p>
                  <p>1916 рік. До міста доходять перші списки загиблих південноафриканців. У церкві пропонують на три хвилини затихнути під час служби, щоб вшанувати памʼять загиблих.</p>
                  <p>1917 рік. Просту дію пропонують проводити по всьому місту – після пострілу гармати.</p>
                  <p>Травень 1918 року. Місто спинилось уперше. Завмерли трамваї. Затих ринок. Чоловіки поскидали капелюхи. Спершу тиша тривала три хвилини – потім вирішили, що задовго, і лишили дві. І робили це щодня. До січня 1919 року.</p>
                  <figure className="vshanuy-article__figure">
                    <img src={capeTownPhoto} alt="Натовп на вулиці Кейптауна завмер під час паузи, архівне фото" width="660" height="393" loading="lazy" decoding="async"/>
                    <figcaption>Пауза у м. Кейптаун, 1918 р.</figcaption>
                  </figure>
                  <p>«<em>Не можна було не замислитися, який особистий інтерес вона мала до цього акту пам'яті</em>», – так журналіст описував жінку в чорному, що спинилась на двохвилинку тиші у м. Кейптаун. Він не знав, кого вона згадувала. І ми не знаємо.</p>
                </section>

                <section className="vshanuy-article__section" id="alternatyvna-versiya" aria-labelledby="alternatyvna-versiya-title">
                  <p className="vshanuy-article__stamp">м. Лондон <span aria-hidden="true">·</span> травень 1919</p>
                  <h3 className="vshanuy-article__heading vshanuy-article__heading--sub" id="alternatyvna-versiya-title">Альтернативна версія</h3>
                  <p>Існує ще одна версія того, як пауза стала однією з головних комеморативних практик Британії. Згідно з нею, у травні 1919 р. (через рік після започаткування такого ритуалу в м. Кейптаун) австралійський журналіст і ветеран Едвард Джордж Хані застав завершення війни у Лондоні. Місцеві жителі святкували перемогу в Першій світовій війні галасом, піснями і танцями. Це його обурило – здавалося, що всі забули про тих, хто своє життя вже віддав.</p>
                  <p>Едвард друкує листа у <em>London Evening News</em>, де пропонує: «Лише п'ять маленьких хвилин. П'ять хвилин мовчання для вшанування памʼяті. …на вулиці, вдома, в театрі, будь-де, де випадково опиняються англійці та англійки…».</p>
                  <p>Джерела не вказують чому, але ми знаємо, що Британський король таки вирішив зупинитися на двох хвилинах.</p>
                </section>

                <section className="vshanuy-article__section" id="velyka-brytaniya" aria-labelledby="velyka-brytaniya-title">
                  <p className="vshanuy-article__stamp">м. Лондон <span aria-hidden="true">·</span> 11 листопада 1919</p>
                  <h3 className="vshanuy-article__heading vshanuy-article__heading--sub" id="velyka-brytaniya-title">Тиша на всю країну</h3>
                  <p>Чи просто з міста Кейптаун, чи завдяки австралійському журналістові тиша почала ширитися світом. Невідомо, як саме новина дійшла до короля. Але 11 листопада 1919 року об 11 годині ранку, в першу річницю Компʼєнського перемир'я, завмерла вже вся Британія — на національне двохвилинне мовчання.</p>
                  <p>Лондонські газети наступного дня писали:</p>
                  <blockquote className="vshanuy-article__citation">
                    <p>«Перший удар одинадцятої [години] справив магічний ефект. Трамваї завмерли, навіть вантажні коні спинилися, ніби з власної волі. Тиша поглибилася й поширилася на все місто — стала настільки виразною, що вражала відчуттям чутності. Це була тиша, яка була майже болем. І над усім цим витав дух пам'яті».</p>
                  </blockquote>
                  <figure className="vshanuy-article__figure">
                    <img src={londonPhoto} alt="Величезний натовп завмер довкола памʼятника на площі в Лондоні під час першого двохвилинного мовчання" width="696" height="435" loading="lazy" decoding="async"/>
                    <figcaption>Двохвилинне мовчання у День памʼяті у м. Лондон, 1919 р.</figcaption>
                  </figure>
                </section>
              </section>

              <section className="vshanuy-article__section" id="u-sviti" aria-labelledby="u-sviti-title">
                <p className="vshanuy-article__stamp">Ізраїль <span aria-hidden="true">·</span> Японія <span aria-hidden="true">·</span> Туреччина <span aria-hidden="true">·</span> США <span aria-hidden="true">·</span> Україна</p>
                <h2 className="vshanuy-article__heading" id="u-sviti-title">Хвилина мовчання у світі</h2>
                <p>Більшість країн проводять хвилину (або хвилини) мовчання раз чи двічі на рік. Тиша шириться світом – і кожна країна відкриває її по-своєму.</p>
                <p>В Ізраїлі Хвилина мовчання звучить двічі: увечері напередодні Дня памʼяті полеглих о 20:00 звучить сирена тривалістю одну хвилину. Наступного дня об 11:00 – ще одна сирена, вже на дві хвилини, у цей момент зупиняється рух і люди завмирають в знак вшанування.</p>
                <p>Японія спиняється в точну мить катастрофи: 6 серпня о 8:15, коли над Хіросімою вибухнула атомна бомба, і 9 серпня об 11:02, коли вибух стався над Нагасакі.</p>
                <p>У Туреччині щороку 10 листопада о 9:05 Хвилиною мовчання вшановують засновника держави Ататюрка – це час його смерті.</p>
                <p>У США в День памʼяті, в останній понеділок травня, о 15:00 відбувається загальнонаціональна мить памʼяті. Її проводять у тиші або під <em>Taps</em> – військовий сигнал, який давно став там одним зі звуків памʼяті.</p>
                <p>В Україні хвилина мовчання зазвичай супроводжується звуком метронома. Це, до речі, єдине, що <a className="vshanuy-article__inline-link" href="https://nv.ua/ukr/opinion/hvilina-movchannya-anton-drobovich-poyasnyuye-chomu-zvuchit-metronom-50538377.html" target="_blank" rel="noopener noreferrer">ми справді успадкували</a> від Радянського Союзу. Але не саму тишу — тишу ми мали задовго до нього.</p>
              </section>

              <section className="vshanuy-article__section" id="suchasna-ukrayina" aria-labelledby="suchasna-ukrayina-title">
                <p className="vshanuy-article__stamp">2014 → 2022</p>
                <h2 className="vshanuy-article__heading" id="suchasna-ukrayina-title">Сучасна Україна</h2>
                <p>Україна проводить хвилину мовчання давно: зокрема о 16:00 в День пам'яті жертв голодоморів, коли запалюємо свічку.</p>
                <p>У війську хвилина мовчання існує від початку російсько-української війни в 2014 р. Її почали проводити під час шикування о 9:00.</p>
                <p>У 2018 р. при Міністерстві оборони України відкрили <a className="vshanuy-article__inline-link" href="https://armyinform.com.ua/2021/10/31/dzvin-pamyati-prolunav-desyat-raziv-v-minoborony-vshanuvaly-zagyblyh-ukrayinskyh-zahysnykiv/" target="_blank" rel="noopener noreferrer">Меморіальний комплекс «Зала памʼяті»</a>, де о 09:00 щодня зачитували імена загиблих у цей день людей.</p>
                <p>Після удару по драмтеатру в м. Маріуполь, 16 березня 2022 року президент України підписав Указ, яким започатковувалось проведення загальнонаціональної хвилини мовчання щодня за загиблими військовими та вбитими цивільними.</p>
                <p>Та чи була хвилина мовчання до сучасної України?</p>
              </section>

              <section className="vshanuy-article__section" id="povstanska-armiya" aria-labelledby="povstanska-armiya-title">
                <p className="vshanuy-article__stamp">1933 → 1947</p>
                <h2 className="vshanuy-article__heading" id="povstanska-armiya-title">Повстанська армія</h2>
                <p>Під час війни – у лісах, криївках – Українська повстанська армія завмирає на <em>«Загальне вшанування трихвилинною мовчанкою пам'яті всіх поляглих вояків УПА та учасників збройного підпілля, які загинули у рр. 1942–1947».</em> Це цитата зі Святочного наказу, в якому є Інструкція відзначення п'ятиріччя Свята УПА, 14 жовтня 1947 року.</p>
                <figure className="vshanuy-article__figure vshanuy-article__figure--natural">
                  <img src={upaInstructionPhoto} alt="Машинописна сторінка «Інструкції в справі проведення Свята УПА»" width="418" height="617" loading="lazy" decoding="async"/>
                  <figcaption>Інструкція в справі проведення «Свята УПА». «Святочний наказ УПА» – це офіційний документ, як відзначати День створення армії. 14 жовтня 1947 року повстанці святкували 5 років</figcaption>
                </figure>
                <p>Повстанці вже тоді зачитували імена загиблих. І розуміли наскільки важлива персоналізація. Вони проводили дво– або трихвилинні мовчанки на всі пам'ятні дати чи свята в підпіллі аж до трансформації Повстанської армії на підпільний рух у середині 1950-х рр.</p>
                <figure className="vshanuy-article__figure">
                  <img src={upaPointDPhoto} alt="Фрагмент документа з пунктом Д про трихвилинну мовчанку" width="978" height="570" loading="lazy" decoding="async"/>
                  <figcaption>Пункт Д: «Загальне вшанування трихвилинною мовчанкою памʼяті всіх поляглих вояків УПА і учасників збройного підпілля, які загинули в 1942-1947 рр..»</figcaption>
                </figure>
                <aside className="vshanuy-article__note">
                  <p className="vshanuy-article__label">Примітка</p>
                  <p>У Радянському Союзі (до складу якого належала Україна) почали проводити хвилину мовчання (мінуту молчанія) у 1965-му – через 20 років після завершення Другої світової війни.</p>
                </aside>
                <p>Але виявилося, що документ від 1947 року – не найдавніший.</p>
                <p>Голодомор 1933 року. По Україні тривають селянські повстання. На Волині (на той момент в складі Польщі) ширяться протести проти репресивної політики СРСР, читаємо в наказі про організацію загального дня протесту: «виділити три хвилини мовчання, протягом яких українські працюючі маси мають подумати про подальші способи боротьби і оборони своєї землі і свободи».</p>
                <figure className="vshanuy-article__figure">
                  <img src={volynPhoto} alt="Сторінка наукового видання з текстом наказу про три хвилини мовчання" width="812" height="973" loading="lazy" decoding="async"/>
                  <figcaption>Витяг із наукового видання «Волинь пам'ятає. Відлуння на Волині голодомору 1932–1933 років у радянській Україні»</figcaption>
                </figure>
                <p>1938 рік. У залі Академічного дому в м. Львів відкривають пам'ятну таблицю. «Лунала „Деклярація молоді“, звучав державний гімн і тривало двохвилинне мовчання», – писала газета «Діло».</p>
                <figure className="vshanuy-article__figure">
                  <img src={diloPhoto} alt="Фрагмент тексту про двохвилинне мовчання у Львові" width="992" height="234" loading="lazy" decoding="async"/>
                  <figcaption>Витяг із праці Ярослава Марченка «Памʼять про Героїв Крут на сторінках газети „Діло“»</figcaption>
                </figure>
                <p>1945 рік, День Героїв Крут. У наказі знову читаємо: «три хвилини мовчанки» за полеглими.</p>
                <figure className="vshanuy-article__figure">
                  <img src={hrynykPhoto} alt="Сторінка дисертації зі згадками про хвилини мовчання" width="773" height="602" loading="lazy" decoding="async"/>
                  <figcaption>Дисертація Лілії Гриник «Повсякденне життя українських повстанців на Прикарпатті (1940-1950-ті рр.)» має принаймні три згадки про вшанування тишею. У тексті згадано про хвилину мовчання, а десь про дві хвилини мовчання</figcaption>
                </figure>
              </section>

              <section className="vshanuy-article__section" id="iryna-tsybukh" aria-labelledby="iryna-tsybukh-title">
                <p className="vshanuy-article__stamp">Герой України</p>
                <h2 className="vshanuy-article__heading" id="iryna-tsybukh-title">Ірина Цибух, «Чека»</h2>
                <p>Бойова медикиня, журналістка, Герой України. Загинула у 2024 року.</p>
                <p>За життя вона говорила про хвилину мовчання як про ритуал вдячності, з якого можна починати свій день. Просила персоналізувати його – згадувати конкретні імена. Казала: <em>«Так, ця хвилина зачіпає навіть тих, хто не причетний до війни. Але саме так до неї можна стати причетним».</em></p>
                <blockquote className="vshanuy-article__pullquote">
                  <p>«Пам'ять – не для загиблих, бо вони вже загинули. Вона – для майбутніх поколінь. І ми, як свідки, маємо нести її далі»</p>
                  <footer>Ірина Цибух, «Чека»</footer>
                </blockquote>
                <p className="vshanuy-article__accent">Ми несемо.</p>
                <p>Що це для нас сьогоднішніх?</p>
                <p>Сьогодні щоденним проведенням ми зробили хвилину мовчання справді універсальним способом пам'яті. Для когось це хвилина честі. Для когось – гордості. Хвилина пам'яті чи хвилина єдності. Для когось – хвилина, коли згадують імена. Хтось думає про живих і про те, кому написати сьогодні. Хтось питає себе: а що я роблю для своєї країни?</p>
                <figure className="vshanuy-article__figure">
                  <img src={maidanPhoto} alt="Люди з плакатами на площі в Києві" width="660" height="439" loading="lazy" decoding="async"/>
                </figure>
                <p>Думаю, що після закінчення війни, ми трансформуємо нашу Хвилину мовчання із щоденного ритуалу – у ритуал раз на рік.</p>
                <p className="vshanuy-article__accent">Історія перевіряється пам'яттю. І ми, українці, проходимо цю перевірку.</p>
              </section>

              <footer className="vshanuy-article__epilogue">
                <p><em>У 2008-му році на місці полудневої гармати встановили табличку. На ній пояснено, що саме звідси поширилась традиція «двохвилинного мовчання». А також те, чому саме двохвилинна: перша хвилина – щоб згадати полеглих, друга – щоб подякувати тим, хто вижив.</em></p>
              </footer>

              <section className="vshanuy-article__sources" aria-labelledby="vshanuy-article-sources">
                <h2 className="vshanuy-article__label" id="vshanuy-article-sources">Джерела</h2>
                <div className="vshanuy-article__sources-group">
                  <h3>Місто, що спинялося щодня</h3>
                  <ul>
                    <li><a className="vshanuy-article__inline-link" href="https://samilhistory.com/2016/11/04/2-minutes-silence-a-uniquely-south-african-gift-to-remembrance/" target="_blank" rel="noopener noreferrer">samilhistory.com</a></li>
                    <li><a className="vshanuy-article__inline-link" href="https://www.theheritageportal.co.za/article/traditional-two-minutes-silence-remembrance-was-first-observed-cape-town" target="_blank" rel="noopener noreferrer">theheritageportal.co.za</a></li>
                  </ul>
                </div>
                <div className="vshanuy-article__sources-group">
                  <h3>Альтернативна версія · Тиша на всю країну</h3>
                  <ul>
                    <li><a className="vshanuy-article__inline-link" href="https://www.theguardian.com/theguardian/2013/nov/12/armistice-day-first-world-war" target="_blank" rel="noopener noreferrer">theguardian.com</a></li>
                    <li><a className="vshanuy-article__inline-link" href="https://www.abc.net.au/news/2011-11-11/macinnes---observing-remembrance-day/3658810" target="_blank" rel="noopener noreferrer">abc.net.au</a></li>
                    <li><a className="vshanuy-article__inline-link" href="https://anzacportal.dva.gov.au/commemoration/symbols/one-minutes-silence" target="_blank" rel="noopener noreferrer">anzacportal.dva.gov.au</a></li>
                  </ul>
                </div>
                <div className="vshanuy-article__sources-group">
                  <h3>Хвилина мовчання у світі</h3>
                  <ul>
                    <li><a className="vshanuy-article__inline-link" href="https://www.gov.il/en/pages/memorial-day-for-the-fallen-soldiers-and-victims-of-terrorism-2025" target="_blank" rel="noopener noreferrer">Ізраїль · gov.il</a></li>
                    <li><a className="vshanuy-article__inline-link" href="https://www.city.hiroshima.lg.jp/english/peace/1029871/1009572.html" target="_blank" rel="noopener noreferrer">Японія, Хіросіма · city.hiroshima.lg.jp</a></li>
                    <li><a className="vshanuy-article__inline-link" href="https://japan.kantei.go.jp/105/actions/202608/09nagasaki.html" target="_blank" rel="noopener noreferrer">Японія, Нагасакі · japan.kantei.go.jp</a></li>
                    <li><a className="vshanuy-article__inline-link" href="https://eskisehir.gov.tr/buyuk-onder-ataturkun-ebediyete-irtihalinin-87-yili-anma-programi-10-kasim-2025" target="_blank" rel="noopener noreferrer">Туреччина · eskisehir.gov.tr</a></li>
                    <li><a className="vshanuy-article__inline-link" href="https://vacareers.va.gov/job-news-advice/memorial-day-join-va-honor-those-who-served/" target="_blank" rel="noopener noreferrer">США · va.gov</a></li>
                  </ul>
                </div>
                <div className="vshanuy-article__sources-group">
                  <h3>Повстанська армія</h3>
                  <ul>
                    <li>Дисертація Лілії Гриник, яка описує повсякдення життя упівців, має принаймні три згадки про вшанування тишею. Десь у тексті згадано про хвилину мовчання, а десь – про дві хвилини мовчання. <a className="vshanuy-article__inline-link" href="https://scholar.google.com/citations?view_op=view_citation&hl=uk&user=0LwdU68AAAAJ&citation_for_view=0LwdU68AAAAJ:5nxA0vEk-isC" target="_blank" rel="noopener noreferrer">scholar.google.com</a></li>
                    <li>Ярослав Марченко у своїй праці «Памʼять про Героїв Крут» на сторінках газети «Діло» розповідає про 1938 р., коли відкривали пам’ятну табличку на їх честь. В цьому джерелі також згадуються саме дві хвилини мовчання. <a className="vshanuy-article__inline-link" href="https://ukr-inst.lviv.ua/index.php/ukraina-polshcha/article/view/7" target="_blank" rel="noopener noreferrer">ukr-inst.lviv.ua</a></li>
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
