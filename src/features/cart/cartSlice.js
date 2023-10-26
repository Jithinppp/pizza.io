import { createSlice } from "@reduxjs/toolkit";

// 1 initial state
const initialState = {
  cartItems: [],
  cartTotal: 0,
};
// 2 reducer function
const cartSlice = createSlice({
  name: "cart",
  initialState,
  // the type going to be name/function name (cart/addItem)
  reducers: {
    addItem: (state, action) => {
      // if exist increment quantity else add
      const existing = state.cartItems.some(
        (item) => item.id === action.payload.id,
      );
      if (existing) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice * item.quantity,
              }
            : item,
        );
      } else {
        state.cartItems.push(action.payload);
      }
    },
    decrementItem: (state, action) => {},
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// actions/dispatch functions
export const { addItem, removeItem, deleteItem, clearCart } = cartSlice.actions;

// selectors
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
