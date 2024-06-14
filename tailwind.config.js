/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        headline: "#272343",
        paragraph: "#2d334a"
      },
      backgroundImage:{
        circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

