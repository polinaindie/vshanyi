import type { Meta, StoryObj } from '@storybook/react-vite'
import { SupportPage } from './SupportPage'
import './SupportPage.css'

const meta = {
  title: 'Pages/Support',
  component: SupportPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка «Підтримати»: заголовок і заклик, фото зліва, онлайн-донат, банківські реквізити з копіюванням і посилання на мерч справа. Кнопка «Зробити внесок» поводиться як «Підтримати» у футері: ink, жовта на hover.',
      },
    },
  },
} satisfies Meta<typeof SupportPage>

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
