import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    isRegistered: false,
    loginInfo: {
      id: '',
      name:'',
      phoneNumber: 0,
      email: '',
      image:'',
      password:'',
    },
  },
  reducers: {
    setLoginData: (state, action) => {
      state.loginInfo = action.payload;
      state.isAuthenticated = action.payload._id !== '';
    },

    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
  },
});

export const { setIsRegistered, setLoginData } = userSlice.actions;

export default userSlice.reducer;