import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import views:
import NavHead from "./components/NavHead";
import {
  AuthenticatedViewProvider,
  useAuthenticatedView,
} from "./contexts/AuthenticatedViewProvider";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UserProfile from "./components/UserProfile";
import Workout from "./components/Workout";
import SignInNavHead from "./components/SignInNavHead";

// Authenticated Route is entry point - user either to sign in or home page
const App = () => {
  const { userAuthenticated } = useAuthenticatedView();

  return (
    <Router>
      <div className="App">
        {userAuthenticated ? <NavHead /> : <SignInNavHead />}

        <Routes>
          <Route path="/*" element={<AuthenticatedRoute />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
