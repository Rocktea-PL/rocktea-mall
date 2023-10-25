import { useLocation } from 'react-router-dom';
import { useProductContext } from '../../src/hooks/ProductContext';
import { useState } from 'react';
import Search from '../../src/Dropshippers/Features/Search';
import SearchSidebar from '../../src/Dropshippers/Features/SearchSidebar';
import Navbar from '../../src/Dropshippers/Features/Navbar';
import Footer from '../../src/Dropshippers/Features/Footer';

export default function SearchPage() {
    const { products } = useProductContext();
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
     
      <section className='flex gap-5 px-5 justify-center mx-auto mt-24'>
      <SearchSidebar selectedColor={selectedColor} setSelectedColor={setSelectedColor} filteredProducts={filteredProducts}/>
        <Search filteredProducts={filteredProducts} />
      </section>
      <Footer />
    </div>
  );
}
