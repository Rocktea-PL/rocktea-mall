import { FaAngleRight, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { useGlobalContext } from "../src/Hooks/Context";
//import Navbar from "../../src/Features/UserNavbar";
import Footer from "../../src/Features/Footer";
import { useStoreContext } from "../../src/Hooks/UserAuthContext";
import { useNavigate } from "react-router-dom";

import { PaystackButton } from "react-paystack";
import axios from "axios";
import { selectCartItems } from "../../src/Redux/CartSlice";
import { useSelector } from "react-redux";
import {
  calculateEstimatedTotal,
  calculateTotal,
} from "../../src/Helpers/CartUtils";
function Checkout() {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const total = calculateTotal(cartItems);
  const estimatedTotal = calculateEstimatedTotal(cartItems);
  // const { paymentInfo, setPaymentInfo} = useGlobalContext();
  const { userData, store } = useStoreContext();
  const publicKey = "pk_test_87ac60396c1e2cca490d90abc08a418f08c9e970";
  const estimatedTotalInNaira = estimatedTotal * 100;
  console.log(estimatedTotalInNaira);

  const onSuccess = (reference) => {
    // You can access the payment reference here (in the reference variable)
    console.log("Payment reference: " + reference);
    const productsInCart = cartItems.map((item) => ({
      product: item.id, // Replace with the actual property name in your data
      quantity: item.cartQuantity,
      price: item.price, // Replace with the actual property name in your data
    }));

    // Prepare the data you want to send to the API
    const data = {
      products: productsInCart,
      shipping_address: userData.address,
      store: store.id,
    };

    // Make an HTTP POST request to your API
    axios
      .post(`https://rocktea-mall-api-test.up.railway.app/order/buy/`, data)
      .then((response) => {
        // Handle the API response if needed
        console.log("APIresponse:", response.data);
      })
      .catch((error) => {
        // Handle any errors from the API request
        console.error("API request error:", error);
      });
  };

  const onClose = () => {
    // Handle when the payment modal is closed.
    console.log("Payment closed");
  };

  const config = {
    email: userData.email,
    amount: estimatedTotalInNaira,
    publicKey,
    text: "Pay Now",
    onSuccess,
    onClose,
  };
  return (
    <>
      <section className="px-5 mx-5">
        <div className="flex items-center gap-1 mb-4">
          <Link to="/">
            <p className="flex items-center">
              Home
              <FaAngleRight />
            </p>
          </Link>
          <Link to="/">
            <p className="flex items-center">
              Products
              <FaAngleRight />
            </p>
          </Link>
          <Link to="/cart">
            <p className="flex items-center">
              Cart
              <FaAngleRight />
            </p>
          </Link>
          <p className="flex items-center">
            Checkout
            <FaAngleRight />
          </p>
        </div>
        <hr className=" mb-5" />
        <article className="flex justify-between gap-x-16">
          <div className="w-1/2 ">
            <div className=" relative py-7 px-5 rounded-md bg-white">
              <span
                onClick={() => navigate("/profile")}
                className="absolute right-2 top-3 text-orange"
              >
                <FaEdit />
              </span>
              <h3 className="font-semibold text-xl mb-4">
                Customer Information
              </h3>
              <hr />
              <form action="" className=" checkout-form  grid gap-3 mt-5 mb-10">
                <p className="capitalize font-semibold">
                  First Name: {userData.first_name}{" "}
                </p>
                <p className="capitalize font-semibold">
                  Last Name: {userData.last_name}{" "}
                </p>
                <p className="font-semibold">Email: {userData.email}</p>
                <p className="font-semibold">Contact: {userData.contact} </p>
              </form>
            </div>
            <div className="relative mt-3 bg-white py-7 px-5 rounded-md ">
              <span
                onClick={() => navigate("/profile")}
                className="absolute right-2 top-3 text-orange"
              >
                <FaEdit />
              </span>
              <h3 className="font-semibold text-xl">Shipping Information</h3>
              <form
                action=""
                className="checkout-form grid grid-cols-2 gap-3 my-10"
              >
                <input
                  type="text"
                  value={userData.address}
                  className="col-span-2"
                />
              </form>
            </div>
          </div>

          <div className="w-1/2">
            <h2 className="font-semibold text-xl bg-white py-4  px-3 rounded-md mb-5">
              Summary
            </h2>

            <form action="" className="mb-3">
              <div>
                <div className="bg-white border boder-solid border-gray-500 p-4 w-full h-auto shadow rounded-xl py-5 px-7">
                  {/* Add your checkout elements here */}

                  <div className="flex flex-col text-left gap-y-5 ">
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

                    <h3 className="flex items-center justify-between ">
                      <span className="">Estimated Total</span>
                      <span className="font-semibold">
                        ₦ {estimatedTotal.toLocaleString()}
                      </span>
                    </h3>
                  </div>

                  {/* Add more checkout elements */}
                </div>
                <Link to="/checkout">
                  <button className="flex items-center justify-center mx-auto my-5 bg-[var(--orange)] rounded-md w-full h-12">
                    <PaystackButton {...config} className="text-[17px]" />
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
