import { useEffect, useState } from 'react'

/** Зміст публікації: останній розділ, верх якого пройшов 35% висоти вікна. Повертає значення для aria-current. */
export function useActiveSection(ids: readonly string[]) {
  const [current, setCurrent] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const offset = window.innerHeight * 0.35
      let next: string | null = null
      ids.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= offset) next = id
      })
      setCurrent(next)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids])

  return (id: string) => (current === id ? 'true' : undefined)
}
