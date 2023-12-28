import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";

function NavHead() {
  const nav = useNavigate();

  const { setUserAuthenticated } = useAuthenticatedView();

  const signOut = (event) => {
    event.preventDefault();
    setUserAuthenticated(false);
    nav("/");
    console.log("SignOut");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Fitness Tracker By Jack
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/workout">
              Workout
            </Nav.Link>
            <NavDropdown title="See More:" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <Button variant="secondary" onClick={signOut}>
                  Sign Out
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHead;
