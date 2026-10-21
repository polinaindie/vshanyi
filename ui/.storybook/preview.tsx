import type { Preview } from '@storybook/react-vite'
import '../src/styles/tokens.css'
import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: 'var(--paper)' },
        { name: 'beige', value: 'var(--beige)' },
        { name: 'ink', value: 'var(--ink)' },
      ],
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Docs',
          ['Concept', 'BrandRules', 'Tokens', 'Logo', 'LayoutSystem', 'AnucVsVshanuy'],
          'Foundations',
          'Chrome',
          'Content',
          'Sections',
          [
            'Hero',
            'NumberedDirections',
            'DirectionsRegister',
            'ActivityHub',
            'PracticeCarousel',
            'ValuesStrip',
            'ArticleCards',
            'ImageText',
            'FaqAccordion',
            'ContactForm',
            'PageRhythm',
          ],
          'Pages',
          ['DirectionsActivity'],
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="story-canvas">
        <Story />
      </div>
    ),
  ],
}

export default preview
