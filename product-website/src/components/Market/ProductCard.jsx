//import { useEffect, useState } from "react";

////import axios from "axios";
//import { useUserProductContext } from "../../Hooks/UserProductContext";

export default function ProductCard({ id, quantity, image, name, openModal }) {
  //const {price } = useUserProductContext()

  // const [price,setPrice] = useState()
  const isImageAvailable = image && image.trim() !== "";
  const handleCardClick = () => {
    openModal(id);
  };
  const currentQuantity = quantity;
  //const [currentQuantity, setCurrentQuantity] = useState(quantity);

  /*Calculate the percentage based on the currentQuantity
  const percentage = (currentQuantity / quantity) * 100;
  // Determine the CSS class and color based on the percentage
  let progressBarClass = "bg-red-600"; // Default to red
  if (percentage > 50) {
    progressBarClass = "bg-green-500"; // Green for over 50%
  } else if (percentage > 20) {
    progressBarClass = "bg-orange"; // Orange for 15% to 50%
  } else if (percentage === 0) {
    progressBarClass = "bg-gray-400"; // Out of stock (0%)
  }*/

  return (
    <>
      {isImageAvailable ? (
        <div>
          <div
            onClick={handleCardClick}
            className=" hover:scale-[1.01] hover:shadow-md bg-white  hover:transition-all duration-300 ease-in-out overflow-hidden w-[220px]  mt-5 "
          >
            <span className=""></span>
            <figure className="w-full h-[200px] max-h-[200px] ">
              <img
                src={image}
                alt="Image 1"
                className="w-full object-cover h-full rounded-t-[0.2rem]"
              />
            </figure>

            <div className="block p-4 -mt-5 rounded-b-lg mx-auto">
              <p className="font-light whitespace-nowrap truncate text-[1rem] mt-5">
                {name}
              </p>

              <p className="text-[14px] ">
                {currentQuantity <= 0 ? (
                  <span className="text-red-500">Out of Stock</span>
                ) : (
                  <span className="opacity-[0.8]">
                    {currentQuantity} units left
                  </span>
                )}{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden">Image Not Available</div>
      )}
    </>
  );
}
/**<div
                className={`relative h-[0.6rem] rounded  mt-1 border border-solid border-gray-200 `}
              >
                <div
                  className={`absolute inset-0 rounded-sm ${progressBarClass}`}
                  style={{ width: `${percentage}%` }}
                ></div></div> */
