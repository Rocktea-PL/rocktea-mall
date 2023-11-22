import {
  HiMiniBars3BottomLeft,
  HiOutlineHome,
 // HiOutlineShoppingBag,
} from "react-icons/hi2";
//import ProfileDropdown from "./Dropdown";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleUp, FaHome, FaMinus } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom/dist";
import { BiTransferAlt } from "react-icons/bi";
import { RiListUnordered } from "react-icons/ri";
import ProfileDropdown from "./UserSearch/Dropdown";
import { IoMdNotificationsOutline } from "react-icons/io";
function DropshipperMobileNavbar({ store, isOpen, page, toggleMenu }) {
  const navigate = useNavigate();

  const pathname = useLocation();
  const sidebarItems = [
    {
      id: 1,
      link: `/dashboard?store_id=${store?.id}`,
      title: "Home",
      icon: <HiOutlineHome />,
    },
    {
      id: 2,
      link: "/dashboard/transactions",
      title: "Transactions",
      icon: <BiTransferAlt />,
    },
    {
      id: 3,
      link: "/dashboard/orders",
      title: "Orders",
      icon: <RiListUnordered />,
    },
  ];
  const [mobileDropdown, setMobileDropdown] = useState();
  const toggleDropdown = () => {
    setMobileDropdown(!mobileDropdown);
  };
  return (
    <div className="flex items-center !justify-between md:px-5">
      <span
        className="text-lg cursor-pointer relative z-[99]"
        onClick={toggleMenu}
      >
        <HiMiniBars3BottomLeft />
      </span>
      <div
        className={`absolute top-[4rem] left-0 w-64 h-screen bg-white  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 z-[999]`}
      >
        <ul className="flex flex-col gap-y-6 bg-white py-4 px-5 border-r-2 border-r-gray-300">
          <li className=" tracking-[1px] mt-10">
            <Link to="/">
              {" "}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                  <FaHome /> Products
                </span>
                <span>
                  <FaMinus />
                </span>
              </div>
            </Link>
            <hr className="mt-2" />
          </li>

          <li className=" tracking-[1px]">
            <div onClick={toggleDropdown}>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                  <MdOutlineSpaceDashboard /> Dashboard
                </span>
                <span>
                  {" "}
                  {mobileDropdown ? (
                    <FaAngleUp className="text-[22px]" />
                  ) : (
                    <FaMinus />
                  )}{" "}
                </span>
              </div>
              {mobileDropdown && (
                <ul className="sidebar-list flex flex-col gap-y-3 mt-5">
                  {sidebarItems.map((items) => (
                    <li key={items.id} className="flex">
                      {" "}
                      <NavLink
                        key={items.id}
                        className={
                          pathname === items.title
                            ? "active flex items-center gap-1"
                            : "flex items-center gap-1"
                        }
                        to={items.link}
                      >
                        <span>{items.icon}</span>
                        <span>{items.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <hr className="mt-2" />
          </li>

          <li className=" tracking-[1px] ">
            <Link to={`/marketplace?page=${page || 1}`}>
              {" "}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                  <FaHome /> Marketplace
                </span>
                <span>
                  <FaMinus />
                </span>
              </div>
            </Link>
            <hr className="mt-2" />
          </li>
        </ul>
      </div>

      <div className="">
        {store.logo ? (
          <img
            src={store?.logo}
            alt="logo"
            width={50}
            height={50}
            className=""
          />
        ) : (
          <div className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md">
            {store.name?.slice(0, 2)}
          </div>
        )}
      </div>
      <div className="relative flex items-center justify-between gap-3">
        <span
          className=" relative p-2 z-0 text-[1.2rem] cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <IoMdNotificationsOutline/>
          <p className="absolute bg-red-500 w-[15px] flex items-center justify-center rounded-full h-[15px] -top-1 right-0 z-10 text-[12px] text-white">
            1
          </p>
        </span>
        <ProfileDropdown />
      </div>
    </div>
  );
}

export default DropshipperMobileNavbar;
