export default function Hero() {
  return (
    <section
      className=" mt-[5rem]  h-full pb-8 pt-2  rounded-lg"
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
    </section>
  );
}
