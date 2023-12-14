import { FaShoppingCart } from "react-icons/fa";
export default function ServiceProductTracker() {
  return (
    <div className="bg-white rounded-lg shadow-md lg:mt-0 p-5">
      <h2 className="text-[20px] font-medium text-blue mb-5">
        Product Tracker
      </h2>
      <article className="relative h-auto rounded-md  bg-primary border border-gray-300 py-5 px-2 mb-5">
        <div className=" h-full mx-2">
          <div className="absolute z-[10] top-[50%] translate-y-[-50%] left-1 w-[35px] h-[35px] rounded-[50%] bg-[#00508C] text-white flex items-center justify-center ">
            <FaShoppingCart className="text-[1.2rem]" />
          </div>
          <div className="absolute w-1 h-[90%] bg-[#00508C] top-[50%] left-4 translate-y-[-50%] rounded-sm"></div>
        </div>
        <div className="mx-10">
          <p className="text-dashblue">
            Kellogg’s Corn Flakes has just been added to your product list.
          </p>
          <p className="text-gray-300 flex items-center justify-between mt-3">
            2023-03-29 <span>10:10pm </span>
          </p>
        </div>
      </article>
      <article className="relative h-auto rounded-md bg-primary border border-gray-300 py-5 px-2 mb-5">
        <div className=" h-full mx-2">
          <div className="absolute z-[10] top-[50%] translate-y-[-50%] left-1 w-[35px] h-[35px] rounded-[50%] bg-[#00508C] text-white flex items-center justify-center ">
            <FaShoppingCart className="text-[1.2rem]" />
          </div>
          <div className="absolute w-1 h-[90%] bg-[#00508C] top-[50%] left-4 translate-y-[-50%] rounded-sm"></div>
        </div>
        <div className="mx-10">
          <p className="text-dashblue">
            Kellogg’s Corn Flakes has just been added to your product list.
          </p>
          <p className="text-gray-300 flex items-center justify-between mt-3">
            2023-03-29 <span>10:10pm </span>
          </p>
        </div>
      </article>
      <article className="relative h-auto rounded-md bg-primary border border-gray-300 py-5 px-2 mb-5">
        <div className=" h-full mx-2">
          <div className="absolute z-[10] top-[50%] translate-y-[-50%] left-1 w-[35px] h-[35px] rounded-[50%] bg-[#00508C] text-white flex items-center justify-center ">
            <FaShoppingCart className="text-[1.2rem]" />
          </div>
          <div className="absolute w-1 h-[90%] bg-[#00508C] top-[50%] left-4 translate-y-[-50%] rounded-sm"></div>
        </div>
        <div className="mx-10">
          <p className="text-dashblue">
            Kellogg’s Corn Flakes has just been added to your product list.
          </p>
          <p className="text-gray-300 flex items-center justify-between mt-3">
            2023-03-29 <span>10:10pm </span>
          </p>
        </div>
      </article>
    </div>
  );
}
