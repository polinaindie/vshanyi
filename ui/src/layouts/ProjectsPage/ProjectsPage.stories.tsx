import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectsPage } from './ProjectsPage'

const meta = {
  title: 'Pages/Projects',
  component: ProjectsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Сторінка всіх проєктів: заголовок «Проєкти.», фільтр за напрямом і сітка карток — 4 в ряд на десктопі. Опис під карткою видно завжди.',
      },
    },
  },
  args: {
    showHeader: true,
  },
} satisfies Meta<typeof ProjectsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
