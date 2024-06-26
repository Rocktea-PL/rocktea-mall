import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./routes/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
//import SignUp from '../pages/SignUp';
import About from "../pages/About";
import UserDetails from "../pages/UserDetails";
import StoreDetails from "../pages/StoreDetails";
import BankDetails from "../pages/BankDetails";
import Faqs from "../pages/Faq";
import Otp from "../pages/Otp";
import EmailVerification from "./Components/Forms/SignUp/EmailVerification";
import Waiting from "../pages/Waiting";
//import ServicesSignUp from "../pages/ServicesPage/ServicesSignUp";
//import ServiceDashboardHome from "../pages/ServicesDashboard/Home ";
//import ServicesInfo from "../pages/ServicesPage/ServicesInfo";
//import ServicesHomePage from "../pages/ServicesPage/ServicesHomePage";
//import ServiceDetailsPage from "../pages/ServicesPage/ServiceDetailsPage";
//import SignupChoice from "../pages/SignupChoice";
//import ServicesSetings from "../pages/ServicesPage/ServicesSetings";
import "./App.css";
import ServicesWaitlist from "../pages/ServicesWaitlist";

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
          path: "/faqs",
          element: <Faqs />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        
        {
          path: "/personal_details",
          element: <UserDetails />,
        },
        {
          path: "/make_payment",
          element: <Otp />,
        },
        {
          path: "/domain_creation",
          element: <Waiting />,
        },
        {
          path: "/store_details",
          element: <StoreDetails />,
        },
        {
          path: "/email_verification",
          element: <EmailVerification />,
        },
        {
          path: "/bank_details",
          element: <BankDetails />,
        },
        {
          path: "/services_waitlist",
          element: <ServicesWaitlist />,
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
/**{
 * {
          path: "/signup",
          element: <SignupChoice />,
        },
          path: "/services_details",
          element: <ServicesSignUp />,
        },
        {
          path: "/services_info",
          element: <ServicesInfo />,
        },
        {
          path: "/services/home",
          element: <ServicesHomePage />,
        },
        {
          path: "/services/details/:id",
          element: <ServiceDetailsPage />,
        },

        {
          path: "/profile",
          element: <ServicesSetings />,
        }, */