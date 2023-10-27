import { createSlice } from "@reduxjs/toolkit";

// 1 initial state
const initialState = {
  cartItems: [
    // {
    //   id: 12,
    //   name: "Mediterranean",
    //   quantity: 3,
    //   unitPrice: 16,
    //   totalPrice: 16,
    // },
  ],
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
                totalPrice: item.unitPrice * (item.quantity + 1),
              }
            : item,
        );
      } else {
        state.cartItems.push(action.payload);
      }
    },
    decrementItem: (state, action) => {
      if (action.payload.quantity > 1) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.unitPrice * (item.quantity - 1),
              }
            : item,
        );
      }
    },
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
export const { addItem, removeItem, deleteItem, clearCart, decrementItem } =
  cartSlice.actions;

// selectors
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
