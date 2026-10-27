import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialsPage } from './MaterialsPage'
import './MaterialsPage.css'

const meta = {
  title: 'Pages/Materials',
  component: MaterialsPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка «Матеріали»: фільтр за типом (Колонка автора / Дослідження) з лічильниками, головний матеріал на всю ширину, далі картки з обкладинками 3:2 у колонках сітки.',
      },
    },
  },
} satisfies Meta<typeof MaterialsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showHeader: true,
  },
}

export const WithoutHeader: Story = {
  args: {
    showHeader: false,
  },
}
