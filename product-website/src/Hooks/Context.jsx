// MyContext.js
//import axios from "axios";
import axios from "axios";
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

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  });

  // Your Paystack public key
  const publicKey = "pk_test_5ca0e75b73959e80a380bb38f601a565ff05e849";

  const handlePaymentSuccess = (response) => {
    // Payment was successful, you can update the UI accordingly
    console.log("Payment successful", response);
  };

  // Customize your payment options
  const paystackOptions = {
    key: publicKey,
    email: paymentInfo.email,
    amount: 12500, // Amount in kobo (₦12,500)
    currency: "NGN",
    ref: "unique_transaction_reference", // You should generate a unique reference for each transaction
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: "John Doe", // Replace with the actual customer name
        },
      ],
    },

    callback: handlePaymentSuccess,
    onClose: () => console.log("Payment closed"),
  };

  const handleUserForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const store_id = localStorage.getItem("storeId") || localStorage.getItem("storeUid");
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
      // Handle API call failure here
    } finally {
      setLoading(false);
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

  /* Function to send a user order to the backend
const sendUserOrder = async (orderData) => {
  try {
    const response = await axios.post('https://rocktea-mall-api-test.up.railway.app/order/buy', orderData);
    console.log('Order placed:', response.data);
    // Handle success (e.g., display a success message to the user)
  } catch (error) {
    console.error('Error placing order:', error.response);
    // Handle errors (e.g., display an error message to the user)
  }
};

// Example order data
const orderData = {
  customer_id: 'cf9cacfa-a32a-4da8-b542-8a7c9fc3fbaf', // Replace with the actual customer ID
  shipping_address: 'Datum Street, Fas State',
  store: '6f24b2c7-08e5-4199-a1cb-2d9df35724aa',
  products: [
    {
      product: '10b306b8-561b-4971-b3ba-b7f82a3a66ae', // Replace with the actual product ID
      quantity: 2,
      price: 10.99,
    },
    {
      product: '10b306b8-561b-4971-b3ba-b7f82a3a66ae', // Replace with another product ID
      quantity: 3,
      price: 15.99,
    },
  ],
};

// Call the function to send the order
sendUserOrder(orderData);'*/

  return (
    <AppContext.Provider
      value={{
        handleUserForm,
        loading,
        error,
        formData,
        setFormData,
        paymentInfo,
        setPaymentInfo,
        paystackOptions,
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
