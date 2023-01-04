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
            state.products.push(action.payload);
            console.log(action.payload);
        },
    },
});

export const { ADD_ITEM } = cartSlice.actions;
export default cartSlice.reducer;
