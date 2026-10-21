import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArticleCards } from './ArticleCards'
import './ArticleCards.css'

const meta = {
  title: 'Sections/ArticleCards',
  component: ArticleCards,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: кейси показують, що вже працює в громадах і командах.',
      },
    },
  },
} satisfies Meta<typeof ArticleCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
