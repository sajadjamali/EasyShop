/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xm" :"400px",
        "tm" : "570px",
        "ym" : "870px"
      }
    },
  },
  plugins: [],
}

