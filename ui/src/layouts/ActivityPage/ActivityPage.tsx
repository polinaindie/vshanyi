import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import { aboutDirections, type AboutDirection } from '../AboutPage/AboutPage'

/** На головній перший напрямок називається «Громада», а не «Регіони» */
export const activityDirections: AboutDirection[] = aboutDirections.map((direction) =>
  direction.href === 'napryamky/gromada.html' ? { ...direction, title: 'Громада' } : direction,
)

export type ActivityPageProps = {
  showHeader?: boolean
  directions?: AboutDirection[]
}

/** Page composition: H1 «Діяльність.» + 7 напрямків 4 в ряд (фото + назва + текст, hover — беж і zoom фото), як на «Про нас». Жовтий-бюджет 0. */
export function ActivityPage({ showHeader = true, directions = activityDirections }: ActivityPageProps) {
  return (
    <div className="vshanuy-about-page vshanuy-activity-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-about-page__main">
        <header className="vshanuy-about-page__intro">
          <h1 className="vshanuy-about-page__title">Діяльність.</h1>
        </header>

        <ul className="vshanuy-about-page__directions">
          {directions.map((direction, index) => (
            <li key={direction.href}>
              <a className="vshanuy-about-page__direction" href={direction.href}>
                <span className="vshanuy-about-page__direction-media" aria-hidden="true">
                  <img
                    src={direction.image}
                    alt=""
                    width={960}
                    height={640}
                    loading={index > 3 ? 'lazy' : undefined}
                    decoding="async"
                  />
                </span>
                <h2>{direction.title}</h2>
                <p>{direction.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  )
}
