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
    },
      backgroundImage: {
      'hero-pattern': "url('./src/assets/bg-tela-inicial.jpg')",
    }
    }
  },
  plugins: [],
}
