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
          path: "/products/details",
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
      ],
    },
  ]);

  return (
    <>
    
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
