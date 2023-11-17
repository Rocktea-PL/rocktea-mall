import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Features/ProductCard";
import "./index.css";
import { Link } from "react-router-dom";
export default function ScrollProducts({ categoryTitle, products,subCategory }) {
  const scrollRef = useRef(null);
  //const [hovered, setHovered] = useState(false);
  const [scrollAtStart, setScrollAtStart] = useState(true);
  const [scrollAtEnd, setScrollAtEnd] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
      const isAtStart = scrollLeft === 0;
      const isAtEnd = scrollLeft + offsetWidth >= scrollWidth;
      setScrollAtStart(isAtStart);
      setScrollAtEnd(isAtEnd);
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
    }
  };

  //console.log('subcategory',subCategory)
  const decodedSubCategory = decodeURIComponent(subCategory);
  return (
    <div className="">
      <div className="relative w-full mt-5 bg-white z-[10] p-5">
        <h2 className="font-semibold text-md lg:text-2xl">{categoryTitle}</h2>
        <Link to={`/shop/${decodedSubCategory}`}>
        <span
          className="absolute top-5 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
        
        >
          See All <FaAngleRight />
        </span>
        </Link>
        <div className="relative">
          <article
            className={`flex  overflow-x-scroll gap-2 scroll-smooth`}
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {products.map((item, index) => {
              // const combinedPrice = item.product.product_variant[0].wholesale_price+ item.product.store_variant[0].retail_price;
              const combinedPrice =
                item.product.product_variant.reduce(
                  (totalPrice, productVariant) =>
                    totalPrice + productVariant.wholesale_price,
                  0,
                ) + item.product.store_variant[0].retail_price;
              return (
                <ProductCard
                  key={index}
                  id={item?.id}
                  productId={item?.product?.id}
                  image={item.product?.images[0]?.url}
                  name={item.product.name}
                  price={combinedPrice?.toLocaleString()}
                  oldPrice={item.oldPrice}
                />
              );
            })}
          </article>
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 transform -translate-y-1/2 -left-2 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full text-md text-white flex items-center justify-center ${
              !scrollAtStart ? "" : "hidden"
            } transition-opacity duration-300`}
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className={`absolute top-1/2 transform -translate-y-1/2 -right-2 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full  text-md text-white flex items-center justify-center ${
              !scrollAtEnd ? "" : "hidden"
            } transition-opacity duration-300`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
