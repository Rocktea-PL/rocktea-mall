import { RxCaretDown } from "react-icons/rx";
import ProductCard from "../../Features/ProductCard";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { product } from "../constant/data";


export default function AllProducts() {
  
  return (
    <section className="mt-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Show Filter +</h3>
        <h3 className="flex items-center justify-center gap-1 font-semibold">
          Sort By <RxCaretDown className="text-2xl" />{" "}
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full justify-between  overflow-hidden mt-5">
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
      <div className="mt-10">
        <h2 className="lg:text-center font-semibold text-lg  lg:text-2xl">Recently Viewed</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 w-full justify-between  overflow-hidden mt-5">
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
