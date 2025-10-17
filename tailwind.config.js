/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Updated scheme: cool neutral base with warm highlight
        primary: colors.slate,
        accent: colors.amber,
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
