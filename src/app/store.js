import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";



export const store = configureStore({
  reducer: {
    // Add your reducers here
    products: productsReducer,
    cart: cartReducer,
  },
}); 
export default store;
