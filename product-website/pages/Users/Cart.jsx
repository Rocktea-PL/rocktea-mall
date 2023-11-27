//import {  useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import CommonProducts from "../../src/components/Products/CommonProducts";
import Footer from "../../src/Features/Footer";
//import Navbar from "../../src/Features/UserNavbar";
//import { useUserProductContext } from "../../src/Hooks/UserProductContext";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  setRemoveItemFromCart,
  setDecreaseItemQuantity,
  setIncreaseItemQuantity,
  selectTotalQuantity,
  //setClearItems,
  setGetTotalAmount,
} from "../../src/Redux/CartSlice";
import { useDispatch } from "react-redux";
import {
  calculateTotal,
  calculateEstimatedTotal,
} from "../../src/Helpers/CartUtils";
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotalQuantity = useSelector(selectTotalQuantity);
  //const {setCart,cart} = useUserProductContext()
  const total = calculateTotal(cartItems);
  const estimatedTotal = calculateEstimatedTotal(cartItems);
  console.log("My Cart", cartItems);
  const handleIncrement = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      dispatch(setIncreaseItemQuantity(cartItems[itemIndex]));
      dispatch(setGetTotalAmount());
    }
    // dispatch(setIncreaseItemQuantity(product))
  };

  const handleDecrement = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      dispatch(setDecreaseItemQuantity(cartItems[itemIndex]));
      dispatch(setGetTotalAmount());
    }
    // dispatch(setDecreaseItemQuantity(product))
  };

  const handleRemoveProduct = (id) => {
    dispatch(setRemoveItemFromCart(id));

    //  dispatch(setRemoveItemFromCart(product));

    // dispatch(setDecreaseItemQuantity(product))
  };

  /* useEffect(() => {
    // Load the cart data from localStorage
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      
      setCart(parsedCart);
    }
  }, []);
console.log(cart)*/

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
          <p>{cartTotalQuantity || "0"} Items</p>
        </div>
        <hr className=" mb-5" />
        <div className="flex flex-col lg:flex-row justify-center w-full gap-5">
          {/* Cart Items */}
          <div className=" lg:w-3/4 w-full flex flex-col ">
            {/* Cart Item 1 */}

            {cartItems.map((items, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-white mb-4 items-start gap-3  w-full rounded-md  p-3   !justify-between"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center justify-center w-[120px] h-[120px]"></div>

                    <div className=" p-2 flex flex-col">
                      <p className="text-[20px] uppercase tracking-wide">
                        {items.product.name}
                      </p>
                      <p className="text-md font-semibold">
                        ₦ {items.selectedPrice}
                      </p>

                      <div className="flex items-center justify-center gap-5 max-w-[100px] py-2 rounded-md border border-solid border-[var(--orange)] mt-3">
                        <button
                          className=" "
                          onClick={() => handleDecrement(items)}
                        >
                          -
                        </button>
                        <p>{items.cartQuantity}</p>
                        <button
                          className=" "
                          onClick={() => handleIncrement(items)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={() => handleRemoveProduct(items.product.id)}
                      className=" block bg-[var(--orange)] p-3 w-[150px] rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Repeat the above structure for other cart items */}

          {/* Checkout */}
          <div className="lg:w-1/4 mb-10 ">
            <div className="bg-white p-4 w-full h-auto shadow rounded-md py-5 px-7">
              {/* Add your checkout elements here */}
              <h3 className="text-md font-semibold mb-2">Checkout</h3>
              <p className="my-2">Enter Promo Code</p>
              <div className="flex items-center border border-gray-300 rounded-md">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-0 p-2 rounded-tl-md rounded-bl-md   w-full"
                />
                <button className="block bg-[var(--orange)] p-2 px-4 rounded-md ">
                  Enter
                </button>
              </div>
              <div className="mt-8 flex flex-col text-left gap-y-8 ">
                <h3 className="flex items-start justify-between  text-center">
                  <span className="">Subtotal</span>
                  <span className="font-semibold flex-1 text-right mr-3">
                    ₦ {total.toLocaleString()}
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
                    ₦{estimatedTotal.toLocaleString()}
                  </span>
                </h3>
              </div>
              <Link to="/checkout">
                <button className="flex items-center justify-center mx-auto my-10 bg-[var(--orange)] rounded-md w-full h-12">
                  Checkout
                </button>
              </Link>
              {/* Add more checkout elements */}
            </div>
          </div>
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

/** <img
          
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
