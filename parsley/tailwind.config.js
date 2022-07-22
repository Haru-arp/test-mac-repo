/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#628D54',
        'sub1' : '#8EC281',
        'sub2' : '#496548',
        'font1' : '#333333',
        'font2' : '#84898C',
        'font3' : '#F3F3F3',
        'extra1' : '#F0E2D0',
        'extra2' : '#AA8976',
      }
    },
  },
  plugins: [],
}
