//import React from 'react';
// Adjust the import path accordingly

import { useEffect } from "react";
import ScrollProducts from "../Products/ScrollProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/ProductsSlice";
//import axios from "axios";
import { Oval } from "react-loader-spinner";
const Products = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  //console.log(data)
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center mx-auto mb-5">
        <Oval
          height={40}
          width={50}
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="orange"
          strokeWidth={7}
          strokeWidthSecondary={7}
        />
      </div>
    );
  }
  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  console.log(data.results);

  if (data && data.results) {
    return (
      <section className="mt-5">
        {data?.results.map((category) => {
          //const categoryProducts = productsByCategory[category];
          const categoryTitle = category.product.category;
          const subCategory = category.product.subcategory;
          //console.log(subCategory)
          return (
            <ScrollProducts
              key={category.id}
              products={data.results}
              categoryTitle={categoryTitle}
              subCategory={subCategory}
            />
          );
        })}
        <article className=" my-10">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695733529/rocktea-product-website/assets/Product_ad_mzshyg.png"
            width={1300}
            height={1000}
            className=" rounded-lg"
            alt=""
          />
        </article>
        {data.results.map((category) => {
          //const categoryProducts = productsByCategory[category];
          const categoryTitle = category.product.category;
          const subCategory = category.product.subcategory;
          //console.log(categoryTitle)
          return (
            <ScrollProducts
              key={category.id}
              products={data.results}
              categoryTitle={categoryTitle}
              subCategory={subCategory}
            />
          );
        })}
      </section>
    );
  }
};
export default Products;
