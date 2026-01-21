import { createContext, useContext } from "react";
import Cookies from "js-cookie";
const AuthContext = createContext<boolean>(false);

const AuthContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const isLoggedIn = Cookies.get("token") ? true : false;
    return <AuthContext.Provider value={isLoggedIn}>
        {children}
    </AuthContext.Provider>
}
const useAuthContext = () => {
    return useContext(AuthContext);
}

export { AuthContextProvider, useAuthContext };