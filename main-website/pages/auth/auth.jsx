// auth.js
//import { toast } from "react-hot-toast";
import axios from "axios";

const API_URL = "https://rocktea-mall-api-test.up.railway.app";

// Function to handle user registration
export const register = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/rocktea/storeowner/`,
      userData,
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    /*if ({ error } || error.response.data.password) {
      toast.error(
        "Password must include at least one special symbol, one lowercase letter, and one uppercase letter.",
      );
    }*/
    throw error.response.data;
    // Handle registration errors here
  }
};

export const registerService = async (serviceData) => {
  try {
    const response = await axios.post(
      `${API_URL}/rocktea/signup/services/`,
      serviceData,
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    /*if ({ error } || error.response.data.password) {
      toast.error(
        "Password must include at least one special symbol, one lowercase letter, and one uppercase letter.",
      );
    }*/
    throw error.response.data;
    // Handle registration errors here
  }
};
// Function to handle user store registration
export const registerStore = async (storeData) => {
  try {
    const response = await axios.post(
      `${API_URL}/rocktea/create/store/`,
      storeData,
    );
    if (!response.ok) {
      console.log("Something is wrong with your request");
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error registering store:", error);
    throw error.response ? error.response.data : error; // Handle registration errors here
  }
};

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/mall/signin/`, credentials);

    return response.data;
  } catch (error) {
    throw error.response.data;

    // Handle login errors here
  }
};
