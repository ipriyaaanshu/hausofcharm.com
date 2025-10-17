/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8dfd5',
          300: '#dac6bb',
          400: '#c4a896',
          500: '#a88a73',
          600: '#8b6f5c',
          700: '#6b5447',
          800: '#4d3d32',
          900: '#3a2f28',
        },
        accent: {
          50: '#fdf8f3',
          100: '#fbf2e8',
          200: '#f7e4d1',
          300: '#f3d7b9',
          400: '#ebc99b',
          500: '#e3b87e',
          600: '#d4a262',
          700: '#c58b46',
          800: '#a67a3a',
          900: '#8b682f',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
