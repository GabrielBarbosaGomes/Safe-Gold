/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'bottom-4': 'center top -20rem',
      },

      colors: {
        'blueLogo': '#1190CB',
        'blueMain': '#003366',
        'grayMain': '#898383',
        'grayNav': '#E5E5E5',
        'teste': '#003366',
        'bgScreen': '#e8e8e8',
        'white': '#ffffff',
        'green': '#0097B2',
      },

      fontFamily: {
        'fontLogo': 'Heebo, sans-serif',
      },

      height: {
        'fullHeight': '100%',
      },
    },

  },
  plugins: [],
}

