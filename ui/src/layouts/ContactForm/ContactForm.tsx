import { BlockButton } from '../../components/BlockButton/BlockButton'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import '../../components/BlockButton/BlockButton.css'
import '../../components/SectionLabel/SectionLabel.css'

export function ContactForm() {
  return (
    <section className="vshanuy-contact" aria-labelledby="contact-title">
      <header className="vshanuy-contact__header">
        <SectionLabel>КОНТАКТИ</SectionLabel>
        <h2 id="contact-title">Напишіть нам</h2>
        <p>Спокійно й по суті. Відповімо й підкажемо наступний крок.</p>
      </header>
      <form className="vshanuy-contact__form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Імʼя
          <input name="name" type="text" autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label className="vshanuy-contact__full">
          Повідомлення
          <textarea name="message" rows={5} />
        </label>
        <div className="vshanuy-contact__full">
          <BlockButton type="submit" variant="ink">
            Надіслати
          </BlockButton>
        </div>
      </form>
    </section>
  )
}
