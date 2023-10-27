import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    name: "raj",
    uid: 1232323,
    phone: 9895956000,
  },
  authState: false,
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
  },
});

export const {
  addCurrentUser,
  removeCurrentUser,
  setAuthState,
  unSetAuthState,
} = userSlice.actions;

// selectors
export const selectUser = (state) => state.user;

export default userSlice.reducer;
