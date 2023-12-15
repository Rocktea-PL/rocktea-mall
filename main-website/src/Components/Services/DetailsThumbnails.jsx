import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

import { useState } from "react";

const servicesDetails = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "plumber",
    name: "John Plumbing....",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1621436699529-27d0d04884e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "make up Artist",
    name: "viva Studios....",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1661741573027-7b95db386a03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Fashion Designer",
    name: "Benita Fashion....",
  },
];
export default function DetailsThumbnails({ servicesDetail }) {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
  return (
    <div className="w-full">
      {servicesDetail ? (
        <div className="  max-w-[90%] ">
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
            className="mySwiper h-[500px] "
          >
            <SwiperSlide className="flex flex-col items-center justify-center  ">
              <img
                src={servicesDetail.business_photograph}
                alt="Additional Product 2"
                className=" object-cover flex rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center  ">
              <img
                src={servicesDetail.business_photograph2}
                alt="Additional Product 2"
                className=" object-cover flex rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center  ">
              <img
                src={servicesDetail.business_photograph3}
                alt="Additional Product 2"
                className=" object-cover flex rounded-md"
              />
            </SwiperSlide>
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
            <SwiperSlide className="flex flex-col items-center justify-center  ">
              <img
                src={servicesDetail.business_photograph}
                alt="Additional Product 2"
                className=" object-cover flex rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center  ">
              <img
                src={servicesDetail.business_photograph2}
                alt="Additional Product 2"
                className=" object-cover flex rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center justify-center  ">
              <img
                src={servicesDetail.business_photograph3}
                alt="Additional Product 2"
                className=" object-cover flex rounded-md"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="  max-w-[90%] ">
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
            className="mySwiper h-[500px] "
          >
            {servicesDetails?.length > 0 &&
              servicesDetails.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item?.image}
                    alt="Additional Product 2"
                    className="  rounded-md   object-cover"
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
            {servicesDetails?.length > 0 &&
              servicesDetails.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center justify-center  "
                >
                  <img
                    src={item?.image}
                    alt="Additional Product 2"
                    className=" object-cover flex rounded-md"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
