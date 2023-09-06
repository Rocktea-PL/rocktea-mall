import {RxCaretDown} from 'react-icons/rx'
import Malt from '../../assets/malt.png';
import ProductCard from '../../Features/ProductCard';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
export default function AllProducts() {

  const product = [
    {
        id:1,
        image:Malt,
        
        name:'Pepsi',
        price:1200,

    },
    {
        id:2,
        image:Malt,
        
        name:'Pepsi',
        price:1200,

    },
    {
        id:3,
        image:Malt,
        
        name:'Pepsi',
        price:1200,

    },
    {
        id:4,
        image:Malt,
        
        name:'Pepsi',
        price:1200,

    },
    {
        id:5,
        image:Malt,
       
        name:'Pepsi',
        price:1200,

    },
    {
        id:6,
        image:Malt,
       
        name:'Pepsi',
        price:1200,

    },
    
]
  return (
    <section>
      <div className='flex items-center justify-between'>
      <h3 className='font-semibold'>Show Filter +</h3>
        <h3 className='flex items-center justify-center gap-1 font-semibold'>Sort By <RxCaretDown className='text-2xl'/> </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full justify-between  overflow-hidden mt-5">
                  {product.map((item) => (
                    <>
                    <Link to='/products/details'>
                    <ProductCard name={item.name} image={item.image} price={item.price} key={item.id} />
                    </Link >
                    <Link to='/products/details'>
                    <ProductCard name={item.name} image={item.image} price={item.price} key={item.id} />
                    </Link>
                    </>
                  ))}
                </div>
                <Pagination />
                <div className='mt-10'>
                  <h2 className='font-semibold text-2xl'>Recently Viewed</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 w-full justify-between  overflow-hidden mt-5">
                  {product.map((item) => (
                    <>
                    <ProductCard name={item.name} image={item.image} price={item.price} key={item.id} />
                    
                    </>
                  ))}
                  </div>
                </div>
    </section>
  )
}
