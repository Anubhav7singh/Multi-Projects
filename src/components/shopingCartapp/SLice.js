import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {
      state.push(action.payload);
    },
    removefromcart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export default cartslice.reducer;
export const { addtocart, removefromcart } = cartslice.actions;
