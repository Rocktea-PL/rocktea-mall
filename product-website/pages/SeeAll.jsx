// SeeAll.js

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import SeeAllFilters from "../src/components/Products/SeeAllFilters";
//import { useProductPrices } from "../src/Hooks/UseProductPrices";
import { applyFilters } from "../src/Helpers/ProductFilter"; // Import the helper function
import NoProduct from "../src/components/Products/NoProduct";
import ProductCard from "../src/Features/ProductCard";
import Cookies from "js-cookie";

function SeeAll() {
  const { categoryName } = useParams();
  const FormattedCategoryName = categoryName.replace(/-/g, " ");
  //console.log(FormattedCategoryName)
  const store_id =
    localStorage.getItem("storeUid") || Cookies.get("storeId");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [filterMobile, setFilterMobile] = useState(false);
  const toggleMobileFilter = () => {
    setFilterMobile(!filterMobile);
  };

  const Data = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/marketplace/?store=${store_id}`,
    );
    return response.data.results;
  };

  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

  const {
    data: allProducts,
    status: productStatus,
    error,
  } = useQuery(["product", store_id], Data, {
    enabled: !!store_id,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: twentyFourHoursInMs,
  });

  const { data: subcategories, status: subcategoryStatus } = useQuery(
    "subcategories",
    async () => {
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/subcategory`,
      );
      return response.data;
    },
    {
      enabled: true,
      staleTime: twentyFourHoursInMs,
    },
  );

  const { data: brands, status: brandStatus } = useQuery(
    "brands",
    async () => {
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/brand`,
      );
      return response.data;
    },
    {
      enabled: true,
      staleTime: twentyFourHoursInMs,
    },
  );

  const { data: productTypes, status: productTypeStatus } = useQuery(
    "productTypes",
    async () => {
      const response = await axios.get(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/product-type`,
      );
      return response.data;
    },
    {
      enabled: true,
      staleTime: twentyFourHoursInMs,
    },
  );

  if (
    productStatus === "loading" ||
    subcategoryStatus === "loading" ||
    brandStatus === "loading" ||
    productTypeStatus === "loading"
  ) {
    return <p>Loading...</p>;
  }

  if (
    productStatus === "error" ||
    subcategoryStatus === "error" ||
    brandStatus === "error" ||
    productTypeStatus === "error"
  ) {
    return <p>Error: {error}</p>;
  }

  const handleCategoryFilterChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedProductType(null);
    setSelectedBrand(null);
    setFilterMobile(false);
  };

  const handleBrandFilterChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedProductType(null);
    setSelectedSubcategory(null);
    setFilterMobile(false);
  };

  const handleProductTypeFilterChange = (productType) => {
    setSelectedProductType(productType);
    setSelectedBrand(null);
    setSelectedSubcategory(null);
    setFilterMobile(false);
  };
  const handlePriceFilterChange = (min, max) => {
    setPriceRange({ min, max });
  };

  const filteredProducts = applyFilters(allProducts, {
    subcategory: FormattedCategoryName,
    brand: selectedBrand,
    productType: selectedProductType,
    priceRange,
    // Add more filters here if needed
  });

  /* const ProductItem = ({ item }) => {
    const { productPrices, isLoading } = useProductPrices(item.product.id);

    return (
      <div key={item.product.id}>
        {productPrices?.length > 0 && !isLoading ? (
          <p className="font-bold">₦ {productPrices[0]?.retail_price} </p>
        ) : (
          <p>No price</p>
        )}
      </div>
    );
  };
*/
  const mappedProducts = () => {
    if (!Array.isArray(filteredProducts) || filteredProducts.length === 0) {
      return <NoProduct />;
    }

    // Check if selectedBrand is not present in filtered products
    const brandFilterPresent =
      selectedBrand &&
      !filteredProducts.some((item) => item.product.brand === selectedBrand);
    const productTypeFilterPresent =
      selectedProductType &&
      !filteredProducts.some(
        (item) => item.product.product_type === selectedProductType,
      );
    const subCategoryFilterPresent =
      selectedSubcategory &&
      !filteredProducts.some(
        (item) => item.product.subcategory == selectedSubcategory,
      );
    // Display filter-specific messages if the filter is not present in any of the products
    if (
      brandFilterPresent ||
      productTypeFilterPresent ||
      subCategoryFilterPresent
    ) {
      const messages = [];
      if (brandFilterPresent)
        messages.push(`No products available for brand: ${selectedBrand}`);
      if (productTypeFilterPresent)
        messages.push(
          `No products available for product type: ${selectedProductType}`,
        );
      if (subCategoryFilterPresent)
        messages.push(
          `No products available for product type: ${selectedSubcategory}`,
        );

      // Display filter-specific messages if any
      return messages.map((message, index) => (
        <NoProduct key={index} message={message} />
      ));
    }
    console.log(filteredProducts);
    return filteredProducts.map((item, index) => (
      <ProductCard
        key={index}
        id={item?.id}
        productId={item?.product?.id}
        image={item?.product?.images[0]?.url}
        name={item?.product.name}
        quantity={item?.product?.quantity}
        variants={item?.product?.product_variant}
        oldPrice={item?.oldPrice}
      />
    ));
  };

  console.log(filteredProducts);
  return (
    <div className=" relative  max-w-[1300px] mx-auto ">
      <div className="lg:flex items-start">
        <section className="lg:w-1/4 rounded-lg p-3 lg:max-w-[1300px]  flex flex-col items-center justify-center mx-auto ">
          <SeeAllFilters
            subcategories={subcategories}
            brands={brands}
            productTypes={productTypes}
            toggleMobileNav={toggleMobileFilter}
            onClose={() => setFilterMobile(false)}
            filterMobile={filterMobile}
            onCategoryFilterChange={handleCategoryFilterChange}
            onBrandFilterChange={handleBrandFilterChange}
            onProductTypeFilterChange={handleProductTypeFilterChange}
            onPriceFilterChange={handlePriceFilterChange}
          />
        </section>
        <section className=" lg:w-3/4 max-md:-mt-14  rounded-lg p-3 max-w-[90%]  lg:max-w-[1300px]  flex flex-col items-center justify-center mx-auto h-full overflow-scroll">
          <div>
            <div className="relative max-md:flex items-center max-md:justify-between bg-white shadow-lg  rounded-md w-[500px] lg:w-[800px] p-5 py-5">
              <h3 className=" whitespace-nowrap text-blue font-bold text-center text-[22px] capitalize">
                {" "}
                &quot;{FormattedCategoryName}&quot;{" "}
              </h3>
              <span className="lg:absolute right-5 top-6  text-[18px]">
                {filteredProducts?.length} products found
              </span>
            </div>
          </div>

          <article className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
            {mappedProducts()}
          </article>
        </section>
      </div>
      <div
        onClick={toggleMobileFilter}
        className="fixed  cursor-pointer lg:hidden bg-orange text-white w-full h-14 bottom-0 flex items-center justify-center mx-auto"
      >
        Filter
      </div>
    </div>
  );
}

export default SeeAll;
