export type PhotoCaptionProps = {
  place: string
  year: string
  tag: string
}

export function PhotoCaption({ place, year, tag }: PhotoCaptionProps) {
  return (
    <figcaption className="vshanuy-photo-caption">
      {place} <span aria-hidden="true">·</span> {year}{' '}
      <span aria-hidden="true">·</span> {tag}
    </figcaption>
  )
}
