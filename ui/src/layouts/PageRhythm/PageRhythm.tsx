import { Hero } from '../Hero/Hero'
import { NumberedDirections } from '../NumberedDirections/NumberedDirections'
import { GuideCta } from '../../components/GuideCta/GuideCta'
import { ValuesStrip } from '../ValuesStrip/ValuesStrip'
import { PartnersGrid } from '../../components/PartnersGrid/PartnersGrid'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import '../Hero/Hero.css'
import '../NumberedDirections/NumberedDirections.css'
import '../../components/GuideCta/GuideCta.css'
import '../ValuesStrip/ValuesStrip.css'
import '../../components/PartnersGrid/PartnersGrid.css'
import '../../components/SiteFooter/SiteFooter.css'

/** Драматургія: зупинись → практики → зроби сам → цінності → ти не сам → доєднайся. */
export function PageRhythm() {
  return (
    <div className="vshanuy-page-rhythm">
      <Hero ctaAccent />
      <NumberedDirections />
      <GuideCta />
      <ValuesStrip />
      <PartnersGrid />
      <SiteFooter />
    </div>
  )
}
