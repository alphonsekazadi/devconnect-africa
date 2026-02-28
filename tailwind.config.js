/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60a5fa', // blue-400
        accent: '#f97316', // orange-500
      },
    },
  },
  plugins: [],
}
