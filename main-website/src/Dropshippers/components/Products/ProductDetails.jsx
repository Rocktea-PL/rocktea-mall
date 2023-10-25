import { useState } from "react";
import CommonProducts from "./CommonProducts";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from "react";
import Navbar from "../../Features/Navbar";
import Footer from "../../Features/Footer";
const ProductDetails = () => {
  const {id} = useParams()
  const [productDet,setProductDet] = useState()
 

  const getProductDetails =async () => {
    try{
      const response = await axios.get(`https://rocktea-mall-api-test.up.railway.app/rocktea/products/${id}`)
  //console.log(response.data)
  setProductDet(response.data)
  }catch(error){
      console.error(error)
  }
  }

  useEffect(() => {
getProductDetails()
  },[id])
  

  return (
    <>
    <Navbar/>
    <section className="mt-20 px-10 lg:px-0">
      <div className=" flex flex-col lg:flex-row w-full  lg:space-x-20 lg:p-8">
        {/* Product Images */}
        <div className="flex flex-col lg:flex-row-reverse gap-y-3   w-full  lg:max-h-[500px] items-center justify-center lg:max-w-[50%]">
          {/* Main Image */}
          <img
            src={productDet?.images[0].url}
            alt="Main Product"
            className=" w-[300px] h-[300px]  lg:w-[500px] lg:h-[400px] rounded-md object-cover  "
          />
          {/* Additional Images */}
          <div className="flex lg:flex-col items-center justify-center space-x-2 lg:space-y-2 w-full  ">
          <img
              src={productDet?.images[0].url}
              alt="Additional Product 2"
              className=" object-cover w-[100px] h-[100px] "
            />
            <img
              src={productDet?.images[1].url}
              alt="Additional Product 1"
              className=" object-cover w-[100px] h-[100px] "
            />
           

            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422699/rocktea-product-website/assets/ProductDet3_kgdxcf.png"
              alt="Additional Product 3"
              className=" object-cover w-[100px] h-[100px]"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="relative flex flex-col mt-[3rem] lg:mt-0  lg:max-w-[50%]">
          <h4 className="absolute top-[17%] right-3 text-sm">See Size Guide</h4>
          <h2 className=" font-semibold uppercase text-md">{productDet?.name}</h2>
          <p className="capitalize">Brand: {productDet?.brand?.name}</p>
          <p className="font-bold my-2 text-lg"> ₦12,300</p>
          <p>Product S/N {productDet?.sku}</p>
          <p className="text-gray-300 my-2">{productDet?.is_available ? 'Instock' : <span className="text-red-500">Out of Stock</span>
           }</p>

          

          <div className="flex space-x-2 my-5">
            <button
              className="border border-solid border-[var(--orange)] rounded-md px-3 py-1"
              onClick={() => {}}
            >
              {productDet?.sizes[0].name}
            </button>
            
          </div>

          <div className="mb-4">
            <button className="bg-red-600 text-white p-3 text-sm rounded-md mb-8">
              Remove
            </button>
            <h3 className="text-md font-semibold border-b border-b-gray-300 pb-3">
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
            <h3 className="text-md font-semibold border-b border-b-gray-300 pb-3">
              Specifications
            </h3>
            <ul className=" lg:pl-4 list-none flex flex-col gap-y-2 mt-5">
              <li className="font-semibold">
                SKU: <span className="font-normal">{productDet?.sku}</span>{" "}
              </li>
              
              <li className="font-semibold">
                Quantity: <span className="font-normal"> {productDet?.quantity} units</span>{" "}
              </li>
              <li className="font-semibold">
                Production Country: <span className="font-normal">Nigeria</span>{" "}
              </li>
              <li className="font-semibold">
                Weight (Kg): <span className="font-normal"> 0.3</span>{" "}
              </li>
              <li className="font-semibold">
                Color: <span className="font-normal">{productDet?.color}</span>
              </li>
              <li className="font-semibold">
                {" "}
                Shop Type:<span className="font-normal"> Groceries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <CommonProducts />
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ProductDetails;
