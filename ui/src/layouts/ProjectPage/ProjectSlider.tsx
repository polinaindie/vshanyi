import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import type { Project } from './ProjectPage'
import './ProjectSlider.css'

/** Короткі описи — ті самі, що зʼявляються при наведенні на головній */
export const projectTeasers: Record<string, string> = {
  'hvylyna-movchannya':
    'Хвилина мовчання – це ритуал подяки, пошани та памʼяті. Це символічна обʼєднавча дія, відкрита для залученості широкого кола суспільства, і покликана зберігати памʼять про російсько-українську війну, нашу спільну боротьбу за незалежність.',
  chekafest:
    'ЧЕКАфест – це благодійний освітньо-музичний фестиваль памʼяті Ірини Цибух. Він створений родиною та друзями Іри ЧЕКИ Цибух. Фестиваль щорічний та проводиться у найближчих зручних датах до дня народження Ірини – 1 червня.',
  'proshchannya-z-praporom':
    'Церемонія, коли державний символ завершує службу — і ми визнаємо це з повагою. Коли прапор зношується й втрачає вигляд, постає питання: що робити далі?',
  tryzna:
    'Публічне прощання з військовим — спосіб вшанувати людину й подякувати за службу. Прощання з містом — остання зустріч загиблого з громадою; особливо важлива для родини.',
  'pomizh-nas':
    'Загальноукраїнський проєкт ГО «Вшануй»: вшанування памʼяті загиблих Захисників і Захисниць та підтримка родин полонених і зниклих безвісти. Тактовне нагадування про ціну умовно спокійного життя.',
  'dzerkalo-pamyati':
    'Проєкт координаторок «Вшануй» у Полтаві. Місце, де кожен може залишити імʼя людини, яку вбила росія, — щоб вона була видимою у просторі міста.',
  vinkuvannya:
    '29 серпня 2026-го, у День памʼяті загиблих, ми відновлювали традицію вінкування. Родини та друзі плели вінки з живих квітів під розповіді про найщасливіші моменти полеглих.',
  'tse-mozhe-buty-tysha':
    'Це виставка про мить, коли щодня о 9:00 ми зупиняємося, щоб згадати тих, кого вже немає поруч.',
}

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
    description: projectTeasers[item.slug] ?? item.standfirst,
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
              <a className="vshanuy-project-slider__card" href={item.href}>
                <span className="vshanuy-project-slider__media">
                  <img
                    src={item.image}
                    alt=""
                    width={item.imageWidth ?? 960}
                    height={item.imageHeight ?? 640}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </span>
                <div className="vshanuy-project-slider__meta">
                  <div className="vshanuy-project-slider__text">
                    <h3 className="vshanuy-project-slider__name">{item.cardTitle}</h3>
                    <p className="vshanuy-project-slider__desc">{item.description}</p>
                  </div>
                </div>
              </a>
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
