import { FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Features/ProductCard";
import { product } from "../constant/data";

function CommonProducts() {
  //console.log(product)
  return (
    <div className="relative mt-10 bg-white p-3 lg:mx-5">
      <h2 className=" font-semibold xsm:text-sm text-[1.2rem] md:text-md ">
        Customer Also Viewed
      </h2>
      <span
        className="absolute  top-3  md:top-5 -right-3 md:right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
        onClick={() => alert("yesss")}
      >
        See All <FaAngleRight />
      </span>
      <div className="flex overflow-x-scroll gap-3 snap-mandatory  scroll-smooth ">
        {product.map((item, index) => (
          <>
            <ProductCard
              name={item.name}
              image={item.image}
              price={item.price}
              oldPrice={item.oldPrice}
              key={index}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default CommonProducts;
