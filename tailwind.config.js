/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'test': 'rgba(1, 1, 1, 0.1)',
    },
  },
  plugins: [],
}
