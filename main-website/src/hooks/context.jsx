// MyContext.js
import { createContext, useContext, useState } from "react";
import { loginUser, register } from "../../pages/auth/auth";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  //const [accessToken, setAccessToken] = useState(null);
  // Define initial user data state
  // const  [user,setUser] = useState({})
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
    logo: "",

    // Add more properties as needed
  });
  const [error, setError] = useState(null);
  const [storeError, setStoreError] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      // Save userData to localStorage
      localStorage.setItem("userData", JSON.stringify(userData));
      toast.success("Registered Succesfully!");

      navigate("/email_verification");
      //cogoToast.success("Registered Succesfully!");
    } catch (error) {
      setError(error || error.response.data);
      toast.error(
        "Registration Failed. Please check your information" || { error },
      );
      setVerifyEmail(false);
      console.log(error.response.data);
      // cogoToast.error("Registration Failed. Please check your information");
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await loginUser(credentials); // Call the login function

      console.log("Login successful:", response);

      const token = response.access;
      localStorage.setItem("accessToken", token);

      let store_id = response.user_data.store_id;
      // console.log(store_id)
      if (response.status === 400 || response.status === 401) {
        console.log("error is bad");
      }
      if (response.user_data.has_store === false) {
        navigate("/store_details");
        //https://rocktea-mall-product.vercel.app
        //`https://rocktea-mall-product.vercel.app/dashboard
        //http://localhost:5174/dashboard/
        //https://users.yourockteamall.com
      } else {
        window.open(
          `https://rocktea-mall-product.vercel.app/dashboard?store_id=${store_id}`,
          "_self",
        );
      }

      console.log("Updated storeData:", storeData);

      toast.success("Logged in Successfully");
    } catch (error) {
      setLoginError(error); // Handle login error
      console.error("Login error:", error);
      console.error("Login status:", error.message);
      toast.error("Invalid credentials. Please try again.", error);
      //cogoToast.success("Log in Failed. Check you Details");
    } finally {
      setIsLoading(false);
      // Set loading state back to false after the request is complete
    }
  };

  // Function to handle registering store details
  const handleStoreFormSubmit = async (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("accessToken");
    const formData = new FormData();
    formData.append("name", storeData.name);
    formData.append("email", storeData.email);
    formData.append("TIN_number", storeData.TIN_number);
    formData.append("year_of_establishment", storeData.year_of_establishment);
    //formData.append("category", storeData.category);
    formData.append("domain_name", storeData.domain_name);
    //formData.append("store_url", storeData.store_url);
    formData.append("logo", storeData.logo);
    //formData.append("owner", storeData.owner);
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${storedToken}`, // Important for sending file data
    };
    const apiUrl =
      "https://rocktea-mall-api-test.up.railway.app/rocktea/create/store/";
    try {
      setIsLoading(true);
      console.log("access token from local storage:", storedToken);
      const response = await axios.post(apiUrl, formData, { headers });

      console.log("access token from store:", storedToken);

      console.log("Registration successful", response.data);
      // After successful store registration in handleStoreFormSubmit
      //localStorage.setItem("hasCompletedStoreDetails", "true");
      localStorage.setItem("owner", response.data.owner);
      localStorage.setItem("id", response.data.id);
      //setStoreId(localStorage.setItem("id", response.data.id))
      toast.success("Store Registered Successfully");
      //navigate("/make_payment");

      // Move to the next step or handle completion as needed
      if (response.data && currentStep < 2) {
        setCurrentStep((prevStep) => {
          const newStep = prevStep + 1;
          localStorage.setItem("currentStep", newStep);
          return newStep;
        });
      } else {
        // User has completed all steps, handle accordingly (e.g., redirect to dashboard)
        alert("You have completed the registration process.");
      }
    } catch (error) {
      console.error("Error registering store details:", error);
      toast.error("Error registering store details: Check you Details");
      setStoreError(error.response.data);
      console.log(error.response.data);
      // Handle any errors here
    } finally {
      setIsLoading(false); // Set loading state back to false after the request is complete
    }
  };

  // Call the function to initiate the payment
  //initiatePayment();
  const initiatePayment = async (formData) => {
    setIsLoading(true);
    try {
      // Check if formData is available
      if (!formData) {
        console.error("Owner information not found.");
        return;
      }

      // Making an HTTP POST request to the backend to initiate the payment
      const response = await axios.post(
        "https://rocktea-mall-api-test.up.railway.app/mall/otp_payment/",
        formData,
      );

      if (response.data && response.status === 200) {
        setIsLoading(false);
        const authorizationUrl = response.data.data.authorization_url;

        // Open the payment page in a new tab
        window.open(authorizationUrl, "_blank");

        // Poll the verification endpoint for the payment status
        pollPaymentVerification(response.data.data.reference);
      } else {
        throw new Error("Failed to initiate payment.");
      }
    } catch (error) {
      console.error(
        "Error initiating payment:",
        error.response ? error.response.data : error.message,
      );
    }
  };

  const pollPaymentVerification = async (paymentReference) => {
    try {
      // Poll the verification endpoint every 5 seconds
      const interval = setInterval(async () => {
        const verifyPayment = await axios.get(
          `https://rocktea-mall-api-test.up.railway.app/mall/verify?reference=${paymentReference}`,
        );

        if (verifyPayment.data.data.status === "success") {
          clearInterval(interval);
          // Stop polling
          //const store_id = localStorage.getItem('id')
          navigate("/domain_creation");
          /*window.location.href =
            `http://localhost:5174/dashboard/${store_id}`;*/
          console.log("Payment verification successful.");
        } else if (verifyPayment.data.data.status === "failed") {
          clearInterval(interval); // Stop polling
          alert(
            "Payment verification failed. You have not made any payment yet.",
          );
          console.log("Payment verification failed.");
        }
      }, 5000); // Poll every 5 seconds
    } catch (error) {
      console.error(
        "Error verifying payment:",
        error.response ? error.response.data : error.message,
      );
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://rocktea-mall-api-test.up.railway.app/rocktea/categories/",
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  //getCategories()

  return (
    <AppContext.Provider
      value={{
        handleFormSubmit,
        handleStoreFormSubmit,
        error,
        setError,
        setStoreError,
        currentStep,
        setCurrentStep,
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
        setLoginError,
        //componentProps,
        isLoading,
        categories,
        getCategories,
        initiatePayment,
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
