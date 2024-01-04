/*eslint no-useless-escape: "off"*/
import "react-phone-number-input/style.css";

import { ImageWithLoading } from "../src/Components/ImageLoader";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
function SignupChoice() {
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleContinue = () => {
    if (selectedChoice === "service") {
      // Navigate to the service details page

      navigate("/services_details");
    } else if (selectedChoice === "sell_product") {
      // Navigate to the personal details page
      navigate("/personal_details");
    }
  };
  console.log(selectedChoice);
  return (
    <>
      <div className=" flex items-center justify-center lg:justify-start lg:h-screen lg:overflow-hidden">
        <div className="hidden w-full max-w-[45%] lg:flex ">
          <ImageWithLoading
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698348705/rocktea-main-website/assets/rocktea-signin_ncsai9.jpg"
            alt="rockteaBg-orange"
          />
        </div>
        <div className="max-w-[90%] lg:w-[45%] mx-auto flex flex-col items-center justify-center py-8 transition-all  px-5  h-full">
          <div className=" mt-10 lg:mt-0">
            <h2 className="mt-0 lg:text-start text-black leading-tight md:!text-[32px]">
              What’s your choice of store?
            </h2>
            <div
              onClick={() => setSelectedChoice("service")}
              className={`border-2 border-ash  ${
                selectedChoice === "service" && " !border-orange shadow-md"
              } bg-[#FCFCFC] px-5 h-auto py-2 md:h-[180px] flex flex-col items-start justify-center rounded-md my-7 md:my-10 cursor-pointer`}
            >
              <h4 className="text-md mb-3 font-semibold ">Render Service</h4>
              <p className="text-[18px]">
                Offer services in your chosen field. We create a client-friendly
                store for your specialized expertise, where clients can contract
                your service.
              </p>
            </div>
            <div
              onClick={() => setSelectedChoice("sell_product")}
              className={`border-2 border-ash  ${
                selectedChoice === "sell_product" && " !border-orange shadow-md"
              } bg-[#FCFCFC] px-5 h-auto py-2 md:h-[180px] flex flex-col items-start justify-center rounded-md my-8 cursor-pointer`}
            >
              <h4 className="text-md mb-3 font-semibold">Sell Products</h4>
              <p className="text-[18px]">
                We provide a store, curate it with your chosen products,
                simplifying customer purchases. You leave with your profits
                hassle-free.
              </p>
            </div>
            <button
              onClick={handleContinue}
              className="bg-orange flex items-center justify-center mx-auto w-full h-14 rounded-md font-medium"
              disabled={!selectedChoice}
            >
              Continue
            </button>
            <p className="text-sm text-center  hover:underline mt-8">
            Already have an account?{" "}
          <NavLink
            to="/signin"
            style={{ color: "var(--deep-blue)", fontWeight: "bold" }}
          >
            Sign In
          </NavLink>{" "}
        </p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default SignupChoice;
