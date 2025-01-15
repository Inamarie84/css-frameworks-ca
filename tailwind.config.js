/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#ED5AB4", // Your custom pink
        teal: "#4C9F70", // Teal
        orange: "#FF7F32", // Orange
        "light-blue": "#A2D9FF", // Light Blue
        "soft-yellow": "#FFEE58", // Soft Yellow
        "dark-gray": "#333333", // Dark Gray for text
        "light-gray": "#F1F1F1", // Light Gray for backgrounds
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // For text
        heading: ["Oswald", "sans-serif"], // For headings
      },
    },
  },
  plugins: [],
};
