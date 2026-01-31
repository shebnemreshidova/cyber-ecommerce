import { lazy, Suspense } from 'react'
import AuthLayout from "../layout/AuthLayout"
import MainLayout from "../layout/MainLayout"
import ProtectedRoute from "./ProtectedRoute"
import PublicRoute from "./PublicRoute"


import NotFound from '../pages/NotFound'
import AdminLayout from '../layout/AdminLayout'
import { Home } from '../pages/Home'
import { PageLoader } from '../components/common/PageLoader'


const Login = lazy(() => import("../pages/auth/Login"))
const Register = lazy(() => import("../pages/auth/Register"))
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"))
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"))
const Cart = lazy(() => import("../pages/Cart"))
const Wishlist = lazy(() => import("../pages/Wishlist"))
const Products = lazy(() => import("../pages/admin/Products"))

export const routerConfig = [
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
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    </Suspense>
                )
            },
            {
                path: "wishlist",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <Wishlist />
                    </Suspense>
                )
            },
        ]
    },
    {
        path: "/admin",
        element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
        children: [
            {
                index: true,
                element: <Suspense fallback={<PageLoader />}><Products /></Suspense>
            },
        ]

    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "register",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    </Suspense>
                )
            },
            {
                path: "login",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    </Suspense>
                )
            },
            {
                path: "forgot-password",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <PublicRoute>
                            <ForgotPassword />
                        </PublicRoute>
                    </Suspense>
                )
            },
            {
                path: "reset-password",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <PublicRoute>
                            <ResetPassword />
                        </PublicRoute>
                    </Suspense>
                )
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]