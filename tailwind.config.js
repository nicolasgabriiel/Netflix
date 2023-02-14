/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '0': '-100',
    },
      height: {
      '128': '1049px',
      '44': '167px',
      '40': '660px',
    },
    width: {
      '128': '450px',
    },
      backgroundImage: {
      'hero-pattern': "url('./src/assets/bg-tela-inicial.jpg')",
    },
    padding:{
      '5px': '60px 68px 40px 68px'
    },
    colors: {
      'regal-blue': '#33333',
    },
    }
  },
  plugins: [],
}
