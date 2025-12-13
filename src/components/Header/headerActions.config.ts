import { FiHeart } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";

export const HEADER_ACTIONS = [
  {
    to: "/wishlist",
    icon: FiHeart,
    label: "Wishlist",
  },
  {
    to: "/cart",
    icon: BsCart2,
    label: "Cart",
  },
  {
    to: "/profile",
    icon: LuUserRound,
    label: "Profile",
    protected: true,
  },
];
