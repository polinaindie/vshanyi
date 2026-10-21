import type { Meta, StoryObj } from '@storybook/react-vite'
import { PhotoCaption } from './PhotoCaption'
import './PhotoCaption.css'

const meta = {
  title: 'Foundations/PhotoCaption',
  component: PhotoCaption,
} satisfies Meta<typeof PhotoCaption>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    place: 'Київ',
    year: '2024',
    tag: 'Хвилина мовчання',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 'var(--space-3)' }}>
        <Story />
      </div>
    ),
  ],
}
