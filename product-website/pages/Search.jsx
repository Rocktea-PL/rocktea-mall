import { useLocation } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa";
import Search from "../src/Features/UserSearch/Search";
//import Footer from "../../main-website/src/Features/Footer";
import { useUserProductContext } from "../src/Hooks/UserProductContext";
import CommonProducts from "../src/components/Products/CommonProducts";
import Footer from "../src/Features/Footer";
//import Searchfilter from "../../src/Features/Searchfilter";

export default function SearchPage() {
  const { products } = useUserProductContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";
  // const [selectedColor, setSelectedColor] = useState(""); // State for color filter
  //const [selectedPriceRange, setSelectedPriceRange] = useState(''); // State for price range filter
  // const [selectedSubcategory, setSelectedSubcategory] = useState(''); // State for subcategory filter
  //const [loading,setLoading] = useState(false
  // Filter products based on searchQuery
  let filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  console.log("filter", filteredProducts);

  // Filter products based on selectedColor
  /*if (selectedColor) {
    filteredProducts = filteredProducts.filter((product) => {
      const productColor = product.color.toLowerCase().trim();
      const selectedColorValue = selectedColor.toLowerCase().trim();
      let filter = productColor === selectedColorValue;
      console.log(filter);

      return filter;
    });*/
  //console.log(selectedColor)
  // }
  /* if (selectedPriceRange) {
    const [minPrice, maxPrice] = selectedPriceRange.split('-');
    filteredProducts = filteredProducts.filter((product) =>
      product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice)
    );
  }

  // Filter products based on selectedSubcategory
  if (selectedSubcategory) {
    filteredProducts = filteredProducts.filter((product) =>
      product.subcategory === selectedSubcategory
    );
  }
  */

  return (
    <div>
      <div className="flex items-center gap-1  mt-20 px-10 pb-5">
        <p className="flex items-center">
          Home
          <FaAngleRight />
        </p>
        <p className="flex items-center">
          Products
          <FaAngleRight />
        </p>
        <p className="flex items-center capitalize">
          {searchQuery}
          <FaAngleRight />
        </p>
      </div>
      <hr />
      <section className=" gap-5 px-5 justify-center mx-auto  max-w-[1300px]">
        <Search filteredProducts={filteredProducts} searchQuery={searchQuery} />
        <CommonProducts />
      </section>
      <Footer />
    </div>
  );
}

/** <SearchSidebar
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          filteredProducts={filteredProducts}
        /> */
