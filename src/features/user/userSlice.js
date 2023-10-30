import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  authState: false,
  otpSend: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: (state) => {
      state.currentUser = null;
    },
    setAuthState: (state) => {
      state.authState = true;
    },
    unSetAuthState: (state) => {
      state.authState = false;
    },
    setOtpSend: (state) => {
      state.otpSend = true;
    },
  },
});

export const {
  addCurrentUser,
  removeCurrentUser,
  setAuthState,
  unSetAuthState,
  setOtpSend,
} = userSlice.actions;

// selectors
export const selectUser = (state) => state.user;

export default userSlice.reducer;
