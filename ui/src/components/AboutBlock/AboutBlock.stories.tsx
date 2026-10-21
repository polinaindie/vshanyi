import type { Meta, StoryObj } from '@storybook/react-vite'
import { AboutBlock } from './AboutBlock'
import './AboutBlock.css'

const meta = {
  title: 'Content/AboutBlock',
  component: AboutBlock,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: свідчення (портрет) + спокійний текст «хто ми» — без похоронної драми.',
      },
    },
  },
} satisfies Meta<typeof AboutBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
