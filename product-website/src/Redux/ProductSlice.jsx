import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  prices: [],
  loading: 'idle',
  error: null,
};

export const fetchProductPrices = createAsyncThunk(
  'products/fetchProductPrices',
  async (productId) => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/product-variant/?product=${productId}`
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductPrices.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProductPrices.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.prices = action.payload;
      })
      .addCase(fetchProductPrices.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
