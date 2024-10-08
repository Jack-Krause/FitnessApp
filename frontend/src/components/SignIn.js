import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";
import { signIn, register } from "../api/requestMethods";

// UI/methods for user accessing the rest of the app
const SignIn = () => {
  // Will be set upon validation from backend | context methods/vars
  const { userEmail, setUserEmail, userAuthenticated, setUserAuthenticated } =
    useAuthenticatedView();

  // Temporary state for sending to the backend and editing my user | usestate methods/vars
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  // message to show user on response from backend | usestate methods/vars
  const [postStatusMessage, setPostStatusMessage] = useState("");

  // Populate info to be sent to backend
  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // Send to backend sign in or registration request depending on button pressed
  const handleUserFormSubmit = (event) => {
    event.preventDefault();

    const intent = event.nativeEvent.submitter.name;

    if (intent === "signIn") {
      if (validateSignIn) {
        handleSignIn();
      } else {
        setPostStatusMessage(
          "Empty user information. Make sure to include email and password"
        );
      }
    } else if (intent === "register") {
      if (validateReg) {
        handleRegistration();
      } else {
        setPostStatusMessage(
          "Empty user information. Make sure fill all boxes."
        );
      }
    }
  };

  // Send user info to api service (for POST request)
  const handleSignIn = async () => {
    console.log(userData.email, userData.password);

    signIn(userData.email, userData.password)
      .then((response) => {
        console.log("Sign-in success:", response.data);

        setPostStatusMessage(
          "Success signing in! You are being redirected to the rest of the app."
        );
        // TODO: Move to the rest of the app
        // Set user sign in info
        setTimeout(function () {

          console.log(userData.email);
          setUserAuthenticated(true);
          setUserEmail(userData.email);
          localStorage.setItem("userEmail", userData.email);
          
        }, 3000);
        clearTimeout();
      })
      .catch((error) => {
        console.error("Sign in error:", error);

        setPostStatusMessage(
          "Error signing in. Double check your info is correct."
        );
      });
  };

  // Send user info to api service (for POST request)
  const handleRegistration = () => {
    console.log(userData.email, userData.password, userData.password);

    register(userData.email, userData.password, userData.name)
      .then((response) => {
        console.log("Sign-in success:", response.data);

        setPostStatusMessage(
          "Success registering! You are being redirected to the rest of the app."
        );
        // TODO: Move to the rest of the app
        // Set user sign in info
        setTimeout(function () {
          console.log(userData.email);
          // call context method for browser to "persistently" retain the user's email/status
          setUserAuthenticated(true);
          setUserEmail(userData.email);
          localStorage.setItem("userEmail", userData.email);

          
        }, 3000);
        clearTimeout();
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setPostStatusMessage(
          "Error Registering. Check that all fields are filled out."
        );
      });
  };

  // Simple form validation for now - for registration
  const validateReg = () => {
    return userData.email && userData.password && userData.name;
  };

  // Simple form validation - for sign in
  const validateSignIn = () => {
    return userData.email && userData.password;
  };

  return (
    <div className = "bg-dark">
      <main>
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4 text-center text-light pt-5 gen-bold">
              Welcome to the Fitness Tracker!
            </h1>
            <p className="lead text-center text-secondary gen-bold">
              Enter existing E-mail and Password
              <br />
              or register a new account
            </p>
          </div>
          <div className="row justify-content-center center">
            <div className="col-md-8">
              <h2 className="display-4 text-center text-light">
                Sign In or Register:
              </h2>
              <form onSubmit={handleUserFormSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label text-warning">
                    E-mail
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleFormChange}
                    placeholder="user@email.com"
                    className="form-control mb-3"
                  />
                  <label htmlFor="password" className="form-label text-warning">
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleFormChange}
                    placeholder="must be unique"
                    className="form-control mb-3"
                  />
                  <label htmlFor="name" className="form-label text-warning">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleFormChange}
                    placeholder="enter first, last or both names"
                    className="form-control mb-3"
                  />
                  <button type="submit" className="p-3 m-2" name="signIn">
                    Sign In
                  </button>
                  <button type="submit" className="p-3 m-2" name="register">
                    Register
                  </button>
                </div>
              </form>
              {postStatusMessage && (
                <div
                  className={`alert ${
                    postStatusMessage.toLowerCase().includes("success")
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {postStatusMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <p>Footer Content</p>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
