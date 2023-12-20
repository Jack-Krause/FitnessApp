import './index.css';
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    //context wrap
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
