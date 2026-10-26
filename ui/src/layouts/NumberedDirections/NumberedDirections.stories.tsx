import type { Meta, StoryObj } from '@storybook/react-vite'
import { NumberedDirections } from './NumberedDirections'
import './NumberedDirections.css'

const meta = {
  title: 'Sections/NumberedDirections',
  component: NumberedDirections,
  parameters: {
    docs: {
      description: {
        component:
          'Сім проєктів «Вшануй» (мітка НАШІ ПРОЄКТИ): номер + назва + опис. Дзеркало слайдера на головній; кожна картка веде на stub сторінки проєкту.',
      },
    },
  },
} satisfies Meta<typeof NumberedDirections>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
