// uno.config.ts
import {
  defineConfig,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography({
      cssExtend: {
        '.logo svg': {
        'width': '80px',
        'height': 'auto',
      },        
              'h1': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        },

        'h2': {
          'font-size': '1.75rem',
          'line-height': '1.3',
          'font-weight': '600',
          'margin-top': '2rem',
          'margin-bottom': '1rem',
        },
        'h3': {
          'font-size': '1.5rem',
          'line-height': '1.4',
          'font-weight': '600',
          'margin-top': '1.75rem',
          'margin-bottom': '0.75rem',
        },
        'h4': {
          'font-size': '1.25rem',
          'line-height': '1.5',
          'font-weight': '500',
          'margin-top': '1.5rem',
          'margin-bottom': '0.5rem',
        },
        'h5': {
          'font-size': '1.125rem',
          'line-height': '1.5',
          'font-weight': '500',
        },
        'h6': {
          'font-size': '1rem',
          'line-height': '1.5',
          'font-weight': '500',
        },
        'h2 > a, h3 > a, h4 > a, h5 > a, h6 > a': {
          'pointer-events': 'none',
          'text-decoration': 'none',
        },

        // Paragraphs
        'p': {
          'font-size': '1rem',
          'line-height': '1.75',
          'margin-bottom': '1.25rem',
          '--uno': 'dark:text-gray-200 text-gray-800',
        },

        // Lists
        'ul': {
          'list-style-type': 'disc',
          'margin-bottom': '1.25rem',
          'padding-left': '1.5rem',
        },
        'ol': {
          'list-style-type': 'decimal',
          'margin-bottom': '1.25rem',
          'padding-left': '1.5rem',
        },
        'ol li::marker': {
          'font-weight': 'bold',
        },

        'li': {
          'margin-bottom': '0.5rem',
          '--uno': 'dark:text-gray-200 text-gray-800',
        },

        // Code and Pre
        'pre, code': {
          '--uno':
            'dark:(bg-dark-900 text-light-700) text-gray-800 core-border',
          'font-family': '\'Geist Mono\', monospace',
          'font-size': '0.875rem',
        },
        'pre': {
          'padding': '1rem',
          'margin-bottom': '1.5rem',
          'overflow-x': 'auto',
        },
        'pre > code': {
          border: 'none',
        },
        // Youtube iframe | <Vid>
        '.ifr iframe': {
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'width': '100%',
          'height': '100%',
          'border-radius': '0.375rem',
        },
        '.ifr': {
          'position': 'relative',
          'width': '100%',
          'padding-bottom': '56.25%',
          'height': '0',
          'margin': '1.5rem 0',
        },

        // Figure styling
        'figure figcaption': {
          'font-size': '0.75rem',
          'line-height': '1.5',
          'margin-top': '0.3rem',
          'text-align': 'left',
          '--uno': 'dark:text-light-900 text-gray-600',
          'font-family': '\'Geist Mono\', monospace',
        },

        // Italics
        'i': {
          'opacity': '0.9',
          'font-weight': '400',
        },

        // Tables
        'table': {
          'width': '100%',
          'border-collapse': 'collapse',
          'margin': '1.5rem 0',
          'font-size': '0.875rem',
          '--uno': 'core-theme core-border min-w-5rem',
          'display': 'table',
        },
        'th, td': {
          'padding': '0.75rem',
          'text-align': 'left',
          'border': '1px solid',
          '--uno': 'dark:border-dark-700 border-gray-300',
        },
        'th': {
          'background-color': '#f1f1f1',
          'font-weight': '600',
          '--uno': 'dark:bg-dark-800',
        },
        'tr:nth-child(even)': {
          'background-color': '#f9f9f9',
          '--uno': 'dark:bg-dark-900',
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      brand: {
        dark: '#1D2D4F',
        light: '#1D2D4F',
      },
      element: {
        dark: '#050505',
        light: '#fffffffa',
      },
    },
    fontFamily: {
      sans: 'Montserrat, system-ui, sans-serif',
      mono: 'Montserrat, monospace',
    },
  },
  shortcuts: {
    'core-theme':
      'bg-element-light dark:(bg-element-dark text-white) text-black',
    'core-border': 'dark:b-dark4 b-gray-3 b-1 b-solid',
    'core-ui': 'dark:(bg-dark9 text-white) bg-gray-100 text-black',
  },
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|md|html)($|\?)/],
    },
  },
})
