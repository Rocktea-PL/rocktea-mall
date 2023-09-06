//import {useEffect, useState} from 'react';
//import { Link, NavLink, useLocation } from 'react-router-dom';
//import { useState } from 'react';
import Logo from '../assets/logo.svg'
import {HiOutlineShoppingBag,HiOutlineMagnifyingGlass} from 'react-icons/hi2'
import {IoMdNotificationsOutline} from 'react-icons/io'
import ProfileDropdown from './Dropdown';
import { Link } from 'react-router-dom';
//import { FaRegUser } from 'react-icons/fa;
const Navbar = () => {
   

 
  return (
    <header className='p-3 bg-white shadow-md fixed top-0 w-full z-[999]'>
        <nav className='flex items-center justify-between px-4'>
            <figure>
                <img src={Logo} alt="logo" width={50} height={50} />
            </figure>
            <ul className='flex items-center justify-between gap-5'>
                <li className='uppercase font-semibold'> <Link to= '/'>
                Home
                </Link>
              </li>
                <li className='uppercase font-semibold'>
                <Link to='/products'>
                Products
                </Link>
                  </li>
            </ul>
            <form action="" className='flex items-center gap-4'>
              <input type="search" placeholder='Search' className='border border-solid border-[var(--orange)] p-2 rounded-lg outline-none' />
              <button className='flex items-center gap-2 bg-[var(--orange)] p-2  rounded-lg'> <HiOutlineMagnifyingGlass /> Search </button>
            </form>
            <div className='relative flex items-center justify-between gap-3'>
            <span className=' relative p-2 z-0 text-[1.2rem]' ><IoMdNotificationsOutline />
            <p className='absolute bg-red-500 w-[15px] flex items-center justify-center rounded-full h-[15px] -top-1 right-0 z-10 text-[12px] text-white'>0</p>
            </span>
            <span className=' relative p-2 z-0 text-[1.2rem]' ><HiOutlineShoppingBag />
            <p className='absolute bg-red-500 w-[15px] flex items-center justify-center rounded-full h-[15px] -top-1 right-0 z-10 text-[12px] text-white'>0</p>
            </span>
     <ProfileDropdown />
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
