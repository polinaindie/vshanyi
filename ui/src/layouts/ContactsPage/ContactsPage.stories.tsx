import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactsPage } from './ContactsPage'
import './ContactsPage.css'

const meta = {
  title: 'Pages/Contacts',
  component: ContactsPage,
  parameters: {
    docs: {
      description: {
        component:
          'Сторінка «Контакти»: chrome + канали (mailto / соцмережі) + ContactForm з темою + SiteFooter. Жовтий-бюджет 0; submit — ink.',
      },
    },
  },
} satisfies Meta<typeof ContactsPage>

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
