import ProductFilter from "../../../product-website/src/components/Products/FilterCards";
import Hero from "../../../product-website/src/components/Products/Hero";
//import AllProducts from "../../../product-website/src/components/Products/AllProducts";

export default function Products() {
  return (
    <main className="mt-[5rem] mx-auto max-w-[1250px] ">
      <Hero />
      <ProductFilter />
      
    </main>
  );
}
