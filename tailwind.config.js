/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'sans': ['Roboto', 'system-ui', 'sans-serif'], // Update default sans font
      },
    },
  },
  plugins: [],
}