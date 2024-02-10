/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['Bebas Neue', "sans-serif"],
        "roboto": ['Roboto', "sans-serif"]
      },
      screens: {
        "max-mobile": "426px",
        "max-tablet": "769px",
        "min-laptop": "1024px",
        "max-laptop": "1441px",
        "window-screen": "1980px",

      }
    },
  },
  plugins: [],
}