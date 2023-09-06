
import { FaAngleRight } from 'react-icons/fa';
import sunlight from '../../assets/Pepsi.png';
import Malt from '../../assets/malt.png';
import ProductCard from '../../Features/ProductCard';
const product = [
    {
        id:1,
        image:sunlight,
        image2:Malt,
        name:'Pepsi',
        price:1200,

    },
    {
        id:2,
        image:sunlight,
        image2:Malt,
        name:'Pepsi',
        price:1200,

    },
    {
        id:3,
        image:sunlight,
        image2:Malt,
        name:'Pepsi',
        price:1200,

    },
    {
        id:4,
        image:sunlight,
        image2:Malt,
        name:'Pepsi',
        price:1200,

    },
    {
        id:5,
        image:sunlight,
        image2:Malt,
        name:'Pepsi',
        price:1200,

    },
    {
        id:6,
        image:sunlight,
        image2:Malt,
        name:'Pepsi',
        price:1200,

    },
    
]

function Products() {
    
            return (
              <section className=" mt-5 pt-2 pb-5 mx-5 md:mx-12 rounded-lg flex flex-col items-center justify-center mb-10 overflow-x-hidden">
                <div className='relative w-full'>
                <h2 className="text-center font-semibold mb-5 text-2xl">Products</h2>
                <span className='absolute top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer' onClick={() => alert('yesss')}>See All <FaAngleRight/></span>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full justify-between px-2 md:px-5 overflow-hidden">
                  {product.map((item) => (
                    <>
                    <ProductCard name={item.name} image={item.image} price={item.price} key={item.id} />
                    <ProductCard name={item.name} image={item.image} price={item.price} key={item.id} />
                    </>
                  ))}
                </div>
                <button className="flex items-center justify-center gap-2 bg-white p-3 rounded-lg my-7">Load more</button>
                </div>
                <div className='relative w-full'>
                <h2 className="text-center font-semibold mt-5 text-2xl">Limited Stock deals</h2>
                <span className='absolute top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)]'>See All <FaAngleRight/></span>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 w-full  justify-between px-2 md:px-5 py-3 overflow-hidden">
                  {product.map((item) => (
                    <ProductCard name={item.name} image={item.image2} price={item.price} key={item.id} />
                  ))}
                </div>
                </div>
             <div className='relative w-full'>
                <h2 className="text-center font-semibold mt-5 text-2xl">Top Selling Products</h2>
                <span className='absolute top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)]'>See All <FaAngleRight/></span>
                <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 w-full  justify-between px-2 md:px-5 py-3 overflow-hidden">
                  {product.slice(0,4).map((item) => (
                    <ProductCard name={item.name} image={item.image} price={item.price} key={item.id} />
                  ))}
                </div>
                </div>
           </section>
          
    )
}

export default Products;
