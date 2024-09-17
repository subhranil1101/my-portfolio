/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '476px',
      'sm': '640px',
      'md': '787px',
      'bs': '900px',
      'lg': '1025px',
      'lxl': '1180px',
      'xl': '1313px',
      '2xl': '1536px',

      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1312px' },
      'lxl-mx': { 'max': '1179px' },
      'lg-mx': { 'max': '1024px' },
      'bs-mx': { 'max': '899px' },
      'md-mx': { 'max': '786px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
    },
    extend: {
      colors: {
        bgColor: "#0A192F",
        primaryColor: "#64FFDA",
        textColor: "#8892B0"
      },

    },
    keyframes: {
      "background-position-spin": {
        "0%": { backgroundPosition: "top center" },
        "100%": { backgroundPosition: "bottom center" },
      },
    },

  },
  plugins: [],
}
