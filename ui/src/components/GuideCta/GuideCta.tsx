export type GuideItem = {
  title: string
  description: string
  href?: string
}

export type GuideCtaProps = {
  items?: GuideItem[]
  /** Уникнути nested <section>, коли GuideCta всередині іншої секції. */
  as?: 'section' | 'div'
}

const defaultItems: GuideItem[] = [
  {
    title: 'Хвилина мовчання',
    description: 'Покрокова інструкція для міста, як запровадити Хвилину мовчання.',
  },
  {
    title: 'Гайд «Не нашкодити»',
    description: 'Практичний комунікаційний гайд, що говорити після обстрілів або у дні пам'яті.',
  },
  {
    title: 'Гайд для бізнесу',
    description: 'Як впровадити Хвилину мовчання у бізнесі та комунікувати з працівниками і пояснити аудиторії ритуал.',
  },
]

export function GuideCta({ items = defaultItems, as: Tag = 'section' }: GuideCtaProps) {
  return (
    <Tag className="vshanuy-guides" aria-label="Посібники">
      <div className="vshanuy-guides__list">
        {items.map((item) => (
          <a key={item.title} className="vshanuy-guide-download" href={item.href || '#'}>
            <p className="vshanuy-guide-download__desc">{item.description}</p>
            <span className="vshanuy-guide-button">
              <span className="vshanuy-guide-title">{item.title}</span>
              <span className="vshanuy-guide-button__action">Завантажити PDF</span>
            </span>
          </a>
        ))}
      </div>
    </Tag>
  )
}
