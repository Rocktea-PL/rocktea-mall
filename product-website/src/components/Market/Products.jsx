import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useParams and useHistory
//import ScrollProducts from '../Products/ScrollProducts';
import Pagination from "../Products/Pagination";
//import { useProductContext } from '../../../hooks/ProductContext';
import ScrollProducts from "./ScrollProducts";
//import MarketplaceModal from '../Modals/MarketplaceModal';
///import { useState } from 'react';

const Products = ({ page, products, openModal, getProductPrice, price }) => {
  let currentPage = page ? parseInt(page, 10) : 1; // Parse the page parameter as an integer
  const productsPerPage = 3; // Number of products per page
  const navigate = useNavigate(); // Get the history object to update the URL

  // Calculate the range of products to display
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const onPageChange = (newPage) => {
    // Update the URL when the page changes
    navigate(`/marketplace?page=${newPage}`);
  };

  useEffect(() => {
    const handlePopstate = () => {
      if (page === undefined) {
        currentPage = 1;
        navigate(`/marketplace?page=${currentPage}`, { replace: true });
      }
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [currentPage, navigate, page]);

  return (
    <div className="mt-5">
      {products.slice(startIndex, endIndex).map((category, index) => {
        const categoryTitle = category.category.name;
        return (
          <ScrollProducts
            key={index}
            products={products}
            categoryTitle={categoryTitle}
            openModal={openModal}
            getProductPrice={getProductPrice}
            price={price}
          />
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Products;
