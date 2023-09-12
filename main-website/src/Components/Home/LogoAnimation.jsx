
import { motion } from 'framer-motion';

function LogoAnimation() {
    const animateVariants = {
        initial: { y: -1000 }, // Adjust this value to match the final y value
        animate: {
          y: -1000,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: 'linear',
            },
          },
        },
        exit: {
          y: -1000, // Adjust this value to match the initial y value
        },
        transition: {
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease:'linear',
            },
          },
      };
      
    return (
        <section className="  md:relative bg-[var(--deep-blue)] p-10 md:flex z-[9] overflow-hidden">
            <article className='md:max-w-[50%] text-[var(--white)]'>
            <h2 className='text-[50px] leading-[1.20] font-semibold md:w-[700px] text-center text-white'>&quot;Endorsed by the<br/> Biggest Brands
<br/>Across the<br/> Globe&quot;</h2> 
<p className='hidden md:block mt-5 text-center w-[650px]  mx-auto'>&quot;See for yourself why clients and brands<br/>
prefer us over our closest rival.&quot;</p>
            </article>
            <motion.figure
            variants={animateVariants} 
            animate='animate'
            exit='exit'
            className='hidden md:block absolute top-0 right-0 z-[5] overflow-hidden '>
    <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421651/rocktea-main-website/assets/logo-animations_aggj4v.png' width={500} height={250} alt='animation' className='shadow-2xl' />
            </motion.figure>
           
 
        </section>
    )
}

export default LogoAnimation
