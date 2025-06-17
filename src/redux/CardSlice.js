import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (_, action) => action.payload,
    addItem: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) =>
      state.filter((item) => item.id !== action.payload),

    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  addfav,
  increaseQuantity,
  decreaseQuantity,
  setItems,
} = cartSlice.actions;
export default cartSlice.reducer;
