import type { Meta, StoryObj } from '@storybook/react-vite'
import { SiteFooter } from './SiteFooter'
import './SiteFooter.css'

const meta = {
  title: 'Chrome/SiteFooter',
  component: SiteFooter,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: гасло + жовтий «Підтримати» як фінальний заклик; Ink — точковий інверсний блок, не тема сайту.',
      },
    },
  },
} satisfies Meta<typeof SiteFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
