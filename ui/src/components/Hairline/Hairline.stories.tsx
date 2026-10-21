import type { Meta, StoryObj } from '@storybook/react-vite'
import { Hairline } from './Hairline'
import './Hairline.css'

const meta = {
  title: 'Foundations/Hairline',
  component: Hairline,
} satisfies Meta<typeof Hairline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: 'var(--space-4)' }}>
        <p style={{ marginBottom: 'var(--space-2)' }}>Перед лінією</p>
        <Story />
        <p style={{ marginTop: 'var(--space-2)' }}>Після лінії</p>
      </div>
    ),
  ],
}
