
import Categories from '../../src/Dropshippers/components/Home/Categories'
//import Hero from "../../../product-website/src/components/Home/Hero";
//import Partners from "../../../product-website/src/components/Home/Partners";
import Hero from '../../src/Dropshippers/components/Home/Hero'
//import AllProducts from "../../../product-website/src/components/Products/AllProducts";
//import Products from '../../src/Dropshippers/components/Products/'
import Footer from "../../src/Dropshippers/Features/Footer";
import Navbar from "../../src/Dropshippers/Features/Navbar";
import Products from '../../src/Dropshippers/components/Home/Products'
////import UserNavbar from "../../src/Dropshippers/Features/UserNavbar";
//import { useAuthContext } from "../../src/hooks/AuthContext";
//import ImageScroll from "../src/components/Products/categoryScroll";

export default function HomeStore() {
  ////const { isAuthenticated } = useAuthContext();
  return (
    <>
     <Navbar />
    <div className="max-w-[1250px] mx-auto">
      <Hero />
      <Categories />
     <Products />
     
    </div>
    <Footer />
    </>
  );
}
