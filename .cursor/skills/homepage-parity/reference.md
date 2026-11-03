# Homepage baseline — детальний еталон

Джерело істини: `site/index.html` + `site/_next/static/css/font-overrides.css`.  
Правило-дзеркало: `.cursor/rules/homepage-style.mdc`.

Оновлюй цей файл, якщо змінюється жива головна (шрифти/CTA/лінії), а не навпаки. Політика видимих ліній — `silence-division.mdc`.

---

## A. Шрифти й ролі (жива головна)

### Сімейства

| Cascаde | Значення на головній | Примітка |
|---|---|---|
| Logo | `"Volja", sans-serif` 900 | лише `ВШАНУЙ.` і `09:00` |
| Display | `"Piazzolla", Georgia, serif` **300** | заголовки |
| Text / UI | `"Fixel", system-ui, sans-serif` | `--font-text` перевизначено в font-overrides (у brand/tokens ще Geologica) |
| Remap Anuc | `--font-instrument-serif` → Piazzolla; `--font-instrument-sans` → Fixel | |

### Fluid Tailwind-класи (375 → 1600)

| Клас | Size | LH | Роль |
|---|---|---|---|
| `text-caption-30` | 12→16px | 1.2 | мітки, дрібний UI |
| `text-body-20` | 14→16px | 1.2 | лід карток |
| `text-body-30` | 16→18px | 1.2 util / **1.55 prose** | абзаци |
| `text-subtitle-20` | 18→20px | 1.1 | підзаголовки |
| `text-title-10` | 30→32px | 1 | заголовки карток статей |
| `text-title-20` | 24→56px | 1.1 | гайди (часто override менший), hero class |
| `text-title-40` | 36→80px | 1 | **h2 секції** |
| `text-title-60` | 68→120px | 1 | рідко |

Формула: `clamp(MIN, MIN + (MAX−MIN)·(100vw−375px)/1225, MAX)`.  
Еквівалент h2 для site-сторінок: `font-size: clamp(36px, 22.53px + 3.592vw, 80px)`.

### Сітка колонок (layout)

Сітка: **4 кол.** від 1024px. Блоки **можуть** починатися з **кол. 1** (не лише з кол. 2).

| Контент | Типовий grid |
|---|---|
| Intro / page title | кол. 1–2 або ширше за макетом |
| Службове (портрет, вузьке фото) | кол. 1 |
| Текст поруч із портретом (about) | часто кол. 2–4 — зразок головної, не закон |
| Split 2\|2 | кол. 1–2 \| 3–4 |
| Full-bleed медіа / hero-знак | `1 / -1` |
| Mobile &lt;1024 | full width смуги |

Не CSS `column-count: 3`. Проза може мати `max-width: 36ch`–`620px` у своїй смузі. Зразок about: портрет кол. 1, copy кол. 2–4; kontakty: intro + канали з кол. 1, mid V безперервна.

### Роль → computed (скорочено)

| Роль | Font | Size | Weight | LH | Tracking | Де |
|---|---|---|---|---|---|---|
| Hero wordmark | Volja | clamp(52–230) / mobile 42–120 | 900 | 1 | 0 | hero mark |
| Hero timer mobile | Volja | clamp(14–24) | 900 | 1 | — | `09:00` |
| Header wordmark / time | Volja | 18 / 16 | 900 | 1 | — | desktop menu brand |
| Header nav label | Piazzolla | 14 | 600 | 1 | — | UPPERCASE |
| Submenu item | Piazzolla | 14 | 400 | 1.35 | — | |
| Intro loader copy | Piazzolla | clamp(24–40)→desktop 20–28 | 400 | 1.05 | −0.02em | лише `html.vshanuy-home` |
| Intro timer | Volja | clamp(44–72) | 900 | 1 | — | |
| H1 hero slogan | Piazzolla | clamp(36–52) desktop | 300 | 1 | −0.02em | hidden ≤1023 |
| Section label | Fixel | caption 12–16 | 400 | 1.2 | normal / labels often 0.12em | «ГО…», «Наші проєкти» |
| Section H2 | Piazzolla | title-40 36–80 | 300 | 1 | ~−0.02em | about, projects |
| About body | Fixel | ~16–18 | 400 | **1.55** | — | max-width 620px |
| Photo caption | Fixel | 12 | 400 | — | **0.12em** UPPER | |
| Project card title | Piazzolla | clamp(16–20) | 300 | 1.15 | — | |
| Project card desc | Fixel | clamp(13–15) | 400 | 1.45 | 0 | max 36ch, 4 lines |
| Guide title | Piazzolla | clamp(22–36) | 300 | 1.05 | — | |
| Publications H2 / Partners H2 | Piazzolla | clamp(40–88) | 300 | **0.92** | **−0.03em** | |
| Article card title | Piazzolla | title-10 30–32 | 300 | 1 | — | |
| Article card lead | Fixel | body-20 | 400 | 1.2 | — | |
| Primary CTA | Fixel | **12** | **600** | 1 | **0.08em** UPPER | |
| Secondary PDF | Fixel | 12 | **600** | 1 | **0.08em** UPPER | ink border; hover yellow |
| Footer label | Fixel | 11 | 500 | 1 | 0.12em UPPER | |
| Footer links | Piazzolla | 14 | 400 | 1.25 | UPPER section links | |
| Footer motto | Piazzolla | clamp(18–26) | 300 | ~1.08 | −0.02em | |
| Footer meta | Fixel | 12 | 400 | 1.25 | 0.04em UPPER | |

### Відомі розходження tokens ↔ головна

- `brand/tokens.css` `.display` weight **700** → на сайті **300**
- `--font-text` Geologica → live **Fixel**
- `--tracking-label` 0.12em для міток; **кнопки 0.08em**
- `--weight-display: 300` у `ui/src/styles/tokens.css`, не в brand/tokens

---

## B. Відступи (px на головній)

Шкала: **8 · 16 · 24 · 32 · 40 · 48 · 64 · 96 · 120 · 240**

| Контекст | Mobile | Desktop |
|---|---|---|
| Page / guide inset | 8 | 8 |
| Cell padding | 8 | 16 |
| Section silence top (`pt-96` / `lg:pt-240`) | 96 | 240 |
| Projects section top (override) | 48 | 96 |
| Label → h2 | ~32 | 32 |
| About row-gap | 32 | — |
| Copy → CTA | 40 | 40 |
| Photo → caption | 8 | 8 |
| Gallery controls top | 48 | 96 |
| Articles intro pad bottom | 40 | 102 |
| Articles intro gap | 24 | 32 |
| Partners padding | 96 | — |
| Partners header gap | 32 | — |
| Footer top breathing | 64–96 | 120–240 (layered) |
| Sticky header height | — | 33 |

Token map (16px root pages): `--space-1`=8, `--space-2`=16, `--space-3`=32, `--space-4`=64, `--space-silence` ≈ 96/240.

---

## C. Кнопки

### C1. Primary archive CTA

Селектори-зразки: `.about-vshanuy__link`, guides `a[href*="posibnyky"]`, `.vshanuy-articles__all`, `.vshanuy-site-footer__cta`, `.vshanuy-menu__support-btn`.

| Prop | Value |
|---|---|
| Box | min 200×44; pad 10×12 |
| Layout | inline-flex; space-between; gap 16 |
| Type | Fixel 12 / 600 / UPPER / 0.08em / LH 1 |
| Colors | bg `--ink`, text `--paper` |
| Hover/focus | bg `--yellow`, text `--ink`, 300ms ease-out |
| Arrow | `→` 20px; −4px → +4px; 450ms `cubic-bezier(0.22, 1, 0.36, 1)` |
| Focus | outline 2px ink, offset 3px |
| Radius | 0 |

**Статичний жовтий на primary — заборонений** (жовтий лише hover/focus або один свідомий page-level акцент за brand.mdc).

### C2. Secondary PDF (живий еталон)

Селектор: `section[data-block-type="blockBenefits"] .vshanuy-guide-button` у `font-overrides.css`.

| Prop | Value |
|---|---|
| Box | full width; min-height 44; pad 10×12 |
| Layout | inline-flex; space-between; gap 16 |
| Type | Fixel 12 / **600** / UPPER / 0.08em / LH 1 |
| Border | `1px solid var(--ink)` (не лише border-top) |
| Colors | transparent bg, ink text |
| Hover/focus | bg + border `--yellow`, text ink, 300ms ease-out |
| Arrow | `↓` 20px via `::after`; translateY −2px → +2px; 450ms `cubic-bezier(0.22, 1, 0.36, 1)` |
| Radius | 0 |

Старі формулювання (`border-top` paper / weight 500 / hover beige) — застарілі; не використовувати для parity.

### C3. Hero mobile «підтримати»

Anuc leftover: beige fill, caption uppercase, h 48→64. Не плутати з primary ink CTA. Desktop support — header/footer.

### C4. Storybook `BlockButton` (не закон головної)

- `--ink`: wipe → graphite (інший hover ніж live)
- `--accent`: **static yellow** — демо, не копіюй на live pages як default primary
- Shared: min-height 3rem, tracking `--tracking-label` (0.12em) — розходиться з live 0.08em

При parity у `ui/`: підтягни computed до C1, навіть якщо доведеться локально перевизначити BlockButton на сторінці.

### C5. Gallery `‹ 9:00 ›`

Caption-30, ink, 12×12 chevrons, disabled opacity 0.4.

---

## D. Ділення тиші (лінії)

Політика для **нових / цільових** сторінок: `.cursor/rules/silence-division.mdc` (5/3 вертикалі колонок, пропуск на контенті, H до краю екрана). Нижче: (1) як зроблено на **живій головній** (довідка, не закон), (2) що вимагати від цільової.

### D0. Живий реєстр головної (довідка, не закон для нових)

Колір: `color-mix(in srgb, var(--grey) 20%, transparent)` → `--vshanuy-page-grid-line`.

| Шар | Механізм | Де |
|---|---|---|
| **Outer rails** | `main::before` / `main::after` — 1px на `left/right: 8px`, на всю висоту `main` | безперервні крайні рейки |
| **Internal V** | per-section absolute overlay `.pointer-events-none…translate-x-[0.15rem]` + колонкові `::after` (gap 0); колір remapped з `after:bg-accent-metal/20` | about, projects, articles… |
| **BEM guides** | `__guides` сітка `<span>` з `border-right` | partners, menu, footer |
| **Shell guides** | `.vshanuy-page-shell__guides` | **інші** `site/`-сторінки, **не** механізм головної |
| **Hero** | внутрішні V **вимкнені** | лише outer rails |
| **Banner** | гайди **під** шаром фото (`z-index: -2`) | не білий оверлей поверх |

`main .border-x` обнуляє L/R, щоб не подвоювати outer rails.

### D0b. Span-обрив mid-V на головній (жива карта)

Якщо мітка + h2 займають **2+ кол.** — mid V не ріже текст:

| Секція | Патерн |
|---|---|
| About / `#proekty` | `div:nth-child(2)::after { display: none }` — гайд 2\|3 геть |
| `#projects` (ряд карток) | mid V лишається, але `top: 96px` (під заголовком) |
| Directions | лише V на **25% / 75%** — без центральної рейки крізь h2 |
| Articles CTA | локальні V укорочені до висоти CTA |

Анімація гайдів (де є): `scaleY(0 → 1)`, `transform-origin: top`, ~1000ms.

### D1. Закон для цільової сторінки (parity)

Політика: `silence-division.mdc`. Коротко:

```
color: color-mix(in srgb, var(--grey) 20%, transparent);
desktop: 5 verticals (screen left, 25%, 50%, 75%, screen right);
mobile: 3 verticals (screen edges + midpoint);
if a vertical crosses content in a block — omit it for that whole block;
resume it in the next block when that column is empty;
no stub that ends in empty space;
empty columns in a row: 1, 2, or 3 beside content is ok; 4 in a row is not;
a full-width empty band (under the photo, between sections) counts as 4 empty columns;
page header (crumbs, title, lead) has no guides; lines start after the photo;
H marks the top of a block and the joint between content items; no H under the last content element (or under a last row of facing last elements);
H and V always run to the screen edge;
```

| Правило | Поведінка |
|---|---|
| Вертикалі | 5 на desktop, 3 на mobile. Немає в блоці, де сідають на контент; продовжуються, де колонка порожня |
| Порожні колонки | У рядку 1, 2 або 3 підряд можна, якщо поруч є зміст. 4 підряд не можна — вертикалі не ділять порожній ряд |
| З’єднане повітря | Між блоками відступ зі шкали. У кожного своя верхня лінія. Під останнім контентом нижньої немає. Вертикалі заходять у повітря і стикаються з верхньою лінією сусіда. В стику одна вертикаль. Обрив у повітрі — fail |
| Хедер сторінки | Крихти, заголовок, лід — без ліній. Лінії після фото |
| Горизонталі | Верх блока і стик між елементами. Під останнім елементом контенту (і під усім останнім рядом) — немає. На всю ширину екрана |
| Обрив | Видимий відрізок доходить до краю екрана або до H межі блока. Уламків у повітрі немає |
| Під full-bleed | лінії під фото, не поверх |
| Shell guides | не ставити «за звичкою» без silence map |

### D2. Горизонтальні hairlines

| Вид | Spec | Коли |
|---|---|---|
| `.hairline` / brand | `border-top: var(--line-muted)` (ink 18%) | DS primitive |
| Header bottom | 1px page grid line | завжди |
| Article list | pseudo lines grey 20%, full to right edge | між картками |
| Footer / submenu | ink 16–18% або grey 20% | між пунктами |
| Між секціями | silence (`pt-96` / `lg:pt-240`) **або** одна H — не обидва густо | за silence map |
| T-стик | H на повну ширину комірки/смуги до V | завжди, коли є V |

Не: bordered cards як розділювачі секцій. Secondary PDF — повноцінна кнопка з ink border (C2), не hairline-розріз.

### D3. Чеклист на цільовій

- [ ] Placement колонок за макетом; **кол. 1 дозволена** (≥1024)
- [ ] Desktop: 5 вертикалей колонок; mobile: 3. У блоці, де V перетинає контент, її немає; далі вона продовжується, якщо колонка порожня
- [ ] У рядку порожніх колонок не більше 3 підряд. 4 порожні підряд, поділені вертикалями — fail. Повітря між блоками лишається; вертикалі заходять у нього і стикаються з лінією сусіда
- [ ] H — верх блока і стик між елементами, на всю ширину екрана. Під останнім елементом контенту горизонталі немає. V доходить до краю екрана або до цієї H. Обірваних відрізків немає
- [ ] Немає обов’язкового global shell guides без map
- [ ] Під documentary full-bleed — лінії під зображенням, не поверх
- [ ] Списки/секції діляться hairline + повітрям, не рамкою-карткою
- [ ] Breakpoint сітки колонок **1024px** (збіг з хедером)
- [ ] Continuous mid V (якщо є) доходить крізь тишу до наступного блоку / футера
- [ ] Слайдер `‹ 9:00 ›`: beige bar **поверх** mid V; картки inset 16 + hover beige / zoom 1.05

---

## G. Каталог блоків і закономірності ліній

Еталони: **головна** (`site/index.html` + `font-overrides.css`) і **«Місія та цінності»** (`site/pro-nas.html` + `ui/.../AboutPage` + `ProjectSlider`).  
Колір на paper: `--vshanuy-page-grid-line` = grey 20%. На ink-футері: paper/grey mix ~16–46%.

### G0. Універсальні закономірності

| Закон | Правило |
|---|---|
| **5 / 3 вертикалі** | Desktop: краї екрана + 25/50/75. Mobile: краї + середина. У блоці, де лінія перетинає контент, її немає; у наступному, де колонка порожня, вона продовжується |
| **Порожні колонки** | У рядку 1–3 порожні підряд можна, якщо є зміст. 4 підряд не можна. Порожній пояс під фото чи між секціями — теж заборонений |
| **Хедер сторінки** | Без ліній. Лінії з’являються після фото |
| **Без обриву** | Видимий відрізок доходить до краю екрана або до H межі блока. Уламка в повітрі немає |
| **H = межі** | Верх блока і стик між елементами (ряд, картка, панель), на всю ширину екрана. Під останнім елементом контенту — і під останнім рядом, якщо навпроти теж останній контент — горизонталі немає |
| **H або silence** | Між великими секціями — відступ зі шкали (96/240) *або* одна hairline; не обидва густо |
| **T-стик** | Де V і H обидві видимі — T/хрест. H не обривається на padding комірки |
| **Пропуск на контенті** | Paper (або тло блока) знімає вертикаль на висоту блока. Не лишай короткий уламок замість пропуску |
| **Під фото** | Full-bleed: V/H структурно під img (`z-index` фото вище) |
| **Inset карток** | 16px з усіх боків (як L/R); hover — фон комірки beige, фото `scale(1.05)` 1000ms |
| **Стик з футером** | Mid V крізь `main` pad-bottom silence; футер `margin-top: 0` якщо pad уже є; guides футера підхоплюють mid |
| **Без hex** | Тільки токени / `color-mix` |

Техніка V: absolute `::before`/`::after` на секції або `linear-gradient` overlay на сітці; `pointer-events: none`; `left: calc(50% - 0.5px)` для mid; `calc(25%\|75% - 0.5px)` для бічних внутрішніх.

### G1. Типи блоків (головна + Місія)

| ID | Блок | Де живе | V | H | Нотатки |
|---|---|---|---|---|---|
| **B-hero** | Intro / page hero | Home hero; About `#intro` | Home: лише outer. About: paper криє внутрішні guides | Без нижньої H або один стик | Brand-first; без карток |
| **B-banner** | Full-bleed фото | Home banner; About story-band | Під фото | 0 на фото | `z-index` img > guides |
| **B-split** | Текст + портрет 2\|2 | About `#istoriya` | **Mid V** крізь тишу зверху + блок | Без H на prose/portrait | Mid: `#istoriya::before` з `top: -silence` |
| **B-mission** | Мітка + display + aside (кол. 1–2) | About `#misiya` | Desktop: V на **50% і 75%** у headline-frame (кол. 3–4 порожні) | `border-bottom` секції | Текст не на всю 4; порожні кол. з лініями |
| **B-verbs** | 3 дієслова в кол. 2–4 | About `#shcho-robymo` | Overlay **25/50/75** на `ul` | Стик з каруселлю (−1px) | Кол. 1 порожня |
| **B-directions** | Sticky carousel напрямів | Home + About `#napryamy` | Лише **25% / 75%** (без mid крізь h2) | H над sticky pin | Sticky pin обов’язковий для scrub |
| **B-projects-head** | Мітка + h2 проєктів | Home `#proekty`; About | Mid off у зоні заголовка; V зліва кол. 4 (About head `::after`) | Без H над заголовком після каруселі | Текст кол. 2–3 |
| **B-projects-slider** | Картки + `‹ 9:00 ›` | Home `blockSelectedProjects`; About `ProjectSlider--about` | **25/50/75** від H над картками **крізь** viewport і controls | H над рядом карток; **не** під останнім рядом як «дно» | Bar beige **поверх** mid V; час `9:00`→`9:01` по сторінках; 4 / 2 слайди |
| **B-vision** | Фото \| цитата+CTA 2\|2 | About `#bachennya` | **Mid V** на всю секцію + тиша до команди | H на photo/copy (мобільний стик без подвійної) | CTA primary ink→yellow |
| **B-team** | Мітка + сітка портретів | About `#komanda` | Над сіткою: **лише mid** (+ outer якщо є). У сітці: **25/75** + mid continuous | **H над картками**; H між рядами; **без** H на кожному фото; **без** H над міткою | Тиша в `padding-top` мітки (paper-маска); li inset **16**; mid → футер |
| **B-partners** | Логотипи 4 кол. | Home partners | BEM `__guides` | — | grayscale logos |
| **B-articles** | Блог / список | Home publications | Локальні V; CTA — укорочені | Hairline між рядками | |
| **B-footer** | Ink footer | Усі сторінки | Guides inset 8px; desktop **25/50/75** + outer; mobile mid oft off | `border-top` grid | Підхоплює mid з контенту |

### G2. Рецепти з’єднання

**Тиша між секціями + continuous mid**

```
prev::before { bottom: calc(-1 * var(--space-silence)); } /* або --space-4 mobile */
next { margin-top: 0; } /* тиша всередині next (pad мітки) АБО pad main */
next::before { top: 0; bottom: 0; /* mid */ }
```

**Заголовок без внутрішніх V, сітка з V**

```
label { width: 100%; background: var(--paper); z-index: 1; } /* маска 25/75 */
section::before { mid V; z-index: 2; }
grid { border-top: 1px solid var(--grid-line); } /* H над картками */
grid::after { V 25% + 75% only; } /* mid уже на section */
```

**Слайдер як на головній**

```
slider { position: relative; }
slider::after { V 25/50/75 from H-top through controls; z-index: 3; }
.controls / .bar { z-index: 4; } /* beige поверх mid */
.slide { padding: 16px; hover → beige; img scale(1.05); }
```

**Не робити**

- H top + H bottom на кожному team-photo  
- Mid V крізь span-h2 напрямів/проєктів  
- Double silence (main pad-bottom **і** footer margin-top) без потреби  
- Zoom 1.1 / hover без beige на проєктних картках  

### G3. Карта «Місія та цінності» (швидкий silence map)

```
intro (paper)     → guides masked
banner            → lines under photo
#istoriya         → mid V (from silence above)
#misiya           → V 50+75 in frame; H bottom
#shcho-robymo     → V 25/50/75
#napryamy         → V 25/75; no mid through title
#proekty head     → mid off / V at col4; silence after carousel
#proekty slider   → H above cards; V 25/50/75 thru 9:00 bar (bar on top)
#bachennya        → mid V + extend into silence toward team
#komanda          → paper mask (silence+label): mid only; H above cards; V 25/75 in grid; mid → footer
footer            → ink guides continue mid
```

---

## E. Швидкий inventory скрипт (браузер / CDP)

На еталонній і цільовій сторінці зібрати для ключових селекторів:

```js
// Приклад: пройтися по h1,h2,h3,.vshanuy-section-label,a[class*="link"],button,.vshanuy-block-button
const els = [...document.querySelectorAll('h1,h2,h3,p,a,button,[class*="label"],[class*="cta"],[class*="button"]')];
els.slice(0, 80).map(el => {
  const s = getComputedStyle(el);
  return {
    tag: el.tagName,
    text: (el.textContent || '').trim().slice(0, 40),
    font: s.fontFamily.split(',')[0].replace(/["']/g, ''),
    size: s.fontSize,
    weight: s.fontWeight,
    lh: s.lineHeight,
    track: s.letterSpacing,
  };
});
```

Для ліній: звірити з silence map / `silence-division.mdc`; локальні V/H — `getComputedStyle` color ≈ grey 20%; немає лінії крізь span-заголовок; під фото — будь-які V поза/під img layer; не вимагати `.vshanuy-page-shell__guides` і не вимагати outer rails (`main::before/after`) на цільовій.

---

## F. Секції головної (для контексту, не копіювати 1:1)

1. Intro loader (`html.vshanuy-home` only)  
2. Hero wordmark + photo + h1  
3. About (`about-vshanuy`)  
4–5. Projects headline + carousel `‹ 9:00 ›`  
6. Full-bleed banner  
7. Guides / benefits beige  
8. Publications  
9. Partners → Footer  

`blockServices` hidden. Yellow budget: no static yellow fills on rest state except logo timer / header support active layer.
