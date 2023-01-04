import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

const store = configureStore({
    reducer: cartReducer,
});

export type RootState = ReturnType<typeof cartReducer>;
export type ActionType = typeof store.dispatch;

export default store;
