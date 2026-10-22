import { BlockButton } from '../../components/BlockButton/BlockButton'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import '../../components/BlockButton/BlockButton.css'
import '../../components/SectionLabel/SectionLabel.css'

export const CONTACT_TOPICS = [
  { value: 'volunteer', label: 'Стати волонтером' },
  { value: 'partner', label: 'Стати партнером' },
  { value: 'community', label: 'Запросити в громаду' },
] as const

export type ContactTopicValue = (typeof CONTACT_TOPICS)[number]['value']

export type ContactFormProps = {
  /** Якір секції (напр. `contact-form` / `napysaty`). */
  id?: string
  /** Обовʼязковий вибір теми звернення. */
  showTopic?: boolean
  index?: string
  label?: string
  title?: string
  /** Заголовок лише для скрінрідерів (коли сторінка вже має видимий H1). */
  titleHidden?: boolean
  lead?: string
  /** Без власних відступів секції — для вбудовування в колонку сторінки. */
  embedded?: boolean
}

export function ContactForm({
  id,
  showTopic = false,
  index,
  label = 'КОНТАКТИ',
  title = 'Напишіть нам',
  titleHidden = false,
  lead = 'Спокійно й по суті. Відповімо й підкажемо наступний крок.',
  embedded = false,
}: ContactFormProps) {
  const titleId = id ? `${id}-title` : 'contact-title'

  return (
    <section
      className={`vshanuy-contact${embedded ? ' vshanuy-contact--embedded' : ''}`}
      id={id}
      aria-labelledby={titleId}
    >
      <header className="vshanuy-contact__header">
        <SectionLabel index={index}>{label}</SectionLabel>
        <h2 id={titleId} className={titleHidden ? 'vshanuy-visually-hidden' : undefined}>
          {title}
        </h2>
        {lead ? <p>{lead}</p> : null}
      </header>
      <form className="vshanuy-contact__form" onSubmit={(event) => event.preventDefault()}>
        {showTopic ? (
          <fieldset className="vshanuy-contact__topic vshanuy-contact__full">
            <legend>Тема</legend>
            <div className="vshanuy-contact__topic-options">
              {CONTACT_TOPICS.map((topic) => (
                <label key={topic.value} className="vshanuy-contact__choice">
                  <input type="radio" name="topic" value={topic.value} required />
                  <span>{topic.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}
        <label className="vshanuy-contact__field">
          Імʼя
          <input name="name" type="text" autoComplete="name" />
        </label>
        <label className="vshanuy-contact__field">
          Email
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label className="vshanuy-contact__field vshanuy-contact__full">
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
