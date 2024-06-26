//import CommonProducts from "../components/Products/CommonProducts";
//import Searchfilter from "./Searchfilter";

//import { Link } from "react-router-dom";
import Searchfilter from "../Searchfilter";
import ProductCard from "../ProductCard";

export default function Search({ filteredProducts, searchQuery }) {
  console.log(filteredProducts);
  return (
    <section className=" rounded-lg p-3 max-w-[80%]  lg:max-w-[1300px]  flex flex-col items-center justify-center mx-auto -mt-10">
      <div>
        <div className="relative max-md:flex items-center max-md:justify-between bg-white shadow-lg  rounded-md w-[500px] lg:w-[1000px] p-5 py-5">
          <h3 className=" whitespace-nowrap text-blue font-bold text-center text-[22px] capitalize">
            Search result for &quot;{searchQuery}&quot;{" "}
          </h3>
          <span className="lg:absolute right-5 top-6  text-[18px]">
            {filteredProducts?.length} products found
          </span>
        </div>
        <Searchfilter />
      </div>
      {filteredProducts?.length === 0 ? (
        <p>No products found </p>
      ) : (
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-2 ">
          {filteredProducts?.length > 0 &&
            filteredProducts.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  id={item?.id}
                  productId={item?.id}
                  image={item?.images[0]?.url}
                  name={item?.name}
                  quantity={item?.quantity}
                  variants={item?.product_variants}
                  oldPrice={item?.oldPrice}
                />
              );
            })}
        </article>
      )}
    </section>
  );
}
