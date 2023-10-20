//import { useEffect } from "react";
import { useEffect } from "react";
import Chart from "../../../product-website/src/components/Dashboard/Chart";
import OrderStatus from "../../../product-website/src/components/Dashboard/OrderStatus";
import ProductInStock from "../../../product-website/src/components/Dashboard/ProductInStock";
//import Sidebars from "../../../product-website/src/components/Dashboard/Sidebars";
import TopCards from "../../../product-website/src/components/Dashboard/TopCards";
import Footer from "../../src/Dropshippers/Features/Footer";
import Navbar from "../../src/Dropshippers/Features/Navbar";
//import Navbar from "../../src/Dropshippers/Features/UserNavbar";
import { useState } from "react";
import Sidebars from "../../src/Dropshippers/components/Dashboard/Sidebars";


function Dashboard() {
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    const savedUserData = localStorage.getItem("storeData");
    if (savedUserData) {
      setStoreData(JSON.parse(savedUserData));
    }
  }, []);
  if (!storeData) {
    // Handle when storeData is empty or null
    return null;  // or display a message or loading indicator
  }
  console.log(storeData)
  return (
   <>
  <Navbar />
        <main className="mt-20 mb-5">
          <TopCards />
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full">
            <Sidebars />
            <Chart />
          </div>
          <OrderStatus />
          <ProductInStock />
          </main>
         <Footer storeData = {storeData}/>  
      
   </>
  );
}

export default Dashboard;
