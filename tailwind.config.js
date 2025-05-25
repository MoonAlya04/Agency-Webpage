/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

}

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#60E1CB',
        dark: '#292525',
        accent: '#7BC0E3',

        // Dark mode colors
        'primary-dark': '#3FB9A7',
        'dark-dark': '#1C1C1C',
        'accent-dark': '#5AAED2',
      },
    },
  },
  plugins: [],
}
