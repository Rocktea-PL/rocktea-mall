// AuthContext.js
import axios from "axios";
//import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
//import { useEffect } from "react";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
//import { loginUser } from "../../pages/auth/auth";
//import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const StoreContext = createContext();

export const useStoreContext = () => {
  return useContext(StoreContext);
};

export const UserAuthProvider = ({ children }) => {
    
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [store, setStore] = useState({});
   // const [userData, setUserData] = useState({})
    const [isUser, setIsUser] = useState(false)
    const [credentials, setCredentials] = useState({
      email: "",
      password: "",
      
    });
    const handleLoginUserSubmit = async (e) => {
      e.preventDefault();
      let store_id = localStorage.getItem('storeId')
      
      try {
        setIsLoading(true);
        const response = await axios.post(`https://rocktea-mall-api-test.up.railway.app/store/login/`, credentials); // Call the login function
        console.log("Login worked:", response);
        
       
        console.log(store_id)
        const usertoken = response.access;
    localStorage.setItem("accessToken", usertoken);
        //setUserData(response.user_data);
        //console.log('before user data', response.user_data.first_name)
        const userName = response.data.user_data.first_name
        localStorage.setItem("user_name", userName);
        console.log(userName)
        //localStorage.setItem("userData", JSON.stringify(response.user_data));
        // Store the access token in state and/or localStorage
        //setAccessToken(token);
       // let store_id = localStorage.getItem('storeId')
        //console.log('login Successful',response.data)
          //https://rocktea-mall-product.vercel.app/dashboard
        navigate(
            `/store`
            
          );
          setIsUser(true);

        
    //console.log('user data', response.user_data.first_name)
        //console.log("Updated storeData:", storeData);
        
        toast.success("Logged in Successfully");
        
      } catch (error) {
        setError(error); // Handle login error
        console.error("Login error:", error);
        toast.error("Invalid credentials. Please try again.", error);
        //cogoToast.success("Log in Failed. Check you Details");
      } finally {
        setIsLoading(false); // Set loading state back to false after the request is complete
      }
    };
  
    const logOut = () => {
      // Clear authentication-related data
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      setIsUser(false);
      // Redirect to the login page
      navigate("/signin");
    };
    /*const checkTokenExpiration = () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          // Token has expired, clear user data and redirect to login
          localStorage.removeItem("accessToken");
          localStorage.removeItem("userData");
         
          setIsUser(false);
          navigate("/login");
        } 
      }
    };*/
  
    useEffect(() => {
      //checkTokenExpiration();
      getStoreDetails()
    }, []);

    const getStoreDetails = async() => {
        const store_id = localStorage.getItem('storeId')
        try {
          const response = await axios.get(`https://rocktea-mall-api-test.up.railway.app/rocktea/create/store/${store_id}`)
          console.log(response.data)
          setStore(response.data)
        }catch(error){
         console(error.response)
        }
      }
      
  return (
    <StoreContext.Provider value={{store,error,isLoading,isUser,handleLoginUserSubmit,credentials,setCredentials,setError,logOut}}>
      {children}
    </StoreContext.Provider>
  );
};
//https://rocktea-mall-api-test.up.railway.app/rocktea/storeowner/