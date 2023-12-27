import React, { useContext } from "react";
import { Router, Routes, Navigate, Route } from "react-router-dom";
import { AuthenticatedViewProvider } from "../contexts/AuthenticatedViewProvider";
import NavHead from "./NavHead";
import SignInNavHead from "./SignInNavHead";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";
import SignIn from "./SignIn";
import Home from "./Home";

// In instances of browser refresh or inital loading of the app - user must sign in
// otherwise, user can continue to home page
const AuthenticatedRoute = () => {
  const { userEmail, setUserEmail, userAuthenticated, setUserAuthenticated } =
    useAuthenticatedView();

  return (
    <Routes>
      <Route
        path="/"
        element={
          userAuthenticated ? (
            <>
              <NavHead />
              <Home />
            </>
          ) : (
            <>
                <SignInNavHead />
                <SignIn />
            </>
          )
        }
      />
      {/* Removed route for sign in */}
    </Routes>
  );
};

export default AuthenticatedRoute;
