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
          'Вертикальний реєстр 7 напрямів: index · title · short · expand. Як FaqAccordion — усі згорнуті за замовчуванням, один відкритий. Жовтий-бюджет 0.',
      },
    },
  },
} satisfies Meta<typeof DirectionsRegister>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

/** Слот фото в expand «Громади» — layout не ламається без фото. */
export const RegionsWithPhoto: Story = {
  args: {
    items: [
      {
        index: '01',
        title: 'Громади',
        short:
          'Працюємо з громадами та координаторами осередків, допомагаємо створювати й впроваджувати локальні практики памʼяті.',
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
        title: 'Бізнес',
        short: 'Допомагаємо бізнесу інтегрувати культуру памʼяті у свої комунікації.',
      },
    ],
  },
}
