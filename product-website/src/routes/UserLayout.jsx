import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Cart from "../../pages/Users/Cart";
import Checkout from "../../pages/Users/Checkout";
import Login from "../../pages/Users/Login";
import Signup from "../../pages/Users/Signup";
import Profile from "../../pages/Users/Profile/Profile";
import Products from "../../pages/Products";
import ProductDetails from "../components/Products/ProductDetails";
//import SearchPage from "../../pages/users/SearchPage";
import Notfound from "../Notfound";
import ProtectedRoute from "./ProtectedRoute";
////import {  useStoreContext } from "../Hooks/UserAuthContext";
import Navbar from "../Features/UserNavbar";
import SeeAll from "../../pages/SeeAll";
import { UserCartProvider } from "../Hooks/CartContext";
import { useEffect } from "react";
import OrderItems from "../Features/OrderItems";
import Orders from "../../pages/Users/Profile/Orders";
//import Search from "../Features/UserSearch/Search";
import SearchPage from "../../pages/Search";
//import DropshipperNavbar from "../Features/DropshipperNavbar";

function UserLayout() {
  //const {storeUser} = useStoreContext()
  const location = useLocation();

  useEffect(() => {
    localStorage.getItem("storeUid");
  }, []);
  // console.log( localStorage.getItem("storeUid"))
  // Check if the current location is the registration route
  const hideNavbar =
    location.pathname === `/register` ||
    location.pathname === "/login" ||
    location.pathname === "/logout";

  return (
    <main>
      <UserCartProvider>
        {!hideNavbar && (
          <>
            <Navbar />
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
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
          <Route path="/products/:type" element={<Products />} />
          <Route path="/shop/:categoryName" element={<SeeAll />} />
          <Route
            path="/product_details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/order_items"
            element={
              <ProtectedRoute>
                <OrderItems />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my_orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </UserCartProvider>
    </main>
  );
}

export default UserLayout;
