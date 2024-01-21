import { useProductPrices } from "../Hooks/UseProductPrices";

export const calculatePrices = () => {
  const { variantsData } = useProductPrices;
  try {
    return variantsData.map((variant) => {
      const { size, colors, wholesale_price, store_pricings, id } = variant;

      // Calculate the total price by adding wholesale and retail prices
      const retailPrice = store_pricings.retail_price;

      // Calculate total price: retail price if available, otherwise wholesale price
      const totalPrices =
        retailPrice !== null ? retailPrice + wholesale_price : wholesale_price;

      return {
        size,
        id,
        colors,
        wholesale_price,

        retail_price:
          totalPrices !== null ? totalPrices.toLocaleString() : null,
      };
    });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
};
