import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialDlyaChohoPage } from './MaterialDlyaChohoPage'
import './MaterialPage.css'

const meta = {
  title: 'Pages/Material — А для чого памʼятаєш ти',
  component: MaterialDlyaChohoPage,
  parameters: {
    docs: {
      description: {
        component:
          'Колонка «А для чого памʼятаєш ти?» на шаблоні сторінки матеріалу: без змісту, з цитатами Ірини Цибух і підзаголовком-питанням.',
      },
    },
  },
} satisfies Meta<typeof MaterialDlyaChohoPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showHeader: true,
  },
}
