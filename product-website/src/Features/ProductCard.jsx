import { HiOutlineHeart } from "react-icons/hi2";

export default function ProductCard({ id, image, price, name }) {
  return (
    <div
      key={id}
      className="relative bg-white rounded-lg overflow-hidden hover:shadow-md h-auto w-full transition-all duration-500 max-w-sm  product-card mb-5"
    >
      <span className="absolute right-3 top-3 text-[1.2rem] text-red-600">
        <HiOutlineHeart />
      </span>
      <div className="hover:scale-[1.08] hover:transition-all duration-300 ease-in-out">
        <figure className="hover:scale-[1.07] hover:transition-all duration-300 ease-in-out flex items-center justify-center mx-auto py-5">
          <img src={image} alt="" width={65} height={70} />
        </figure>
        <div className="bg-[var(--product-bg)] p-4">
          <p className="font-light whitespace-nowrap text-[1rem]">{name}</p>
          <p className="mt-1 font-semibold">₦{price}</p>
          <button className="text-black bg-[#ffa500] px-3 h-6 whitespace-nowrap add-to-cart-button text-[0.8rem] mt-2 mb-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* <div key={id} className='relative bg-white rounded-lg flex flex-col items-center justify-center  md:px-8 gap-10 z-[1] hover:shadow-md w-[180px] h-auto transition-all duration-500 max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden product-card'>
      <span className='absolute right-3 top-3 text-[1.2rem] text-red-600'><HiOutlineHeart/></span>
      <div className=' hover:scale-[1.08] hover:transition-all duration-300 ease-in-out'>
       <figure className=' hover:scale-[1.07] hover:transition-all duration-300 ease-in-out'>
           <img src={image} alt="" width={65} height={70}/>
       </figure>
      <div className='bg-gray-200 text-gray-700 p-4'>
       <p className=' font-light whitespace-nowrap text-[1rem]'>{name}</p>
       <p className='mt-1  font-semibold'>₦{price}</p>
       <button className=' text-black bg-[#ffa500] px-2 h-6 whitespace-nowrap add-to-cart-button text-[0.8rem] mt-2 mb-2'>Add to cart </button>
       </div>
       </div>

   </div> */
