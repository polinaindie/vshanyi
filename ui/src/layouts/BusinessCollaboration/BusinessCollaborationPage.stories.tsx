import type { Meta, StoryObj } from '@storybook/react-vite'
import { BusinessCollaborationPage } from './BusinessCollaborationPage'
import './BusinessCollaborationPage.css'

const meta = {
  title: 'Pages/BusinessCollaboration',
  component: BusinessCollaborationPage,
  parameters: {
    docs: {
      description: {
        component:
          'Для бізнесу: hero (beige) + контекстний блок (paper, landscape фото на 2 кол. + h2/лід у 3–4).',
      },
    },
  },
} satisfies Meta<typeof BusinessCollaborationPage>

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
