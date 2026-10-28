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
          'Сторінка «Співпраця»: H1, документальне фото в колонках 1–2, проза й пошта (mailto) у колонках 3–4. Жовтий-бюджет 0.',
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
