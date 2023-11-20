import { motion } from "framer-motion";
function HomeDetails() {
  return (
    <section className="mt-12">
      <article className="flex flex-col items-center lg:flex-row lg:items-start justify-center gap-y-5 lg:gap-20 mb-10 lg:mb-20">
        <motion.figure
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mt-4 "
        >
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696084106/rocktea-main-website/assets/Side_hustle_s3kxyf.png"
            alt="home3"
            width={450}
            height={400}
          />
        </motion.figure>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: {
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="lg:max-w-[50%] text-center lg:text-start"
        >
          <p className="text-[var(--yellow)] text-[15px]">Why RockTea Mall? </p>
          <h3>It’s the Perfect Side Hustle!</h3>
          <p className="mt-5 text-start text-sm w-[300px] sm:w-full leading-[2] lg:leading-[2.5] xxsm:px-5">
            RockTea Mall presents the perfect side hustle, characterized by our
            low entry barriers, personalized storefronts, profit management, and
            a nurturing community—rendering it the optimum choice for
            harmonizing your income with other responsibilities. With our
            state-of-the-art business monitoring system, we guarantee that even
            the least experienced store owner can proficiently oversee their
            enterprises through precise statistical insights and predictive
            analytics. Have a Wonderful Day!
            <br /> We’ve Got You Covered!
          </p>
        </motion.div>
      </article>

      <article className="flex flex-col items-center  text-center  lg:text-start lg:flex-row-reverse lg:items-start justify-center gap-y-5 lg:gap-20 mb-10 lg:mb-20">
        <motion.figure
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mt-4 "
        >
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696084108/rocktea-main-website/assets/Happy_User_3_jnhlsq.png"
            alt="home3"
            width={450}
            height={400}
          />
        </motion.figure>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: {
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="lg:max-w-[50%] "
        >
          <p className="text-[var(--yellow)] text-[15px] ">
            Member motivation{" "}
          </p>
          <h3 className="">Over N30M paid to drop-shippers in 6 months.</h3>
          <p className="mt-5 text-start text-sm w-[300px] sm:w-full leading-[2] lg:leading-[2.5] xxsm:px-3">
            In an impressive span of only six months, We’ve proudly paid out
            over N30 million in earnings to our valued drop-shippers, showcasing
            the incredible earning potential within our platform.
            <br />
            “Work Hard! Earn Hard!” - Who said that?
          </p>
        </motion.div>
      </article>

      <article className="flex flex-col items-center   text-center lg:text-start lg:flex-row lg:items-start justify-center gap-y-5 lg:gap-20 mb-5">
        <motion.figure
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="mt-4 "
        >
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696092257/rocktea-main-website/assets/Our_Community_tem21c.png"
            alt="home3"
            width={450}
            height={400}
          />
        </motion.figure>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: {
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="lg:max-w-[50%]"
        >
          <p className="text-[var(--yellow)] text-[15px]">There’s more? </p>
          <h3>Our Community.</h3>
          <p className="mt-5 text-start text-sm w-[300px] sm:w-full leading-[2] lg:leading-[2.5] xxsm:px-5">
            Our Community at RockTea Mall is the heartbeat of our success,
            uniting entrepreneurs from all walks of life. We can’t be here
            without you, you’re our veins. To further establish that fact, we
            have created a community of our dedicated businesses. You can share
            your success story, ideas, advices and many more you name it.
          </p>
        </motion.div>
      </article>
    </section>
  );
}

export default HomeDetails;
