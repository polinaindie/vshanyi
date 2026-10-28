import { useEffect, useState } from 'react'
import { DirectionsPage } from './layouts/DirectionsPage/DirectionsPage'
import { ActivityHub } from './layouts/ActivityHub/ActivityHub'
import { DesktopHeader } from './components/DesktopHeader/DesktopHeader'
import './layouts/DirectionsPage/DirectionsPage.css'
import './layouts/ActivityHub/ActivityHub.css'
import './components/DesktopHeader/DesktopHeader.css'

type PreviewView = 'directions' | 'activity'

function readView(): PreviewView {
  const hash = window.location.hash.replace(/^#\/?/, '')
  return hash === 'activity' ? 'activity' : 'directions'
}

export default function App() {
  const [view, setView] = useState<PreviewView>(readView)

  useEffect(() => {
    const onHash = () => setView(readView())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <>
      <nav className="vshanuy-preview-nav" aria-label="Превʼю сторінок">
        <a
          href="#directions"
          aria-current={view === 'directions' ? 'page' : undefined}
        >
          Напрями діяльності
        </a>
        <a
          href="#activity"
          aria-current={view === 'activity' ? 'page' : undefined}
        >
          Діяльність
        </a>
      </nav>
      {view === 'directions' ? (
        <DirectionsPage />
      ) : (
        <div className="vshanuy-activity-page">
          <DesktopHeader />
          <ActivityHub />
        </div>
      )}
    </>
  )
}
