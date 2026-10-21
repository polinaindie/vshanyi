import type { Meta, StoryObj } from '@storybook/react-vite'
import { PracticeCarousel } from './PracticeCarousel'
import './PracticeCarousel.css'

const meta = {
  title: 'Sections/PracticeCarousel',
  component: PracticeCarousel,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: практики памʼяті (не «проєкти інтерʼєру») — рік як навігація в часі.',
      },
    },
  },
} satisfies Meta<typeof PracticeCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
