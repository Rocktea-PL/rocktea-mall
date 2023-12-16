import { HiMiniBars3BottomLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import ProfileDropdown from "./UserSearch/Dropdown";
import { useNavigate, Link } from "react-router-dom";
//import { useStoreContext } from "../Hooks/UserAuthContext";
import { useUserProductContext } from "../Hooks/UserProductContext";
import { FaAngleUp, FaHome, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { TbCategory } from "react-icons/tb";

function MobileNavbar({ store, isOpen, toggleMenu, totalQuantity }) {
  const navigate = useNavigate();
  const { categoryname } = useUserProductContext();
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const toggleDropdown = () => {
    setMobileDropdown(!mobileDropdown);
  };
  let subcategories = categoryname?.subcategories;
  //const Type= productType.filter(cat => cat.subcategory.name ===subcategories.name )
  let productType = categoryname?.product_types;
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
        <ul className="flex flex-col gap-y-3 bg-white py-4 px-5 border-r-2 border-r-gray-300 ">
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
          <div className=" tracking-[1px] cursor-pointer ">
            <div onClick={toggleDropdown} className="mb-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                  <TbCategory /> Category
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
            </div>
            {mobileDropdown && (
              <div className="mt-4">
                {subcategories?.length > 0 &&
                  subcategories.map((subcategory, subIndex) => {
                    const decodedType = subcategory?.name.replace(/\s+/g, "-");
                    //const FormattedType = subcategory.name.replace(/-/g, " ");
                    return (
                      <div key={subIndex} className="border-r px-2 mt-5">
                        <Link to={`/products/${decodedType}`}>
                          <h3 className="text-[1rem] font-medium hover:text-orange cursor-pointer  ">
                            {subcategory?.name}
                          </h3>
                          <hr className="my-2" />
                        </Link>
                        <ul key={subIndex} className="flex flex-col">
                          {productType
                            ?.filter(
                              (type) =>
                                type.subcategory.name === subcategory.name,
                            )
                            .map((type, typeIndex) => (
                              <li key={typeIndex}>
                                <Link to={`/products/${type.id}`}>
                                  <p className="capitalize text-sm hover:text-orange leading-tight cursor-pointer">
                                    {type.name}
                                  </p>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            )}
            <hr />
          </div>
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
