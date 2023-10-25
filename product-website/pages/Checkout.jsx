import { FaAngleRight, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { useGlobalContext } from "../src/Hooks/Context";
import Navbar from "../src/Features/UserNavbar";
import Footer from "../src/Features/Footer";
import { useStoreContext } from "../src/Hooks/UserAuthContext";
import { useNavigate } from "react-router-dom";

//import {PaystackButton} from "react-paystack";
function Checkout() {
  const navigate = useNavigate()
 // const { paymentInfo, setPaymentInfo} = useGlobalContext();
  const {userData} = useStoreContext();
 
    
      
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
        <div className="w-1/2 ">
          <div className=" relative py-7 px-5 rounded-md bg-white">
          <span onClick={() => navigate('/profile')} className="absolute right-2 top-3 text-orange"><FaEdit /></span>
          <h3 className="font-semibold text-xl mb-4">Customer Information</h3>
          <hr />
          <form
            action=""
            
            className=" checkout-form  grid gap-3 mt-5 mb-10"
          >
            
            <p className="capitalize font-semibold">First Name: {userData.first_name} </p>
           <p className="capitalize font-semibold">Last Name: {userData.last_name} </p>
           <p className="font-semibold">Email: {userData.email}</p> 
            <p className="font-semibold">Contact: {userData.contact} </p>
            
          </form>
          </div>
          <div className="relative mt-3 bg-white py-7 px-5 rounded-md ">
          <span onClick={() => navigate('/profile')} className="absolute right-2 top-3 text-orange"><FaEdit /></span>
            <h3 className="font-semibold text-xl">Shipping Information</h3>
            <form
              action=""
             
              className="checkout-form grid grid-cols-2 gap-3 my-10"
            >
              <input type="text" value={userData.address} className="col-span-2"  />
              
            </form>
          </div>
        </div>

        <div className="w-1/2">
        <h2 className="font-semibold text-xl bg-white py-4  px-3 rounded-md mb-5">Summary</h2>
         
          <form action="" className="mb-3">
           
            
            <div>
              
              <div className="bg-white border boder-solid border-gray-500 p-4 w-full h-auto shadow rounded-xl py-5 px-7">
                {/* Add your checkout elements here */}

                <div className="flex flex-col text-left gap-y-5 ">
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
