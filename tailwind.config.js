const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*..vue",
    "./components/**/*.{js,vue,ts}",
    "./features/**/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./modules/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./formkit.config.js"
  ],
  theme: {
    extend: {
      colors: {
        main: "#f45c14",
        transparent: 'transparent',
        black: '#000000',
        white: '#FFFFFF',
        bg: {
          card: '#333333',
          dark: '#424141',
          light: '#FEF5EF'
        },
        body: {
          light: '#F4F4F4',
          dark: 'rgb(110, 117, 159)',
          ink500: '#7C8A90',
          ink800: '#263237'
        },
        ink: {
          200: "#999999",
          300: "#777777",
          400: "#555555",
          500: "#333333",
          600: "#11111",
        },
        primary: "#f45c14",
        secondary: "#FD7590"
      }
    }
  },
  plugins: [
    require('@formkit/themes/tailwindcss'),
    require('daisyui')
  ]
}