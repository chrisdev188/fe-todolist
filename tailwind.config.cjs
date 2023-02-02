/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        circle: 'url("/images/icon-circle.svg")',
        checked: 'url("/images/icon-check.svg")',
      },
      fontFamily: {
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "todo-item": "1rem auto 1rem",
      },
    },
  },
  plugins: [],
};
