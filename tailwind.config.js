/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}"
  ],
  theme: {
    extend: {
      height: {
        "80px": "5rem"
      },
      maxWidth: {
        "250px": "15.625rem"
      },
      colors: {
        solarYellow1: "#FFCC39",
        solarBgHover: "#F7A811"
      }
    },
  },
  plugins: [],
}

