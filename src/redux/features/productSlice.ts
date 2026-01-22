import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../services/productApi";

type ProductState = {
    localWishlist: Product[];
};

const getInitialWishlist = (): Product[] => {
    const data = localStorage.getItem("LocalWishlist");
    return data ? JSON.parse(data) : [];
}

const initialState: ProductState = {
    localWishlist: getInitialWishlist(),
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToLocalWishlist: (state, action: PayloadAction<Product>) => {
            const exist = state.localWishlist.find(item => item._id === action.payload._id);
            if (!exist) {
                state.localWishlist.push(action.payload);
                localStorage.setItem("LocalWishlist", JSON.stringify(state.localWishlist));
            }
        },
        removeFromLocalWishlist: (state, action: PayloadAction<string>) => {
            state.localWishlist = state.localWishlist.filter(item => item._id !== action.payload);
            localStorage.setItem("LocalWishlist", JSON.stringify(state.localWishlist));
        }
    },
});
export const selectLocalWishlist = (state: { product: ProductState }) => state.product.localWishlist;
export const { addToLocalWishlist, removeFromLocalWishlist } = productSlice.actions;
export default productSlice.reducer;
