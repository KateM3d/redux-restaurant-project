import { createSlice } from "@reduxjs/toolkit";
import { dishesSlice } from "./dishesSlice";

export const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push({
        dishId: action.payload.dish.id,
        quantity: action.payload.quantity,
      });
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;
export const { addItemToCart } = slice.actions;
export default dishesSlice.reducer;
