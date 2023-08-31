import { HiOutlineShoppingBag } from 'react-icons/hi2';
import sunlight from '../assets/sunlight.png'
const product = [
    {
        id:1,
        image:sunlight,
        name:'Sunlight Detergent...',
        price:1200,

    },
    {
        id:2,
        image:sunlight,
        name:'Sunlight Detergent...',
        price:1200,

    },
    {
        id:3,
        image:sunlight,
        name:'Sunlight Detergent...',
        price:1200,

    },
    {
        id:4,
        image:sunlight,
        name:'Sunlight Detergent...',
        price:1200,

    },
  
    {
        id:6,
        image:sunlight,
        name:'Sunlight Detergent...',
        price:1200,

    },
    
]

function Products() {
    return (
       <section className="bg-[var(--main-bg)] mt-5 pt-2 pb-5 md:mx-10 rounded-lg flex flex-col items-center justify-center z-0" >
         <h2 className='text-center font-semibold mb-3 text-2xl'>Products</h2>
    <section className='grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-6 px-0'>   
{product.map((item) => (
    <>
    <div key={item.id} className='rounded-lg flex flex-col items-center justify-center w-[280px] gap-4 mt-5 hover:scale-[1.05] transition duration-300 ease-out border border-solid border-black'>
        <figure className='bg-[var(--product-bg)] py-4 rounded-t-lg'>
            <img src={item.image} alt="" width={200} height={200}/>
        </figure>
        <div className='bg-white w-full py-4 rounded-b-lg flex flex-col items-start justify-center gap-x-5 -mt-5 pl-5 border-t border-solid border-black'>
        <p className='mt-3 font-semibold '>{item.name}</p>
       
        <p className='text-[var(--gold)] font-semibold'>₦{item.price}</p>
        <button className='flex items-center gap-2'>Add to cart <HiOutlineShoppingBag /></button>
        </div>
    </div>
   
    <div key={item.id} className='rounded-lg flex flex-col items-center justify-center w-[280px] gap-5 mt-5  hover:scale-[1.05] transition duration-300 ease-out border border-solid border-black'>
        <figure className='bg-[var(--product-bg)] py-4 rounded-t-lg'>
            <img src={item.image} alt="" width={200} height={200}/>
        </figure>
        <div className='bg-white w-full py-4 rounded-b-lg flex flex-col items-start justify-center gap-x-5 -mt-5 pl-5 border-t border-solid border-black'>
        <p className='mt-3 font-semibold '>{item.name}</p>
       
        <p className='text-[var(--gold)] font-semibold'>₦{item.price}</p>
        <button className='flex items-center gap-2'>Add to cart </button>
        </div>
    </div>

    </>
))}

</section> 
<button className='flex items-center justify-center bg-[#d2d2d2] mt-5 p-3 rounded-md shadow-sm'>Load More</button>
       </section>
    )
}

export default Products;
