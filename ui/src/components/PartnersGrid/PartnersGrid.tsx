export type Partner = {
  name: string
  href?: string
}

export type PartnersGridProps = {
  title?: string
  label?: string
  partners?: Partner[]
}

const defaultPartners: Partner[] = [
  {
    name: 'Український інститут національної памʼяті',
    href: 'https://uinp.gov.ua/',
  },
  { name: 'Starlight Media', href: 'https://starlight.media/' },
  { name: 'Суспільне Мовлення', href: 'https://corp.suspilne.media/' },
  { name: 'Платформа памʼяті Меморіал', href: 'https://memorial.ua/' },
  {
    name: 'Національне військове меморіальне кладовище',
    href: 'https://nmmc.gov.ua/',
  },
]

export function PartnersGrid({
  title = 'Працюємо разом',
  label = 'ПАРТНЕРИ',
  partners = defaultPartners,
}: PartnersGridProps) {
  return (
    <section className="vshanuy-partners" aria-labelledby="vshanuy-partners-title">
      <div className="vshanuy-partners__guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="vshanuy-partners__inner">
        <header className="vshanuy-partners__header">
          <p className="vshanuy-partners__label">{label}</p>
          <h2 id="vshanuy-partners-title">{title}</h2>
        </header>
        <ul className="vshanuy-partners__list">
          {partners.map((partner) => (
            <li key={partner.name} className="vshanuy-partners__item">
              {partner.href ? (
                <a
                  className="vshanuy-partners__link"
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                >
                  <span className="vshanuy-partners__placeholder">{partner.name}</span>
                </a>
              ) : (
                <span className="vshanuy-partners__placeholder">{partner.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
