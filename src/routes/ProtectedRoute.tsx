import type { ReactNode } from "react";
import { useAuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const {isLoggedIn} = useAuthContext();
    if (!isLoggedIn) {
        return <Navigate to="/auth/login" />;
    }
    return <>{children}</>;
};


export default ProtectedRoute;