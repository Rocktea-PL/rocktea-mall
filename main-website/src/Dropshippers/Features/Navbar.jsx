//import {useEffect, useState} from 'react';
//import { Link, NavLink, useLocation } from 'react-router-dom';
//import { useState } from 'react';

//import {
  //HiOutlineShoppingBag,
  //HiOutlineMagnifyingGlass,
////} from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileDropdown from "./Dropdown";
import { Link } from "react-router-dom";
//import Categories from "./Categories";
import { useState } from "react";
import { useEffect } from "react";
import {MobileNavbar} from "./MobileNavbar";
//import {useSelector} from 'react-redux'
//import { useGlobalContext } from "../../hooks/context";
//import { FaRegUser } from 'react-icons/fa;
const Navbar = ({page}) => {
  
  //const navigate = useNavigate();
  //const [isModalOpen, setIsModalOpen] = useState(false);
  const [storeData, setStoreData] = useState(null);

  const NavigateToUser = () => {
    let store_id = localStorage.getItem('storeId')
    //http://localhost:5174/register/${store_id}
    window.open(`https://rocktea-mall-product.vercel.app/register/${store_id}`)
    //https://rocktea-mall-product.vercel.app/register/${store_id}
  }
  useEffect(() => {
    const savedUserData = localStorage.getItem("storeData");
    if (savedUserData) {
      setStoreData(JSON.parse(savedUserData));
    }
  }, []);
  if (!storeData) {
    // Handle when storeData is empty or null
    return null;  // or display a message or loading indicator
  }
  
  
  return (
    <header className="p-3 bg-white shadow-md fixed top-0 w-full z-[999]">
      <nav className="hidden lg:flex items-center justify-between px-4">
        <figure className="flex items-center justify-center gap-3">
{storeData.logo ? 
 <img
 src={storeData?.logo}
 alt="logo"
 width={50}
 height={50}
 className="rounded-full"
 
/>
: <div className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md">
   {storeData.name.substring(0, 2)}
</div>
}
         
         
        </figure>
        <ul className="flex items-center justify-between gap-5">
          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to="/store">Products</Link>
          </li>
          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to={`/dashboard/${storeData.id}`}>Dashboard</Link>
          </li>
          
          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to={`/marketplace/${page}`}>Marketplace</Link>
          </li>
          <li className="uppercase tracking-[1px] cursor-pointer" onClick={NavigateToUser}>
            {" "}
           User
          </li>
        </ul>
        
        <div className="relative flex items-center justify-between gap-3 mt-2">
          <span className=" relative p-2 z-0 text-[1.2rem] cursor-pointer">
            <IoMdNotificationsOutline />
            <p className="absolute bg-red-500 w-[15px] flex items-center justify-center rounded-full h-[15px] -top-0 right-0 z-10 text-[12px] text-white ">
              1
            </p>
          </span>

         
  
          <ProfileDropdown />
        </div>
      </nav>
     <nav className="block lg:hidden">
      <MobileNavbar storeData={storeData}/>
     </nav>
    </header>
  );
};

export default Navbar;
