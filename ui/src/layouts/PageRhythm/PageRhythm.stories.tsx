import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageRhythm } from './PageRhythm'
import './PageRhythm.css'

const meta = {
  title: 'Sections/PageRhythm',
  component: PageRhythm,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: шлях від тиші (Hero) через практики й гайди до підтримки у футері. Один жовтий акцент — CTA «Підтримати» у Hero; далі — ink і повітря.',
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} satisfies Meta<typeof PageRhythm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

/** Окремий акцент на тиші між блоками (перевірка --space-silence). */
export const SilenceBetweenBlocks: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Тиша як матеріал: порожнє поле між секціями = візуальна хвилина мовчання. Не заповнювати декором.',
      },
    },
  },
}
