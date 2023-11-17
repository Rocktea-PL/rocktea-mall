import { HiMiniBars3BottomLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import ProfileDropdown from "./Dropdown";
import { useNavigate, Link } from "react-router-dom";

function DropshipperMobileNavbar({ store, isOpen, page, toggleMenu }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center !justify-between md:px-5">
      <span
        className="text-lg cursor-pointer relative z-[99]"
        onClick={toggleMenu}
      >
        <HiMiniBars3BottomLeft />
      </span>
      <div
        className={`absolute top-[4.8rem] left-0 w-64 h-screen bg-white  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 z-[999]`}
      >
        <ul className="flex flex-col gap-y-6 bg-white py-4 px-5 border-r-2 border-r-gray-300">
          <li className="uppercase tracking-[1px] mt-10">
            {" "}
            <Link to="/">Products</Link>
          </li>
          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to={`/dashboard/${store.id}`}>Dashboard</Link>
          </li>

          <li className="uppercase tracking-[1px]">
            {" "}
            <Link to={`/marketplace/${page}`}>Marketplace</Link>
          </li>
          <li className="uppercase tracking-[1px] cursor-pointer"> User</li>
        </ul>
      </div>

      <div className="">
        {store.logo ? (
          <img
            src={store?.logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
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
          <HiOutlineShoppingBag />
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
