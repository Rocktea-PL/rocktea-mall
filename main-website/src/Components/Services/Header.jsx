import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import {
  FaAngleDown,
  FaAngleUp,
  FaUserAlt,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import Button from "../Button";
import { useGlobalContext } from "../../hooks/context";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
const Header = () => {
  const path = useLocation();
  const { user } = useGlobalContext();
  const [isdropdown, setIsDropdown] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  let [open, setOpen] = useState(false);

  //This closes the mobile navigation as the user changes path/pages.
  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className=" bg-white shadow-md w-full h-[5.5rem] fixed top-0 left-0 z-[99]  items-center">
      <nav className="hidden md:flex md:items-center md:justify-between gap-8 py-[1.7rem]  md:px-10 px-7 ">
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
        <form action="" className="lg:flex hidden !items-center gap-x-3 ">
          <input
            type="search"
            placeholder="search a service"
            className="px-3 !py-2 -mt-[0.4px] !h-[2.7rem] "
          />
          <Link to="/signin">
            <button className="w-[120px] h-10 bg-orange rounded-md">
              Search
            </button>
          </Link>
        </form>
        <div className="mt-5 relative md:mt-0 hidden md:flex items-center justify-between">
          {user ? (
            <div className="w-[120px] h-10 bg-orange rounded-md flex gap-2 items-center justify-center">
              <FaUserAlt /> <p>{user.first_name}</p>
              <span
                onClick={() => setIsDropdown(!isdropdown)}
                className="cursor-pointer"
              >
                {isdropdown ? <FaAngleUp /> : <FaAngleDown />}
              </span>
              {isdropdown && (
                <div className="absolute top-[3.4rem] right-0 bg-white rounded-md shadow-md p-4 max-w-32">
                  <Link to="/profile">
                    <li className="flex items-center justify-center whitespace-nowrap gap-2 mb-3">
                      <span>
                        <IoSettingsOutline />
                      </span>{" "}
                      Profile
                    </li>
                  </Link>
                  <Link to="/profile">
                    <li className="flex items-center justify-center whitespace-nowrap gap-2">
                      <span>
                        <IoMdLogOut />
                      </span>{" "}
                      Logout
                    </li>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signin">
              <Button text="Sign In" />
            </Link>
          )}
        </div>
      </nav>
      <nav className="md:hidden flex items-center justify-between gap-8 py-[1.7rem]  md:px-10 px-7 ">
        {!isSearch && (
          <Link to="/">
            <figure className="flex items-center mt-2 md:mt-0">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421637/rocktea-main-website/assets/rocktea-logo_qlaflj.png"
                width={150}
                height={150}
                alt="logo"
              />
            </figure>
          </Link>
        )}

        <div className="flex items-center gap-3">
          {/* DESKTOP NAVIGATION ITEMS */}
          {isSearch && (
            <form
              action=""
              className={`flex !items-center gap-x-3 transition-all ease-in-out duration-300 ${
                isSearch ? "w-full" : ""
              }`}
            >
              <FaTimes
                className="text-[22px]"
                onClick={() => setIsSearch(false)}
              />

              <input
                type="search"
                placeholder="search a service"
                className="px-3 !py-2 -mt-[0.4px] !h-[2.7rem] "
              />
              <Link to="/signin">
                <button className="w-[120px] h-10 bg-orange rounded-md">
                  Search
                </button>
              </Link>
            </form>
          )}

          <div className=" relative md:mt-0 flex items-center justify-between">
            {user ? (
              <div className="w-[120px] h-10 bg-orange rounded-md flex gap-2 items-center justify-center">
                <FaUserAlt /> <p>{user.first_name}</p>
                <span
                  onClick={() => setIsDropdown(!isdropdown)}
                  className="cursor-pointer"
                >
                  {isdropdown ? <FaAngleUp /> : <FaAngleDown />}
                </span>
                {isdropdown && (
                  <div className="absolute top-[3.4rem] right-0 bg-white rounded-md shadow-md p-4 max-w-32">
                    <Link to="/profile">
                      <li className="flex items-center justify-center whitespace-nowrap gap-2 mb-3">
                        <span>
                          <IoSettingsOutline />
                        </span>{" "}
                        Profile
                      </li>
                    </Link>
                    <Link to="/profile">
                      <li className="flex items-center justify-center whitespace-nowrap gap-2">
                        <span>
                          <IoMdLogOut />
                        </span>{" "}
                        Logout
                      </li>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={` ${
                  isSearch ? "hidden" : "flex items-center gap-3"
                }`}
              >
                <FaSearch
                  className="text-md"
                  onClick={() => setIsSearch(!isSearch)}
                />
                <Link to="/signin">
                  <button className="bg-orange p-3 px-4 rounded-md">
                    Sign in
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
