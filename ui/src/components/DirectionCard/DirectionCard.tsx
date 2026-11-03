import type { ImgHTMLAttributes } from 'react'
import '../PhotoCaption/PhotoCaption.css'
import './DirectionCard.css'

export type DirectionCardProps = {
  href: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  caption?: string
  imgLoading?: ImgHTMLAttributes<HTMLImageElement>['loading']
  imgWidth?: number
  imgHeight?: number
  draggable?: boolean
  className?: string
}

/** Картка напряму — той самий патерн, що в DirectionsCarousel на головній. */
export function DirectionCard({
  href,
  title,
  description,
  image,
  imageAlt = '',
  caption,
  imgLoading = 'lazy',
  imgWidth = 960,
  imgHeight = 640,
  draggable = false,
  className = '',
}: DirectionCardProps) {
  const rootClass = [
    'vshanuy-directions-carousel__card',
    image ? '' : 'vshanuy-directions-carousel__card--no-media',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={rootClass} href={href}>
      {image ? (
        <figure className="vshanuy-directions-carousel__media">
          <img
            src={image}
            alt={imageAlt}
            width={imgWidth}
            height={imgHeight}
            loading={imgLoading}
            decoding="async"
            draggable={draggable}
          />
          {caption ? <figcaption className="vshanuy-photo-caption">{caption}</figcaption> : null}
        </figure>
      ) : null}
      <div className="vshanuy-directions-carousel__copy">
        <h3 className="vshanuy-directions-carousel__name">{title}</h3>
        <p className="vshanuy-directions-carousel__text">{description}</p>
      </div>
    </a>
  )
}
