import React, { useContext } from "react";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";

const SignIn = () => {
    const {
        userEmail,
        setUserEmail,
        userAuthenticated,
        setUserAuthenticated
    } = useAuthenticatedView();

    const authInput = (event) => {
        event.preventDefault();
    }

    return (
        <div>
    
        </div>
    );
};

export default SignIn;