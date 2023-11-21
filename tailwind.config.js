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
        "tm" : "400px",
        "ym" : "600px"
      }
    },
  },
  plugins: [],
}

