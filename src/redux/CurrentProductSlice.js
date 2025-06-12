import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
};

const currentProductSlice = createSlice({
  name: "currentProduct",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setCurrentProduct } = currentProductSlice.actions;
export default currentProductSlice.reducer;
