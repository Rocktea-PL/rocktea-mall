import { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileDropdown from "./Dropdown";
import { useNavigate, Link } from "react-router-dom";
import { FaAngleUp, FaHome, FaMinus } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Marketplace from "../../pages/Dropshippers/Marketplace";
function DropshipperMobileNavbar({ store, isOpen, page, toggleMenu }) {
  const navigate = useNavigate();
  const [dropdowns, setDropdowns] = useState({
    products: false,
    dashboard: false,
    marketplace: false,
  });

  const toggleDropdown = (item) => {
    setDropdowns((prev) => ({ ...prev, [item]: !prev[item] }));
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
        className={`absolute top-[4.8rem] left-0 w-64 h-screen bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 z-[999]`}
      >
        <ul className="flex flex-col gap-y-6 bg-white py-4 px-5 border-r-2 border-r-gray-300">
          <li className="uppercase tracking-[1px] mt-10">
            <div onClick={() => toggleDropdown("products")}>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                  <FaHome /> Products
                </span>
                <span>
                  {" "}
                  {dropdowns.products ? (
                    <FaAngleUp className="text-[22px]" />
                  ) : (
                    <FaMinus />
                  )}{" "}
                </span>
              </div>
              {dropdowns.products && (
                <ul className="mt-3">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  {/* Add more dropdown items as needed */}
                </ul>
              )}
            </div>
            <hr className="mt-2" />
          </li>
          <li className="uppercase tracking-[1px]">
            <div onClick={() => toggleDropdown("dashboard")}>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                  <MdOutlineSpaceDashboard /> Dashboard
                </span>
                <span>
                  {" "}
                  {dropdowns.products ? (
                    <FaAngleUp className="text-[22px]" />
                  ) : (
                    <FaMinus />
                  )}{" "}
                </span>
              </div>
              {dropdowns.dashboard && (
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  {/* Add more dropdown items as needed */}
                </ul>
              )}
            </div>
            <hr className="mt-2" />
          </li>

          <li className="uppercase tracking-[1px]">
            <div onClick={() => toggleDropdown("marketplace")}>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                  <Marketplace /> Marketplace
                </span>
                <span>
                  {" "}
                  {dropdowns.products ? (
                    <FaAngleUp className="text-[22px]" />
                  ) : (
                    <FaMinus />
                  )}{" "}
                </span>
              </div>
              {dropdowns.marketplace && (
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  {/* Add more dropdown items as needed */}
                </ul>
              )}
            </div>
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
          className="relative p-2 z-0 text-[1.2rem] cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <IoMdNotificationsOutline />
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
