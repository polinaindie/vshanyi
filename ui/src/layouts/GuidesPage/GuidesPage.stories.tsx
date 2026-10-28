import type { Meta, StoryObj } from '@storybook/react-vite'
import { GuidesPage } from './GuidesPage'

const meta = {
  title: 'Pages/Guides',
  component: GuidesPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Сторінка «Гайди»: три гайди з головної нумерованим списком під лінійками — назва, короткий опис і завантаження PDF з розміром файлу.',
      },
    },
  },
  args: {
    showHeader: true,
  },
} satisfies Meta<typeof GuidesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
