import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";

import Products from "../../pages/Products";
//import ProductDetails from "../components/Market/ProductDetails";
import Marketplace from "../../pages/Dropshippers/Marketplace";
import DashboardHome from "../../pages/Dropshippers/Dashboard/Home";
import Orders from "../../pages/Dropshippers/Dashboard/Orders";
import Transactions from "../../pages/Dropshippers/Dashboard/Transactions";
import SearchPage from "../../pages/Dropshippers/SearchPage";
import Notfound from "../Notfound";

import DropshipperNavbar from "../Features/DropshipperNavbar";
import Profile from "../../pages/Dropshippers/Dashboard/Profile";
import ProductDetails from "../components/Market/ProductDetails";
import { useEffect } from "react";
import SeeAll from "../../pages/SeeAll";
import { useLocation } from "react-router-dom/dist";
//import ServiceDashboardHome from "../../pages/Dropshippers/ServicesDashboard copy/Home";

//import Footer from "../Features/Footer";
//import Navbar from "../Features/UserNavbar";
////import { UserAuthProvider } from "../Hooks/UserAuthContext";
//import { AppProvider } from "../Hooks/Context";

function DropshipperLayout() {
  //const {storeUser} = useStoreContext()
  const location = useLocation();
  // let id = localStorage.getItem ('storeId')
  useEffect(() => {
    localStorage.getItem("storeId");
  }, []);
  //console.log(id)
  // Check if the current location is the registration route
  const hideNavbar = location.pathname === "/marketplace";
  /* location.pathname === "/login" ||
    location.pathname === "/logout";*/

  return (
    <main>
      {!hideNavbar && <DropshipperNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product_details/:id" element={<ProductDetails />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/products/:type" element={<Products />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/transactions" element={<Transactions />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/shop/:categoryName" element={<SeeAll />} />
        <Route path="/dashboard/your_profile" element={<Profile />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </main>
  );
}

export default DropshipperLayout;
