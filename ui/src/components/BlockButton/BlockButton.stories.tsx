import type { Meta, StoryObj } from '@storybook/react-vite'
import { BlockButton } from './BlockButton'
import './BlockButton.css'

const meta = {
  title: 'Foundations/BlockButton',
  component: BlockButton,
  parameters: {
    docs: {
      description: {
        component:
          'Єдиний archive CTA. Primary — суцільний ink (Місія та цінності). Secondary — контур (Завантажити PDF). Жовтий лише на hover/focus; Крапка як у меню.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof BlockButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Місія та цінності',
    variant: 'primary',
    href: 'pro-nas.html',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 280, padding: 'var(--space-3)' }}>
        <Story />
      </div>
    ),
  ],
}

export const Secondary: Story = {
  args: {
    children: 'Завантажити PDF',
    variant: 'secondary',
    href: '#',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 280, padding: 'var(--space-3)' }}>
        <Story />
      </div>
    ),
  ],
}

/** Обидва варіанти поруч — як на головній. */
export const PrimaryAndSecondary: Story = {
  args: { children: 'Місія та цінності' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 24,
        maxWidth: 280,
        padding: 'var(--space-3)',
        background: 'var(--paper)',
      }}
    >
      <BlockButton variant="primary" href="pro-nas.html">
        Місія та цінності
      </BlockButton>
      <BlockButton variant="secondary" href="#" fullWidth>
        Завантажити PDF
      </BlockButton>
    </div>
  ),
}

export const AsSubmit: Story = {
  args: { children: 'Надіслати', type: 'submit' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 280, padding: 'var(--space-3)' }}>
        <Story />
      </div>
    ),
  ],
}
