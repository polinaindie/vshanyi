import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectPage } from './ProjectPage'

const meta = {
  title: 'Pages/Project',
  component: ProjectPage,
  parameters: {
    docs: {
      description: {
        component:
          'Єдиний шаблон сторінки проєкту: назва, лід, обкладинка, текст, «Корисні матеріали» (якщо є) та «Інші проєкти».',
      },
    },
  },
  args: {
    showHeader: true,
  },
} satisfies Meta<typeof ProjectPage>

export default meta
type Story = StoryObj<typeof meta>

export const HvylynaMovchannya: Story = {
  args: { slug: 'hvylyna-movchannya' },
}

export const Chekafest: Story = {
  args: { slug: 'chekafest' },
}

export const ProshchannyaZPraporom: Story = {
  args: { slug: 'proshchannya-z-praporom' },
}

export const Tryzna: Story = {
  args: { slug: 'tryzna' },
}

export const PomizhNas: Story = {
  args: { slug: 'pomizh-nas' },
}

export const DzerkaloPamyati: Story = {
  args: { slug: 'dzerkalo-pamyati' },
}

export const Vinkuvannya: Story = {
  args: { slug: 'vinkuvannya' },
}
