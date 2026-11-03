import type { HTMLAttributes } from 'react'

export type SectionLabelProps = {
  index?: string
  children: string
  trailing?: string
  /** Якщо задано — trailing рендериться як якір/посилання. */
  trailingHref?: string
  /** Семантичний тег: службова мітка часто h2 у секції, іноді p. */
  as?: 'p' | 'h2' | 'h3' | 'span'
  id?: string
  className?: string
} & Pick<HTMLAttributes<HTMLElement>, 'aria-hidden'>

/**
 * Службова мітка секції — архівний регістр ALL CAPS
 * (`01 — ПРО НАС` / `МІСІЯ`). Єдине джерело типографіки міток у DS.
 */
export function SectionLabel({
  index,
  children,
  trailing,
  trailingHref,
  as: Tag = 'p',
  id,
  className,
  'aria-hidden': ariaHidden,
}: SectionLabelProps) {
  const classes = ['vshanuy-section-label', className].filter(Boolean).join(' ')

  return (
    <Tag className={classes} id={id} aria-hidden={ariaHidden}>
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
    </Tag>
  )
}
