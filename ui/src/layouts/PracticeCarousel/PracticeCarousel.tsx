import { useState } from 'react'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import '../../components/SectionLabel/SectionLabel.css'

export type Practice = {
  year: string
  title: string
}

export type PracticeCarouselProps = {
  title?: string
  items?: Practice[]
}

const defaultItems: Practice[] = [
  { year: '2024', title: 'Як Дніпро зупиняється о 9:00' },
  { year: '2023', title: 'Таблички «Поміж нас» у міському просторі' },
  { year: '2025', title: 'Гайд для бізнесу: культура памʼяті в команді' },
  { year: '2022', title: 'Перші громади з щоденною хвилиною' },
]

export function PracticeCarousel({
  title = 'Практики, які вже працюють',
  items = defaultItems,
}: PracticeCarouselProps) {
  const [index, setIndex] = useState(0)
  const canPrev = index > 0
  const canNext = index < items.length - 1

  return (
    <section className="vshanuy-practices" aria-labelledby="practices-title">
      <header className="vshanuy-practices__header">
        <SectionLabel>ПРАКТИКИ</SectionLabel>
        <div className="vshanuy-practices__topline">
          <h2 id="practices-title">{title}</h2>
          <div className="vshanuy-practices__controls">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={!canPrev}
              onClick={() => setIndex((value) => Math.max(0, value - 1))}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              disabled={!canNext}
              onClick={() => setIndex((value) => Math.min(items.length - 1, value + 1))}
            >
              →
            </button>
          </div>
        </div>
      </header>
      <ul className="vshanuy-practices__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((item) => (
          <li key={`${item.year}-${item.title}`} className="vshanuy-practices__card">
            <span className="vshanuy-practices__year">{item.year}</span>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}
