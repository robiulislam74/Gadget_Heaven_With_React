/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        bannerBg:'rgb(149, 56, 226)',
      },
      backgroundImage:{
        'bannerImg': "url('./assets/images/banner.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

