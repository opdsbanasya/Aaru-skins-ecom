/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#3a625f',
        'primary-light': '#f3f3f4',
        'secondary-dark': '#0d0c22',
        'secondary-light': '#9e9ea7',
        'highlight': '#98e6fe',
        'shadow': 'rgba(247,216,228,0.1)',
        'danger': '#dc1425',
      },
      boxShadow: {
        'upper-shadow': '0 -10px #000',
        'br': '4px 4px #000'
      },
      
    },
  },
  plugins: [],
}

