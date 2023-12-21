import "./index.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import views:
import NavHead from "./components/NavHead";
import { AuthenticatedViewProvider } from "./contexts/AuthenticatedViewProvider";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

const App = () => {
  return (
    <AuthenticatedViewProvider>
      <Router>
        <div className="App">
          {/* <NavHead /> */}
          <Routes>
            <Route path="/" element={<AuthenticatedRoute />} />
          </Routes>
        </div>
      </Router>
    </AuthenticatedViewProvider>
  );
};

export default App;
