import businessVisibleMemory from '../../assets/business-visible-memory.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { PhotoCaption } from '../../components/PhotoCaption/PhotoCaption'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/PhotoCaption/PhotoCaption.css'
import '../../components/SiteFooter/SiteFooter.css'
import './BusinessCollaborationPage.css'

export type BusinessCollaborationPageProps = {
  showHeader?: boolean
  title?: string
  lead?: string
  contextTitle?: string
  contextBody?: string
  email?: string
}

const defaultTitle = 'Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації.'

const defaultLead =
  'Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й памʼять.'

const defaultContextTitle = 'А як зробити памʼять видимою у своєму бізнесі?'

const defaultContextBody =
  'До цього питання часто приходять компанії та організації. У більшості є чоловіки і жінки, які пішли до війська. І є ті, хто загинули. І також є ті, чиї життя забрала російська атака на робочому місці. Сьогодні це частина корпоративної соціальної відповідальності на рівні із ветеранською політикою.'

export function BusinessCollaborationPage({
  showHeader = true,
  title = defaultTitle,
  lead = defaultLead,
  contextTitle = defaultContextTitle,
  contextBody = defaultContextBody,
  email = 'momentofhonorukraine@gmail.com',
}: BusinessCollaborationPageProps) {
  const headline = lead ? `${title} ${lead}` : title

  return (
    <div className="vshanuy-business-page">
      <div className="vshanuy-business-page__shell">
        <div className="vshanuy-business-page__guides" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        {showHeader ? <DesktopHeader navActiveIndex={0} /> : null}

        <main className="vshanuy-business-page__main">
          <header className="vshanuy-business-page__band vshanuy-business-page__band--hero">
            <div className="vshanuy-business-page__hero-content">
              <p className="vshanuy-business-page__eyebrow">Для бізнесу</p>
              <h1 className="vshanuy-business-page__title">{headline}</h1>
            </div>
          </header>

          <section
            className="vshanuy-business-page__band vshanuy-business-page__band--context"
            aria-labelledby="vshanuy-business-context-title"
          >
            <figure className="vshanuy-business-page__context-photo">
              <img
                src={businessVisibleMemory}
                alt="Документальне фото: вшанування памʼяті в корпоративному контексті"
                width={1600}
                height={1067}
              />
              <PhotoCaption place="Україна" year="2026" tag="Для бізнесу" />
            </figure>
            <div className="vshanuy-business-page__context-copy">
              <h2 id="vshanuy-business-context-title" className="vshanuy-business-page__context-title">
                {contextTitle}
              </h2>
              {contextBody ? (
                <p className="vshanuy-business-page__context-body">{contextBody}</p>
              ) : null}
            </div>
          </section>
        </main>
      </div>

      <SiteFooter email={email} />
    </div>
  )
}
