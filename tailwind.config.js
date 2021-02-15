module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        green: '#0b9446',
        black: '#2a2c2a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
