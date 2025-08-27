/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.4)',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}