import './index.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    // context wrap here if needed
    <Router>
      <div className = "App">
        <NavBar />
        <Routes>
          <Route path = "/" element = { <HomeView />} />


        </Routes>

      </div>
    </Router>

  );
};

export default App;
