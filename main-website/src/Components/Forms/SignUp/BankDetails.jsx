
import BankIcon from '../../../assets/bankstore.svg'
function BankDetails() {
    return (
        <form>
             <div className='grid md:grid-cols-2 gap-4 px-5 md:mt-10 mb-10'>
             <label className="">
                <span className='flex items-center gap-2 mt-3'>
                Name on Card 
                 <img src={BankIcon} />
                </span>
             <input type='text' placeholder='John Doe'  />
             </label>
             <label className="">
                <span className='flex items-center gap-2 mt-2'>
                Card Number
                 <img src={BankIcon} />
                </span>
             <input type='text' placeholder='1234/5678/9012/3456'  />
             </label>
             <label className="">
                <span className='flex items-center gap-2 mt-2'>
                CVV/CVC
                 <img src={BankIcon} />
                </span>
             <input type='text' placeholder='123'  />
             </label>

             <label className="md:mb-5">
                <span className='flex items-center gap-2 mt-3'>
                Expiry date
                 <img src={BankIcon} />
                </span>
             <input type='text' placeholder='19/04'  />
             </label>
             
             
             
             </div>
             
             
           </form>
           
        
    )
}

export default BankDetails;
