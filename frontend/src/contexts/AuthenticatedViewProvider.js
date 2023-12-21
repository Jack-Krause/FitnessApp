import React, { createContext, useState, useContext, useEffect } from "react";

const AuthenticatedViewContext = createContext();

// Context that allows us to wall the rest of the app from the user
// until sign in is completed
export const AuthenticatedViewProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userAuthenticated, setUserAuthenticated] = useState(false);



    return (
        <AuthenticatedViewContext.Provider value = {{
            userEmail,
            setUserEmail,
            userAuthenticated,
            setUserAuthenticated
        }}>
            { children }
        </AuthenticatedViewContext.Provider>
    );
};

export const useAuthenticatedView = () => {
    return useContext(AuthenticatedViewContext);
}
