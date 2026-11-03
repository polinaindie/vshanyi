import type { Meta, StoryObj } from '@storybook/react-vite'
import { projectTeasers } from '../../data/projectTeasers'
import { ProjectCard } from './ProjectCard'

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Картка проєкту — той самий патерн, що blockSelectedProjects на головній: inset, beige hover на комірці, фото 3:2 з зумом, опис завжди видимий.',
      },
    },
  },
  args: {
    href: 'napryamky/hvylyna-movchannya.html',
    title: 'Хвилина мовчання',
    description: projectTeasers['hvylyna-movchannya'],
    image: '/media/vshanuy-proekt-hvylyna-movchannya-1600.webp',
    imageWidth: 1600,
    imageHeight: 1067,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360, padding: 16, boxSizing: 'border-box' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ProjectsPageHeading: Story = {
  args: {
    titleAs: 'h2',
  },
}
