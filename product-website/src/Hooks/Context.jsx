// MyContext.js
//import axios from "axios";
import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  //const test = "it is working";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    password: "",
    profile_image: "",
    associated_domain: "",

    address: "",
  });
  console.log("user id", localStorage.getItem("storeUid"));
  const handleUserForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const store_id = Cookies.get("storeId") || localStorage.getItem("storeUid");
    formData.associated_domain = store_id;

    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      // Call the API to register the user
      const response = await axios.post(
        "https://rocktea-mall-api-test.up.railway.app/rocktea/signup/user/",
        formData,
        { headers },
      );

      console.log("domain:", formData.associated_domain);
      // Check if the API call was successful
      if (response.status === 200 || response.data) {
        console.log("Registration Successful", response.data);
        localStorage.setItem("user_id", response.data.id);
        Cookies.set("user_id", response.data.id);
        toast.success("Registration Successful");
        // localStorage.setItem('store_id', )

        navigate("/login");
      } else {
        console.error("API call failed");
        // Handle API call failure here
      }
    } catch (error) {
      console.error("API call failed", error.response.data);
      setError(error.response.data);
      toast.error("Error Registering. Please check your details again");
      // Handle API call failure here
    } finally {
      setLoading(false);
    }
  };
  const updateStoreProfile = async (updatedProfileData) => {
    setLoading(true); // Set loading to true when the update starts

    try {
      const storeUser_id = localStorage.getItem("storeUserId");
      console.log("store", storeUser_id);
      const response = await axios.patch(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/storeowner/${storeUser_id}/`,
        updatedProfileData,
      );

      // Check if the API call was successful
      if (response.status === 200 || response.data) {
        console.log("Profile updated", response.data);

        toast.success("Profile updated successfully");
        // Update the local user data if needed
      } else {
        console.error("API call failed");
        // Handle API call failure here
      }
    } catch (error) {
      console.error("API call failed", error.response.data);
      setError(error.response.data);
      toast.error(
        "Error Updating your information. Please check your details again",
      );
      // Handle API call failure here
    } finally {
      setLoading(false); // Set loading to false when the update is complete
    }
  };
  const updateStoreDetailsProfile = async (updatedProfileData) => {
    setLoading(true); // Set loading to true when the update starts

    try {
      const store_id = Cookies.get("storeId");
      const response = await axios.patch(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/create/store/${store_id}/`,
        updatedProfileData,
      );

      // Check if the API call was successful
      if (response.status === 200 || response.data) {
        console.log("Profile updated", response.data);

        toast.success("Profile updated successfully");
        // Update the local user data if needed
      } else {
        console.error("API call failed");
        // Handle API call failure here
      }
    } catch (error) {
      console.error("API call failed", error.response.data);
      setError(error.response.data);
      // Handle API call failure here
    } finally {
      setLoading(false); // Set loading to false when the update is complete
    }
  };

  const updateProfile = async (updatedProfileData) => {
    setLoading(true); // Set loading to true when the update starts

    try {
      const user_id = localStorage.getItem("user_id");
      const response = await axios.patch(
        `https://rocktea-mall-api-test.up.railway.app/rocktea/signup/user/${user_id}/`,
        updatedProfileData,
      );

      // Check if the API call was successful
      if (response.status === 200 || response.data) {
        console.log("Profile updated", response.data);

        toast.success("Profile updated successfully");
        // Update the local user data if needed
      } else {
        console.error("API call failed");
        // Handle API call failure here
      }
    } catch (error) {
      console.error("API call failed", error.response.data);
      setError(error.response.data);
      // Handle API call failure here
    } finally {
      setLoading(false); // Set loading to false when the update is complete
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleUserForm,
        loading,
        error,
        formData,
        setFormData,
        updateStoreProfile,
        updateStoreDetailsProfile,
        setError,
        updateProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
