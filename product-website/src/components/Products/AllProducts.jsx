//import { RxChevronDown} from "react-icons/rx";
import ProductCard from "../../Features/ProductCard";
import Pagination from "./Pagination";
//import { Link } from "react-router-dom";
//import { product } from "../constant/data";
//import { FaAngleRight } from "react-icons/fa";
//import { useUserProductContext } from "../../Hooks/UserProductContext";
import NoProduct from "./NoProduct";
import CommonProducts from "./CommonProducts";

export default function AllProducts({ FilterAllProducts }) {
  console.log(FilterAllProducts);

  return (
    <section className="mt-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Show Filter +</h3>
      </div>
      {FilterAllProducts?.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 lg:grid-cols-5 w-[98%] justify-center mx-auto  overflow-hidden mt-5">
            {FilterAllProducts.map((item) => (
              <ProductCard
                key={item?.id}
                id={item?.id}
                productId={item?.id}
                image={item.images[0]?.url}
                name={item?.name}
                quantity={item?.quantity}
                // price={combinedPrice?.toLocaleString()}
                oldPrice={item.oldPrice}
              />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <div className="max-w-[500px] mx-auto">
          <NoProduct />
        </div>
      )}

      <CommonProducts />
    </section>
  );
}

/**{/*  <h3 className="flex items-center justify-center gap-1 font-semibold">
          Sort By <RxChevronDown className="text-2xl" />
  </h3> */
