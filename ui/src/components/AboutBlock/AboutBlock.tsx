import portrait from '../../assets/portrait-doc.jpg'
import { PhotoCaption } from '../PhotoCaption/PhotoCaption'
import '../PhotoCaption/PhotoCaption.css'

export type AboutBlockProps = {
  lead?: string
  copy?: string
  linkLabel?: string
  caption?: { place: string; year: string; tag: string }
}

export function AboutBlock({
  lead = 'ГО «Вшануй» — сучасна українська культура памʼяті.',
  copy = 'В основі «Вшануй» – переконання Ірини (Чеки) Цибух: памʼять не завершується датою в календарі. Вона живе в повсякденні — у вдячності, що триває, в людях, які несуть спогади і в ритуалах. Сьогодні цю справу продовжує команда однодумців.',
  linkLabel = 'Більше про нас →',
  caption = { place: 'Україна', year: '2024', tag: 'Портрет' },
}: AboutBlockProps) {
  return (
    <section className="about-vshanuy" aria-label="Про нас">
      <figure className="about-vshanuy__portrait">
        <img src={portrait} alt="" />
        <PhotoCaption {...caption} />
      </figure>
      <div className="about-vshanuy__content">
        <p className="about-vshanuy__lead">{lead}</p>
        <p className="about-vshanuy__copy">{copy}</p>
        <span className="about-vshanuy__link">{linkLabel}</span>
      </div>
    </section>
  )
}
