#!/usr/bin/env node
/**
 * Генерує CSS описів карток головної з ui/src/data/projectTeasers.json
 * → site/_next/static/css/font-overrides.css (маркери BEGIN/END).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const uiRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const repoRoot = join(uiRoot, '..')
const teasersPath = join(uiRoot, 'src/data/projectTeasers.json')
const cssPath = join(repoRoot, 'site/_next/static/css/font-overrides.css')

const teasers = JSON.parse(readFileSync(teasersPath, 'utf8'))

const order = [
  { slug: 'hvylyna-movchannya', label: 'Хвилина мовчання' },
  { slug: 'chekafest', label: 'ЧЕКАFEST' },
  { slug: 'proshchannya-z-praporom', label: 'Прощання з прапором' },
  { slug: 'tryzna', label: 'Тризна' },
  { slug: 'pomizh-nas', label: 'Поміж нас' },
  { slug: 'dzerkalo-pamyati', label: 'Дзеркало памʼяті' },
  { slug: 'vinkuvannya', label: 'Вінкування' },
  { slug: 'tse-mozhe-buty-tysha', label: 'Це може бути тиша' },
]

function cssQuote(text) {
  return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

function cardBlock(index, slug, label) {
  const teaser = teasers[slug]
  if (!teaser) {
    throw new Error(`Missing teaser for slug: ${slug}`)
  }
  const n = String(index).padStart(2, '0')
  return `/* ${n} — ${label} */
section[data-block-type="blockSelectedProjects"] a.group\\/link[href*="${slug}"] .absolute.inset-0 {
  background: center / cover no-repeat url("../media/vshanuy-proekt-${slug}-1600.webp");
}
section[data-block-type="blockSelectedProjects"] a.group\\/link[href*="${slug}"] img {
  opacity: 0;
}
section[data-block-type="blockSelectedProjects"] a.group\\/link[href*="${slug}"] h3.font-serif::after {
  content: "${cssQuote(teaser)}";
}
`
}

const generated =
  '/* BEGIN project-teasers-sync (ui/scripts/sync-home-project-teasers.mjs) */\n' +
  order.map((item, i) => cardBlock(i + 1, item.slug, item.label)).join('\n') +
  '/* END project-teasers-sync */\n'

let css = readFileSync(cssPath, 'utf8')
const begin = '/* BEGIN project-teasers-sync'
const end = '/* END project-teasers-sync */'

const beginIdx = css.indexOf(begin)
const endIdx = css.indexOf(end)

if (beginIdx === -1 || endIdx === -1) {
  console.error('Markers not found in font-overrides.css')
  process.exit(1)
}

const afterEnd = endIdx + end.length
css = css.slice(0, beginIdx) + generated.trimEnd() + '\n\n' + css.slice(afterEnd).replace(/^\n+/, '')
writeFileSync(cssPath, css)
console.log('Updated home project teaser CSS in font-overrides.css')
