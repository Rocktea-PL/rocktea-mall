import { useState } from "react";
import { Link } from "react-router-dom";
//import { FaRegUser } from "react-icons/fa";
import {
  RiSettings4Fill,
 RiUser3Line,
  RiLogoutCircleRLine,
  
} from "react-icons/ri";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { useAuthContext } from "../../hooks/AuthContext";
//import { useEffect } from "react";
/*const dropdown = [
  {
    id: 3,
    title: "Profile",
    icon: <RiUser3Line />,
  },
  {
    id: 1,
    title: "Settings",
    icon: <RiSettings4Fill />,
  },
 
  
 
  {
    id: 5,
    title: "Log Out",
    icon: <RiLogoutCircleRLine />,
   
  },
];
*/
const ProfileDropdown = () => {
  const { userData,logOut } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 //console.log(userData)
  return (
    <>
      <div
        className=" flex items-center justify-center gap-[0.3rem]  p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
       <img src={userData?.profile_image} alt="" />
        <span className="hidden md:block">{userData?.first_name}</span>{isDropdownOpen ? <RxCaretUp /> : <RxCaretDown />}
      </div>


      { isDropdownOpen && (
        <div className="origin-top-right absolute -right-5 -bottom-[11.8rem] mt-2 w-[12rem] rounded-md shadow-lg bg-white  focus:outline-none">
          <div
            className="py-3"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            
              <>
                <Link >
                  <div
                    
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-b-solid border-b-black last:border-b-0"
                  >
                    <span><RiUser3Line/></span>

                    <button
                      className="whitespace-nowrap"
                      role="menuitem"
                     
                    >
                    Profile
                    </button>
                  </div>
                </Link>
                <Link >
                  <div
                    
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-b-solid border-b-black last:border-b-0"
                  >
                    <span><RiSettings4Fill /></span>

                    <button
                      className="whitespace-nowrap"
                      role="menuitem"
                    
                    >
                      Settings
                    </button>
                  </div>
                </Link>
                <Link >
                  <div
                    
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-b-solid border-b-black last:border-b-0"
                  >
                    <span><RiLogoutCircleRLine /></span>

                    <button
                      className="whitespace-nowrap"
                      role="menuitem"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </div>
                </Link>
              </>
           
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
