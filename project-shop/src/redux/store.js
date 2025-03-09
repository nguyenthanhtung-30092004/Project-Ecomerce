import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/cartSlice";
const store = configureStore({
  reducer: {
    carts: cartSlice,
  },
});

export default store;
