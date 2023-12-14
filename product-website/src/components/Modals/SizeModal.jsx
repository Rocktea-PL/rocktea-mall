//import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

const SizeModal = ({
  isOpen,
  onClose,
  variantData,
  selectedSize,
  selectedPrice,
  handleAddToCart,
  authToken,
}) => {
  const store_id = localStorage.getItem("storeUid");
  //rocktea/cart-item/40/
  const fetchCart = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/cart/`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );

    return response.data;
  };

  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  // Use React Query's useQuery to fetch product details
  const {
    data: cart,
    status: cartStatus,
    error,
  } = useQuery(["cart", store_id], fetchCart, {
    enabled: !!store_id,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: twentyFourHoursInMs, // Fetch only when 'id' is available
  });
  if (cartStatus === "loading") {
    return <p>Loading...</p>;
  }

  if (cartStatus === "error") {
    return <p>Error: {error}</p>;
  }
  console.log(cart);
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
          {variantData?.length > 0 &&
            variantData.map((variant, index) => (
              <div
                key={index}
                className="flex items-center justify-between mt-5"
              >
                <>
                  <p className="font-bold text-xl">
                    {variant.size} <br /> ₦ {variant.retail_price}
                  </p>
                </>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleAddToCart(selectedPrice)}
                    className={`${
                      !selectedSize ? "bg-orange opacity-60" : "bg-orange "
                    }  w-12 h-10 text-sm rounded-md`}
                    disabled={!selectedSize}
                  >
                    -
                  </button>
                  <p>{0}</p>
                  <button
                    onClick={() => handleAddToCart(selectedPrice)}
                    className={`${
                      !selectedSize ? "bg-orange opacity-60" : "bg-orange "
                    }  w-12 h-10 text-sm rounded-md`}
                    disabled={!selectedSize}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
        </div>
        <button className="mt-5 border border-orange px-3 py-3 flex items-center justify-center mx-auto rounded-md mb-10">
          Continue Shopping
        </button>
      </div>
      <hr />
    </div>
  );
};

export default SizeModal;
/**<div className="flex items-center justify-center gap-5 max-w-[100px] py-2 rounded-md mt-3">
                        {cartItems.map((item) => (

                          <div key={item.id} className="flex">
                            <ul  className="flex items-center justify-between">
                <li className="font-bold text-xl">
                  {selectedSize} <br /> ₦ {selectedPrice}
                </li>
               
              </ul>
                            <button
                          onClick={() => handleAddToCart(selectedPrice)}
                          className={`${
                            !selectedSize ? "bg-orange opacity-60" : "bg-orange "
                          }  w-12 h-10 text-sm rounded-md`}
                          disabled={!selectedSize}
                        >
                          -
                        </button>
                        <p>{item.cartQuantity || 0}</p>
                        <button
                          
                          onClick={() => handleAddToCart(selectedPrice)}
                          className={`${
                            !selectedSize ? "bg-orange opacity-60" : "bg-orange "
                          }  w-12 h-10 text-sm rounded-md`}
                          disabled={!selectedSize}
                        >
                          +
                        </button>
                          </div>
                        ))}
                      </div> */
