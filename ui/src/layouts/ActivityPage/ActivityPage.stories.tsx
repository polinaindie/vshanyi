import type { Meta, StoryObj } from '@storybook/react-vite'
import '../AboutPage/AboutPage.css'
import { ActivityPage } from './ActivityPage'

const meta = {
  title: 'Pages/Activity',
  component: ActivityPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Сторінка «Діяльність»: заголовок і 7 напрямків, як на головній. Картки 4 в ряд, при наведенні — беж і збільшення фото.',
      },
    },
  },
  args: {
    showHeader: true,
  },
} satisfies Meta<typeof ActivityPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
