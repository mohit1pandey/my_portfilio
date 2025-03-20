/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Define a custom screen size
      },
      maxWidth: {
        'screen-3xl': '1920px', // Allow max width for the new custom screen size
      },

    },
  },
  plugins: [],


}