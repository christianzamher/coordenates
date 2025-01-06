import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blackBG: "060215",
        woodLogo: "#BC976C",
        greenT: "#7ACAB4",
        gray100: "#E6E5E5",
        freshMint:"#50EDC2",
        softWood: "#DECBB5",
        gray300: "#C2BDBD",
        white: "#F9F9F9",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },

    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

// module.exports = {

//   plugins: [
//       require('flowbite/plugin')
//   ]

// }