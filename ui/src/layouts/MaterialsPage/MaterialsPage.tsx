import { useState } from 'react'
import historyPhoto from '../../assets/materials/vshanuy-material-istoriya.jpg'
import denPamyatiPhoto from '../../assets/materials/vshanuy-material-den-pamyati.jpg'
import dlyaChohoPhoto from '../../assets/materials/vshanuy-material-dlya-choho.jpg'
import researchPhoto from '../../assets/materials/vshanuy-material-kharkiv.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'

export type MaterialType = 'kolonka-avtora' | 'doslidzhennya'

export type Material = {
  type: MaterialType
  tag: string
  title: string
  excerpt?: string
  href: string
  cover: string
  coverWidth: number
  coverHeight: number
  featured?: boolean
}

export type MaterialsPageProps = {
  showHeader?: boolean
  materials?: Material[]
}

const filters: { id: 'all' | MaterialType; label: string }[] = [
  { id: 'all', label: 'Усі' },
  { id: 'kolonka-avtora', label: 'Колонка автора' },
  { id: 'doslidzhennya', label: 'Дослідження' },
]

const author = 'Колонка Катерини Даценко'

export const defaultMaterials: Material[] = [
  {
    type: 'kolonka-avtora',
    tag: author,
    title: 'Історія Хвилини мовчання',
    excerpt: 'Яка ще країна проводила Хвилину мовчання щодня і від кого ми успадкували цю практику.',
    href: 'materialy/istoriya-khvylyny-movchannya.html',
    cover: historyPhoto,
    coverWidth: 1024,
    coverHeight: 760,
    featured: true,
  },
  {
    type: 'kolonka-avtora',
    tag: author,
    title: 'Як вшанувати полеглих захисників та захисниць у День памʼяті',
    excerpt: 'Чому нам так важливо обʼєднуватись і як памʼять може це зробити.',
    href: 'materialy/yak-vshanuvaty-u-den-pamyati.html',
    cover: denPamyatiPhoto,
    coverWidth: 920,
    coverHeight: 613,
  },
  {
    type: 'kolonka-avtora',
    tag: author,
    title: 'А для чого памʼятаєш ти?',
    excerpt: 'Про що фестиваль памʼяті ЧекаFest і як це продовжує життя.',
    href: 'materialy/dlya-choho-pamyatayesh-ty.html',
    cover: dlyaChohoPhoto,
    coverWidth: 1024,
    coverHeight: 682,
  },
  {
    type: 'doslidzhennya',
    tag: 'Дослідження',
    title: 'Дослідження міських практик памʼяті, прощання та меморіалізації в Харкові',
    href: 'materialy/doslidzhennya-kharkiv.html',
    cover: researchPhoto,
    coverWidth: 1024,
    coverHeight: 682,
  },
]

/** Page composition: H1 + фільтр за типом → головний матеріал на всю ширину → картки в колонках сітки. Жовтий-бюджет 0. */
export function MaterialsPage({ showHeader = true, materials = defaultMaterials }: MaterialsPageProps) {
  const [filter, setFilter] = useState<'all' | MaterialType>('all')
  const [status, setStatus] = useState('')

  const select = (id: 'all' | MaterialType) => {
    setFilter(id)
    const shown = materials.filter((material) => id === 'all' || material.type === id).length
    setStatus(`Показано публікацій: ${shown}`)
  }

  return (
    <div className="vshanuy-materials-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-materials-page__main">
        <header className="vshanuy-materials-page__intro">
          <h1 className="vshanuy-materials-page__title">Публікації.</h1>
          <ul className="vshanuy-materials-page__filters" aria-label="Тип публікації">
            {filters.map((item) => (
              <li key={item.id}>
                <button type="button" aria-pressed={filter === item.id} onClick={() => select(item.id)}>
                  {item.label}{' '}
                  <span data-count>
                    {materials.filter((material) => item.id === 'all' || material.type === item.id).length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </header>

        <ul className="vshanuy-materials-page__list">
          {materials.map((material) => {
            const featured = material.featured && filter === 'all'
            return (
            <li
              key={material.href}
              className={`vshanuy-materials-page__item${featured ? ' vshanuy-materials-page__item--featured' : ''}`}
              hidden={filter !== 'all' && material.type !== filter}
            >
              <a className="vshanuy-materials-page__card" href={material.href}>
                <img
                  src={material.cover}
                  alt=""
                  width={material.coverWidth}
                  height={material.coverHeight}
                  loading={material.featured ? undefined : 'lazy'}
                  decoding="async"
                />
                <span className="vshanuy-materials-page__body">
                  <span className="vshanuy-materials-page__tag">{material.tag}</span>
                  <span className="vshanuy-materials-page__name">{material.title}</span>
                  {featured && material.excerpt ? (
                    <span className="vshanuy-materials-page__excerpt">{material.excerpt}</span>
                  ) : null}
                  {featured ? (
                    <span className="vshanuy-materials-page__more">
                      Читати <span aria-hidden="true">→</span>
                    </span>
                  ) : null}
                </span>
              </a>
            </li>
            )
          })}
        </ul>
        <p className="vshanuy-visually-hidden" role="status" aria-live="polite">
          {status}
        </p>
      </main>

      <SiteFooter />
    </div>
  )
}
