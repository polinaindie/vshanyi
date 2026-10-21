import { ArchiveGrid } from '../../components/ArchiveGrid/ArchiveGrid'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import { Hairline } from '../../components/Hairline/Hairline'
import { GuideCta, type GuideItem } from '../../components/GuideCta/GuideCta'
import '../../components/ArchiveGrid/ArchiveGrid.css'
import '../../components/SectionLabel/SectionLabel.css'
import '../../components/Hairline/Hairline.css'
import '../../components/GuideCta/GuideCta.css'

export type AudienceBlock = {
  title: string
  lead: string
  href?: string
}

export type ProjectTeaser = {
  title: string
  annotation: string
  href?: string
}

export type ActivityHubProps = {
  title?: string
  intro?: string
  audiences?: AudienceBlock[]
  project?: ProjectTeaser
  tools?: GuideItem[]
  bridgeLabel?: string
  bridgeHref?: string
}

const defaultAudiences: AudienceBlock[] = [
  {
    title: 'Для громад',
    lead:
      'Допомагаємо громадам впроваджувати сучасні практики вшанування через дослідження, консультації, методичні матеріали та супровід. Разом формуємо культуру памʼяті, яка стає частиною щоденного життя.',
    href: '#',
  },
  {
    title: 'Для бізнесів',
    lead:
      'Бізнес є важливою частиною суспільства — і маленькі команди теж громади. Культура памʼяті формується природно, без формальності та примусу.',
    href: '#',
  },
]

const defaultProject: ProjectTeaser = {
  title: '«Поміж нас»',
  annotation: 'Памʼятні таблички у міському просторі, що нагадують: Герої жили серед нас.',
  href: '#',
}

const defaultTools: GuideItem[] = [
  {
    title: 'Гайд «Не нашкодити»',
    description: 'Опора для етичної роботи з темою памʼяті — щоб не травмувати і не знеособлювати.',
    href: '#',
  },
  {
    title: 'Дорожня карта громад',
    description: 'Покрокові рекомендації для громад і установ, щоб культура памʼяті працювала системно.',
    href: '#',
  },
  {
    title: 'Дорожня карта бізнесу',
    description: 'Як впроваджувати культуру памʼяті в команді — без пафосу, з чіткими діями.',
    href: '#',
  },
]

export function ActivityHub({
  title = 'Наша діяльність',
  intro = 'Для кого ми працюємо, які проєкти ведемо і які інструменти можна взяти вже зараз.',
  audiences = defaultAudiences,
  project = defaultProject,
  tools = defaultTools,
  bridgeLabel = 'Напрямки діяльності →',
  bridgeHref = '#',
}: ActivityHubProps) {
  return (
    <ArchiveGrid className="vshanuy-activity-hub-grid">
      <div className="vshanuy-activity-hub">
        <header className="vshanuy-activity-hub__intro">
          <h1>{title}</h1>
          <p className="vshanuy-activity-hub__frame">{intro}</p>
        </header>

        <section className="vshanuy-activity-hub__section" aria-labelledby="activity-audience-title">
          <SectionLabel index="01" trailing="ГРОМАДИ · БІЗНЕС →">
            ДЛЯ КОГО
          </SectionLabel>
          <h2 id="activity-audience-title" className="vshanuy-activity-hub__visually-hidden">
            Для кого
          </h2>
          <div className="vshanuy-activity-hub__audiences">
            {audiences.map((block, index) => (
              <div key={block.title} className="vshanuy-activity-hub__audience-wrap">
                {index > 0 ? <Hairline /> : null}
                <a className="vshanuy-activity-hub__audience" href={block.href || '#'}>
                  <h3>
                    {block.title}
                    <span aria-hidden="true"> →</span>
                  </h3>
                  <p>{block.lead}</p>
                </a>
              </div>
            ))}
          </div>
        </section>

        <Hairline />

        <section className="vshanuy-activity-hub__section" aria-labelledby="activity-projects-title">
          <SectionLabel index="02" trailing="ПОМІЖ НАС →">
            ПРОЄКТИ
          </SectionLabel>
          <h2 id="activity-projects-title" className="vshanuy-activity-hub__visually-hidden">
            Проєкти
          </h2>
          <a className="vshanuy-activity-hub__project" href={project.href || '#'}>
            <span className="vshanuy-activity-hub__project-title">
              {project.title}
              <span aria-hidden="true"> →</span>
            </span>
            <span className="vshanuy-activity-hub__project-note">{project.annotation}</span>
          </a>
        </section>

        <Hairline />

        <section className="vshanuy-activity-hub__section" aria-labelledby="activity-tools-title">
          <SectionLabel index="03" trailing="ГАЙДИ →">
            ІНСТРУМЕНТИ
          </SectionLabel>
          <h2 id="activity-tools-title" className="vshanuy-activity-hub__visually-hidden">
            Інструменти
          </h2>
          <div className="vshanuy-activity-hub__tools">
            <GuideCta items={tools} as="div" />
          </div>
        </section>

        <Hairline />

        <aside className="vshanuy-activity-hub__bridge" aria-label={bridgeLabel}>
          <SectionLabel index="04" trailing="НАПРЯМКИ →">
            ДАЛІ
          </SectionLabel>
          <a className="vshanuy-activity-hub__bridge-link" href={bridgeHref}>
            {bridgeLabel}
          </a>
        </aside>
      </div>
    </ArchiveGrid>
  )
}
