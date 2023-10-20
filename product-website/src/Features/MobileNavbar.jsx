import {HiMiniBars3BottomLeft, HiOutlineShoppingBag} from 'react-icons/hi2'
import ProfileDropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'

function MobileNavbar({store}) {
    const navigate = useNavigate()
    return (
        <div className='flex items-center !justify-between md:px-5'>

            <span className='text-lg cursor-pointer'><HiMiniBars3BottomLeft/></span>
           <div  className="">
          {!store.logo ? 
           <img
           src={store?.logo}
           alt="logo"
           width={50}
           height={50}
           className="rounded-full"
           
          />
          
          : <div className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md">
             {store.name.substring(0, 2)}
          </div>
}
         </div> 
         <div className="relative flex items-center justify-between gap-3">
          
          <span
            className=" relative p-2 z-0 text-[1.2rem] cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <HiOutlineShoppingBag />
            <p className="absolute bg-red-500 w-[15px] flex items-center justify-center rounded-full h-[15px] -top-1 right-0 z-10 text-[12px] text-white">
              1
            </p>
          </span>
          <ProfileDropdown />
        </div>
       
        </div>
    )
}

export default MobileNavbar
