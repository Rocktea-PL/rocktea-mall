import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../Features/Footer";
import CommonProducts from "../Products/CommonProducts";
import { useDispatch /* useSelector*/ } from "react-redux";
//import { useQuery } from "react-query";
//import SizeModal from "../Modals/SizeModal";

import { addToCart, setGetTotalAmount } from "../../Redux/CartSlice";
import toast from "react-hot-toast";
import Thumbnails from "../../Helpers/Thumbnails";
import { useQuery } from "react-query";
import { useProductPrices } from "../../Hooks/UseProductPrices";
//import {  useUserProductContext } from "../../Hooks/UserProductContext";
//import { useUserProductContext } from "../../Hooks/UserProductContext";
//import toast from "react-hot-toast";
const UserProductDetails = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  //console.log(id)
  //const cartItems = useSelector((state) => state.cart.cartItems);

  const { productPrices, isLoading } = useProductPrices(productId);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  //const [variantData, setVariantData] = useState([]);

  const fetchProductDetails = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/product-details/${productId}`,
    );
    return response.data;
  };
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  // Use React Query's useQuery to fetch product details
  const {
    data: productDet,
    status: productStatus,
    error,
  } = useQuery(["product", productId], fetchProductDetails, {
    enabled: !!productId,
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
  //console.log("product data", productDet);

  // console.log(productDet)
  //fetchVariantData()

  const handleSizeClick = (size, price) => {
    setSelectedSize(size, price);

    setSelectedPrice(price);
  };

  //console.log(productPrices)
  //)

  /* const handleAddToCart = (selectedPrice) => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    dispatch(addToCart({ product: productDet, selectedSize, selectedPrice }));
    dispatch(setGetTotalAmount());

  };*/

  const handleAddToCart = async (selectedPrice) => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    const authToken = localStorage.getItem("accessToken");
    try {
      /*const existingProduct = cartItems.products.find(
        (product) => product.id === productDet.id
      );

      const quantityToAdd = existingProduct ? existingProduct.cartQuantity + 1 : 1;
console.log(quantityToAdd)*/
      // Make a POST request to the cart API
      const response = await axios.post(
        "https://rocktea-mall-api-test.up.railway.app/rocktea/cart/",
        {
          product: productDet.id, // Assuming productDet has the product ID
          quantity: 1, // You can set the quantity as needed
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
      // Assuming the API response contains the updated cart information
      const updatedCart = response.data;
      console.log(updatedCart);
      // Dispatch the action to update the Redux store
      dispatch(
        addToCart({
          product: updatedCart.products,
          selectedSize,
          selectedPrice,
        }),
      );
      dispatch(setGetTotalAmount());

      toast.success("Product added to cart successfully.");
    } catch (error) {
      // Handle errors
      console.error("Error adding product to cart:", error.response);
      toast.error("Failed to add product to cart.");
    }
  };

  // Rest of your component code...

  // console.log(productDet)

  // console.log(productDet.product_variants[0].wholesale_price)
  return (
    <>
      <section className="relative mt-20 px-10 lg:px-0 max-w-[1300px] m-auto bg-white rounded max-md:mx-10 pt-5">
        <div className=" flex flex-col lg:flex-row w-full  lg:space-x-20 lg:p-8">
          {/* Product Images */}
          <div className="lg:max-w-[50%]">
            <Thumbnails productDet={productDet} />
          </div>

          {/* Product Details */}
          <div className="relative flex flex-col mt-[3rem] lg:mt-0  lg:max-w-[50%]">
            {/**  <h4 className="absolute top-[17%] right-3 text-sm">
              See Size Guide
            </h4>*/}
            <h2 className=" font-semibold uppercase text-md">
              {productDet?.name}
            </h2>
            <p className="capitalize font-bold">
              Brand:
              <span className="font-medium">
                {productDet?.brand?.name}
              </span>{" "}
            </p>
            <p className="capitalize font-bold">
              Category:
              <span className="font-medium">
                {productDet?.subcategory?.name}
              </span>
            </p>
            <p className="capitalize font-bold">
              SKU: <span className="font-medium">{productDet?.sku}</span>
            </p>
            {productPrices?.length > 0 && !isLoading ? (
              <p className="font-bold my-2 text-lg">
                ₦{" "}
                {selectedSize
                  ? selectedPrice
                  : isLoading
                  ? "Loading..."
                  : productPrices[0]?.retail_price}{" "}
              </p>
            ) : (
              <p>No price</p>
            )}

            <p className="text-gray-300 my-2">
              {productDet?.is_available ? (
                "Instock"
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>

            <div className="flex items-center gap-3">
              {productPrices?.length > 0 && !isLoading ? (
                productPrices.map((item, index) => {
                  return (
                    <div key={index} className="flex">
                      <button
                        key={index}
                        className={`border border-solid border-[var(--orange)] rounded-md px-3 flex items-center space-x-3 mb-4 py-1 ${
                          item.size === selectedSize && "bg-orange "
                        }`}
                        onClick={() =>
                          handleSizeClick(item.size, item.retail_price)
                        }
                      >
                        {item?.size}
                      </button>
                    </div>
                  );
                })
              ) : (
                <p>No product price found</p>
              )}
            </div>

            <div className="flex items-center  gap-5">
              <button
                onClick={() => handleAddToCart(selectedPrice)}
                className={`${
                  !selectedSize ? "bg-orange opacity-60" : "bg-orange "
                }  p-3 text-sm rounded-md`}
                disabled={!selectedSize}
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToCart(productDet)}
                className="bg-orange  p-3 text-sm rounded-md "
              >
                Save Items
              </button>
            </div>
            <div className="mb-4 mt-10">
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
                <div className="flex  gap-1"></div>

                <li className="font-semibold">
                  {" "}
                  Shop Type:<span className="font-normal"> Groceries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <CommonProducts />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UserProductDetails;

/**
 *  {isModalOpen && (
        <SizeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          variantData={variantData}
        />
      )}
 */
