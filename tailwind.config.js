/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Some useful comment
    fontFamily: {
      Quicksand: ['Quicksand'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
