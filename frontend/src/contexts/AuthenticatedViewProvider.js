import React, { createContext, useState, useContext, useEffect } from "react";

const AuthenticatedViewContext = createContext();

// Context that allows us to wall the rest of the app from the user
// until sign in is completed
export const AuthenticatedViewProvider = ({ children }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userAuthenticated, setUserAuthenticated] = useState(false);

    const setUserStatus = (status) => {
        setUserAuthenticated(status);
        // On sign in, save the users status to prevent refresh clearing
        if (status) {
            localStorage.setItem("userAuthenticated", "true");
            localStorage.setItem("userEmail", userEmail);
        // on sign out
        } else {
            localStorage.removeItem("userAuthenticated");
            localStorage.removeItem("userEmail");
            setUserEmail("");
        }

    };

    useEffect(() => {
        
        const storedUserAuthStatus = localStorage.getItem("userAuthenticated");
        if (storedUserAuthStatus === "true") {
            setUserAuthenticated(true);
            setUserEmail(localStorage.getItem("userEmail"));
        }

    }, []);


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
