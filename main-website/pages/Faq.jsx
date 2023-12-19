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
    content: ` At RockTea Mall we do B2B2C, where we bring together Drop-shipping and E commerce business ownership. We generate online stores for our Drop-shippers using business details, we give them products for free, they list those products and add their own profits to the initial price of the products to make sales.`,
  },
  {
    id: 2,
    title: "WHAT MAKES ROCKTEA MALL UNIQUE?",
    content: `

    1. Free and Curated Access: RockTea Mall offers high-quality products to drop-shippers at no cost, distinguishing itself from platforms with upfront fees.
    
    2. Personalized Online Stores: Beyond traditional dropshipping, RockTea Mall creates personalized online stores for partners, handling technicalities for a hassle-free experience.
    
    3. Profit Control: Drop-shippers have the freedom to set their own profit margins, giving them control over pricing and business success.
    
    4. Community Building: RockTea Mall goes beyond transactions, fostering a community ecosystem with partnerships, resources, and support to enhance the dropshipping experience.
    
    5. Cutting-Edge Technology and Transparency: The platform provides advanced tools and technology for success, coupled with a commitment to transparency and open communication in the partnership.
  `,
  },
  {
    id: 3,
    title: "IS ROCKTEA MALL FREE?",
    content: `RockTea Mall is not available for free usage. We offer an OTP (One-Time Payment) option at a cost of NGN 150,000, providing users with comprehensive access to the platform's features and services without the need for recurring subscription fees. This one-time payment ensures a straightforward and transparent transaction, granting users full access to RockTea Mall's capabilities for an extended period, based on the terms outlined in the agreement.`,
  },
  {
    id: 4,
    title: "HOW CAN I EARN WITH ROCKTEA MALL?",
    content: `

    1. Sign Up and Obtain OTP: Start by signing up on RockTea Mall, paying NGN 150,000 for a One-Time Payment (OTP) to access all services.
    
    2. Generate Your Online Store: Easily create your personalized online store on RockTea Mall without the hassle of building a website from scratch.
    
    3. List and Customize Products: Choose products from RockTea Mall, list them in your store, and set profit margins to maximize earnings.
    
    4. Promote and Drive Sales: Actively market your store through channels like social media, digital marketing, etc., to attract customers and boost sales.
    
    5. Fulfillment and Profit Earnings: RockTea Mall handles order fulfillment, including shipping. As customers purchase, you earn profits based on your set profit margins.
    
    Remember, success involves scaling your business, accessing ongoing support from RockTea Mall, and staying informed about market trends to enhance your earning potential.

`,
  },
];
