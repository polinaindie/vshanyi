import type { ReactNode } from 'react'
import authorPhoto from '../../assets/materials/istoriya/avtorka-datsenko.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { MaterialCard, defaultMaterials } from '../MaterialsPage/MaterialsPage'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../MaterialsPage/MaterialsPage.css'
import './MaterialPage.css'

export type MaterialArticleCover = {
  src: string
  alt: string
  width: number
  height: number
  caption?: ReactNode
}

export type MaterialArticleProps = {
  showHeader?: boolean
  /** Шлях публікації в реєстрі — її немає серед «Інших публікацій». */
  href: string
  tag: ReactNode
  title: string
  date?: { dateTime: string; label: string }
  standfirst: string
  cover: MaterialArticleCover
  /** Вміст sticky-колонки 1: автор і/або зміст. */
  aside: ReactNode
  children: ReactNode
}

/** Шаблон публікації: крихти → мітка → h1 → дата → лід; обкладинка (cols 2–4, підпис у col 1); col 1 sticky aside, cols 2–4 текст; «Інші публікації». Жовтий-бюджет 0. */
export function MaterialArticle({
  showHeader = true,
  href,
  tag,
  title,
  date,
  standfirst,
  cover,
  aside,
  children,
}: MaterialArticleProps) {
  const related = defaultMaterials.filter((material) => material.href !== href)

  return (
    <div className="vshanuy-article-page vshanuy-article-page--material">
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-article">
        <article>
          <header className="vshanuy-article__intro">
            <nav className="vshanuy-crumbs" aria-label="Навігаційний шлях">
              <ol>
                <li><a href="index.html">Головна</a></li>
                <li><a href="materialy.html">Публікації</a></li>
                <li><span aria-current="page">{title}</span></li>
              </ol>
            </nav>
            <p className="vshanuy-article__tag">{tag}</p>
            <h1 className="vshanuy-article__title">{title}</h1>
            {date ? (
              <p className="vshanuy-article__date"><time dateTime={date.dateTime}>{date.label}</time></p>
            ) : null}
            <p className="vshanuy-article__standfirst">{standfirst}</p>
          </header>

          <figure className="vshanuy-article__cover">
            <img src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} decoding="async"/>
            {cover.caption ? <figcaption>{cover.caption}</figcaption> : null}
          </figure>

          <div className="vshanuy-article__layout">
            <aside className="vshanuy-article__aside">
              <div className="vshanuy-article__aside-inner">{aside}</div>
            </aside>
            <div className="vshanuy-article__body">{children}</div>
          </div>
        </article>

        <section className="vshanuy-article__related" aria-labelledby="vshanuy-article-related">
          <div className="vshanuy-article__related-head">
            <h2 className="vshanuy-article__label" id="vshanuy-article-related">Інші публікації</h2>
            <a className="vshanuy-article__link" href="materialy.html">
              Усі публікації <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="vshanuy-materials-page__list">
            {related.map((material) => (
              <li key={material.href} className="vshanuy-materials-page__item">
                <MaterialCard material={material} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

/** Авторка колонки — у sticky-колонці 1. */
export function MaterialAuthor() {
  return (
    <div className="vshanuy-article__author">
      <img src={authorPhoto} alt="" width="964" height="1014" loading="lazy" decoding="async"/>
      <p className="vshanuy-article__author-name">Катерина Даценко</p>
      <p className="vshanuy-article__author-role">Співзасновниця ГО «Вшануй»</p>
    </div>
  )
}
