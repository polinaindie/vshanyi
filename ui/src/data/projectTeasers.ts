import teasers from './projectTeasers.json'

/** Короткі описи карток проєктів — єдине джерело для UI, site/proekty і головної (CSS sync). */
export const projectTeasers: Record<string, string> = teasers

export function getProjectTeaser(slug: string): string | undefined {
  return projectTeasers[slug]
}

/** Порядок карток на головній (blockSelectedProjects). */
export const homeProjectCardOrder: { slug: string; label: string }[] = [
  { slug: 'hvylyna-movchannya', label: 'Хвилина мовчання' },
  { slug: 'chekafest', label: 'ЧЕКАFEST' },
  { slug: 'proshchannya-z-praporom', label: 'Прощання з прапором' },
  { slug: 'tryzna', label: 'Тризна' },
  { slug: 'pomizh-nas', label: 'Поміж нас' },
  { slug: 'dzerkalo-pamyati', label: 'Дзеркало памʼяті' },
  { slug: 'vinkuvannya', label: 'Вінкування' },
  { slug: 'tse-mozhe-buty-tysha', label: 'Це може бути тиша' },
]
