import { Link } from "react-router-dom";

export default function NoProduct({ message }) {
  return (
    <>
      {message ? (
        <div className="bg-white w-full sm:w-[400px] shadow-md flex flex-col items-start !justify-center translate-x-[35%] lg:translate-x-[50%]  pb-5 px-10 mt-5">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702609861/rocktea-product-website/assets/Products_not_found_n2clbx.svg"
            alt="product not found"
            className="flex items-center justify-center mx-auto"
          />
          <h3 className="text-md my-2">Product Not Found</h3>
          <p className="text-[18px]">{message}</p>
        </div>
      ) : (
        <div className="bg-white  shadow-md flex flex-col items-start !justify-center mx-auto  pb-5 px-10 mt-5">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702609861/rocktea-product-website/assets/Products_not_found_n2clbx.svg"
            alt="product not found"
            className="flex items-center justify-center mx-auto"
          />
          <h3 className="text-md my-2">Product Not Found</h3>
          <ul>
            <li className="list-disc">Check your spelling for typing errors</li>
            <li className="list-disc">
              Try searching with short and simple words try searching with
              general terms-you can then filter the results
            </li>
            <Link to="/">
              <button className="common w-full h-14 my-4 rounded-md">
                Go to Homepage
              </button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
