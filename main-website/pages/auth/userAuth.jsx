// auth.js
import { toast } from "react-hot-toast";
import axios from "axios";

const API_URL = "https://rocktea-mall-api-test.up.railway.app";

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/rocktea/signup/user/`,
      userData,
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    if ({ error } || error.response.data.password) {
      toast.error(
        "Password must include at least one special symbol, one lowercase letter, and one uppercase letter.",
      );
    }
    throw error.response.data;
    // Handle registration errors here
  }
};



// Function to handle user login
export const loginStoreUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/mall/signin/`, credentials);

    return response.data;
  } catch (error) {
    throw error.response.data;

    // Handle login errors here
  }
};
