import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import '../../components/SectionLabel/SectionLabel.css'

export type Direction = {
  index: string
  title: string
  description: string
  href?: string
}

export type NumberedDirectionsProps = {
  label?: string
  title?: string
  items?: Direction[]
}

const defaultItems: Direction[] = [
  {
    index: '01',
    title: 'Хвилина мовчання',
    href: 'napryamky/hvylyna-movchannya.html',
    description:
      'Ритуал подяки, пошани та памʼяті. Символічна обʼєднавча дія, відкрита для широкого кола суспільства: зберігати памʼять про війну і спільну боротьбу за незалежність.',
  },
  {
    index: '02',
    title: 'ЧЕКАFEST',
    href: 'napryamky/chekafest.html',
    description:
      'Благодійний освітньо-музичний фестиваль памʼяті Ірини Цибух. Створений родиною та друзями Іри ЧЕКИ. Щорічний — у зручних датах біля 1 червня, дня її народження.',
  },
  {
    index: '03',
    title: 'Прощання з прапором',
    href: 'napryamky/proshchannya-z-praporom.html',
    description:
      'Церемонія, коли державний символ завершує службу — і ми визнаємо це з повагою. Коли прапор зношується й втрачає вигляд, постає питання: що робити далі?',
  },
  {
    index: '04',
    title: 'Тризна',
    href: 'napryamky/tryzna.html',
    description:
      'Публічне прощання з військовим — спосіб вшанувати людину й подякувати за службу. Прощання з містом — остання зустріч загиблого з громадою; особливо важлива для родини.',
  },
  {
    index: '05',
    title: 'Поміж нас',
    href: 'napryamky/pomizh-nas.html',
    description:
      'Загальноукраїнський проєкт ГО «Вшануй»: вшанування памʼяті загиблих Захисників і Захисниць та підтримка родин полонених і зниклих безвісти. Тактовне нагадування про ціну умовно спокійного життя.',
  },
  {
    index: '06',
    title: 'Дзеркало памʼяті',
    href: 'napryamky/dzerkalo-pamyati.html',
    description:
      'Проєкт координаторок «Вшануй» у Полтаві. Місце, де кожен може залишити імʼя людини, яку вбила росія, — щоб вона була видимою у просторі міста.',
  },
  {
    index: '07',
    title: 'Вінкування',
    href: 'napryamky/vinkuvannya.html',
    description:
      '29 серпня 2026-го, у День памʼяті загиблих, ми відновлювали традицію вінкування. Родини та друзі плели вінки з живих квітів під розповіді про найщасливіші моменти полеглих.',
  },
]

export function NumberedDirections({
  label = 'НАШІ ПРОЄКТИ',
  title = 'Що ми робимо, щоб поширювати культуру памʼяті',
  items = defaultItems,
}: NumberedDirectionsProps) {
  return (
    <section className="vshanuy-directions" aria-labelledby="directions-title">
      <header className="vshanuy-directions__header">
        <SectionLabel>{label}</SectionLabel>
        <h2 id="directions-title">{title}</h2>
      </header>
      <ol className="vshanuy-directions__list">
        {items.map((item) => (
          <li key={item.index} className="vshanuy-directions__item">
            <span className="vshanuy-directions__index">{item.index}</span>
            <h3>
              {item.href ? <a href={item.href}>{item.title}</a> : item.title}
            </h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
