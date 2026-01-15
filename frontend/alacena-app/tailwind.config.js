/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        alacena: {
          50: '#f5f7ff',
          100: '#ede4ff',
          200: '#dcc8ff',
          300: '#c4a3ff',
          400: '#a876ff',
          500: '#8b5cf6',
          600: '#667eea',
          700: '#5a67d8',
          800: '#4c51bf',
          900: '#3f3b96',
        },
      },
    },
  },
  plugins: [],
}
