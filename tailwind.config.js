/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      manrope:["Manrope","sans-serif"],
      covered:["Covered By Your Grace","cursive"]
    } , 
  },
  plugins: [],
}

