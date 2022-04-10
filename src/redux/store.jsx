import { configureStore } from "@reduxjs/toolkit";
import dishes from "./dishesSlice";
import cart from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    dishes: dishes,
    cart: cart,
  },
});
