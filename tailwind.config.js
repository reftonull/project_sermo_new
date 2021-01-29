const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        logo: ['Montserrat', 'system-ui'],
        navigation: ['Raleway', 'system-ui'],
      },
      fontSize: {
        md: '0.925em',
      },
      maxWidth: {
        xxs: '12rem',
        prose: '70ch',
      },
      maxHeight: {
        96: '35rem',
      },
      colors: {
        'dark-gray': '#171a28',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
