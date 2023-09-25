// MyContext.js
import { createContext, useContext, useState } from "react";
import { loginUser, register, registerStore } from "../../pages/auth/auth";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import cogoToast from "cogo-toast";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  // Define initial user data state
  const [userData, setUserData] = useState({
    // Define initial user data state
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    contact: "",
    password: "",
    profile_image: "",
  });

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [storeData, setStoreData] = useState({
    name: "",
    email: "",
    TIN_number: "",
    year_of_establishment: "",
    domain_name: "",
    store_url: "",
    logo: "",
    category: "",
    owner: "",

    // Add more properties as needed
  });
  const [error, setError] = useState(null);
  const [storeError, setStoreError] = useState(null);
  const [loginError, setLoginError] = useState("");

  const [verifyEmail, setVerifyEmail] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data including the image
    const formData = new FormData();
    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("username", userData.username);
    formData.append("email", userData.email);
    formData.append("contact", userData.contact);
    formData.append("password", userData.password);
    formData.append("profile_image", userData.profile_image);

    try {
      // Add logic here to submit userData to the server
      // For example, you can call the register function from auth.js
      const response = await register(formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for sending file data
        },
      });

      // Send an email notification to the user using EmailJS
      // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual EmailJS values
      const emailParams = {
        to_email: userData.email,
        to_name: userData.first_name,

        // User's email address
        // Add any other template variables here
      };

      // Send the email
      emailjs
        .send(
          "service_5hulf9r",
          "template_nk9rq5h",
          emailParams,
          "Sb11MyaNpQEgE-cBn",
        )
        .then((response) => {
          console.log("Email sent:", response);
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
        });

      emailjs
        .send(
          "service_5hulf9r",
          "template_nxo03xr",
          emailParams,
          "Sb11MyaNpQEgE-cBn",
        )
        .then((response) => {
          console.log("Email sent:", response);
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
        });
      // Handle successful registration
      // For now, let's just log the user data
      console.log("Registration successful", userData);
      console.log(response.error);
      // Move to the next step
      toast.success("Registered Succesfully!");
      setVerifyEmail(true);
      //cogoToast.success("Registered Succesfully!");
    } catch (error) {
      setError(error);
      toast.error("Registration Failed. Please check your information");
      setVerifyEmail(false);
      // cogoToast.error("Registration Failed. Please check your information");
    }
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(credentials); // Call the login function
      // Handle successful login (e.g., store token, redirect user)
      console.log("Login successful:", response);
      console.log(response.user_data.uid);
      navigate("/store_details");
      setStoreData((prevStoreData) => ({
        ...prevStoreData,
        owner: response.user_data.uid,
      }));
      setTimeout(() => {
        handleStoreFormSubmit(e, response.user_data.uid);
      }, 0);
      console.log("Owner set:", response.user_data.uid);
      console.log("Updated storeData:", storeData);

      toast.success("Logged in Successfully");
    } catch (error) {
      setLoginError("Invalid credentials. Please try again."); // Handle login error
      console.error("Login error:", error);
      toast.error("Log in Failed. Check you Details");
      //cogoToast.success("Log in Failed. Check you Details");
    }
  };

  // Function to handle registering store details
  const handleStoreFormSubmit = async (e, owner) => {
    e.preventDefault();
    console.log("Owner in handleStoreFormSubmit:", owner);
    //storeData.owner= owner;
    owner = localStorage.getItem("owner");

    if (!owner) {
      console.error("Owner value not found in localStorage.");
      return;
    }

    console.log("Owner from localStorage:", owner);
    storeData.owner = owner;
    // Create a FormData object to send the form data including the image
    const formData = new FormData();
    formData.append("name", storeData.name);
    formData.append("email", storeData.email);
    formData.append("TIN_number", storeData.TIN_number);
    formData.append("year_of_establishment", storeData.year_of_establishment);
    formData.append("category", storeData.category);
    formData.append("domain_name", storeData.domain_name);
    formData.append("store_url", storeData.store_url);
    formData.append("logo", storeData.logo);
    formData.append("owner", storeData.owner);

    try {
      // Call the registerStore function from auth.js to register store details
      const response = await registerStore(formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for sending file data
        },
      });
      console.log("Registration successful", response);

      // Move to the next step or handle completion as needed
      if (currentStep < 2) {
        setCurrentStep(currentStep + 1);
      } else {
        // User has completed all steps, handle accordingly (e.g., redirect to dashboard)
        alert("You have completed the registration process.");
      }
    } catch (error) {
      // Handle any errors here
      console.error("Error registering store details:", error);
      setStoreError(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleFormSubmit,
        handleStoreFormSubmit,
        error,
        setError,
        setStoreError,
        storeError,
        userData,
        setUserData,
        setStoreData,
        storeData,
        verifyEmail,
        setVerifyEmail,
        credentials,
        setCredentials,
        handleLoginFormSubmit,
        loginError,
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
