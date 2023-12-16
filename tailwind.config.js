/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/website/**/*.js",
    "./templates/**/*.html.twig",
    "./assets/website/**/**/*.js",
    "./templates/**/**/*.html.twig",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
