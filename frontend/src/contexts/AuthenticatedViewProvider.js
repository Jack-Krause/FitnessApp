import React, { createContext, useState, useContext, useEffect } from "react";

const AuthenticatedViewContext = createContext();

// Context that allows us to wall the rest of the app from the user
// until sign in is completed
export const AuthenticatedViewProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || "");
    const [userAuthenticated, setUserAuthenticated] = useState(false);

    useEffect(() => {
        const storedUserEmail = localStorage.getItem("userEmail");
        const storedUserAuthStatus = localStorage.getItem("userAuthenticated");
        
        if (storedUserAuthStatus === "true" && storedUserEmail) {
            setUserAuthenticated(true);
            setUserEmail(storedUserEmail);
        }
    }, []);

    const setUserStatus = (status) => {
        setUserAuthenticated(status);

        // On sign in, save the users status to prevent refresh clearing
        if (status) {
            localStorage.setItem("userAuthenticated", "true");
        // on sign out
        } else {
            localStorage.removeItem("userAuthenticated");
            localStorage.removeItem("userEmail");
            setUserEmail("");
        }

    };
    


    return (
        <AuthenticatedViewContext.Provider value = {{
            userEmail,
            setUserEmail,
            userAuthenticated,
            setUserAuthenticated: setUserStatus
        }}>
            { children }
        </AuthenticatedViewContext.Provider>
    );
};

export const useAuthenticatedView = () => {
    return useContext(AuthenticatedViewContext);
};
