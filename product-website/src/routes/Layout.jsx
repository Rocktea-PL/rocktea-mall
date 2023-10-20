import { Outlet,  } from "react-router-dom";

//import Footer from "../Features/Footer";
//import Navbar from "../Features/UserNavbar";
import { UserAuthProvider } from "../Hooks/UserAuthContext";
import { AppProvider } from "../Hooks/Context";

function Layout() {
  //const location = useLocation();
  //let id = localStorage.getItem ('storeId')


//console.log(id)
  // Check if the current location is the registration route
 /* const hideNavbar =
    location.pathname === '/register/:store_id' ||
    location.pathname === "/login" ||
    location.pathname === "/logout";*/

  return (
    <AppProvider>
    <UserAuthProvider>
      <Outlet />
      </UserAuthProvider>
      </AppProvider>
   
  );
}

export default Layout;
