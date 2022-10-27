/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("flowbite/plugin")
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
        'cool-gray': '#F9FAFB',
      }
    },
  },
}
