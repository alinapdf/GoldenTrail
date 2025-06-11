import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/CardSlice";
import favoritesReducer from "../redux/AddFav";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
