import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { getProjectTeaser, projectTeasers } from '../../data/projectTeasers'
import type { Project } from './ProjectPage'
import './ProjectSlider.css'

export { projectTeasers }

export type ProjectSliderCard = {
  href: string
  cardTitle: string
  image: string
  imageWidth?: number
  imageHeight?: number
  description: string
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true

const perPage = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(min-width: 1024px)').matches ? 4 : 2

const pad2 = (n: number) => String(n).padStart(2, '0')

export function projectToSliderCard(item: Project): ProjectSliderCard {
  return {
    href: `napryamky/${item.slug}.html`,
    cardTitle: item.cardTitle,
    image: item.image,
    imageWidth: item.imageWidth,
    imageHeight: item.imageHeight,
    description: getProjectTeaser(item.slug) ?? item.standfirst,
  }
}

export type ProjectSliderProps = {
  items: Project[] | ProjectSliderCard[]
  /** «about» — без заголовка «Інші проєкти», вбудовано в #proekty */
  variant?: 'related' | 'about'
}

/** Один ряд карток + смуга «‹ 9:00 ›» як blockSelectedProjects на головній. Жовтий-бюджет 0. */
export function ProjectSlider({ items, variant = 'related' }: ProjectSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [pageIndex, setPageIndex] = useState(0)
  const [loopable, setLoopable] = useState(false)

  const cards: ProjectSliderCard[] = items.map((item) =>
    'slug' in item && 'standfirst' in item ? projectToSliderCard(item as Project) : (item as ProjectSliderCard),
  )

  const maxPage = useCallback(
    () => Math.max(0, Math.ceil(cards.length / perPage()) - 1),
    [cards.length],
  )

  const slideWidth = useCallback(() => {
    const viewport = viewportRef.current
    const slide = viewport?.querySelector('.vshanuy-project-slider__slide')
    return slide ? slide.getBoundingClientRect().width : viewport?.clientWidth ?? 0
  }, [])

  const scrollOffsetForPage = useCallback(
    (page: number) => {
      const width = slideWidth()
      if (width <= 0) return 0
      const pageSize = perPage()
      const maxStart = Math.max(0, cards.length - pageSize)
      const start = Math.min(page * pageSize, maxStart)
      return start * width
    },
    [cards.length, slideWidth],
  )

  const scrollToPage = useCallback(
    (page: number, animate: boolean) => {
      const viewport = viewportRef.current
      if (!viewport) return
      const clamped = Math.min(maxPage(), Math.max(0, page))
      viewport.scrollTo({
        left: scrollOffsetForPage(clamped),
        behavior: animate && !prefersReducedMotion() ? 'smooth' : 'auto',
      })
      setPageIndex(clamped)
    },
    [maxPage, scrollOffsetForPage],
  )

  const syncFromScroll = useCallback(() => {
    const viewport = viewportRef.current
    const width = slideWidth()
    if (!viewport || width <= 0) return
    const pageSize = perPage()
    const raw = Math.round(viewport.scrollLeft / width / pageSize)
    const next = Math.min(maxPage(), Math.max(0, raw))
    setPageIndex(next)
  }, [maxPage, slideWidth])

  const refresh = useCallback(() => {
    const canLoop = cards.length > perPage()
    setLoopable(canLoop)
    syncFromScroll()
  }, [cards.length, syncFromScroll])

  useEffect(() => {
    refresh()
    window.addEventListener('resize', refresh)
    return () => window.removeEventListener('resize', refresh)
  }, [refresh])

  const go = (dir: number) => {
    const max = maxPage()
    if (max <= 0) return
    const next = (pageIndex + dir + (max + 1)) % (max + 1)
    scrollToPage(next, true)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(1)
    }
  }

  const rootClass =
    variant === 'about'
      ? 'vshanuy-project-slider vshanuy-project-slider--about'
      : 'vshanuy-project-slider'

  return (
    <section className={rootClass} aria-labelledby={variant === 'about' ? undefined : 'vshanuy-project-related'}>
      {variant === 'related' ? (
        <div className="vshanuy-project-slider__head">
          <h2 className="vshanuy-article__label" id="vshanuy-project-related">
            Інші проєкти
          </h2>
          <a className="vshanuy-article__link" href="proekty.html">
            Усі проєкти <span aria-hidden="true">→</span>
          </a>
        </div>
      ) : null}
      <div
        ref={viewportRef}
        className="vshanuy-project-slider__viewport"
        tabIndex={0}
        aria-label="Наші проєкти, гортайте вбік"
        onScroll={syncFromScroll}
        onKeyDown={onKeyDown}
      >
        <ul className="vshanuy-project-slider__track">
          {cards.map((item) => (
            <li key={item.href} className="vshanuy-project-slider__slide">
              <ProjectCard
                href={item.href}
                title={item.cardTitle}
                description={item.description}
                image={item.image}
                imageWidth={item.imageWidth}
                imageHeight={item.imageHeight}
                titleAs="h3"
                draggable={false}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="vshanuy-project-slider__controls" hidden={!loopable}>
        <div className="vshanuy-project-slider__bar">
          <button
            className="vshanuy-project-slider__button"
            type="button"
            data-slider-prev
            aria-label="Попередні проєкти"
            disabled={!loopable}
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 8 8" aria-hidden="true" focusable="false">
              <path d="M5.5 1 2.5 4l3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <span className="vshanuy-project-slider__time" aria-hidden="true">
            9:{pad2(pageIndex)}
          </span>
          <button
            className="vshanuy-project-slider__button"
            type="button"
            data-slider-next
            aria-label="Наступні проєкти"
            disabled={!loopable}
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 8 8" aria-hidden="true" focusable="false">
              <path d="m2.5 1 3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
