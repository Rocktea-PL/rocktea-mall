//import React from "react";

const SizeModal = ({ isOpen, onClose, variantData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000b3] flex items-center  justify-center z-50">
      <div className="relative shadow-sm max-w-[80%]  bg-white w-[85%] sm:w-[400px]  h-[420px] rounded-[10px] px-5 py-10">
        <span
          className="absolute right-2 text-black top-2 text-3xl  px-3 text-small cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <h3 className="text-[1.2rem]">Please select a variation</h3>
        <div className="mt-5">
          {variantData?.store_variant?.length > 0 &&
            variantData.store_variant.map((variant, index) => (
              <ul key={index} className="flex items-center justify-between">
                <li className="font-bold text-xl">
                  {variant.size} <br /> ₦ {variant.retail_price}
                </li>
                <button className="bg-orange px-3 py-3 mb-3 rounded-md text-white">
                  Add to Cart
                </button>
              </ul>
            ))}
        </div>
        <hr />
        <button className="mt-5 border border-orange px-3 py-3 rounded-md mb-10">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SizeModal;
