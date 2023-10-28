/*import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './CartSlice';
const store = configureStore({
    reducer:{
        cart:cartSlice,
    }
})

export default <store></store>*/
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;

