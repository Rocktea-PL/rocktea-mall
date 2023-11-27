import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { calculatePrices } from "../Helpers/ProductVariants";
import axios from "axios";

const apiUrlProductVariant = import.meta.env.VITE_API_URL_PRODUCT_VARIANT;

export const useProductPrices = (productId) => {
  const fetchProductsPrice = async () => {
    if (!productId) {
      return [];
    }
    const response = await axios.get(`${apiUrlProductVariant}${productId}`);
    return response.data;
  };

  const { data: variantsData, isLoading } = useQuery(
    ["prices", productId],
    fetchProductsPrice,
    { enabled: true, staleTime: 5 * (60 * 1000), cacheTime: 10 * (60 * 1000) },
  );

  const [productPrices, setProductPrices] = useState([]);

  useEffect(() => {
    if (!productId || isLoading || !variantsData) {
      return; // Early return if query is disabled or still loading
    }

    const fetchData = async () => {
      const prices = calculatePrices(variantsData);
      setProductPrices(prices);
    };
    // Introduce a delay if needed

    fetchData();
  }, [productId, variantsData, isLoading]);

  return { productPrices, isLoading };
};
