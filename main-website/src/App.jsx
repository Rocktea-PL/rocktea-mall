import {  Routes,Route } from "react-router-dom";
import "./App.css";
//import DropshippersLayout from "./routes/DropshipperLayout";
//import Layout from "./routes/GuestLayout";
//import Dashboard from "../pages/DropShippers/Dashboard";

import Home from "../pages/Guest/Home";
import EmailVerification from "./Public/Components/Forms/SignUp/EmailVerification";
import HomeStore from "../pages/DropShippers/Home";
import Products from "../pages/DropShippers/Products";
import ProductDetails from "./Dropshippers/components/Products/ProductDetails";
import Dashboard from "../pages/DropShippers/Dashboard";
import Marketplace from "../pages/DropShippers/Marketplace";
import About from "../pages/Guest/About";
import Faqs from "../pages/Guest/Faq";
import UserDetails from "../pages/Guest/UserDetails";
import StoreDetails from "../pages/Guest/StoreDetails";
import SignIn from "../pages/Guest/SignIn";
import Notfound from "./Notfound";
import { useAuthContext } from "./hooks/AuthContext";
//import NewDashboard from "../pages/DropShippers/NewDashboard";
import DashboardHome from "../pages/DropShippers/Dashboard/Home";
//import DropshippersLayout from "./routes/DropshipperLayout";
//import Login from "./Public/Components/Forms/Login/Login";

//import Layout from "./routes/PublicLayout";


function App() {
 const {isAuthenticated} = useAuthContext();
 // const dropshipper = true
  return (
    <div>
    
    <main >
     
    <Routes>
  <Route path='/' element= {<Home /> } errorElement={<h1>Error 404</h1>}/>
  <Route path='/verify_email' element= {<EmailVerification/> }/>
  {isAuthenticated && <Route path='/store' element= {<HomeStore /> } errorElement={<h1>Error 404</h1>}/>}
  {isAuthenticated && <Route path='/products' element= {<Products /> }/>}
     {isAuthenticated && <Route path='/product_details' element= {<ProductDetails/> }/>}
     {isAuthenticated &&  <Route path='/dashboard/:slug' element= {<Dashboard /> }/> }
     {isAuthenticated && <Route path='/marketplace' element= {<Marketplace /> }/>  }
     <Route path='/about' element= {<About /> }/>
     <Route path='/faqs' element= {<Faqs/> }/>
     <Route path='/personal_details' element= {<UserDetails /> }/>
     <Route path='/store_details' element= {<StoreDetails /> }/>
     <Route path='/signin' element= {<SignIn/> }/>
     <Route path='/dashboard' element= {<DashboardHome/> }/>
     <Route path='/*' element ={<Notfound />}/>    
 
  </Routes>
 
      </main>
   
  
  
    </div>
  );
}

export default App;
/*<Routes>
  <Route path='/dashboard' element= {<Dashboard /> }/>
  </Routes> */