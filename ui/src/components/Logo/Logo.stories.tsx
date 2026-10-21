import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from './Logo'
import './Logo.css'

const meta = {
  title: 'Foundations/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: назва — гідність памʼяті; жовтий 09:00 — дія в часі. Volja тільки тут.',
      },
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const OnInk: Story = {
  args: { variant: 'onInk' },
  parameters: { backgrounds: { default: 'ink' } },
  decorators: [
    (Story) => (
      <div style={{ padding: 'var(--space-4)', background: 'var(--ink)' }}>
        <Story />
      </div>
    ),
  ],
}

export const OnPaper: Story = {
  args: { variant: 'onPaper' },
  decorators: [
    (Story) => (
      <div style={{ padding: 'var(--space-4)' }}>
        <Story />
      </div>
    ),
  ],
}
