/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xxsm': {'max': '320px'},
        'xsm':'330px',
        'sm':'500px',
        'md':'700px',
        'lg':'960px',
        'xl':'1200px',
        'xxl':'1400px',
        'max-md': {'max': '850px'},
        'big': '1700px'
      },
      colors:{
        orange:'#ffa500',
        ash:'#CAC4D0',
        gold:'#C99C00',
        darkblue:'#002440',
        lightgray:'#f9f9f9',
        blue:'#002440',
      },
      fontSize:{
        xsm:'0.8rem',
        sm: '1rem',
        md:'1.5rem',
        lg:'2rem',
        xl:'2.5rem,',
      },
      
      backgroundImage:{
        'newsletter-big':'url("https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399800/rocktea-main-website/assets/Newstter_Bg_Image_s5rqys.png")',
      },
    },
  },
  plugins: [],
}

