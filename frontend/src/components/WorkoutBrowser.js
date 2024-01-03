import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";
import { getExercise } from "../api/requestMethods";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const WorkoutBrowser = () => {
  const { userEmail } = useAuthenticatedView();

  // usestate for mapping the JSONArray of exercises pulled from public API
  const [queriedExercises, setQueriedExercises] = useState([]);
  // entered input for dynamically changing the style and sending to the API
  const [inputExercise, setInputExercise] = useState("");
  // changed to "No Input Provided if user has entered no input"
  const [searchCategory, setSearchCategory] = useState("No Input Provided");

  // dynamically change the style dependent on input or lack therof
  const handleInputChange = (event) => {
    var tempData = event.target.value;
    setInputExercise(tempData);
    if (tempData) {
      setSearchCategory("Search for Exercise");
    } else {
      setSearchCategory("No Input Provided");
    }
  };

  // send to api service class
  const handleSearch = (event) => {
    event.preventDefault();

    if (searchCategory === "Search for Exercise" && inputExercise) {
      getExercise("exercise", inputExercise.trim())
        .then((response) => {
          setQueriedExercises(response.data.suggestions);
          console.log("response:", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // send to backend to save a specific exercise to a user's library
  const handleLibraryClick = (event) => {
    event.preventDefault();

    const idx = event.target.name;
    const exerciseToSend = queriedExercises[idx];
    // parse relevant data and call api helper class method
    const exerciseName = exerciseToSend.data.name;
    const exerciseCategory = exerciseToSend.data.category;

    console.log("cat", exerciseCategory);
    console.log(exerciseName);
    
  };

  return (
    <div>
      <main>
        <Container fluid className="p-5 bg-black">
          <Row className="align-items-center justify-content-center mt-4">
            <Col xs={10} md={4} className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="150"
                length="auto"
                fill="white"
                className="mt-4 mb-4 bi bi-backpack"
                viewBox="0 0 16 16"
              >
                <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                <path
                  fillRule="evenodd"
                  d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6.002 6.002 0 0 1 4-5.659M7 2v.083a6.04 6.04 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"
                />
              </svg>
            </Col>
            <Col xs={10} md={10} lg={10} className="text-center">
              <h1 className="mt-4 mb-4 text-light text-general">
                Browse Exercises
              </h1>
            </Col>
          </Row>
          {/* end row 1 */}
          <Row className="justify-content-center">
            <Col xs={10} md={8} lg={6}>
              <Form className="text-center" onSubmit={handleSearch}>
                <Form.Group
                  className="mb-3 text-light"
                  controlId="formNameSearch"
                >
                  <Form.Label>Search for an exercise</Form.Label>
                  <Form.Control
                    className="m-3"
                    name="inputExercise"
                    type="text"
                    placeholder="Enter exercise name"
                    value={inputExercise}
                    onChange={handleInputChange}
                  />
                  <Form.Text className="text-info">
                    For example, "bench press".
                  </Form.Text>
                </Form.Group>
                <div className="text-center">
                  <Button
                    variant={
                      searchCategory === "Search for Exercise"
                        ? "primary"
                        : "danger"
                    }
                    type="submit"
                  >
                    {searchCategory}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
          {/* end row 2 */}
        </Container>
        <Container fluid className="p-5 bg-light">
          <Row className="align-items-center justify-content-center mt-4">
            <Col xs={11} md={5} lg={5}>
              <h2 className="mt-2 mb-4 text-dark text-40">Search Results:</h2>
            </Col>
            <Col xs={11} md={5} lg={5}>
              <p className="mt-2 mb-4 text-dark text-20">
                Hit the Add button to save an exercise to your library!
              </p>
            </Col>
          </Row>
          {/* end row 1 container 2 */}
          <Row className="align-items-center justify-content-center mt-4">
            <ListGroup>
              {queriedExercises.map((exercise, index) => (
                <ListGroup.Item key={index}>
                  <p>{exercise.data.name}</p>
                  <Button onClick={handleLibraryClick} name = {index}>Add To Library</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default WorkoutBrowser;
