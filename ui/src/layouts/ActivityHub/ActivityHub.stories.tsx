import type { Meta, StoryObj } from '@storybook/react-vite'
import { ActivityHub } from './ActivityHub'
import './ActivityHub.css'

const meta = {
  title: 'Sections/ActivityHub',
  component: ActivityHub,
  parameters: {
    docs: {
      description: {
        component:
          'Хаб «Наша діяльність»: для кого, проєкти, інструменти (GuideCta), міст назад на напрямки. Жовтий-бюджет 0; без карток.',
      },
    },
  },
} satisfies Meta<typeof ActivityHub>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
