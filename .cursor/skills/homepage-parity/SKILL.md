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
- [ ] 4. Inventory target — шрифти, сітка колонок, відступи, кнопки, **з’єднані** лінії
- [ ] 5. Diff table — mismatch → severity
- [ ] 6. Fix — прав код цільової сторінки
- [ ] 7. Re-check — той самий чеклист pass
- [ ] 8. Report — коротко користувачу
```

Не вигадуй нові токени/ваги «краще». Підтягуй до еталону.  
Блоки **можуть** починатися з **першої** колонки; текст не зобов’язаний завжди бути span-3 від кол. 2. Лінії — за §4: п’ять вертикалей колонок, пропуск лише там, де лінія сідає на контент, без обірваних відрізків.

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

### Сітка колонок (desktop ≥1024)

Сітка сторінки — **4 колонки** (mobile: 2). Блоки **можуть** стартувати з **кол. 1**.

| Що | Типовий placement |
|---|---|
| Intro / заголовок сторінки | кол. 1–2 або 1–4 за макетом (не обов’язково з кол. 2) |
| Службове (портрет, фото-акцент) | кол. **1** |
| Текст + CTA поруч із портретом | часто кол. **2–4** (як about на головній) — зразок, не закон |
| Split 2\|2 (канали \| форма) | кол. **1–2** \| **3–4** |
| Full-bleed фото / банер / hero-знак | 1–4 |
| Картки в ряд | за макетом секції |

- Не `column-count: 3` (газетний набір) — саме CSS grid.
- Mobile (&lt;1024): текст на повну ширину смуги.
- Текст ліворуч колонки, без центрування. Проза може мати `max-width: 36ch`–`620px` всередині своєї смуги.
- Якщо mid V ділить ряд — тримай заголовок **з одного боку** лінії (кол. 1–2), а не рви V.

### Що ловити на цільовій

- Geologica замість Fixel (не підключено `font-overrides.css` / немає override `--font-text`)
- Piazzolla **700** / `.display` з tokens замість **300**
- CTA tracking **0.12em** замість **0.08em**
- h2 поза діапазоном 36–80px або фіксований rem без fluid
- Volja в контенті / кнопках
- letter-spacing на мітках відсутній або «декоративний» великий
- `column-count` / multi-column prose замість grid
- Примусовий «порожній кол. 1», коли макет логічно стартує з кол. 1

**Виправлення:** піджени `font-family` / `font-weight` / `font-size` / `letter-spacing` / `line-height` до ролі; placement — за макетом секції (кол. 1 дозволена). У `ui/` — класи/токени з тим самим computed; у `site/` — як у `kontakty.css` / `biznes.css`.

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
2. Між великими секціями повітря — відступ. Горизонталь сидить на межі блока. Вертикалі перетинають відступ і стикаються з цією лінією.
3. **Вертикалі — колонки сітки.** Desktop: **5** (лівий край екрана, 25%, 50%, 75%, правий край). Mobile: **3** (краї + середина).
4. **Якщо лінія налазить на контент — її в цьому блоці немає.** Не малюй уламок навколо літер і не лишай обірваний відрізок у повітрі. Якщо в наступному блоці ця колонка порожня — вертикаль **продовжується**.
5. **Порожні колонки:** у рядку можна 1, 2 або 3 порожні підряд, якщо поруч є зміст. **4 підряд не можна** — вертикалі не ділять порожній ряд.
6. **З’єднане повітря** — відступ зі шкали між блоками. У кожного блока своя верхня лінія. Під останнім елементом контенту нижньої горизонталі немає. Вертикалі заходять у повітря і стикаються з верхньою лінією сусіда. В стику одна вертикаль. Обрив у повітрі — fail. Повна норма: `silence-division.mdc`.
7. **Хедер сторінки** (крихти, заголовок, лід) зазвичай без ліній. Лінії з’являються після фото.
8. **Горизонталі** окреслюють верх блока і стик між елементами (ряд, картка, панель). Під останнім елементом контенту — і під усім останнім рядом, якщо навпроти теж останній контент — горизонталі немає.
9. **H і V завжди йдуть до кінця екрана:** горизонталь — на всю ширину в’юпорта; вертикаль — до краю екрана або до H межі блока, де її знімає контент. Видимі стики — T або хрест.
10. Full-bleed фото: лінії **під** зображенням.
11. Картки в ряд: inset **16px** з усіх боків; hover — комірка → beige, зум фото **1.05**.
12. Слайдер проєктів: V на всьому слайдері; **beige bar «‹ 9:00 ›» поверх** mid V (`z-index` вище).
13. Глобальний `.vshanuy-page-shell__guides` — не заміна цим правилам і не «сітка скрізь» без map.

### Що ловити

- Вертикаль крізь контент блока (має зникнути в цьому блоці і продовжитись, де колонка порожня)
- Ряд, де порожні всі 4 колонки підряд і їх ділять вертикалі
- Вертикаль, що обривається в повітрі і не стикається з лінією сусіднього блока; блок без власної верхньої лінії, коли між блоками є відступ; горизонталь під останнім елементом контенту блока (зокрема під останнім рядом реєстру і текстом навпроти)
- Лінії в хедері сторінки (крихти, заголовок, лід); лінії мають починатися після фото
- Обірваний відрізок, що закінчується в порожнечі, або лінія, що не доходить до краю екрана
- H лише на ширину колонки тексту, а не на ширину екрана
- Подвійна H на одному стику; hover карток `scale(1.1)` без beige (еталон: 1.05 + beige)
- H на кожному фото в сітці команди; лінії поверх full-bleed фото
- Hex; breakpoint сітки ≠ **1024px**

**Виправлення:** 5/3 вертикалі колонок з пропуском на контенті; H на межі блока і UI — на всю ширину екрана; без обірваних відрізків. Каталог живих блоків — §G reference.

## Diff → fix

Для кожного mismatch у звіті:

```
| Область | Елемент | Головна | Сторінка | Severity | Дія |
| typography | h2 | Piazzolla 300 clamp 36–80 | Inter 700 2rem | blocker | … |
```

Severity:

- **blocker** — інший шрифт/вага дисплею, Geologica, primary CTA не ink→yellow, жовтий як тло; вертикаль крізь контент блока; обірваний відрізок у повітрі; H, що не доходить до краю екрана
- **major** — кегль поза шкалою, ритм секцій, CTA tracking/розмір; глобальні гайди «скрізь» всупереч silence-division; локальні лінії поверх фото
- **minor** — 1 крок шкали відступу, дрібний LH

Прав лише цільову сторінку (+ її CSS). `site/index.html` / еталонні overrides — **не** «підганяй під погану сторінку».

Після фіксів — повторний inventory (крок 7). Залиш open лише те, що потребує контент/рішення користувача.

## Звіт користувачу

Коротко:

1. Що порівнювалось (шляхи)
2. Скільки blocker / major / minor; що виправлено
3. Що лишилось відкритим (якщо є)
4. Опційно: «переглянь desktop 1024+ — блоки з кол. 1 ок; mobile full; лінії з’єднані (T), mid V крізь тишу»

Не цитуй увесь reference.md у відповіді.

## Джерела (читай за потреби)

- [reference.md](reference.md) — ролі, CTA, **§D–G лінії / каталог блоків**
- `.cursor/rules/homepage-style.mdc` — повний еталон стилю
- `.cursor/rules/silence-division.mdc` — локальне ділення тиші
- `site/_next/static/css/font-overrides.css` — жива головна
- `site/pro-nas.html` + `ui/src/layouts/AboutPage/` — еталон «Місія та цінності»
- `ui/src/layouts/ProjectPage/ProjectSlider.*` — слайдер `‹ 9:00 ›`
- Зразки parity: `site/kontakty.html` + `kontakty.css`, `site/napryamky/spivpratsya-z-biznesom.html` + `biznes.css`
