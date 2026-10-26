import { useEffect, useRef } from 'react'
import { Logo } from '../Logo/Logo'
import '../Logo/Logo.css'

export type MenuSection = {
  title: string
  items: string[]
}

export type FullscreenMenuProps = {
  open: boolean
  onClose: () => void
  sections?: MenuSection[]
  supportHref?: string
}

const defaultSections: MenuSection[] = [
  {
    title: 'Про нас',
    items: ['Історія створення', 'Місія і цінності', 'Команда', 'Звіти про діяльність'],
  },
  {
    title: 'Наша діяльність',
    items: [
      'Держава',
      'Суспільство',
      'Бізнес',
      'Освіта',
      'Військо',
      'Мистецтво',
      'Посібники',
    ],
  },
  {
    title: 'Співпраця',
    items: [
      'Актуальні опитування',
      'Стати волонтером',
      'Стати партнером',
      'Запросити нас у громаду',
      'Долучитися до акції/ініціативи',
    ],
  },
  {
    title: 'Блог',
    items: ['Опис кейсів', 'Колонка Каті'],
  },
  {
    title: 'Контакти',
    items: ['Пошта', 'Соцмережі'],
  },
]

function hrefForLabel(label: string): string | null {
  if (label === 'Посібники') return 'posibnyky/'
  if (label === 'Бізнес') return 'napryamky/spivpratsya-z-biznesom.html'
  if (label === 'Пошта' || label === 'Соцмережі' || label === 'Контакти') {
    return 'kontakty.html'
  }
  return null
}

export function FullscreenMenu({
  open,
  onClose,
  sections = defaultSections,
  supportHref = 'pidtrymaty.html',
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
        <h2 id="vshanuy-menu-title" className="vshanuy-menu__brand" aria-label="Вшануй. 09:00">
          <Logo variant="onPaper" className="vshanuy-menu__logo" />
        </h2>
        <button className="vshanuy-menu__close" type="button" onClick={onClose} ref={closeRef}>
          <span>Закрити.</span>
          <span className="vshanuy-menu__close-dot" aria-hidden="true" />
        </button>
      </div>
      <nav className="vshanuy-menu__nav" aria-labelledby="vshanuy-menu-title">
        <div className="vshanuy-menu__grid">
          {sections.map((section) => (
            <section key={section.title} className="vshanuy-menu__section">
              <h3>{section.title}</h3>
              {section.items.length > 0 ? (
                <ul>
                  {section.items.map((item) => {
                    const href = hrefForLabel(item)
                    return (
                      <li key={item}>
                        {href ? (
                          <a className="vshanuy-menu__item" href={href}>
                            {item}
                          </a>
                        ) : (
                          <span className="vshanuy-menu__item">{item}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
        <div className="vshanuy-menu__cta">
          <a className="vshanuy-menu__support-btn" href={supportHref}>
            <span>Підтримати</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </div>
  )
}
