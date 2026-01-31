import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const {isLoggedIn} = useAuthContext();
    if (!isLoggedIn) {
        return <Navigate to="/auth/login" />;
    }
    return <>{children}</>;
};


export default ProtectedRoute;