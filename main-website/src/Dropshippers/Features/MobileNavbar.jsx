import { HiBars3BottomLeft } from 'react-icons/hi2';
import ProfileDropdown from './Dropdown';
import { IoMdNotificationsOutline } from "react-icons/io";
export function MobileNavbar({ storeData }) {
  return (
    <div className="flex items-center justify-between md:px-5">
      <span className="text-lg cursor-pointer">
        <HiBars3BottomLeft />
      </span>
      <div>
        {!storeData.logo ? (
          <div
            className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md"
          >
            {storeData.name.substring(0, 2)}
          </div>
        ) : (
          <img
            src={storeData.logo}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        )}
      </div>
      <div className="relative flex items-center justify-between gap-3">
      <span className=" relative p-2 z-0 text-[1.2rem] cursor-pointer">
            <IoMdNotificationsOutline />
            <p className="absolute bg-red-500 w-[15px] flex items-center justify-center rounded-full h-[15px] -top-0 right-0 z-10 text-[12px] text-white ">
              1
            </p>
          </span>
        <ProfileDropdown />
      </div>
    </div>
  );
}


