import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
const PublicRoute = ({ children }: { children: ReactNode }) => {
    const {isLoggedIn} = useAuthContext();
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    return <>{children}</>
}
export default PublicRoute;
