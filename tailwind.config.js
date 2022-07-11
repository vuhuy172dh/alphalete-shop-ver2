module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', //notice: not space after trailing comma like: {js, ts, jsx}
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: { max: '768px' },
      md: { max: '1024px' },
      lg: { min: '1024px' }
    },
    letterSpacing: {
      tight: '-.015em'
    },
    extend: {
      height: {
        'half-screen': '50vh'
      },
      colors: {
        primary: 'hsl(var(--color-primary), 1)',
        primary_10: 'hsla(var(--color-primary), 0.1)',
        primary_20: 'hsla(var(--color-primary), 0.2)',
        primary_30: 'hsla(var(--color-primary), 0.3)',
        primary_40: 'hsla(var(--color-primary), 0.4)',
        primary_50: 'hsla(var(--color-primary), 0.5)',
        primary_60: 'hsla(var(--color-primary), 0.6)',
        primary_70: 'hsla(var(--color-primary), 0.7)',
        primary_80: 'hsla(var(--color-primary), 0.8)',
        primary_90: 'hsla(var(--color-primary), 0.9)',
        secondary: 'hsl(var(--color-secondary), 1)',
        secondary_20: 'hsla(var(--color-secondary), 0.2)',
        secondary_30: 'hsla(var(--color-secondary), 0.3)',
        secondary_40: 'hsla(var(--color-secondary), 0.4)',
        secondary_50: 'hsla(var(--color-secondary), 0.5)',
        secondary_60: 'hsla(var(--color-secondary), 0.6)',
        secondary_70: 'hsla(var(--color-secondary), 0.7)',
        secondary_80: 'hsla(var(--color-secondary), 0.8)',
        secondary_90: 'hsla(var(--color-secondary), 0.9)'
      }
    }
  },
  plugins: []
};
