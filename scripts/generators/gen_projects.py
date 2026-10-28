"""Генерує сторінки проєктів (site/napryamky/<проєкт>.html) і списки site/diyalnist.html (напрями) та site/proekty.html (проєкти).

Запуск із кореня репозиторію: python3 scripts/generators/gen_projects.py,
потім python3 scripts/generators/gen_directions.py (бере дані з projects.json).
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
SITE = HERE.parent.parent / "site"
PROJECTS_JSON = HERE / "projects.json"

CSS_V = {"fo": "20261028navf", "mats": "20261026b", "mat": "20261028a", "dir": "20261027m", "diyal": "20261028b"}
MENU_V = "20261028k"
FOOTER_V = "20261028l"

FORM = "https://forms.gle/2Sj6jCphk5hiPoEY6"
LAW = "https://zakon.rada.gov.ua/laws/show/4783-20"

def link(href, text):
    return f'<a class="vshanuy-article__inline-link" href="{href}" target="_blank" rel="noopener noreferrer">{text}</a>'

PROJECTS = [
    {
        "slug": "hvylyna-movchannya",
        "num": "01",
        "card": "Хвилина мовчання",
        "title": "Хвилина мовчання",
        "image": "vshanuy-proekt-hvylyna-movchannya-1600.webp",
        "w": 1600, "h": 1067,
        "hero": "vshanuy-proekt-hvylyna-movchannya.webp", "hw": 3600, "hh": 2400,
        "alt": "Учасниця акції тримає табличку «Стою за усіх» на Майдані Незалежності",
        "standfirst": "Хвилина мовчання – це ритуал подяки, пошани та памʼяті. Це символічна обʼєднавча дія, відкрита для залученості широкого кола суспільства, і покликана зберігати памʼять про російсько-українську війну, нашу спільну боротьбу за незалежність.",
        "body": [
            "Незалежно від політичних поглядів, віросповідання, Хвилина мовчання вшановує всіх і не передбачає забарвлення певними ідеологіями, які можуть проявлятися в інших ритуалах памʼятування. Саме з цього простого і зрозумілого ритуалу почалась наша діяльність і продовжується досі. Ми щиро віримо (і вже бачимо), що Хвилина мовчання може бути підтримуючою для тих, хто втратив.",
            f"Ми пройшли довгий шлях від двох людей з картонками на Майдані до {link(LAW, 'Закону України № 4783-IX')}, який офіційно закріпив щоденну загальнонаціональну хвилину мовчання о 9:00. Ми багато працюємо з суспільством, розповідаючи про значення та сенси цієї хвилини. Наша мета – не примусова зупинка людей на вулиці, а глибоке розуміння, для кого і чому потрібна ця мить.",
        ],
        "materials": [],
    },
    {
        "slug": "chekafest",
        "num": "02",
        "card": "ЧекаFest",
        "title": "ЧекаFest",
        "image": "vshanuy-proekt-chekafest-1600.webp",
        "w": 1600, "h": 1067,
        "hero": "vshanuy-proekt-chekafest.webp", "hw": 3600, "hh": 2400,
        "alt": "Гості фестивалю ЧекаFest танцюють біля сцени з портретом Ірини Цибух",
        "standfirst": "ЧЕКАфест – це благодійний освітньо-музичний фестиваль памʼяті Ірини Цибух. Він створений родиною та друзями Іри ЧЕКИ Цибух. Фестиваль щорічний та проводиться у найближчих зручних датах до дня народження Ірини – 1 червня.",
        "body": [
            "Діяльність Ірини була присвячена політиці памʼяті, меморіалізації тих, хто віддав життя за Україну, а також реформі медіа в Україні, плеканню медіаграмотності та критичного мислення у суспільстві, утвердженню української культури, зокрема через пісню. З 2022 Іра була бойовою медикинею «Госпітальєрів» і рятувала життя на лінії фронту.",
            "ЧЕКАфест існує, щоб утвердити нові практики памʼятування: живі, людяні, персоналізовані, без кальки та без пафосу, та продовжити справу Чеки як спадщину, яку реалізують люди з її кола.",
            "Наше завдання – творити і поширювати культуру памʼятування через освіту, музику і спільні практики так, щоб памʼять про полеглих ставала дією, підтримкою живих і ґрунтом для майбутнього.",
        ],
        "materials": [],
    },
    {
        "slug": "proshchannya-z-praporom",
        "num": "03",
        "card": "Прощання з прапором",
        "title": "Прощання з прапором",
        "image": "vshanuy-proekt-proshchannya-z-praporom-1600.webp",
        "w": 1600, "h": 1067,
        "hero": "vshanuy-proekt-proshchannya-z-praporom.webp", "hw": 3600, "hh": 2400,
        "alt": "Український прапор над похованнями воїнів на кладовищі",
        "standfirst": "Прощання з прапором – це церемонія, коли державний символ завершує свою службу і ми визнаємо це з повагою. З часом прапор зношується, вигорає, рветься та втрачає вигляд. І в якийсь момент перед нами постає дуже практичне і ціннісне питання – що ж робити далі?",
        "body": [
            "Сьогодні в Україні немає окремого закону чи чіткої державної процедури, яка б регулювала цей процес. І саме тому різні громади починають шукати свої відповіді.",
            "Наразі ми проводимо дослідження, як цю проблему вирішують різні громади та країни, і налагоджуємо співпрацю з державою, військовими та родинами загиблих, щоб знайти саме той ритуал, який найбільше відповідатиме запиту українського суспільства.",
        ],
        "materials": [],
    },
    {
        "slug": "tryzna",
        "num": "04",
        "card": "Тризна",
        "title": "Тризна – прощання міста із загиблими",
        "image": "vshanuy-proekt-tryzna-1600.webp",
        "w": 1600, "h": 1067,
        "hero": "vshanuy-proekt-tryzna.webp", "hw": 3600, "hh": 2400,
        "alt": "Учасники церемонії з червоними гвоздиками стоять, приклавши руку до серця",
        "standfirst": "Прощання з військовим – це публічний спосіб вшанувати людину й символічно подякувати їй за службу. Прощання з містом – остання зустріч загиблого з його громадою. Це важливий, майже сакральний момент для всіх учасників, а надто для родини, яка втратила найдорожче – свою людину.",
        "body": [
            "Ми прагнемо, щоб це прощання відбувалось однаково гідно як у великому мегаполісі, так і в маленькому селі, щоб місто прощалось шанобливо як з генералом, так і з рядовим солдатом. Тому в межах проєкту «Тризна» ми збираємо та досліджуємо досвід громад і людей, щоб розробити алгоритм із мінімально необхідних кроків, завдяки яким церемонія прощання з містом буде гідною.",
        ],
        "sections": [
            {
                "id": "opytuvannya",
                "heading": "Опитування про прощання з військовим",
                "figure": ("vshanuy-tryzna-opytuvannya.jpg", 1024, 682, "Почесна варта в білих рукавичках тримає розгорнутий державний прапор, позаду на щоглах майорять прапори України"),
                "body": [
                    "Прощання із загиблим військовим — дуже особистий досвід для родини й водночас момент, у якому бере участь уся громада. У різних містах України такі прощання відбуваються по-різному: десь вони дають родині відчуття підтримки та гідного вшанування, а десь можуть залишати біль, розгубленість чи відчуття, що важливого не було почуто.",
                    "Ми хочемо зібрати досвід родин і близьких загиблих військових, щоб зрозуміти, які практики прощання сьогодні допомагають, що потребує змін і яким може бути гідне прощання — з повагою до людини, її родини та громади.",
                    "Ваші відповіді допоможуть нам сформувати рекомендації для громад і зробити практики вшанування більш людяними та чутливими.",
                    f"<strong>{link(FORM, 'Заповнити опитування')}</strong>",
                    "Участь є добровільною. Ви можете не відповідати на будь-яке запитання, зупинитися в будь-який момент або залишити свою історію анонімно.",
                ],
            },
        ],
        "materials": [],
    },
    {
        "slug": "pomizh-nas",
        "num": "05",
        "card": "Поміж нас",
        "title": "Поміж нас",
        "image": "vshanuy-proekt-pomizh-nas-1600.webp",
        "w": 1600, "h": 1067,
        "hero": "vshanuy-proekt-pomizh-nas.webp", "hw": 3600, "hh": 2400, "hero_pos": "50% 80%",
        "alt": "Лавочка з табличкою «Тут міг сидіти той, хто віддав за нас своє життя» біля кавʼярні",
        "standfirst": "Загальноукраїнський проєкт «Поміж нас», започаткований ГО «Вшануй», є глибоко гуманним та важливим проєктом із вшанування памʼяті загиблих Захисників і Захисниць України, а також підтримки родин полонених та зниклих безвісти. Це тактовне нагадування суспільству про ціну нашого умовно спокійного життя.",
        "body": [
            "Ми назвали проєкт <strong>«Поміж нас»</strong>, бо ті, про кого хочемо нагадати, у наших серцях, думках, діях і памʼяті. Поміж нас завжди, де б не були.",
        ],
        "materials": [
            (link("https://docs.google.com/document/d/1yYr0Vt-xpSzRjmL-KhSH6bRLhHSdQ2rGVeCoXFRYzkQ/edit?usp=drive_link", "Інструкція, як реалізувати проєкт «Поміж нас»"),),
            (link("https://docs.google.com/document/d/1hgEUAAUweIdikw4t36DAND8xo_BhDnsHPmCsbpurijY/edit?usp=drive_link", "Рекомендації для відповідальних за політику памʼяті та вшанування у громадах"),),
            (link("https://docs.google.com/document/d/11qXjP7NozwJz36av-cpPaU3nX5p47lv7d0zgnOzJxfk/edit?usp=drive_link", "Рекомендації для Рад родин загиблих"),),
        ],
    },
    {
        "slug": "dzerkalo-pamyati",
        "num": "06",
        "card": "Дзеркало памʼяті",
        "title": "Дзеркало памʼяті",
        "image": "vshanuy-proekt-dzerkalo-pamyati-1600.webp",
        "w": 1600, "h": 1067,
        "hero": "vshanuy-proekt-dzerkalo-pamyati.webp", "hw": 3600, "hh": 2400,
        "alt": "Дзеркало памʼяті з іменами загиблих і написом «Вони назавжди з нами. У наших серцях»",
        "standfirst": "Дзеркало памʼяті – проєкт, реалізований командою координаторок «Вшануй» у Полтаві. Це місце, де кожен може залишити імʼя людини, яку вбила росія, щоб вона була видимою у просторі міста.",
        "body": [
            "У Полтаві дзеркало розміщене у кавʼярні «Благокава», а точніше ззовні закладу, де кожен, хто проходить повз, може долучитись. Люди залишають написи на папері, а потім за місяць дзеркало доповнюють новими іменами.",
        ],
        "materials": [
            ("Дзеркало памʼяті – інструкція", "Як втілити проєкт."),
        ],
    },
    {
        "slug": "vinkuvannya",
        "num": "07",
        "card": "Вінкування",
        "title": "Вінкування",
        "image": "vshanuy-proekt-vinkuvannya-1600.webp",
        "w": 1600, "h": 1067,
        "hero": "vshanuy-proekt-vinkuvannya.webp", "hw": 3600, "hh": 2400,
        "alt": "Учасниці плетуть вінки з живих квітів за довгим столом",
        "standfirst": "29 серпня 2026 року, в День памʼяті загиблих захисників та захисниць, ми відновлювали давню українську традицію вінкування на честь полеглих. Родини та друзі загиблих під розповіді про їх найщасливіші моменти власноруч створювали вінки з живих квітів. Кожна квітка та рослинка – як спомин про рідну людину: волошка – бо він мав сині очі…",
        "body": [],
        "materials": [
            (link("https://drive.google.com/file/d/1SyFeIjwcupOJZPUTYNJFIsi2RbxUZDC-/view?usp=sharing", "Вінкування для бізнесу"),),
            (link("https://docs.google.com/document/d/1iucw8UpdVfRackWgp6bO3CeKnNr2xDGRWq2xpRRfgao/edit?tab=t.0#heading=h.8x4pmlb5ixnp", "Гайд, як організувати вінкування"),),
        ],
    },
    {
        "slug": "tse-mozhe-buty-tysha",
        "num": "08",
        "card": "Виставка «Це може бути тиша»",
        "title": "Виставка «Це може бути тиша»",
        "image": "vshanuy-proekt-tse-mozhe-buty-tysha-1600.webp",
        "w": 1600, "h": 1067,
        "hero": "vshanuy-proekt-tse-mozhe-buty-tysha.webp", "hw": 3600, "hh": 2400,
        "alt": "Жінка розповідає про експозицію виставки «Це може бути тиша» серед підвішених фотографій неба",
        "caption": "Музей війни · Фото: Роман Пупенко",
        "standfirst": "Протягом вересня 2026 року у Головному корпусі Музею війни проходила виставка «Це може бути тиша» – про небо над могилами, імена полеглих та історію Хвилини мовчання. Виставку було приурочено до Дня памʼяті захисників України.",
        "body": [
            "29 серпня – це ще один день, коли ми згадуємо своїх і нагадуємо усім про ціну нашої Незалежності.",
            "Центральною експозицією виставки стала робота Вероніки Моль «Це може бути тиша» – 470 фотографій неба над могилами полеглих Захисників і Захисниць, підписаних їхніми іменами.",
            "Окремою частиною виставки стала історія Хвилини мовчання – від її виникнення до сучасної української практики. Авторки виставки говорять про щоденний ритуал памʼяті, його значення та про те, як спільна дія допомагає суспільству памʼятати.",
            "Ми так часто опускаємо очі до землі.<br/>А як же небо?",
        ],
        "materials": [],
    },
]


def caption(p):
    if not p.get("caption"):
        return ""
    return f'\n          <figcaption>{p["caption"]}</figcaption>'


def page(p):
    body = "\n".join(f"            <p>{t}</p>" for t in p["body"])
    section = f"""          <div class="vshanuy-article__section">
{body}
          </div>
""" if p["body"] else ""
    for sec in p.get("sections", []):
        image, w, h, alt = sec["figure"]
        sec_body = "\n".join(f"            <p>{t}</p>" for t in sec["body"])
        section += f"""
          <section class="vshanuy-article__section" id="{sec['id']}" aria-labelledby="{sec['id']}-title">
            <h2 class="vshanuy-article__heading" id="{sec['id']}-title">{sec['heading']}</h2>
            <figure class="vshanuy-article__figure">
              <img src="../_next/static/media/{image}" alt="{alt}" width="{w}" height="{h}" loading="lazy" decoding="async"/>
            </figure>
{sec_body}
          </section>
"""
    mats = ""
    if p["materials"]:
        rows = "\n".join(
            f"              <li><div><strong>{title}</strong>" + "".join(f"<p>{n}</p>" for n in notes) + "</div></li>"
            for title, *notes in p["materials"])
        mats = f"""
          <section class="vshanuy-article__section" id="materialy" aria-labelledby="vshanuy-project-materials">
            <h2 class="vshanuy-article__heading" id="vshanuy-project-materials">Корисні матеріали</h2>
            <ol class="vshanuy-article__steps vshanuy-direction__toolkit">
{rows}
            </ol>
          </section>
"""
    others = [o for o in PROJECTS if o["slug"] != p["slug"]]
    chevron_l = '<svg viewBox="0 0 8 8" aria-hidden="true" focusable="false"><path d="M5.5 1 2.5 4l3 3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
    chevron_r = '<svg viewBox="0 0 8 8" aria-hidden="true" focusable="false"><path d="m2.5 1 3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
    cards = "\n".join(f"""          <li class="vshanuy-project-slider__slide">
            <a class="vshanuy-project-slider__card" href="../napryamky/{o['slug']}.html">
              <span class="vshanuy-project-slider__media"><img src="../_next/static/media/{o['image']}" alt="" width="{o['w']}" height="{o['h']}" loading="lazy" decoding="async" draggable="false"/></span>
              <div class="vshanuy-project-slider__meta">
                <div class="vshanuy-project-slider__text">
                  <h3 class="vshanuy-project-slider__name">{o['card']}</h3>
                  <p class="vshanuy-project-slider__desc">{o['teaser']}</p>
                </div>
              </div>
            </a>
          </li>""" for o in others)
    related = f"""    <section class="vshanuy-project-slider" aria-labelledby="vshanuy-project-related">
      <div class="vshanuy-project-slider__head">
        <h2 class="vshanuy-article__label" id="vshanuy-project-related">Інші проєкти</h2>
        <a class="vshanuy-article__link" href="../proekty.html">Усі проєкти <span aria-hidden="true">→</span></a>
      </div>
      <div class="vshanuy-project-slider__viewport" tabindex="0" aria-label="Інші проєкти, гортайте вбік">
        <ul class="vshanuy-project-slider__track">
{cards}
        </ul>
      </div>
      <div class="vshanuy-project-slider__controls">
        <div class="vshanuy-project-slider__bar">
          <button class="vshanuy-project-slider__button" type="button" data-slider-prev aria-label="Попередні проєкти">{chevron_l}</button>
          <span class="vshanuy-project-slider__time" aria-hidden="true">9:00</span>
          <button class="vshanuy-project-slider__button" type="button" data-slider-next aria-label="Наступні проєкти">{chevron_r}</button>
        </div>
      </div>
    </section>"""
    desc = p["standfirst"].replace('"', "&quot;")
    return f"""<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>{p['card']} — Проєкти — Вшануй</title>
  <meta name="description" content="{desc}"/>
  <link rel="stylesheet" href="../_next/static/css/font-overrides.css?v={CSS_V['fo']}"/>
  <link rel="stylesheet" href="../_next/static/css/materialy.css?v={CSS_V['mats']}"/>
  <link rel="stylesheet" href="../_next/static/css/material.css?v={CSS_V['mat']}"/>
  <link rel="stylesheet" href="../_next/static/css/napryamok.css?v={CSS_V['dir']}"/>
  <link rel="stylesheet" href="../_next/static/css/project-slider.css?v=20261028a"/>
</head>
<body class="vshanuy-article-page vshanuy-project-page">
  <div class="vshanuy-page-guides" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <header class="sticky"></header>

  <main class="vshanuy-article">
    <article>
      <header class="vshanuy-article__intro vshanuy-project__intro">
        <a class="vshanuy-article__back" href="../proekty.html"><span aria-hidden="true">←</span> Проєкти</a>
        <figure class="vshanuy-project__hero">
          <img src="../_next/static/media/{p.get('hero', p['image'])}" alt="{p['alt']}" width="{p.get('hw', p['w'])}" height="{p.get('hh', p['h'])}"{f' style="object-position: {p["hero_pos"]}"' if p.get('hero_pos') else ''} decoding="async"/>{caption(p)}
        </figure>
        <h1 class="vshanuy-article__title">{p['title']}</h1>
        <dl class="vshanuy-project__passport">
          <div>
            <dt class="vshanuy-article__label">Напрями:</dt>
            <dd>{directions_links(p['slug'])}</dd>
          </div>
        </dl>
        <p class="vshanuy-article__standfirst">{p['standfirst']}</p>
      </header>

      <div class="vshanuy-article__layout">
        <div class="vshanuy-article__body">
{section}{mats}        </div>
      </div>
    </article>

{related}
  </main>

  <footer></footer>

  <script src="../_next/static/chunks/vshanuy-smooth-scroll.js?v=20261023a"></script>
  <script src="../_next/static/chunks/vshanuy-menu.js?v={MENU_V}"></script>
  <script src="../_next/static/chunks/vshanuy-footer.js?v={FOOTER_V}"></script>
  <script src="../_next/static/chunks/vshanuy-project-slider.js?v=20261026a"></script>
</body>
</html>
"""


import re as _re
_css = open(SITE / "_next/static/css/font-overrides.css", encoding="utf-8").read()
for _p in PROJECTS:
    _m = _re.search(r'href\*="' + _p["slug"] + r'"\] h3\.font-serif::after \{\s*content: "([^"]+)"', _css)
    _p["teaser"] = _m.group(1) if _m else _p["standfirst"]


DIRECTION_PAGES = {"biznes": "spivpratsya-z-biznesom"}


def directions_links(slug):
    labels = dict(FILTERS)
    return ", ".join(
        f'<a href="../napryamky/{DIRECTION_PAGES.get(k, k)}.html">{labels[k]}</a>' for k in PROJECT_DIRECTIONS[slug]
    )


PROJECT_DIRECTIONS = {
    "hvylyna-movchannya": ["gromada", "biznes", "derzhava", "osvita"],
    "chekafest": ["suspilstvo"],
    "proshchannya-z-praporom": ["gromada", "derzhava"],
    "tryzna": ["gromada"],
    "pomizh-nas": ["suspilstvo"],
    "dzerkalo-pamyati": ["suspilstvo"],
    "vinkuvannya": ["suspilstvo"],
    "tse-mozhe-buty-tysha": ["mystetstvo"],
}
FILTERS = [
    ("gromada", "Громади"),
    ("biznes", "Бізнес"),
    ("derzhava", "Держава"),
    ("suspilstvo", "Суспільство"),
    ("osvita", "Освіта"),
    ("viysko", "Військо"),
    ("mystetstvo", "Мистецтво"),
]


def list_page():
    src = open(SITE / "_next/static/chunks/vshanuy-directions.js", encoding="utf-8").read()
    dirs = _re.findall(r'title: "([^"]+)",\s*href: "([^"]+)",\s*image: "([^"]+)",\s*description:\s*"([^"]+)"', src)
    directions = "\n".join(f"""      <li>
        <a class="vshanuy-activity__card" href="{h}">
          <div class="vshanuy-activity__copy">
            <h3 class="vshanuy-activity__title">{t}</h3>
            <p class="vshanuy-activity__text">{d}</p>
          </div>
          <span class="vshanuy-activity__media" aria-hidden="true"><img src="{img}" alt="" width="960" height="640"{' loading="lazy"' if i > 1 else ''} decoding="async"/></span>
        </a>
      </li>""" for i, (t, h, img, d) in enumerate(dirs))
    counts = {k: sum(k in v for v in PROJECT_DIRECTIONS.values()) for k, _ in FILTERS}
    filters = "\n".join(
        [f'          <li><button type="button" data-project-filter="all" aria-pressed="true">Усі <span data-count>{len(PROJECTS)}</span></button></li>']
        + [f'          <li><button type="button" data-project-filter="{k}" aria-pressed="false">{label} <span data-count>{counts[k]}</span></button></li>'
           for k, label in FILTERS if counts[k]]
    )
    cards = "\n".join(f"""        <li class="vshanuy-projects-page__item" data-directions="{' '.join(PROJECT_DIRECTIONS[o['slug']])}">
          <a class="vshanuy-project-slider__card" href="napryamky/{o['slug']}.html">
            <span class="vshanuy-project-slider__media"><img src="_next/static/media/{o['image']}" alt="" width="{o['w']}" height="{o['h']}"{' loading="lazy"' if i > 1 else ''} decoding="async"/></span>
            <div class="vshanuy-project-slider__meta">
              <div class="vshanuy-project-slider__text">
                <h2 class="vshanuy-project-slider__name">{o['card']}</h2>
                <p class="vshanuy-project-slider__desc">{o['teaser']}</p>
              </div>
            </div>
          </a>
        </li>""" for i, o in enumerate(PROJECTS))
    directions_body = f"""    <header class="vshanuy-materials-page__intro">
      <h1 class="vshanuy-materials-page__title">Напрями роботи.</h1>
    </header>

    <section class="vshanuy-activity__section" aria-labelledby="vshanuy-activity-directions-title">
      <header class="vshanuy-activity__section-head">
        <h2 class="vshanuy-activity__section-title" id="vshanuy-activity-directions-title">Для кого ми говоримо про памʼять</h2>
      </header>
      <ul class="vshanuy-activity__directions">
{directions}
      </ul>
    </section>"""
    projects_body = f"""    <header class="vshanuy-materials-page__intro">
      <h1 class="vshanuy-materials-page__title" id="vshanuy-projects-title">Проєкти.</h1>
      <ul class="vshanuy-materials-page__filters" aria-label="Напрям">
{filters}
      </ul>
    </header>

    <section class="vshanuy-activity__projects vshanuy-activity__projects--page" aria-labelledby="vshanuy-projects-title">
      <ul class="vshanuy-projects-page__list" data-projects>
{cards}
      </ul>
      <p class="vshanuy-visually-hidden" role="status" aria-live="polite" data-projects-status></p>
    </section>"""
    return (
        list_shell("Напрями роботи", "vshanuy-activity-page", directions_body, ""),
        list_shell("Проєкти", "vshanuy-projects-index-page", projects_body,
                   '\n  <script src="_next/static/chunks/vshanuy-project-filters.js?v=20261027a"></script>'),
    )


def list_shell(title, body_class, body, extra_scripts):
    return f"""<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>{title} — Вшануй</title>
  <link rel="stylesheet" href="_next/static/css/font-overrides.css?v={CSS_V['fo']}"/>
  <link rel="stylesheet" href="_next/static/css/materialy.css?v={CSS_V['mats']}"/>
  <link rel="stylesheet" href="_next/static/css/project-slider.css?v=20261028a"/>
  <link rel="stylesheet" href="_next/static/css/diyalnist.css?v={CSS_V['diyal']}"/>
</head>
<body class="vshanuy-materials-page {body_class}">
  <div class="vshanuy-page-guides" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <header class="sticky"></header>

  <main class="vshanuy-materials-page__main">
{body}
  </main>

  <footer></footer>

  <script src="_next/static/chunks/vshanuy-smooth-scroll.js?v=20261023a"></script>
  <script src="_next/static/chunks/vshanuy-menu.js?v={MENU_V}"></script>
  <script src="_next/static/chunks/vshanuy-footer.js?v={FOOTER_V}"></script>{extra_scripts}
</body>
</html>
"""


if __name__ == "__main__":
    directions_html, projects_html = list_page()
    open(SITE / "diyalnist.html", "w", encoding="utf-8").write(directions_html)
    open(SITE / "proekty.html", "w", encoding="utf-8").write(projects_html)
    root = str(SITE / "napryamky") + "/"
    for p in PROJECTS:
        open(root + p["slug"] + ".html", "w", encoding="utf-8").write(page(p))
    for p in PROJECTS:
        p["directions"] = PROJECT_DIRECTIONS[p["slug"]]
    json.dump(PROJECTS, open(PROJECTS_JSON, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("ok", len(PROJECTS))
