import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 600; // Set the desired end count
    const duration = 3; // Set the duration for the count-up animation in seconds
    const step = Math.ceil((end - start) / (duration * 1000)); // Calculate the increment per millisecond

    const intervalId = setInterval(() => {
      if (count < end) {
        setCount((prevCount) => Math.min(prevCount + step, end));
      } else {
        clearInterval(intervalId);
      }
    }, 5);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center lg:justify-start gap-10 mt-10">
      <div className=" border-r border-solid border-gray pr-5">
        <h1 className=" text-[30px] md:text-[40px] font-bold text-[var(--deep-blue)]   bounce">
          {count}+
        </h1>
        <p className=" text-sm md:text-md  text-[var(--deep-blue)] ">DropShippers</p>
      </div>
      <div className="border-r border-solid border-gray pr-5">
        <h1 className=" text-[30px] md:text-[40px] font-bold text-[var(--deep-blue)] whitespace-nowrap  bounce">
          24 hrs
        </h1>
        <p className=" text-sm md:text-md text-[var(--deep-blue)]">Delivery time</p>
      </div>
    </div>
  );
}

export default Counter;
