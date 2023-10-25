//import React from 'react';
// Adjust the import path accordingly

import { useProductContext } from "../../../hooks/ProductContext";
import ScrollProducts from "../Products/ScrollProducts";
//import { productsByCategory } from "../constant/productCategory"; // Adjust the import path accordingly

const Products = () => {
  const {products} = useProductContext()
  // Extract category names from the productsByCategory object
 // const categories = Object.keys(productsByCategory);

  return (
    <section className="mt-5">
      {products.slice(0, 3).map((category) => {
        //const categoryProducts = productsByCategory[category];
        const categoryTitle = category.category.name
        //console.log(categoryTitle)
        return (
          <ScrollProducts
            key={category.id}
           products={products}
           categoryTitle= {categoryTitle}
          />
        );
      })}
      <article className="w-full h-full lg:h-[300px] my-10">
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695733529/rocktea-product-website/assets/Product_ad_mzshyg.png"
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </article>
      {products.slice(0, 5).map((category) => {
        //const categoryProducts = productsByCategory[category];
        const categoryTitle = category.category.name
        //console.log(categoryTitle)
        return (
          <ScrollProducts
            key={category.id}
           products={products}
           categoryTitle= {categoryTitle}
          />
        );
      })}
      {/*
      {categories.map((category) => {
        const categoryProducts = productsByCategory[category];
        return (
          <ScrollProducts
            key={category}
            categoryTitle={category}
            products={categoryProducts}
          />
        );
      })}
      
      */}
      
    </section>
  );
};

export default Products;

