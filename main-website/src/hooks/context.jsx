// MyContext.js
import { createContext, useContext, useState } from "react";
import { register, registerStore } from "../../pages/auth/auth";
import emailjs from "@emailjs/browser";
import cogoToast from "cogo-toast";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const test = "it is working";
  const [currentStep, setCurrentStep] = useState(0);

  const [storeData, setStoreData] = useState({
    name: "",
    email: "",
    TIN_number: "",
    year_of_establishment: "",
    domain_name: "",
    store_url: "",
    logo: "",
    category: "",
    // Add more properties as needed
  });
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

  const [error, setError] = useState(null);
  const [storeError, setStoreError] = useState(null);

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
        to_link: "https://rocktea-mall.vercel.app/store_details",
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
      // Handle successful registration
      // For now, let's just log the user data
      console.log("Registration successful", userData);
      console.log(response.error);
      // Move to the next step
      cogoToast.success("Registered Succesfully!");
    } catch (error) {
      setError(error);
      cogoToast.error("Registration Failed. Please check your information");
    }
  };

  // Function to handle registering store details
  const handleStoreFormSubmit = async (e) => {
    e.preventDefault();

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
        test,
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
