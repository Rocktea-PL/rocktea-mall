//import { HiOutlineHeart, HiOutlineShoppingBag} from "react-icons/hi2";

//import {Link} from 'react-router-dom'

export default function MarketplaceCards({
  id,
  image,
  price,
  name,
  oldPrice,
  openModal,
}) {
  return (
    <>
      <div
        key={id}
        onClick={openModal}
        className=" relative  hover:transition-all duration-300 ease-in-out   rounded-lg overflow-hidden  w-full mt-5 "
      >
        <span className="icon-bg"></span>
        <figure className="  w-full h-[200px] transition-all duration-300 ease-in-out flex items-center justify-center mx-auto ">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-t-lg"
          />
        </figure>
        <div className="block bg-white p-4 -mt-5 rounded-b-lg">
          <p className="font-light whitespace-nowrap text-[1rem] mt-5">
            {name}
          </p>
          <p className="font-semibold">₦{price}</p>
          <strike className="text-gray-400 text-[12px]">₦{oldPrice}</strike>
          <div className="relative h-[0.6rem] w-full mt-3 border border-solid border-gray-200 rounded-md">
            <div
              className="absolute inset-0 bg-orange rounded-sm"
              style={{ width: "50%" }}
            ></div>
          </div>

          {/*
   <div className="icons-container opacity-0 hover:opacity-100 absolute z-40 inset-0 flex items-center justify-between px-5 transition-opacity delay-200 duration-500 ease-in-out w-auto h-[50px]">
              <span className="text-xl font-bold text-orange bg-gray-100 rounded-md p-1" onClick={() => alert('it is working')}>
                <HiOutlineHeart />
              </span>
              <span className="text-xl font-bold text-orange bg-gray-100 rounded-md p-1">
              <HiOutlineShoppingBag/>
              </span>
              <span className="text-xl font-bold text-orange bg-gray-100 rounded-md p-1">
              <HiOutlineShoppingBag/>
              </span>
            </div>
    */}
        </div>
      </div>
    </>
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
