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
//import { useAuthContext } from "./hooks/AuthContext";
//import NewDashboard from "../pages/DropShippers/NewDashboard";
import DashboardHome from "../pages/DropShippers/Dashboard/Home";
import Orders from "../pages/DropShippers/Dashboard/Orders";
import Transactions from "../pages/DropShippers/Dashboard/Transactions";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { ProductProvider } from "./hooks/ProductContext";
import SearchPage from "../pages/DropShippers/Search";
//import { useEffect } from "react";
//import jwtDecode from 'jwt-decode'
//import { UserAuthProvider } from "../../product-website/src/Hooks/UserAuthContext";
//import { useEffect } from "react";
//import DropshippersLayout from "./routes/DropshipperLayout";
//import Login from "./Public/Components/Forms/Login/Login";

//import Layout from "./routes/PublicLayout";


function App() {
 
  //console.log(accessToken)
  
 // const dropshipper = true
  return (
    <div>
    <ProductProvider >
    <main >
     
    <Routes>
  <Route path='/' element= {<Home /> } errorElement={<h1>Error 404</h1>}/>
  <Route path='/verify_email' element= {<EmailVerification/> }/>
     <Route path='/about' element= {<About /> }/>
     <Route path='/faqs' element= {<Faqs/> }/>
     <Route path='/personal_details' element= {<UserDetails /> }/>
     <Route path='/store_details' element= {<StoreDetails /> }/>
     <Route path='/signin' element= {<SignIn/> }/>
     <Route element={<ProtectedRoutes />}>
     <Route path='/store' element= {<HomeStore /> } errorElement={<h1>Error 404</h1>}/>
   <Route path='/products' element= {<Products /> }/>
      <Route path='/product_details/:id' element= {<ProductDetails/> }/>
       <Route path='/dashboard' element= {<Dashboard /> }/> 
      <Route path='/marketplace/:page' element= {<Marketplace /> }/>  
       <Route path='/dashboard/:slug' element= {<DashboardHome/> }/> 
      <Route path='/dashboard/orders' element= {<Orders/> }/> 
     <Route path='/dashboard/transactions' element= {<Transactions/> }/>
     <Route path='/search' element= {<SearchPage/> }/>
     </Route>
     <Route path='/*' element ={<Notfound />}/>    
 
  </Routes>
 
      </main>
      </ProductProvider>
  
  
    </div>
  );
}

export default App;
/*<Routes>
  <Route path='/dashboard' element= {<Dashboard /> }/>
  </Routes> */