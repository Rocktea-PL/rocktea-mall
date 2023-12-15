import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { FaAngleDown, FaUserAlt } from "react-icons/fa";
import Button from "../Button";
import { useGlobalContext } from "../../hooks/context";
const Header = () => {
  const path = useLocation();
  const { user } = useGlobalContext();

  const navItems = [
    {
      id: 1,
      link: "/",
      title: "Home",
    },
    {
      id: 2,
      link: "/faqs",
      title: "FAQs",
    },
    {
      id: 3,
      link: "/about",
      title: "About",
    },
  ];
  let [open, setOpen] = useState(false);

  //This closes the mobile navigation as the user changes path/pages.
  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className=" bg-white shadow-md w-full h-[5rem] fixed top-0 left-0 z-[99]  items-center">
      <nav className="md:flex md:items-center md:justify-between gap-8 py-[1.7rem]  md:px-10 px-7 ">
        <Link to="/">
          <figure className="flex items-center mt-2 md:mt-0">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421637/rocktea-main-website/assets/rocktea-logo_qlaflj.png"
              width={130}
              height={130}
              alt="logo"
            />
          </figure>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-50"
        >
          <span>{open ? <HiXMark /> : <HiBars3BottomRight />}</span>
        </div>

        {/* DESKTOP NAVIGATION ITEMS */}
        <form action="" className="flex items-center gap-3 ">
          <input
            type="search"
            placeholder="search a service"
            className="p-3 h-10"
          />
          <Link to="/signin">
            <button className="w-[120px] h-10 bg-orange rounded-md">
              Search
            </button>
          </Link>
        </form>
        <div className="mt-5 md:mt-0 hidden md:flex items-center justify-between">
          {user ? (
            <div className="w-[120px] h-10 bg-orange rounded-md flex gap-2 items-center justify-center">
              <FaUserAlt /> <p>{user.first_name}</p> <FaAngleDown />
            </div>
          ) : (
            <Link to="/signin">
              <Button text="Sign In" />
            </Link>
          )}
        </div>

        {/* MOBILE NAVIGATION ITEMS */}
        <ul
          className={`md:hidden  pb-12 absolute gap-8   md:z-auto z-[1] left-0 w-full  pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-[4.5rem] bg-white shadow-md border border-t-1 border-t-gray-200"
              : "top-[-350px] bg-white -z-1"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className=" text-black hover:text-[var(--yellow)] cursor-pointer font-normal hover:font-bold mt-5 md:mt-0"
            >
              <NavLink exact activeClassName="active" to={item.link}>
                {item.title}
              </NavLink>
            </li>
          ))}

          <div className="mt-5 md:mt-0">
            <Link to="/signin">
              <Button text="Sign In" />
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
