/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vert': '#617f67',
        'creme': '#fff6e7',
      },
      fontFamily: {
        inter: ['Inter'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

