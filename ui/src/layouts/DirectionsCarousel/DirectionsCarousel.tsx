import { useEffect, useId, useRef, type KeyboardEvent } from 'react'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import '../../components/SectionLabel/SectionLabel.css'
import '../../components/PhotoCaption/PhotoCaption.css'
import gromadyPhoto from '../../assets/about/directions/napryam-gromady.webp'
import biznesPhoto from '../../assets/about/directions/napryam-biznes.webp'
import derzhavaPhoto from '../../assets/about/directions/napryam-derzhava.webp'
import suspilstvoPhoto from '../../assets/about/directions/napryam-suspilstvo.webp'
import osvitaPhoto from '../../assets/about/directions/napryam-osvita.webp'
import viyskoPhoto from '../../assets/about/directions/napryam-viysko.webp'
import mystetstvoPhoto from '../../assets/about/directions/napryam-mystetstvo.webp'
import './DirectionsCarousel.css'

export type DirectionCarouselItem = {
  index: string
  title: string
  description: string
  href: string
  image?: string
  imageAlt?: string
  caption?: string
}

export type DirectionsCarouselProps = {
  id?: string
  label?: string
  title?: string
  items?: DirectionCarouselItem[]
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export const defaultDirectionItems: DirectionCarouselItem[] = [
  {
    index: '01',
    title: 'Громади',
    href: 'napryamky/gromada.html',
    image: gromadyPhoto,
    description:
      'Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики памʼяті. Поширюємо ініціативи в громадах, розробляємо ритуали памʼяті та прощання.',
  },
  {
    index: '02',
    title: 'Бізнес',
    href: 'napryamky/spivpratsya-z-biznesom.html',
    image: biznesPhoto,
    description:
      'Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації. Проводимо консультації, аудити, лекції та сесії, щоб компанії могли говорити про війну, втрати й памʼять.',
  },
  {
    index: '03',
    title: 'Держава',
    href: 'napryamky/derzhava.html',
    image: derzhavaPhoto,
    description:
      'Передаємо державним інституціям напрацьовані практики, рекомендації та інструкції й працюємо над їхнім системним впровадженням.',
  },
  {
    index: '04',
    title: 'Суспільство',
    href: 'napryamky/suspilstvo.html',
    image: suspilstvoPhoto,
    description:
      'Говоримо про складні й важливі теми, повʼязані з памʼяттю про війну: як прощатися, як говорити про загиблих, як уникати знеособлення втрат.',
  },
  {
    index: '05',
    title: 'Освіта',
    href: 'napryamky/osvita.html',
    image: osvitaPhoto,
    description:
      'Досліджуємо, як діти, підлітки та вчителі сприймають тему памʼяті й якою хочуть бачити розмову про неї в школі. Розробляємо практичні матеріали для освітян, проводимо лекції та зустрічі, створюємо документи-опори для роботи з темою памʼяті.',
  },
  {
    index: '06',
    title: 'Військо',
    href: 'napryamky/viysko.html',
    image: viyskoPhoto,
    description:
      'Досліджуємо військові ритуали й традиції та шукаємо способи зберігати їхню тяглість у сучасному українському війську. Працюємо над створенням церемоній прощання з військовослужбовцями, які можуть бути адаптовані та впроваджені в громадах по всій Україні.',
  },
  {
    index: '07',
    title: 'Мистецтво',
    href: 'napryamky/mystetstvo.html',
    image: mystetstvoPhoto,
    description: 'Використовуємо мистецтво як спосіб говорити про памʼять, людей і наш досвід.',
  },
]

  /** Label + title + cards stick together; further scroll scrubs cards horizontally. */
export function DirectionsCarousel({
  id,
  label = 'НАШІ НАПРЯМИ',
  title = 'Для кого ми говоримо про памʼять',
  items = defaultDirectionItems,
}: DirectionsCarouselProps) {
  const reactId = useId()
  const sectionId = id ?? `directions-carousel-${reactId}`
  const titleId = `${sectionId}-title`
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const runwayRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const runway = runwayRef.current
    const viewport = viewportRef.current
    if (!section || !pin || !runway || !viewport) return

    const scroller =
      (viewport.querySelector('.vshanuy-directions-carousel__scroller') as HTMLElement | null) ||
      viewport

    let frame = 0
    let runwayH = 0
    let activeIndex = -1
    let animFrame = 0
    let animFrom = 0
    let animTo = 0
    let animStart = 0

    /* Brand transform easing: cubic-bezier(0.22, 1, 0.36, 1). */
    const SNAP_MS = 800
    const easeBrand = (() => {
      const x1 = 0.22
      const y1 = 1
      const x2 = 0.36
      const y2 = 1
      const sampleX = (t: number) => {
        const a = 1 - t
        return 3 * a * a * t * x1 + 3 * a * t * t * x2 + t * t * t
      }
      const sampleY = (t: number) => {
        const a = 1 - t
        return 3 * a * a * t * y1 + 3 * a * t * t * y2 + t * t * t
      }
      const sampleDX = (t: number) => {
        const a = 1 - t
        return 3 * a * a * x1 + 6 * a * t * (x2 - x1) + 3 * t * t * (1 - x2)
      }
      return (x: number) => {
        if (x <= 0) return 0
        if (x >= 1) return 1
        let t = x
        for (let i = 0; i < 8; i += 1) {
          const d = sampleDX(t)
          if (Math.abs(d) < 1e-6) break
          t = clamp(t - (sampleX(t) - x) / d, 0, 1)
        }
        return sampleY(t)
      }
    })()

    const maxScroll = () => Math.max(0, scroller.scrollWidth - scroller.clientWidth)

    const centeredLeft = (index: number) => {
      const slides = scroller.querySelectorAll('.vshanuy-directions-carousel__slide')
      const slide = slides[index] as HTMLElement | undefined
      if (!slide) return 0
      const max = maxScroll()
      const slideLeft = slide.offsetLeft
      const slideW = slide.getBoundingClientRect().width
      const viewW = scroller.clientWidth
      /* Center the active card in the scroller (cols 2–3 on desktop). */
      return clamp(slideLeft - (viewW - slideW) / 2, 0, max)
    }

    const scrollToCenteredSlide = (index: number, { immediate = false } = {}) => {
      const target = centeredLeft(index)
      const jump = immediate || prefersReducedMotion() || activeIndex < 0

      if (jump) {
        cancelAnimationFrame(animFrame)
        animFrame = 0
        activeIndex = index
        scroller.scrollLeft = target
        return
      }

      /* Same card — keep current / in-flight animation. */
      if (index === activeIndex) return

      activeIndex = index
      animFrom = scroller.scrollLeft
      animTo = target
      animStart = performance.now()
      cancelAnimationFrame(animFrame)

      const tick = (now: number) => {
        const t = clamp((now - animStart) / SNAP_MS, 0, 1)
        scroller.scrollLeft = animFrom + (animTo - animFrom) * easeBrand(t)
        if (t < 1) {
          animFrame = requestAnimationFrame(tick)
        } else {
          animFrame = 0
          scroller.scrollLeft = animTo
        }
      }
      animFrame = requestAnimationFrame(tick)
    }

    const applyProgress = (progress: number, { immediate = false } = {}) => {
      /* Discrete snap: one runway step → one card, eased into center. */
      const slides = scroller.querySelectorAll('.vshanuy-directions-carousel__slide').length
      const steps = Math.max(1, slides - 1)
      const index = clamp(Math.round(progress * steps), 0, steps)
      scrollToCenteredSlide(index, { immediate })
    }

    const syncProgress = ({ immediate = false } = {}) => {
      if (prefersReducedMotion() || runwayH <= 0) {
        applyProgress(0, { immediate: true })
        return
      }
      const pinBottom = pin.getBoundingClientRect().bottom
      const runwayTop = runway.getBoundingClientRect().top
      const progress = clamp((pinBottom - runwayTop) / runwayH, 0, 1)
      applyProgress(progress, { immediate })

      const headerH =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 33
      const stuck = pin.getBoundingClientRect().top <= headerH + 1
      section.classList.toggle('vshanuy-directions-carousel--pinned', stuck && progress < 1)
      section.classList.toggle('vshanuy-directions-carousel--complete', progress >= 1)
    }

    const syncLayout = () => {
      if (prefersReducedMotion()) {
        section.classList.add('vshanuy-directions-carousel--static')
        runway.style.height = '0px'
        scroller.style.overflowX = 'auto'
        applyProgress(0, { immediate: true })
        return
      }

      section.classList.remove('vshanuy-directions-carousel--static')
      scroller.style.overflowX = 'hidden'

      const slides = scroller.querySelectorAll('.vshanuy-directions-carousel__slide').length
      /* One vertical-scroll step = one direction card. */
      const steps = Math.max(1, slides - 1)
      const stepPx = Math.round(Math.min(Math.max(window.innerHeight * 0.55, 280), 480))
      runwayH = steps * stepPx
      runway.style.height = `${runwayH}px`
      /* Layout changes jump — no tween from a stale width. */
      syncProgress({ immediate: true })
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => syncProgress())
    }
    const onResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(syncLayout)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    syncLayout()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(frame)
      cancelAnimationFrame(animFrame)
    }
  }, [items.length])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const pin = pinRef.current
    const runway = runwayRef.current
    if (!pin || !runway) return
    const runwayH = runway.offsetHeight
    const steps = Math.max(1, items.length - 1)
    if (runwayH <= 0) return
    const dir = event.key === 'ArrowLeft' ? -1 : 1
    const pinBottom = pin.getBoundingClientRect().bottom
    const runwayTop = runway.getBoundingClientRect().top
    const currentProgress = clamp((pinBottom - runwayTop) / runwayH, 0, 1)
    const currentStep = clamp(Math.round(currentProgress * steps), 0, steps)
    const nextStep = clamp(currentStep + dir, 0, steps)
    const targetProgress = nextStep / steps
    const delta = (targetProgress - currentProgress) * runwayH
    window.scrollBy({ top: delta, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="vshanuy-directions-carousel"
      id={id}
      aria-labelledby={titleId}
    >
      <div className="vshanuy-directions-carousel__shell">
        <div className="vshanuy-directions-carousel__pin" ref={pinRef}>
          <header className="vshanuy-directions-carousel__header">
            <div className="vshanuy-directions-carousel__label">
              <SectionLabel>{label}</SectionLabel>
            </div>
            <h2 className="vshanuy-directions-carousel__title" id={titleId}>
              {title}
            </h2>
          </header>

          <div
            ref={viewportRef}
            className="vshanuy-directions-carousel__viewport"
            tabIndex={0}
            aria-label={`${label}, гортайте скролом`}
            onKeyDown={onKeyDown}
          >
            <div className="vshanuy-directions-carousel__scroller">
              <ol className="vshanuy-directions-carousel__track">
                {items.map((item) => (
                  <li key={item.index} className="vshanuy-directions-carousel__slide">
                    <a
                      className={
                        item.image
                          ? 'vshanuy-directions-carousel__card'
                          : 'vshanuy-directions-carousel__card vshanuy-directions-carousel__card--no-media'
                      }
                      href={item.href}
                    >
                      {item.image ? (
                        <figure className="vshanuy-directions-carousel__media">
                          <img
                            src={item.image}
                            alt={item.imageAlt ?? ''}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                          />
                          {item.caption ? (
                            <figcaption className="vshanuy-photo-caption">{item.caption}</figcaption>
                          ) : null}
                        </figure>
                      ) : null}
                      <div className="vshanuy-directions-carousel__copy">
                        <h3 className="vshanuy-directions-carousel__name">{item.title}</h3>
                        <p className="vshanuy-directions-carousel__text">{item.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="vshanuy-directions-carousel__runway" ref={runwayRef} aria-hidden="true" />
      </div>
    </section>
  )
}
