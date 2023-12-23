import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";

// UI/methods for user accessing the rest of the app
const SignIn = () => {

	// Will be set upon validation from backend | context methods/vars
  const { userEmail, setUserEmail, userAuthenticated, setUserAuthenticated } =
    useAuthenticatedView();

	// Temporary state for sending to the backend and editing my user | usestate methods/vars
	const [ userData, setUserData ] = useState( {
		email: "",
		password: "",
		name: "",
	});

	// message to show user on response from backend | usestate methods/vars
	const { postStatusMessage, setPostStatusMessage } = useState("");


	// Populate info to be sent to backend
  const handleFormChange = (event) => {
    event.preventDefault();
		const { name, value } = event.target;
		setUserData({ ...userData, [name]: value});
  };

	// Send to backend sign in or registration request depending on button pressed
  const handleUserFormSubmit = (event) => {
		event.preventDefault();

		const intent = event.nativeEvent.submitter.name;

		if (intent === "signIn") {
			handleSignIn();
		} else if (intent === "register") {
			handleRegistration();
		}

	};

	// Send request for sign in (GET)
	const handleSignIn = () => {

	};

	// Send request for registration (POST)
	const handleRegistration = () => {

	};

  return (
    <div>
      <main>
        <div className="container mt-5">
          <div className="jumbotron">
            <h1 className="display-4 text-center text-primary">
              Welcome to the Fitness Tracker!
            </h1>
            <p className="lead text-center">
              Enter existing E-mail and Password
              <br />
              Or, register a new account
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="display-4 text-center text-primary">
                Sign In or Register:
              </h2>
              <form onSubmit={handleUserFormSubmit}>
                <div className="form-group">
                  <label htmlFor="id" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    // value={ }
                    onChange={handleFormChange}
                    placeholder="user@email.com"
                    className="form-control mb-3"
                  />
                  <label htmlFor="title" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    // value={productData.title}
                    onChange={handleFormChange}
                    placeholder="must be unique"
                    className="form-control mb-3"
                  />
                  <label htmlFor="price" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    // value={productData.price}
                    onChange={handleFormChange}
                    placeholder="enter first, last or both names"
                    className="form-control mb-3"
                  />
                  <button type="submit" className="p-3 m-2" name = "signIn">
                    Sign In
                  </button>
                  <button type="submit" className="p-3 m-2" name = "register">
                    Register
                  </button>
                </div>
              </form>
              {postStatusMessage && (
                <div
                  className={`alert ${
                    postStatusMessage.includes("success")
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
