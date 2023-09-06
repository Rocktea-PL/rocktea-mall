import ProductFilter from "../src/components/Products/FilterCards";
import Hero from "../src/components/Products/Hero";
import AllProducts from "../src/components/Products/AllProducts";


export default function Products() {
  return (
    <main className="mt-[5rem] mx-5 md:mx-12 ">
  <Hero />
  <ProductFilter />
  <AllProducts />
  
    </main>
  )
}
