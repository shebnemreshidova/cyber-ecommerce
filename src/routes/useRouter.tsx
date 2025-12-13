import MainLayout from "../layout/mainLAyout"
import { Home } from "../pages/Home"

export const useRouter = () =>
    [
        {
            path: "/",
            element: <MainLayout />,
            children:[
                {
                    index:true,
                    element:<Home/>
                }
            ]

        }
    ]
