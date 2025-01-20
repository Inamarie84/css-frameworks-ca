/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#ED5AB4",
        "light-custom-pink": "#F9BFD9",
        teal: "#4C9F70",
        "hover-teal": "#3A7D58",
        "dark-gray": "#333333",
        "button-grey": "#1F2937",
        "light-gray": "#F5F5F5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // For text
        heading: ["Oswald", "sans-serif"], // For headings
      },
    },
  },
  plugins: [],
};
