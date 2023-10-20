import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useEffect } from "react";
import { category } from "../constant/data";
//import { FaAngleRight } from "react-icons/fa";
//import { useRef } from "react";
import { Link } from "react-router-dom";

export default function MarketplaceModal({ closeModal }) {
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay, not on the modal itself
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay z-[9999]" onClick={handleOverlayClick}>
      <div className="pt-8 bg-white rounded-lg relative w-[70%] lg:w-[500px]  gap-16 ">
        <button onClick={closeModal} className="close-button">
          &times;
        </button>
        <Slider {...sliderSettings}>
          {category.slice(0, 3).map((item, index) => (
            <div key={index} className={index === 0 ? "category-first" : ""}>
              <Link to="/products/details">
                <figure className="w-[200px] h-[200px] block mx-auto">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-lg w-full h-full"
                  />
                </figure>
              </Link>
            </div>
          ))}
        </Slider>
        <article className=" flex flex-col items-start mt-10 mb-10">
          <h3 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1">
            Product Name:{" "}
            <span className="text-gold text-left font-semibold">
              Kellogg’s Corn Flakes
            </span>
          </h3>
          <h3 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1">
            Available Stock:{" "}
            <span className="text-gold  text-left font-semibold">389</span>
          </h3>
          <h3 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1">
            Product serial:{" "}
            <span className="text-gold font-semibold">#345678</span>
          </h3>
          <h3 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1">
            Category:{" "}
            <span className="text-gold font-semibold">Daily Groceries</span>
          </h3>
          <h3 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1">
            Price:{" "}
            <span className="text-gold font-semibold text-center">N500</span>
          </h3>

          <h3 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1">
            SKU: <span className="text-gold font-semibold">PDf5612batu</span>
          </h3>
          <div className="flex items-center mx-auto justify-center mt-7 gap-5">
            <button className="bg-orange h-12 w-[150px] rounded-lg">
              Add Product
            </button>
            <button className="border-[1.3px] border-orange h-12 w-[150px] rounded-lg">
              Remove Product
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
