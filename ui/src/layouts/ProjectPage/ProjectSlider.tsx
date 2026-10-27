import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import type { Project } from './ProjectPage'
import './ProjectSlider.css'

/** Короткі описи — ті самі, що з'являються при наведенні на головній */
export const projectTeasers: Record<string, string> = {
  'hvylyna-movchannya': 'Хвилина мовчання – це ритуал подяки, пошани та пам’яті. Це символічна об’єднавча дія, відкрита для залученості широкого кола суспільства, і покликана зберігати пам’ять про російсько-українську війну, нашу спільну боротьбу за незалежність.',
  chekafest: 'ЧЕКАфест – це благодійний освітньо-музичний фестиваль пам’яті Ірини Цибух. Він створений родиною та друзями Іри ЧЕКИ Цибух. Фестиваль щорічний та проводиться у найближчих зручних датах до дня народження Ірини – 1 червня.',
  'proshchannya-z-praporom': 'Церемонія, коли державний символ завершує службу — і ми визнаємо це з повагою. Коли прапор зношується й втрачає вигляд, постає питання: що робити далі?',
  tryzna: 'Публічне прощання з військовим — спосіб вшанувати людину й подякувати за службу. Прощання з містом — остання зустріч загиблого з громадою; особливо важлива для родини.',
  'pomizh-nas': 'Загальноукраїнський проєкт ГО «Вшануй»: вшанування памʼяті загиблих Захисників і Захисниць та підтримка родин полонених і зниклих безвісти. Тактовне нагадування про ціну умовно спокійного життя.',
  'dzerkalo-pamyati': 'Проєкт координаторок «Вшануй» у Полтаві. Місце, де кожен може залишити імʼя людини, яку вбила росія, — щоб вона була видимою у просторі міста.',
  vinkuvannya: '29 серпня 2026-го, у День памʼяті загиблих, ми відновлювали традицію вінкування. Родини та друзі плели вінки з живих квітів під розповіді про найщасливіші моменти полеглих.',
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true

export type ProjectSliderProps = {
  items: Project[]
}

/** «Інші проєкти» в один ряд: 4 картки на десктопі, 2 на мобільному; смуга «‹ 9:00 ›» як на головній. Жовтий-бюджет 0. */
export function ProjectSlider({ items }: ProjectSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    setAtStart(viewport.scrollLeft <= 2)
    setAtEnd(viewport.scrollLeft >= viewport.scrollWidth - viewport.clientWidth - 2)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const go = (dir: number) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const slide = viewport.querySelector('.vshanuy-project-slider__slide')
    const step = slide ? slide.getBoundingClientRect().width : viewport.clientWidth
    viewport.scrollBy({ left: dir * step, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
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

  return (
    <section className="vshanuy-project-slider" aria-labelledby="vshanuy-project-related">
      <div className="vshanuy-project-slider__head">
        <h2 className="vshanuy-article__label" id="vshanuy-project-related">
          Інші проєкти
        </h2>
        <a className="vshanuy-article__link" href="proekty.html">
          Усі проєкти <span aria-hidden="true">→</span>
        </a>
      </div>
      <div
        ref={viewportRef}
        className="vshanuy-project-slider__viewport"
        tabIndex={0}
        aria-label="Інші проєкти, гортайте вбік"
        onScroll={update}
        onKeyDown={onKeyDown}
      >
        <ul className="vshanuy-project-slider__track">
          {items.map((item) => (
            <li key={item.slug} className="vshanuy-project-slider__slide">
              <a className="vshanuy-project-slider__card" href={`napryamky/${item.slug}.html`}>
                <span className="vshanuy-project-slider__media">
                  <img
                    src={item.image}
                    alt=""
                    width={item.imageWidth}
                    height={item.imageHeight}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </span>
                <div className="vshanuy-project-slider__meta">
                  <p className="vshanuy-project-slider__num">{item.number}</p>
                  <div className="vshanuy-project-slider__text">
                    <h3 className="vshanuy-project-slider__name">{item.cardTitle}</h3>
                    <p className="vshanuy-project-slider__desc">{projectTeasers[item.slug] ?? item.standfirst}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="vshanuy-project-slider__controls">
        <div className="vshanuy-project-slider__bar">
          <button
            className="vshanuy-project-slider__button"
            type="button"
            aria-label="Попередні проєкти"
            disabled={atStart}
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 8 8" aria-hidden="true" focusable="false">
              <path d="M5.5 1 2.5 4l3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <span className="vshanuy-project-slider__time" aria-hidden="true">
            9:00
          </span>
          <button
            className="vshanuy-project-slider__button"
            type="button"
            aria-label="Наступні проєкти"
            disabled={atEnd}
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
