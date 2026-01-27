import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
type AuthContextType = {
    isLoggedIn: boolean;
    userId: string | null;
    login: (id: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    userId: null,
    login: () => { },
    logout: () => { },
});
const AuthContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const isLoggedIn = Cookies.get("token") ? true : false;

    const [userId, setUserId] = useState<string | null>(
        Cookies.get("userId") || null
    );

    const navigate = useNavigate();

    const login = (id: string) => {
        setUserId(id);
    };
    const logout = () => {
        setUserId(null);
        Cookies.remove("token");
        Cookies.remove("userId");
        navigate("/");


    };
    return <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
        {children}
    </AuthContext.Provider>
}
const useAuthContext = () => {
    return useContext(AuthContext);
}

export { AuthContextProvider, useAuthContext };