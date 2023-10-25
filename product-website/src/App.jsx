import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./routes/Layout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Products from "../pages/Products";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { UserProductProvider } from "./Hooks/UserProductContext";
import Profile from "../pages/Profile/Profile";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/store",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product_details/:id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register/:store_id",
          element: <Signup />,
        },
        
        {
          path: "/search:query",
          element: <Search />,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },
      ],
    },
  ]);

  return (
    <>
    <UserProductProvider>
      <RouterProvider router={router} />
      </UserProductProvider>
      
    </>
  );
}

export default App;
