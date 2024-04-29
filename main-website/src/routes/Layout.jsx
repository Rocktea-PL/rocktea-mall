import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Features/Navbar";
import Footer from "../Features/Footer";
import { AppProvider } from "../hooks/context";
import CookieBanner from "../Components/CookieBanner";
function Layout() {
  const location = useLocation();

  // Check if the current location is the registration route
  const hideNavbar =
    location.pathname === "/personal_details" ||
    location.pathname === "/email_verification" ||
    location.pathname === "/store_details" ||
    location.pathname === "/services_details" ||
    location.pathname === "/make_payment" ||
    location.pathname === "/domain_creation" ||
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
   // location.pathname.includes("services") ||
    location.pathname === "/services_info";

  return (
    <AppProvider>
      <main className="relative">
        {!hideNavbar && <Navbar />}
        <Outlet />
        {!hideNavbar && <Footer />}
        <CookieBanner />
      </main>
    </AppProvider>
  );
}

export default Layout;
