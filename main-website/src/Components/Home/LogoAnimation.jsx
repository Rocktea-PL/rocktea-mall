import { motion } from "framer-motion";

function LogoAnimation() {
  const animateVariants = {
    animate: {
      y: [0, -800],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  const mobileAnimateVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };
  return (
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
      className="  relative bg-[var(--deep-blue)] p-10 pb-20 lg:pb-10 md:flex z-[9] overflow-hidden "
    >
      <article className="md:max-w-[50%] text-[var(--white)] lg:ml-28">
        <h2 className=" xxsm:text-[1.3rem]  xxsm:-ml-4 mx-auto sm:mb-8 lg:mb-0 text-md sm:text-[40px] lg:text-[50px] leading-[1.20] font-semibold md:w-[700px] text-center whitespace-nowrap tracking-[0.25rem] text-white">
          &quot;Products from the
          <br /> Biggest Brands
          <br />
          Across the
          <br /> Globe&quot;
        </h2>
        <p className="hidden lg:block mt-5 text-center w-[650px]  mx-auto ">
          &quot; You name it, You want it, WE HAVE IT &quot;
        </p>
      </article>
      <motion.figure
        variants={animateVariants}
        animate="animate"
        className="hidden lg:block absolute top-0 right-20 z-[5] overflow-hidden "
      >
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421651/rocktea-main-website/assets/logo-animations_aggj4v.png"
          width={500}
          height={250}
          alt="animation"
          className="shadow-2xl"
        />
      </motion.figure>

      <motion.figure
        variants={mobileAnimateVariants}
        animate="animate"
        className="block lg:hidden absolute bottom-8 right-0 z-[5] overflow-hidden "
      >
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696092252/rocktea-main-website/assets/Partners_logo_swknam.png"
          width={700}
          height={700}
          alt="animation"
          className="shadow-2xl object-cover"
        />
      </motion.figure>
    </motion.div>
  );
}

export default LogoAnimation;
