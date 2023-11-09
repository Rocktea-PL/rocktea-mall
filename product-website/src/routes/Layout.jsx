import { useStoreContext } from "../Hooks/UserAuthContext";
import DropshipperLayout from "./DropshipperLayout";
import UserLayout from "./UserLayout";

//import Footer from "../Features/Footer";
//import Navbar from "../Features/UserNavbar";
////import { UserAuthProvider } from "../Hooks/UserAuthContext";
//import { AppProvider } from "../Hooks/Context";

function Layout() {
  const { storeUser } = useStoreContext();
  //const location = useLocation();
  let id = localStorage.getItem ('storeId')

  //console.log(id)
  // Check if the current location is the registration route
  /* const hideNavbar =
    location.pathname === '/register/:store_id' ||
    location.pathname === "/login" ||
    location.pathname === "/logout";*/

  return (
    <main>
    { !storeUser.is_store_owner === true &&  id ? (
      
      <DropshipperLayout/>

   ) :   <UserLayout />} 
    </main>
  );
}

export default Layout;
/**storeUser.is_store_owner === true ? (
      
       <DropshipperLayout/>

    ) :   <UserLayout />} 
     */
