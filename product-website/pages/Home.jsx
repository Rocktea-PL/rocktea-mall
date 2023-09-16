import Categories from "../src/components/Home/Categories";
import Hero from "../src/components/Home/Hero";
import Partners from "../src/components/Home/Partners";
import Products from "../src/components/Home/Products";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Categories />
      <Products />
      <Partners />
    </div>
  );
}
