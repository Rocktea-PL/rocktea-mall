import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductsSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
  },
});

export default store;
