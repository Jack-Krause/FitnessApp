import React, { useContext } from "react";
import {  Router, Routes, Navigate, Route } from "react-router-dom";
import { AuthenticatedViewProvider } from "../contexts/AuthenticatedViewProvider";
import NavHead from "./NavHead";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";

// In instances of browser refresh or inital loading of the app - user must sign in
// otherwise, user can continue to home page
const AuthenticatedRoute = () => {
    const {
        userEmail,
        setUserEmail,
        userAuthenticated,
        setUserAuthenticated
    } = useAuthenticatedView();

    return (
        <Routes>
            <Route
                to = "/"
                element = { userAuthenticated ? <Home /> : <Navigate to="/signin" /> }
            />
            <Route to = "/signin" element = { <SignIn /> } />
        </Routes>
    );
};

export default AuthenticatedRoute;

