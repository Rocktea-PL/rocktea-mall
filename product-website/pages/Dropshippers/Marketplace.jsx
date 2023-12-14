import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import ProductFilter from "../../src/components/Products/FilterCards";
//import Navbar from "../../src/Features/UserNavbar";
import Footer from "../../src/Features/Footer";
//import Products from "../../src/components/Home/Products";
import { useUserProductContext } from "../../src/Hooks/UserProductContext";
import MarketplaceModal from "../../src/components/Market/MarketplaceModal";
import Products from "../../src/components/Market/Products";
import DropshipperNavbar from "../../src/Features/DropshipperNavbar";
//import axios from "axios";

export default function Marketplace() {
  const { page } = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  //const searchQuery = new URLSearchParams(location.search).get('query') || '';
  const { products } = useUserProductContext();
  //const [price,setPrice] = useState()
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (productId) => {
    setIsModalOpen(true);
    setSelectedProductId(productId);
    //console.log('Clicked on product with ID:', productId);
  };
  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
    //setSelectedProductId(null);
  };
  // Function to filter products based on the search query
  const handleSearch = (query) => {
    navigate(`/search?query=${query}`);
  };
  return (
    <>
      <DropshipperNavbar page={page} />
      <div className="mt-20 ">
        <div className="bg-market bg-no-repeat bg-cover bg-center h-[300px] mb-10 ">
          <h2 className="text-center  lg:text-start text-[3rem] sm:text-[4rem] text-white lg:pl-10  pt-[4rem] font-semibold leading-tight">
            Welcome To <br /> Market Place
          </h2>
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchQuery);
          }}
          className="flex items-center justify-between border border-solid rounded-[10px] h-[65px] w-[50%] mx-auto pl-7 pr-3 bg-white my-6"
        >
          <input
            type="search"
            placeholder="Type to search the market place"
            className=" bg-transparent border-none outline-0 w-[90%]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="common  w-[170px] h-[45px] flex items-center justify-center gap-2 rounded-[10px] p-2 ">
            Search
          </button>
        </form>
        <section className="max-w-[1250px] mx-auto">
          <ProductFilter />
          <Products products={products} page={page} openModal={openModal} />
        </section>
        {isModalOpen && (
          <MarketplaceModal
            closeModal={closeModal}
            setIsModalOpen={setIsModalOpen}
            products={products}
            productId={selectedProductId}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
