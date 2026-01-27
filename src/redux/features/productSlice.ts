import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../services/adminApi";
import type { RootState } from "../store";
interface LocalWishlistType {
    localWishlist: Product[]
}

const getInitialState = (): Product[] => {
    const data = localStorage.getItem("LocalWishlist");
    return data ? JSON.parse(data) : []

}
const initialState: LocalWishlistType = {
    localWishlist: getInitialState()
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToLocalWishlist: (state, action: PayloadAction<Product>) => {
            const exist = state.localWishlist.find((item) => item?._id === action.payload._id);
            if (!exist) {
                state.localWishlist.push(action.payload);
                localStorage.setItem("LocalWishlist", JSON.stringify(state.localWishlist))
            }
        },
        removeFromLocalWishlist: (state, action:PayloadAction<string>) => {
            state.localWishlist = state.localWishlist.filter((item) => item?._id !== action.payload);
            localStorage.setItem("LocalWishlist", JSON.stringify(state.localWishlist))

        }
   
    }
})

export const selectLocalWishlist = (state:RootState) => state.product.localWishlist;
export default productSlice.reducer;
export const { addToLocalWishlist, removeFromLocalWishlist } = productSlice.actions;