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
        'max-md': {'max': '767px'},
      },
      colors:{
        orange:'#ffa500',
      },
      fontSize:{
        xsm:'0.8rem',
        sm: '1rem',
        md:'1.5rem',
        lg:'2rem',
        xl:'2.5rem,'
      }
    },
  },
  plugins: [],
}

