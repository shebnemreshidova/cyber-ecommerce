import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
        <Outlet/>
    </div>
  )
}

export default AuthLayout