import ProductCard from "../../Features/ProductCard";
import { product } from "../constant/data";

function CommonProducts() {
  return (
    <div className="relative w-full mb-5">
    <h2 className="font-semibold text-xl"> Customers Also Viewed</h2>
   
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
  );
}

export default CommonProducts;

