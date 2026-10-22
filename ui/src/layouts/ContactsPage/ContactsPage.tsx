import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { ContactForm } from '../ContactForm/ContactForm'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SectionLabel/SectionLabel.css'
import '../../components/SiteFooter/SiteFooter.css'
import '../ContactForm/ContactForm.css'

export type ContactChannel = {
  /** Службова мітка сервісу: `ПОШТА`, `INSTAGRAM`… */
  service: string
  value: string
  href: string
  external?: boolean
  /** Головний канал — виділяється жирністю й кеглем. */
  primary?: boolean
}

export type ContactsPageProps = {
  /** Показувати chrome-header у page composition story. */
  showHeader?: boolean
  title?: string
  lead?: string
  channels?: ContactChannel[]
  formId?: string
  email?: string
}

const defaultChannels: ContactChannel[] = [
  {
    service: 'Пошта',
    value: 'momentofhonorukraine@gmail.com',
    href: 'mailto:momentofhonorukraine@gmail.com',
    primary: true,
  },
  {
    service: 'Instagram',
    value: 'moment_of_honor',
    href: 'https://www.instagram.com/moment_of_honor/',
    external: true,
  },
  {
    service: 'Facebook',
    value: 'momentofhonor',
    href: 'https://www.facebook.com/momentofhonor',
    external: true,
  },
  {
    service: 'Threads',
    value: 'moment_of_honor',
    href: 'https://www.threads.com/@moment_of_honor',
    external: true,
  },
]

/** Page composition: H1 → канали | форма (дві колонки на десктопі) → footer. Жовтий-бюджет 0. */
export function ContactsPage({
  showHeader = true,
  title = 'Контакти.',
  lead = 'Готові долучитися до змін? Залиште повідомлення або звʼяжіться з нами у соцмережах.',
  channels = defaultChannels,
  formId = 'contact-form',
  email = 'momentofhonorukraine@gmail.com',
}: ContactsPageProps) {
  return (
    <div className="vshanuy-contacts-page">
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-contacts-page__main">
        <header className="vshanuy-contacts-page__intro">
          <h1 className="vshanuy-contacts-page__title">{title}</h1>
          {lead ? <p className="vshanuy-contacts-page__lead">{lead}</p> : null}
        </header>

        <div className="vshanuy-contacts-page__grid">
          <section className="vshanuy-contacts-page__channels" aria-labelledby="contacts-channels-title">
            <SectionLabel>КАНАЛИ ЗВʼЯЗКУ</SectionLabel>
            <h2 id="contacts-channels-title" className="vshanuy-visually-hidden">
              Канали звʼязку
            </h2>
            <ul className="vshanuy-contacts-page__list">
              {channels.map((channel) => (
                <li key={channel.href}>
                  <a
                    className={`vshanuy-contacts-page__link${
                      channel.primary ? ' vshanuy-contacts-page__link--primary' : ''
                    }`}
                    href={channel.href}
                    {...(channel.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <span className="vshanuy-contacts-page__service">{channel.service}</span>
                    <span className="vshanuy-contacts-page__value">{channel.value}</span>
                    {channel.external ? (
                      <span className="vshanuy-contacts-page__arrow" aria-hidden="true">
                        ↗
                      </span>
                    ) : null}
                    {channel.external ? (
                      <span className="vshanuy-visually-hidden"> (відкриється в новій вкладці)</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="vshanuy-contacts-page__form">
            <ContactForm
              id={formId}
              showTopic
              embedded
              label="ФОРМА ЗВОРОТНЬОГО ЗВʼЯЗКУ"
              title="Форма звернення"
              titleHidden
              lead=""
            />
          </div>
        </div>
      </main>

      <SiteFooter email={email} />
    </div>
  )
}
