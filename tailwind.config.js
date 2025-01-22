/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', '!./node_modules/**/*'],
  theme: {
    extend: {
      boxShadow: {
        't-lg':
          '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -4px rgba(0, 0, 0, 0.1)', // Custom top shadow
      },
      backgroundImage: {
        'custom-bg': "url('/images/backgroundimage.jpg')",
      },
      colors: {
        'custom-pink': '#ED5AB4',
        'light-custom-pink': '#F9BFD9',
        teal: '#4C9F70',
        'hover-teal': '#3A7D58',
        'dark-gray': '#333333',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
