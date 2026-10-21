import { useState } from 'react'

export type DesktopNavItem = {
  label: string
  links?: string[]
  support?: boolean
  isMenu?: boolean
}

export type DesktopHeaderProps = {
  items?: DesktopNavItem[]
  onOpenMenu?: () => void
  scrolled?: boolean
}

const defaultItems: DesktopNavItem[] = [
  {
    label: 'Наша діяльність.',
    links: ['Для громад', 'Для бізнесів', 'Наші проєкти', 'Посібники', 'Як підтримати'],
  },
  {
    label: 'Підтримати.',
    links: ['Донати', 'Реквізити'],
    support: true,
  },
  {
    label: 'Усі розділи',
    isMenu: true,
  },
]

function SlideLabel({
  label,
  isButton,
  support,
  onClick,
}: {
  label: string
  isButton?: boolean
  support?: boolean
  onClick?: () => void
}) {
  const inner = (
    <span className="vshanuy-desktop-menu__slide">
      <span className="vshanuy-desktop-menu__layer">
        <span>{label}</span>
        <span
          className={`vshanuy-desktop-menu__dot${isButton ? ' vshanuy-desktop-menu__dot--large' : ''}`}
          aria-hidden="true"
        />
      </span>
      <span className="vshanuy-desktop-menu__layer vshanuy-desktop-menu__layer--active" aria-hidden="true">
        <span>{label}</span>
        <span
          className={`vshanuy-desktop-menu__dot${isButton ? ' vshanuy-desktop-menu__dot--large' : ''}`}
          aria-hidden="true"
        />
      </span>
    </span>
  )

  if (isButton) {
    return (
      <button
        className="vshanuy-desktop-menu__label vshanuy-desktop-menu__trigger"
        type="button"
        aria-haspopup="dialog"
        onClick={onClick}
      >
        {inner}
      </button>
    )
  }

  return (
    <span className={`vshanuy-desktop-menu__label${support ? ' vshanuy-desktop-menu__label--support' : ''}`}>
      {inner}
    </span>
  )
}

export function DesktopHeader({
  items = defaultItems,
  onOpenMenu,
  scrolled = false,
}: DesktopHeaderProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <header
      className="vshanuy-desktop-header"
      data-scrolled={scrolled ? 'true' : undefined}
    >
      <nav className="vshanuy-desktop-menu" aria-label="Головна навігація">
        <a className="vshanuy-desktop-menu__brand" href="/" aria-label="Вшануй. 09:00 — на головну">
          <span className="vshanuy-desktop-menu__slide" aria-hidden="true">
            <span className="vshanuy-desktop-menu__layer vshanuy-desktop-menu__brand-primary">
              <span className="vshanuy-desktop-menu__time">09:00</span>
            </span>
            <span className="vshanuy-desktop-menu__layer vshanuy-desktop-menu__brand-active">
              <span className="vshanuy-desktop-menu__wordmark">ВШАНУЙ.</span>
              <span className="vshanuy-desktop-menu__time">09:00</span>
            </span>
          </span>
        </a>
        <ul className="vshanuy-desktop-menu__primary">
          {items.map((item, index) => (
            <li
              key={item.label}
              className={[
                'vshanuy-desktop-menu__item',
                item.support ? 'vshanuy-desktop-menu__item--support' : '',
                item.isMenu ? 'vshanuy-desktop-menu__item--menu' : '',
                openIndex === index ? 'is-open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onMouseEnter={() => setOpenIndex(item.links ? index : null)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <SlideLabel
                label={item.label}
                isButton={item.isMenu}
                support={item.support}
                onClick={item.isMenu ? onOpenMenu : undefined}
              />
              {item.links ? (
                <ul className="vshanuy-desktop-menu__submenu" role="list">
                  {item.links.map((link) => (
                    <li key={link}>
                      <span className="vshanuy-desktop-menu__submenu-item">{link}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
