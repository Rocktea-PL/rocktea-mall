import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Hero1 from "../../assets/hero1.jpg";
import Hero2 from "../../assets/hero2.jpg";
import Hero3 from "../../assets/hero3.jpg";
import Hero4 from "../../assets/hero4.jpg";

const heroImages = [
  {
    id: 1,
    image: Hero1,
  },
  {
    id: 2,
    image: Hero2,
  },
  {
    id: 3,
    image: Hero3,
  },
  {
    id: 4,
    image: Hero4,
  },
];
export default function Hero() {
  const sliderSettings = {
    // removes default buttons
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <main className="-mt-14 lg:mt-[4rem]  h-full pb-8 pt-2 mx-1 ">
      <Slider {...sliderSettings}>
        {heroImages.map((item) => (
          <figure
            key={item.id}
            className=" flex items-center justify-center mt-5 h-full w-full max-w-[1300px] rounded-md"
          >
            <img
              src={item.image}
              alt="hero"
              className=" w-full h-full object-cover !rounded-md "
            />
          </figure>
        ))}
      </Slider>
    </main>
  );
}
{
  /* <main
      className=" mt-[5rem]  h-full pb-8 pt-2 mx-2 rounded-lg"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422713/rocktea-product-website/assets/Hero-section_acvj8a.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" mt-[5rem] md:mt-[6rem] px-10">
        <p className="text-[var(--orange)]">Save up to 30% buying</p>
        <h1 className='capitalize font-["Signika"] text-[30px] sm:text-[50px] lg:text-[60px] leading-tight font-bold text-white'>
          Essential for <br /> daily use...
        </h1>
        <button className="flex items-center gap-2 mt-10 bg-[var(--orange)] p-3 transition-all duration-500">
          Shop Now{" "}
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422681/rocktea-product-website/assets/arrow_flnowy.svg"
            width={35}
            height={50}
            alt=""
            className="w-8 arrow"
          />
        </button>
        <figure className=" w-[150px] md:w-[200px] lg:w-[300px] h-auto">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422688/rocktea-product-website/assets/hero-review_wqpmla.png"
            alt=""
            className="w-full object-cover mt-5"
          />
        </figure>
      </div>
    </main>*/
}
