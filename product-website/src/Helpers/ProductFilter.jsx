// filterHelpers.js

export const applyFilters = (products, filters) => {
  return products.filter((item) => {
    // Apply subcategory filter
    if (
      filters?.subcategory &&
      item?.product?.subcategory == filters?.subcategory
    ) {
      return true;
    }

    // Apply brand filter
    if (filters?.brand && item?.product?.brand == filters?.brand) {
      return true;
    }

    // Apply product type filter
    if (
      filters?.productType &&
      item?.product?.productType == filters?.productType
    ) {
      return true;
    }

    // Apply price filter
    const prices = item.productPrices?.map((price) => price?.retail_price) || [];
    if (prices.length !== 0) {
      return true;
    }

    const priceInRange = prices.some(
      (price) =>
        price >= filters?.priceRange.min && price <= filters?.priceRange.max,
    );
    if (priceInRange) {
      return true;
    }

    // Add more filters as needed

    return false;
  });
};
