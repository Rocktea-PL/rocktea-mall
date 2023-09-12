import Button from '../Button'

function Hero() {
  return (
    <section className='mt-[3.5rem] lg:mt-[8rem] flex flex-col md:flex-row justify-center  gap-20 md:gap-[10rem] '>
 <article className=' mt-8 '>
   <h1 className='text-[3rem] sm:text-[5rem] font-[900] text-[var(--deep-blue)] whitespace-nowrap text-center md:text-start'>You Can Earn<br/> More With Ease</h1> 
   <p className='font-["Sora"]  mt-5 mb-8 text-center md:text-start w-[505px]'>You can earn as much as 250k a month. Unlocking financial
potential has never been easier.</p>
<div className='flex items-center justify-center gap-5 md:justify-start'>
<Button text='Get Started' />
<button className='flex items-center justify-center border border-solid border-[var(--yellow)] w-[150px] p-3 rounded-lg '>
       Learn More
    </button>
</div>
 </article>
 <figure className='relative flex items-center justify-center z-10'>
    <div className='relative bg-[var(--deep-blue)] w-[400px] h-[550px] mt-3 rounded-[2rem]'>

    </div>
    <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421644/rocktea-main-website/assets/receptionist_vbpllv.png' width={400} height={350} className='absolute bottom-0 ' />
 </figure>
 
  

    </section>
  )
}

export default Hero