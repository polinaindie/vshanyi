import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArchiveGrid } from './ArchiveGrid'
import './ArchiveGrid.css'

const meta = {
  title: 'Foundations/ArchiveGrid',
  component: ArchiveGrid,
  parameters: {
    docs: {
      description: {
        component:
          'Як служить переходу памʼять → дія: вертикальні лінії — архівна чесність, не декор. Порядок сітки тримає гідність без драми.',
      },
    },
  },
} satisfies Meta<typeof ArchiveGrid>

export default meta
type Story = StoryObj<typeof meta>

export const FourColumns: Story = {
  args: {
    children: null,
  },
  render: () => (
    <ArchiveGrid>
      {['Час', 'Памʼять', 'Повага', 'Дія'].map((label) => (
        <div key={label} className="vshanuy-archive-grid__cell">
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--step-2)',
              lineHeight: 'var(--leading-display)',
              fontWeight: 'var(--weight-display)',
            }}
          >
            {label}
          </p>
          <p style={{ marginTop: 'var(--space-2)', color: 'var(--text-secondary)' }}>
            Комірка сітки без карток і тіней.
          </p>
        </div>
      ))}
    </ArchiveGrid>
  ),
}
