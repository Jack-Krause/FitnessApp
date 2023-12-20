import './index.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import views:
import NavHead from "./components/NavHead";

const App = () => {
  return (
    // context wrap here if needed
    <Router>
      <div className = "App">
        <NavHead />
        {/* <Routes>
          <Route path = "/" element = { <HomeView />} />


        </Routes> */}

      </div>
    </Router>

  );
};

export default App;
