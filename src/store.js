import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// import reducer slices
const store = configureStore({
  reducer: persistedReducer,
  // thunk : [thunk]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

export const persistor = persistStore(store);
