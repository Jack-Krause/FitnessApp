import React, { createContext, useState, useContext, useEffect } from "react";

const AuthenticatedViewContext = createContext();

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
