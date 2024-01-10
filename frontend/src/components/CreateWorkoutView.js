import React, { useState, useContext } from "react";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import LibraryListView from "./LibraryListView";
import WorkoutListView from "./WorkoutListView";

const CreateWorkoutView = () => {
  const { userEmail } = useAuthenticatedView();

  // useState for library of exercises specific to this user
  const [queriedExercises, setQueriedExercises] = useState([]);

  const [selectedTab, setSelectedTab] = useState("tab1");

  // handler for button to search and retrieve user library of exercises
  const getUserExercises = (event) => {
    event.preventDefault();

    const tabName = event.target.name;

    setSelectedTab(tabName);
    // call api helper request method for exercise libary
  };

  return (
    <div>
      <main>
        <Container className="align-items-center justify-content-center mt-4">
          <Row className="align-items-center justify-content-center mt-4">
            <Col xs={10} md={10} lg={10} className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="150"
                length="auto"
                fill="white"
                className="mt-4 mb-4 bi bi-box-seam"
                viewBox="0 0 16 16"
              >
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
              </svg>
            </Col>
            <Col xs={10} md={10} lg={10} className="text-center">
              <h1 className="mt-4 mb-4 text-light text-general">
                Build Your Workout
              </h1>
            </Col>
          </Row>
        </Container>
        <Nav fill variant="pills" defaultActiveKey="/createworkout">
          <Nav.Item>
            <Button
              name="tab1"
              onClick={getUserExercises}
              className="p-3 text-20"
              variant={selectedTab === "tab1" ? "warning" : "secondary"}
            >
              Library
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              name="tab2"
              onClick={getUserExercises}
              className="p-3 text-20"
              variant={selectedTab === "tab2" ? "warning" : "secondary"}
            >
              Workout
            </Button>
          </Nav.Item>
        </Nav>
        {selectedTab === "tab1" && <LibraryListView />}
        {selectedTab === "tab2" && <WorkoutListView />}
      </main>
    </div>
  );
};

export default CreateWorkoutView;
