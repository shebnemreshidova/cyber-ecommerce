import type { ReactNode } from "react"
import { useAuthGuard } from "../hooks/useAuthGuard"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const guard = useAuthGuard();

    if (guard.status === "loading") return null;

    if (guard.status === "redirect") {
        return <Navigate to={guard.to} />;
    }

    return <>{children}</>;
};


export default ProtectedRoute;