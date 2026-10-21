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
          'Як служить переходу памʼять → дія: block CTA кличе зробити крок. Accent (жовтий) — лише коли це єдина подія на екрані.',
      },
    },
  },
} satisfies Meta<typeof BlockButton>

export default meta
type Story = StoryObj<typeof meta>

export const Ink: Story = {
  args: { children: 'Підтримати', variant: 'ink' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 280, padding: 'var(--space-3)' }}>
        <Story />
      </div>
    ),
  ],
}

export const AccentAction: Story = {
  args: { children: 'Підтримати', variant: 'accent' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 280, padding: 'var(--space-3)' }}>
        <Story />
      </div>
    ),
  ],
}

/** На canvas рівно один жовтий акцент = дія. */
export const OneYellowAccent: Story = {
  args: { children: 'Підтримати', variant: 'accent' },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '40vh',
          display: 'grid',
          placeContent: 'center',
          padding: 'var(--space-silence) var(--space-3)',
          background: 'var(--paper)',
        }}
      >
        <div style={{ width: 'min(100%, 20rem)' }}>
          <p
            style={{
              margin: '0 0 var(--space-3)',
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--step-2)',
              lineHeight: 'var(--leading-display)',
              fontWeight: 300,
              textAlign: 'center',
            }}
          >
            Памʼятай про полеглих —
            <br />
            допомагай живим.
          </p>
          <Story />
        </div>
      </div>
    ),
  ],
}
