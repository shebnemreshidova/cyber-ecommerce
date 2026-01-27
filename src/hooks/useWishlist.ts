import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../context/AuthContext";
import { useAddWishlistMutation, useGetWishlistQuery, useRemoveFromWishlistMutation } from "../redux/services/productApi";
import type { Product } from "../redux/services/adminApi";
import { addToLocalWishlist, removeFromLocalWishlist, selectLocalWishlist } from "../redux/features/productSlice";


export const useWishlist = () => {
    const dispatch = useDispatch();
    const { userId } = useAuthContext();


    const localWishlist = useSelector(selectLocalWishlist);
    const { data: backendWishlist = [] } = useGetWishlistQuery(undefined, { skip: !userId });

    const wishlist = userId ? backendWishlist : localWishlist;


    const [addToWishlistBE] = useAddWishlistMutation();
    const [removeFromWishlistBE] = useRemoveFromWishlistMutation();


    const isInWishlist = (productId: string) =>
        wishlist.some((item) => item._id === productId);

    const handleToggleWishlist = (item: Product) => {
        if (isInWishlist(item._id)) {
            userId
                ? removeFromWishlistBE({ productId: item._id })
                : dispatch(removeFromLocalWishlist(item._id));
        } else {
            userId
                ? addToWishlistBE({ productId: item._id })
                : dispatch(addToLocalWishlist(item));
        }
    };

    return {
        isInWishlist, handleToggleWishlist
    }
}