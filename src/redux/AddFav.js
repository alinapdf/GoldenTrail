import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFav: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearFav: () => [],
  },
});

export const { addFav, removeFav, clearFav } = favoritesSlice.actions;
export default favoritesSlice.reducer;
