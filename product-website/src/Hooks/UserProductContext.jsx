// AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
const UserProductContext = createContext();

export const useUserProductContext = () => {
  return useContext(UserProductContext);
};
  
export const UserProductProvider = ({ children }) => {
 const [products, setProducts] = useState([]);
 const [categoryname, setCategoryName] = useState();
 //const [productPrices,setProductPrices] = useState([])
 const getProducts = async() => {
 const category = localStorage.getItem('category_id')
    try{
        const response = await axios.get(`https://rocktea-mall-api-test.up.railway.app/rocktea/products/?category=${category}`)
    console.log(response.data)
    setProducts(response.data)
    //const productIds = response.data.map(item => item.id);
    
    }catch(error){
        console.error(error)
    }
 }

 const getProductCategory = async() => {
  const category = localStorage.getItem('category_id')
     try{
         const response = await axios.get(`https://rocktea-mall-api-test.up.railway.app/rocktea/categories/${category}`)
     console.log(response.data)
     setCategoryName(response.data)
     //const productIds = response.data.map(item => item.id);
     
     }catch(error){
         console.error(error)
     }
  }
 
 /*const updateProductPrices = (id, prices) => {
  // Add or update the prices for a product with the given ID
  setProductPrices((prevPrices) => {
    const updatedPrices = [...prevPrices];
    const index = updatedPrices.findIndex((price) => price.id === id);
    if (index !== -1) {
      updatedPrices[index].prices = prices;
    } else {
      updatedPrices.push({ id, prices });
    }
    return updatedPrices;
  });
};
*/
/* const getProductsPrice = async(id) => {
 
  try{
      const response = await axios.get(`https://rocktea-mall-api-test.up.railway.app/rocktea/product-variant/?product=${id}`)
  console.log('prices',response.data)
 // const filteredPrices = response.data.filter((item) => item.wholesale_price !== "");
  //setPrice(filteredPrices);
  setPrice(response.data)
  }catch(error){
      console.error(error)
  }
}

 */
 useEffect(() => {
    getProducts();
    //getProductsPrice()
    getProductCategory()
 },[])
  return (
    <UserProductContext.Provider value={{categoryname,products,getProducts}}>
      {children}
    </UserProductContext.Provider>
  );
};
