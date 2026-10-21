import { useState } from 'react'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import '../../components/SectionLabel/SectionLabel.css'

export type FaqItem = {
  question: string
  answer: string
}

export type FaqAccordionProps = {
  items?: FaqItem[]
}

const defaultItems: FaqItem[] = [
  {
    question: 'Що таке Хвилина мовчання о 09:00?',
    answer:
      'Щоденна хвилина тиші на честь полеглих. Не разова дата, а звичка вшановувати кожного дня.',
  },
  {
    question: 'Як громада може почати?',
    answer:
      'Завантажте посібник «Дорожня карта» і запросіть нас супроводити перші кроки.',
  },
  {
    question: 'Чи можна впровадити це в бізнесі?',
    answer:
      'Так. Є окремий гайд для команд — без пафосу, з чіткими діями.',
  },
]

export function FaqAccordion({ items = defaultItems }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="vshanuy-faq" aria-labelledby="faq-title">
      <header>
        <SectionLabel index="08">ПИТАННЯ</SectionLabel>
        <h2 id="faq-title">Часті питання</h2>
      </header>
      <div className="vshanuy-faq__list">
        {items.map((item, index) => {
          const isOpen = open === index
          return (
            <div key={item.question} className="vshanuy-faq__item" data-state={isOpen ? 'open' : 'closed'}>
              <button
                type="button"
                className="vshanuy-faq__trigger"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="vshanuy-faq__index">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen ? <p className="vshanuy-faq__answer">{item.answer}</p> : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}
