import  { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import {RiSettings4Fill, RiListUnordered,RiBookmarkLine,RiLogoutCircleRLine} from 'react-icons/ri';
import {RxCaretDown, RxCaretUp} from 'react-icons/rx'
const dropdown = [
  {
    id:1,
     title:'Settings',
     icon:<RiSettings4Fill />
    },
    {
      id:2,
       title:'Saved Items',
       icon:<RiBookmarkLine />
       
      },
      {
        id:2,
         title:'Orders',
         icon:<RiListUnordered />
        },
        {
          id:2,
           title:'Log Out',
           icon:<RiLogoutCircleRLine />
          },
]


const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <span
        className=' flex items-center justify-center gap-2  p-2 cursor-pointer'
        onClick={toggleDropdown}
      >
        <FaRegUser /> Daniel {isDropdownOpen ? <RxCaretUp /> : <RxCaretDown />}
      </span>
      {isDropdownOpen && (
        <div className='origin-top-right absolute right-0 -bottom-[14rem] mt-2 w-40 rounded-md shadow-lg bg-white  focus:outline-none'>
          <div
            className='py-3'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {dropdown.map((item) => (
              <div key={item.id} className='flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-b-solid border-b-black last:border-b-0'  >
                 <span>{item.icon}</span>
              <a
              href='#'
              
              className=''
              role='menuitem'
            >
              {item.title}
            </a>
           
            </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
