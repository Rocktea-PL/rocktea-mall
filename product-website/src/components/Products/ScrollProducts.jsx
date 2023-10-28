import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Features/ProductCard";
import "./index.css";
export default function ScrollProducts({ categoryTitle, products }) {
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

  return (
    <div className="">
      <div className="relative w-full mt-5 bg-white z-[10] p-5">
        <h2 className="font-semibold text-md lg:text-2xl">{categoryTitle}</h2>
        <span
          className="absolute top-5 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <div className="relative">
          <article
            className={`flex  overflow-x-scroll gap-2 scroll-smooth`}
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {products.map((item,index) => (
              <ProductCard
                key={index}
                id={item.id}
                image={item?.images[0]?.url}
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            ))}
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
