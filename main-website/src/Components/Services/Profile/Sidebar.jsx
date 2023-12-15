import { IoSettingsOutline } from "react-icons/io5";
import {
  AiOutlineShoppingCart,
  // AiOutlineHeart,
  AiOutlineBell,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdAddBusiness } from "react-icons/md";
import "../../../styles/profile.css";
//import { useStoreContext } from "../../Hooks/UserAuthContext";
import { useGlobalContext } from "../../../hooks/context";
export default function Sidebar() {
  const { user } = useGlobalContext();
  console.log(user);
  return (
    <aside className="flex flex-col  bg-white w-[300px] p-3 mt-3 rounded-md overflow-hidden">
      <div className="relative">
        <img
          className="w-[200px] h-[200px] object-cover rounded-full mx-auto"
          src={
            "https://res.cloudinary.com/dwvdgmuaq/raw/upload/handsome-young-businessman-suit_1_1_hkyekc.png" ||
            user?.profile_image
          }
          alt="profile"
        />
        <div className="absolute right-[45px]  bg-white opacity-[0.9] w-[50px] h-[50px] flex items-center justify-center  rounded-full bottom-[-5px]  cursor-pointer border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 6V4H21V6H23V8H21V10H19V8H17V6H19ZM6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.24312 5.37261 7.44827 5.03326 7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H15V5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159C9.15916 6.06908 8.95096 6.41348 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V12H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className="text-center mt-5">
        <h3 className="capitalize font-semibold text-darkblue text-[22px]">
          {user.first_name} {user.last_name}{" "}
        </h3>
        <h4 className="text-darkblue ">{user.email}</h4>
      </div>

      <div>
        <ul className="profile-list mt-10">
          <li>
            <span>
              <IoSettingsOutline />
            </span>{" "}
            Profile Settings
          </li>
          <li>
            <span>
              <AiOutlineShoppingCart />
            </span>{" "}
            Business
          </li>
          <li>
            <span>
              <AiOutlineBell />
            </span>{" "}
            Notifications
          </li>

          <Link to="/services/home">
            <li>
              <span>
                <MdAddBusiness />
              </span>{" "}
              All Services
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
