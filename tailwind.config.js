/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'] 
      },
      colors: {
        'blue-bayou':'#1069B2',
      }
    },
  },
  plugins: [],
}
