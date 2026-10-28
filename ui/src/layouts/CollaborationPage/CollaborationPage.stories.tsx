import type { Meta, StoryObj } from '@storybook/react-vite'
import { CollaborationPage } from './CollaborationPage'
import './CollaborationPage.css'

const meta = {
  title: 'Pages/Collaboration',
  component: CollaborationPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка «Співпраця»: H1, вступ (фото в колонках 1–2, акцент у 3–4), нумеровані формати з масиву `formats` (перший — «Стати волонтером» з кнопкою на форму контактів) і пошта (mailto). Жовтий — лише hover/focus кнопки.',
      },
    },
  },
} satisfies Meta<typeof CollaborationPage>

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
