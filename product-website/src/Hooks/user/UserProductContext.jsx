// AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const UserProductContext = createContext();

export const useUserProductContext = () => {
  return useContext(UserProductContext);
};

export const UserProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categoryname, setCategoryName] = useState();
  const [price, setPrice] = useState();
  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [cart,setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
  //const [productPrices,setProductPrices] = useState([])
  const [productIds, setProductIds] = useState([]); // Array to store product IDs
  const getProducts = async () => {
    const category = localStorage.getItem("category_id");
    try {
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/products/?category=${category}`,
      );
      console.log(response.data);
      setProducts(response.data);
      //const productIds = response.data.map(item => item.id);
      const ids = response.data.map((item) => item.id);
      setProductIds(ids);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(productIds);
  const getProductCategory = async () => {
    const category = localStorage.getItem("category_id");
    try {
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/categories/${category}`,
      );
      console.log(response.data);
      setCategoryName(response.data);
      //const productIds = response.data.map(item => item.id);
    } catch (error) {
      console.error(error);
    }
  };

  const getProductsPrice = async (productId) => {
    try {
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/product-variant/?product=${productId}`,
      );
      console.log("prices", response.data);
      // const filteredPrices = response.data.find((item) => item.product !== productIds);
      setPrice(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
    // updateProductPrices(id, response.data);
  };

  const handleGetProductItems = () => {
    const store_id = localStorage.getItem("storeUid");
    // Prepare the data for the POST request
    setLoading(true);
    // Make the POST request
    axios
      .get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/marketplace/?store=${store_id}`,
      )
      .then((response) => {
        // Handle the success response as needed
        console.log("Product:", response.data);
        setAllProducts(response.data);
        console.log("All Product:", allProducts);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error getting product:", error.response);
      });
  };
  useEffect(() => {
    // handleGetProductItems()
  }, [loading]);

  useEffect(() => {
    getProducts();
    getProductsPrice()
    getProductCategory();
    // handleGetProductItems()
  }, []);
  return (
    <UserProductContext.Provider
      value={{
        loading,
        handleGetProductItems,
        setAllProducts,
        allProducts,
        price,
        getProductsPrice,
        categoryname,
        products,
        getProducts,
        cart,
        setCart
      }}
    >
      {children}
    </UserProductContext.Provider>
  );
};
