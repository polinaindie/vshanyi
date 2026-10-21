import type { Meta, StoryObj } from '@storybook/react-vite'
import { Hero } from './Hero'
import './Hero.css'

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: зупинись (тиша + свідчення), потім один жовтий CTA — крок до живих. Без lifestyle-вайбу.',
      },
    },
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const InkCta: Story = {
  args: { ctaAccent: false, ctaLabel: 'Дізнатися більше' },
}
