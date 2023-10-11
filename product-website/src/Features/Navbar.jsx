//import {useEffect, useState} from 'react';
//import { Link, NavLink, useLocation } from 'react-router-dom';

import { FaRegUser } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineMagnifyingGlass } from "react-icons/hi2";
const Navbar = () => {
  return (
    <header className="p-3 bg-[#f2f2f2] shadow-md  fixed top-0 w-full z-[999]">
      <nav className="flex items-center justify-between px-4">
        <figure>
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422691/rocktea-product-website/assets/logo_wvpiif.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </figure>
        <ul className="flex items-center justify-between gap-5">
          <li className="uppercase font-semibold">Home</li>
          <li className="uppercase font-semibold">Products </li>
        </ul>
        <div className="flex items-center justify-between gap-3">
          <span className="bg-white p-2">
            <HiOutlineEnvelope />
          </span>
          <span className="bg-white p-2">
            <HiOutlineMagnifyingGlass />
          </span>
          <span className="bg-white p-2 flex items-center gap-2 text-[0.8rem]">
            <FaRegUser /> Daniel
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
