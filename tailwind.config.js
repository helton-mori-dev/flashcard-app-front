/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        defaultBlue: '#2563eb',
        lightBlue: '#93c5fd',
      },
      fontFamily: {
        monstserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
