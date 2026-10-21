import type { Meta, StoryObj } from '@storybook/react-vite'
import { PartnersGrid } from './PartnersGrid'
import './PartnersGrid.css'

const meta = {
  title: 'Content/PartnersGrid',
  component: PartnersGrid,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: «ти не сам» — мережа тих, хто впроваджує культуру памʼяті разом.',
      },
    },
  },
} satisfies Meta<typeof PartnersGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
