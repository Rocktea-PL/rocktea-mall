//import React from 'react';
// Adjust the import path accordingly

import { useEffect } from "react";
//import { useUserProductContext } from "../../Hooks/UserProductContext";
import ScrollProducts from "../Products/ScrollProducts";
//import { productsByCategory } from "../constant/productCategory"; // Adjust the import path accordingly
//import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/ProductsSlice";
//import axios from "axios";

const Products = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  //console.log(data)
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  console.log();
  // const {allProducts,setAllProducts,loading,handleGetProductItems} = useUserProductContext()
  // const [loading, setLoading] = useState(true);

  // const PRODUCT_QUERY_KEY = "products";

  /*const store_id = localStorage.getItem('storeId');

  const { data, status, error } = useQuery('products', async () => {

    const response = await axios.get(`https://rocktea-mall-api-test.up.railway.app/rocktea/marketplace/?store=${store_id}`)

    return response.data

  }, {
    staleTime: 0, })
  if (status === 'loading') {

    return <p>Loading...</p>

  }
  if (status === 'error') {

    return <p>Error: {error.message}</p>
 }
console.log(data)
  // Extract category names from the productsByCategory object
  //const categories = Object.keys(productsByCategory);*/

  if (data && data.results) {
    return (
      <section className="mt-5">
        {data?.results.map((category) => {
          //const categoryProducts = productsByCategory[category];
          const categoryTitle = category.product.category;
          //console.log(categoryTitle)
          return (
            <ScrollProducts
              key={category.id}
              products={data.results}
              categoryTitle={categoryTitle}
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
        {data.results.map((category) => {
          //const categoryProducts = productsByCategory[category];
          const categoryTitle = category.product.category;
          //console.log(categoryTitle)
          return (
            <ScrollProducts
              key={category.id}
              products={data.results}
              categoryTitle={categoryTitle}
            />
          );
        })}
        {/*{allProducts.map((category) => {
        //const categoryProducts = productsByCategory[category];
        const categoryTitle = category.category.name
        //console.log(categoryTitle)
        return (
          <ScrollProducts
            key={category.results.id}
            products={category.results}
           categoryTitle= {categoryTitle}
          />
        );
      })}*/}
      </section>
    );
  }
};
export default Products;
