import Cart from '../../pages/DropShippers/Cart';
import Checkout from '../../pages/DropShippers/Checkout';
import Dashboard from '../../pages/DropShippers/Dashboard';
import Home from '../../pages/DropShippers/Home';
import Marketplace from '../../pages/DropShippers/Marketplace';
import Products from '../../pages/DropShippers/Products';
//import Navbar from '../Dropshippers/Features/UserNavbar';
//import Footer from '../Dropshippers/Features/Footer';
import ProductDetails from '../Dropshippers/components/Products/ProductDetails';
import '../Dropshippers/index.css'
import { Routes,Route, } from "react-router-dom";
//import Logout from '../../pages/DropShippers/Logout';
import { AppProvider } from '../hooks/context';
import { AuthProvider, useAuthContext } from '../hooks/AuthContext';
import EmailVerification from '../Public/Components/Forms/SignUp/EmailVerification';
import HomeStore from '../../pages/DropShippers/Home';
import About from '../../pages/Guest/About';
import Faqs from '../../pages/Guest/Faq';
import UserDetails from '../../pages/Guest/UserDetails';
import StoreDetails from '../../pages/Guest/StoreDetails';
import SignIn from '../../pages/Guest/SignIn';
import Notfound from '../Notfound';

function DropshippersLayout() {
    const { isAuthenticated } = useAuthContext();
  /*const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
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
          path: "/register",
          element: <Signup />,
        },
        {
          path: "/dashboard",
          element: <ProtectedRoute component={Dashboard} />,
        },
        {
          path: "/marketplace",
          element: <Marketplace />,
        },
        {
          path: "/search:query",
          element: <Search />,
        },
      ],
    },
  ]);*/

  //const [userData, setUserData] = useState(null);
  //const location = useLocation();

  // Check if the current location is the registration route
 
  return (
    <>
      <main >
      <AppProvider>
    <AuthProvider>
    <Routes>
  <Route path='/' element= {<Home /> } errorElement={<h1>Error 404</h1>}/>
  <Route path='/verify_email' element= {<EmailVerification/> }/>
  <Route path='/store' element= {<HomeStore /> } errorElement={<h1>Error 404</h1>}/>
     <Route path='/products' element= {<Products /> }/>
     <Route path='/product_details' element= {<ProductDetails/> }/>
     <Route path='/cart' element= {<Cart /> }/>
     <Route path='/checkout' element= {<Checkout /> }/>
     {isAuthenticated &&  <Route path='/dashboard/:slug' element= {<Dashboard /> }/> }
     {isAuthenticated && <Route path='/marketplace' element= {<Marketplace /> }/>  }
     <Route path='/about' element= {<About /> }/>
     <Route path='/faqs' element= {<Faqs/> }/>
     <Route path='/personal_details' element= {<UserDetails /> }/>
     <Route path='/store_details' element= {<StoreDetails /> }/>
     <Route path='/signin' element= {<SignIn/> }/>
     <Route path='/*' element ={<Notfound />}/>    
 
  </Routes>
  </AuthProvider>
  </AppProvider>
      </main>
    </>
  );
}

export default DropshippersLayout;
