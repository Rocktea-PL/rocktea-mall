import Arrow from '../../assets/arrow.svg'
import heroImg from '../../assets/hero-img.jpg'
//import Wooden from '../assets/wooden.png'
export default function Hero() {
  return (
    <section className=" mt-[5rem] h-[90vh] px-5 pt-2 pb-5 md:mx-16 rounded-lg" style={{ backgroundImage: `url(${heroImg})`, 
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat'
    }}>
      <div className=' mt-[5rem] md:mt-[7rem] px-10'>
      <h1 className='capitalize font-["Signika"] text-[50px] md:text-[60px] leading-tight font-bold'>Essential for <br/> daily use...</h1>
      <button className='flex items-center gap-2 mt-12 md:mt-16 bg-[var(--product-bg)] p-3'>Shop Now <img src={Arrow} width={35} height={50}  alt='' className='arrow' /></button> 
      </div>
     
    

    </section>
  )
}
