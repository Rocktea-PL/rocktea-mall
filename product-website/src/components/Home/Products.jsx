import { FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Features/ProductCard";

const product = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728346/rocktea-product-website/assets/PRoduct_image_anis06.png',
    
    name: "Pepsi",
    price: 1200,
    oldPrice:1500
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728343/rocktea-product-website/assets/PRoduct_image_1_grycft.png',
    
    name: "Pepsi",
    price: 1200,
    oldPrice:1500
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728342/rocktea-product-website/assets/PRoduct_image_2_vmlxvo.png',
   
    name: "Pepsi",
    price: 1200,
    oldPrice:1500
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728340/rocktea-product-website/assets/PRoduct_image_3_trm1dr.png',
   
    name: "Pepsi",
    price: 1200,
    oldPrice:1500
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728338/rocktea-product-website/assets/PRoduct_image_4_afnc3a.png',
    
    name: "Pepsi",
    price: 1200,
    oldPrice:1500
  },
  {
    id: 6,
    image:'https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695728349/rocktea-product-website/assets/Rectangle_35_5_msfzqc.png',
    
    name: "Pepsi",
    price: 1200,
    oldPrice:1500
  },
];

function Products() {
  return (
    <section className=" mt-3 pt-2 pb-5  rounded-lg flex flex-col items-center justify-center mb-10 overflow-x-hidden">
      <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-lg  lg:text-2xl">Daily Groceries</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {product.slice(0,4).map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>

        </div>
        <article className="w-full h-full lg:h-[300px] my-10">
          <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695733529/rocktea-product-website/assets/Product_ad_mzshyg.png" 
          className="w-full h-full object-cover rounded-lg"
          alt="" />
        </article>

        <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-lg  lg:text-2xl"> Back To School Groceries</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>
        
        </div>
        <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-lg  lg:text-2xl"> Top Products</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>
        
        </div>
        <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-lg  lg:text-2xl">Limited Stock</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>
        
        </div>

        <div className="relative w-full mt-5">
        <h2 className=" font-semibold text-lg  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>
        
        </div>
    </section>
  );
}

export default Products;
