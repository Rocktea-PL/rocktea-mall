//import {useEffect, useState} from 'react';
//import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg'
import {FaRegUser} from 'react-icons/fa'
import {HiOutlineShoppingBag,HiOutlineMagnifyingGlass} from 'react-icons/hi2'
const Navbar = () => {
    //HiBars3BottomRight,HiXMark,
  //const path = useLocation();
  
  /*const navItems = [
    {
      id:1,
      link:'/',
      title:'Home'

    },
    {
      id:2,
      link:'/products',
      title:'Products'
      
    },
   
  ]
  let [open,setOpen]=useState(false);

//This closes the mobile navigation as the user changes path/pages.
  useEffect(() => {
setOpen(false)
  },[path]);
*/
  return (
    <header className='p-3 bg-white shadow-md fixed top-0 w-full'>
        <nav className='flex items-center justify-between px-4'>
            <figure>
                <img src={Logo} alt="logo" width={50} height={50} />
            </figure>
            <ul className='flex items-center justify-between gap-5'>
                <li className='uppercase font-semibold'>Home</li>
                <li className='uppercase font-semibold'>Products</li>
            </ul>
            <div className='flex items-center justify-between gap-3'>
            <span className='bg-[var(--product-bg)] p-2' ><HiOutlineMagnifyingGlass /></span>
            <span className='bg-[var(--product-bg)] p-2' ><HiOutlineShoppingBag /></span>
            <span className='bg-[var(--product-bg)] p-2' ><FaRegUser /></span>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
