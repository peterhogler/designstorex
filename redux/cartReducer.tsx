import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toEditorSettings } from "typescript";
import { Product } from "../hooks/useFetch";

interface CartState {
    products: Product[];
    total: number;
}

const initialState: CartState = {
    products: [],
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_ITEM: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.products.find((product) => product.id === action.payload.id);

            if (existingProduct?.quantity !== undefined) {
                existingProduct.quantity += 1;
                state.total += action.payload.price;
            } else {
                const newProduct = { ...action.payload, quantity: 1 };
                console.log(newProduct);
                state.products.push(newProduct);
                state.total += action.payload.price * newProduct.quantity;
            }

            if (state.products.length > 0) {
                state.total += 5;
            }
        },
        REMOVE_ITEM: (state, action: PayloadAction<Product>) => {
            const productToRemove = state.products.find((product) => product.id === action.payload.id);

            if (productToRemove) {
                if (productToRemove.quantity !== undefined && productToRemove.quantity > 1) {
                    // Decrease the quantity and update the total
                    productToRemove.quantity -= 1;
                    state.total -= productToRemove.price;
                } else {
                    // Remove the product from the array and update the total
                    const newProducts = state.products.filter((product) => product.id !== action.payload.id);
                    state.products = newProducts;
                    state.total -= productToRemove.price;
                }
            }
        },
    },
});

export const { ADD_ITEM, REMOVE_ITEM } = cartSlice.actions;
export default cartSlice.reducer;
