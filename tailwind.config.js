/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
    screens: {
      'mobile': '425px',

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

