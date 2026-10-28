import type { Meta, StoryObj } from '@storybook/react-vite'
import { MerchPage } from './MerchPage'
import './MerchPage.css'

const meta = {
  title: 'Pages/Merch',
  component: MerchPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка «Мерч»: заголовок і лід, загальне фото зліва, акцент і кнопка «Замовити наліпки» (Google-форма) справа, нижче три види наліпок з фото й підписами у стилі проєктів головної.',
      },
    },
  },
} satisfies Meta<typeof MerchPage>

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
