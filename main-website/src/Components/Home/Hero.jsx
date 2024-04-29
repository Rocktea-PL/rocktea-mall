//import Button from "../Button";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeImage from '../../assets/Home-image.png'
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
         
            <button className="flex items-center justify-center bg-orange w-[120px] xsm:w-[150px] p-3 rounded-lg whitespace-nowrap " onClick={() => window.open('http://dropshippers.yourockteamall.com/login')}>
              Get Started
            </button>
          
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
          className="relative flex items-center justify-center -mt-16 lg:-mt-14 mx-auto z-10"
        >
        
          <img
            src={HomeImage}
            width={430}
            height={450}
            className=" "
          />
        </motion.figure>
      </div>
    </section>
  );
}

export default Hero;
