import { useState } from "react";
import CommonProducts from "./CommonProducts";

const ProductDetails = () => {
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
    <section>
      <div className=" mt-20 flex flex-col md:flex-row  space-x-10 p-8">
        {/* Product Images */}
        <div className="flex flex-col md:flex-row-reverse gap-y-5 md:gap-x-4 w-full md:max-w-[50%] md:max-h-[500px] items-center justify-center ">
          {/* Main Image */}
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422697/rocktea-product-website/assets/ProductDet1_sathej.png"
            alt="Main Product"
            className=" w-[90%] md:w-[70%] h-full"
          />
          {/* Additional Images */}
          <div className="flex md:flex-col items-center justify-center space-x-3 md:space-y-3 w-full md:max-h-full ">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422697/rocktea-product-website/assets/ProductDet1_sathej.png"
              alt="Additional Product 1"
              className=" object-cover w-[100px] md:w-[90%] h-[80%]"
            />
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422698/rocktea-product-website/assets/ProductDet2_egpgdi.png"
              alt="Additional Product 2"
              className=" object-cover w-[100px] md:w-[90%] h-[80%]"
            />

            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422699/rocktea-product-website/assets/ProductDet3_kgdxcf.png"
              alt="Additional Product 3"
              className=" object-cover w-[100px] md:w-[90%] h-[80%]"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="relative flex flex-col mt-[3rem] md:mt-0 md:max-w-[50%] ">
          <h4 className="absolute top-[17%] right-3 text-sm">See Size Guide</h4>
          <h2 className="text-xl font-semibold uppercase">Pepsi (Can)</h2>
          <p className="font-bold my-2"> ₦12,300</p>
          <p>Product S/N #34215</p>
          <p className="text-gray-300 my-2">Instock</p>

          <div className="flex items-center justify-center gap-5 max-w-[100px] py-2 rounded-md border border-solid border-[var(--orange)]">
            <button className=" " onClick={handleDecrement}>
              -
            </button>
            <p>{quantity}</p>
            <button className=" " onClick={handleIncrement}>
              +
            </button>
          </div>

          <div className="flex space-x-2 my-5">
            <button
              className="border border-solid border-[var(--orange)] rounded-md px-3 py-1"
              onClick={() => {}}
            >
              S
            </button>
            <button
              className="border border-solid border-[var(--orange)] rounded-md px-3 py-1"
              onClick={() => {}}
            >
              M
            </button>
            <button
              className="border border-solid border-[var(--orange)] rounded-md px-3 py-1"
              onClick={() => {}}
            >
              L
            </button>
            <button
              className="border border-solid border-[var(--orange)] rounded-md px-3 py-1"
              onClick={() => {}}
            >
              XL
            </button>
            <button
              className="border border-solid border-[var(--orange)] rounded-md px-3 py-1"
              onClick={() => {}}
            >
              XXL
            </button>
          </div>

          <div className="mb-4">
            <button className="bg-[var(--orange)] p-3 text-sm rounded-md mb-8">
              Add To Cart
            </button>
            <h3 className="text-lg font-semibold border-b border-b-gray-300 pb-3">
              Product Details
            </h3>
            <p className="text-gray-600 my-5">
              Pepsi is a cool refreshing soft drink setting trends in Nigeria
              youth pop culture. Pepsi is an internationally recognized cola
              soft drink present in more than 200 countries worldwide. This
              refreshing delicious drink will have you savoring every gulp{" "}
            </p>

            <p className="text-gray-500">
              A cool soft drink to keep you refreshed at home and on the go.
              Pepsi is made with carbonated water, high fructose corn syrup,
              caramel color,sugar, phosphoric acid, caffeine, citric acid, and
              natural flavors. A refreshing drink that makes you come back for
              more.Pepsi is a cool refreshing soft drink setting trends in
              Nigeria youth pop culture. Pepsi is an internationally recognized
              cola soft drink present in more than 200 countries worldwide. This
              refreshing delicious drink will have you savoring every gulp..
            </p>
          </div>

          <div className=" ">
            <h3 className="text-lg font-semibold border-b border-b-gray-300 pb-3">
              Specifications
            </h3>
            <ul className=" pl-4 list-none flex flex-col gap-y-2 mt-5">
              <li className="font-semibold">
                SKU: <span className="font-normal">PE952DV3HZ2TTNAFAMZ</span>{" "}
              </li>
              <li className="font-semibold">
                Shop Name:{" "}
                <span className="font-normal"> D REAL FOOD STORE</span>{" "}
              </li>
              <li className="font-semibold">
                Model: <span className="font-normal"> 50cl</span>{" "}
              </li>
              <li className="font-semibold">
                Production Country: <span className="font-normal">Nigeria</span>{" "}
              </li>
              <li className="font-semibold">
                Weight (Kg): <span className="font-normal"> 0.3</span>{" "}
              </li>
              <li className="font-semibold">
                Certifications:{" "}
                <span className="font-normal">Eco Friendly</span>{" "}
              </li>
              <li className="font-semibold">
                Color: <span className="font-normal">Black</span>
              </li>
              <li className="font-semibold">
                Main Material:<span className="font-normal"> Plastic</span>
              </li>
              <li className="font-semibold">
                {" "}
                Shop Type:<span className="font-normal"> Groceries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-10">
        <CommonProducts />
      </div>
    </section>
  );
};

export default ProductDetails;
