import { React, useState } from "react";
import { Carousel, Button } from "react-bootstrap";

const Home = () => {
    // useState fields for selecting a certain option on the carousel. useful if more options added
    const [carouselIndex, setCarouselIndex] = useState(0);
    
    // track current item of the carousel
    const handleCarouselSelect = (selectedCarousel) => {
        setCarouselIndex(selectedCarousel);
    };

    // handle user selection from the carousel
    const handleButtonClick = (event) => {
        event.preventDefault();
        if (carouselIndex === 0) {
            openWorkoutView();
        } else if (carouselIndex === 1) {
            openProfileView();
        }
    };

    // render view for manual workout tracking
    const openWorkoutView = () => {
        console.log("Open Workout");
    }

    // render view for user's profile
    const openProfileView = () => {
        console.log("Open Profile");
    }

// User Interface
  return (
    <div>
      <main>
        <Carousel activeIndex={carouselIndex} onSelect={handleCarouselSelect} className="bg-dark" style={{ minHeight: "400px" }}>
          {/* General Workout Carousel Item */}
          <Carousel.Item interval={10000}>
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
                <h2 className="text-white mt-2 mb-4">Quick Workout?</h2>
                <Button variant="primary" onClick={handleButtonClick}>Enter</Button>
              </div>
            </div>
          </Carousel.Item>
          {/* View Profile Carousel Item */}
          <Carousel.Item interval={10000}>
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
                <Button variant="primary" onClick={handleButtonClick}>Enter</Button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
