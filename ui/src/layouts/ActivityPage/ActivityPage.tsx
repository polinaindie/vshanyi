import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import { aboutDirections, type AboutDirection } from '../AboutPage/AboutPage'
import '../MaterialsPage/MaterialsPage.css'
import './ActivityPage.css'

export const activityDirections: AboutDirection[] = aboutDirections

export type ActivityPageProps = {
  showHeader?: boolean
  directions?: AboutDirection[]
}

/** Page composition: H1 «Напрями роботи.» → «Для кого ми говоримо про памʼять»: 7 напрямів одна під одною, як на головній (текст + фото; непарні з 2-ї колонки, парні з 1-ї). Проєкти — окрема сторінка `ProjectsPage`. Жовтий-бюджет 0. */
export function ActivityPage({ showHeader = true, directions = activityDirections }: ActivityPageProps) {
  return (
    <div className="vshanuy-materials-page vshanuy-activity-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-materials-page__main">
        <header className="vshanuy-materials-page__intro">
          <h1 className="vshanuy-materials-page__title">Напрями роботи.</h1>
        </header>

        <section className="vshanuy-activity__section" aria-labelledby="vshanuy-activity-directions-title">
          <header className="vshanuy-activity__section-head">
            <h2 className="vshanuy-activity__section-title" id="vshanuy-activity-directions-title">
              Для кого ми говоримо про памʼять
            </h2>
          </header>
          <ul className="vshanuy-activity__directions">
            {directions.map((direction, index) => (
              <li key={direction.href}>
                <a className="vshanuy-activity__card" href={direction.href}>
                  <div className="vshanuy-activity__copy">
                    <h3 className="vshanuy-activity__title">{direction.title}</h3>
                    <p className="vshanuy-activity__text">{direction.text}</p>
                  </div>
                  <span className="vshanuy-activity__media" aria-hidden="true">
                    <img
                      src={direction.image}
                      alt=""
                      width={960}
                      height={640}
                      loading={index > 1 ? 'lazy' : undefined}
                      decoding="async"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
