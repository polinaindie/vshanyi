import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import '../../components/SectionLabel/SectionLabel.css'

export type Direction = {
  index: string
  title: string
  description: string
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
    description: 'Вкорінюємо загальнонаціональний щоденний ритуал памʼяті про полеглих.',
  },
  {
    index: '02',
    title: 'ЧЕКАFEST',
    description:
      'Співтворимо фестиваль памʼяті Іринки «Чеки», присвячений її цінностям. Про неї і про всіх загиблих.',
  },
  {
    index: '03',
    title: 'Вінкування',
    description:
      'Повертаємо українську традицію плетіння вінків із живих квітів на честь поляглих вояків.',
  },
  {
    index: '04',
    title: 'Гайд з комунікацій',
    description:
      '«Не нашкодь» – практичний гайд про те, як говорити про війну, втрати, дні памʼяті та обстріли. Допомагаємо комунікувати чутливо, людяно й без додаткової травматизації.',
  },
  {
    index: '05',
    title: 'Поміж нас',
    description:
      'Створюємо нативні нагадування у міському просторі – таблички на спинках лавочок. Повертаємо памʼять про людей у місця, де ми щодня живемо, ходимо й зустрічаємося.',
  },
  {
    index: '06',
    title: 'Памʼять в мистецтві',
    description:
      'Співтворимо виставки та мистецькі проєкти від світлин неба над могилами захисників до історії Хвилини мовчання.',
  },
  {
    index: '07',
    title: 'Робота з громадами',
    description:
      'Підсилюємо регіони у їхньому бажанні творити гідну культуру памʼяті про своїх земляків.',
  },
  {
    index: '08',
    title: 'Співпраця з бізнесом',
    description:
      'Залучаємо бізнес до щоденної культури памʼяті: від підтримки практик до створення власних ініціатив, бо памʼять може бути частиною відповідального життя компанії.',
  },
  {
    index: '09',
    title: 'Прощання з прапором',
    description:
      'Повертаємо увагу до українського прапора як символу, який супроводжує людину від служби до останнього прощання. Пояснюємо значення цього ритуалу та допомагаємо зробити його зрозумілим для суспільства.',
  },
  {
    index: '10',
    title: 'Тризна',
    description:
      'Вибудовуємо ритуал, у якому місто може гідно попрощатися зі своїм захисником чи захисницею.',
  },
]

export function NumberedDirections({
  label = 'НАПРЯМКИ РОБОТИ',
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
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
