import Button from "../Button";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
function HowItWorks() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-3  gap-20 sm:gap-28 ">
        <article className="ml-5 ">
          <p className="text-[15px] text-[var(--yellow)]">Let´s show you</p>
          <h3 className=" text-[30px] md:text-[50px] font-semibold text-[var(--deep-blue)]">
            How It Works
          </h3>
          <motion.figure
      initial={{ opacity: 0, x:-200 }}
      whileInView={{
        opacity: 1,
        x:0,
        transition: {
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="mt-4 "
    >
          
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421642/rocktea-main-website/assets/home2_kg7fxu.png"
              alt="home2 "
              className=" w-full h-full md:w-[500px] md:h-[600px] object-cover"
            />
          </motion.figure>
        </article>
        <motion.article 
      initial={{ opacity: 0}}
      whileInView={{
        opacity: 1,
       
        transition: {
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-y-3 mb-5"
    >
       
          <figure className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-y-3 mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421625/rocktea-main-website/assets/01_auzc8m.svg"
              alt="home1 "
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            />
            <p className="text-center text-sm sm:text-md lg:text-start">
              Create your store with 3 simple steps
            </p>
          </figure>
          <figure className="flex flex-col gap-y-3 items-center justify-center lg:items-start lg:justify-start mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421627/rocktea-main-website/assets/02_u4a5xm.svg"
              alt="home1"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            />
            <p className="text-center text-sm sm:text-md lg:text-start">
              Get customers to sign up on your store
            </p>
          </figure>
          <figure className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-y-3 mb-5">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421627/rocktea-main-website/assets/03_jndhzq.svg"
              alt="home1"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            />
            <p className="text-center text-sm sm:text-md justify-center">
              They make purchase, you earn!
            </p>
          </figure>
        </motion.article>
      </section>
      <Link to="/personal_details">
        <div className="flex items-center justify-center mt-2 mb-8">
          <Button text="Get Started" />
        </div>
      </Link>
    </>
  );
}

export default HowItWorks;
