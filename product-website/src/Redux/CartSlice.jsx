// cartSlice.js
/*import { createSelector,createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // An array to store the items in the cart
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      // Check if the product is already in the cart
      const existingItem = state.items.find((item) => item.id === action.payload);

      if (existingItem) {
        // If the product is already in the cart, increment the quantity
        existingItem.quantity += quantity;
      } else {
        // If not, add a new item to the cart
        state.items.push({ product, quantity });
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.product.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.items));

    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((item) => item.product.id === productId);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((item) => item.product.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
  
});


export const selectCartTotalQuantity = createSelector(
  (state) => state.cart.items,
  (items) => {
    // Calculate the total quantity by summing the quantities of all items
    return items.reduce((total, item) => total + item.quantity, 0);
  }

  
);

const storedCart = localStorage.getItem('cart');
if (storedCart) {
cartSlice.items = JSON.parse(storedCart);
}
// Retrieve cart items from local storage during application initialization

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;


export default cartSlice.reducer;*/
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const cartFromLocalStorage = localStorage.getItem("cart");
const initialCartItems = cartFromLocalStorage
  ? JSON.parse(cartFromLocalStorage)
  : [];
const totalCartQuantity =
  localStorage.getItem("cartQuantity") !== null
    ? JSON.parse(localStorage.getItem("cartQuantity"))
    : 0;
const initialState = {
  cartItems: initialCartItems,
  cartTotalAmount: 0,
  cartTotalQuantity: totalCartQuantity,
};

// addToCart(Add one item for one product)
// setRemoveItemFromCart(Remove all items of one product)
// setIncreaseItemQuantity(Increase cart quantity)
// setDecreaseItemQuantity(Decrease the quantity)
// setClearItems(Clear all items from cart)
// setGetTotals(Total for all price)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // In your cartSlice.js
    addToCart: (state, action) => {
      const { product, selectedSize } = action.payload;

      // Check if the product is already in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize,
      );

      if (existingItem) {
        // If the product is already in the cart with the same size, increment the quantity
        existingItem.cartQuantity += 1;
        toast.success(`Item QTY Increased`);
      } else {
        // If not, add a new item to the cart with the selected size
        const newItem = { ...product, selectedSize, cartQuantity: 1 };
        state.cartItems.push(newItem);
        toast.success(`product added to Cart`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.name} Removed From Cart`);
    },

    setIncreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY Increased`);
      }
    },

    setDecreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`Item QTY Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setClearItems: (state) => {
      state.cartItems = [];
      toast.success(`Cart cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setGetTotalAmount: (state) => {
      const { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { wholesalePrice, retailPrice, cartQuantity } = cartItem;
          const totalPrice = (wholesalePrice + retailPrice) * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQuantity += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        },
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQuantity;
      localStorage.setItem("cartQuantity", totalQuantity);
    },
  },
});

export const {
  addToCart,
  setRemoveItemFromCart,
  setIncreaseItemQuantity,
  setDecreaseItemQuantity,
  setClearItems,
  setGetTotalAmount,
} = cartSlice.actions;

// this cart below is not the name, its the cart in the store
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;

export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default cartSlice.reducer;
