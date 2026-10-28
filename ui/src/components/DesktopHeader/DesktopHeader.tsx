import { useState } from 'react'

export type DesktopNavItem = {
  label: string
  links?: string[]
  href?: string
  support?: boolean
  isMenu?: boolean
  activity?: boolean
}

export type DesktopHeaderProps = {
  items?: DesktopNavItem[]
  onOpenMenu?: () => void
  scrolled?: boolean
  /** Індекс пункту primary-меню з постійним активним шаром (без відкритого підменю). */
  navActiveIndex?: number
}

const aboutLinks = ['Місія та цінності', 'Звіт про діяльність', 'Контакти']

const activityLinks = [
  'Напрями роботи',
  'Проєкти',
  'Гайди',
  'Публікації',
  'Партнери',
]

const joinLinks = ['Підтримати', 'Співпраця', 'Купити мерч']

const defaultItems: DesktopNavItem[] = [
  {
    label: 'Про нас.',
    links: aboutLinks,
  },
  {
    label: 'Діяльність.',
    links: activityLinks,
    activity: true,
  },
  {
    label: 'Долучитися.',
    links: joinLinks,
    support: true,
  },
]

function hrefForLabel(label: string): string | null {
  const key = label.replace(/\.$/, '')
  if (key === 'Хто ми' || key === 'Місія та цінності') return 'pro-nas.html'
  if (key === 'Контакти') return 'kontakty.html'
  if (key === 'Напрями роботи' || key === 'Напрямки роботи') return 'diyalnist.html'
  if (key === 'Проєкти') return 'proekty.html'
  if (key === 'Гайди' || key === 'Посібники') return 'posibnyky/'
  if (key === 'Публікації' || key === 'Матеріали') return 'materialy.html'
  if (key === 'Співпраця') return 'spivpratsya.html'
  if (key === 'Підтримати') return 'pidtrymaty.html'
  if (key === 'Купити мерч' || key === 'Мерч') return 'merch.html'
  return null
}

function SlideLabel({
  label,
  isButton,
  support,
  href,
  onClick,
}: {
  label: string
  isButton?: boolean
  support?: boolean
  href?: string
  onClick?: () => void
}) {
  const className = `vshanuy-desktop-menu__label${support ? ' vshanuy-desktop-menu__label--support' : ''}${isButton ? ' vshanuy-desktop-menu__trigger' : ''}`
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
        className={className}
        type="button"
        aria-haspopup="dialog"
        onClick={onClick}
      >
        {inner}
      </button>
    )
  }

  if (href) {
    return (
      <a className={className} href={href}>
        {inner}
      </a>
    )
  }

  return <span className={className}>{inner}</span>
}

export function DesktopHeader({
  items = defaultItems,
  onOpenMenu,
  scrolled = false,
  navActiveIndex,
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
                item.activity ? 'vshanuy-desktop-menu__item--activity' : '',
                item.support ? 'vshanuy-desktop-menu__item--support' : '',
                item.isMenu ? 'vshanuy-desktop-menu__item--menu' : '',
                navActiveIndex === index ? 'vshanuy-desktop-menu__item--nav-active' : '',
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
                href={item.href}
                onClick={item.isMenu ? onOpenMenu : undefined}
              />
              {item.links ? (
                <ul className="vshanuy-desktop-menu__submenu" role="list">
                  {item.links.map((link) => {
                    const href = hrefForLabel(link)
                    return (
                      <li key={link}>
                        {href ? (
                          <a className="vshanuy-desktop-menu__submenu-item" href={href}>
                            {link}
                          </a>
                        ) : (
                          <span className="vshanuy-desktop-menu__submenu-item">{link}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
