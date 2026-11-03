import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionLabel } from './SectionLabel'
import './SectionLabel.css'

const meta = {
  title: 'Foundations/SectionLabel',
  component: SectionLabel,
} satisfies Meta<typeof SectionLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    index: '01',
    children: 'Про нас',
    trailing: 'Що ми робимо →',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 'var(--space-3)' }}>
        <Story />
      </div>
    ),
  ],
}

export const Plain: Story = {
  args: {
    as: 'h2',
    children: 'Місія',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 'var(--space-3)' }}>
        <Story />
      </div>
    ),
  ],
}
