// AuthContext.js
import { createContext, useContext, useState } from "react";
import { loginUser } from "../../pages/auth/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [isAuthenticated,setIsAuthenticated] = useState(false)
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
      //setUserData(response.user_data);
      //console.log('before user data', response.user_data.first_name)
      //const firstName = response.user_data.first_name
      //localStorage.setItem("firstName", firstName);
      localStorage.setItem("userData", JSON.stringify(response.user_data));
      // Store the access token in state and/or localStorage
      //setAccessToken(token);
      let store_id = localStorage.getItem('storeId')
      if (response.user_data.has_store === false) {
        navigate("/store_details");
        

      } else {
        //https://rocktea-mall-product.vercel.app/dashboard
       navigate(
          `/dashboard/${store_id}`
          
        );
        setIsAuthenticated(true);
      }
  //console.log('user data', response.user_data.first_name)
      //console.log("Updated storeData:", storeData);
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

  const logout = () => {
    // Clear authentication-related data
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    // Redirect to the login page
    navigate("/signin");
  };
  const checkTokenExpiration = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        // Token has expired, clear user data and redirect to login
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userData");
       
        setIsAuthenticated(false);
        navigate("/signin");
      } else {
        // Token is valid, set user data and authentication status
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
          setUserData(storedUserData);
          
          setIsAuthenticated(true);
        }
      }
    }
  };

  

  useEffect(() => {
    checkTokenExpiration();
  }, []); 
  return (
    <AuthContext.Provider value={{logout,userData,setUserData,credentials,isAuthenticated,setCredentials, handleLoginFormSubmit, loginError, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
