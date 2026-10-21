import type { Meta, StoryObj } from '@storybook/react-vite'
import { NumberedDirections } from './NumberedDirections'
import './NumberedDirections.css'

const meta = {
  title: 'Sections/NumberedDirections',
  component: NumberedDirections,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: практики нумеровані як архів — від ритуалу до системної роботи.',
      },
    },
  },
} satisfies Meta<typeof NumberedDirections>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
