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
        solarYellow: "#FFCD38",
        solarOrange1: "#F7A609",
        solarOrange2: "#EF7D05",
      }
    },
  },
  plugins: [],
}

