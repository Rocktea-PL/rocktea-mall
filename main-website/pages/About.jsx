import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Partners from "../src/Components/Partners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
function About() {
  const [loading, setLoading] = useState(true);
  const sliderSettings = {
    // removes default buttons
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay for content loading

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="mt-[5rem] mb-20 overflow-x-hidden">
      <figure className="relative h-full lg:w-full">
        {loading ? (
          <Skeleton width={"100%"} height={300} />
        ) : (
          <>
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399804/rocktea-main-website/assets/About_Us_1_hycsrn.png"
              className="hidden lg:block w-full h-full object-contain"
              alt="about hero"
            />

            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399801/rocktea-main-website/assets/About_Us_2_rnw8se.png"
              className=" lg:hidden w-full h-[250px] "
              alt="about hero"
            />
          </>
        )}

        <div className="text-white">
          <h3 className="absolute left-[50%] lg:left-10 top-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%] lg:top-[40%] text-white text-[3rem] lg:text-[5rem] whitespace-nowrap">
            About us
          </h3>
          <p className=" hidden lg:block absolute left-10 top-[60%]">
            “Discover our story: We’re more than a Brand, We’re an Experience!”
          </p>
        </div>
      </figure>
      <article className="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 px-7  ">
        <figure className=" w-[100%] md:w-[500px] md:h-[400px]">
          {loading ? (
            <Skeleton width={300} height={300} />
          ) : (
            <motion.img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702571192/rocktea-main-website/assets/Team_goals-rafiki_1_cmt2vg.svg"
              alt="our story"
              initial={{ opacity: 0, x: -150 }}
              whileInView={{
                opacity: 1,
                x: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className="w-full h-full object-cover"
            />
          )}
        </figure>
        <div className="lg:max-w-[50%] ">
          <div className="flex gap-5 ">
            {loading ? (
              <Skeleton width={16} height={1.5} />
            ) : (
              <span className="relative  after:absolute after:content-[''] after:w-16 xxsm:after:w-14 after:h-[1.5px]  after:bg-[var(--deep-blue)] after:top-[50%] mr-14"></span>
            )}
            {loading ? (
              <Skeleton width={200} height={40} />
            ) : (
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,

                  transition: {
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                className="xxsm:text-[22px]"
              >
                What are we here for?
              </motion.h3>
            )}
          </div>
          {loading ? (
            <Skeleton count={3} />
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className="mt-5"
            >
              Our mission is to empower businesses by providing them with a
              comprehensive and user-friendly platform that simplifies the
              entire Business to Business to Customers (B2B2C) drop-shipping
              process. We aim to develop a secure and efficient ecosystem where
              manufacturers, retailers and consumers can seamlessly collaborate,
              ensuring a smooth and satisfying buying experience for all
              stakeholders.
            </motion.p>
          )}
        </div>
      </article>

      <article className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 px-7">
        <figure className=" w-[100%] md:w-[500px]   md:h-[400px]">
          {loading ? (
            <Skeleton width={300} height={300} />
          ) : (
            <motion.img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702571193/rocktea-main-website/assets/Marketing_consulting-amico_1_jm83ru.svg"
              alt="our story"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{
                opacity: 1,
                x: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className="w-full h-full object-cover"
            />
          )}
        </figure>
        <div className="lg:max-w-[50%] ">
          <div className="flex gap-5 ">
            {loading ? (
              <Skeleton width={16} height={1.5} />
            ) : (
              <span className="relative  after:absolute after:content-[''] after:w-16 xxsm:after:w-14 after:h-[1.5px]  after:bg-[var(--deep-blue)] after:top-[50%] mr-14"></span>
            )}
            {loading ? (
              <Skeleton width={200} height={40} />
            ) : (
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,

                  transition: {
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                className="xxsm:text-[22px]"
              >
                Where are we going?
              </motion.h3>
            )}
          </div>
          {loading ? (
            <Skeleton count={3} />
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className="mt-5"
            >
              We envision a world where online shopping is not just about buying
              products but about discovering exciting new items that enhance
              your lifestyle. We want to be your go-to destination for the
              latest trends, unique finds, and everyday essentials.
            </motion.p>
          )}
        </div>
      </article>

      <article className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 lg:px-3 w-full sm:w-full">
        <figure className="lg:max-w-[50%] w-full">
          {loading ? (
            <Skeleton width={500} height={300} />
          ) : (
            <motion.img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298696/rocktea-main-website/assets/dropshipping-icons.png"
              alt="our story"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className="w-[85%] h-full"
            />
          )}
        </figure>
        <figure className="lg:max-w-[50%] w-full lg:pr-7">
          {loading ? (
            <Skeleton width={500} height={300} />
          ) : (
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298697/rocktea-main-website/assets/video-card.png"
              alt=""
              className="w-[85%] h-full"
            />
          )}
        </figure>
      </article>

      <div className="mt-10">
        <Partners />
      </div>

      <article>
        {loading ? (
          <Skeleton width={500} height={400} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: {
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            className=" relative overflow-hidden bg-[var(--deep-blue)]   p-10 mt-10"
          >
            <h3 className="text-white  mb-10 text-center">Why Choose Us</h3>
            <figure className=" hidden lg:block lg:absolute top-0 right-0 overflow-hidden w-[230px] h-auto">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298695/rocktea-main-website/assets/slant-wave.png"
                alt=""
              />
            </figure>
            <Slider {...sliderSettings} className="relative z-20 mx-auto">
              <div className="flex flex-col items-center justify-center mx-auto">
                <img
                  src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302268/rocktea-main-website/assets/Transport_cwpvjy.svg"
                  width={35}
                  height={35}
                  alt="truck"
                  className="mx-auto"
                />
                <h4 className="font-semibold text-xl text-white mt-5 text-center">
                  Superfast delivery
                </h4>
                <p className="text-[#CAC4D0] text-sm text-center mt-5">
                  Orders are delivered as soon as possible
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302269/rocktea-main-website/assets/support_sbivdv.svg"
                  width={35}
                  height={35}
                  alt="support"
                  className="mx-auto"
                />
                <h4 className="font-semibold text-center text-xl text-white mt-5">
                  24/7 Support
                </h4>
                <p className="text-[#CAC4D0] text-sm text-center mt-5">
                  Our customer care service is available on the GO.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302269/rocktea-main-website/assets/Shopping_Bag_hg7dux.svg"
                  width={35}
                  height={35}
                  alt="shopping"
                  className="mx-auto"
                />
                <h4 className="font-semibold text-center text-xl text-white mt-5">
                  Easy to shop
                </h4>
                <p className="text-[#CAC4D0] text-sm text-center mt-5">
                  We simplify your customer’s shopping experience
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302268/rocktea-main-website/assets/Return_On_Investment_yvcshk.svg"
                  width={35}
                  height={35}
                  alt="profit"
                  className="mx-auto"
                />
                <h4 className="font-semibold text-center text-xl text-white mt-5">
                  Great profit margin
                </h4>
                <p className="text-[#CAC4D0] text-sm text-center mt-5">
                  Unlocking Your Path to Exceptional Profitability
                </p>
              </div>
            </Slider>
          </motion.div>
        )}
      </article>

      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,

          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          },
        }}
        className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-20  bg-white rounded-lg py-10 px-7 mt-10 mx-auto"
      >
        <h3 className="text-[40px] text-black lg:mt-20">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center items-center gap-5">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
            className="w-[300px]"
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
            className="w-[300px]"
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
            className="w-[300px]"
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
            className="w-[300px]"
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
            className="w-[300px]"
          />
        </div>
      </motion.article>
    </section>
  );
}

export default About;
