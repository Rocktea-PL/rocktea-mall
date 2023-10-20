//import {useEffect, useState} from 'react';
//import { Link, NavLink, useLocation } from 'react-router-dom';
//import { useState } from 'react';

import {
  HiOutlineShoppingBag,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
//import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileDropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import Categories from "./Categories";
import { useState } from "react";
import { useStoreContext } from "../Hooks/UserAuthContext";
import MobileNavbar from "./MobileNavbar";
//import { FaRegUser } from 'react-icons/fa;
const Navbar = () => {
  const navigate = useNavigate();
  const {store} = useStoreContext()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(store)
  return (
    <header className="p-3 bg-white shadow-md fixed top-0 w-full z-[999]">
      <nav className="hidden lg:flex items-center justify-between px-5">
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
      
        <ul className="flex items-center justify-between gap-5">
          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li
            className="uppercase tracking-[1px] cursor-pointer"
            onClick={openModal}
          >
            Categories
          </li>
        </ul>
        <form action="" className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Search"
            className="border border-solid border-[var(--orange)] p-2 rounded-lg outline-none"
          />
          <button className="flex items-center gap-2 bg-[var(--orange)] p-2  rounded-lg">
            {" "}
            <HiOutlineMagnifyingGlass /> Search{" "}
          </button>
        </form>
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
      </nav>

      <nav className="block lg:hidden ">
        <MobileNavbar store={store} />
      </nav>
      {isModalOpen && <Categories closeModal={closeModal} />}
    </header>
  );
};

export default Navbar;
