/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'], 
        'titan-one': ['Titan One', 'cursive']
      },
      colors: {
        'blue-bayou':'#1069B2',
        'pure-blue': '#1C4ED8',
        'navy-blue': '#1F2937',
      }
    },
  },
}
