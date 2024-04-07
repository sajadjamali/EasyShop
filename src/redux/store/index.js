import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "../slices/productSlice";
import cartReducer from "../slices/cartSlice";
import filterValueReducer from "../slices/filterValueSlice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        filterValue: filterValueReducer
    }
});

store.dispatch(fetchProducts());