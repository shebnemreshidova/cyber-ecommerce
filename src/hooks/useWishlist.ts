import { useDispatch, useSelector } from "react-redux";
import { addToLocalWishlist, removeFromLocalWishlist, selectLocalWishlist } from "../redux/features/productSlice";
import { useAuthContext } from "../context/authContext";
import { useAddToWishlistMutation, useGetWishlistQuery, useRemoveFromWishlistMutation, type Product } from "../redux/services/productApi";

export const useWishlist = () => {
    const { userId } = useAuthContext();
    const localWishlist = useSelector(selectLocalWishlist);
    const dispatch = useDispatch();
    const [addToWishlist] = useAddToWishlistMutation();
    const [removeFromWishlist] = useRemoveFromWishlistMutation();
    const { data: backendWishlist = [] } = useGetWishlistQuery(
        { userId },
        {
            skip: !userId,
        }
    );
    const wishlistItems = userId ? backendWishlist : localWishlist;

    const addItem = (product: Product) => {
        if (userId) {
            addToWishlist({ ...product, _id: product._id, userId });
        } else {
            dispatch(addToLocalWishlist(product));
        }
    }
    const removeItem = (productId: string) => {
        if (userId) {
            removeFromWishlist({ userId, productId });
        } else {
            dispatch(removeFromLocalWishlist(productId));
        }

    }
    const isInWishList = (productId: string) => {
        return wishlistItems.some(item => item._id === productId);
    }

    const toggleWishlist = (product: Product) => {
        console.log('Toggling wishlist for product:',   product._id);
        if (isInWishList(product._id)) {
            removeItem(product._id);
        } else {
            addItem(product);
        }
    }

    return {
        wishlistItems,
        addItem,
        removeItem,
        isInWishList,
        toggleWishlist
    }
}