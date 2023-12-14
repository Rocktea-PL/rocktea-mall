export const calculatePrices = (data) => {
  try {
    const { product, variants } = data;

    return variants
      .map((variant) => {
        const { size, colors, wholesale_price, store_pricings, id } = variant;

        // Ensure that store_pricings is an array and not empty
        if (
          !store_pricings ||
          !Array.isArray(store_pricings) ||
          store_pricings.length === 0
        ) {
          return null; // Handle the case where store_pricings is not available or empty
        }

        // Calculate the total price by adding wholesale and retail prices
        const totalPrices = store_pricings.map(
          (pricing) => pricing.retail_price + wholesale_price,
        );
        const averageTotalPrice =
          totalPrices.reduce((total, price) => total + price, 0) /
          totalPrices.length;

        return {
          size,
          id,
          colors,
          wholesale_price,
          product,
          retail_price: averageTotalPrice.toLocaleString(),
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
};

// Remove null entries from the array
