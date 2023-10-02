import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import CommonProducts from "../src/components/Products/CommonProducts";
function Cart() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
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
        <p>8 Items</p>
      </div>
      <hr className=" mb-5" />
      <div className="flex flex-col md:flex-row justify-center w-full gap-5">
        {/* Cart Items */}
        <div className=" md:w-3/4 flex justify-between bg-white rounded-md  p-3 h-[150px]">
          {/* Cart Item 1 */}
          <div className="flex items-center   gap-3  justify-center">
            <div className="flex items-center justify-center w-[120px] h-[120px]">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422697/rocktea-product-website/assets/ProductDet1_sathej.png" // Replace with your actual image URL
                alt="Product"
                className="object-cover h-full w-full rounded-md"
              />
            </div>

            <div className=" p-2 flex flex-col">
              <p className="text-md uppercase tracking-wide">Pepsi (Can)</p>
              <p className="text-lg font-semibold">₦12,300</p>

              <div className="flex items-center justify-center gap-5 max-w-[100px] py-2 rounded-md border border-solid border-[var(--orange)] mt-3">
                <button className=" " onClick={handleDecrement}>
                  -
                </button>
                <p>{quantity}</p>
                <button className=" " onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="p-2">
            <button className=" block bg-[var(--orange)] p-3 rounded-lg">
              Delete
            </button>
          </div>
          {/* Repeat the above structure for other cart items */}
        </div>

        {/* Checkout */}
        <div className="md:w-1/4 mb-10 ">
          <div className="bg-white p-4 w-full h-auto shadow rounded-md py-5 px-7">
            {/* Add your checkout elements here */}
            <h3 className="text-lg font-semibold mb-2">Checkout</h3>
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
                  ₦12,300
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
                <span className="font-semibold">₦12,500</span>
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
  );
}

export default Cart;
