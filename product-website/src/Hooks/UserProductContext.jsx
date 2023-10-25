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
 const getProducts = async() => {
    try{
        const response = await axios.get('https://rocktea-mall-api-test.up.railway.app/rocktea/products/')
    console.log(response.data)
    setProducts(response.data)
    }catch(error){
        console.error(error)
    }
 }
 useEffect(() => {
    getProducts();
 },[])
  return (
    <UserProductContext.Provider value={{products,getProducts}}>
      {children}
    </UserProductContext.Provider>
  );
};
