---
name: homepage-parity
description: >-
  Audits a Vshanuy page against the live homepage (site/index.html) for
  typography, spacing, buttons, and silence-division / hairline rules, then
  fixes mismatches. Use when the user asks to compare a page to the homepage,
  align fonts/weights/sizes, sync rhythm/padding, match CTAs, check local
  guides / hairlines / silence map, «як на головній», homepage parity, or runs
  this skill while writing or reviewing a page.
---

# Homepage parity — аудит і виправлення

**Еталон:** живий рендер `site/index.html` + `site/_next/static/css/font-overrides.css`.  
Якщо `brand/tokens.css`, Storybook чи старі доки розходяться з головною — **права головна**.  
Кодовані правила: `.cursor/rules/homepage-style.mdc`, `.cursor/rules/silence-division.mdc`.  
Детальні таблиці ролей: [reference.md](reference.md).

## Коли запускати

1. Користувач назвав сторінку (шлях `site/*.html`, layout у `ui/`, Storybook story) і просить звірити з головною / виправити.
2. Під час написання нової сторінки — після першої верстки, перед QA.
3. Тригери: «як на головній», «перевір шрифти», «відступи», «кнопки», «гайди / лінії / тиша».

Якщо сторінку не названо — спитай шлях або slug.

## Жорсткий порядок

```
Progress:
- [ ] 1. Scope — яка сторінка (файли HTML/CSS/TSX)
- [ ] 2. Baseline — прочитай reference.md + homepage-style.mdc (не з пам’яті)
- [ ] 3. Inventory home (швидко) — підтверди ролі в font-overrides / index
- [ ] 4. Inventory target — шрифти, **текст span-3 (кол. 2–4)**, відступи, кнопки, лінії
- [ ] 5. Diff table — mismatch → severity
- [ ] 6. Fix — прав код цільової сторінки
- [ ] 7. Re-check — той самий чеклист pass
- [ ] 8. Report — коротко користувачу
```

Не вигадуй нові токени/ваги «краще». Підтягуй до еталону.  
Текстовий зміст секцій (не full-bleed медіа) — **завжди 3 колонки** з чотирьох (старт з кол. 2).

## Пастка одиниць (обов’язково)

| Контекст | Root | Наслідок |
|---|---|---|
| Головна (`index.html` + Next) | `62.5%` → **1rem = 10px** | Спільний хром / CTA в **px** |
| Самостійні `site/*.html` | **1rem = 16px** | Стилі сторінки — `--space-*`, `--step-*` або px-еквіваленти |
| `ui/` Storybook | 16px root | `--weight-display: 300`, Fixel; не копіюй static yellow accent з demo Hero як закон |

Спільне (хедер, меню, футер, primary CTA) — як на головній у **px**. Сторінкові стилі — токени з тим самим візуальним результатом.

## 1. Типографіка

### Ролі (еталон)

| Роль | Шрифт | Вага | Кегль / шкала | Tracking / LH |
|---|---|---|---|---|
| Дисплей (h1/h2/h3 секцій, назви карток) | Piazzolla | **300** | h2: `text-title-40` / `clamp(36px … 80px)` | −0.02em (−0.03em ≥80px); LH 0.92–1.1 |
| Мітка секції | Fixel | 400–500 | 11–12 → caption 12–16 | UPPERCASE; **0.12em** |
| Проза / лід | Fixel | 400 | body 16–18 | LH **1.55**; max ~36ch–620px у межах 3 кол. |
| Primary CTA | Fixel | **600** | **12px** | UPPERCASE; **0.08em** |
| Secondary CTA (PDF) | Fixel | **600** | 12px | UPPERCASE; **0.08em**; ink border; hover yellow |
| Підпис фото | Fixel | 400 | 12px | UPPERCASE; 0.12em; `місце · рік · тег` |
| Лого `ВШАНУЙ.` / `09:00` | Volja | **900** | лише знак | ніде більше |
| Nav chrome | Piazzolla | 400–600 | 14px labels | UPPERCASE |

### Текст на 3 колонки (обов’язково, desktop ≥1024)

Сітка сторінки — **4 колонки**. Увесь текстовий зміст секції (мітка, h1/h2, лід, проза, primary CTA) живе в **колонках 2–4** = span **3**.

| Що | Колонки | Span |
|---|---|---|
| Службове (портрет, фото-акцент, вузька мета) | **1** | 1 |
| Мітка секції, заголовок, абзаци, лід, CTA | **2–4** | **3** |
| Full-bleed фото / банер / hero-знак | 1–4 | full |
| Картки в ряд (проєкти, партнери) | за макетом секції | 1 або кратно |

- Не `column-count: 3` (газетний набір) — саме **grid span 3** у 4-колонковій сітці.
- Mobile (&lt;1024): текст на повну ширину смуги (2 кол. → span full / обидві).
- Текст ліворуч колонки 2, без центрування. Порожня кол. 1 — норма, якщо немає службового блоку.
- Проза всередині span-3 може лишатись `max-width: 36ch`–`620px`, але блок стартує з кол. 2.

### Що ловити на цільовій

- Geologica замість Fixel (не підключено `font-overrides.css` / немає override `--font-text`)
- Piazzolla **700** / `.display` з tokens замість **300**
- CTA tracking **0.12em** замість **0.08em**
- h2 поза діапазоном 36–80px або фіксований rem без fluid
- Volja в контенті / кнопках
- letter-spacing на мітках відсутній або «декоративний» великий
- Текст (мітка/h2/проза/CTA) на всю 4-колонкову ширину або лише в 1–2 кол. замість **span 3** (кол. 2–4)
- `column-count` / multi-column prose замість grid span

**Виправлення:** піджени `font-family` / `font-weight` / `font-size` / `letter-spacing` / `line-height` до ролі; текстовий блок — `grid-column: 2 / span 3` (або `__cell` span-3 від кол. 2). У `ui/` — класи/токени з тим самим computed; у `site/` — як у `kontakty.css` / `biznes.css`.

## 2. Відступи й ритм

Шкала головної (px): **8 · 16 · 24 · 32 · 40 · 48 · 64 · 96 · 120 · 240**.

| Що | Mobile | Desktop |
|---|---|---|
| Між великими секціями | 96 | 240 |
| Верх секції → перший ряд | 48 | 96 |
| Мітка → h2 | 24–32 | 32–64 |
| Абзац → primary CTA | 40 | 40 |
| Фото → підпис | 8 | 8 |
| Поля сторінки / inset | 8 | 8 |
| Padding клітинки | 8 | 16 |

### Що ловити

- Довільні `13px`, `20px`, `72px` поза шкалою
- Секції без «тиші» (щільний стік)
- Картки з `border-radius`, тінями, «заповненням повітря» декором
- Глобальний шар гайдів «скрізь» без silence map (див. `silence-division.mdc`)

**Виправлення:** заміни на найближче значення зі шкали; між секціями — silence-рівень і/або одна hairline; сітка 2→4 від **1024px**, gap 0, inset 8px.

## 3. Кнопки

### Primary (еталон: ПРО НАС →, ВСІ ГАЙДИ →, Усі публікації, Підтримати)

```
min-width: 200px; min-height: 44px; padding: 10px 12px;
inline-flex; justify-content: space-between; gap: 16px;
border-radius: 0;
background: var(--ink); color: var(--paper);
font: 600 12px/1 Fixel; letter-spacing: 0.08em; text-transform: uppercase;
hover/focus: bg var(--yellow); color var(--ink); 300ms ease-out;
arrow → 20px; translateX(-4px → 4px) 450ms cubic-bezier(0.22, 1, 0.36, 1);
focus: outline 2px solid var(--ink); outline-offset: 3px;
```

### Secondary (ЗАВАНТАЖИТИ PDF) — живий `.vshanuy-guide-button`

```
width: 100%; min-height: 44px; padding: 10px 12px;
inline-flex; space-between; gap: 16px; border-radius: 0;
border: 1px solid var(--ink); background: transparent; color: var(--ink);
font: 600 12px/1 Fixel; letter-spacing: 0.08em; text-transform: uppercase;
hover/focus: bg + border var(--yellow); color var(--ink); 300ms ease-out;
arrow ↓ 20px; translateY(-2px → 2px) 450ms cubic-bezier(0.22, 1, 0.36, 1);
```

Не плутати зі старим описом `border-top` / weight 500 / hover beige — **права жива головна**.

### Що ловити

- `BlockButton--accent` зі **статичним** жовтим (Storybook demo ≠ головна)
- Hover у graphite замість yellow на primary / secondary archive CTA
- Tracking 0.12em, вага ≠ 600, стрілка без анімації / інший символ
- Secondary з `border-top` only або hover beige замість ink border → yellow
- `border-radius` > 0, тіні, pills
- Touch < 44px

**Виправлення:** для live/site — патерн primary/secondary як вище; у `ui/` — якщо `BlockButton` дає інший hover, піджени сторінку до ink→yellow на hover (не static yellow), або використовуй shared CSS-класи з site-зразків.

## 4. Ділення тиші (лінії)

Політика: `.cursor/rules/silence-division.mdc`. Повний каталог блоків і закономірностей — [reference.md](reference.md) **§D–G** (головна + «Місія та цінності» / `AboutPage` / `site/pro-nas.html`).

**Другий еталон ліній (після головної):** сторінка «Місія та цінності» — локальні V/H, слайдер `‹ 9:00 ›`, mid V крізь тишу → футер.

### Короткі закони

1. Колір V/H на paper: `color-mix(in srgb, var(--grey) 20%, transparent)` (`--vshanuy-page-grid-line`).
2. Між великими секціями: **silence** *або* **одна H** — не обидва густо.
3. Span-заголовок (2+ кол.): V **не** ріже текст — обрив / mid off / `top` під заголовком / paper-маска.
4. Full-bleed фото: лінії **під** зображенням.
5. Картки в ряд: inset **16px** з усіх боків; hover — комірка → beige, зум фото **1.05**.
6. Continuous mid V між секціями: `::before` з `bottom: calc(-1 * silence)` / наступна секція з `top: 0`; до футера — крізь `main` pad-bottom.
7. Слайдер проєктів: V на всьому слайдері; **beige bar «‹ 9:00 ›» поверх** mid V (`z-index` вище).
8. Outer rails / global shell guides — **не** обов’язок нових сторінок.

### Що ловити

- Глобальний `.vshanuy-page-shell__guides` «скрізь» без map
- Лінія крізь двосмуговий заголовок; H на кожному фото в сітці команди
- Hover карток `scale(1.1)` без beige (еталон: 1.05 + beige)
- Mid V обривається в тиші перед футером
- Hex; breakpoint сітки ≠ **1024px**

**Виправлення:** локальні V/H за §G reference; обрив на span; hairline між рядами, не рамка-картка.

## Diff → fix

Для кожного mismatch у звіті:

```
| Область | Елемент | Головна | Сторінка | Severity | Дія |
| typography | h2 | Piazzolla 300 clamp 36–80 | Inter 700 2rem | blocker | … |
```

Severity:

- **blocker** — інший шрифт/вага дисплею, Geologica, primary CTA не ink→yellow, жовтий як тло; лінія крізь span-заголовок; текст секції не на **3 кол. (2–4)**
- **major** — кегль поза шкалою, ритм секцій, CTA tracking/розмір; глобальні гайди «скрізь» всупереч silence-division; локальні лінії поверх фото
- **minor** — 1 крок шкали відступу, дрібний LH

Прав лише цільову сторінку (+ її CSS). `site/index.html` / еталонні overrides — **не** «підганяй під погану сторінку».

Після фіксів — повторний inventory (крок 7). Залиш open лише те, що потребує контент/рішення користувача.

## Звіт користувачу

Коротко:

1. Що порівнювалось (шляхи)
2. Скільки blocker / major / minor; що виправлено
3. Що лишилось відкритим (якщо є)
4. Опційно: «переглянь desktop 1024+ — текст у кол. 2–4 (span 3); mobile full; лінії за silence map»

Не цитуй увесь reference.md у відповіді.

## Джерела (читай за потреби)

- [reference.md](reference.md) — ролі, CTA, **§D–G лінії / каталог блоків**
- `.cursor/rules/homepage-style.mdc` — повний еталон стилю
- `.cursor/rules/silence-division.mdc` — локальне ділення тиші
- `site/_next/static/css/font-overrides.css` — жива головна
- `site/pro-nas.html` + `ui/src/layouts/AboutPage/` — еталон «Місія та цінності»
- `ui/src/layouts/ProjectPage/ProjectSlider.*` — слайдер `‹ 9:00 ›`
- Зразки parity: `site/kontakty.html` + `kontakty.css`, `site/napryamky/spivpratsya-z-biznesom.html` + `biznes.css`
