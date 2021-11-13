const defaultTheme = require('tailwindcss/defaultTheme');
const {colors} = defaultTheme
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      width: {
        ...defaultTheme.width,
        '48': '48%',
      },
      colors: {
        blue: {
          ...colors.blue,
          900: '#218bff',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
