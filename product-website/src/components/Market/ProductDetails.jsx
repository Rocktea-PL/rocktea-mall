import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../Features/Footer";
import CommonProducts from "../Products/CommonProducts";
import { useQuery } from "react-query";
import Thumbnails from "../../Helpers/Thumbnails";
import { useProductPrices } from "../../Hooks/UseProductPrices";
////mport { useUserProductContext } from "../../Hooks/UserProductContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TruncateDescription from "../../Features/TruncateDescription";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //console.log(id)
  const store_id = localStorage.getItem("storeId");

  const { productPrices, isLoading } = useProductPrices(id);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizeId, setSelectedSizeId] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const [initialSizeSet, setInitialSizeSet] = useState(false);
  //const [counter, setCounter] = useState(
  // Object.keys(quantityInCart).length > 0,
  // );

  //Effects for controling  states of the counter, cart item and sizes

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
  const fetchProductDetails = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/product-details/${id}`,
    );
    return response.data;
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
  //console.log("product data", productDet);

  // console.log(productDet)
  //fetchVariantData()

  const handleSizeClick = (size, price, id) => {
    setSelectedSize(size, price);
    setSelectedSizeId(id);
    setSelectedPrice(price);
  };
  const handleColorClick = (color, price, id) => {
    setSelectedColor(color, price);
    setSelectedSizeId(id);
    //setIsModalOpen(true)
    setInitialSizeSet(true);
    setSelectedPrice(price);
  };
  //console.log(productPrices)
  //)
  const removeProduct = async () => {
    try {
      // Make a DELETE request to remove the product
      await axios.delete(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/marketplace/?product=${id}&store=${store_id}/`,
      );
      toast.success("Product Removed Successfully");
      navigate("/");
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };
  console.log(productDet);
  //console.log(productDet.product_variants[0].wholesale_price);
  return (
    <>
      <section className="relative mt-20 px-5 lg:px-0 max-w-[1300px] m-auto bg-white rounded max-md:mx-3 pt-5">
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
            <div className="hidden md:flex flex-col md:flex-row md:items-center gap-3 md:divide-x-2 divide-gray-300 mt-2">
              <p className="capitalize font-bold md:pr-2">
                Brand:
                <span className="font-medium">
                  {productDet?.brand?.name}
                </span>{" "}
              </p>
              <p className="capitalize font-bold md:px-2">
                Category:
                <span className="font-medium">
                  {productDet?.subcategory?.name}
                </span>
              </p>
              <p className="capitalize font-bold md:px-2">
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
                            className={`flex flex-col mb-3 ${
                              !color && "hidden"
                            }`}
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
            <div className="flex items-center  gap-5">
              <button
                className="bg-red-600  p-3 text-sm rounded-md text-white "
                onClick={removeProduct}
              >
                Remove Product
              </button>
            </div>
            <div className="mb-4 mt-10">
              <h3 className="text-md font-semibold border-b border-b-gray-300 pb-3">
                Product Details
              </h3>
              <TruncateDescription description={productDet?.description} />
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
            Category:{" "}
                  <span className="font-normal">
                    {" "}
                    {productDet?.subcategory?.name}
                  </span>{" "}
                </li>
                <li className="font-semibold">
                  Brand:{" "}
                  <span className="font-normal">
                    {" "}
                    {productDet?.brand?.name}
                  </span>{" "}
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
                <div className="flex items-center  gap-1">
                  <h3 className="font-semibold">Color:</h3>
                  {productPrices?.length > 0 && !isLoading ? (
                    productPrices.map((item, index) => {
                      // Use a Set to store unique colors
                      const uniqueColors = new Set(
                        item.colors.map((x) => x.toLowerCase()),
                      );
                      //console.log(uniqueColors)
                      return (
                        <div key={index}>
                          {Array.from(uniqueColors).map((color, colorIndex) => (
                            <li
                              key={colorIndex}
                              className="font-semibold flex items-center gap-1"
                            >
                              <div
                                className="flex items-center gap-1 w-5 h-5 rounded-sm"
                                style={{ backgroundColor: color }}
                              ></div>
                            </li>
                          ))}
                        </div>
                      );
                    })
                  ) : (
                    // Render loading or empty state if productPrices is empty or still loading
                    <p>
                      {isLoading ? "Loading..." : "No colors for this product"}
                    </p>
                  )}
                </div>

                <li className="font-semibold">
                  {" "}
                  Shop Type:
                  <span className="font-normal">
                    {" "}
                    {productDet.subcategory.name}
                  </span>
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

export default ProductDetails;

/**
 *  {isModalOpen && (
        <SizeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          variantData={variantData}
        />
      )}
 */
