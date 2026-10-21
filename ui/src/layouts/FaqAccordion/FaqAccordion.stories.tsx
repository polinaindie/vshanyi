import type { Meta, StoryObj } from '@storybook/react-vite'
import { FaqAccordion } from './FaqAccordion'
import './FaqAccordion.css'

const meta = {
  title: 'Sections/FaqAccordion',
  component: FaqAccordion,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: спокійні відповіді без сервісного тиску — шлях до першого кроку.',
      },
    },
  },
} satisfies Meta<typeof FaqAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
