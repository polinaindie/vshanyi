import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { DirectionCard } from '../../components/DirectionCard/DirectionCard'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import { defaultDirectionItems, type DirectionItem } from '../../data/directionItems'
import '../MaterialsPage/MaterialsPage.css'
import './ActivityPage.css'

export type ActivityPageProps = {
  showHeader?: boolean
  directions?: DirectionItem[]
}

/** Page composition: H1 «Напрями роботи.» → «Для кого ми говоримо про памʼять»: усі 7 напрямів одразу, по 2 в ряд (фото, назва, текст). Проєкти — окрема сторінка `ProjectsPage`. Жовтий-бюджет 0. */
export function ActivityPage({ showHeader = true, directions = defaultDirectionItems }: ActivityPageProps) {
  return (
    <div className="vshanuy-materials-page vshanuy-activity-page">
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-materials-page__main">
        <header className="vshanuy-materials-page__intro">
          <h1 className="vshanuy-materials-page__title">Напрями роботи.</h1>
          <p className="vshanuy-activity__intro-lead" id="vshanuy-activity-directions-lead">
            Для кого ми говоримо про памʼять
          </p>
        </header>

        <section className="vshanuy-activity__section" aria-labelledby="vshanuy-activity-directions-lead">
          <ul className="vshanuy-activity__directions">
            {directions.map((item, index) => (
              <li key={item.href}>
                <DirectionCard
                  href={item.href}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  caption={item.caption}
                  imgLoading={index > 1 ? 'lazy' : undefined}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

/** @deprecated use defaultDirectionItems from data/directionItems */
export const activityDirections = defaultDirectionItems
