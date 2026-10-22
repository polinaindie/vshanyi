import { useEffect, useRef } from 'react'

export type MenuSection = {
  title: string
  items: string[]
  modifier?: string
}

export type FullscreenMenuProps = {
  open: boolean
  onClose: () => void
  sections?: MenuSection[]
}

const defaultSections: MenuSection[] = [
  { title: 'Про нас', items: ['Історія створення', 'Місія і цінності', 'Команда', 'Звіти про діяльність'] },
  { title: 'Наша діяльність', items: ['Для громад', 'Для бізнесів', 'Наші проєкти', 'Посібники', 'Як підтримати'] },
  { title: 'Блог', items: ['Опис кейсів', 'Колонка Каті'] },
  { title: 'Співпраця', items: ['Актуальні опитування', 'Стати волонтером', 'Стати партнером'] },
  { title: 'Партнери', items: ['Донори', 'Організації', 'Бізнеси'] },
  { title: 'Контакти', items: ['Пошта', 'Соцмережі'] },
  { title: 'Підтримати', items: ['Донати', 'Реквізити'], modifier: 'support' },
]

export function FullscreenMenu({
  open,
  onClose,
  sections = defaultSections,
}: FullscreenMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="vshanuy-menu"
      id="vshanuy-menu"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vshanuy-menu-title"
    >
      <div className="vshanuy-menu__guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="vshanuy-menu__topline">
        <h2 id="vshanuy-menu-title">
          <span className="vshanuy-menu__wordmark">ВШАНУЙ.</span>
          <span className="vshanuy-menu__time">09:00</span>
        </h2>
        <button className="vshanuy-menu__close" type="button" onClick={onClose} ref={closeRef}>
          <span>Закрити.</span>
          <span className="vshanuy-menu__close-dot" aria-hidden="true" />
        </button>
      </div>
      <nav className="vshanuy-menu__nav" aria-labelledby="vshanuy-menu-title">
        <div className="vshanuy-menu__grid">
          {sections.map((section) => (
            <section
              key={section.title}
              className={`vshanuy-menu__section${section.modifier ? ` vshanuy-menu__section--${section.modifier}` : ''}`}
            >
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => {
                  const external =
                    item === 'Донати' || item === 'Як підтримати'
                      ? 'https://send.monobank.ua/jar/7rme78odM9'
                      : null
                  const internal =
                    item === 'Пошта' || item === 'Соцмережі' ? 'kontakty.html' : null
                  const href = external ?? internal
                  return (
                    <li key={item}>
                      {href ? (
                        <a
                          className="vshanuy-menu__item"
                          href={href}
                          {...(external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {item}
                        </a>
                      ) : (
                        <span className="vshanuy-menu__item">{item}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      </nav>
    </div>
  )
}
