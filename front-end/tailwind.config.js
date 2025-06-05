/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#272727",
        "secondary": "#B09777",
        "text-color": "#797979",
        "header-color": "#FEFEFE",
        "card-color": "#323232",
        "hover-card": "#B19777"
      },
      fontSize: {
        "xs1": "10px",
        "xs2": "8px",
        "xs3": "6px"
      },
      fontFamily: {

        "Oswald": "oswald",
        "Didact-Gothic": "Didact Gothic"

      },

      screens: {
        "lg": "1100px"
      }


    },




    container: {
      center: true
    }





  },
  plugins: [function ({ addVariant }) {
    addVariant('child', '& > *')
    addVariant('child-hover', '& > *:hover')
  }

  ],
}

