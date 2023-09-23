import Button from "../Button";
import Counter from "./Counter";

function Hero() {
  const numbers = ["600+", "24 hrs"];
  const interval = 3000; // 3 seconds
  return (
    <section className="mt-[3.5rem] lg:mt-[8rem] flex flex-col lg:flex-row justify-center gap-20 sm:gap-28 lg:gap-[10rem] ">
      <article className=" mt-10 ">
        <h1 className="text-[2.3rem] sm:text-[3rem] lg:text-[5rem] font-[900] text-[var(--deep-blue)] whitespace-nowrap text-center lg:text-start">
          You Can Earn
          <br /> More With Ease
        </h1>
        <p className='font-["Sora"]  mt-5 mb-8 text-center lg:text-start  lg:w-[505px]'>
          You can earn as much as 250k a month. Unlocking financial potential
          has never been easier.
        </p>
        <div className="flex items-center justify-center gap-5 lg:justify-start">
          <Button text="Get Started" />
          <button className="flex items-center justify-center border border-solid border-[var(--yellow)] w-[150px] p-3 rounded-lg ">
            Learn More
          </button>
        </div>
        <Counter numbers={numbers} interval={interval} />
      </article>
      <figure className="relative flex items-center justify-center z-10">
        <div className="relative bg-[var(--deep-blue)] w-[400px] h-[400px] md:h-[550px] mt-3 rounded-[2rem]"></div>
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421644/rocktea-main-website/assets/receptionist_vbpllv.png"
          width={400}
          height={350}
          className="absolute bottom-0 "
        />
      </figure>
    </section>
  );
}

export default Hero;
