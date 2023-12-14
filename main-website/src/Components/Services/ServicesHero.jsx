import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const heroImages = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1683141410787-c4dbd2220487?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "plumbing",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "make up",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Fashion",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "personal Assistant",
  },
];
export default function ServicesHero() {
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
        },
      },
    ],
  };
  return (
    <main className=" mt-[4rem]  h-full pb-8 pt-2 mx-2 ">
      <Slider {...sliderSettings}>
        {heroImages.map((item) => (
          <figure
            key={item.id}
            className=" flex items-center justify-center mt-5 h-[80vh] w-full max-w-[1300px] rounded-md"
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
