import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialDenPamyatiPage } from './MaterialDenPamyatiPage'
import './MaterialPage.css'

const meta = {
  title: 'Pages/Material — День памʼяті',
  component: MaterialDenPamyatiPage,
  parameters: {
    docs: {
      description: {
        component:
          'Колонка «Як вшанувати полеглих захисників та захисниць у День памʼяті» на шаблоні сторінки матеріалу: без змісту, з цитатою, кроками «Як долучитися до Вінкування» та особистим епілогом.',
      },
    },
  },
} satisfies Meta<typeof MaterialDenPamyatiPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showHeader: true,
  },
}
