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
        'blueMain': '#1190CB',
        'grayMain': '#898383',
        'grayNav': '#E5E5E5',
      },

      fontFamily: {
        'fontLogo': 'Heebo, sans-serif',
      },
    },

  },
  plugins: [],
}

