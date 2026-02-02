/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {    colors: {
        'primary-blue': '#708cae',
      },},
  },
  plugins: [require("daisyui")],
}

