
import MainLayout from "../layout/MainLayout"
import Cart from "../pages/Cart"
import { Home } from "../pages/Home"

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
                    path: "/cart",
                    element: <Cart />
                }
            ]

        }
    ]
