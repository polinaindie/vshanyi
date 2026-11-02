import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  DirectionsCarousel,
  defaultDirectionItems,
  type DirectionCarouselItem,
} from './DirectionsCarousel'
import './DirectionsCarousel.css'

const meta = {
  title: 'Sections/DirectionsCarousel',
  component: DirectionsCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Карусель аудиторій/напрямів: архівні текст-картки з optional фото, native scroll, стрілки й лічильник `01 / 07`. Жовтий-бюджет 0.',
      },
    },
  },
} satisfies Meta<typeof DirectionsCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Homepage: Story = {
  name: 'Homepage',
  args: {},
}

const withoutMediaItems: DirectionCarouselItem[] = defaultDirectionItems.map(
  ({ index, title, description, href }) => ({ index, title, description, href }),
)

export const WithoutMedia: Story = {
  args: {
    items: withoutMediaItems,
  },
}

export const FewItems: Story = {
  args: {
    items: defaultDirectionItems.slice(0, 3),
  },
}
