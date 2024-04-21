/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    '../components/**/*.{html,js}',
    './components/*.{html,js,jsx,tsx}',

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

