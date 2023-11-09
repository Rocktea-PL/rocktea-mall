import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay'
import '../styles/swiper.css'
import { useState } from 'react';

export default function Thumbnails({productDet}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
  return (
    <div className='w-full'>
        
          
          <div className="hidden lg:flex flex-row-reverse gap-5  w-full justify-center ">
            {/* Main Image */}
            
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={3}
        navigation={true}
        Autoplay={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper h-[500px] "
      >
              {productDet?.images?.length > 0 &&
                productDet?.images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item?.url}
                      alt="Additional Product 2"
                      className="  rounded-md   "
                    />
                  </SwiperSlide>
                ))}
           </Swiper>
            {/* Additional Images */}
            <Swiper
         onSwiper={setThumbsSwiper}
         loop={true}
         spaceBetween={2}
         slidesPerView={4}
         Autoplay={true}
         onAutoplayResume={true}
         freeMode={true}
    direction="vertical"
     watchSlidesProgress={true}
         modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper2 mt-4   flex !flex-col max-h-[300px]"
      >
              {productDet?.images?.length > 0 &&
                productDet?.images.map((item, index) => (
                  <SwiperSlide key={index} className="flex !flex-col">
                    <img
                      src={item?.url}
                      alt="Additional Product 2"
                      className=" object-cover w-[300px] h-[300px] block rounded-md"
                    />
                  </SwiperSlide>
                ))}
           </Swiper>
          </div>
          <div className="block lg:hidden gap-x-5  w-full justify-center lg:max-w-[50%]">
            {/* Main Image */}
            
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={3}
        navigation={true}
        Autoplay={true}
        thumbs={{ swiper: thumbsSwiperMobile && !thumbsSwiperMobile.destroyed ? thumbsSwiperMobile : null }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper h-[500px] "
      >
              {productDet?.images?.length > 0 &&
                productDet?.images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={item?.url}
                      alt="Additional Product 2"
                      className="  rounded-md   "
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
         Autoplay={true}
        freeMode={true}
        // direction="vertical"
        // watchSlidesProgress={true}
         modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper-mobile mt-4   flex !flex-col sm:max-w-[65%] max-h-[300px]"
      >
              {productDet?.images?.length > 0 &&
                productDet?.images.map((item, index) => (
                  <SwiperSlide key={index} className="flex !flex-col">
                    <img
                      src={item?.url}
                      alt="Additional Product 2"
                      className=" object-cover w-[100px] h-[100px] block rounded-md"
                    />
                  </SwiperSlide>
                ))}
           </Swiper>
          </div>
    </div>
  )
}
