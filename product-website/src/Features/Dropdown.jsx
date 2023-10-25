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
        className=" flex items-center capitalize justify-center gap-[0.3rem]  p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <FaRegUser /> <span className="hidden md:block"> {userData.first_name} </span> {isDropdownOpen ? <RxCaretUp /> : <RxCaretDown />}
      </div>
      {isDropdownOpen && (
        <div className="origin-top-right absolute -right-5 -bottom-[16.5rem] mt-2 w-[12rem] rounded-md shadow-lg bg-white  focus:outline-none">
          <div
            className="py-3"
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
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
