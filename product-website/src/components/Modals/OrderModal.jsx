import { useLottie } from "lottie-react";
import OrderSuccess from "../../orderSuccessful.json";
import { Link } from "react-router-dom";

export default function OrderModal({ onClose }) {
  const options = {
    animationData: OrderSuccess,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000b3] flex items-center  justify-center z-50">
      <div className="relative shadow-sm max-w-[80%]  bg-white w-[85%] sm:w-[400px]  h-[420px] rounded-[10px] px-5 py-2">
        <span
          className="absolute right-2 text-black top-2 text-3xl  px-3 text-small cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <div className="flex flex-col -mt-5">
          <div className="w-[200px] h-[200px] flex items-center justify-center mx-auto  fill-orange">
            {View}
          </div>
          <div className="flex flex-col items-center justify-center -mt-7 w-full">
            <h3 className="font-bold text-md">Order Successful</h3>
            <p className="mt-2 text-[18px] text-center">
              Your order is complete “We will ensure a swift delivery”
            </p>
            <button className="border boder-orange rounded-md h-14 w-[70%] flex items-center justify-center mx-auto m-3">
              Order Details
            </button>

            <button className="common h-14 w-[70%] rounded-md flex items-center justify-center mx-auto">
              <Link to="/">Go to home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
