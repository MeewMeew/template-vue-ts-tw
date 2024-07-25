import type { Config } from 'tailwindcss'
// @ts-ignore
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border)/<alpha-value>)',
        input: 'hsl(var(--input)/<alpha-value>)',
        ring: 'hsl(var(--ring)/<alpha-value>)',
        background: 'hsl(var(--background)/<alpha-value>)',
        foreground: 'hsl(var(--foreground)/<alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary)/<alpha-value>)',
          foreground: 'hsl(var(--primary-foreground)/<alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary)/<alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground)/<alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive)/<alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground)/<alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted)/<alpha-value>)',
          foreground: 'hsl(var(--muted-foreground)/<alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent)/<alpha-value>)',
          foreground: 'hsl(var(--accent-foreground)/<alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover)/<alpha-value>)',
          foreground: 'hsl(var(--popover-foreground)/<alpha-value>)'
        },
        card: {
          DEFAULT: 'hsl(var(--cards)/<alpha-value>)',
          foreground: 'hsl(var(--cards-foreground)/<alpha-value>)'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      gridTemplateColumns: {
        'max-content-2': 'max-content max-content',
        '20px-1fr': '20px max-content 1fr',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)/<alpha-value>' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)/<alpha-value>' },
          to: { height: '0' }
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)/<alpha-value>' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)/<alpha-value>' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out'
      }
    }
  },
  plugins: [animate, addVariablesForColors]
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))
  addBase({ ':root': newVars })
}