
function StoreDetails() {
    return (
        <form>
             <div className='grid md:grid-cols-2 gap-4 px-5 md:mt-5 md:mb-6'>
             <label className="">Store Name
             <input type='text' name="name" placeholder='Example & sons stores'  />
             </label>
             <label className="flex flex-col">Store Email
             <input type='email' placeholder='storeemail@gmail.com'  />
             </label>
             <label>TIN
             <input type='number' placeholder='Tin ' />
             </label>
             <label>Year of Establishment
             <input type='te' placeholder='(optional)' />
             </label>
             <label>Category
             <input type='tel' placeholder='(optional)' />
             </label>
             
             <label>Domain Name
             <input type='tel' placeholder='**********************' />
             </label>
             <label>Store Url
             <input type='tel' placeholder='**********************' />
             </label>
             <label>Store Logo
             <input type='file' className="border-none bg-transparent hidden"  />
             <div className="flex items-center justify-center outline-none w-[90%] mb-6 md:mb-3 mt-3">
             <div className="  bg-[var(--white)] border border-solid border-[var(--input-border)] w-full h-10 rounded-lg  "></div>
                <span className=" bg-[var(--yellow)] w-[100px] h-10 -ml-3 rounded-md flex items-center justify-center">Upload</span>
             </div>
             </label>
             
             </div>
             
            
           </form>
           
        
    )
}

export default StoreDetails;
