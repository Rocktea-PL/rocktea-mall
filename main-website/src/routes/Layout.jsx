import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Features/Navbar";
import Footer from "../Features/Footer";
import { AppProvider } from "../hooks/context";
function Layout() {
  const location = useLocation();

  // Check if the current location is the registration route
  const hideNavbar =
    location.pathname === "/personal_details" ||
    location.pathname === "/store_details" ||
    location.pathname === "/bank_details" ||
    location.pathname === "/login";

  return (
    <AppProvider>
    <main className="relative">
      {!hideNavbar && <Navbar />}
      <Outlet />
      {!hideNavbar && <Footer />}
    </main>
    </AppProvider>
  );
}

export default Layout;
