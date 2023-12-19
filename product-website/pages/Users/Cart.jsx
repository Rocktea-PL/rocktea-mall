//import {  useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import CommonProducts from "../../src/components/Products/CommonProducts";
import Footer from "../../src/Features/Footer";
//import Navbar from "../../src/Features/UserNavbar";
//import { useUserProductContext } from "../../src/Hooks/UserProductContext";

import { setIncreaseItemQuantity } from "../../src/Redux/CartSlice";
import { useDispatch } from "react-redux";
import { calculateTotal, calculateSubtotal } from "../../src/Helpers/CartUtils";
import { useUserCartContext } from "../../src/Hooks/CartContext";
import axios from "axios";
import toast from "react-hot-toast";
import { refreshPage } from "../../src/Helpers/Refresher";
import { useEffect } from "react";
import { useState } from "react";
function Cart() {
  const dispatch = useDispatch();

  const { carts, handleDeleteProductItems, totalQuantity } =
    useUserCartContext();
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const handleIncrement = async (cartItem) => {
    try {
      // Call the API to increment the quantity
      const response = await axios.patch(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/cart-item/${cartItem.id}/`,
        { quantity: cartItem.quantity + 1 },
      );
      console.log(response.data);
      // Dispatch action to update the local state with the updated quantity
      dispatch(setIncreaseItemQuantity(response.data));
      refreshPage();
      // Dispatch action to recalculate the total amount
      // dispatch(setGetTotalAmount());
    } catch (error) {
      console.error("Error incrementing quantity:", error.response);
      toast.error("Error incrementing quantity");
    }
  };

  const handleDecrement = async (cartItem) => {
    try {
      // Ensure the quantity does not go below 1
      const newQuantity = Math.max(1, cartItem?.quantity - 1);

      // Call the API to decrement the quantity
      const response = await axios.patch(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/cart-item/${cartItem.id}/`,
        { quantity: newQuantity },
      );
      console.log(response.data);
      // Dispatch action to update the local state with the updated quantity
      //dispatch(setDecreaseItemQuantity(response.data));
      refreshPage();
      // Dispatch action to recalculate the total amount
      //dispatch(setGetTotalAmount());
    } catch (error) {
      console.error("Error decrementing quantity:", error.message);
      toast.error("Error decrementing quantity");
    }
  };

  useEffect(() => {
    setSubtotal(calculateSubtotal(carts));
    // Assume fixed values for delivery cost and discount, replace with dynamic values
    const deliveryCost = 120;
    const discount = 12;
    setTotal(calculateTotal(carts, deliveryCost, discount));
  }, [carts]);

  // console.log(carts)
  return (
    <>
      <section className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 mb-4">
            <p className="flex items-center">
              Home
              <FaAngleRight />
            </p>
            <p className="flex items-center">
              Products
              <FaAngleRight />
            </p>
            <p className="flex items-center">
              Groceries
              <FaAngleRight />
            </p>
            <p className="flex items-center">
              Cart
              <FaAngleRight />
            </p>
          </div>
          <p>{totalQuantity || "0"} Items</p>
        </div>
        <hr className=" mb-5" />
        <div>
          {carts?.items?.length === 0 ? (
            <div className="bg-white mb-3 max-w-[600px] flex flex-col items-center justify-center mx-auto py-10 rounded-md px-6">
              <img
                width={320}
                height={320}
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1701240027/rocktea-product-website/assets/Empty_Bag_ccbshd.svg"
                alt="orders"
              />
              <h3 className="text-md text-center">Your cart is empty!</h3>
              <p>
                Browse our categories to discover <br />
                our best deals!
              </p>
              <Link to={`/`}>
                <button className="common p-3  font-medium rounded-md mt-5">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row justify-center w-full gap-5">
              <div className=" lg:w-3/4 w-full flex flex-col ">
                {carts?.length > 0 &&
                  carts.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col bg-white mb-4  gap-3  w-full rounded-md  p-3   "
                      >
                        {data.items.map((cart) => (
                          <div key={cart.id} className="flex !justify-between">
                            <div className="flex  items-center justify-center gap-3">
                              <div className="flex items-center justify-center w-[120px] h-[120px]">
                                <img src={cart?.product?.images[0]} alt="" />
                              </div>

                              <div className=" p-2 flex flex-col">
                                <p className="text-[20px] uppercase tracking-wide">
                                  {cart.product.name}
                                </p>
                                <p className="text-md font-semibold">
                                  ₦ {cart?.price?.toLocaleString()}
                                </p>

                                <div className="grid grid-cols-3 items-center divide-x divide-inherit w-[150px]  border border-[#acaaaa] rounded-md">
                                  <button
                                    className="max-w-1/3 h-12 text-inherit"
                                    onClick={() => handleDecrement(cart)}
                                  >
                                    -
                                  </button>
                                  <p className="px-5 flex items-center justify-center max-w-1/3 h-12">
                                    {cart.quantity}
                                  </p>
                                  <button
                                    className="max-w-1/3 h-12 text-inherit"
                                    onClick={() => handleIncrement(cart)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="p-2">
                              <button
                                onClick={() =>
                                  handleDeleteProductItems(cart.id)
                                }
                                className=" block common p-3 w-[150px] rounded-lg"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
              </div>

              <div className="lg:w-1/4 mb-10 ">
                <div className="bg-white p-4 w-full h-auto shadow rounded-md py-5 px-7">
                  <h3 className="text-md font-semibold mb-2">Checkout</h3>
                  <p className="my-2">Enter Promo Code</p>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border-0 p-2 rounded-tl-md rounded-bl-md   w-full"
                    />
                    <button className="block common p-2 px-4 rounded-md ">
                      Enter
                    </button>
                  </div>

                  <div className="mt-8 flex flex-col text-left gap-y-8 ">
                    <h3 className="flex items-start justify-between  text-center">
                      <span className="">Subtotal</span>
                      <span className="font-semibold flex-1 text-right mr-3">
                        ₦ {subtotal.toLocaleString()}
                      </span>
                    </h3>
                    <h3 className="flex items-start justify-between  ">
                      <span className="">Delivery Cost</span>
                      <span className="font-semibold flex-1 text-right mr-3">
                        ₦120
                      </span>
                    </h3>
                    <h3 className="flex items-start justify-between ">
                      <span className="">Discount</span>
                      <span className="font-semibold block flex-1 text-right mr-3">
                        ₦12
                      </span>
                    </h3>
                    <hr />
                    <h3 className="flex items-center justify-between ">
                      <span className="">Estimated Total</span>
                      <span className="font-semibold">
                        ₦ {total.toLocaleString()}
                      </span>
                    </h3>
                  </div>
                  <Link to="/checkout">
                    <button className=" common flex items-center justify-center mx-auto my-10  rounded-md w-full h-12">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mx-0 p-0">
          <CommonProducts />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;

/* <>
  





/** <img
      {total.toLocaleString()}    
{estimatedTotal.toLocaleString()}
src={items.images[0].url}
                  alt="Product"
                  className="object-cover h-full w-full rounded-md"

                />
                
                ------ IMPORTANT---------
                const selectedSize = "200 x 12"; // Replace this with the actual selected size

const productVariant = response.data.product_data.product_variants.find(
  variant => variant.size === selectedSize
);

if (productVariant) {
  const wholesalePrice = parseFloat(productVariant.wholesale_price);
  const retailPrices = response.data.store_variants
    .filter(variant => variant.product_variant === productVariant.id)
    .map(variant => parseFloat(variant.retail_price));

  const totalWholesalePrice = wholesalePrice;
  const totalRetailPrice = retailPrices.reduce((total, price) => total + price, 0);
  const totalPrice = totalWholesalePrice + totalRetailPrice;

  console.log('Total Wholesale Price:', totalWholesalePrice);
  console.log('Total Retail Price:', totalRetailPrice);
  console.log('Total Price (Wholesale + Retail):', totalPrice);
} else {
  console.log('Selected size not found.');
}


const wholesalePrice =
                items.product_data.product_variants[0].wholesale_price;
              const retailPrices = items.store_variants[0].retail_price;

              const wholesalePriceNumber = parseFloat(wholesalePrice);
              const retailPricesNumbers = parseFloat(retailPrices);

              const totalWholesalePrice = wholesalePriceNumber;
              const totalRetailPrice = retailPricesNumbers;
              const totalPrice = totalWholesalePrice + totalRetailPrice;

              console.log("Total Wholesale Price:", totalWholesalePrice);
              console.log("Total Retail Price:", totalRetailPrice);
              console.log("Total Price (Wholesale + Retail):", totalPrice);
                
                */
