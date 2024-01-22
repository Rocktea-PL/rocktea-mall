//import { useRef } from "react";
//import { HiOutlineHeart, HiOutlineShoppingBag} from "react-icons/hi2";
//import axios from "axios";
//import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductPrices } from "../Hooks/UseProductPrices";
//import { useUserProductContext } from "../Hooks/UserProductContext";
//import { useProductPrices } from "../Hooks/UseProductPrices";
//import { useUserProductContext } from "../Hooks/UserProductContext";

export default function ProductCard({
  image,

  name,
  oldPrice,
  quantity,
  productId,
}) {
  // const {fetchProductsPrice} = useUserProductContext()
  const isImageAvailable = image && image.trim() !== "";

  const currentQuantity = quantity;
  //const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const { variantsData /* isLoading */ } = useProductPrices(productId);
  //console.log("prices", variants);
  //console.log("pricesss", productPrices);
  // console.log("price", variants);
  /*if(isLoading){
    return <p>Loading...</p> 
  }*/

  return (
    <>
      {isImageAvailable ? (
        <Link to={`/product_details/${productId}`}>
          <div className="   w-[220px]  mt-5 ">
            <span className=""></span>
            <figure className=" flex items-center center mx-auto w-full lg:h-[200px] max-h-[200px] hover:scale-[1.01] ">
              <img
                src={image}
                alt="Image 1"
                className=" w-[85%] h-auto  md:w-full md:h-full object-cover rounded-t-[0.2rem]"
              />
            </figure>

            <div className=" bg-white w-[85%] md:w-full block px-4 py-3 rounded-b-lg hover:scale-[1.01] hover:shadow-md   hover:transition-all duration-300 ease-in-out overflow-hidden">
              <p className="font-light whitespace-nowrap truncate text-[1rem] mt-3">
                {name}
              </p>
              {variantsData?.length > 0 &&
                variantsData.map((item) => {
                  const total =
                    item?.wholesale_price + item?.store_pricings?.retail_price;
                  return (
                    <div key={item?.id}>
                      <p className="font-semibold">
                        ₦ {total?.toLocaleString()}
                      </p>
                    </div>
                  );
                })}

              <strike className="text-gray-400 text-[12px]">{oldPrice}</strike>
              <p className="text-[14px] ">
                {currentQuantity <= 0 ? (
                  <span className="text-red-500">Out of Stock</span>
                ) : (
                  <span className="opacity-[0.8]">
                    {currentQuantity} units left
                  </span>
                )}{" "}
              </p>
              {/*
   <div className="icons-container opacity-0 hover:opacity-100 absolute z-40 inset-0 flex items-center justify-between px-5 transition-opacity delay-200 duration-500 ease-in-out w-auto h-[50px]">
              <span className="text-xl font-bold text-orange bg-gray-100 rounded-md p-1" onClick={() => alert('it is working')}>
                <HiOutlineHeart />
              </span>
              <span className="text-xl font-bold text-orange bg-gray-100 rounded-md p-1">
              <HiOutlineShoppingBag/>
              </span>
              <span className="text-xl font-bold text-orange bg-gray-100 rounded-md p-1">
              <HiOutlineShoppingBag/>
              </span>
            </div>
   
   */}
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}

/** Calculate the percentage based on the currentQuantity
  const percentage = (currentQuantity / quantity) * 100;
  // Determine the CSS class and color based on the percentage
  let progressBarClass = "bg-red-600"; // Default to red
  if (percentage > 50) {
    progressBarClass = "bg-green-500"; // Green for over 50%
  } else if (percentage > 20) {
    progressBarClass = "bg-orange"; // Orange for 15% to 50%
  } else if (percentage === 0) {
    progressBarClass = "bg-gray-400"; // Out of stock (0%)
  } */
