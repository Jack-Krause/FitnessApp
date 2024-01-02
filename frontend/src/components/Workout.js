import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";
import { getExercise } from "../api/requestMethods";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Workout = () => {
  const { userEmail } = useAuthenticatedView();

  const [inputExercise, setInputExercise] = useState("");
  const [inputMuscle, setInputMuscle] = useState("");

  // state to dynamically search for the latest input by the user
  const [searchCategory, setSearchCategory] = useState("No Input Provided");
  // method for changing search subject
  const handleInputChange = (event) => {
    if (event.target.name === "inputExercise") {
      setSearchCategory("Search by Exercise");
      setInputExercise(event.target.value);
    } else if (inputExercise === "" && inputMuscle === "") {
      setSearchCategory("No Input Provided")
    } else {
      setSearchCategory("Search by Muscle");
      setInputMuscle(event.target.value);
    }

  };

  // send to api service class
  const handleSearch = (event) => {
    event.preventDefault();
    if (inputExercise) {
      console.log();
    }
  };

  return (
    <div>
      <main>
        <Container fluid className="p-3 bg-black">
          <Row className="align-items-center justify-content-center mt-4">
            <Col xs={12} md={4} className="text-center">
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
            <Col xs={12} md={4} className="text-center">
              <h1 className="mt-4 mb-4 text-light text-general">
                Browse Exercises
              </h1>
            </Col>
          </Row>
          {/* end row 1 */}
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Form className="text-center">
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
                {/* end of form control 1 */}
                <Form.Group
                  className="mb-3 text-light"
                  controlId="formMuscleSearch"
                >
                  <Form.Label>Search by muscle group</Form.Label>
                  <Form.Control
                    className="m-3"
                    name="inputMuscle"
                    type="text"
                    placeholder="Enter muscle group"
                    value={inputMuscle}
                    onChange={handleInputChange}
                  />
                  <Form.Text className="text-info">
                    Try searching "biceps".
                  </Form.Text>
                </Form.Group>
                <div className="text-center">
                  <Button
                    variant={
                      searchCategory === "Search by Muscle"
                      ? "warning"
                      : searchCategory === "Search by Exercise"
                      ? "danger"
                      : "primary"
                    }
                    type="submit"
                  >
                    {" "}
                    {searchCategory}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Workout;
