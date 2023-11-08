import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import {
  RiSettings4Fill,
  RiListUnordered,
  RiBookmarkLine,
  RiLogoutCircleRLine,
  RiMapPinLine,
} from "react-icons/ri";


import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { useStoreContext } from "../Hooks/UserAuthContext";
const dropdown = [
  {
    id: 1,
    title: "Settings",
    icon: <RiSettings4Fill />,
  },
  {
    id: 2,
    title: "Saved Items",
    icon: <RiBookmarkLine />,
  },
  {
    id: 3,
    title: "Orders",
    icon: <RiListUnordered />,
  },
  {
    id: 4,
    title: "Shipping Address",
    icon: <RiMapPinLine />,
  },
  {
    id: 5,
    title: "Log Out",
    icon: <RiLogoutCircleRLine />,
    link: "/login",
  },
];

const ProfileDropdown = () => {
  const {logOut,userData} = useStoreContext()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const userAccess = localStorage.getItem("accessToken");
  //const [logOut, setLogOut] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const IsLogOut = () => {
  
    if (dropdown.title === "Logout") {
     logOut()
    } 
  };

  
 
  return (
    <>
    
      <div
        className="relative flex items-center capitalize justify-center gap-[0.3rem]  p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <FaRegUser /> <span className="hidden  md:block"> {userData.first_name} </span>  <span className="">{isDropdownOpen ? <RxCaretUp /> : <RxCaretDown />}</span>
      </div>
      {isDropdownOpen && (
        <>
          
            {userAccess ? (
              <div
              className="origin-top-right py-3 absolute -right-5 top-12 mt-2 w-[12rem] rounded-md shadow-lg bg-white  focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
               {dropdown.map((item) => (
                <>
                  <Link to={item.link}>
                    <div
                      key={item.id}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-b-solid border-b-black last:border-b-0"
                    >
                      <span>{item.icon}</span>
  
                      <button
                        className="whitespace-nowrap"
                        role="menuitem"
                        onClick={IsLogOut}
                      >
                        {item.title}
                      </button>
                    </div>
                  </Link>
                </>
              ))}
              </div>
            ) : (
              <div
              className="origin-top-right py-3 absolute -right-5 top-12 mt-2 w-[12rem] rounded-md shadow-lg bg-white  focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link to='/register'>
              <button
              className="whitespace-nowrap bg-orange text-white py-3 px-5 rounded-md font-semibold flex items-center justify-center mx-auto"
              role="menuitem"
              
            >
              Sign Up
            </button>
              </Link>
             <Link to='/login'>
             <button
              className="whitespace-nowrap bg-orange py-3 text-white  px-5 rounded-md font-semibold mt-5  flex items-center justify-center mx-auto"
              role="menuitem"
              
            >
              Sign In
            </button>
             </Link>
            
            </div>
            )}
          </>
        
      )}
    </>
  );
};

export default ProfileDropdown;
