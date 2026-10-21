import type { Meta, StoryObj } from '@storybook/react-vite'
import { ImageText } from './ImageText'

const meta = {
  title: 'Sections/ImageText',
  component: ImageText,
} satisfies Meta<typeof ImageText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
