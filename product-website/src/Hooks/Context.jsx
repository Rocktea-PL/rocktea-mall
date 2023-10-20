// MyContext.js
//import axios from "axios";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const test = "it is working";

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

  /* Handle payment failure
      const handlePaymentFailure = (error) => {
        // Payment failed, you can show an error message
        console.error("Payment failed", error);
      };*/

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

  

  return (
    <AppContext.Provider
      value={{
        test,
        paymentInfo,
        setPaymentInfo,
        paystackOptions,
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
