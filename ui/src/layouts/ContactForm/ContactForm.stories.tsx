import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactForm } from './ContactForm'
import './ContactForm.css'

const meta = {
  title: 'Sections/ContactForm',
  component: ContactForm,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: спокійний канал доєднатися — без сервісного «продажного» тону.',
      },
    },
  },
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
