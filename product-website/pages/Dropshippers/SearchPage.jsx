import { useLocation } from 'react-router-dom';

import { useState } from 'react';
import Navbar from '../../src/Features/UserNavbar';
import SearchSidebar from '../../src/Features/SearchSidebar';
import Search from '../../src/Features/Search';
import Footer from '../../src/Features/Footer';
import { useUserProductContext } from '../../src/Hooks/UserProductContext';


export default function SearchPage() {
    const { products } = useUserProductContext();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || '';
  const [selectedColor, setSelectedColor] = useState(''); // State for color filter
  //const [selectedPriceRange, setSelectedPriceRange] = useState(''); // State for price range filter
 // const [selectedSubcategory, setSelectedSubcategory] = useState(''); // State for subcategory filter
//const [loading,setLoading] = useState(false)
  
  // Filter products based on searchQuery
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  // Filter products based on selectedColor
  if (selectedColor) {
   
    filteredProducts = filteredProducts.filter((product) => {
       
  const productColor = product.color.toLowerCase().trim();
  const selectedColorValue = selectedColor.toLowerCase().trim();
  let filter = productColor === selectedColorValue;
  console.log(filter)
 
  return filter; 

    })
    //console.log(selectedColor)
  }
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
        <Navbar />
     
      <section className='flex gap-5 px-5 justify-center mx-auto mt-20'>
      <SearchSidebar selectedColor={selectedColor} setSelectedColor={setSelectedColor} filteredProducts={filteredProducts}/>
        <Search filteredProducts={filteredProducts} />
      </section>
      <Footer />
    </div>
  );
}