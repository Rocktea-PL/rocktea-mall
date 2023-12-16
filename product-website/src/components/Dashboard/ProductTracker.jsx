import { FaShoppingCart } from "react-icons/fa";
import { useUserProductContext } from "../../Hooks/UserProductContext";
export default function ProductTracker() {
  const { products } = useUserProductContext();
  return (
    <div className="bg-white rounded-lg shadow-md lg:mt-0 p-5 h-[500px] overflow-scroll max-md:mt-5">
      <h2 className="text-[20px] font-medium text-blue mb-5">
        Product Tracker
      </h2>

      <article className="relative h-auto rounded-md bg-primary border border-gray-300 py-5 px-2 mb-5 ">
        {products?.length > 0 ? (
          products.map((item) => {
            const initialDateTimeString = item.created_at;
            const [date, time] = initialDateTimeString.split(", ");

            return (
              <>
                <div key={item.id} className=" h-full mx-2">
                  <div className="absolute z-[10] top-[50%] translate-y-[-50%] left-1 w-[35px] h-[35px] rounded-[50%] bg-[#00508C] text-white flex items-center justify-center ">
                    <FaShoppingCart className="text-[1.2rem]" />
                  </div>
                  <div className="absolute w-1 h-[90%] bg-[#00508C] top-[50%] left-4 translate-y-[-50%] rounded-sm"></div>
                </div>
                <div className="mx-10">
                  <p className="text-dashblue">
                    {item.name} has just been added to your product list.
                  </p>
                  <p className="text-gray-300 flex items-center justify-between mt-3">
                    {date} <span>{time} </span>
                  </p>
                </div>
              </>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1702609861/rocktea-product-website/assets/Products_not_found_n2clbx.svg"
              width={300}
              height={300}
              className="flex items-center justify-center"
              alt="no product"
            />
            <p className="text-[1.2rem]">No Product has been added yet</p>
          </div>
        )}
      </article>
    </div>
  );
}
