import { useEffect, useRef } from 'react'
import { Logo } from '../Logo/Logo'
import '../Logo/Logo.css'

export type MenuItem = {
  label: string
  href?: string | null
}

export type MenuColumn =
  | { kind: 'group'; title: string; items: MenuItem[] }
  | { kind: 'link'; title: string; href: string }

export type FullscreenMenuProps = {
  open: boolean
  onClose: () => void
  sections?: MenuColumn[]
  supportHref?: string
}

const defaultSections: MenuColumn[] = [
  {
    kind: 'group',
    title: 'Про нас',
    items: [
      { label: 'Місія та цінності', href: 'pro-nas.html' },
      { label: 'Звіт про діяльність', href: null },
      { label: 'Контакти', href: 'kontakty.html' },
    ],
  },
  {
    kind: 'group',
    title: 'Діяльність',
    items: [
      { label: 'Напрями роботи', href: 'diyalnist.html' },
      { label: 'Проєкти', href: 'proekty.html' },
      { label: 'Гайди', href: 'posibnyky/' },
      { label: 'Публікації', href: 'materialy.html' },
    ],
  },
  {
    kind: 'group',
    title: 'Долучитися',
    items: [
      { label: 'Підтримати', href: 'pidtrymaty.html' },
      { label: 'Співпраця', href: 'spivpratsya.html' },
      { label: 'Купити мерч', href: 'merch.html' },
      { label: 'Партнери', href: 'partnery.html' },
    ],
  },
]

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
          {sections.map((section, index) => {
            const titleId = `menu-section-${index}`
            if (section.kind === 'link') {
              return (
                <section
                  key={section.title}
                  className="vshanuy-menu__section vshanuy-menu__section--link"
                  aria-labelledby={titleId}
                >
                  <a className="vshanuy-menu__section-title" id={titleId} href={section.href}>
                    <span>{section.title}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </section>
              )
            }
            return (
              <section key={section.title} className="vshanuy-menu__section" aria-labelledby={titleId}>
                <h3 id={titleId}>{section.title}</h3>
                {section.items.length > 0 ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item.label}>
                        {item.href ? (
                          <a className="vshanuy-menu__item" href={item.href}>
                            {item.label}
                          </a>
                        ) : (
                          <span className="vshanuy-menu__item">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            )
          })}
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
