import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FullscreenMenu } from './FullscreenMenu'
import { DesktopHeader } from '../DesktopHeader/DesktopHeader'
import '../DesktopHeader/DesktopHeader.css'
import './FullscreenMenu.css'

const meta = {
  title: 'Chrome/FullscreenMenu',
  component: FullscreenMenu,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: архівна карта розділів; 09:00 у topline тримає символ часу.',
      },
    },
  },
} satisfies Meta<typeof FullscreenMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  args: {
    open: true,
    onClose: () => undefined,
  },
}

export const WithHeader: Story = {
  args: {
    open: false,
    onClose: () => undefined,
  },
  render: function WithHeaderStory() {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ minHeight: '100vh' }}>
        <DesktopHeader onOpenMenu={() => setOpen(true)} />
        <FullscreenMenu open={open} onClose={() => setOpen(false)} />
        <p style={{ padding: 'var(--space-3)' }}>Натисніть «Усі розділи».</p>
      </div>
    )
  },
}
