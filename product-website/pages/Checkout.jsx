import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../src/Hooks/Context";
import Navbar from "../src/Features/UserNavbar";
import Footer from "../src/Features/Footer";

//import {PaystackButton} from "react-paystack";
function Checkout() {
  const { paymentInfo, setPaymentInfo } = useGlobalContext();
  return (
    <>
    <Navbar />
    
    
    <section className="px-5 mx-5">
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
          Pepsi
          <FaAngleRight />
        </p>
        <p className="flex items-center">
          Cart
          <FaAngleRight />
        </p>
        <p className="flex items-center">
          Checkout
          <FaAngleRight />
        </p>
      </div>
      <hr className=" mb-5" />
      <article className="flex justify-between gap-x-16">
        <div className="w-1/2">
          <h3 className="font-semibold text-xl">Customer Information</h3>
          <form
            action=""
            className="checkout-form grid grid-cols-2 gap-3 my-10"
          >
            <input type="text" />
            <input type="text" />
            <input type="text" className="col-span-2" />
            <input type="text" />
            <input type="text" />
          </form>
          <div>
            <h3 className="font-semibold text-xl">Shipping Information</h3>
            <form
              action=""
              className="checkout-form grid grid-cols-2 gap-3 my-10"
            >
              <input type="text" className="col-span-2" />
              <input type="text" />
              <input type="text" />
              <input type="text" className="col-span-2" />
            </form>
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="font-semibold text-xl">Payment Information</h3>
          <p className="text-sm text-red-500">
            We do not accept payment on delivery{" "}
          </p>
          <form action="" className="mb-3">
            <div className="checkout-form grid grid-cols-2 gap-3 my-10">
              <label htmlFor="cardNumber" className="col-span-2">
                {" "}
                Card Number
                <input
                  type="text"
                  id="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={(e) =>
                    setPaymentInfo({
                      ...paymentInfo,
                      cardNumber: e.target.value,
                    })
                  }
                />
              </label>
              <label htmlFor="expiryDate">
                {" "}
                Expiry Date
                <input
                  type="text"
                  id="expiryDate"
                  value={paymentInfo.expiryDate}
                  onChange={(e) =>
                    setPaymentInfo({
                      ...paymentInfo,
                      expiryDate: e.target.value,
                    })
                  }
                />
              </label>
              <label htmlFor="cvv">
                {" "}
                CVV/CVC
                <input
                  type="text"
                  id="cvv"
                  value={paymentInfo.cvv}
                  onChange={(e) =>
                    setPaymentInfo({
                      ...paymentInfo,
                      cvv: e.target.value,
                    })
                  }
                />
              </label>
            </div>
            <div className="flex gap-2 mb-5">
              <input type="checkbox" />
              <label htmlFor="">Save card for future details</label>
            </div>
            <div>
              <h2>Summary</h2>
              <div className="bg-white border boder-solid border-gray-500 p-4 w-full h-auto shadow rounded-xl py-5 px-7">
                {/* Add your checkout elements here */}

                <div className="flex flex-col text-left gap-y-3 ">
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

                  <h3 className="flex items-center justify-between ">
                    <span className="">Estimated Total</span>
                    <span className="font-semibold">₦12,500</span>
                  </h3>
                </div>

                {/* Add more checkout elements */}
              </div>
              <Link to="/checkout">
                <button className="flex items-center justify-center mx-auto my-5 bg-[var(--orange)] rounded-md w-full h-12">
                  Checkout
                </button>
              </Link>
            </div>
          </form>
        </div>
      </article>
    </section>
    <Footer />
    </>
  );
}

export default Checkout;
