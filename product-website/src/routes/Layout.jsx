import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Features/Footer";
import Navbar from "../Features/UserNavbar";

function Layout() {
  const location = useLocation();

  // Check if the current location is the registration route
  const hideNavbar =
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/logout";

  return (
    <main className="relative">
      {!hideNavbar && <Navbar />}
      <Outlet />
      {!hideNavbar && <Footer />}
    </main>
  );
}

export default Layout;
