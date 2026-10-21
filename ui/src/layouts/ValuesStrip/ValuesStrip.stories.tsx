import type { Meta, StoryObj } from '@storybook/react-vite'
import { ValuesStrip } from './ValuesStrip'
import './ValuesStrip.css'

const meta = {
  title: 'Sections/ValuesStrip',
  component: ValuesStrip,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: Памʼять / Повага / Дія — три слова одного переходу.',
      },
    },
  },
} satisfies Meta<typeof ValuesStrip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
