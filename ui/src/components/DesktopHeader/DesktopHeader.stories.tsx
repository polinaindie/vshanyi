import type { Meta, StoryObj } from '@storybook/react-vite'
import { DesktopHeader } from './DesktopHeader'
import './DesktopHeader.css'

const meta = {
  title: 'Chrome/DesktopHeader',
  component: DesktopHeader,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: 09:00 тримає памʼять у сьогодні; жовтий у «Долучитися» — єдина подія дії в хедері.',
      },
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '390px', height: '844px' } },
        desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' } },
      },
    },
  },
} satisfies Meta<typeof DesktopHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ minHeight: 200 }}>
        <Story />
        <p style={{ padding: 'var(--space-3)', color: 'var(--text-secondary)' }}>
          Наведіть на пункти — slide + submenu.
        </p>
      </div>
    ),
  ],
}

export const Scrolled: Story = {
  args: { scrolled: true },
}
