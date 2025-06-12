import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/CardSlice";
import favoritesReducer from "../redux/AddFav";
import currentProductReducer from "../redux/CurrentProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    currentProduct: currentProductReducer,
  },
});
