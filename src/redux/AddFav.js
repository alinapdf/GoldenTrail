import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (_, action) => action.payload,
    addFav: (state, action) => {
      const exists = state.find(
        (item) => item.product_id === action.payload.product_id
      );
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFav: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearFav: () => [],
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
  setFavorites,
  addFav,
  removeFav,
  clearFav,
  increaseQuantity,
  decreaseQuantity,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
