import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useEffect } from "react";
//import { category } from "../constant/data";
//import { FaAngleRight } from "react-icons/fa";
//import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//import { useState } from "react";

export default function MarketplaceModal({closeModal,products,productId }) {
  //const dispatch = useDispatch();
 

  
  
 const [addPrice,setAddPrice] = useState(false)
 const [price,setPrice] = useState()
 const [retailPrices, setRetailPrices] = useState({});
 //const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = products.find((product) => product.id === productId);
  //const[priceInput,setPriceInput] = useState({
   // retail_price:''
  //})
  const handleAddPrice=(id)=> {
   
    setAddPrice((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }
  const sliderSettings = {
    // removes default buttons
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const getProductsPrice = async() => {
 
    try{
        const response = await axios.get(`https://rocktea-mall-api-test.up.railway.app/rocktea/product-variant/?product=${productId}`)
    console.log('prices',response.data)
   // setSelectedId(response.data.id)
   // const filteredPrices = response.data.filter((item) => item.wholesale_price !== "");
    //setPrice(filteredPrices);
    setPrice(response.data)
    //setSelectedId(response.data.id)
    console.log('product id', response.data.id)
    }catch(error){
        console.error(error.response.data)
    }
   // updateProductPrices(id, response.data);
 }

  useEffect(()=>{
    getProductsPrice()
    handleGetProduct(productId)
  },[productId])
  

  
 //const selectedSize = products.map((product) => product.size);

 /*const selectedSize=  price?.length > 0
  ? price.map((item) => item.size)
  : "Not Available"; */
  //const priceId=  price.map((item) => item.id)
 //console.log('id', selectedId)


  useEffect(() => {
    document.body.style.overflow = "hidden";
   // handleGetProduct(productId)
    return () => {
      document.body.style.overflow = "auto";
      
    };
  }, []);
  
  const handleAddProduct = (e,id) => {
    //setSelectedId(id)
    e.preventDefault()
   
      // Prepare the data for the POST request
      const data = {
        retail_price: retailPrices[id], // Assuming you want the first size
        store: localStorage.getItem('storeId'), // Replace with your actual store ID
        product_variant: id,
      };

      // Make the POST request
      axios
        .post('https://rocktea-mall-api-test.up.railway.app/rocktea/store-variant/', data)
        .then((response) => {
          // Handle the success response as needed
          console.log('Product added:', response.data);
          handleGetProduct()
        })
        .catch((error) => {
          // Handle errors
          console.error('Error adding product:', error.response);
        });

        
    
  };

  const handleGetProduct = () => {
    //setSelectedId(id)
   // e.preventDefault()
    const store_id= localStorage.getItem('storeId')
      // Prepare the data for the POST reques
      
     axios
        .post(`https://rocktea-mall-api-test.up.railway.app/rocktea/marketplace/?store=${store_id}&product=${productId}`)
        .then((response) => {
          // Handle the success response as needed
          console.log('Product variant added:', response.data);
          
        })
        .catch((error) => {
          // Handle errors
          console.error('Error adding product:', error.response);
        });

        
    
  };

  
 
  const handleRemoveProduct = (productVariantId) => {
    // Make a DELETE request to remove the product
    axios
      .delete(`https://rocktea-mall-api-test.up.railway.app/rocktea/store-variant/${productVariantId}`)
      .then((response) => {
        // Handle the success response as needed
        console.log('Product removed:', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error removing product:', error.response);
      });
  };
  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay, not on the modal itself
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    
    }
  };

  return (
    <div className="modal-overlay z-[9999]" onClick={handleOverlayClick}>
      <div className="pt-8 bg-white rounded-lg relative w-[70%]  lg:w-[500px] flex flex-col   ">
        <button onClick={closeModal} className="close-button">
          &times;
        </button>
        <Slider {...sliderSettings}>
          {selectedProduct?.images.map((item, index) => (
            <div key={index} className={index === 0 ? "category-first" : ""}>
              <Link to="/products_details">
                <figure className="w-[200px] h-[200px] block mx-auto">
                  <img
                    src={item?.url}
                    alt=""
                    className="rounded-lg object-cover w-full h-full"
                  />
                </figure>
              </Link>
            </div>
          ))}
        </Slider>
        <article className="flex flex-col gap-y-3 leading-[1] items-start mt-10 mb-10 h-auto">
          <h4 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1 ">
            Product Name:{" "}
            <span className="text-gold text-left font-semibold">
             {selectedProduct.name}
            </span>
          </h4>
          <h4 className=" text-sm font-medium flex items-center gap-x-5 mx-8 ">
            Available Stock:{" "}
            <span className="text-gold  text-left font-semibold">{selectedProduct.quantity}</span>
          </h4>
          
          <h4 className=" text-sm font-medium flex items-center gap-x-5 mx-8 mt-1 ">
            Category:{" "}
            <span className="text-gold font-semibold">{selectedProduct.category.name}</span>
          </h4>
          <h4 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1">
            SKU: <span className="text-gold font-semibold">{selectedProduct.sku}</span>
          </h4>
          {price?.length > 0 ? (
          price.map((item) => (
         <>
         
         <h4 key={item.id} className="text-sm font-medium flex items-center gap-5 mx-8 mt-1">
              Size:{" "}
              <span className="text-gold font-semibold">
                {item.size}
              </span>
            </h4>
            <h4 className=" text-sm font-medium flex items-center gap-5 mx-8 mt-1 ">
            Price:{" "}
            <span className="text-gold font-semibold text-center"> ₦ {item.wholesale_price}</span>
          </h4>
          <div className="flex items-center mx-auto justify-center mt-7 gap-5">
            <button onClick={() => handleAddPrice(item.id)} className="bg-orange h-12 w-[150px] rounded-lg" >
              Add Product
            </button>
            <button onClick={() => handleRemoveProduct(item.id)} className="border-[1.3px] border-orange h-12 w-[150px] rounded-lg">
              Remove Product
            </button>
            
          </div>
          {addPrice && (
            <div className=" transition-all duration-[10s] delay-200 ease-in-out mx-auto mt-5">
            <h4 className="text-center text-[20px] text-blue font-semibold">Add Profit</h4>
          <form action="" className="px-5 flex items-center justify-center mx-auto gap-3 mt-5">

              <label htmlFor="" className="flex items-center">
                <span className="font-bold text-md px-3">₦</span>
              <input type="number" name='retail_price' value={retailPrices[item.id] || ""}
                        onChange={(e) =>
                          setRetailPrices({
                            ...retailPrices,
                            [item.id]: e.target.value,
                          })
                        } className="border bg-white shadow-md border-gray-200 h-10 rounded px-5" />
              </label>
              <button className="p-2 px-4 rounded-md bg-orange"  onClick={(e) => handleAddProduct(e,item.id)}>Go</button>
            </form>
            </div>
          )}
         </>
            ))
          ) : (
            <h4 className="text-sm font-medium flex items-center gap-5 mx-8 mt-1">
              Size: <span className="text-gold font-semibold">Not Available</span>
            </h4>
          )}
          
          
          
        </article>
      </div>
     
    </div>
  );
}

