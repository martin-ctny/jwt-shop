import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        window.location.href = "/"
    }
    
    return (
        <UserContext.Provider value={{ user, setUser, signout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };