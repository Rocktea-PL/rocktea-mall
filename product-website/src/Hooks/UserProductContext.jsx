// AuthContext.js
// AuthContext.js
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const UserProductContext = createContext();

//const queryClient = new QueryClient();

const apiUrlProducts = import.meta.env.VITE_API_URL_PRODUCTS;
const apiUrlCategories = import.meta.env.VITE_API_URL_CATEGORIES;
const apiUrlProductVariant = import.meta.env.VITE_API_URL_PRODUCT_VARIANT;
const apiUrlMarketplace = import.meta.env.VITE_API_URL_MARKETPLACE;

console.log(apiUrlProductVariant);
export const useUserProductContext = () => {
  return useContext(UserProductContext);
};

const fetchProducts = async (category) => {
  const response = await axios.get(`${apiUrlProducts}?category=${category}`);
  // console.log('data', response.data)
  return response.data;
};

const fetchProductCategory = async (category) => {
  const response = await axios.get(`${apiUrlCategories}${category}`);
  return response.data;
};

const fetchProductsPrice = async (productId) => {
  const response = await axios.get(`${apiUrlProductVariant}${productId}`);
  //console.log(`${apiUrlProductVariant}?product=${productId}`);
  return response.data;
};

export const UserProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]); // Assuming allProducts is a state you want to manage
  //const [productIds, setProductIds] = useState([]);
  const [cart, setCart] = useState(
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  );

  const { data: products, isLoading: productsLoading } = useQuery(
    "products",
    () => fetchProducts(localStorage.getItem("category_id")),
    { enabled: true, staleTime: 5 * (60 * 1000), cacheTime: 10 * (60 * 1000) },
  );
  const { data: categoryName } = useQuery(
    "categoryName",
    () => fetchProductCategory(localStorage.getItem("category_id")),
    { enabled: true, staleTime: 5 * (60 * 1000), cacheTime: 10 * (60 * 1000) },
  );
  // const { data: price, isLoading: priceLoading } = useQuery('productPrice', () => fetchProductsPrice());

  const handleGetProductItems = async () => {
    const store_id = localStorage.getItem("storeId");
    try {
      const response = await axios.get(
        `${apiUrlMarketplace}?store=${store_id}`,
      );
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error getting product:", error.response);
    }
  };
  //console.log(products,)
  return (
    <UserProductContext.Provider
      value={{
        loading: productsLoading,
        handleGetProductItems,
        setAllProducts,
        allProducts,

        fetchProductsPrice,
        categoryname: categoryName,
        products,

        cart,
        setCart,
      }}
    >
      {children}
    </UserProductContext.Provider>
  );
};

// AuthContext.js
/*import { createContext, useContext, useState } from "react";
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
    const store_id = localStorage.getItem("storeId");
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
*/
