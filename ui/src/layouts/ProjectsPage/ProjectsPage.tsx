import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'
import { projects } from '../ProjectPage/ProjectPage'
import { projectTeasers } from '../ProjectPage/ProjectSlider'
import '../ProjectPage/ProjectSlider.css'

export type ProjectsPageProps = {
  showHeader?: boolean
}

/** Page composition: H1 «Проєкти.» + сітка карток як у слайдері «Інші проєкти» — 4 в ряд на десктопі, 2 на мобільному. Жовтий-бюджет 0. */
export function ProjectsPage({ showHeader = true }: ProjectsPageProps) {
  return (
    <div className="vshanuy-materials-page vshanuy-projects-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-materials-page__main">
        <header className="vshanuy-materials-page__intro">
          <h1 className="vshanuy-materials-page__title">Проєкти.</h1>
        </header>

        <ul className="vshanuy-projects-page__list">
          {projects.map((item, index) => (
            <li key={item.slug} className="vshanuy-projects-page__item">
              <a className="vshanuy-project-slider__card" href={`napryamky/${item.slug}.html`}>
                <span className="vshanuy-project-slider__media">
                  <img
                    src={item.image}
                    alt=""
                    width={item.imageWidth}
                    height={item.imageHeight}
                    loading={index > 3 ? 'lazy' : undefined}
                    decoding="async"
                  />
                </span>
                <div className="vshanuy-project-slider__meta">
                  <p className="vshanuy-project-slider__num">{item.number}</p>
                  <div className="vshanuy-project-slider__text">
                    <h2 className="vshanuy-project-slider__name">{item.cardTitle}</h2>
                    <p className="vshanuy-project-slider__desc">{projectTeasers[item.slug] ?? item.standfirst}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  )
}
