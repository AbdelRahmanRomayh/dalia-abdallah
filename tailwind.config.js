/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-light': '#7dd3fc', // Light teal for logo
      },
      maxWidth: {
        'app': '1369px',
      },
    },
  },
  plugins: [],
}

