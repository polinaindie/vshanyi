"""Генерує сторінки напрямів (site/napryamky/<напрям>.html).

Запускати після gen_projects.py — читає projects.json, який той створює.
"""
import re
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
SITE = HERE.parent.parent / "site"
PROJECTS_JSON = HERE / "projects.json"

CSS_V = {"fo": "20261028navf", "mats": "20261026b", "mat": "20261028a", "slider": "20261028a", "dir": "20261027m"}
MENU_V = "20261028k"
FOOTER_V = "20261028l"
LAW = "https://zakon.rada.gov.ua/laws/show/4783-20"
EMAIL = "momentofhonorukraine@gmail.com"
GROMADA_FORM = "https://forms.gle/YCupf54quWyLLyfT8"
OSVITA_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSfQQiOTXEJ8OTeUT2-hvXX09zOXVQftzzN6FjV86JIbo80jbw/viewform"
WORKUA = "https://www.work.ua/minute-of-silence"

PROJECTS = {p["slug"]: p for p in json.load(open(PROJECTS_JSON, encoding="utf-8"))}


CHECKLIST_URL = "https://drive.google.com/file/d/1VW2v6Tm2faZMs-iPSLpaknNTZ-EOYuJC/view"


def ext(href, text):
    if href == "#":
        return f'<a class="vshanuy-article__inline-link" href="#">{text}</a>'
    return f'<a class="vshanuy-article__inline-link" href="{href}" target="_blank" rel="noopener noreferrer">{text}</a>'


def internal(href, text):
    return f'<a class="vshanuy-article__inline-link" href="{href}">{text}</a>'


def mail():
    return f'<a class="vshanuy-article__inline-link" href="mailto:{EMAIL}">{EMAIL}</a>'


def section(sid, heading, inner):
    head = f'            <h2 class="vshanuy-article__heading" id="{sid}-title">{heading}</h2>\n' if heading else ""
    label = f' aria-labelledby="{sid}-title"' if heading else ""
    return f"""          <section class="vshanuy-article__section" id="{sid}"{label}>
{head}{inner}
          </section>"""


def ps(*texts):
    return "\n".join(f"            <p>{t}</p>" for t in texts)


CITY_CHATS = [
    ("Київ", "+AvW-hH5II9w1ZDUy"), ("Дніпро", "dnipro9_00"), ("Харків", "moment_of_honor_kharkiv"),
    ("Суми", "moment_of_honor_sumy"), ("Одеса", "moment_of_honor_odesa"), ("Львів", "moment_of_honor_lviv"),
    ("Вінниця", "moment_of_honor_vinnytsia"), ("Черкаси", "moment_of_honor_cherkasy"), ("Рівне", "rivne_moment_of_honor"),
    ("Миргород", "moment_of_honor_myrhorod"), ("Ужгород", "uzh_vshanui"), ("Чернігів", "+3jITZJdAXMI4ZGQy"),
    ("Полтава", "moment_of_honor_poltava"), ("Олександрія", "+odB87XCMr5piMGUy"), ("Ірпінь", "irpin_hvylyna_movchannya"),
    ("Івано-Франківськ", "+5HG9csFU9YgxYWM6"), ("Тернопіль", "vshanuy"), ("Кривий Ріг", "+OuIZml-lSS5iNmU6"),
    ("Луцьк", "+pKiWcIi3a7w0MWVi"), ("Житомир", "+LFiNWyA5dMFiYWVi"), ("Миколаїв", "+ZrsZYO3nbZ41MWNi"),
    ("Бровари", "+yP3M-OfZ9YIwYTE6"), ("Запоріжжя", "+TAinknWMV8FmYmJi"), ("Хмельницький", "moment_of_honor_khmelnytskyi"),
    ("Біла Церква", "moment_of_honor_bila_tserkva"),
]
UA_ORDER = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя"


def ua_key(name):
    return [UA_ORDER.index(c) if c in UA_ORDER else len(UA_ORDER) + ord(c) for c in name.lower()]


def plural_mist(n):
    if n % 10 == 1 and n % 100 != 11:
        return "місто"
    if 2 <= n % 10 <= 4 and not 12 <= n % 100 <= 14:
        return "міста"
    return "міст"


def city_chats():
    links = "\n".join(
        f'                  <li><a class="vshanuy-article__inline-link" href="https://t.me/{code}" target="_blank" rel="noopener noreferrer">{city}</a></li>'
        for city, code in sorted(CITY_CHATS, key=lambda c: ua_key(c[0]))
    )
    n = len(CITY_CHATS)
    return (
        '<details class="vshanuy-direction__chats" id="chaty">\n'
        f'                <summary><strong>Чати міст по Україні до акцій</strong><span>{n} {plural_mist(n)} · Telegram</span></summary>\n'
        '                <ul class="vshanuy-direction__chat-list">\n'
        f"{links}\n"
        "                </ul>\n"
        '                <p>Не знайшли свого міста? Напишіть нам у Telegram: <a class="vshanuy-article__inline-link" href="https://t.me/moment_of_honor" target="_blank" rel="noopener noreferrer">@moment_of_honor</a></p>\n'
        "              </details>"
    )


def resources(items):
    rows = []
    for item in items:
        if isinstance(item, str):
            rows.append(f"              <li>{item}</li>")
            continue
        title, note = item
        body = f"<strong>{title}</strong>" + (f"<p>{note}</p>" if note else "")
        rows.append(f"              <li>{body}</li>")
    return '            <ul class="vshanuy-direction__resources">\n' + "\n".join(rows) + "\n            </ul>"


def steps(items):
    return '            <ol class="vshanuy-article__steps">\n' + "\n".join(f"              <li><span>{t}</span></li>" for t in items) + "\n            </ol>"


def toolkit(items):
    rows = []
    for title, *notes in items:
        body = f"<strong>{title}</strong>" + "".join(
            f'<p class="vshanuy-direction__toolkit-links">{n[1]}</p>' if isinstance(n, tuple) else f"<p>{n}</p>"
            for n in notes
        )
        rows.append(f"              <li><div>{body}</div></li>")
    return '            <ol class="vshanuy-article__steps vshanuy-direction__toolkit">\n' + "\n".join(rows) + "\n            </ol>"


def figure(image, w, h, alt):
    return f"""            <figure class="vshanuy-article__figure">
              <img src="../_next/static/media/{image}" alt="{alt}" width="{w}" height="{h}" loading="lazy" decoding="async"/>
            </figure>"""


DIRECTIONS = [
    {
        "slug": "gromada",
        "num": "01",
        "card": "Громади",
        "title": "Робота з громадами",
        "image": "vshanuy-napryam-gromady.webp", "w": 3600, "h": 2400,
        "alt": "Родини загиблих із банерами та табличками на вулиці",
        "standfirst": "Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики памʼяті. Поширюємо ініціативи в громадах, розробляємо ритуали памʼяті та прощання.",
        "blocks": [
            section("napryamky", None, ps("Ми працюємо у двох напрямах.")),
            section("spilnota", "Маємо активну спільноту координаторів у містах", "\n".join([
                ps("Поступово формуємо мережу людей, які займаються памʼяттю на місцях, зʼєднуємо їх між собою та створюємо простір для постійного обміну досвідом. На основі побаченого в регіонах розробляємо й поширюємо нові практики памʼяті чи цілі ритуали прощання."),
                resources([
                    city_chats(),
                    (ext(GROMADA_FORM, "Стати координатором від «Вшануй» у вашому місті"), None),
                ]),
            ])),
            section("doslidzhennya", "Досліджуємо, як міста працюють з темою памʼяті", "\n".join([
                resources([
                    ("Чернігів", None),
                    ("Запоріжжя", None),
                    ("Миколаїв", None),
                    ("Павлоград", None),
                    ("Кривий Ріг", None),
                    (internal("../materialy/doslidzhennya-kharkiv.html", "Харків"), "Дослідження міських практик памʼяті, прощання та меморіалізації в Харкові"),
                ]),
                ps("Під час поїздок ми зустрічаємося з родинами загиблих, місцевими активістами, представниками міста та області, відвідуємо кладовища, меморіали та інші місця памʼяті, досліджуємо вже наявні ритуали й практики.",
                   "Під час таких поїздок не лише збираємо досвід, а й допомагаємо людям знаходити одне одного. Обмінюємося рішеннями, які вже працюють в інших містах, говоримо про різні практики та намагаємося зрозуміти, чому одна й та сама ідея може працювати в одній громаді й не працювати в іншій."),
            ])),
            section("dlya-hromad", "Що ми вже маємо для громад", toolkit([
                (ext("https://drive.google.com/file/d/1Xz3Sg27o3mEHlHnsqzsjcW7bERJ65fFr/view", "Дорожня карта Хвилини мовчання для міст"),
                 "Як впровадити Хвилину мовчання в місті: приклади розпоряджень, листів, комунікацій і потрібні документи."),
                ("Візуальні матеріали",
                 "Оформлення Хвилини мовчання у просторі міста.",
                 ("links", ext("https://drive.google.com/drive/folders/1QIei5O3jvoufCxl_5Pbhp_vCknuSONyd?usp=drive_link", "Для екранів") + " · " + ext("https://drive.google.com/drive/folders/1q8Q3EFODXmjOsdOuImFQ_jID8-ZkcYS5?usp=drive_link", "Для друку"))),
                (ext("https://drive.google.com/drive/folders/1bm7zYORgurMmTVRJsbHjklG9_9Fg-P86?usp=drive_link", "Звук-оголошення Хвилини мовчання"),
                 "Готовий запис чоловічим (Даня Хомутовський) і жіночим (Соня Сотник) голосами.",
                 f"Хочете оголошення голосом для свого міста? Напишіть нам: {mail()}"),
            ])),
        ],
    },
    {
        "slug": "spivpratsya-z-biznesom",
        "num": "02",
        "card": "Бізнес",
        "title": "Співпраця з бізнесами",
        "image": "vshanuy-napryam-biznes.webp", "w": 3600, "h": 2400,
        "alt": "Розмова на сцені, поруч перекладачка жестовою мовою",
        "standfirst": "Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації. Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й памʼять.",
        "blocks": [
            section("vydyma-pamyat", "А як зробити памʼять видимою у своєму бізнесі?", ps(
                "До цього питання часто приходять компанії та організації. У більшості є чоловіки і жінки, які пішли до війська. І є ті, хто загинули. І також є ті, чиї життя забрала російська атака на робочому місці. Сьогодні це частина корпоративної соціальної відповідальності на рівні з ветеранською політикою.",
                "Чим ми можемо бути вам корисні:")),
            section("dorozhnya-karta", "Дорожня карта для бізнесу, аби впровадити Хвилину мовчання", "\n".join([
                figure("vshanuy-business-panel.jpg", 1280, 853, "Панельна дискусія на сцені: учасниця у військовій формі, спікерка з мікрофоном та інші учасниці перед залом"),
                ps("Дорожня карта для бізнесу – це покрокова інструкція, як бізнес може вбудувати Хвилину мовчання в свої процеси, аби підтримати тих, хто втратив, та віддати шану співробітникам та всім загиблим.",
                   f"Корисні матеріали зібрані в одній теці: «{ext('https://drive.google.com/drive/folders/16psMcEeBOMho4B_rr64QF-85FeGd3NKK?usp=drive_link', 'Хвилина мовчання для бізнесу')}»."),
                toolkit([
                    (ext("https://docs.google.com/document/d/1X-qyI5rbkrLuLo7jJjDyRM8zb3cmT51dSv-Qps_wfKU/edit?tab=t.0#heading=h.19im2pk2pd0u", "Дорожня карта Хвилини мовчання для бізнесу"),
                     "Покрокова інструкція, як впровадити Хвилину мовчання в компанії."),
                    (ext("https://drive.google.com/drive/folders/1NcnQe0vvwyVJZCN28pats-ZHJs374Yt2?usp=drive_link", "Звук-оголошення Хвилини мовчання"),
                     "Готовий запис, яким можна скористатися одразу.",
                     f"Хочете оголошення під ваш бізнес? Напишіть нам у Telegram {ext('https://t.me/moment_of_honor', '@moment_of_honor')} або на пошту {mail()}"),
                    (ext("https://drive.google.com/drive/folders/1mQ1yoEGJHYbL5gW_GR_81aoa-D7_O4Os?usp=drive_link", "Постери про Хвилину мовчання"),
                     "Кольори можна змінити відповідно до вашого корпоративного брендбуку."),
                    (ext("https://drive.google.com/drive/folders/1YAI-2LD0oxwmaYeAL8VpDS65C6TnzFgs?usp=drive_link", "Банери для сайту"),
                     "Щоб запровадити Хвилину мовчання на ваших ресурсах.",
                     f"Готовий код є в наших партнерів із Work.ua: {ext(WORKUA, 'work.ua/minute-of-silence')}"),
                ]),
            ])),
            section("komunikatsiynyi-hayd", "Комунікаційний гайд для бізнесів та організацій про комунікацію у дні обстрілів та памʼятні дні", "\n".join([
                figure("vshanuy-business-guide.jpg", 1600, 1066, "Гайд «Не нашкодити»"),
                ps("Цей документ допоможе бізнесу зрозуміти, як комунікувати в моменти, коли слова даються найважче, як бути чесним, при цьому не нашкодивши і не знецінивши."),
                toolkit([
                    (ext("https://drive.google.com/file/d/1H-nnZ88YKFs8vQYmUwhedCzPSwdhwPck/view?usp=drive_link", "Гайд «Не нашкодити»: як комунікувати після обстрілів та у дні памʼяті"),),
                    (ext(CHECKLIST_URL, "Швидкий чек-лист для перевірки комунікації"),),
                    (ext("https://drive.google.com/file/d/1uGTForzZ6cr1KSjSH4eGkbp9R1wGnXMa/view?usp=drive_link", "Перелік національних днів памʼяті"),),
                ]),
            ])),
            section("konsultatsiya", "Консультація в темі памʼяті", ps(
                "Якщо ви бізнес (організація) і вам потрібно визначити, як працювати в чутливій темі памʼяті (внутрішньо і зовнішньо), то можете звернутися до нас за консультацією.",
                f"Пошта: {mail()}")),
        ],
    },
    {
        "slug": "derzhava",
        "num": "03",
        "card": "Держава",
        "title": "Держава",
        "image": "vshanuy-napryam-derzhava.webp", "w": 3600, "h": 2400,
        "alt": "Зустріч за довгим столом у залі з державним прапором і гербом",
        "standfirst": "Передаємо державним інституціям напрацьовані практики, рекомендації та інструкції й працюємо над їхнім системним впровадженням. Ми прагнемо, щоб проблеми суспільства вирішувались комплексно – як громадами, так і владою.",
        "blocks": [
            section("instytutsii", None, ps(
                "Іра (Чека) Цибух часто говорила про молодість українських інституцій. Ми працюємо зокрема над тим, щоб наші інституції ставали інституційними.",
                f"Як приклад – робота над Хвилиною мовчання. Від суспільного запиту ми перетворили цей ритуал на сталу практику, яка тепер закріплена {ext(LAW, 'Законом України')}.")),
        ],
    },
    {
        "slug": "suspilstvo",
        "num": "04",
        "card": "Суспільство",
        "title": "Суспільство",
        "image": "vshanuy-napryam-suspilstvo.webp", "w": 3600, "h": 2400,
        "alt": "Людина тримає табличку «Памʼятай, завдяки кому ми живемо» з іменами загиблих",
        "standfirst": "Говоримо про складні й важливі теми, повʼязані з памʼяттю про війну: як прощатися, як говорити про загиблих, як уникати знеособлення втрат. Співтворимо нові практики памʼяті.",
        "blocks": [
            section("temy", None, ps(
                "Якщо у вас виникає питання – ми маємо або ж знайдемо на нього відповідь.",
                "Порушуємо теми, про які часто складно говорити: якими мають бути публічні прощання із загиблими військовими і чи мають вони бути взагалі, хто і як має вшановувати загиблих, як створювати меморіали, що не травмують і не відштовхують, чи є у нас такі позитивні приклади? Через публічні комунікації, лекції, розмови чи коментарі в Threads шукаємо мову, якою суспільство може говорити про памʼять.")),
        ],
        "projects_label": "Прояви памʼяті від команди «Вшануй»",
    },
    {
        "slug": "osvita",
        "num": "05",
        "card": "Освіта",
        "title": "Освіта",
        "image": "vshanuy-napryam-osvita.webp", "w": 3600, "h": 2400,
        "alt": "Лекція про культуру памʼяті в бібліотеці",
        "standfirst": "Досліджуємо, як діти, підлітки та вчителі сприймають тему памʼяті й якою хочуть бачити розмову про неї в школі. Зараз працюємо над практичними матеріалами для освітян, створюємо документи-опори для роботи з темою памʼяті.",
        "blocks": [
            section("opytuvannya", None, "\n".join([
                ps("«А чи запитував хтось у дітей, як вони хочуть памʼятати?» – якось подумали ми командою.",
                   "Так ми створили опитування для дітей. Але без вчителів виховний процес майже неможливий. Тому в цьому опитуванні ви можете абсолютно анонімно розповісти нам про те, як комфортно памʼятати саме вам.",
                   "Зараз ми на етапі дослідження. Тому невдовзі тут зʼявиться документ-опора, аби визначити, як саме працювати з памʼяттю в школах, як дітям комфортно взаємодіяти з темою памʼяті.",
                   "Корисні посилання:"),
                toolkit([
                    (ext(OSVITA_FORM, "Опитування щодо сприйняття практик вшанування в освіті"),),
                ]),
            ])),
        ],
    },
    {
        "slug": "viysko",
        "num": "06",
        "card": "Військо",
        "title": "Військо",
        "image": "vshanuy-napryam-viysko.webp", "w": 3600, "h": 2400,
        "alt": "Військові з прапорами на нічній церемонії зі смолоскипами",
        "standfirst": "Досліджуємо військові ритуали й традиції та шукаємо способи зберігати їхню тяглість у сучасному українському війську. Працюємо над створенням церемоній прощання з військовослужбовцями, які можуть бути адаптовані та впроваджені в громадах по всій Україні.",
        "blocks": [
            section("doslidzhennya", None, ps(
                "Ми досліджуємо ритуали з армій різних країн – від сигналу «Last Post», що з 1928 року щовечора звучить у бельгійському Іпрі, до канадського «Шосе героїв», де тисячі людей виходять на мости, коли повз проїжджає колона із загиблим.",
                "Ці практики показують, що робить прощання гідним: тиша, повторюваність, участь побратимів і громади. На цій основі ми шукаємо форми, близькі українському війську.",
                "Щойно дослідження буде готове, ми опублікуємо його тут.")),
        ],
    },
    {
        "slug": "mystetstvo",
        "num": "07",
        "card": "Мистецтво",
        "title": "Памʼять у мистецтві",
        "image": "vshanuy-napryam-mystetstvo.webp", "w": 3600, "h": 2400,
        "alt": "Відвідувачі виставки «Це може бути тиша» в Музеї війни",
        "standfirst": "Мистецтво може зцілювати та руйнувати, ранити та лікувати. Ми активно долучаємось до творчих проєктів, які допомагають проживати втрати та перетворюють чорне горе на світлу памʼять.",
        "blocks": [
            section("tysha", None, ps(
                "В колаборації з Веронікою Моль та Музеєм війни, ми реалізували проєкт «Це може бути тиша». Експозиція поєднує документальну розповідь про те, як мовчання стало мовою скорботи, 470 фотографій неба над могилами воїнів, аудіальну інсталяцію з іменами загиблих.",
                "Це виставка про мить, коли щодня о 9:00 ми зупиняємося, щоб згадати тих, кого вже немає поруч. І про те, як Хвилина мовчання поступово стає нашою спільною мовою.")),
        ],
    },
]

_src = open(SITE / "_next/static/chunks/vshanuy-directions.js", encoding="utf-8").read()
import re
for d in DIRECTIONS:
    m = re.search(r'href: "napryamky/' + d["slug"] + r'\.html",\s*image: "[^"]+",\s*description:\s*"([^"]+)"', _src)
    d["teaser"] = m.group(1)

CHEVRON_L = '<svg viewBox="0 0 8 8" aria-hidden="true" focusable="false"><path d="M5.5 1 2.5 4l3 3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'
CHEVRON_R = '<svg viewBox="0 0 8 8" aria-hidden="true" focusable="false"><path d="m2.5 1 3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>'


def card(href, image, w, h, num, name, teaser, tag="h3", lazy=True):
    return f"""<a class="vshanuy-project-slider__card" href="{href}">
              <span class="vshanuy-project-slider__media"><img src="../_next/static/media/{image}" alt="" width="{w}" height="{h}"{' loading="lazy"' if lazy else ''} decoding="async" draggable="false"/></span>
              <div class="vshanuy-project-slider__meta">
                <div class="vshanuy-project-slider__text">
                  <{tag} class="vshanuy-project-slider__name">{name}</{tag}>
                  <p class="vshanuy-project-slider__desc">{teaser}</p>
                </div>
              </div>
            </a>"""


def direction_projects(d):
    key = {"spivpratsya-z-biznesom": "biznes"}.get(d["slug"], d["slug"])
    return [slug for slug, p in PROJECTS.items() if key in p["directions"]]


def projects_block(d):
    slugs = direction_projects(d)
    if not slugs:
        return ""
    label = d.get("projects_label", "Проєкти в межах діяльності")
    items = "\n".join(
        f'          <li class="vshanuy-projects-page__item">\n            {card("../napryamky/" + s + ".html", PROJECTS[s]["image"], PROJECTS[s]["w"], PROJECTS[s]["h"], PROJECTS[s]["num"], PROJECTS[s]["card"], PROJECTS[s]["teaser"])}\n          </li>'
        for s in slugs)
    return f"""
    <section class="vshanuy-direction__projects" id="proekty" aria-labelledby="vshanuy-direction-projects">
      <div class="vshanuy-project-slider__head">
        <h2 class="vshanuy-article__label" id="vshanuy-direction-projects">{label}</h2>
        <a class="vshanuy-article__link" href="../proekty.html">Усі проєкти <span aria-hidden="true">→</span></a>
      </div>
      <ul class="vshanuy-projects-page__list">
{items}
      </ul>
    </section>
"""


def related(d):
    i = next(k for k, o in enumerate(DIRECTIONS) if o["slug"] == d["slug"])
    others = [DIRECTIONS[(i + k) % len(DIRECTIONS)] for k in range(1, 5)]
    cards = "\n".join(f"""        <li>
          <a class="vshanuy-direction__card" href="../napryamky/{o['slug']}.html">
            <span class="vshanuy-direction__card-media" aria-hidden="true"><img src="../_next/static/media/{o['image'].replace('.webp', '-1600.webp')}" alt="" width="1600" height="1067" loading="lazy" decoding="async"/></span>
            <h3>{o['card']}</h3>
            <p>{o['teaser']}</p>
          </a>
        </li>""" for o in others)
    return f"""    <section class="vshanuy-direction__related" aria-labelledby="vshanuy-direction-related">
      <div class="vshanuy-project-slider__head">
        <h2 class="vshanuy-article__label" id="vshanuy-direction-related">Інші напрями</h2>
        <a class="vshanuy-article__link" href="../diyalnist.html">Усі напрями <span aria-hidden="true">→</span></a>
      </div>
      <ul class="vshanuy-direction__cards">
{cards}
      </ul>
    </section>"""


def page(d):
    blocks = "\n\n".join(d["blocks"])
    body = f"""      <div class="vshanuy-article__layout">
        <div class="vshanuy-article__body">
{blocks}
        </div>
      </div>
""" if blocks else ""
    desc = d["standfirst"].replace('"', "&quot;")
    return f"""<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>{d['title']} — Напрями роботи — Вшануй</title>
  <meta name="description" content="{desc}"/>
  <link rel="stylesheet" href="../_next/static/css/font-overrides.css?v={CSS_V['fo']}"/>
  <link rel="stylesheet" href="../_next/static/css/materialy.css?v={CSS_V['mats']}"/>
  <link rel="stylesheet" href="../_next/static/css/material.css?v={CSS_V['mat']}"/>
  <link rel="stylesheet" href="../_next/static/css/project-slider.css?v={CSS_V['slider']}"/>
  <link rel="stylesheet" href="../_next/static/css/napryamok.css?v={CSS_V['dir']}"/>
</head>
<body class="vshanuy-article-page vshanuy-project-page vshanuy-direction-page">
  <div class="vshanuy-page-guides" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <header class="sticky"></header>

  <main class="vshanuy-article">
    <article>
      <header class="vshanuy-article__intro vshanuy-direction__intro">
        <a class="vshanuy-article__back" href="../diyalnist.html"><span aria-hidden="true">←</span> Напрями роботи</a>
        <p class="vshanuy-article__label vshanuy-direction__kicker">Напрям</p>
        <h1 class="vshanuy-article__title">{d['title']}</h1>
        <div class="vshanuy-direction__lead">
          <p class="vshanuy-article__standfirst">{d['standfirst']}</p>
        </div>
      </header>

      <figure class="vshanuy-article__cover vshanuy-direction__band">
        <img src="../_next/static/media/{d['image']}" alt="{d['alt']}" width="{d['w']}" height="{d['h']}" decoding="async"/>
      </figure>

{body}    </article>
{projects_block(d)}
{related(d)}
  </main>

  <footer></footer>

  <script src="../_next/static/chunks/vshanuy-smooth-scroll.js?v=20261023a"></script>
  <script src="../_next/static/chunks/vshanuy-menu.js?v={MENU_V}"></script>
  <script src="../_next/static/chunks/vshanuy-footer.js?v={FOOTER_V}"></script>
</body>
</html>
"""


if __name__ == "__main__":
    root = str(SITE / "napryamky") + "/"
    for d in DIRECTIONS:
        open(root + d["slug"] + ".html", "w", encoding="utf-8").write(page(d))
    print("ok", len(DIRECTIONS))
