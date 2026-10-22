import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import '../../components/SectionLabel/SectionLabel.css'

export type Article = {
  date: string
  title: string
  tag: string
  summary: string
}

export type ArticleCardsProps = {
  title?: string
  items?: Article[]
}

const defaultItems: Article[] = [
  {
    date: '09.00 · 2024',
    title: 'Ритуал, якому понад 100 років',
    tag: 'Хвилина мовчання – Історія',
    summary:
      'Яка ще країна проводила Хвилину мовчання щодня і від кого ми успадкували цю практику.',
  },
  {
    date: '2024',
    title: 'Як вшанувати полеглих захисників та захисниць у День памʼяті',
    tag: 'Вінкування – Традиція',
    summary: 'Чому нам так важливо обʼєднуватись і як памʼять може це зробити.',
  },
  {
    date: '2023 → 2026',
    title: 'А для чого памʼятаєш ти?',
    tag: 'ЧекаFest – Історія',
    summary: 'Про що фестиваль памʼяті ЧекаFest і як це продовжує життя.',
  },
]

export function ArticleCards({
  title = "Як пам'ять живе у практиках, діях, місцях",
  items = defaultItems,
}: ArticleCardsProps) {
  return (
    <section className="vshanuy-articles" aria-labelledby="articles-title">
      <header className="vshanuy-articles__header">
        <SectionLabel>БЛОГ</SectionLabel>
        <h2 id="articles-title">{title}</h2>
      </header>
      <ul className="vshanuy-articles__list">
        {items.map((item) => (
          <li key={item.title} className="vshanuy-articles__card">
            <p className="vshanuy-articles__tag">{item.tag}</p>
            <p className="vshanuy-articles__date">{item.date}</p>
            <h3>{item.title}</h3>
            <p className="vshanuy-articles__summary">{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
