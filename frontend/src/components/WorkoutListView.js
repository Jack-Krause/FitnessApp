import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const WorkoutListView = () => {
  const [inputWorkoutName, setInputWorkoutName] = useState("");

  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleInputChange = (event) => {
    var tempData = event.target.value;
    setInputWorkoutName(tempData);
    
  }

  const handleWorkoutOptions = (event) => {
    event.preventDefault();

    const tabName = event.target.name;

    setSelectedTab(tabName);
  }


  return (
    <div>
      <Container className="align-items-center justify-content-center mt-4 bg-warning">
        <Row className="align-items-center justify-content-center mt-4">
          <p className="text-30 mt-4 mb-4 text-center">Custom Workout:</p>
          <p className="text-20 text-center">
            Edit an existing workout, or enter a name to create a new one.
          </p>
        </Row>
      </Container>
      <Row className="align-items-center justify-content-center mt-4">
        <Form className="text-center">
          <Form.Group className="mb-3" controlId="formWorkoutSearch">
            <Form.Label className="text-light">Enter workout name</Form.Label>
            <Row className="justify-content-center">
              <Col xs={8} sm={6} md={6}>
                <Form.Control
                  className="m-3"
                  name="inputWorkoutName"
                  type="text"
                  placeholder="name"
                  value={inputWorkoutName}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Row>
      <Nav fill variant="pills" defaultActiveKey="/makeworkout" className="justify-content-center">
        <Nav.Item className="mx-2">
          <Button
            name="tab1"
            onClick={handleWorkoutOptions}
            className="p-3 text-20"
            variant={selectedTab === "tab1" ? "warning" : "secondary"}
          >
            Create New
          </Button>
        </Nav.Item>
        <Nav.Item className="mx-2">
          <Button
            name="tab2"
            onClick={handleWorkoutOptions}
            className="p-3 text-20"
            variant={selectedTab === "tab2" ? "warning" : "secondary"}
          >
            Edit Existing
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default WorkoutListView;
