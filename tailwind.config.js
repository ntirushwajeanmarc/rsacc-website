/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#091D3E',
        secondary: '#33B9CB',
        accent: '#091D3E',
        dark: '#152847',
        'dark-light': '#1c2f4d',
        gray: {
          50: '#F8F8F8',
          100: '#E8E8E8',
          500: '#565872',
        }
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}