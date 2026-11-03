import { BlockButton } from '../BlockButton/BlockButton'
import '../BlockButton/BlockButton.css'

export type GuideItem = {
  title: string
  description: string
  href?: string
  actionLabel?: string
}

export type GuideCtaProps = {
  items?: GuideItem[]
  /** Уникнути nested <section>, коли GuideCta всередині іншої секції. */
  as?: 'section' | 'div'
}

const defaultItems: GuideItem[] = [
  {
    title: 'Дорожня карта Хвилини мовчання',
    description: 'Покрокова інструкція для міста, як запровадити Хвилину мовчання.',
  },
  {
    title: 'Як впровадити Хвилину мовчання у бізнесі',
    description: 'Як комунікувати з працівниками і пояснити аудиторії ритуал.',
  },
  {
    title: 'Практичний комунікаційний гайд «Не нашкодити»',
    description: 'Що говорити після обстрілів або у дні памʼяті.',
  },
]

export function GuideCta({ items = defaultItems, as: Tag = 'section' }: GuideCtaProps) {
  return (
    <Tag className="vshanuy-guides" aria-label="Гайди">
      <div className="vshanuy-guides__list">
        {items.map((item) => (
          <a key={item.title} className="vshanuy-guide-download" href={item.href || '#'}>
            <p className="vshanuy-guide-download__desc">{item.description}</p>
            <div className="vshanuy-guide-download__footer">
              <h3 className="vshanuy-guide-title">{item.title}</h3>
              <BlockButton variant="secondary" as="span" fullWidth>
                {item.actionLabel || 'Завантажити PDF'}
              </BlockButton>
            </div>
          </a>
        ))}
      </div>
    </Tag>
  )
}
