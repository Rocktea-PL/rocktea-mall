import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "../styles/swiper.css";
import { useState } from "react";

export default function Thumbnails({ productDet }) {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
  return (
    <div className="w-full">
      <div className="  lg:max-w-[90%] ">
        {/* Main Image */}

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={3}
          navigation={false}
          // autoplay={true}
          thumbs={{
            swiper:
              thumbsSwiperMobile && !thumbsSwiperMobile.destroyed
                ? thumbsSwiperMobile
                : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper  "
        >
          {productDet?.images?.length > 0 &&
            productDet?.images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item?.url}
                  alt="Additional Product 2"
                  className="  rounded-md  object-contain"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        {/* Additional Images */}
        <Swiper
          onSwiper={setThumbsSwiperMobile}
          loop={true}
          spaceBetween={2}
          slidesPerView={4}
          // autoplay={true}
          freeMode={true}
          // direction="vertical"
          // watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 mt-4   flex !flex-col overflow-auto"
        >
          {productDet?.images?.length > 0 &&
            productDet?.images.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center  "
              >
                <img
                  src={item?.url}
                  alt="Additional Product 2"
                  width={200}
                  height={200}
                  className=" object-contain  flex rounded-md"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
