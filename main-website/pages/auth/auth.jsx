// auth.js

import axios from 'axios';

const API_URL = 'https://rocktea-mall-api-test.up.railway.app';

// Function to handle user registration
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/rocktea/storeowner/`, userData);
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.log(error.response.data)
    throw error.response.data; // Handle registration errors here
  }
};

// Function to handle user store registration
export const registerStore = async (storeData) => {
  try {
    const response = await axios.post(`${API_URL}/rocktea/create/store/`, storeData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering store:', error);
    throw error.response ? error.response.data : error; // Handle registration errors here
  }
};



// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/mall/signin/`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle login errors here
  }
};
