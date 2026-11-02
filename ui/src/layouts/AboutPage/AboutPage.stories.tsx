import type { Meta, StoryObj } from '@storybook/react-vite'
import { AboutPage } from './AboutPage'
import './AboutPage.css'

const meta = {
  title: 'Pages/About',
  component: AboutPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка «Про нас»: лід, широке фото, історія з портретом Ірини (Чеки) Цибух, місія-гасло, три дієслова «що ми робимо», DirectionsCarousel з головної («Наші напрями»), слайдер проєктів «‹ 9:00 ›» як на головній, бачення з кнопкою «Підтримати».',
      },
    },
  },
} satisfies Meta<typeof AboutPage>

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
