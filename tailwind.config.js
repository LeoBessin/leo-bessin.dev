/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-100': '#FFFCE1',
      'primary-200': '#E0DDC3',
      'primary-300': '#9B9880',
      'accent-100': '#7F7F7F',
      'accent-200': '#FFFFFF',
      'text-100': '#FFFFFF',
      'text-200': '#E0E0E0',
      'text-300': '#000000',
      'bg-100': '#0E100F',
      'bg-200': '#161616',
      'bg-300': '#2C2C2C',
    },
    extend: {
      fontFamily: {
        primary:'Synonym-Variable'
      }
    },
  },
  plugins: [],
}

