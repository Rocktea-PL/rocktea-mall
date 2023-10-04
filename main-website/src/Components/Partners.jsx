import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Partners() {
  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="text-center mt-10 mb-8">Our Featured Brands</h2>

      <Slider {...sliderSettings}>
        {partners.map((logo) => (
          <figure key={logo.id} className="partner">
            <img
              src={logo.image}
              alt="partners"
              className=" w-[150px] h-[100px] object-contain "
            />
          </figure>
        ))}
      </Slider>
    </div>
  );
}

const partners = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399801/rocktea-main-website/assets/image_7_1_emqf2o.png",
    title: "Kellogs",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399801/rocktea-main-website/assets/image_16_1_j2ng03.png",
    title: "cocacola",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399801/rocktea-main-website/assets/image_6_1_rxa2pe.png",
    title: "hennessy",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399801/rocktea-main-website/assets/image_11_1_fvevun.png",
    title: "unilever",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399801/rocktea-main-website/assets/image_10_1_uxpocz.png",
    title: "dufil",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399800/rocktea-main-website/assets/image_13_1_xy2cv6.png",
    title: "samsung",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399800/rocktea-main-website/assets/image_21_1_zfzgf5.png",
    title: "pepsi",
  },
];
