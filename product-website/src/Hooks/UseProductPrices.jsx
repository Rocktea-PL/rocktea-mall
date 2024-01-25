import { useQuery } from "react-query";
//import { calculatePrices } from "../Helpers/ProductVariants";
import axios from "axios";
import Cookies from "js-cookie";

const apiUrlProductVariant = import.meta.env.VITE_BASE_URL;

export const useProductPrices = (productId) => {
  //const {store} = useStoreContext()
  const storeId =
    localStorage.getItem("storeUid") || Cookies.get("storeId");

  const fetchProductsPrice = async () => {
    if (!productId) {
      return [];
    }
    const response = await axios.get(
      `${apiUrlProductVariant}/mall/variant-pricing/${productId}?store=${storeId}`,
    );
    return response.data;
  };

  const { data: variantsData, isLoading } = useQuery(
    ["prices", productId],
    fetchProductsPrice,
  );

  return { isLoading, variantsData: !isLoading && variantsData?.variants };
};
