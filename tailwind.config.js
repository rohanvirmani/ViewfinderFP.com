/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add a new 'roboto' font family
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}