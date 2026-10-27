import type { Meta, StoryObj } from '@storybook/react-vite'
import { MaterialPage } from './MaterialPage'
import './MaterialPage.css'

const meta = {
  title: 'Pages/Material',
  component: MaterialPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка матеріалу «Історія Хвилини мовчання»: архівний лейаут — у колонці 1 sticky автор і зміст з активним розділом, у колонках 2–3 текст із мітками місця й часу, у колонці 4 примітки на полях. Наприкінці епілог, джерело («Історична правда») та інші матеріали.',
      },
    },
  },
} satisfies Meta<typeof MaterialPage>

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
