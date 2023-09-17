import Button from "../Button";
function HowItWorks() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between mt-3 gap-y-8 gap-x-[3rem]">
        <article className="md:ml-2">
          <p className="text-[15px] text-[var(--yellow)]">Let´s show you</p>
          <h3 className="text-[54px] font-semibold text-[var(--deep-blue)]">
            How It Works
          </h3>
          <figure className="mt-4 ">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421642/rocktea-main-website/assets/home2_kg7fxu.png"
              width={500}
              height={600}
              alt="home2"
            />
          </figure>
        </article>

        <article className="md:max-w-[50%]">
          <figure className="flex flex-col gap-y-3 mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421625/rocktea-main-website/assets/01_auzc8m.svg"
              width={150}
              height={150}
              alt="home1"
            />
            <p className="">Create an account with just 6 easy clicks</p>
          </figure>
          <figure className="flex flex-col gap-y-3 mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421627/rocktea-main-website/assets/02_u4a5xm.svg"
              width={150}
              height={150}
              alt="home1"
            />
            <p className="">Let user purchase goods with your coupon code </p>
          </figure>
          <figure className="flex flex-col gap-y-3 mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421627/rocktea-main-website/assets/03_jndhzq.svg"
              width={150}
              height={150}
              alt="home1"
            />
            <p className="">Withdraw your commission anyday and anytime</p>
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
