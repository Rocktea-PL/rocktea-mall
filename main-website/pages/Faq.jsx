import Accordion from "../src/Components/Accordion";
import FaqImg from "../src/assets/faq1.png";
function Faqs() {
  return (
    <div className="bg-[#F9F9F8;] relative h-full">
      <figure className="h-[350px] w-full relative">
        <img src={FaqImg} alt="" className="h-full w-full object-cover" />
      </figure>

      <div>
        <h3 className="absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px] sm:text-[30px] lg:text-[40px] whitespace-nowrap">
          Frequently Asked Questions
        </h3>
        <p className="absolute top-[26%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm sm:text-[20px]">
          How may i help you?
        </p>
      </div>
      <section className="relative mt-[4rem] lg:mt-[5rem] flex items-center justify-center mb-20 z-10">
        <article className="w-full lg:w-[50%] -mt-5 ">
          {AccordionData.map((item) => (
            <Accordion
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
          <div className="w-[50px] h-[20%] absolute content-[''] bg-orange z-[-1] top-[30%] left-[70%] lg:left-[65%] opacity-30"></div>
          <div className="w-[80px] h-[20%] absolute content-[''] bg-orange z-[-1] bottom-[0%] left-[50%] opacity-30"></div>
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
