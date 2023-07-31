import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            cartAdapter.addOne(state, action.payload);
            toast.dismiss();
            toast.success('product added to cart👍');
            localStorage.setItem("cartItems", JSON.stringify(state.entities));
        },
        removeFromCart(state, action) {
            cartAdapter.removeOne(state, action.payload.id);
            toast.dismiss();
            toast.info("product deleted from cart👍");
            localStorage.setItem("cartItems", JSON.stringify(state.entities));
        },
    },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
