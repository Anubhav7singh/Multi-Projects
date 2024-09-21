import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./SLice";
const store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});
export default store;
