import { IoMdNotificationsOutline } from "react-icons/io";
import ProfileDropdown from "./Dropdown";
import { Link } from "react-router-dom";
//import {MobileNavbar} from "./MobileNavbar";
import { useStoreContext } from "../Hooks/UserAuthContext";
import DropshipperMobileNavbar from "./DropshipperMobileNavbar";
import { useState } from "react";

const DropshipperNavbar = ({ page }) => {
  const { store } = useStoreContext();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  //const navigate = useNavigate();
  //const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="p-3 bg-white shadow-md fixed top-0 w-full z-[60]">
      <nav className="hidden lg:flex items-center justify-between px-4">
        <figure className="flex items-center justify-center gap-3">
          {store.logo ? (
            <img
              src={store?.logo}
              alt="logo"
              width={50}
              height={50}
              className="w-[50px] h-[50px] "
            />
          ) : (
            <div className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md">
              {store?.name?.substring(0, 2)}
            </div>
          )}
        </figure>
        <ul className="flex items-center justify-between gap-5">
          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to="/">Products</Link>
          </li>
          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to={`/dashboard?store_id=${store.id}`}>Dashboard</Link>
          </li>

          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to={`/marketplace/${page}`}>Marketplace</Link>
          </li>
          <li className="uppercase tracking-[1px] cursor-pointer"> User</li>
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
      <nav className="block lg:hidden ">
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
