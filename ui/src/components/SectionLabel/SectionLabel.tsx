export type SectionLabelProps = {
  index?: string
  children: string
  trailing?: string
}

export function SectionLabel({ index, children, trailing }: SectionLabelProps) {
  return (
    <p className="vshanuy-section-label">
      {index ? <span className="vshanuy-section-label__index">{index} — </span> : null}
      <span>{children}</span>
      {trailing ? <span className="vshanuy-section-label__trail"> {trailing}</span> : null}
    </p>
  )
}
