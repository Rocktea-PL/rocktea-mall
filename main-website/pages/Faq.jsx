import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Accordion from "../src/Components/Accordion";
import FaqImg from "../src/assets/faq1.png";

function Faqs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay for content loading

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#] relative ">
      {loading ? (
        <Skeleton
          width={"90%"}
          height={350}
          className="rounded-2xl mx-10 lg:mx-20 flex items-center justify-center mt-20"
        />
      ) : (
        <>
          <div
            className="bg-image h-[260px] md:h-[300px] lg:h-[330px]"
            style={{
              backgroundImage: `url(${FaqImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "",
              width: "100%",
            }}
          >
            <div className="flex flex-col items-center justify-center mt-6">
              <h3 className=" text-[20px] sm:text-[30px] lg:text-[40px] whitespace-nowrap mt-[8rem]">
                Frequently Asked Questions
              </h3>

              <p className=" text-sm sm:text-[20px] mt-7">
                How may I help you?
              </p>
            </div>
          </div>
        </>
      )}
      <section className="relative mt-[4rem] lg:mt-[5rem] flex items-center justify-center mb-0 z-10">
        <article className="w-full lg:w-[70%] -mt-5 ">
          {loading
            ? Array.from({ length: 5 }, (_, index) => (
                <div key={index} className="mb-6">
                  <Skeleton width={"100%"} height={60} />
                  <Skeleton width={"100%"} height={100} count={2} />
                </div>
              ))
            : AccordionData.map((item) => (
                <Accordion
                  key={item.id}
                  title={item.title}
                  content={item.content}
                />
              ))}

          <>
            <div className="w-[50px] h-[20%] absolute content-[''] bg-orange z-[-1] top-[30%] left-[70%] lg:left-[65%] opacity-30"></div>
            <div className="w-[80px] h-[20%] absolute content-[''] bg-orange z-[-1] bottom-[0%] left-[50%] opacity-30"></div>
          </>
        </article>
      </section>
    </div>
  );
}

export default Faqs;

const AccordionData = [
  {
    id: 1,
    title: "WHAT IS ROCKTEA MALL?",
    content: ` At RockTea Mall we do B2B2C, where we bring together Drop-shipping and E commerce business ownership. 
    We generate online stores for our Drop-shippers using business details, we give them products for free, 
    they list those products and add their own profits to the initial price of the products to make sales.`,
  },
  {
    id: 2,
    title: "WHAT MAKES ROCKTEA MALL UNIQUE?",
    content: `1. Tailored Product Access:<br>
  RockTea Mall stands out by providing a curated selection of high-quality products to our drop-shippers at no cost, 
  setting us apart from other platforms that may require upfront fees or limited access.<br><br>

2. Your Unique Store, Effortlessly:\n
  We go beyond traditional dropshipping models by not only offering products but by generating personalized online 
  stores for our valued partners. This means you can focus on your business, while we take care of the technicalities.<br><br>

3. Flexibility in Profit Margins:<br>
  At RockTea Mall, we believe in empowering our drop-shippers to control their success. That's why we offer the 
  freedom to set your own profit margins, allowing you to tailor your pricing strategy based on your business goals.<br><br>

4. Building a Community Ecosystem:<br>
  Beyond just facilitating transactions, RockTea Mall is committed to building a thriving community ecosystem. 
  Our platform extends beyond products, fostering partnerships, resources, and support specifically designed to elevate your dropshipping experience.`,
  },
  {
    id: 3,
    title: "IS ROCKTEA MALL FREE?",
    content: `RockTea Mall is not available for free usage. We offer an OTP (One-Time Payment) option at a cost of NGN 150,000, 
    providing users with comprehensive access to the platform's features and services without the need for recurring subscription fees. 
    This one-time payment ensures a straightforward and transparent transaction, granting users full access to RockTea Mall's capabilities 
    for an extended period, based on the terms outlined in the agreement.`,
  },
  {
    id: 4,
    title: "What is Drop Shipping?",
    content: `Whether you´re looking to supplement your income or embark on a full-fledged business journey, 
            seize the opportunity to earn money doing what you love without 
            leaving where you are. Join us now and embark on your path to profitability!`,
  },
  {
    id: 5,
    title: "What is Drop Shipping?",
    content: `Whether you´re looking to supplement your income or embark on a full-fledged business journey, 
                seize the opportunity to earn money doing what you love without 
                leaving where you are. Join us now and embark on your path to profitability!`,
  },
];
