import { DesktopHeader } from '../../components/DesktopHeader/DesktopHeader'
import { DirectionsRegister } from '../DirectionsRegister/DirectionsRegister'
import '../../components/DesktopHeader/DesktopHeader.css'
import '../DirectionsRegister/DirectionsRegister.css'

export type DirectionsPageProps = {
  /** Показувати chrome-header у page composition story. */
  showHeader?: boolean
}

/** Page composition: header (опційно) + реєстр напрямків + міст «Наша діяльність». */
export function DirectionsPage({ showHeader = true }: DirectionsPageProps) {
  return (
    <div className="vshanuy-directions-page">
      {showHeader ? <DesktopHeader /> : null}
      <DirectionsRegister />
    </div>
  )
}
