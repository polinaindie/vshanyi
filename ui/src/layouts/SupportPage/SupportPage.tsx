import { useRef, useState } from 'react'
import placeholderPhoto from '../../assets/support-placeholder.jpg'
import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../../components/SiteFooter/SiteFooter.css'

export type BankField = {
  label: string
  value: string
  /** Підпис кнопки для скрінрідерів: «Скопіювати …». */
  copyLabel: string
}

export type SupportPageProps = {
  showHeader?: boolean
  title?: string
  lead?: string
  donateHref?: string
  bankFields?: BankField[]
  photoSrc?: string
  photoAlt?: string
}

const defaultBankFields: BankField[] = [
  { label: 'Найменування отримувача', value: '…', copyLabel: 'найменування отримувача' },
  { label: 'ЄДРПОУ', value: '…', copyLabel: 'ЄДРПОУ' },
  { label: 'IBAN', value: '…', copyLabel: 'IBAN' },
  { label: 'Призначення платежу', value: 'на діяльність фонду', copyLabel: 'призначення платежу' },
]

async function writeClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // fall through to execCommand
    }
  }
  const area = document.createElement('textarea')
  area.value = text
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.append(area)
  area.select()
  const ok = document.execCommand('copy')
  area.remove()
  if (!ok) throw new Error('copy failed')
}

function CopyButton({
  field,
  onStatus,
}: {
  field: BankField
  onStatus: (message: string) => void
}) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const copy = async () => {
    try {
      await writeClipboard(field.value)
      setCopied(true)
      onStatus(`${field.label} скопійовано`)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      onStatus('Не вдалося скопіювати. Виділіть текст вручну.')
    }
  }

  return (
    <button
      className="vshanuy-support-page__copy"
      type="button"
      aria-label={`Скопіювати ${field.copyLabel}`}
      onClick={copy}
      {...(copied ? { 'data-copied': '' } : {})}
    >
      <svg className="is-idle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
        <rect x="8.5" y="8.5" width="11" height="11" />
        <path d="M15.5 8.5v-4h-11v11h4" />
      </svg>
      <svg className="is-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    </button>
  )
}

/** Page composition: H1 + заклик → фото | онлайн-донат + реквізити + мерч → footer. Жовтий-бюджет 0. */
export function SupportPage({
  showHeader = true,
  title = 'Підтримати.',
  lead = 'Ваша підтримка допомагає масштабувати Хвилину мовчання на національному рівні та розвивати культуру пам’яті в українських містах.',
  donateHref = 'https://send.monobank.ua/jar/7rme78odM9',
  bankFields = defaultBankFields,
  photoSrc = placeholderPhoto,
  photoAlt = 'Фото-заглушка: Хвилина мовчання',
}: SupportPageProps) {
  const [status, setStatus] = useState('')

  return (
    <div className="vshanuy-support-page">
      <div className="vshanuy-page-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      {showHeader ? <DesktopHeader /> : null}

      <main className="vshanuy-support-page__main">
        <header className="vshanuy-support-page__intro">
          <h1 className="vshanuy-support-page__title">{title}</h1>
          {lead ? <p className="vshanuy-support-page__lead">{lead}</p> : null}
        </header>

        <div className="vshanuy-support-page__row">
          <div className="vshanuy-support-page__cell">
            <figure className="vshanuy-support-page__photo">
              <img src={photoSrc} alt={photoAlt} width={1600} height={1066} loading="lazy" decoding="async" />
            </figure>
          </div>

          <div className="vshanuy-support-page__cell">
            <section aria-labelledby="support-online-title">
              <h2 id="support-online-title" className="vshanuy-support-page__heading">
                Онлайн-донат
              </h2>
              <p className="vshanuy-support-page__text">
                Підтримайте команду ГО «Вшануй» — допоможіть поширювати культуру пам’яті щодня.
              </p>
              <a
                className="vshanuy-support-page__cta"
                href={donateHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Зробити внесок <span aria-hidden="true">→</span>
                <span className="vshanuy-visually-hidden"> (відкриється в новій вкладці)</span>
              </a>
            </section>

            <section
              className="vshanuy-support-page__bank"
              id="rekvizyty"
              aria-labelledby="support-bank-title"
            >
              <h2 id="support-bank-title" className="vshanuy-support-page__heading">
                Банківський переказ по Україні
              </h2>
              <dl className="vshanuy-support-page__details">
                {bankFields.map((field) => (
                  <div className="vshanuy-support-page__field" key={field.label}>
                    <dt>{field.label}</dt>
                    <dd>{field.value}</dd>
                    <CopyButton field={field} onStatus={setStatus} />
                  </div>
                ))}
              </dl>
              <p className="vshanuy-visually-hidden" role="status" aria-live="polite">
                {status}
              </p>
            </section>

            <section className="vshanuy-support-page__merch" aria-labelledby="support-merch-title">
              <h2 id="support-merch-title" className="vshanuy-support-page__heading">
                Мерч
              </h2>
              <p className="vshanuy-support-page__text">
                Щоб підтримати ГО «Вшануй», ви також можете придбати мерч.
              </p>
              <a className="vshanuy-support-page__link" href="merch.html">
                Переглянути мерч <span aria-hidden="true">→</span>
              </a>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
