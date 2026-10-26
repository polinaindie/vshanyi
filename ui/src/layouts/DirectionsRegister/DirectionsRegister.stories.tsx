import type { Meta, StoryObj } from '@storybook/react-vite'
import portrait from '../../assets/portrait-doc.jpg'
import { DirectionsRegister } from './DirectionsRegister'
import './DirectionsRegister.css'

const meta = {
  title: 'Sections/DirectionsRegister',
  component: DirectionsRegister,
  parameters: {
    docs: {
      description: {
        component:
          'Вертикальний реєстр 7 напрямків (Наші напрямки): index · title · short · expand. Як FaqAccordion — усі згорнуті за замовчуванням, один відкритий. Жовтий-бюджет 0.',
      },
    },
  },
} satisfies Meta<typeof DirectionsRegister>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

/** Слот фото в expand «Робота з громадами» — layout не ламається без фото. */
export const RegionsWithPhoto: Story = {
  args: {
    items: [
      {
        index: '01',
        title: 'Робота з громадами',
        short:
          'Підсилюємо регіони у їхньому бажанні творити гідну культуру памʼяті про своїх земляків.',
        detail: (
          <p>
            Працюємо безпосередньо в громадах і їздимо в регіони, щоб бачити, як памʼять про загиблих
            живе на місцях.
          </p>
        ),
        cities: 'Харків · Запоріжжя · Суми · Львів · Чернігів',
        photo: {
          src: portrait,
          alt: '',
          caption: { place: 'Громади', year: '2024', tag: 'Поїздка' },
        },
      },
      {
        index: '02',
        title: 'Співпраця з бізнесом',
        short:
          'Залучаємо бізнес до щоденної культури памʼяті: від підтримки практик до створення власних ініціатив, бо памʼять може бути частиною відповідального життя компанії.',
      },
    ],
  },
}
