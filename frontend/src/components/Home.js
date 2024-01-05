import { React, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  // User Interface
  return (
    <div>
      <main>
        <Carousel style={{ minHeight: "400px" }}>
          {/* General Workout Carousel Item */}
          <Carousel.Item interval={10000} className="bg-primary">
            <div className="d-flex flex-column align-items-center justify-content-center h-300">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="150"
                  length="auto"
                  fill="white"
                  className="mt-4 mb-4 bi bi-activity"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-white mt-2 mb-4">Browse Exercises</h2>
                {/* Route users to general workout component on click */}
                <Link to="/workout">
                  <Button variant="secondary" className="mb-4">Enter</Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
          {/* View Profile Carousel Item */}
          <Carousel.Item interval={10000} className="bg-secondary">
            <div className="d-flex flex-column align-items-center justify-content-center h-300">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="150"
                  length="auto"
                  fill="white"
                  className="mt-4 mb-4 bi bi-bar-chart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-white mt-2 mb-4">View Profile</h2>
                {/* Route users to their profile on click */}
                <Link to="/profile">
                  <Button variant="primary" className="mb-4">Enter</Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={10000} className="bg-warning">
            <div className="d-flex flex-column align-items-center justify-content-center h-300">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="150"
                  length="auto"
                  fill="black"
                  className="mt-4 mb-4 bi bi-brush"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-black mt-2 mb-4">Post a Workout</h2>
                {/* Route users to their profile on click */}
                <Link to="/createworkout">
                  <Button variant="secondary" className="mb-4 text-white">Enter</Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
