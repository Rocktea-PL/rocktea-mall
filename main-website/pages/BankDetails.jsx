
import { useGlobalContext } from '../src/hooks/context';
function BankDetails() {
   const {handleFormSubmit} = useGlobalContext()
    return (
      <section className="relative h-screen w-full gap-20 flex flex-col md:flex-row items-center justify-center md:justify-start p-0 m-0 md:overflow-hidden">
      
    <figure className="hidden md:max-w-[50%]  w-[50%] md:block md:h-screen  ">
      <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421632/rocktea-main-website/assets/bank-bg_l78xfu.png'
       alt="" className="w-full h-full object-cover" />
    </figure>
    <div className="form">
    
        <h2 className="mt-0 text-center leading-[1.5rem]">Your money is yours</h2>
        <h4 className="text-center text-[var(--yellow)] mb-4 mt-3">Payment Details</h4>
        <div className="scrollable-container">
        <form>
             <div className='grid md:grid-cols-1 gap-2 px-5  mb-10'>
             <label className="">
                <span className='flex items-center gap-2 mt-3'>
                Name on Card 
                 <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421630/rocktea-main-website/assets/bankstore_jhiemq.svg' />
                </span>
             <input type='text' placeholder='John Doe'  />
             </label>
             <label className="">
                <span className='flex items-center gap-2 mt-2'>
                Card Number
                 <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421630/rocktea-main-website/assets/bankstore_jhiemq.svg' />
                </span>
             <input type='text' placeholder='1234/5678/9012/3456'  />
             </label>
             <label className="">
                <span className='flex items-center gap-2 mt-2'>
                CVV/CVC
                 <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421630/rocktea-main-website/assets/bankstore_jhiemq.svg' />
                </span>
             <input type='text' placeholder='123'  />
             </label>
             <label className="">
                <span className='flex items-center gap-2 mt-3'>
                Expiry date
                 <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421630/rocktea-main-website/assets/bankstore_jhiemq.svg' />
                </span>
             <input type='text' placeholder='19/04'  />
             </label>
             
             
             </div>
             
           </form>
           <div className="flex items-center justify-center ">
            <button className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg" onClick={handleFormSubmit}>
              continue
            </button>
          </div>
           </div>
           
           </div>
           </section>

)
}

export default BankDetails;

             