import { type ReactNode } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }: { children: ReactNode }) => {
    const {isLoggedIn} = useAuthContext();
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    return <>{children}</>
}
export default PublicRoute;
