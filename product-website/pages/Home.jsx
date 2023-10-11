import Categories from "../src/components/Home/Categories";
import Hero from "../src/components/Home/Hero";
import Partners from "../src/components/Home/Partners";
import Products from "../src/components/Home/Products";
//import ImageScroll from "../src/components/Products/categoryScroll";

export default function Home() {
  return (
    <div className="max-w-[1250px] mx-auto">
      <Hero />
      <Categories />
      <Products />
      <Partners />
    </div>
  );
}
