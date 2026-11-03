import type { Meta, StoryObj } from '@storybook/react-vite'
import { defaultDirectionItems } from '../../data/directionItems'
import { DirectionCard } from './DirectionCard'

const sample = defaultDirectionItems[0]!

const meta = {
  title: 'Components/DirectionCard',
  component: DirectionCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Картка напряму — фото 16:9, Piazzolla-назва, Fixel-опис; як на головній у каруселі напрямів.',
      },
    },
  },
  args: {
    href: sample.href,
    title: sample.title,
    description: sample.description,
    image: sample.image,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420, boxSizing: 'border-box' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DirectionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutMedia: Story = {
  args: {
    image: undefined,
  },
}
