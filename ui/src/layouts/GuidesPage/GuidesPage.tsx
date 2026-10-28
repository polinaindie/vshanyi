import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'
import './GuidesPage.css'

export type Guide = {
  title: string
  text: string
  file?: { href: string; size: string }
}

export const guides: Guide[] = [
  {
    title: 'Дорожня карта Хвилини мовчання',
    text: 'Покрокова інструкція для міста, як запровадити Хвилину мовчання.',
  },
  {
    title: 'Як впровадити Хвилину мовчання у бізнесі',
    text: 'Як комунікувати з працівниками і пояснити аудиторії ритуал.',
  },
  {
    title: 'Практичний комунікаційний гайд «Не нашкодити»',
    text: 'Що говорити після обстрілів або у дні памʼяті.',
  },
]

export type GuidesPageProps = {
  showHeader?: boolean
  items?: Guide[]
}

/** Page composition: H1 «Посібники.» → нумерований список, розділений лінійками: номер (кол. 1), назва й опис (кол. 2–3), «Завантажити PDF» з розміром файлу (кол. 4), лише якщо є файл. Жовтий-бюджет 0. */
export function GuidesPage({ showHeader = true, items = guides }: GuidesPageProps) {
  return (
    <div className="vshanuy-materials-page vshanuy-guides-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-materials-page__main">
        <header className="vshanuy-materials-page__intro">
          <h1 className="vshanuy-materials-page__title">Посібники.</h1>
        </header>

        <ol className="vshanuy-guides-page__list">
          {items.map((guide, index) => {
            const titleId = `guide-${index + 1}`
            return (
              <li key={guide.title} className="vshanuy-guides-page__item">
                <p className="vshanuy-guides-page__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="vshanuy-guides-page__copy">
                  <h2 className="vshanuy-guides-page__title" id={titleId}>
                    {guide.title}
                  </h2>
                  <p className="vshanuy-guides-page__text">{guide.text}</p>
                </div>
                {guide.file ? (
                  <a className="vshanuy-guides-page__download" href={guide.file.href} download aria-describedby={titleId}>
                    Завантажити PDF <span className="vshanuy-guides-page__size">{guide.file.size}</span>{' '}
                    <span aria-hidden="true">↓</span>
                  </a>
                ) : null}
              </li>
            )
          })}
        </ol>
      </main>

      <SiteFooter />
    </div>
  )
}
