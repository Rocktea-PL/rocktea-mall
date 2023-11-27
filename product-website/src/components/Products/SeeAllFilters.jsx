// SeeAllFilters.js

//import React from "react";

export default function SeeAllFilters({
  subcategories,
  brands,
  productTypes,
  // productPrices,
  onCategoryFilterChange,
  onBrandFilterChange,
  onProductTypeFilterChange,
  // onPriceFilterChange,
}) {
  //const priceRanges = calculatePriceRanges(productPrices);

  /*const handlePriceRangeChange = (min, max) => {
    onPriceFilterChange(min, max);
  };
*/
  return (
    <div className="bg-white flex flex-col gap-y-3 h-full w-[90%] p-5 rounded-md">
      <article>
        <h3 className="font-semibold uppercase cursor-pointer">Subcategory</h3>
        <div className="h-[100px] mt-2 overflow-auto">
          {subcategories.map((item) => (
            <p
              key={item.id}
              className="cursor-pointer"
              onClick={() => onCategoryFilterChange(item.name)}
            >
              {item.name}
            </p>
          ))}
        </div>
      </article>
      <hr />
      <article>
        <h3 className="font-semibold uppercase cursor-pointer">Brands</h3>
        <div className="h-[100px] mt-2 overflow-auto">
          {brands.map((item) => (
            <p
              key={item.id}
              className="cursor-pointer"
              onClick={() => onBrandFilterChange(item.name)}
            >
              {item.name}
            </p>
          ))}
        </div>
      </article>
      <hr />
      <article>
        <h3 className="font-semibold uppercase ">Product Type</h3>
        <div className="h-[100px] mt-2 overflow-auto">
          {productTypes.map((item) => (
            <p
              key={item.id}
              className="cursor-pointer"
              onClick={() => onProductTypeFilterChange(item.name)}
            >
              {item.name}
            </p>
          ))}
        </div>
      </article>
      <hr />
      <article>
        <h3 className="font-semibold uppercase">Price Range</h3>
        {/* <div className="h-[100px] mt-2 overflow-auto">
          {priceRanges.map((range) => (
            <p
              key={range.id}
              onClick={() => handlePriceRangeChange(range.min, range.max)}
            >
              {`₦ ${range.min} - ₦ ${range.max}`}
            </p>
          ))}
          </div>*/}
      </article>
    </div>
  );
}

/* Helper function to calculate price ranges from product prices
const calculatePriceRanges = (productPrices) => {
  // Assuming productPrices is an array of prices for each product
  const allPrices = productPrices.map((product) => product.prices || []);
  const uniquePrices = Array.from(new Set(allPrices)); // Deduplicate prices

  // Sort the prices in ascending order
  const sortedPrices = uniquePrices.sort((a, b) => a - b);

  // Calculate ranges
  const priceRanges = [];
  for (let i = 0; i < sortedPrices.length - 1; i++) {
    const min = sortedPrices[i];
    const max = sortedPrices[i + 1];
    priceRanges.push({ id: i, min, max });
  }

  return priceRanges;
};
*/
