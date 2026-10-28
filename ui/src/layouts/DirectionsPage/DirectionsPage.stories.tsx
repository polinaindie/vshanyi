import type { Meta, StoryObj } from '@storybook/react-vite'
import { DirectionsPage } from './DirectionsPage'
import './DirectionsPage.css'

const meta = {
  title: 'Pages/DirectionsActivity',
  component: DirectionsPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка «Напрями діяльності»: chrome + DirectionsRegister (7 рядків expand) + міст на «Діяльність». Жовтий-бюджет 0.',
      },
    },
  },
} satisfies Meta<typeof DirectionsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showHeader: true,
  },
}

export const WithoutHeader: Story = {
  args: {
    showHeader: false,
  },
}
