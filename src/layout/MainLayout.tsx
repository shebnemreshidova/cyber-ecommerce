import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

const MainLayout = () => {
    return (
        <div>
           <div className="px-10 w-[90%] mx-auto">
             <Header />
           </div>
            <Outlet />
        </div>
    )
}

export default MainLayout