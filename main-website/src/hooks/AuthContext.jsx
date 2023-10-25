// AuthContext.js
import { createContext, useContext, useState } from "react";
import { loginUser } from "../../pages/auth/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
 const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const[ isAuthenticated,setIsAuthenticated] =useState(false)
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await loginUser(credentials); // Call the login function
      console.log("Login successful:", response);
      const token = response.access;
      localStorage.setItem("accessToken", token);
      setAccessToken(token)
      
      localStorage.setItem("userData", JSON.stringify(response.user_data));
      
      let store_id = localStorage.getItem('storeId')
      if (response.user_data.has_store) {
       
        navigate(
          `/dashboard/${store_id}`
          
        );
        setIsAuthenticated(true)

      } else {
        //https://rocktea-mall-product.vercel.app/dashboard
        navigate("/store_details");
          
        
        //setIsAuthenticated(true);
      }
  
      toast.success("Logged in Successfully");
    } catch (error) {
      setLoginError(error); // Handle login error
      console.error("Login error:", error);
      toast.error("Invalid credentials. Please try again.", error);
      //cogoToast.success("Log in Failed. Check you Details");
    } finally {
      setIsLoading(false); // Set loading state back to false after the request is complete
    }
  };

  const logOut = () => {
    setAccessToken(null)
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
   navigate('/signin')
   setIsAuthenticated(false)
    console.log('Log out successfull')
  };
 
  useEffect(() => {
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
      if (storedUserData) {
        setUserData(storedUserData);
        setIsAuthenticated(true)
        
      }
      else if (decodedToken.exp * 1000 < Date.now()) {
        // Token has expired, clear user data
        logOut()
      } 
    }
  }, []);
  return (
    <AuthContext.Provider value={{accessToken,setIsAuthenticated,logOut,userData,setUserData,credentials,isAuthenticated,setCredentials, handleLoginFormSubmit, loginError, isLoading,setLoginError }}>
      {children}
    </AuthContext.Provider>
  );
};
