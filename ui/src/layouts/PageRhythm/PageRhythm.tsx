import { Hero } from '../Hero/Hero'
import { NumberedDirections } from '../NumberedDirections/NumberedDirections'
import { GuideCta } from '../../components/GuideCta/GuideCta'
import { ValuesStrip } from '../ValuesStrip/ValuesStrip'
import { PartnersGrid } from '../../components/PartnersGrid/PartnersGrid'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { workDirections } from '../../content/workDirections'
import '../Hero/Hero.css'
import '../NumberedDirections/NumberedDirections.css'
import '../../components/GuideCta/GuideCta.css'
import '../ValuesStrip/ValuesStrip.css'
import '../../components/PartnersGrid/PartnersGrid.css'
import '../../components/SiteFooter/SiteFooter.css'

const directionItems = workDirections.map((item) => ({
  index: item.index,
  title: item.title,
  description: item.description,
  href: item.href,
}))

/** Драматургія: зупинись → напрямки → проєкти → зроби сам → цінності → ти не сам → доєднайся. */
export function PageRhythm() {
  return (
    <div className="vshanuy-page-rhythm">
      <Hero ctaAccent />
      <NumberedDirections
        label="НАШІ НАПРЯМКИ"
        title="Для кого ми говоримо про памʼять"
        items={directionItems}
      />
      <NumberedDirections />
      <GuideCta />
      <ValuesStrip />
      <PartnersGrid />
      <SiteFooter />
    </div>
  )
}
