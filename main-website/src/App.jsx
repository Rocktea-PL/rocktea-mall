import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./routes/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
//import SignUp from '../pages/SignUp';
import About from "../pages/About";
import Services from "../pages/Services";
import UserDetails from "../pages/UserDetails";
import StoreDetails from "../pages/StoreDetails";
import BankDetails from "../pages/BankDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/login",
          element: <SignIn />,
        },
        {
          path: "/personal_details",
          element: <UserDetails />,
        },
        {
          path: "/store_details",
          element: <StoreDetails />,
        },

        {
          path: "/bank_details",
          element: <BankDetails />,
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
