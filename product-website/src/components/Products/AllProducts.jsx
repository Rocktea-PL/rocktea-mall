/*import { RxChevronDown} from "react-icons/rx";
import ProductCard from "../../Features/ProductCard";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { product } from "../constant/data";
import { FaAngleRight } from "react-icons/fa";

export default function AllProducts() {
  return (
    <section className="mt-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Show Filter +</h3>
       {/*  <h3 className="flex items-center justify-center gap-1 font-semibold">
          Sort By <RxChevronDown className="text-2xl" />
  </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 lg:grid-cols-5 w-[98%] justify-center mx-auto  overflow-hidden mt-5">
        {product.map((item) => (
          <>
            <Link to="/products/details">
              <ProductCard
                name={item.name}
                image={item.image}
                price={item.price}
                oldPrice={item.oldPrice}
                key={item.id}
              />
            </Link>
            <Link to="/products/details">
              <ProductCard
                name={item.name}
                image={item.image}
                price={item.price}
                oldPrice={item.oldPrice}
                key={item.id}
              />
            </Link>
          </>
        ))}
      </div>
      <Pagination />
      <div className="relative mt-10 bg-white p-3">
        <h2 className=" font-semibold text-md ">Recently Viewed</h2>
        <span
          className="absolute top-5 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <div className="flex overflow-x-scroll gap-3 snap-mandatory  scroll-smooth ">
          {product.map((item) => (
            <>
              <ProductCard
                name={item.name}
                image={item.image}
                price={item.price}
                oldPrice={item.oldPrice}
                key={item.id}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
*/
