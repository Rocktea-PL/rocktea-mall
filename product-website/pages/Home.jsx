import Footer from "../src/Features/Footer";
//import Navbar from "../src/Features/UserNavbar";
import Categories from "../src/components/Home/Categories";
import Hero from "../src/components/Home/Hero";

import Products from "../src/components/Home/Products";
//import ImageScroll from "../src/components/Products/categoryScroll";

export default function Home() {
  return (
    <>
      <div className="max-w-[1250px] mx-auto max-md:mt-32">
        <Hero />
        <Categories />
        <Products />
      </div>
      <Footer />
    </>
  );
}
