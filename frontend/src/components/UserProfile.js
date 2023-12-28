import React, { useContext } from "react";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";



const UserProfile = () => {

  const { userEmail } = useAuthenticatedView();

  console.log("userEmail", userEmail);

  return (
  <div></div>
  );
};

export default UserProfile;
