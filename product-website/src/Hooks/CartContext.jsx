// AuthContext.js
// AuthContext.js
import { createContext, useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, setGetTotalAmount } from "../Redux/CartSlice";
import Cookies from "js-cookie";

const UseCartContext = createContext();

//const queryClient = new QueryClient();

const BASE_URL = import.meta.env.VITE_BASE_URL;

//console.log(apiUrlProductVariant);
export const useUserCartContext = () => {
  return useContext(UseCartContext);
};

const fetchCarts = async () => {
  const authToken = Cookies.get("token");
  const response = await axios.get(`${BASE_URL}/rocktea/cart/`, {
    headers: {
      Authorization: `Bearer ${authToken} `,
    },
  });
  // console.log('data', response.data)
  return response.data;
};

const getQuantityInCartBySize = () => {
  const storedQuantity = sessionStorage.getItem("quantityInCart");
  return storedQuantity ? JSON.parse(storedQuantity) : {};
};
export const UserCartProvider = ({ children }) => {
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizeId, setSelectedSizeId] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [quantityInCart, setQuantityInCart] = useState(getQuantityInCartBySize);
  const [counter, setCounter] = useState(
    Object.keys(quantityInCart).length > 0,
  );
  const { data: carts, isLoading: cartsLoading } = useQuery(
    "cartItems",
    fetchCarts,
    { enabled: true, staleTime: 5 * (60 * 1000), cacheTime: 10 * (60 * 1000) },
  );

  const flattenItems = (carts) => {
    // Flatten the items array
    return carts.reduce((accumulator, currentCart) => {
      if (currentCart.items && currentCart.items.length > 0) {
        accumulator.push(...currentCart.items);
      }
      return accumulator;
    }, []);
  };
  const calculateTotalQuantity = () => {
    if (!carts || !carts.length) {
      return 0;
    }

    // Flatten the items array
    const flattenedItems = flattenItems(carts);

    // Iterate through flattened items and sum their quantities
    const totalQuantity = flattenedItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0,
    );

    return totalQuantity;
  };

  const handleAddToCart = async (selectedPrice, productDet) => {
    if (!selectedSizeId) {
      toast.error("Please select a size before adding to cart.");
      return;
    }
    const storeId = localStorage.getItem("storeUid");
    const authToken = localStorage.getItem("accessToken");
    // const dispatch = useDispatch();
    try {
      // Make a POST request to the cart API
      const quantityToAdd = 1;
      const response = await axios.post(
        "https://rocktea-mall-api-test.up.railway.app/rocktea/cart/",
        {
          store: storeId,
          products: [
            {
              id: productDet.id, // Assuming productDet has the product ID
              quantity: quantityToAdd,
              variant: selectedSizeId,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      // Assuming the API response contains the updated cart information
      const updatedCart = response.data.items;
      console.log(updatedCart);
      //setCart(updatedCart);

      // Dispatch the action to update the Redux store
      dispatch(
        addToCart({
          product: updatedCart,
          selectedSize,
          selectedPrice,
        }),
      );
      dispatch(setGetTotalAmount());
      setQuantityInCart((prevQuantities) => ({
        ...prevQuantities,
        [selectedSizeId]: (prevQuantities[selectedSizeId] || 0) + 1,
      }));

      toast.success("Product added to cart successfully.");

      setCounter(true);
    } catch (error) {
      // Handle errors
      console.error("Error adding product to cart:", error.response);
      toast.error("Failed to add product to cart.");
    }
  };
  const handleIncrementQuantity = async (itemId) => {
    try {
      //const updatedQuantity = quantityInCart + 1;
      const updatedQuantity = (quantityInCart[selectedSizeId] || 0) + 1;
      const response = await axios.patch(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/cart-item/${itemId}/`,
        {
          quantity: updatedQuantity,
        },
      );

      const updatedCart = response.data;
      //console.log(updatedCart);
      setQuantityInCart((prevQuantities) => ({
        ...prevQuantities,
        [selectedSizeId]: updatedQuantity,
      }));
      console.log("cart Increases", updatedCart);
      toast.success("Product quantity updated in the cart.");
    } catch (error) {
      console.error("Error updating product quantity:", error.response);
      toast.error("Failed to update product quantity.");
    }
  };

  const handleDecrementQuantity = async (itemId) => {
    try {
      const currentQuantity = quantityInCart[selectedSizeId] || 0;

      if (currentQuantity > 1) {
        const updatedQuantity = currentQuantity - 1;

        const response = await axios.patch(
          `https://rocktea-mall-api-test.up.railway.app/rocktea/cart-item/${itemId}/`,
          {
            quantity: updatedQuantity,
          },
        );

        const updatedCart = response.data;
        console.log("cart decreases", updatedCart);

        dispatch(
          addToCart({
            product: updatedCart,
            selectedSize,
            selectedPrice,
          }),
        );
        dispatch(setGetTotalAmount());

        setQuantityInCart((prevQuantities) => ({
          ...prevQuantities,
          [selectedSizeId]: updatedQuantity,
        }));

        toast.success("Product quantity updated in the cart.");
      } else {
        toast.error("Quantity cannot be less than 1.");
      }
    } catch (error) {
      console.error("Error updating product quantity:", error.response);
      toast.error("Failed to update product quantity.");
    }
  };

  const handleDeleteProductItems = async (itemId) => {
    try {
      //  const currentQuantity = quantityInCart[selectedSizeId] || 0;
      const response = await axios.delete(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/cart-item/${itemId}/`,
      );
      console.log(response.data);
      // const updatedCart = response.data;
      console.log("cart Deleted");

      toast.success("Product deleted from cart successfully.");
      localStorage.removeItem("quantityInCart");
    } catch (error) {
      console.error("Error deleting Product:", error.response);
      toast.error("Error deleting cart item");
    }
  };
  //console.log(products,)
  return (
    <UseCartContext.Provider
      value={{
        carts,
        cartsLoading,
        selectedSize,
        selectedSizeId,
        setSelectedSize,
        setSelectedSizeId,
        setSelectedPrice,
        selectedPrice,
        quantityInCart,
        setQuantityInCart,
        handleDecrementQuantity,
        handleIncrementQuantity,
        totalQuantity: calculateTotalQuantity(),
        handleDeleteProductItems,
        handleAddToCart,
        counter,
        setCounter,
        token,
        //setCart,
      }}
    >
      {children}
    </UseCartContext.Provider>
  );
};
