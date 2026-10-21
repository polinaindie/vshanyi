import type { ReactNode } from 'react'

export type ArchiveGridProps = {
  children: ReactNode
  className?: string
  showGuides?: boolean
  as?: 'div' | 'section'
}

export function ArchiveGrid({
  children,
  className = '',
  showGuides = true,
  as: Tag = 'div',
}: ArchiveGridProps) {
  return (
    <Tag className={`vshanuy-archive-grid ${className}`.trim()}>
      {showGuides ? (
        <div className="vshanuy-archive-grid__guides" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : null}
      <div className="vshanuy-archive-grid__content">{children}</div>
    </Tag>
  )
}
