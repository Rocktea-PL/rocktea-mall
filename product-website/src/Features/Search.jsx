
export default function Search({filteredProducts}) {
    return (
      <section className="bg-white p-3   w-[80%] flex flex-col items-center justify-center mx-auto">
         {
              filteredProducts.length === 0 ? (
                  <p>No products found </p>
                ) : (
                  
                <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-2'>
                  {filteredProducts.map((product) => (
                    
                    <div
                    key={product.id}
                    className=" hover:scale-[1.01] hover:shadow-md bg-white  hover:transition-all duration-300 ease-in-out overflow-hidden w-[220px]  mt-5 "
                  >
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
                      <p className="font-semibold">₦{product.price}</p>
                      
                      <div className="relative h-[0.6rem] w-full mt-3 border border-solid border-gray-200 ">
                        <div
                          className="absolute inset-0 bg-orange rounded-sm"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      
                    </div>
                  </div>
                  ))}
                </article>
  )}
          
      </section>
    )
  }