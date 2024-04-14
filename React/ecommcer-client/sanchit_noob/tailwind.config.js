const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Josefin': ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        'Lato': ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}