import React, { useContext } from "react";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap";

const UserProfile = () => {
  const { userEmail } = useAuthenticatedView();

  return (
    <div>
      <main>
        <Container fluid className="p-5 bg-black">
          <Row className="align-items-center justify-content-center mt-4">
            <Col xs={10} md={10} lg={10} className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="150"
                length="auto"
                fill="white"
                className="mt-4 mb-4 bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </Col>
            <Col xs={10} md={10} lg={10} className="text-center">
              <h1 className="mt-4 mb-4 text-light text-general">
                User Profile
              </h1>
            </Col>
          </Row>
{/* end row 1 */}
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <h2 className="text-40 text-light mt-4 mb-4">{userEmail}'s profile</h2>
            </Col>
          </Row>
{/* end row 2 */}
        </Container>
{/* end container 1 */}
        <Container fluid className="p-3 bg-warning">
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center">
              <p className=" text-30 text-dark ">Workout stats:</p>
            </Col>
          </Row>
{/* end row 3 */}
        </Container>
{/* end container 2 */}
      </main>
    </div>
  );
};

export default UserProfile;
