import { HiMiniBars3BottomLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import ProfileDropdown from "./UserSearch/Dropdown";
import { useNavigate, Link } from "react-router-dom";
//import { useStoreContext } from "../Hooks/UserAuthContext";
import { useUserProductContext } from "../Hooks/UserProductContext";
import { FaAngleUp, FaHome, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { TbCategory } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

function MobileNavbar({ store, isOpen, toggleMenu, totalQuantity }) {
  const navigate = useNavigate();
  const { categoryname } = useUserProductContext();
  let subcategories = categoryname?.subcategories;
  //const Type= productType.filter(cat => cat.subcategory.name ===subcategories.name )
  let productType = categoryname?.product_types;
  const [mobileDropdown, setMobileDropdown] = useState(
    Array(subcategories?.length).fill(false),
  );
  const toggleDropdown = (index) => {
    setMobileDropdown((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
    // setMobileDropdown(!mobileDropdown);
  };
  const closeMenu = () => {
    // Close the menu when navigating to a new page
    if (isOpen) {
      toggleMenu();
    }
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
        className={`absolute top-[0rem] left-0 w-[100%] h-screen bg-white  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 z-[99]`}
      >
        <div className="flex items-center gap-x-2 p-5">
          <span
            className="text-lg cursor-pointer relative z-[99]"
            onClick={toggleMenu}
          >
            <IoClose />
          </span>
        </div>

        <ul className="flex flex-col gap-y-3 bg-white py-4 px-5 border-r-2 border-r-gray-300 ">
          <li className=" tracking-[1px] mt-10">
            <Link to="/">
              {" "}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2 text-[1.2rem]">
                  <FaHome /> Products
                </span>
              </div>
            </Link>
          </li>
          <div className=" tracking-[1px] cursor-pointer ">
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2 text-[1.2rem]">
                  <TbCategory /> Categories
                </span>
              </div>
            </div>

            <div className="mt-4">
              {subcategories?.length > 0 &&
                subcategories.map((subcategory, subIndex) => {
                  const decodedType = subcategory?.name.replace(/\s+/g, "-");
                  //const FormattedType = subcategory.name.replace(/-/g, " ");
                  return (
                    <div key={subIndex} className="border-r px-1 mt-5">
                      <div className="flex items-center justify-between">
                        <Link to={`/products/${decodedType}`}>
                          <h3 className="text-[1rem] font-medium hover:text-orange cursor-pointer  ">
                            {subcategory?.name}
                          </h3>
                        </Link>
                        <div onClick={() => toggleDropdown(subIndex)}>
                          {" "}
                          {mobileDropdown[subIndex] ? (
                            <FaAngleUp className="text-[22px]" />
                          ) : (
                            <FaMinus />
                          )}{" "}
                        </div>
                      </div>
                      <hr className="my-2 border-[1.5px]" />
                      {mobileDropdown[subIndex] && (
                        <ul key={subIndex} className="flex flex-col gap-y-3">
                          {productType
                            ?.filter(
                              (type) =>
                                type.subcategory.name === subcategory.name,
                            )
                            .map((type, typeIndex) => (
                              <li key={typeIndex}>
                                <Link
                                  to={`/products/${type.id}`}
                                  onClick={closeMenu}
                                >
                                  <p className="capitalize text-sm hover:text-orange leading-tight cursor-pointer">
                                    {type.name}
                                  </p>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </ul>
        <p className="px-3 italic text-blue tracking-wider text-[1.2rem]">
          Contact center
        </p>
      </div>

      <div className="z-[100]">
        {store.logo ? (
          <img
            src={store?.logo}
            alt="logo"
            width={110}
            height={110}
            className=" object-contain  max-w-[100%] max-h-[70px]"
            // className="rounded-full"
          />
        ) : (
          <div className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md">
            {store.name?.slice(0, 2)}
          </div>
        )}
      </div>
      <div className="relative flex items-center justify-between gap-3 z-[100]">
        <span
          className=" relative p-2 z-0 text-[1.2rem] cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <HiOutlineShoppingBag />
          <p className="absolute bg-red-500 w-[15px] p-[0.6rem]  flex items-center justify-center rounded-full h-[16px] -top-1 right-0 z-10 text-[12px] text-white">
            {totalQuantity || 0}
          </p>
        </span>
        <ProfileDropdown />
      </div>
    </div>
  );
}

export default MobileNavbar;
