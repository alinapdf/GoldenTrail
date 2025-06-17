import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (_, action) => action.payload,
    addItem: (state, action) => {
      const { id, selectedSize = "", selectedColor = "" } = action.payload;
      const key = `${id}-${selectedSize}-${selectedColor}`;
      const existing = state.find((item) => item._key === key);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1, _key: key });
      }
    },
    removeItem: (state, action) =>
      state.filter((item) => item._key !== action.payload),

    increaseQuantity: (state, action) => {
      const item = state.find((item) => item._key === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item._key === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          return state.filter((it) => it._key !== action.payload);
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
