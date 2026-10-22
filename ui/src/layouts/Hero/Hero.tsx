import heroImage from '../../assets/hero-doc.jpg'
import { BlockButton } from '../../components/BlockButton/BlockButton'
import { PhotoCaption } from '../../components/PhotoCaption/PhotoCaption'
import '../../components/BlockButton/BlockButton.css'
import '../../components/PhotoCaption/PhotoCaption.css'

export type HeroProps = {
  title?: string
  ctaLabel?: string
  ctaAccent?: boolean
  caption?: { place: string; year: string; tag: string }
}

export function Hero({
  title = "Пам'ятай про полеглих — допомагай живим.",
  ctaLabel = 'Підтримати',
  ctaAccent = true,
  caption = { place: 'Дніпро', year: '2024', tag: 'Хвилина мовчання' },
}: HeroProps) {
  return (
    <section className="vshanuy-hero" aria-label="Головний екран">
      <div className="vshanuy-hero__media">
        <img src={heroImage} alt="" />
        <div className="vshanuy-hero__guides" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="vshanuy-hero__grid">
        <div className="vshanuy-hero__spacer" />
        <h1 className="vshanuy-hero__title">{title}</h1>
        <div className="vshanuy-hero__spacer" />
        <div className="vshanuy-hero__cta">
          <BlockButton
            variant={ctaAccent ? 'accent' : 'ink'}
            href="https://send.monobank.ua/jar/7rme78odM9"
          >
            {ctaLabel}
          </BlockButton>
          <PhotoCaption {...caption} />
        </div>
      </div>
    </section>
  )
}
