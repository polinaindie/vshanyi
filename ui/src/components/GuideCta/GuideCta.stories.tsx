import type { Meta, StoryObj } from '@storybook/react-vite'
import { GuideCta } from './GuideCta'
import './GuideCta.css'

const meta = {
  title: 'Content/GuideCta',
  component: GuideCta,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: «зроби сам» — посібники як інструмент щоденної практики.',
      },
    },
  },
} satisfies Meta<typeof GuideCta>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
