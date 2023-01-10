import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../hooks/useSingleProduct";

interface CartState {
    products: Product[];
    total: number;
    cartTotal: number;
    addedFixedAmount: boolean;
}

const initialState: CartState = {
    products: typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("cart") || "[]") : [],
    total:
        typeof window !== "undefined"
            ? JSON.parse(window.localStorage.getItem("cart") || "[]").reduce(
                  (total: number, product: Product) => total + product.price * (product.quantity || 1),
                  0
              )
            : 0,
    cartTotal: 0,
    addedFixedAmount: false,
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
                state.products.push(newProduct);
                state.total += action.payload.price * newProduct.quantity;
            }

            if (state.products.length > 0 && state.products.length < 2 && !state.addedFixedAmount) {
                state.total += 5;
                state.addedFixedAmount = true;
            }
        },
        REMOVE_ITEM: (state, action: PayloadAction<Product>) => {
            const productToRemove = state.products.find((product) => product.id === action.payload.id);

            if (productToRemove) {
                if (productToRemove.quantity !== undefined && productToRemove.quantity > 1) {
                    productToRemove.quantity -= 1;
                    state.total -= productToRemove.price;
                } else {
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
