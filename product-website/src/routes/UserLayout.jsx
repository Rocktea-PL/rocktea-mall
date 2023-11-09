import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Cart from "../../pages/Users/Cart";
import Checkout from "../../pages/Users/Checkout";
import Login from "../../pages/Users/Login";
import Signup from "../../pages/Users/Signup";
import Profile from "../../pages/Users/Profile/Profile";
import Products from "../../pages/Products";
import ProductDetails from "../components/Products/ProductDetails";
import SearchPage from "../../pages/Dropshippers/SearchPage";
import Notfound from "../Notfound";
import ProtectedRoute from "./ProtectedRoute";
////import {  useStoreContext } from "../Hooks/UserAuthContext";
import Navbar from "../Features/UserNavbar";
//import DropshipperNavbar from "../Features/DropshipperNavbar";

function UserLayout() {
  //const {storeUser} = useStoreContext()
  const location = useLocation();
  //let id = localStorage.getItem ('storeId')

  //console.log(id)
  // Check if the current location is the registration route
  const hideNavbar =
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/logout";

  return (
    <main>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/product_details/:id" element={<ProductDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </main>
  );
}

export default UserLayout;
