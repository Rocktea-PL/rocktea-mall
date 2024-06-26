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
import ProfileDropdown from "./Dropshippers/Dropdown";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useStoreContext } from "../Hooks/UserAuthContext";
function DropshipperMobileNavbar({ store, isOpen, page, toggleMenu }) {
  const navigate = useNavigate();
  const { storeLogOut } = useStoreContext();
  const pathname = useLocation();
  const sidebarItems = [
    {
      id: 1,
      link: `/dashboard/home?store_id=${store?.id}`,
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
        className="text-lg cursor-pointer relative z-[100]"
        onClick={toggleMenu}
      >
        <HiMiniBars3BottomLeft />
      </span>
      <div
        className={`fixed top-[0rem] -left-0 w-full h-screen bg-white  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 z-[99] mt-10`}
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
                <ul className="sidebar-list flex flex-col gap-y-4 mt-5">
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
                  <Link to="/dashboard/your_profile">
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17.805 12.1349C17.7351 12.0655 17.6522 12.0105 17.561 11.9731C17.4698 11.9357 17.3722 11.9166 17.2736 11.917C17.1751 11.9173 17.0776 11.9371 16.9867 11.9751C16.8958 12.0132 16.8132 12.0687 16.7438 12.1387C16.6744 12.2086 16.6194 12.2915 16.582 12.3827C16.5446 12.4739 16.5255 12.5715 16.5259 12.6701C16.5262 12.7686 16.546 12.8661 16.584 12.957C16.622 13.0479 16.6776 13.1305 16.7475 13.1999C17.3822 13.8278 17.8859 14.5754 18.2297 15.3993C18.5734 16.2232 18.7503 17.1072 18.75 17.9999C18.75 18.9149 16.1175 20.2499 12 20.2499C7.88255 20.2499 5.25005 18.9149 5.25005 17.9999C5.24886 17.113 5.42245 16.2346 5.7609 15.4149C6.09935 14.5951 6.59603 13.8501 7.22255 13.2224C7.36223 13.0819 7.44064 12.8918 7.44064 12.6937C7.44064 12.4955 7.36223 12.3054 7.22255 12.1649C7.08202 12.0252 6.89194 11.9468 6.6938 11.9468C6.49566 11.9468 6.30557 12.0252 6.16505 12.1649C5.39638 12.9293 4.7871 13.8387 4.37254 14.8403C3.95798 15.8419 3.74639 16.9159 3.75005 17.9999C3.75005 20.4374 8.00255 21.7499 12 21.7499C15.9975 21.7499 20.25 20.4374 20.25 17.9999C20.2529 16.9089 20.0382 15.8282 19.6183 14.8211C19.1985 13.8141 18.5821 12.9008 17.805 12.1349Z"
                            fill="#002440"
                          />
                          <path
                            d="M12 12.75C13.0384 12.75 14.0534 12.4421 14.9167 11.8652C15.7801 11.2883 16.453 10.4684 16.8504 9.50909C17.2477 8.54978 17.3517 7.49418 17.1491 6.47578C16.9466 5.45738 16.4465 4.52192 15.7123 3.78769C14.9781 3.05347 14.0426 2.55345 13.0242 2.35088C12.0058 2.14831 10.9502 2.25227 9.99091 2.64963C9.0316 3.04699 8.21166 3.7199 7.63478 4.58326C7.05791 5.44662 6.75 6.46165 6.75 7.5C6.75 8.89239 7.30312 10.2277 8.28769 11.2123C9.27226 12.1969 10.6076 12.75 12 12.75ZM12 3.75C12.7417 3.75 13.4667 3.96994 14.0834 4.38199C14.7001 4.79405 15.1807 5.37972 15.4645 6.06494C15.7484 6.75016 15.8226 7.50416 15.6779 8.23159C15.5333 8.95902 15.1761 9.62721 14.6517 10.1517C14.1272 10.6761 13.459 11.0333 12.7316 11.1779C12.0042 11.3226 11.2502 11.2484 10.5649 10.9646C9.87971 10.6807 9.29404 10.2001 8.88199 9.58339C8.46993 8.96671 8.25 8.24168 8.25 7.5C8.25 6.50544 8.64509 5.55161 9.34835 4.84835C10.0516 4.14509 11.0054 3.75 12 3.75Z"
                            fill="#002440"
                          />
                        </svg>
                      </span>
                      Profile
                    </li>
                  </Link>

                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2682_8399)">
                          <path
                            d="M21 7.9999C21.5304 7.9999 22.0391 8.21061 22.4142 8.58569C22.7893 8.96076 23 9.46947 23 9.9999V13.9999C23 14.5303 22.7893 15.039 22.4142 15.4141C22.0391 15.7892 21.5304 15.9999 21 15.9999H19.938C19.6942 17.9332 18.7533 19.7111 17.2917 20.9999C15.8302 22.2887 13.9486 22.9999 12 22.9999V20.9999C13.5913 20.9999 15.1174 20.3678 16.2426 19.2425C17.3679 18.1173 18 16.5912 18 14.9999V8.9999C18 7.4086 17.3679 5.88248 16.2426 4.75726C15.1174 3.63204 13.5913 2.9999 12 2.9999C10.4087 2.9999 8.88258 3.63204 7.75736 4.75726C6.63214 5.88248 6 7.4086 6 8.9999V15.9999H3C2.46957 15.9999 1.96086 15.7892 1.58579 15.4141C1.21071 15.039 1 14.5303 1 13.9999V9.9999C1 9.46947 1.21071 8.96076 1.58579 8.58569C1.96086 8.21061 2.46957 7.9999 3 7.9999H4.062C4.30603 6.0668 5.24708 4.28917 6.70857 3.00058C8.17007 1.71198 10.0516 1.00098 12 1.00098C13.9484 1.00098 15.8299 1.71198 17.2914 3.00058C18.7529 4.28917 19.694 6.0668 19.938 7.9999H21ZM7.76 15.7849L8.82 14.0889C9.77308 14.6859 10.8754 15.0017 12 14.9999C13.1246 15.0017 14.2269 14.6859 15.18 14.0889L16.24 15.7849C14.9693 16.581 13.4995 17.0022 12 16.9999C10.5005 17.0022 9.03074 16.581 7.76 15.7849Z"
                            fill="#002440"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2682_8399">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Support
                  </li>
                  <li
                    className="!text-red-500 cursor-pointer"
                    onClick={storeLogOut}
                  >
                    {" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2682_8407)">
                          <path
                            d="M13 3H11V13H13V3ZM17.835 5.165L16.42 6.58C17.99 7.865 19 9.81 19 12C19 15.865 15.865 19 12 19C8.135 19 5 15.865 5 12C5 9.81 6.01 7.865 7.58 6.58L6.165 5.165C4.235 6.815 3 9.26 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 9.26 19.765 6.815 17.835 5.165Z"
                            fill="#f56565"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2682_8407">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Log out
                  </li>
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

      <div className=" z-[100]">
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
            {store?.name?.slice(0, 2)}
          </div>
        )}
      </div>
      <div className="relative flex items-center justify-between gap-3 z-[100]">
        <span
          className=" relative p-2 z-0 text-[1.2rem] cursor-pointer"
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
