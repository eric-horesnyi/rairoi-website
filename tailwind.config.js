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
        'deep-navy': '#0A1929',
        'electric-blue': '#00D4FF',
        'navy-light': '#1A2B3D',
        'blue-light': '#E6F7FF',
        'gold': '#e0b06b',
        'lapis-blue': '#26619C',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

