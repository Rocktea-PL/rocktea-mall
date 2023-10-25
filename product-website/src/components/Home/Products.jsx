//import React from 'react';
// Adjust the import path accordingly

import { useUserProductContext } from "../../Hooks/UserProductContext";
import ScrollProducts from "../Products/ScrollProducts";
//import { productsByCategory } from "../constant/productCategory"; // Adjust the import path accordingly

const Products = () => {
  const {products} = useUserProductContext()
  // Extract category names from the productsByCategory object
  //const categories = Object.keys(productsByCategory);

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
    </section>
  );
};

export default Products;

/*import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Features/ProductCard";
import {  useRef, useState } from "react";
import './index.css'
import { product } from "../constant/data";


export default function Products() {
  
  const scrollRef = useRef(null);
  
  const [hovered, setHovered] = useState(false);
  const [scrollAtStart, setScrollAtStart] = useState(true);
  const [scrollAtEnd, setScrollAtEnd] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
    
      const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
      const isAtStart = scrollLeft === 0;
      const isAtEnd = scrollLeft + offsetWidth >= scrollWidth ;
      setScrollAtStart(isAtStart);
      setScrollAtEnd(isAtEnd);
    }
  };
  
  const handleNext = () => {
    if (scrollRef.current ) {
      scrollRef.current.scrollLeft +=  scrollRef.current.offsetWidth;
    }
  };
  
  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -=  scrollRef.current.offsetWidth;
    }
  };

   
  
  
  return (
    <section className=" mt-3 pt-2 pb-5  rounded-lg flex flex-col items-center justify-center mb-10 overflow-x-hidden">
      <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-md">Daily Groceries</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {product.slice(0,4).map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>

        </div>
        <article className="w-full h-full lg:h-[300px] my-10">
          <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695733529/rocktea-product-website/assets/Product_ad_mzshyg.png" 
          className="w-full h-full object-cover rounded-lg"
          alt="" />
        </article>

        <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-md"> Back To School Groceries</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2  md:grid-cols-4  gap-4">
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>
        
        </div>
        <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-md  lg:text-md"> Top Products</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>
        
        </div>
        <div className=" relative w-full mt-5 bg-white z-[10] p-5">
        <h2 className=" font-semibold text-md  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-5 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <div className="relative">

       
        <article 
        className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered ? 'hovered' : ''}`}
         ref={scrollRef}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onScroll={handleScroll}
         >
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
            <button onClick={handlePrev} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtStart ? '' : 'hidden' 
      } transition-opacity duration-300`}><FaAngleLeft/></button>
      <button onClick={handleNext}className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtEnd ? '' : 'hidden'
      } transition-opacity duration-300`}><FaAngleRight/></button>
        </article>
        </div>
        <div className="mt-10">
          <article className="relative">
          <h2 className=" font-semibold text-md  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-2 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
          </article>
       
        <div className="relative">

       
        <article 
        className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered ? 'hovered' : ''}`}
         ref={scrollRef}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onScroll={handleScroll}
         >
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
            <button onClick={handlePrev} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtStart ? '' : 'hidden' 
      } transition-opacity duration-300`}><FaAngleLeft/></button>
      <button onClick={handleNext}className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtEnd ? '' : 'hidden'
      } transition-opacity duration-300`}><FaAngleRight/></button>
        </article>
        </div>
        </div>
        </div>
        <div className=" relative w-full mt-5 bg-white z-[10] p-5">
        <h2 className=" font-semibold text-md  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-5 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <div className="relative">

       
        <article 
        className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered ? 'hovered' : ''}`}
         ref={scrollRef}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onScroll={handleScroll}
         >
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
            <button onClick={handlePrev} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtStart ? '' : 'hidden' 
      } transition-opacity duration-300`}><FaAngleLeft/></button>
      <button onClick={handleNext}className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtEnd ? '' : 'hidden'
      } transition-opacity duration-300`}><FaAngleRight/></button>
        </article>
        </div>
        <div className="mt-10">
          <article className="relative">
          <h2 className=" font-semibold text-md  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-2 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
          </article>
       
        <div className="relative">

       
        <article 
        className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered ? 'hovered' : ''}`}
         ref={scrollRef}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onScroll={handleScroll}
         >
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
            <button onClick={handlePrev} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtStart ? '' : 'hidden' 
      } transition-opacity duration-300`}><FaAngleLeft/></button>
      <button onClick={handleNext}className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtEnd ? '' : 'hidden'
      } transition-opacity duration-300`}><FaAngleRight/></button>
        </article>
        </div>
        </div>
        </div>
    </section>
  )
    }
    






/*import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Features/ProductCard";
import { product } from "../constant/data";
import { useRef, useState, useEffect } from "react";
import './index.css';

function Products() {
  const ref = useRef(null)
  const [categories, setCategories] = useState([]);
  const [scrollRefs, setScrollRefs] = useState([]);
  const [hovered, setHovered] = useState([]);
  const [scrollAtStart, setScrollAtStart] = useState([]);
  const [scrollAtEnd, setScrollAtEnd] = useState([]);

  useEffect(() => {
    // Fetch category data
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://rocktea-mall-api-test.up.railway.app/rocktea/categories/");
        const data = await response.json();
        setCategories(data);
        setScrollRefs(data.map(() => ref));
        setHovered(data.map(() => false));
        setScrollAtStart(data.map(() => true));
        setScrollAtEnd(data.map(() => false));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleScroll = (index) => {
    if (scrollRefs[index].current) {
      const { scrollLeft, offsetWidth, scrollWidth } = scrollRefs[index].current;
      const isAtStart = scrollLeft === 0;
      const isAtEnd = scrollLeft + offsetWidth >= scrollWidth;
      setScrollAtStart(prevState => ({ ...prevState, [index]: isAtStart }));
      setScrollAtEnd(prevState => ({ ...prevState, [index]: isAtEnd }));
    }
  };

  const handleNext = (index) => {
    if (scrollRefs[index].current) {
      scrollRefs[index].current.scrollLeft += scrollRefs[index].current.offsetWidth;
    }
  };

  const handlePrev = (index) => {
    if (scrollRefs[index].current) {
      scrollRefs[index].current.scrollLeft -= scrollRefs[index].current.offsetWidth;
    }
  };

  return (
    <section className="mt-3 pt-2 pb-5 rounded-lg mb-10 overflow-x-hidden">
      {categories.map((category,index) => (
        <div key={category.id} className="relative w-full mt-5">
          <h2 className="lg:text-center font-semibold text-md">{category.name}</h2>
          <span
            className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
            onClick={() => alert("See All")}
          >
            See All <FaAngleRight />
          </span>
          
          <div className="relative">
            <article
              className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered[index] ? 'hovered' : ''}`}
              ref={scrollRefs[index]}
              onMouseEnter={() => setHovered(prevState => ({ ...prevState, [index]: true }))}
              onMouseLeave={() => setHovered(prevState => ({ ...prevState, [index]: false }))}
              onScroll={() => handleScroll(index)}
            >
              {product.map((item) => (
                <ProductCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                />
              ))}
              <button onClick={() => handlePrev(category.id)} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${hovered[index] && !scrollAtStart[index] ? '' : 'hidden'} transition-opacity duration-300`}><FaAngleLeft /></button>
              <button onClick={() => handleNext(category.id)} className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${hovered[index] && !scrollAtEnd[index] ? '' : 'hidden'} transition-opacity duration-300`}><FaAngleRight /></button>
            </article>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;

/*import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../../Features/ProductCard";
import {  useRef, useState } from "react";
import './index.css'
import { product } from "../constant/data";


function Products() {
  const scrollRef = useRef(null);
  
  const [hovered, setHovered] = useState(false);
  const [scrollAtStart, setScrollAtStart] = useState(true);
  const [scrollAtEnd, setScrollAtEnd] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
    
      const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
      const isAtStart = scrollLeft === 0;
      const isAtEnd = scrollLeft + offsetWidth >= scrollWidth ;
      setScrollAtStart(isAtStart);
      setScrollAtEnd(isAtEnd);
    }
  };
  
  const handleNext = () => {
    if (scrollRef.current ) {
      scrollRef.current.scrollLeft +=  scrollRef.current.offsetWidth;
    }
  };
  
  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -=  scrollRef.current.offsetWidth;
    }
  };

   
  
  
  return (
    <section className=" mt-3 pt-2 pb-5  rounded-lg flex flex-col items-center justify-center mb-10 overflow-x-hidden">
      <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-md">Daily Groceries</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {product.slice(0,4).map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>

        </div>
        <article className="w-full h-full lg:h-[300px] my-10">
          <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695733529/rocktea-product-website/assets/Product_ad_mzshyg.png" 
          className="w-full h-full object-cover rounded-lg"
          alt="" />
        </article>

        <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-md"> Back To School Groceries</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2  md:grid-cols-4  gap-4">
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>
        
        </div>
        <div className="relative w-full mt-5">
        <h2 className="lg:text-center font-semibold text-md  lg:text-md"> Top Products</h2>
        <span
          className="absolute top-0 lg:top-3 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <article className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
        </article>
        
        </div>
        <div className=" relative w-full mt-5 bg-white z-[10] p-5">
        <h2 className=" font-semibold text-md  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-5 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <div className="relative">

       
        <article 
        className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered ? 'hovered' : ''}`}
         ref={scrollRef}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onScroll={handleScroll}
         >
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
            <button onClick={handlePrev} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtStart ? '' : 'hidden' 
      } transition-opacity duration-300`}><FaAngleLeft/></button>
      <button onClick={handleNext}className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtEnd ? '' : 'hidden'
      } transition-opacity duration-300`}><FaAngleRight/></button>
        </article>
        </div>
        <div className="mt-10">
          <article className="relative">
          <h2 className=" font-semibold text-md  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-2 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
          </article>
       
        <div className="relative">

       
        <article 
        className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered ? 'hovered' : ''}`}
         ref={scrollRef}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onScroll={handleScroll}
         >
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
            <button onClick={handlePrev} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtStart ? '' : 'hidden' 
      } transition-opacity duration-300`}><FaAngleLeft/></button>
      <button onClick={handleNext}className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtEnd ? '' : 'hidden'
      } transition-opacity duration-300`}><FaAngleRight/></button>
        </article>
        </div>
        </div>
        </div>
        <div className=" relative w-full mt-5 bg-white z-[10] p-5">
        <h2 className=" font-semibold text-md  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-5 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
        <div className="relative">

       
        <article 
        className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered ? 'hovered' : ''}`}
         ref={scrollRef}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onScroll={handleScroll}
         >
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
            <button onClick={handlePrev} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtStart ? '' : 'hidden' 
      } transition-opacity duration-300`}><FaAngleLeft/></button>
      <button onClick={handleNext}className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtEnd ? '' : 'hidden'
      } transition-opacity duration-300`}><FaAngleRight/></button>
        </article>
        </div>
        <div className="mt-10">
          <article className="relative">
          <h2 className=" font-semibold text-md  lg:text-2xl">People Also Viewed</h2>
        <span
          className="absolute top-2 lg:top-5 right-5 text-right flex items-center gap-2 text-[var(--orange)] cursor-pointer"
          onClick={() => alert("yesss")}
        >
          See All <FaAngleRight />
        </span>
          </article>
       
        <div className="relative">

       
        <article 
        className={`flex overflow-x-scroll gap-2 scroll-smooth ${hovered ? 'hovered' : ''}`}
         ref={scrollRef}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onScroll={handleScroll}
         >
          {product.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            />

          ))}
            <button onClick={handlePrev} className={`absolute top-1/2 transform -translate-y-1/2 left-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtStart ? '' : 'hidden' 
      } transition-opacity duration-300`}><FaAngleLeft/></button>
      <button onClick={handleNext}className={`absolute top-1/2 transform -translate-y-1/2 right-0 z-50 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:bg-gray-800 text-md text-white flex items-center justify-center ${
         hovered && !scrollAtEnd ? '' : 'hidden'
      } transition-opacity duration-300`}><FaAngleRight/></button>
        </article>
        </div>
        </div>
        </div>
    </section>
  );
}

export default Products;*/
