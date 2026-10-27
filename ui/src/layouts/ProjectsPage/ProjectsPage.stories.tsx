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
          'Сторінка всіх проєктів: заголовок «Проєкти.» і сітка карток — 4 в ряд на десктопі, 2 на мобільному. Опис картки зʼявляється при наведенні.',
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
