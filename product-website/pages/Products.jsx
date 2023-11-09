import ProductFilter from "../src/components/Products/FilterCards";
import Hero from "../src/components/Products/Hero";
//import AllProducts from "../src/components/Products/AllProducts";

export default function Products() {
  return (
    <main className="mt-[5rem] mx-auto max-w-[1250px] ">
      <Hero />
      <ProductFilter />
    </main>
  );
}
