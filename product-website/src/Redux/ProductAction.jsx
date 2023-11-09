import axios from "axios";

// Define your action types
export const FETCH_PRODUCT_PRICES_REQUEST = "FETCH_PRODUCT_PRICES_REQUEST";
export const FETCH_PRODUCT_PRICES_SUCCESS = "FETCH_PRODUCT_PRICES_SUCCESS";
export const FETCH_PRODUCT_PRICES_FAILURE = "FETCH_PRODUCT_PRICES_FAILURE";

export const fetchProductPrices = (productId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_PRICES_REQUEST });

    try {
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/product-variant/?product=${productId}`,
      );

      dispatch({
        type: FETCH_PRODUCT_PRICES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCT_PRICES_FAILURE, error: error.message });
    }
  };
};
