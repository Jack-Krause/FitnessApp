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
            <main>
                <h1>Sign In</h1>
            </main>
        </div>
    );
};

export default SignIn;