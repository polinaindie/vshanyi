import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialKharkivPage } from './MaterialKharkivPage'
import './MaterialPage.css'

const meta = {
  title: 'Pages/Material — Дослідження Харків',
  component: MaterialKharkivPage,
  parameters: {
    docs: {
      description: {
        component:
          'Дослідження міських практик памʼяті в Харкові на шаблоні сторінки матеріалу: зміст у колонці 1 (без автора), шість розділів, фото проєкту «Поміж нас» і завершальна цитата.',
      },
    },
  },
} satisfies Meta<typeof MaterialKharkivPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showHeader: true,
  },
}
