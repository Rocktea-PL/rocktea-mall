

function UserDetails() {
    return (
        <form className="flex flex-col md:mb-6">
             <div className='grid md:grid-cols-2 gap-2 px-5 md:mt-5'>
             <label className="">Name
             <input type='text' placeholder='Surname first'  />
             </label>
             <label className="flex flex-col">Email
             <input type='email' placeholder='example@mail.com'  />
             </label>
             <label>Phone Number
             <input type='tel' placeholder='08123456789' />
             </label>
             <label>Date of birth
             <input type='date' placeholder='DD/MM/YYYY' />
             </label>
             
             <label>Password
             <input type='password' placeholder='**********************' />
             </label>
             <label>Image
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

export default UserDetails;
