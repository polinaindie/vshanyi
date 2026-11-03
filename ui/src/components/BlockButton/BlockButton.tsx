import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

export type BlockButtonVariant = 'primary' | 'secondary'

/** @deprecated Prefer `primary` / `secondary`. */
type LegacyVariant = 'ink' | 'accent' | 'ghost'

export type BlockButtonProps = {
  children: ReactNode
  /**
   * `primary` — суцільний ink (Місія та цінності).
   * `secondary` — контур (Завантажити PDF).
   * Жовтий лише на hover/focus.
   */
  variant?: BlockButtonVariant | LegacyVariant
  href?: string
  /** На всю ширину контейнера (типово secondary у панелях гайдів). */
  fullWidth?: boolean
  /**
   * Візуальний хром без власної інтерактивності —
   * коли кнопка вкладена в батьківське посилання (картка гайду).
   */
  as?: 'button' | 'a' | 'span'
  className?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>

function resolveVariant(
  variant: BlockButtonVariant | LegacyVariant = 'primary',
): BlockButtonVariant {
  if (variant === 'secondary' || variant === 'ghost') return 'secondary'
  return 'primary'
}

export function BlockButton({
  children,
  variant = 'primary',
  href,
  fullWidth = false,
  as,
  className = '',
  type = 'button',
  target,
  rel,
  ...rest
}: BlockButtonProps) {
  const resolved = resolveVariant(variant)
  const classes = [
    'vshanuy-block-button',
    `vshanuy-block-button--${resolved}`,
    fullWidth ? 'vshanuy-block-button--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span className="vshanuy-block-button__label">{children}</span>
      <span className="vshanuy-block-button__mark" aria-hidden="true" />
    </>
  )

  const tag = as ?? (href ? 'a' : 'button')

  if (tag === 'span') {
    return <span className={classes}>{content}</span>
  }

  if (tag === 'a' || href) {
    return (
      <a className={classes} href={href || '#'} target={target} rel={rel}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...rest}>
      {content}
    </button>
  )
}
