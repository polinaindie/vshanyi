# Внесок у «Вшануй»

Спільна робота йде через **feature-гілки → Pull Request → `main`**. Нові сторінки й UI — лише в дизайн-системі (`ui/` + Storybook).

## Онбординг (≈15 хв)

1. Клон репо, потім:

```bash
cd ui
npm install
npm run storybook
```

→ http://localhost:6006

2. Прочитати (обов’язково):
   - [BRAND.md](BRAND.md)
   - Storybook → **Docs/BrandRules**, **Docs/PageChecklist**, Tokens, LayoutSystem
   - [ui/README.md](ui/README.md)

3. Нова сторінка / секція = layout у `ui/src/layouts/` + `.stories.tsx`. Компоненти — у `ui/src/components/`.

## Де що живе

| Що | Куди |
|---|---|
| Сторінки, секції, компоненти, stories | `ui/` |
| Токени / оригінальне лого | `brand/` |
| Статичне дзеркало / GitHub Pages | `site/` — **не чіпати** без явного запиту |
| Правила Cursor-агентів | `.cursor/rules/` |

## Гілки

| Гілка | Призначення |
|---|---|
| `main` | Стабільна. Прямий push уникаємо — лише через PR |
| `feat/<коротко>` або `page/<назва>` | Робоча гілка від актуального `main` |
| `gh-pages` | Деплой скриптом; руками не правити |

**Один PR ≈ одна сторінка / одна зміна.** У описі PR — що змінилось і назва Storybook story (або скрін).

Паралельна робота: різні файли/сторінки на різних гілках. Зміни спільних токенів чи примітивів — окремим маленьким PR першим.

## Жорсткі правила DS (скорочено)

Повний список — Storybook **Docs/BrandRules** і **Docs/PageChecklist**. Мінімум перед PR:

- Кольори — лише токени (`brand/tokens.css` / `ui/src/styles/tokens.css`). **Ніяких hex** у компонентах.
- Жовтий — максимум **один** акцент на viewport; ніколи як тло чи декор.
- `border-radius: 0`; без тіней, градієнтів, скла.
- Світла база (Paper / Beige / Ink); Volja — тільки в логотипі.
- Reuse існуючих блоків з DS; не дублювати.
- Не читається як Anuc / wellness-рескін.

Перед merge прогнати [Docs/PageChecklist](ui/src/docs/PageChecklist.mdx).

## Review

Чеклист у шаблоні PR (`.github/PULL_REQUEST_TEMPLATE.md`). Рецензент звіряє з Storybook Docs і чеклистом сторінки.

## Налаштування репо для команди (власник, один раз)

Зробити вручну в GitHub → [polinaindie/vshanyi](https://github.com/polinaindie/vshanyi):

1. **Settings → Collaborators** — запросити колегу.
2. **Settings → Branches → Branch protection** для `main`:
   - Require a pull request before merging
   - (бажано) Require approvals ≥ 1
   - Не дозволяти force push / deletion

Після цього всі зміни потрапляють у `main` лише через PR.
