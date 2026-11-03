import type { ImgHTMLAttributes } from 'react'
import './ProjectCard.css'

export type ProjectCardProps = {
  href: string
  title: string
  description: string
  image: string
  imageWidth?: number
  imageHeight?: number
  /** За замовчуванням h3 (слайдер, головна); h2 — сторінка «Проєкти». */
  titleAs?: 'h2' | 'h3'
  imgLoading?: ImgHTMLAttributes<HTMLImageElement>['loading']
  imgDecoding?: ImgHTMLAttributes<HTMLImageElement>['decoding']
  draggable?: boolean
  className?: string
}

/** Картка проєкту — фото 3:2, назва, опис (clamp 4), як blockSelectedProjects на головній. */
export function ProjectCard({
  href,
  title,
  description,
  image,
  imageWidth = 960,
  imageHeight = 640,
  titleAs = 'h3',
  imgLoading = 'lazy',
  imgDecoding = 'async',
  draggable = false,
  className = '',
}: ProjectCardProps) {
  const TitleTag = titleAs

  return (
    <a className={`vshanuy-project-slider__card ${className}`.trim()} href={href}>
      <span className="vshanuy-project-slider__media">
        <img
          src={image}
          alt=""
          width={imageWidth}
          height={imageHeight}
          loading={imgLoading}
          decoding={imgDecoding}
          draggable={draggable}
        />
      </span>
      <div className="vshanuy-project-slider__meta">
        <div className="vshanuy-project-slider__text">
          <TitleTag className="vshanuy-project-slider__name">{title}</TitleTag>
          <p className="vshanuy-project-slider__desc">{description}</p>
        </div>
      </div>
    </a>
  )
}
