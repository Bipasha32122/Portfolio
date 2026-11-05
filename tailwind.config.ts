import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        orange: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
        dark: {
          950: '#0A0A0A',
          900: '#111111',
          800: '#1A1A1A',
          700: '#222222',
          600: '#2A2A2A',
          500: '#333333',
        },
      },
      animation: {
        'float':      'float 5s ease-in-out infinite',
        'float2':     'float 7s ease-in-out infinite reverse',
        'spin-slow':  'spin 18s linear infinite',
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'blink':      'blink 1s step-end infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        blink:   { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}
export default config
