import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: ""
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const jsonProducts = localStorage.getItem('Products');
        const products = JSON.parse(jsonProducts);
        if (!products) {
            try {
                const products = await axios.get("https://fakestoreapi.com/products");
                products.data.map(p => p.number = 0);
                const jsonProducts = JSON.stringify(products.data);
                localStorage.setItem('Products', jsonProducts);
                return products.data;
            } catch (err) {
                console.log(err);
            }
        } else {
            const jsonProducts = localStorage.getItem('Products');
            const products = JSON.parse(jsonProducts);
            return products;
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        increaseProduct: (state, action) => {
            const item = state.items.find(p => p.id == action.payload.id);
            item.number++;
            const jsonProducts = JSON.stringify(state.items);
            localStorage.setItem('Products', jsonProducts);
        },

        decreaseProduct: (state, action) => {
            const item = state.items.find(p => p.id == action.payload.id);
            item.number--;
            const jsonProducts = JSON.stringify(state.items);
            localStorage.setItem('Products', jsonProducts);
        },

        decreaseToZero: (state, action) => {
            const item = state.items.find(p => p.id == action.payload.id);
            item.number = 0;
            const jsonProducts = JSON.stringify(state.items);
            localStorage.setItem('Products', jsonProducts);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading"
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "completed";
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
        })
    }
});

export const { increaseProduct, decreaseProduct, decreaseToZero } = productsSlice.actions;
export default productsSlice.reducer;