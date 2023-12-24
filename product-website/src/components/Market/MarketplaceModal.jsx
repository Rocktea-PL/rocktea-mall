import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";
import { useQuery } from "react-query";
//import { useState } from "react";

export default function MarketplaceModal({ closeModal, products, productId }) {
  const [addPrice, setAddPrice] = useState(false);
  //const [price,setPrice] = useState()
  const [selectedSize, setSelectedSize] = useState("");
  const [retailPrices, setRetailPrices] = useState("");
  // const [selectedSizes, setSelectedSizes] = useState([]);
  //const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = products.find((product) => product.id === productId);

  const apiUrlProductVariant = import.meta.env.VITE_API_URL_PRODUCT_VARIANT;

  const { data: price /*isLoading: priceLoading,error*/ } = useQuery(
    ["productPrice", productId],
    async () => {
      const response = await axios.get(`${apiUrlProductVariant}${productId}`);
      console.log("response", response.data.variants);
      return response.data.variants;
    },
    {
      staleTime: 60000, // 60 seconds
    },
  );

  const handleRetail = (e) => {
    setRetailPrices(e.target.value);
  };
  const handleAddPrice = (id) => {
    setAddPrice((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const sliderSettings = {
    // removes default buttons
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // console.log(selectedProduct);
  //console.log(error)
  console.log(productId);

  const handleAddProduct = (e, id) => {
    //setSelectedId(id)
    e.preventDefault();
    console.log(id);
    // Prepare the data for the POST request
    const data = {
      retail_price: retailPrices, // Assuming you want the first size
      store: localStorage.getItem("storeId"), // Replace with your actual store ID
      // productvariant: id,
      product_variant: id,
    };

    // Make the POST request
    axios
      .post(
        "https://rocktea-mall-api-test.up.railway.app/rocktea/store_pricing/",
        data,
      )
      .then((response) => {
        // Handle the success response as needed
        console.log("Product added:", response.data);
        toast.success("Profit added successfully");
        handleGetProduct();
        closeModal();
      })
      .catch((error) => {
        // Handle errors
        console.error("Error adding product:", error.response);
        toast.error(error.response.data.non_field_errors[0]);
      });
  };

  const handleGetProduct = () => {
    //setSelectedId(id)
    // e.preventDefault()
    const store_id = localStorage.getItem("storeId");
    // Prepare the data for the POST reques

    axios
      .post(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/marketplace/?store=${store_id}&product=${productId}`,
      )
      .then((response) => {
        // Handle the success response as needed
        console.log("Product variant added:", response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error adding product:", error.response);
      });
  };

  const handleRemoveProduct = (productVariantId) => {
    // Make a DELETE request to remove the product
    axios
      .delete(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/store-variant/${productVariantId}/`,
      )
      .then((response) => {
        // Handle the success response as needed
        console.log("Product removed:", response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error removing product:", error.response);
      });
  };
  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay, not on the modal itself
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  const productVariant = selectedProduct.product_variants.length;
  console.log(retailPrices);
  return (
    <div className="modal-overlay z-[99]" onClick={handleOverlayClick}>
      <div className="pt-8 bg-white rounded-lg relative w-[95%] md:w-[70%] xsm:h-full  lg:w-[500px] flex flex-col   overflow-y-auto">
        <button onClick={closeModal} className="close-button">
          &times;
        </button>
        <Slider {...sliderSettings}>
          {selectedProduct?.images.map((item, index) => (
            <div key={index} className={index === 0 ? "category-first" : ""}>
              <Link to={`/product_details/${selectedProduct.id}`}>
                <figure className="w-[200px] h-[200px] block mx-auto">
                  <img
                    src={item?.url}
                    alt=""
                    className="rounded-lg object-cover w-full h-full"
                  />
                </figure>
              </Link>
            </div>
          ))}
        </Slider>
        <article className="flex flex-col gap-y-3 leading-[1] items-start mt-10 mb-10 h-auto">
          <h4 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1 ">
            Product Name:{" "}
            <span className="text-gold text-left font-semibold">
              {selectedProduct.name}
            </span>
          </h4>
          <h4 className=" text-sm font-medium flex items-center gap-x-5 mx-8 ">
            Available Stock:{" "}
            <span className="text-gold  text-left font-semibold">
              {selectedProduct.quantity}
            </span>
          </h4>

          <h4 className=" text-sm font-medium flex items-center gap-x-5 mx-8 mt-1 ">
            Category:{" "}
            <span className="text-gold font-semibold">
              {selectedProduct.category.name}
            </span>
          </h4>
          <h4 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1">
            SKU:{" "}
            <span className="text-gold font-semibold">
              {selectedProduct.sku}
            </span>
          </h4>
          <div>
            {productVariant === 0 && (
              <h4 className="text-sm font-medium flex items-center gap-5 mx-8 mt-1">
                Base Price:{" "}
                <span className="text-gold font-semibold text-center">
                  ₦ {selectedProduct?.wholesale_price?.toLocaleString("en-US")}
                </span>
              </h4>
            )}
          </div>
          <div>
            {price?.length > 0 && !selectedSize ? (
              <>
                <div className=" flex flex-col gap-x-3">
                  {price.map((item) => (
                    <div key={item.id}>
                      {item.size ? (
                        <div
                          key={item.id}
                          className="mx-8 flex items-center gap-3 mb-3"
                        >
                          <h4 className="text-sm font-medium">Size:</h4>
                          <select
                            name="size"
                            id="size"
                            onChange={(e) => setSelectedSize(e.target.value)}
                            value={selectedSize}
                          >
                            <option value={item.size}>{item.size}</option>
                          </select>
                        </div>
                      ) : (
                        <div
                          key={item.id}
                          className="mx-8 flex items-center gap-3 mb-3 -mt-3"
                        >
                          <h4 className="text-sm font-medium">Color</h4>
                          <select
                            name="size"
                            id="size"
                            onChange={(e) => setSelectedSize(e.target.value)}
                            value={selectedSize}
                          >
                            <option value={item.colors[0]}>
                              {item.colors[0]}
                            </option>
                          </select>
                        </div>
                      )}
                      {!item.size && (
                        <div>
                          <h4 className="text-sm font-medium flex items-center gap-5 mx-8 mt-1">
                            Base Price:{" "}
                            <span className="text-gold font-semibold text-center">
                              ₦ {item?.wholesale_price?.toLocaleString("en-US")}
                            </span>
                          </h4>

                          <div className="flex items-center justify-center mt-7 mx-3 md:mx-20 xsm:gap-x-2 gap-x-5 md:gap-10 ">
                            <button
                              className="flex items-center justify-center mx-auto common h-12 px-5 md:w-[150px] rounded-lg"
                              onClick={() => handleAddPrice(item.id)}
                            >
                              Add Product
                            </button>
                            <button
                              className="flex items-center justify-center mx-auto border-[1.3px] border-orange h-12  px-3 md:w-[150px] rounded-lg"
                              onClick={() => handleRemoveProduct(item.id)}
                            >
                              Remove Product
                            </button>
                          </div>

                          {addPrice && (
                            <div className="transition-all duration-[10s] delay-200 ease-in-out mx-auto mt-5">
                              <h4 className="text-center text-[20px] text-blue font-semibold">
                                Add Profit
                              </h4>
                              <form
                                action=""
                                className="px-5 flex items-center justify-center mx-auto gap-3 mt-5 max-w-[90%]"
                              >
                                <label htmlFor="" className="flex items-center">
                                  <span className="font-bold text-md px-3">
                                    ₦
                                  </span>
                                  <input
                                    type="number"
                                    name="retail_price"
                                    value={retailPrices}
                                    onChange={handleRetail}
                                    className="border bg-white shadow-md border-gray-200 h-10 xsm:!w-[150px] rounded px-5"
                                  />
                                </label>
                                <button
                                  className="p-2 px-4 rounded-md common"
                                  onClick={(e) => handleAddProduct(e, item?.id)}
                                  // disabled={selectedSizes.includes(selectedSize)}
                                >
                                  Go
                                </button>
                              </form>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              price?.length > 0 &&
              price
                .filter((item) => !selectedSize || item.size === selectedSize)
                .map((item) => (
                  <div key={item.id} className="">
                    <div>
                      {price.map((item) => (
                        <>
                          {item.size ? (
                            <div
                              key={item.id}
                              className="mx-8 flex items-center gap-3 mb-3"
                            >
                              <h4 className="text-sm font-medium">Size:</h4>
                              <select
                                name="size"
                                id="size"
                                onChange={(e) =>
                                  setSelectedSize(e.target.value)
                                }
                                value={selectedSize}
                              >
                                <option value={item.size}>{item.size}</option>
                              </select>
                            </div>
                          ) : (
                            <div
                              key={item.id}
                              className="mx-8 flex items-center gap-3 mb-3"
                            >
                              <h4 className="text-sm font-medium">Color</h4>
                              <select
                                name="size"
                                id="size"
                                onChange={(e) =>
                                  setSelectedSize(e.target.value)
                                }
                                value={selectedSize}
                              >
                                <option value={item.colors[0]}>
                                  {item.colors[0]}
                                </option>
                              </select>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                    <h4 className="text-sm font-medium flex items-center gap-5 mx-8 mt-1">
                      Base Price:{" "}
                      <span className="text-gold font-semibold text-center">
                        ₦ {item?.wholesale_price?.toLocaleString("en-US")}
                      </span>
                    </h4>

                    <div className="flex items-center justify-center mt-7 md:mx-20 gap-10 ">
                      <button
                        className="flex items-center justify-center mx-auto bg-orange h-12 w-[150px] rounded-lg"
                        onClick={() => handleAddPrice(item.id)}
                      >
                        Add Product
                      </button>
                      <button
                        className="flex items-center justify-center mx-auto border-[1.3px] border-orange h-12 w-[150px] rounded-lg"
                        onClick={() => handleRemoveProduct(item.id)}
                      >
                        Remove Product
                      </button>
                    </div>

                    {addPrice && (
                      <div className="transition-all duration-[10s] delay-200 ease-in-out mx-auto mt-5">
                        <h4 className="text-center text-[20px] text-blue font-semibold">
                          Add Profit
                        </h4>
                        <form
                          action=""
                          className="px-5 flex items-center justify-center mx-auto gap-3 mt-5"
                        >
                          <label htmlFor="" className="flex items-center">
                            <span className="font-bold text-md px-3">₦</span>
                            <input
                              type="number"
                              name="retail_price"
                              value={retailPrices.retail_price}
                              onChange={handleRetail}
                              className="border bg-white shadow-md border-gray-200 h-10 rounded px-5"
                            />
                          </label>
                          <button
                            className="p-2 px-4 rounded-md bg-orange"
                            onClick={(e) => handleAddProduct(e, item.id)}
                            // disabled={selectedSizes.includes(selectedSize)}
                          >
                            Go
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                ))
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
