
import { useState } from "react"
import MarketplaceCards from "../src/Features/MarketplaceCards"
import MarketplaceModal from "../src/components/Modals/MarketplaceModal"
//import ProductCard from "../src/Features/ProductCard"
import ProductFilter from "../src/components/Products/FilterCards"
import Pagination from "../src/components/Products/Pagination"
import { product } from "../src/components/constant/data"
import { FaAngleRight } from "react-icons/fa"
export default function Marketplace() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="mt-20">
    <div className="bg-market bg-no-repeat bg-cover bg-center h-[300px] mb-10 ">
 <h2 className="text-center  lg:text-start text-[3rem] sm:text-[4rem] text-white lg:pl-10  pt-[4rem] font-semibold leading-tight">Welcome To <br /> Market Place</h2>
    </div>
    <form action="" className='flex items-center justify-between border border-green border-solid rounded-[10px] h-[65px] w-[50%] mx-auto pl-7 pr-3 bg-white my-6' >
            <input type="search" placeholder="Type to search the market place" className=" bg-transparent border-0 outline-0 w-[90%]" />
            <button className='bg-orange  w-[170px] h-[45px] flex items-center justify-center gap-2 rounded-[10px] p-2 '>Search</button>
         </form>
         <section className="mt-10">

            <ProductFilter/>
            <div className="relative w-full mt-5">
        <h2 className=" font-semibold text-md">Daily Groceries</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {product.slice(0,4).map((item) => (
            <MarketplaceCards
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            openModal={openModal}
            />

          ))}
        </article>

        </div>
        

        <div className="relative w-full mt-5">
        <h2 className=" font-semibold text-md"> Alcohol & Beverages</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2  md:grid-cols-4  gap-4">
          {product.slice(0,4).map((item) => (
            <MarketplaceCards
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            openModal={openModal}
            />

          ))}
        </article>
        
        </div>
        <div className="relative w-full mt-5">
        <h2 className=" font-semibold text-md  lg:text-md"> Top Products</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
        300 products |  See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {product.slice(0,4).map((item) => (
            <MarketplaceCards
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            openModal={openModal}
            />

          ))}
        </article>
        
        </div>
        <div className="relative w-full mt-5">
        <h2 className=" font-semibold text-md  ">Packaged Foods</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2  md:grid-cols-4  gap-4">
          {product.slice(0,4).map((item) => (
            <MarketplaceCards
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            openModal={openModal}
            />

          ))}
        </article>
        
        </div>

        
        <Pagination />
         </section>
         {isModalOpen && <MarketplaceModal closeModal={closeModal}/>}
    </div>
  )
}
