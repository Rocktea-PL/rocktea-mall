function About() {
  return (
    <section className="mt-[5rem] flex flex-col items-center justify-center mb-20">
      <figure className=" h-full lg:w-full">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/About_Us.png"
          className="w-full h-full object-contain"
          alt=""
        />
      </figure>
      <article className="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 px-7">
        <figure className="w-[300px] h-[300px]">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298697/rocktea-main-website/assets/Our_story_vmaky5.png"
            alt="our story"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="lg:max-w-[50%] ">
          <div className="flex gap-5 ">
            <span className="relative  after:absolute after:content-[''] after:w-16 after:h-[1.5px]  after:bg-[var(--deep-blue)] after:top-[50%] mr-14"></span>
            <h3 className=" text-3xl">Our Story</h3>
          </div>
          <p className="mt-7">
            At Rocktea Mall, we´re passionate about bringing you the latest
            trends and must-have products at affordable prices. We understand
            that today´s consumers are looking for convenience and value, and
            that´s exactly what we provide.
          </p>
        </div>
      </article>

      <article className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 px-7">
        <figure className="w-[300px] h-[300px]">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298697/rocktea-main-website/assets/vision.png"
            alt="our story"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="lg:max-w-[50%] ">
          <div className="flex gap-5 ">
            <span className="relative  after:absolute after:content-[''] after:w-16 after:h-[1.5px]  after:bg-[var(--deep-blue)] after:top-[50%] mr-14"></span>
            <h3 className=" text-3xl">Our Vision</h3>
          </div>
          <p className="mt-7">
            We envision a world where online shopping is not just about buying
            products but about discovering exciting new items that enhance your
            lifestyle. We want to be your go-to destination for the latest
            trends, unique finds, and everyday essentials.
          </p>
        </div>
      </article>

      <article className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 px-7">
        <figure className="lg:max-w-[50%]">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298696/rocktea-main-website/assets/dropshipping-icons.png"
            alt=""
          />
        </figure>
        <figure className="lg:max-w-[50%] pr-7">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298697/rocktea-main-website/assets/video-card.png"
            alt=""
          />
        </figure>
      </article>
      <article>
        <figure className="flex items justify-center gap-7 partner mt-12 w-full">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694422694/rocktea-product-website/assets/Partners_ajsaop.png"
            alt=""
          />
        </figure>

        <div className=" relative overflow-hidden bg-[var(--deep-blue)] flex flex-col items-center justify-center p-10 mt-10">
          <h3 className="text-white text-[40px] mb-10 ">Why Choose Us</h3>
          <figure className=" hidden lg:block lg:absolute top-0 right-0 overflow-hidden w-[230px] h-auto">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298695/rocktea-main-website/assets/slant-wave.png"
              alt=""
            />
          </figure>
          <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center justify-center gap-5 lg:mx-20 z-20">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302268/rocktea-main-website/assets/Transport_cwpvjy.svg"
                width={35}
                height={35}
                alt=""
              />
              <h4 className="font-semibold text-xl text-white mt-5">
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
                alt=""
              />
              <h4 className="font-semibold text-xl text-white mt-5">
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
                alt=""
              />
              <h4 className="font-semibold text-xl text-white mt-5">
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
                alt=""
              />
              <h4 className="font-semibold text-xl text-white mt-5">
                Great profit margin
              </h4>
              <p className="text-[#CAC4D0] text-sm text-center mt-5">
                Unlocking Your Path to Exceptional Profitability
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-20  bg-white rounded-lg py-10 px-7 mt-10">
        <h3 className="text-[40px] text-black lg:mt-20">Our Teams</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
        </div>
      </article>
    </section>
  );
}

export default About;
