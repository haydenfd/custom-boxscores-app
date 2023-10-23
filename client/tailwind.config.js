const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nba-primary-blue": "#17408B",
        "nba-primary-red": "#C9082A",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

