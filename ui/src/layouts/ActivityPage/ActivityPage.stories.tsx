import type { Meta, StoryObj } from '@storybook/react-vite'
import { ActivityPage } from './ActivityPage'

const meta = {
  title: 'Pages/Activity',
  component: ActivityPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Сторінка «Напрями роботи»: 7 напрямів одна під одною, як на головній (непарні з другої колонки, парні з першої). При наведенні — беж і збільшення фото. Проєкти — окрема сторінка Pages/Projects.',
      },
    },
  },
  args: {
    showHeader: true,
  },
} satisfies Meta<typeof ActivityPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
