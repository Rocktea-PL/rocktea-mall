import { IoMdNotificationsOutline } from "react-icons/io";
//import ProfileDropdown from "./Dropdown";
import { Link } from "react-router-dom";
//import {MobileNavbar} from "./MobileNavbar";
import { useStoreContext } from "../Hooks/UserAuthContext";
import DropshipperMobileNavbar from "./DropshipperMobileNavbar";
import { useState } from "react";
import ProfileDropdown from "./Dropshippers/Dropdown";

const DropshipperNavbar = ({ page }) => {
  const { store, storeId } = useStoreContext();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  //console.log(store)
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  //const navigate = useNavigate();
  //const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="p-3 bg-white shadow-md fixed -top-0 w-full z-[100] h-[90px] max-h-[100px]  ">
      <nav className="hidden lg:flex items-center justify-between px-4 relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] ">
        <figure className="flex items-center justify-center gap-3">
          {store?.logo ? (
            <img
              src={store?.logo}
              alt="logo"
              width={110}
              height={110}
              className=" object-contain  max-w-[100%] max-h-[70px]"
            />
          ) : (
            <div className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md">
              {store?.name?.substring(0, 2)}
            </div>
          )}
        </figure>
        <ul className="flex items-center justify-between  gap-5">
          <li className=" tracking-[1px]">
            {" "}
            <Link to="/">Products</Link>
          </li>
          <li className=" tracking-[1px]">
            {" "}
            <Link to={`/dashboard/home?store_id=${storeId}`}>Dashboard</Link>
          </li>

          <li className=" tracking-[1px]">
            {" "}
            <Link to={`/marketplace?page=${page || 1}`}>Marketplace</Link>
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
      <nav className="block lg:hidden w-full ">
        <DropshipperMobileNavbar
          store={store}
          page={page}
          isOpen={isMobileNavOpen}
          toggleMenu={toggleMobileNav}
        />
      </nav>
    </header>
  );
};

export default DropshipperNavbar;
