
import AuthLayout from "../layout/AuthLayout"
import MainLayout from "../layout/MainLayout"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Cart from "../pages/Cart"
import { Home } from "../pages/Home"
import ForgotPassword from "../pages/auth/ForgotPassword"
import ResetPassword from "../pages/auth/ResetPassword"
import NotFound from "../pages/NotFound"
import AdminLayout from "../layout/AdminLayout"
import Products from "../pages/admin/Products"
import ProtectedRoute from "./ProtectedRoute"
import PublicRoute from "./PublicRoute"
import Wishlist from "../pages/Wishlist"

export const useRouter = () =>
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "cart",
                    element: <ProtectedRoute><Cart /></ProtectedRoute>
                },
                {
                    path: "wishlist",
                    element: <Wishlist />
                },
            ]

        },
        {
            path: "/admin",
            element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
            children: [
                {
                    index: true,
                    element: <Products />
                },
            ]

        },
        {
            path: "/auth",
            element: <PublicRoute><AuthLayout /></PublicRoute>,
            children: [
                {
                    path: "register",
                    element: <Register />
                },
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "forgot-password",
                    element: <ForgotPassword />
                },
                {
                    path: "reset-password",
                    element: <ResetPassword />
                },
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
