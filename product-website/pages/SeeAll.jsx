import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router";
import CommonProducts from "../src/components/Products/CommonProducts";

function SeeAll() {
  const { categoryName } = useParams();
  const [allProducts, setAllProducts] = useState();

  const Data = async () => {
    try {
      const store_id = localStorage.getItem("storeUid");
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/marketplace/?store=${store_id}`,
      );
      console.log(response.data.results);
      setAllProducts(response.data.results);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    Data();
  }, []);

  const filteredProducts =
    allProducts?.length > 0 &&
    allProducts.filter((item) => item.product.subcategory == categoryName);
  console.log("filtered", filteredProducts);

  const mappedProducts =
    Array.isArray(filteredProducts) &&
    filteredProducts.map((item) => {
      const combinedPrice =
        item.product.product_variant.reduce(
          (totalPrice, productVariant) =>
            totalPrice + productVariant.wholesale_price,
          0,
        ) + item.product.store_variant[0].retail_price;
      return (
        <>
          {/* Render your product details here */}
          <div
            key={item.product.id}
            className=" hover:scale-[1.01] hover:shadow-md bg-white  hover:transition-all duration-300 ease-in-out overflow-hidden w-[220px]  mt-5 "
          >
            <span className=""></span>
            <figure className="w-full h-[200px] max-h-[200px] ">
              <img
                src={item.product?.images[0]?.url}
                alt="Image 1"
                className="w-full h-full object-cover rounded-t-[0.2rem]"
              />
            </figure>

            <div className="block p-4 -mt-5 rounded-b-lg mx-auto">
              <p className="font-light whitespace-nowrap truncate text-[1rem] mt-5">
                {item.product.name}
              </p>

              <p className="font-semibold">₦{combinedPrice.toLocaleString()}</p>

              <div className="relative h-[0.6rem] w-full mt-3 border border-solid border-gray-200 ">
                <div
                  className="absolute inset-0 bg-orange rounded-sm"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </>
      );
    });

  return (
    <>
      <section className="mt-20 rounded-lg p-3 max-w-[80%]  lg:max-w-[1300px]  flex flex-col items-center justify-center mx-auto ">
        <div>
          <div className="relative max-md:flex items-center max-md:justify-between bg-white shadow-lg  rounded-md w-[500px] lg:w-[1000px] p-5 py-5">
            <h3 className=" whitespace-nowrap text-blue font-bold text-center text-[22px] capitalize">
              {" "}
              &quot;{categoryName}&quot;{" "}
            </h3>
            <span className="lg:absolute right-5 top-6  text-[18px]">
              {filteredProducts?.length} products found
            </span>
          </div>
        </div>
        <article className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {mappedProducts}
        </article>
      </section>
      <CommonProducts />
    </>
  );
}

export default SeeAll;
