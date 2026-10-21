import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type BlockButtonProps = {
  children: ReactNode
  variant?: 'ink' | 'accent' | 'ghost'
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function BlockButton({
  children,
  variant = 'ink',
  href,
  className = '',
  type = 'button',
  ...rest
}: BlockButtonProps) {
  const classes = `vshanuy-block-button vshanuy-block-button--${variant} ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href}>
        <span className="vshanuy-block-button__label">{children}</span>
        <span className="vshanuy-block-button__arrow" aria-hidden="true">
          →
        </span>
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...rest}>
      <span className="vshanuy-block-button__label">{children}</span>
      <span className="vshanuy-block-button__arrow" aria-hidden="true">
        →
      </span>
    </button>
  )
}
