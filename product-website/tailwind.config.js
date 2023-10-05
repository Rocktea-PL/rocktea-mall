/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        'xsm':'320px',
        'sm':'500px',
        'md':'700px',
        'lg':'960px',
        'xl':'1200px',
        'xxl':'1400px',
        'max-md': {'max': '767px'},
      },
      colors:{
        orange:'#ffa500',
        gold:'#C99C00',
      },
      fontSize:{
        xsm:'0.8rem',
        sm: '1rem',
        md:'1.5rem',
        lg:'2rem',
        xl:'2.5rem,',
      },
      boxShadow:{
        percentShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
      },
      backgroundImage:{
        'market':'url("https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399801/rocktea-main-website/assets/About_Us_2_rnw8se.png")'
      }
    },
  },
  plugins: [],
}