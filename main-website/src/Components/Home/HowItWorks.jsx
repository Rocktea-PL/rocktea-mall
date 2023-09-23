import Button from "../Button";
function HowItWorks() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between mt-3 gap-y-8 gap-x-[3rem]">
        <article className="lg:ml-2">
          <p className="text-[15px] text-[var(--yellow)]">Let´s show you</p>
          <h3 className=" text-[30px] md:text-[50px] font-semibold text-[var(--deep-blue)]">
            How It Works
          </h3>
          <figure className="mt-4 ">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421642/rocktea-main-website/assets/home2_kg7fxu.png"
             
              alt="home2 "
              className=" w-full h-full md:w-[500px] md:h-[600px] object-cover"
            />
          </figure>
        </article>

        <article className="lg:max-w-[50%]">
          <figure className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-y-3 mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421625/rocktea-main-website/assets/01_auzc8m.svg"
              
              alt="home1 "
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            />
            <p className="text-center lg:text-start">Create an account with just 6 easy clicks</p>
          </figure>
          <figure className="flex flex-col gap-y-3 items-center justify-center lg:items-start lg:justify-start mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421627/rocktea-main-website/assets/02_u4a5xm.svg"
              
              alt="home1"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            />
            <p className="text-center lg:text-start">Let user purchase goods with your coupon code </p>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-y-3 mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421627/rocktea-main-website/assets/03_jndhzq.svg"
             
              alt="home1"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            />
            <p className="text-center justify-center">Withdraw your commission anyday and anytime</p>
          </figure>
        </article>
      </section>
      <div className="flex items-center justify-center mt-3">
        <Button text="Get Started" />
      </div>
    </>
  );
}

export default HowItWorks;
