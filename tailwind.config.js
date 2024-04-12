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
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

