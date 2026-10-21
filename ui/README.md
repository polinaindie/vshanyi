# Вшануй UI + Storybook

React-компоненти й секції «тихого архіву дії». Статичне дзеркало сайту в `../site/` тут не чіпаємо.

## Запуск

```bash
cd ui
npm install
npm run storybook
```

Відкриється [http://localhost:6006](http://localhost:6006) (якщо порт зайнятий — наступний вільний).

Шрифти як на головній: **Fixel** (UI), **Piazzolla Light** (дисплей, weight 300), **Volja** (лого). Файли в `public/fonts/`.

Збірка статики:

```bash
npm run build-storybook
```

## Структура

- `src/docs/` — концепт, бренд-правила, токени, Anuc vs Вшануй
- `src/components/` — foundations, chrome, content
- `src/layouts/` — секції (Hero, FAQ, форми тощо)
- `src/styles/tokens.css` — токени (канон: `../brand/tokens.css`)

## Принцип

Craft сітки рівня редакційного сайту; характер — Вшануй (світло, `09:00`, жовтий = дія, тиша, документальні фото). Без шрифтів/кольорів/зображень Anuc.

**Тест різниці:** поруч з [Anuc Home](https://www.anuchome.com/) Storybook не повинен читатися як рескін — це архів дії, не lifestyle/wellness.

Корисні stories: `Foundations/BlockButton/OneYellowAccent`, `Sections/PageRhythm/SilenceBetweenBlocks`.
