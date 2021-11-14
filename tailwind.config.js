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
        },
        gray: {
          ...colors.gray,
          200: '#8b949e',
          400: '#30363d',
          700: '#0d1117'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
