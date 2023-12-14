import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../Features/Footer";
import CommonProducts from "../Products/CommonProducts";
import { useDispatch, useSelector } from "react-redux";
import SizeModal from "../Modals/SizeModal";
import {
  addToCart,
  selectCartItems,
  setGetTotalAmount,
} from "../../Redux/CartSlice";
import toast from "react-hot-toast";
import Thumbnails from "../../Helpers/Thumbnails";
import { useQuery } from "react-query";
import { useProductPrices } from "../../Hooks/UseProductPrices";
import { FaHeart } from "react-icons/fa";
import { useUserCartContext } from "../../Hooks/CartContext";
/// handleIncrementQuantity,
const UserProductDetails = () => {
  const { productId } = useParams();
  const {
    selectedSize,
    selectedSizeId,
    setSelectedSize,
    setSelectedSizeId,
    setSelectedPrice,
    selectedPrice,
    quantityInCart,
    setQuantityInCart,
    // handleDecrementQuantity,
  } = useUserCartContext();
  const storeId = localStorage.getItem("storeUid");
  const authToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const { productPrices, isLoading } = useProductPrices(productId);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSizeSet, setInitialSizeSet] = useState(false);
  //const [counter, setCounter] = useState(
  // Object.keys(quantityInCart).length > 0,
  // );

  //Effects for controling  states of the counter, cart item and sizes
  useEffect(() => {
    //setCounter(Object.keys(quantityInCart).length > 0);
    // Update sessionStorage whenever quantityInCartBySize changes
    sessionStorage.setItem("quantityInCart", JSON.stringify(quantityInCart));
  }, [quantityInCart]);

  console.log(productPrices);
  useEffect(() => {
    if (!initialSizeSet && productPrices.length > 0) {
      const firstSize = productPrices[0]?.size;
      const firstColor = productPrices[0]?.colors[0];
      const firstSizeId = productPrices[0]?.id;
      const firstSizePrice = productPrices[0]?.retail_price;
      setSelectedColor(firstColor);
      setSelectedSize(firstSize);
      setSelectedSizeId(firstSizeId);
      setSelectedPrice(firstSizePrice);
      setInitialSizeSet(true);
    }
  }, [initialSizeSet, productPrices]);

  //Functions
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
  const handleSizeClick = (size, price, id) => {
    setSelectedSize(size, price);
    setSelectedSizeId(id);
    //setIsModalOpen(true)
    setInitialSizeSet(true);
    setSelectedPrice(price);
  };

  const handleColorClick = (color, price, id) => {
    setSelectedColor(color, price);
    setSelectedSizeId(id);
    //setIsModalOpen(true)
    setInitialSizeSet(true);
    setSelectedPrice(price);
  };

  const handleAddToCart = async (selectedPrice) => {
    if (!selectedSizeId) {
      toast.error("Please select a size before adding to cart.");
      return;
    }

    try {
      // Make a POST request to the cart API
      const quantityToAdd = 1;
      const stringWithComma = selectedPrice;
      const prices = parseInt(stringWithComma.replace(/,/g, ""), 10);
      const response = await axios.post(
        "https://rocktea-mall-api-test.up.railway.app/rocktea/cart/",
        {
          store: storeId,
          products: [
            {
              id: productDet.id, // Assuming productDet has the product ID
              quantity: quantityToAdd,
              variant: selectedSizeId,
              price: prices,
            },
          ],
        },

        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
      // Assuming the API response contains the updated cart information
      const updatedCart = response.data.items;
      console.log(updatedCart);
      //setCart(updatedCart);

      // Dispatch the action to update the Redux store
      dispatch(
        addToCart({
          product: updatedCart,
          selectedSize,
          selectedPrice,
        }),
      );
      dispatch(setGetTotalAmount());
      setQuantityInCart((prevQuantities) => ({
        ...prevQuantities,
        [selectedSizeId]: (prevQuantities[selectedSizeId] || 0) + 1,
      }));

      toast.success("Product added to cart successfully.");

      // setCounter(true);
    } catch (error) {
      // Handle errors
      console.error("Error adding product to cart:", error.response);
      toast.error("Failed to add product to cart.");
    }
  };

  console.log(selectedPrice);
  // console.log(productPrices)

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
            <div className="flex items-center gap-3 divide-x-2 divide-gray-300 mt-2">
              <p className="capitalize font-bold pr-2">
                Brand:
                <span className="font-medium">
                  {productDet?.brand?.name}
                </span>{" "}
              </p>
              <p className="capitalize font-bold px-2">
                Category:
                <span className="font-medium">
                  {productDet?.subcategory?.name}
                </span>
              </p>
              <p className="capitalize font-bold px-2">
                SKU: <span className="font-medium">{productDet?.sku}</span>
              </p>
            </div>
            <p className="text-gray-400 my-1">
              {productDet?.is_available ? (
                "Instock"
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
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
            <hr className="mb-3" />

            <div className="flex  items-center gap-3">
              {productPrices?.length > 0 && !isLoading ? (
                productPrices.map((item, index) => {
                  return (
                    <>
                      {item.size ? (
                        <div
                          key={index}
                          className={`flex flex-col ${!item.size && "hidden"}`}
                        >
                          <button
                            className={`border border-solid border-orange rounded-md px-3 !flex items-center space-x-3 mb-4 py-1 ${
                              item.size === selectedSizeId && "common "
                            }`}
                            onClick={() =>
                              handleSizeClick(
                                item.size,
                                item.retail_price,
                                item.id,
                              )
                            }
                          >
                            {item?.size}
                          </button>
                        </div>
                      ) : (
                        item.colors.map((color, index) => (
                          <div
                            key={index}
                            className={`flex flex-col ${!color && "hidden"}`}
                          >
                            {" "}
                            <p className="font-semibold uppercase mb-2">
                              Product Variants Available
                            </p>
                            <li
                              key={index}
                              onClick={() =>
                                handleColorClick(
                                  color,
                                  item.retail_price,
                                  item.id,
                                )
                              }
                              className="font-semibold flex items-center gap-1"
                            >
                              <div
                                className={
                                  selectedColor &&
                                  "border flex items-center justify-center border-solid  w-10 h-10 rounded-full"
                                }
                                style={{ borderColor: color }}
                              >
                                <div
                                  className="flex items-center justify-center gap-1 w-8 h-8 rounded-full"
                                  style={{ backgroundColor: color }}
                                ></div>
                              </div>
                            </li>
                            <div className="flex items-center gap-4  mt-3">
                              <button
                                onClick={() => handleAddToCart(selectedPrice)}
                                className={`${
                                  !selectedSize ||
                                  (!selectedColor && "bg-orange opacity-60")
                                }  p-3 text-sm rounded-md common`}
                                disabled={!selectedSizeId}
                              >
                                Add to Cart
                              </button>
                              <button
                                onClick={() => handleAddToCart(productDet)}
                                className="common px-5  py-3 text-sm rounded-md "
                              >
                                <FaHeart />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </>
                  );
                })
              ) : (
                <p>No product price found</p>
              )}
            </div>

            <div className="mb-4 mt-10">
              <h3 className="text-md font-semibold border-b border-b-gray-300 pb-3">
                Product Details
              </h3>
              <p className="text-gray-600 my-5">{productDet?.description}</p>
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
                  Shop Type:
                  <span className="font-normal capitalize">
                    {" "}
                    {productDet?.subcategory?.name}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <CommonProducts />
        </div>
        {isModalOpen && (
          <SizeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            variantData={productPrices}
            selectedSize={selectedSize}
            handleAddToCart={handleAddToCart}
            selectedPrice={selectedPrice}
            cartItems={cartItems}
            authToken={authToken}
          />
        )}
      </section>
      <Footer />
    </>
  );
};

export default UserProductDetails;
/**
  {cartItems
              .filter((item) => Array.isArray(item.product)) // Check if item.product is an array
              .filter((item) =>
                item.product.some(
                  (variant) => variant.product_variant === selectedSizeId,
                ),
              )
              .map((item) => (
                <div key={item.id}>
                  {/* Assuming you want to show quantity buttons for the first matching variant *
                  {item?.product.map((variant) => {
                    if (variant.product_variant === selectedSizeId) {
                      return (
                        <div className="flex flex-col  gap-3" key={variant.id}>
                          <div className="flex items-center gap-3 mt-3">
                            <button
                              onClick={() =>
                                handleDecrementQuantity(variant.id)
                              }
                              className={`${
                                !selectedSize ||
                                (!selectedColor && "opacity-60")
                              }  w-12 h-10 text-sm rounded-md common`}
                              disabled={!selectedSizeId}
                            >
                              -
                            </button>
                            <p>{quantityInCart[selectedSizeId]}</p>
                            <button
                              onClick={() => handleAddToCart(selectedPrice)
                              }
                              className={`${
                                !selectedSize ||
                                (!selectedColor && "opacity-60")
                              }  w-12 h-10 text-sm rounded-md common`}
                              disabled={!selectedSizeId}
                            >
                              +
                            </button>
                          </div>

                          
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
 
  {!counter && (
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handleAddToCart(selectedPrice)}
                                className={`${
                                  !selectedSize ||
                                  (selectedColor && "bg-orange opacity-60")
                                }  p-3 text-sm rounded-md common`}
                                disabled={!selectedSizeId}
                              >
                                Add to Cart
                              </button>
                              <button
                                onClick={() => handleAddToCart(productDet)}
                                className="common px-5  py-3 text-sm rounded-md "
                              >
                                <FaHeart />
                              </button>
                            </div>
                          )} */
