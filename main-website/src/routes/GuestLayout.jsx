import { Routes, useLocation,Route } from "react-router-dom";
import Navbar from "../Public/Components/Navbar";
import Footer from "../Public/Components/Footer";
import { AppProvider } from "../hooks/context";
import Home from "../../pages/Guest/Home";
import About from "../../pages/Guest/About";
import Faqs from "../../pages/Guest/Faq";
import UserDetails from "../../pages/Guest/UserDetails";
import StoreDetails from "../../pages/Guest/StoreDetails";
import '../Public/index.css'

import Notfound from "../Notfound";
import SignIn from "../../pages/Guest/SignIn";
function Layout() {
  const location = useLocation();

  // Check if the current location is the registration route
  const hideNavbar =
    location.pathname === "/personal_details" ||
    location.pathname === "/store_details" ||
    location.pathname === "/bank_details" ||
    location.pathname === "/make_payment" ||
    
    location.pathname === "/login";
    const is404Route = location.pathname === '*';
  return (
    <AppProvider>
     
      <main className="relative">
      {!is404Route && !hideNavbar && <Navbar />}
        <Routes>
     
     <Route path='/' element= {<Home /> } errorElement={<h1>Error 404</h1>}/>
     <Route path='/about' element= {<About /> }/>
     <Route path='/faqs' element= {<Faqs/> }/>
     <Route path='/personal_details' element= {<UserDetails /> }/>
     <Route path='/store_details' element= {<StoreDetails /> }/>
     <Route path='/login' element= {<SignIn/> }/>
     <Route path='*' element ={<Notfound />}/>    
          </Routes>
          {!is404Route && !hideNavbar && <Footer />}
      </main>
    </AppProvider>
  );
}

export default Layout;
