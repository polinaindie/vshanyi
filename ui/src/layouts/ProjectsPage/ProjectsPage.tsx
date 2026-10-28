import { useState } from 'react'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'
import { directionFilters, projectDirections, projects, type DirectionId } from '../ProjectPage/ProjectPage'
import { projectTeasers } from '../ProjectPage/ProjectSlider'
import '../ProjectPage/ProjectSlider.css'
import '../ActivityPage/ActivityPage.css'

const matches = (slug: string, filter: 'all' | DirectionId) =>
  filter === 'all' || (projectDirections[slug] ?? []).includes(filter)

export type ProjectsPageProps = {
  showHeader?: boolean
}

/** Page composition: H1 «Проєкти.» + фільтр за напрямом (за замовчуванням усі), як на «Публікаціях» → сітка карток 4 в ряд без номерів. Жовтий-бюджет 0. */
export function ProjectsPage({ showHeader = true }: ProjectsPageProps) {
  const [filter, setFilter] = useState<'all' | DirectionId>('all')
  const [status, setStatus] = useState('')
  const count = (id: 'all' | DirectionId) => projects.filter((item) => matches(item.slug, id)).length
  const filters = [
    { id: 'all' as const, label: 'Усі' },
    ...directionFilters.filter((item) => count(item.id) > 0),
  ]

  const select = (id: 'all' | DirectionId) => {
    setFilter(id)
    setStatus(`Показано проєктів: ${count(id)}`)
  }

  return (
    <div className="vshanuy-materials-page vshanuy-projects-index-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-materials-page__main">
        <header className="vshanuy-materials-page__intro">
          <h1 className="vshanuy-materials-page__title" id="vshanuy-projects-title">
            Проєкти.
          </h1>
          <ul className="vshanuy-materials-page__filters" aria-label="Напрям">
            {filters.map((item) => (
              <li key={item.id}>
                <button type="button" aria-pressed={filter === item.id} onClick={() => select(item.id)}>
                  {item.label} <span data-count>{count(item.id)}</span>
                </button>
              </li>
            ))}
          </ul>
        </header>

        <section
          className="vshanuy-activity__projects vshanuy-activity__projects--page"
          aria-labelledby="vshanuy-projects-title"
        >
          <ul className="vshanuy-projects-page__list">
            {projects.map((item, index) => (
              <li key={item.slug} className="vshanuy-projects-page__item" hidden={!matches(item.slug, filter)}>
                <a className="vshanuy-project-slider__card" href={`napryamky/${item.slug}.html`}>
                  <span className="vshanuy-project-slider__media">
                    <img
                      src={item.image}
                      alt=""
                      width={item.imageWidth}
                      height={item.imageHeight}
                      loading={index > 1 ? 'lazy' : undefined}
                      decoding="async"
                    />
                  </span>
                  <div className="vshanuy-project-slider__meta">
                    <div className="vshanuy-project-slider__text">
                      <h2 className="vshanuy-project-slider__name">{item.cardTitle}</h2>
                      <p className="vshanuy-project-slider__desc">{projectTeasers[item.slug] ?? item.standfirst}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <p className="vshanuy-visually-hidden" role="status" aria-live="polite">
            {status}
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
