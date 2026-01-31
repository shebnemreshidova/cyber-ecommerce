import { useDispatch, useSelector } from "react-redux";
import { useAuthContext } from "../context/authContext";
import { useGetWishlistQuery, useToggleWishlistMutation,  } from "../redux/services/productApi";
import type { Product } from "../redux/services/adminApi";
import { addToLocalWishlist, removeFromLocalWishlist, selectLocalWishlist } from "../redux/features/productSlice";


import { useState, useEffect } from "react";

export const useWishlist = () => {
    const dispatch = useDispatch();
    const { userId } = useAuthContext();

    const localWishlist = useSelector(selectLocalWishlist);
    const { data: backendWishlist = [] } = useGetWishlistQuery(undefined, {
        skip: !userId,
    });

   
    const [optimisticWishlist, setOptimisticWishlist] = useState<Product[]>([]);

   
    useEffect(() => {
        setOptimisticWishlist(userId ? backendWishlist : localWishlist);
    }, [backendWishlist, localWishlist, userId]);

    const wishlist = optimisticWishlist;

    const [toggleWishlist] = useToggleWishlistMutation();

    const isInWishlist = (productId: string) =>
        wishlist.some((item) => item._id === productId);

    const handleToggleWishlist = async (product: Product) => {
        const productId = product._id;
        const currentlyInWishlist = isInWishlist(productId);

     
        setOptimisticWishlist((prev) =>
            currentlyInWishlist
                ? prev.filter((item) => item._id !== productId)
                : [...prev, product]
        );

      
        if (!userId) {
            currentlyInWishlist
                ? dispatch(removeFromLocalWishlist(productId))
                : dispatch(addToLocalWishlist(product));
            return;
        }

        try {
            await toggleWishlist({ productId }).unwrap();
          
        } catch (error) {

            setOptimisticWishlist((prev) =>
                currentlyInWishlist
                    ? [...prev, product]
                    : prev.filter((item) => item._id !== productId)
            );
        }
    };

    return {
        isInWishlist,
        handleToggleWishlist,
    };
};
