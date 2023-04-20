/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {
      screens: {
        tablets: { max: '840px' },
        'sm-tablets': { max: '640px' },
        phones: { max: '600px' },
        'sm-phones': { max: '500px' },
        'xs-phones': { max: '430px' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
