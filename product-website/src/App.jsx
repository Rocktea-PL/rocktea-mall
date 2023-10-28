
import "./App.css";
import { UserProductProvider } from "./Hooks/UserProductContext";
import { UserAuthProvider } from "./Hooks/UserAuthContext";
import { AppProvider } from "./Hooks/Context";
import Layout from "./routes/Layout";
import { useEffect, useState } from "react";
import Loader from "./Features/Loader";



function App() {
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
  ]);*/
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data or any setup)
    // Replace this with your actual app initialization logic
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false once your app is ready
    }, 2000); // Simulating a 2-second loading time
  }, []);
  return (
    <>
    <AppProvider>
    <UserAuthProvider>
    <UserProductProvider>
    {isLoading ? (
      <Loader  />
      ) : (
      <Layout/>
      )}
  </UserProductProvider>
  </UserAuthProvider>
     
    </AppProvider>  
    </>
  );
}

export default App;
