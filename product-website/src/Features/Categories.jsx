import { useEffect } from "react";
import { categories, product } from "../components/constant/data";
import { FaAngleRight } from "react-icons/fa";
import { useRef } from "react";
import {Link,} from 'react-router-dom'

const Categories = ({ closeModal }) => {
  // Categories and subcategories data
  
    // Add more categories and subcategories as needed
  
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

      const handleOverlayClick = (e) => {
        // Close the modal only if the click is on the overlay, not on the modal itself
        if (e.target.classList.contains('modal-overlay')) {
          closeModal();
        }
      };
      

      const modalContentRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = modalContentRef.current;
    const percentScroll = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const maxIconTranslate = 100 - 20; // 20 is the height of the icon

    const iconTranslate = (percentScroll / 100) * maxIconTranslate;
    document.getElementById('scroll-icon').style.transform = `translateY(${iconTranslate}%)`;
  };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal flex items-center justify-between gap-16 ">
        <div className="w-[70%]">
        <div className="flex items-start justify-between gap-10">
          <h2 className="text-[1.4rem] font-semibold my-6">Groceries</h2>
          <button className="text-[1rem] font-medium my-6">View all</button>
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-content relative gap-8 pr-5" onScroll={handleScroll} ref={modalContentRef} >
        <div className="absolute top-[50%] right-0 bg-gray-300 h-[70px] flex items-center justify-center rounded-md px-1" id="scroll-icon">
            <FaAngleRight />
          </div>
          {categories.map((item, index) => (
            <div key={index} className={index === 0 ? 'category-first' : ''}>
                <Link to='/products'>
              <h3 className="text-[1rem] font-medium  hover:text-orange cursor-pointer">{item.category}</h3>
              </Link>
              <ul className="flex flex-col gap-y-2 mt-3">
                {item.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className=" capitalize text-sm hover:text-orange cursor-pointer">{subcategory}</li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        </div>
        <div className="w-[30%]  ">
          <h2 className="text-[1rem] font-medium my-6">Top Categories</h2>
          <div className="grid grid-cols-2 gap-2 mt-7">
            {product.map((item) => (
            <div key={item.id}>
                <img src={item.image} alt="" className="h-[100px] rounded-lg" />
            </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
