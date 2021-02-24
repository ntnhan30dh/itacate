module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
     '15': '15px',
    },
    extend: {
      colors: {
        green: "#0b9446",
        black: "#2a2c2a",
        red: "#d71d24",
        yellow: "#ffd250",
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
