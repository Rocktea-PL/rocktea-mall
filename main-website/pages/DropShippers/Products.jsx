import Hero from '../../src/Dropshippers/components/Home/Hero'
//import AllProducts from "../../../product-website/src/components/Products/AllProducts";
import ProductFilter from '../../src/Dropshippers/components/Products/FilterCards'
export default function Products() {
  return (
    <main className="mt-[5rem] mx-auto max-w-[1250px] ">
      <Hero />
      <ProductFilter />
      
    </main>
  );
}
