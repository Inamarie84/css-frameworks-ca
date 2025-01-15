/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // For text
        heading: ["Oswald", "sans-serif"], // For headings
      },
    },
  },
  plugins: [],
};
