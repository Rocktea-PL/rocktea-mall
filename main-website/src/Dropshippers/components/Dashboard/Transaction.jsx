//import { useState } from "react";
import '../../../styles/Dashboard.css'
import DoughnutChart from './DougnutChart'

export default function Transaction() {
    
    
      return (
    <div className='px-3 mt-5 '>
       <div className="bg-white mb-5 rounded-lg w-auto h-[50px] flex items-center gap-3 px-5">
            <span className="border-r-[1.5px] border-r-gray-400 text-gray-400 px-2">
              Weekly
            </span>
            <span className="border-r-[1.5px] border-r-gray-400 px-2 text-gray-400">
              Monthly
            </span>
            <span>Yearly</span>
          </div> 
          <article className='bg-white rounded-md flex flex-col items-center justify-center'>
            <h3 className='font-semibold text-md'>Transaction History</h3>
     <DoughnutChart />
     <div className='flex flex-col gap-y-5 mt-5'>
        <div className='bg-[#fcfcfc] p-3 flex flex-col items-center justify-center gap-y-2 lg:gap-0  leading-[1] rounded-md'>
            <p className='text-black opacity-[0.5]'>17 Aug, 2023 <span>7:30pm</span></p>
            <h3 className='text-blue font-bold text-md tracking-wide'>N50,000.00</h3>
            <p className='text-[18px]'>Withdrawn to your Account</p>
        </div>
        <div className='bg-[#fcfcfc] p-3 flex flex-col items-center justify-center gap-y-2 lg:gap-0  leading-[1] rounded-md'>
            <p className='text-black opacity-[0.5]'>17 Aug, 2023 <span>7:30pm</span></p>
            <h3 className='text-blue font-bold text-md tracking-wide'>N50,000.00</h3>
            <p className='text-[18px]'>Withdrawn to your Account</p>
        </div>
        <div className='bg-[#fcfcfc] p-3 flex flex-col items-center justify-center gap-y-2 lg:gap-0  leading-[1] rounded-md'>
            <p className='text-black opacity-[0.5]'>17 Aug, 2023 <span>7:30pm</span></p>
            <h3 className='text-blue font-bold text-md tracking-wide'>N50,000.00</h3>
            <p className='text-[18px]'>Withdrawn to your Account</p>
        </div>
     </div>
          </article>
    </div>
  )
}