import { createContext, useContext } from "react";
import Cookies from "js-cookie";
const AuthContext = createContext<{ isLoggedIn: boolean, userId: string | null }>({ isLoggedIn: false, userId: "" });

const AuthContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const isLoggedIn = Cookies.get("token") ? true : false;
    const userId = Cookies.get("userId") || "";
    return <AuthContext.Provider value={{ isLoggedIn, userId }}>
        {children}
    </AuthContext.Provider>
}
const useAuthContext = () => {
    return useContext(AuthContext);
}

export { AuthContextProvider, useAuthContext };