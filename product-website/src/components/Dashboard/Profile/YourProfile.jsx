import { useStoreContext } from "../../../Hooks/UserAuthContext"

function YourProfile() {
    const {storeUser} = useStoreContext()
    return (
        <div>
            <div className="mt-4">
              <h3 className="text-darkblue bg-white py-3 px-9 text-[22px] font-medium rounded-md">
                Profile Settings
              </h3>
             
           <article className='bg-white p-2  rounded-md mt-5 '>
           <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
                    Personal Information
                  </h4>
                  <hr />
              <div className="flex items-center px-5 gap-5 mt-8">
              <div className="relative">
           <img 
            className=' w-[150px] h-[150px] object-cover rounded-full '
            src={storeUser.profile_image} alt="" />
        <div className='absolute bottom-0 right-[8px]  bg-white opacity-[0.9] w-[50px] h-[50px] flex items-center justify-center  rounded-full   cursor-pointer border border-gray-300'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M19 6V4H21V6H23V8H21V10H19V8H17V6H19ZM6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.24312 5.37261 7.44827 5.03326 7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159C9.15916 6.06908 8.95096 6.41348 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" fill="black"/>
</svg></div>


</div>
<div>
          
<h4 className="text-md font-semibold">{storeUser.first_name} {storeUser.last_name}</h4>
<h4>{storeUser.email}</h4>
            </div> 
              </div>
           
              <form action="" >
                <div className="bg-white mt-5 p-4 rounded-md">
                  
                  <div className="grid lg:grid-cols-2 gap-x-5 px-5 profile-input">
                    <label htmlFor="">
                      First Name
                      <input
                        type="text"
                        
                        
                        placeholder="First Name"
                      />
                    </label>
                    <label htmlFor="">
                      Last Name
                      <input
                        type="text"
                       
                       
                        placeholder="Last Name"
                      />
                    </label>
                    <label htmlFor="">
                      Email
                      <input
                        type="text"
                        
                        placeholder="Email"
                      />
                    </label>
                    <label htmlFor="">
                      Phone
                      <input
                        type="text"
                        
                        placeholder="Phone"
                      />
                    </label>
                  </div>
                </div>
          
                <button className="bg-orange h-12 w-[150px] rounded-md flex items-center justify-center mx-auto">Save Changes</button>
              
              </form>
       </article>
       
       <article className='bg-white p-2  rounded-md mt-5 '>
           <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
                    Store Information
                  </h4>
                  <hr />
              <div className="flex items-center px-5 gap-5 mt-8">
              <div className="relative">
           <img 
            className=' w-[150px] h-[150px] object-cover rounded-full '
            src={storeUser.profile_image} alt="" />
        <div className='absolute bottom-0 right-[8px]  bg-white opacity-[0.9] w-[50px] h-[50px] flex items-center justify-center  rounded-full   cursor-pointer border border-gray-300'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M19 6V4H21V6H23V8H21V10H19V8H17V6H19ZM6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.24312 5.37261 7.44827 5.03326 7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159C9.15916 6.06908 8.95096 6.41348 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" fill="black"/>
</svg></div>


</div>
<div>
          
<h4 className="text-md font-semibold">{storeUser.first_name} {storeUser.last_name}</h4>
<h4>{storeUser.email}</h4>
            </div> 
              </div>
           
              <form action="" >
                <div className="bg-white mt-5 p-4 rounded-md">
                  
                  <div className="grid lg:grid-cols-2 gap-x-5 px-5 profile-input">
                    <label htmlFor="">
                      First Name
                      <input
                        type="text"
                        
                        
                        placeholder="First Name"
                      />
                    </label>
                    <label htmlFor="">
                      Last Name
                      <input
                        type="text"
                       
                       
                        placeholder="Last Name"
                      />
                    </label>
                    <label htmlFor="">
                      Email
                      <input
                        type="text"
                        
                        placeholder="Email"
                      />
                    </label>
                    <label htmlFor="">
                      Phone
                      <input
                        type="text"
                        
                        placeholder="Phone"
                      />
                    </label>
                  </div>
                </div>
          
                <button className="bg-orange h-12 w-[150px] rounded-md flex items-center justify-center mx-auto">Save Changes</button>
              
              </form>
       </article>
       
       <article className='bg-white p-2  rounded-md mt-5 '>
           <h4 className="mb-5 mx-5 text-[20px] text-darkblue mt-4 lg:text-start whitespace-nowrap font-medium">
                    Bank Information
                  </h4>
                  <hr />
              <div className="flex items-center px-5 gap-5 mt-8">
              <div className="relative">
           <img 
            className=' w-[150px] h-[150px] object-cover rounded-full '
            src={storeUser.profile_image} alt="" />
        <div className='absolute bottom-0 right-[8px]  bg-white opacity-[0.9] w-[50px] h-[50px] flex items-center justify-center  rounded-full   cursor-pointer border border-gray-300'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M19 6V4H21V6H23V8H21V10H19V8H17V6H19ZM6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.24312 5.37261 7.44827 5.03326 7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159C9.15916 6.06908 8.95096 6.41348 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" fill="black"/>
</svg></div>


</div>
<div>
          
<h4 className="text-md font-semibold">{storeUser.first_name} {storeUser.last_name}</h4>
<h4>{storeUser.email}</h4>
            </div> 
              </div>
           
              <form action="" >
                <div className="bg-white mt-5 p-4 rounded-md">
                  
                  <div className="grid lg:grid-cols-2 gap-x-5 px-5 profile-input">
                    <label htmlFor="">
                      First Name
                      <input
                        type="text"
                        
                        
                        placeholder="First Name"
                      />
                    </label>
                    <label htmlFor="">
                      Last Name
                      <input
                        type="text"
                       
                       
                        placeholder="Last Name"
                      />
                    </label>
                    <label htmlFor="">
                      Email
                      <input
                        type="text"
                        
                        placeholder="Email"
                      />
                    </label>
                    <label htmlFor="">
                      Phone
                      <input
                        type="text"
                        
                        placeholder="Phone"
                      />
                    </label>
                  </div>
                </div>
          
                <button className="bg-orange h-12 w-[150px] rounded-md flex items-center justify-center mx-auto">Save Changes</button>
              
              </form>
       </article>
       
        </div>
        </div>
    )
}

export default YourProfile
