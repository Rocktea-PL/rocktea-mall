import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  mb-4">
      <div
        className={`flex justify-between items-center py-7 px-5 cursor-pointer bg-white shadow-md  rounded-md ${
          isOpen ? "rounded-b-none" : ""
        }`} 
        onClick={toggleAccordion}
      >
        <div className= {`px-2 relative text-sm lg:text-md  ${
          isOpen ? "font-normal" : " font-semibold"
        }`} >{title}</div>
        <div>
          {isOpen ? (
            <span className="">
              <FaAngleDown className="border-[1.5px] w-[20px] lg:w-[40px] h-5 lg:h-7 border-solid border-black " />
            </span>
          ) : (
            <span className="">
              <FaAngleUp className="border-[1.5px] w-[20px] lg:w-[40px] h-5  lg:h-7 border-solid border-black " />
            </span>
          )}
        </div>
      </div>
      {isOpen && 
      <div
        className={`p-4 shadow-md panel bg-white border-t border-t-solid border-t-gray rounded-b-md ${
          isOpen ? "sticky top-0 bg-white max-h-[600px] transition-opacity duration-1000 opacity-100 " : "max-h-0 opacity-0 "
        }`}
      >
        <p className={`text-sm p-6 ${
          isOpen ? "sticky top-0 bg-white max-h-[600px] opacity-100  transition-all duration-1000" : "max-h-0 opacity-0 "
        }`}>{content}</p>
      </div>
      }
    </div>
  );
};

export default Accordion;
