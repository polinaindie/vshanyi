export type SectionLabelProps = {
  index?: string
  children: string
  trailing?: string
  /** Якщо задано — trailing рендериться як якір/посилання. */
  trailingHref?: string
}

export function SectionLabel({ index, children, trailing, trailingHref }: SectionLabelProps) {
  return (
    <p className="vshanuy-section-label">
      {index ? <span className="vshanuy-section-label__index">{index} — </span> : null}
      <span>{children}</span>
      {trailing ? (
        trailingHref ? (
          <>
            {' '}
            <a className="vshanuy-section-label__trail" href={trailingHref}>
              {trailing}
            </a>
          </>
        ) : (
          <span className="vshanuy-section-label__trail"> {trailing}</span>
        )
      ) : null}
    </p>
  )
}
