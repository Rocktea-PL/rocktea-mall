import { useEffect,  } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useParams and useHistory
//import ScrollProducts from '../Products/ScrollProducts';
import Pagination from '../Products/Pagination';
//import { useProductContext } from '../../../hooks/ProductContext';
import ScrollProducts from './ScrollProducts';
//import MarketplaceModal from '../Modals/MarketplaceModal';
///import { useState } from 'react';

const Products = ({page,products,openModal}) => {
  
  let currentPage = parseInt(page, 10) || 1; // Parse the page parameter as an integer
  const productsPerPage = 3; // Number of products per page
  const navigate= useNavigate(); // Get the history object to update the URL

  // Calculate the range of products to display
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const onPageChange = (newPage) => {
    // Update the URL when the page changes
    navigate(`/marketplace/${newPage}`);
  };

  

  
  useEffect(() => {
    // Update the URL when the page changes
    navigate(`/marketplace/${currentPage}`);
  }, [currentPage, navigate]);

  return (
    <div className="mt-5">
      {products.slice(startIndex, endIndex).map((category) => {
        const categoryTitle = category.category.name;
        return (
          <ScrollProducts
            key={category.id}
            products={products}
            categoryTitle={categoryTitle}
            openModal={openModal}
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
