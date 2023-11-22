import axios from "axios";
import { useParams } from "react-router";
import CommonProducts from "../src/components/Products/CommonProducts";
import { useQuery } from "react-query";

function SeeAll() {
  const { categoryName } = useParams();
  //const [allProducts, setAllProducts] = useState();
  const store_id = localStorage.getItem("storeUid") || localStorage.getItem("storeId");

  const Data = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/marketplace/?store=${store_id}`,
    );
    return response.data.results;
  };
  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  // Use React Query's useQuery to fetch product details
  const {
    data: allProducts,
    status: productStatus,
    error,
  } = useQuery(["product", store_id], Data, {
    enabled: !!store_id,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: twentyFourHoursInMs, 
  });
  if (productStatus === "loading") {
    return <p>Loading...</p>;
  }

  if (productStatus === "error") {
    return <p>Error: {error}</p>;
  }
  //console.log(allProducts)

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
