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
            className="bg-image"
            style={{
              backgroundImage: `url(${FaqImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "350px",
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
    title: "What is Drop Shipping?",
    content: `Whether you´re looking to supplement your income or embark on a full-fledged business journey, 
seize the opportunity to earn money doing what you love without 
leaving where you are. Join us now and embark on your path to profitability!`,
  },
  {
    id: 2,
    title: "What is Drop Shipping?",
    content: `Whether you´re looking to supplement your income or embark on a full-fledged business journey, 
    seize the opportunity to earn money doing what you love without 
    leaving where you are. Join us now and embark on your path to profitability!`,
  },
  {
    id: 3,
    title: "What is Drop Shipping?",
    content: `Whether you´re looking to supplement your income or embark on a full-fledged business journey, 
        seize the opportunity to earn money doing what you love without 
        leaving where you are. Join us now and embark on your path to profitability!`,
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
