import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


const WorkoutListView = () => {
  return (
    <div>
      <Container className="align-items-center justify-content-center mt-4 bg-warning">
        <Row className="align-items-center justify-content-center mt-4">
          <p className="text-30 mt-4 mb-4 text-center">Custom Workout:</p>
        </Row>
      </Container>
      <Row className="align-items-center justify-content-center">
        <Button className="p-3 text-20" variant="dark">
          Your Workout here
        </Button>
      </Row>
    </div>
  );
};

export default WorkoutListView;
