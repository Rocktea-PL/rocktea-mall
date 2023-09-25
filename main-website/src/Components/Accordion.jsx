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
        className="flex justify-between items-center py-5 px-5 cursor-pointer bg-white rounded-md shadow-md transition-all duration-500"
        onClick={toggleAccordion}
      >
        <div className="px-2">{title}</div>
        <div>
          {isOpen ? (
            <span className=""><FaAngleDown className="border-[1.5px] border-solid border-black "  /></span>
          ) : (
            <span className=""><FaAngleUp className="border-[1.5px] border-solid border-black " /></span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4  shadow-lg transition-all duration-500 bg-white border-t border-t-solid border-t-gray">
          <p className="text-sm">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;