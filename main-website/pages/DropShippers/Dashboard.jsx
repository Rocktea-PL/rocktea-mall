//import { useEffect } from "react";
import { useEffect } from "react";
import TopCards from '../../src/Dropshippers/components/Dashboard/TopCards'
import Footer from "../../src/Dropshippers/Features/Footer";
import Navbar from "../../src/Dropshippers/Features/Navbar";
//import Navbar from "../../src/Dropshippers/Features/UserNavbar";
import { useState } from "react";
import Sidebars from "../../src/Dropshippers/components/Dashboard/Sidebars";
import BarChart from "../../src/Dropshippers/components/Dashboard/Chart";
import OrderStatus from "../../src/Dropshippers/components/Dashboard/OrderStatus";
import ProductInStock from "../../src/Dropshippers/components/Dashboard/ProductInStock";


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
            <BarChart />
          </div>
          <OrderStatus />
          <ProductInStock />
          </main>
         <Footer storeData = {storeData}/>  
      
   </>
  );
}

export default Dashboard;
