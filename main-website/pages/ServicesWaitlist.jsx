//import React from 'react'
import Plumber from '../src/assets/Plumber-icon.svg'
import Fashion from '../src/assets/fashion-icon.svg'
import Bricklayer from '../src/assets/bricklayer.svg'
import Mechanic from '../src/assets/mechanic.svg'
import Laundry from '../src/assets/laundry-icon.svg'
export default function ServicesWaitlist() {
    return (
        <div className="relative ">
              <div className="absolute -left-[20%] rounded-full -top-10 z-[-1] bg-blur w-[50%] h-[400px] bg-[#fcfcfc]">mk</div>
        <div className=" py-14 mt-10 flex flex-col items-center justify-center gap-y-5 max-w-[1300px] mx-auto">
          
           <h1 className="text-[2.3rem] mt-10 font-semibold tracking-wider">COMING SOON</h1>
           <p className='text-[#CAC4D0] text-[1.2rem] -mt-4'>We’re working on something great!</p>

           <article className="mt-10 text-center">
           <p className='text-[#49454F] text-[1.2rem] font-light'>Get notified when we launch.</p>

           <form action="" className="flex items-center gap-x-4">
            <input type="text" placeholder='Enter your email' className="placeholder:text-[#79747E]" />
            <button className=" bg-orange w-[120px] xsm:w-[150px] px-3 h-10 mt-4 rounded-lg whitespace-nowrap " >
             Send
            </button>
           </form>
           </article>

           <div className="bg-[#0858d1] pt-5 px-8 pb-8 rounded-2xl w-[90%] mt-8">
            <h4 className="text-center text-md text-white">Available Services</h4>
             
<article className='grid grid:cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center justify-center  w-full gap-x-5 gap-y-7 mt-5'>
    <div className='flex items-center bg-white rounded-md py-1 px-2'>
        <img src={Fashion} width={25} height={25} alt="fashion designer" />
        <span>Fashion Designer</span>
    </div>
    <div className='flex items-center px-3 bg-white rounded-md py-1'>
        <img src={Bricklayer} width={25} height={25} alt="fashion designer" />
        <span>Bricklayer</span>
    </div>
    <div className='flex items-center px-3 bg-white rounded-md py-1'>
        <img src={Mechanic} width={25} height={25} alt="fashion designer" />
        <span>Mechanic</span>
    </div>
    <div className='flex items-center gap-x-1 px-3 bg-white rounded-md py-1'>
        <img src={Laundry} width={25} height={25} alt="fashion designer" />
        <span>Laundry</span>
    </div>
    <div className='flex items-center gap-x-1 px-3 bg-white rounded-md py-1'>
        <img src={Plumber} width={25} height={25} alt="fashion designer" />
        <span>Plumber</span>
    </div>
    <div className='flex items-center bg-white rounded-md py-1'>
        <img src={Fashion} width={25} height={25} alt="fashion designer" />
        <span>Fashion Designer</span>
    </div>
    <div className='flex items-center px-3 gap-x-1 bg-white rounded-md py-1'>
        <img src={Mechanic} width={25} height={25} alt="fashion designer" />
        <span>Mechanic</span>
    </div>
    <div className='flex items-center gap-x-1 bg-white rounded-md py-1'>
        <img src={Bricklayer} width={25} height={25} alt="fashion designer" />
        <span>Bricklayer</span>
    </div>
    <div className='flex items-center bg-white rounded-md py-1'>
        <img src={Fashion} width={25} height={25} alt="fashion designer" />
        <span>Fashion Designer</span>
    </div>
</article>
           </div>
        </div>
        </div>
    )
}
