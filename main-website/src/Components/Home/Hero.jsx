//import Button from "../Button";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Hero() {
  const numbers = ["600+", "24 hrs"];
  const interval = 3000; // 3 seconds
  return (
    <section className="mt-[3.5rem] lg:mt-[8rem] flex flex-col lg:flex-row justify-between gap-20 sm:gap-28 ">
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
        className=" mt-10 "
      >
        <h1 className="text-lg sm:text-[3.8rem] lg:text-[5rem] font-[900] text-[var(--deep-blue)] whitespace-nowrap text-center lg:text-start">
          You Can Earn
          <br /> More With Ease
        </h1>
        <p className=" text-sm sm:text-md  mt-5 mb-8 text-center lg:text-start w-full ">
          Unleash Earning Potential: <br /> Earn up to 250k Monthly
          Drop-shipping
        </p>
        <div className="flex items-center justify-center gap-5 lg:justify-start ">
          <Link to="/signup">
            <button className="flex items-center justify-center bg-orange w-[120px] xsm:w-[150px] p-3 rounded-lg whitespace-nowrap ">
              Get Started
            </button>
          </Link>
          <Link to="/about">
            <button className="flex items-center justify-center border border-solid border-[var(--yellow)]  w-[120px] xsm:w-[150px] p-3 rounded-lg whitespace-nowrap">
              Learn More
            </button>
          </Link>
        </div>
        <div className=" block sm:hidden lg:block">
          <Counter numbers={numbers} interval={interval} />
        </div>
      </motion.article>
      <div className="flex">
        <div className="hidden sm:block lg:hidden">
          <Counter numbers={numbers} interval={interval} />
        </div>
        <motion.figure
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="relative flex items-center justify-center mx-auto z-10"
        >
          <div className="relative bg-[var(--deep-blue)] xxsm:w-[250px] xxsm:h-[320px] w-[300px]  h-[380px]  sm:w-[380px] sm:h-[550px] mt-3 rounded-[2rem] max-md:-ml-4"></div>
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421644/rocktea-main-website/assets/receptionist_vbpllv.png"
            width={400}
            height={450}
            className="absolute bottom-0 "
          />
        </motion.figure>
      </div>
    </section>
  );
}

export default Hero;
