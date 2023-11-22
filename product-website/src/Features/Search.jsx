//import CommonProducts from "../components/Products/CommonProducts";
import Searchfilter from "./Searchfilter";

export default function Search({ filteredProducts, searchQuery, openModal }) {
  return (
    <section className=" rounded-lg p-3 max-w-[80%]  lg:max-w-[1300px]  flex flex-col items-center justify-center mx-auto -mt-10">
      <div>
        <div className="relative max-md:flex items-center max-md:justify-between bg-white shadow-lg  rounded-md w-[500px] lg:w-[1000px] p-5 py-5">
          <h3 className=" whitespace-nowrap text-blue font-bold text-center text-[22px] capitalize">
            Search result for &quot;{searchQuery}&quot;{" "}
          </h3>
          <span className="lg:absolute right-5 top-6  text-[18px]">
            {filteredProducts?.length} products found
          </span>
        </div>
        <Searchfilter />
      </div>
      {filteredProducts.length === 0 ? (
        <p>No products found </p>
      ) : (
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-2 ">
          {filteredProducts.map((product) => {
            const isImageAvailable =
              product?.images[0]?.url && product?.images[0]?.url.trim() !== "";
            return (
              <div key={product.id} onClick={() => openModal(product.id)}>
                {isImageAvailable && (
                  <div className=" hover:scale-[1.01] hover:shadow-md bg-white  hover:transition-all duration-300 ease-in-out overflow-hidden w-[220px]  mt-5 ">
                    <span className=""></span>
                    <figure className="w-full h-[200px] max-h-[200px] ">
                      <img
                        src={product?.images[0]?.url}
                        alt="Image 1"
                        className="w-full h-full object-cover rounded-t-[0.2rem]"
                      />
                    </figure>

                    <div className="block p-4 -mt-5 rounded-b-lg mx-auto">
                      <p className="font-light whitespace-nowrap truncate text-[1rem] mt-5">
                        {product.name}
                      </p>
                      <p>{product.color}</p>
                      <p className="font-semibold"></p>

                      <div className="relative h-[0.6rem] w-full mt-3 border border-solid border-gray-200 ">
                        <div
                          className="absolute inset-0 bg-orange rounded-sm"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </article>
      )}
    </section>
  );
}
