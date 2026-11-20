/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        primary: '#091D3E',
        secondary: '#33B9CB',
        dark: '#152847',
        'dark-light': '#1C2F4D',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(1.875rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-1.875rem)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(1.875rem)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 600ms ease-out both',
        slideInLeft: 'slideInLeft 600ms ease-out both',
        slideInRight: 'slideInRight 600ms ease-out both',
      },
    },
  },
  plugins: [
    // `animation-delay-100` … `animation-delay-1000` for staggered animations.
    function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'animation-delay': (value) => ({ animationDelay: value }) },
        { values: theme('animationDelay') }
      )
    },
  ],
}
