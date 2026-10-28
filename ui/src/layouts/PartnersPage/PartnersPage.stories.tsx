import type { Meta, StoryObj } from '@storybook/react-vite'
import { PartnersPage } from './PartnersPage'
import './PartnersPage.css'

const meta = {
  title: 'Pages/Partners',
  component: PartnersPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка «Партнери»: H1, текст у колонках 3–4 (акцент Piazzolla + абзац Fixel) і сітка логотипів із масиву `partners` (2 колонки на мобільному, 4 від 1024px, клітинки по вертикальних гайдах). Логотипи монохромні, opacity .68 → 1 на hover/focus. Жовтого немає.',
      },
    },
  },
} satisfies Meta<typeof PartnersPage>

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
