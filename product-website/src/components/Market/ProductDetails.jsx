import { useState } from "react";
//import CommonProducts from "./CommonProducts";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { useDispatch, } from 'react-redux';
import Footer from "../../Features/Footer";
import CommonProducts from "../Products/CommonProducts";
//import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import SizeModal from "../Modals/SizeModal";
//import ReactImageGallery from "react-image-gallery";
//import Navbar from "../../Features/UserNavbar";
//import { useStoreContext } from "../../Hooks/UserAuthContext";
//import { cartActions } from "../../Redux/CartSlice";
//import toast from "react-hot-toast";
const ProductDetails = () => {
  const { id } = useParams();
  // const {userDetails} = useStoreContext()
  //const dispatch = useDispatch();
  //const [quantity, setQuantity] = useState(1);

  //const dispatch = useDispatch();
  //const { data, status, error } = useSelector((state) => state.products);
  // const {userDetails} = useStoreContext()
  const [selectedSize, setSelectedSize] = useState(null);
  const [variantData, setVariantData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(1);

  //const [productDet,setProductDet] = useState()

  console.log(selectedSize);

  // Define a function to fetch product details
  const fetchProductDetails = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/product-details/?id=${id}`,
    );
    return response.data[0];
  };
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  // Use React Query's useQuery to fetch product details
  const {
    data: productDet,
    status: productStatus,
    error,
  } = useQuery(["product", id], fetchProductDetails, {
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: twentyFourHoursInMs, // Fetch only when 'id' is available
  });
  if (productStatus === "loading") {
    return <p>Loading...</p>;
  }

  if (productStatus === "error") {
    return <p>Error: {error}</p>;
  }
  console.log("product data", productDet);
  const fetchVariantData = async (size) => {
    if (productDet && productDet.product_variants) {
      // Use the API to fetch variant data for the selected size
      try {
        const store_id = localStorage.getItem("storeId");
        const response = await axios.get(
          `https://rocktea-mall-api-test.up.railway.app/rocktea/store-variant/?product=${productDet.id}&size=${size}&store=${store_id}`,
        );

        // Set the variant data
        console.log(size);
        setVariantData(response.data);
        console.log("variant", response.data);
      } catch (error) {
        console.error("Error fetching variant data:", error);
      }
    }
  };
  //fetchVariantData()

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setIsModalOpen(true);
    fetchVariantData(size);
  };

  return (
    <>
      <section className="relative mt-20 px-10 lg:px-0 max-w-[1300px] m-auto">
        <div className=" flex flex-col lg:flex-row w-full  lg:space-x-20 lg:p-8">
          {/* Product Images */}
          <div className="flex flex-col lg:flex-row-reverse gap-y-3   w-full  lg:max-h-[500px] items-center justify-center lg:max-w-[50%]">
            {/* Main Image */}
            <img
              src={productDet?.images[0]?.url}
              alt="Main Product"
              className=" w-[300px] h-[300px]  lg:w-[500px] lg:h-[400px] rounded-md object-cover  "
            />
            {/* Additional Images */}
            <div className="flex lg:flex-col items-center justify-center space-x-2 lg:space-y-2 w-full  ">
              {productDet?.images?.length > 0 &&
                productDet?.images.map((item, index) => (
                  <figure key={index}>
                    <img
                      src={item?.url}
                      alt="Additional Product 2"
                      className=" object-cover w-[80px] h-[80px] rounded-md "
                    />
                  </figure>
                ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="relative flex flex-col mt-[3rem] lg:mt-0  lg:max-w-[50%]">
            <h4 className="absolute top-[17%] right-3 text-sm">
              See Size Guide
            </h4>
            <h2 className=" font-semibold uppercase text-md">
              {productDet?.name}
            </h2>
            <p className="capitalize font-bold">
              Brand:{" "}
              <span className="font-medium">{productDet?.brand?.name}</span>{" "}
            </p>
            <p className="capitalize font-bold">
              Category:{" "}
              <span className="font-medium">
                {productDet?.subcategory?.name}
              </span>{" "}
            </p>
            <p className="capitalize font-bold">
              SKU: <span className="font-medium">{productDet?.sku}</span>
            </p>
            <p className="font-bold my-2 text-lg">
              {" "}
              ₦{" "}
              {productDet?.product_variants[0]?.wholesale_price.toLocaleString(
                "",
              )}{" "}
            </p>

            <p className="text-gray-300 my-2">
              {productDet?.is_available ? (
                "Instock"
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>

            <div className="flex space-x-2 my-5">
              {productDet?.product_variants.map((item, index) => (
                <button
                  key={index}
                  className="border border-solid border-[var(--orange)] rounded-md px-3 py-1"
                  onClick={() => handleSizeClick(item.size)}
                >
                  {item?.size}
                </button>
              ))}
            </div>

            <div className="mb-4">
              <button className="bg-red-600 text-white p-3 text-sm rounded-md mb-8">
                Remove Product
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
                Nigeria youth pop culture. Pepsi is an internationally
                recognized cola soft drink present in more than 200 countries
                worldwide. This refreshing delicious drink will have you
                savoring every gulp..
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
                  Quantity:{" "}
                  <span className="font-normal">
                    {" "}
                    {productDet?.quantity} units
                  </span>{" "}
                </li>
                <li className="font-semibold">
                  Production Country:{" "}
                  <span className="font-normal">Nigeria</span>{" "}
                </li>
                <li className="font-semibold">
                  Weight (Kg): <span className="font-normal"> 0.3</span>{" "}
                </li>
                <div className="flex  gap-1">
                  {productDet?.product_variants[0]?.colors?.length > 0 &&
                    productDet?.product_variants[0]?.colors.map((x, index) => {
                      let color = x.toLowerCase();
                      console.log(color);
                      return (
                        <>
                          <li key={index} className="font-semibold">
                            Color: <span className="font-normal">{color}</span>
                          </li>
                        </>
                      );
                    })}
                </div>

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
      {isModalOpen && (
        <SizeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          variantData={variantData}
        />
      )}
    </>
  );
};

export default ProductDetails;
